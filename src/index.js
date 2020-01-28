const controllers = require('./controller');

const App = async context => {
  try{
  if (context.event.isFollow) {
    context.send([{
      "type": "text",
      "text": "Terimakasih sudah mempercayakan kami untuk membantu kamu dalam menyimpan tugas2 mu"
    },{ 
      "type": "text",
      "text": "Untuk petunjuk penggunaan bisa dilihat di timeline kami"
    }])
    console.log(context.event.follow);
  } else if (context.event.isUnfollow) {
    context.send([{
        "type": "text",
        "text": "Terimakasih sudah mempercayakan kami untuk membantu kamu dalam menyimpan tugas2 mu \n mohon maaf jika kami kurang membantu"
    },{ 
      "type": "text", 
      "text": "Jangan sungkan-sungkan untuk add kami kembali ya"
    }])
    console.log(context.event.unfollow);
  } else if (context.event.isText) {
    const MongoClient = require('mongodb').MongoClient;
    const uri = `mongodb+srv://adminbot:${process.env.PASSWORD_MONGO_DB}@bot-linecoba-78zrv.gcp.mongodb.net/test?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(async err => {
      const collection = client.db("bot-dicoding").collection("user");
      console.log('mongo')
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
    console.log('control')
    await controllers(param, context);
  }
  }catch(err){
    console.log('err');
    console.log(err);
  }
};  

module.exports = App;