module.exports.leave = {
    command: 'leave',
    description: 'command for bot to leave grup',
    method: async context => {
        console.log('leave')
        context.send([{
            "type": "text",
            "text": "Terimakasih sudah mempercayakan kami untuk membantu kamu dalam menyimpan tugas2 mu, mohon maaf jika kami kurang membantu"
        },{ 
          "type": "text", 
          "text": "Jangan sungkan-sungkan untuk add kami kembali ya"
        }])
        context.leave()
    },  
};
  