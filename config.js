global.owner = ['5521970019765']
global.mods = ['TU NUMERO AQUI'] 
global.prems = [60199477777]
global.APIs = { 
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { 
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}




let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
