module.exports.mytask = {
    command: 'mytask',
    description: 'show task of user',
    method: async context => {
        var kata = []
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
        await client.connect()
        const collection = client.db("bot-dicoding").collection(profileuser.userId);
        let datacollection = await collection.find({}).toArray()
        client.close()
        // console.log(datacollection)
        let idx = datacollection.length
        console.log(idx)
        // console.log(datacollection)
        let index = 0;                
        for (let i=0;i<idx;i++){
            if (datacollection[i].status){
                kata[index] = 
                {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                    {
                        "type": "text",
                        "text": datacollection[i].id,
                        "color": "#505050",
                        "size": "sm",
                        "flex": 1,
                        "decoration": "underline"
                    },
                    {
                        "type": "text",
                        "text": datacollection[i].task,
                        "wrap": true,
                        "color": "#505050",
                        "size": "sm",
                        "flex": 10,
                        "action": {
                            "type": "message",
                            "label": "action",
                            "text": `hapus ${datacollection[i].id}`
                        }
                    }
                    ]
                }
                index++
            }
        }
        console.log(kata);
        context.sendFlex('user task', {
            type: 'bubble',
            body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                {
                    type: 'text',
                    text: 'Your Task',
                    weight: 'bold',
                    size: 'lg',
                }],
            },
            footer: {
                type: 'box',
                layout: 'vertical',
                margin: 'lg',
                contents: kata,
            },
        });
    }
};