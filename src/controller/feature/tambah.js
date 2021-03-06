module.exports.tambah = {
    command: 'tambah',
    description: 'add new task',
    method: async context => {
        
        const text = context.event.text.slice(7,context.event.text.length)
        let profileuser = await context.getUserProfile()
        const MongoClient = require('mongodb').MongoClient;
        const uri = `mongodb+srv://adminbot:${process.env.PASSWORD_MONGO_DB}@bot-linecoba-78zrv.gcp.mongodb.net/test?retryWrites=true&w=majority`;
        const client = new MongoClient(uri, { useNewUrlParser: true });
        await client.connect(async err => {
            const collection = client.db("bot-dicoding").collection(profileuser.userId);
            let idx = await collection.count()
            console.log(idx)            
            const myobj = { id: 'ID'+(idx+1),status: true, task: text };
            console.log(myobj)            
            await collection.insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted"); 
                client.close();
            })
        });
        context.sendText('Berhasil menambahkan Task')
    }
};