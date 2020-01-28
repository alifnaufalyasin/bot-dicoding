module.exports.sayhi = {
    command: 'hi',
    description: 'greetings',
    method: async context => {
        try{
            console.log('sayhii')
            const text = context.event.text.split(' ');
            await context.getUserProfile().then(profile => {
                // {
                //   displayName: 'LINE taro',
                //   userId: USER_ID,
                //   pictureUrl: 'http://obs.line-apps.com/...',
                //   statusMessage: 'Hello, LINE!',
                // }
                context.sendText(
                    `${text[0]} juga ${profile.displayName}`
                );
            });
            // const sapa = text[0].replace('/','')
            
        }catch(err){
            console.log(err);
        }
    },
};
  