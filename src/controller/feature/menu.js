module.exports.menu = {
    command: 'menu',
    description: 'show menu',
    method: async context => {
        await context.sendFlex('This is an advanced flex', {
            type: 'bubble',
            // hero: {
            //     type: 'image',
            //     url:
            //         'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
            //     size: 'full',
            //     aspectRatio: '20:13',
            // },
            body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                {
                    type: 'text',
                    text: 'Save My Task',
                    weight: 'bold',
                    size: 'xl',
                },
                // {
                //     type: 'box',
                //     layout: 'vertical',
                //     margin: 'lg',
                //     contents: [
                //     {
                //         type: 'box',
                //         layout: 'baseline',
                //         contents: [
                //         {
                //             type: 'text',
                //             text: 'Place',
                //             color: '#aaaaaa',
                //             size: 'sm',
                //             flex: 1,
                //         },
                //         {
                //             type: 'text',
                //             text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
                //             wrap: true,
                //             color: '#666666',
                //             size: 'sm',
                //             flex: 5,
                //         },
                //         ],
                //     },
                //     ],
                // },
                ],
            },
            footer: {
                type: 'box',
                layout: 'vertical',
                contents: [
                {
                type: 'button',
                action: {
                    type: 'uri',
                    label: 'Tambah',
                    uri: 'line://app/1653803012-5QJqJ4PP',
                    },
                },
                {
                    type: 'button',
                    action: {
                        type: 'action',
                        label: 'Mytask',
                        action:{
                            "type": "message",
                            "label": "mytask",
                            "text": "mytask"
                        }
                        },
                    },
                ],
            },
        });

    }
};