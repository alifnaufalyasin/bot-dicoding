module.exports.tambah = {
    command: 'tambah',
    description: 'add new task',
    method: async context => {
        liff.openWindow({
            url:'https://dicoding.com',
            external:false
        });
    }
};