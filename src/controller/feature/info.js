module.exports.sayhi = {
    command: ['hi','hai','halo','hello'],
    description: 'greetings',
    method: async context => {
        context.send([{
            "type": "text",
            "text": "Saya adalah bot yang dapat membantu kamu menyimpan"
        },{ 
            "type": "text",
            "text": "Untuk petunjuk penggunaan bisa dilihat di timeline kami"
        }])
    },  
};
  