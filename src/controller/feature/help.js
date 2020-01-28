module.exports.help = {
    command: 'help',
    description: 'information about this bot',
    method: async context => {
        console.log('info')
        context.send([{
            "type": "text",
            "text": "Saya adalah bot yang dapat membantu kamu menyimpan"
        },{ 
            "type": "text",
            "text": "Untuk petunjuk penggunaan bisa dilihat di timeline kami"
        }])
    },  
};
  