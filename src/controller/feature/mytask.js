module.exports.mytask = {
    command: 'mytask',
    description: 'show task of user',
    method: async context => {
        let kata = []
        const program = () => {
            for (let i=0;i<3;i++){
                kata[i] = 
                {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "ID"+i,
                        "color": "#505050",
                        "size": "sm",
                        "flex": 1,
                        "decoration": "underline"
                      },
                      {
                        "type": "text",
                        "text": 'PR DAA '+i,
                        "wrap": true,
                        "color": "#505050",
                        "size": "sm",
                        "flex": 10,
                        "action": {
                            "type": "message",
                            "label": "action",
                            "text": "."
                        }
                      }
                    ]
                  }
                
            }
        }
        await program()
        await context.sendFlex('user task', {
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
                contents: kata
                    // [{
                    // type: 'text',
                    // text: 'PR DAA',
                    // wrap: true,
                    // color: '#404040', 
                    // size: 'sm',
                    // flex: 11,
                    // },
                    // {
                    // "type": "separator",
                    // "margin": "sm",
                    // "color": "#000000"
                    // },
                    // {
                    // type: 'text',
                    // text: 'PR SBD',
                    // wrap: true,
                    // color: '#404040', 
                    // size: 'sm',
                    // flex: 11,
                    // }
                    // ]
                    ,
            },
        });
    }
};