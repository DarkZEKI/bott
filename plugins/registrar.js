const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Usted ya está registrado\nQuiere volver a registrarse? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Foemat está mal\n*${usedPrefix}registrar <nombre>.edad>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacío'
  if (!age) throw 'La edad no puede estar vacía'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
╔══════════════╗
║  
║╔═══════════════╗
║║>>🅁🄴🄶🄸🅂🅃🅁🄰🄳🄾<<
║╚╗
║ ║𝐍𝐨𝐦𝐛𝐫𝐞: ${name}
║ ║𝐄𝐝𝐚𝐝: ${age}
║ ║𝐒𝐞𝐫𝐢𝐚𝐥: ${sn}
║╔╝
║╚═══════════════╝
╚══════════════╝
`.trim())
}
handler.help = ['registrar <nombre>.<edad>']
handler.tags = ['exp']

handler.command = /^(registrar|reg(ister)?)$/i

module.exports = handler

