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
                contents: [
                    {
                    type: 'text',
                    text: 'Place',
                    color: '#aaaaaa',
                    size: 'sm',
                    flex: 1,
                    },
                    {
                    type: 'text',
                    text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
                    wrap: true,
                    color: '#666666', 
                    size: 'sm',
                    flex: 5,
                    }],
            },
        });
    }
};