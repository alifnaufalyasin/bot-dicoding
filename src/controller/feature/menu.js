module.exports.menu = {
    command: 'menu',
    description: 'show menu',
    method: async context => {
        await context.sendFlex('Task Menu', {
            type: 'bubble',
                // hero: {
                //     type: 'image',
                //     url: ,
                //     size: 'full',
                //     aspectRatio: '20:13',
                //     aspectMode: 'cover',
                // },
            body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                {
                    type: 'text',
                    text: 'Save My Task',
                    weight: 'bold',
                    size: 'lg',
                }],
            },
            footer: {
                type: 'box',
                layout: 'vertical',
                contents: [
                {
                    type: 'text',
                    text: `Untuk menambahkan task ketik "tambah (spasi) task yang ingin di tambahkan"`,
                    wrap: true,
                    size: "sm",
                    margin: 'sm',
                },
                {
                    type: 'text',
                    text: 'Untuk menghapus task cukup mengetuk task yang ada pada mytask',
                    wrap: true,
                    size: "sm",
                    margin: 'sm',
                },
                {
                type: 'button',
                action: {
                    type: 'uri',
                    label: 'Tambah',
                    uri: 'line://app/1653926328-kewjzv9B',
                    },
                },
                {
                type: 'button',
                action:{
                    type:'message',
                    label: 'Mytask',
                    text: "mytask"
                    }
                },
                {
                type: 'spacer',
                size: 'md'
                }],
            },
        });
    }
};