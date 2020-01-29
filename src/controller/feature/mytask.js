module.exports.mytask = {
    command: 'mytask',
    description: 'show task of user',
    method: async context => {
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
                    size: 'xl',
                }],
            },
            footer: {
                type: 'box',
                layout: 'vertical',
                margin: 'lg',
                contents: [{
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                        {
                        type: 'text',
                        text: '1',
                        wrap: true,
                        color: '#666666', 
                        size: 'lg',
                        flex: 1,
                        },{
                        type: 'text',
                        text: 'PR DAA',
                        wrap: true,
                        color: '#666666', 
                        size: 'lg',
                        flex: 5,
                        }],
                }],
            },
        });
    }
};