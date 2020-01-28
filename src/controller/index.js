const glob = require('glob');
const path = require('path');
const basePath = './src/controller/feature/';

const listModule = glob
  .sync(path.join(basePath, '*.js')) //will read all module path on feature dir
  .map(file => require('../../' + file)); // load all module

const controllers = async (text, context) => {
  let found = false;
  listModule.map(async modul => {
    let methodName = Object.keys(modul)[0];
    if (modul[methodName].command == text[0].toLowerCase()) {
    // match the command with module
    found = true;
    await modul[methodName].method(context);
    }
  });
  if (!found) {
      console.log('tidak');
    // await context.sendText(`Saya tidak mengetahui maksud dari "${context.event.text}"`);
  }
};
  module.exports = controllers;