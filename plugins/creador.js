let handler = function (m) {
  this.sendContact(m.chat, '552197001-9765', 'DarkZE', m)
  //this.sendContact(m.chat, 'TU NUMERO', 'TU NOMBRE', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
