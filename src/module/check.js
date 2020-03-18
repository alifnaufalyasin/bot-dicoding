const { LineClient } = require('messaging-api-line');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

exports.check = async () =>{
  // const uri = `mongodb+srv://adminbot:${process.env.PASSWORD_MONGO_DB}@bot-linecoba-78zrv.gcp.mongodb.net/test?retryWrites=true&w=majority`;
  // const moclient = new MongoClient(uri, { useNewUrlParser: true });
  // await moclient.connect()
  // const collection = moclient.db("bot-dicoding").collection(profileuser.userId);
  // let datacollection = await collection.find({}).toArray()
  
  const client = LineClient.connect(process.env.LINE_ACCESS_TOKEN);
  const userId = 'U29ec2e9ed584a03fdccc334571850775'
  client.pushText(userId, 'Test aja nih ehe');
}