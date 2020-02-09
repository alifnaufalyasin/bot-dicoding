const controllers = require('./controller');

const App = async context => {
  let profileuser;
  await context.getUserProfile().then(profile => {
    profileuser = profile
    // {
    //   displayName: 'LINE taro',
    //   userId: USER_ID,
    //   pictureUrl: 'http://obs.line-apps.com/...',
    //   statusMessage: 'Hello, LINE!',
    // }
  })  
  const MongoClient = require('mongodb').MongoClient;
  const uri = `mongodb+srv://adminbot:${process.env.PASSWORD_MONGO_DB}@bot-linecoba-78zrv.gcp.mongodb.net/test?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try{
  if (context.event.isFollow || context.event.isJoin) {
    await client.connect(async err => {
      const database = client.db("bot-dicoding")
      database.listCollections().toArray(async function(err, colnamedb) {
        // collInfos is an array of collection info objects that look like:
        // { name: 'test', options: {} }
        console.log('collect search')        
        // console.log(colnamedb[0].name)
        let found = false;
        for(let i=0;i<colnamedb.length;i++){
          if (colnamedb[i].name == profileuser.userId) found = true; 
          //search collection of userId  
        }
        if(!found){
          await database.createCollection(profileuser.userId, function(err, res) { 
            //if not found, create collection for user
            if (err) throw err;
            console.log("Collection created!")
            client.close()
          }) 
        }else console.log('sudah ada')
      });
    })
    await context.send([{
      "type": "text",
      "text": "Terimakasih sudah mempercayakan kami untuk membantu kamu dalam menyimpan tugas2 mu"
    },{ 
      "type": "text",
      "text": `Untuk petunjuk penggunaan bisa dilihat di timeline kami atau ketik 'menu'`
    }]),
    console.log(context.event.follow)
  } else if (context.event.isUnfollow || context.event.isLeave) {
    context.send([{
        "type": "text",
        "text": "Terimakasih sudah mempercayakan kami untuk membantu kamu dalam menyimpan tugas2 mu, mohon maaf jika kami kurang membantu"
    },{ 
      "type": "text", 
      "text": "Jangan sungkan-sungkan untuk add kami kembali ya"
    }])
    console.log(context.event.unfollow);
  } else 
  if (context.event.isText) {
    await client.connect(async err => {
      const collection = client.db("bot-dicoding").collection("user");
      // perform actions on the collection object
      const query = { userId: profileuser.userId };
      await collection.find(query).toArray(async function(err, result) {
        if (err) throw err;
        if (result.length==0){
          const myobj = { nama: profileuser.displayName, userId: profileuser.userId };
          await collection.insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted"); 
            client.close();
          })
        }else{
          console.log('data sudah ada')
          client.close();
        }
      })
    });
    const param = context.event.text.split(' ');
    await controllers(param, context);
  }
  }catch(err){
    console.log('err');
    console.log(err);
  }
};  

module.exports = App;