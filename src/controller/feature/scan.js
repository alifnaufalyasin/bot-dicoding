module.exports.scan = {
  command: 'scan',
  description: 'information about this bot',
  method: async context => {
    await context.sendFlex('Scan Flex', {
      type: 'bubble',
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            action: {
              type: 'uri',
              label: 'Scan',
              uri: "line://app/1653926328-BDOQPjrE",
            },
          },
        ],
      },
    });
  },  
};