module.exports.berhasil = {
  command: 'berhasil',
  description: 'add new task',
  method: async context => {
    context.send([
      {
        type : 'text',
        text : 'Berhasil menambahkan Task'
      }
    ])
  }
};