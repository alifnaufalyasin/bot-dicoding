const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://adminbot:${process.env.PASSWORD_MONGO_DB}@bot-linecoba-78zrv.gcp.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

function checkdatabase(dbname) {
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
      })
}