const { LineClient } = require('messaging-api-line');
require('dotenv').config();

exports.check = async () =>{
  const client = LineClient.connect(process.env.LINE_ACCESS_TOKEN);
  const userId = 'U29ec2e9ed584a03fdccc334571850775'
  client.pushText(userId, 'Test aja nih ehe');
}