module.exports.hapus = {
    command: 'hapus',
    description: 'delete task',
    method: async context => {
        let profileuser;
        const text = context.event.text.slice(7,context.event.text.length)
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
        client.connect(async (err) => {
            const collection = client.db("bot-dicoding").collection(profileuser.userId);
            const myquery = { id: text[2] };
            const newvalues = { $set: { status: false } };
            collection.updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
                console.log("1 document updated");
                client.close();
              });
        })
    },
}
  