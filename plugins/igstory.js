let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...donde esta la url?'
  let res = await fetch(global.API('xteam', '/dl/igs', {
    nama: args[0]
  }, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let { username, storylist } = json.result
  let dateConfig = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  for (let { url, type, taken_at } of storylist)
    conn.sendFile(m.chat, url, 'ig' + (type == 'video' ? '.mp4' : '.jpg'), `
@${username}
Publicar en ${new Date(taken_at * 1000).toLocaleDateString('id', dateConfig)}
`, m)
  throw json.result
}
handler.help = ['igstory'].map(v => v + ' <nombre de usuario>')
handler.tags = ['downloader']

handler.command = /^(igs(tory)?)$/i

module.exports = handler
