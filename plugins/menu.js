let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let exp = global.DATABASE.data.users[m.sender].exp
    let limit = global.DATABASE.data.users[m.sender].limit
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'es'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Libra','Sueldo','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let tags = {
      'jadibot': '𝔅𝔒𝔗',
      'owner': 'ℭℜ𝔈𝔄𝔇𝔒ℜ',
      'host': 'ℌ𝔒𝔖𝔗',
      'main': '𝔐𝔈𝔑𝔘',
      'xp': '𝔈𝔛𝔓 & 𝔏ℑ𝔐ℑ𝔗𝔈',
      'sticker': '𝔖𝔗ℑℭ𝔎𝔈ℜ',
      'internet': 'ℑ𝔑𝔗𝔈ℜ𝔑𝔈𝔗',
      'downloader': '𝔇𝔈𝔖ℭ𝔄ℜ𝔊𝔄',
      'anime': '𝔄𝔑ℑ𝔐𝔈',
      'nulis': '𝔑𝔒𝔗𝔄𝔖',
      'cfoto': 'ℭℜ𝔈𝔄ℜ 𝔉𝔒𝔗𝔒𝔖',
      'fotos': '𝔉𝔒𝔗𝔒𝔖',
      'game': '𝔈𝔇𝔘ℭ𝔄ℭℑ𝔒𝔑',
      'admin': '𝔄𝔇𝔐ℑ𝔑',
      'group': '𝔊ℜ𝔘𝔓𝔒',
      'tools': 'ℌ𝔈ℜℜ𝔄𝔐ℑ𝔈𝔑𝔗𝔄𝔖',
      'info': 'ℑ𝔑𝔉𝔒',

    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
*┏◈「 ${conn.user.name} 」◈┓*
*┣▶*  _*Hola, %name!👋*_  ◀
*┗◈「 ꂠꁲꌅꀗ-𝔅𝔬𝔱 」◈┛*

*╭═┅〘🤖 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻 𝗚𝗲𝗻𝗲𝗿𝗮𝗹 🤖〙*
*┣➣* *%exp XP*
*┣➣* *%limit Limit Restante*
*┣➣* Fecha: *%week %weton, %date*
*┣➣* Hora: *%time*
*┣➣* Tiempo de actividad: *%uptime (%muptime)*
*┣➣* Base de datos: %rtotalreg de %totalreg
*┣➣* Github:
*┣* Jaja,no kbro me vai a robar el bot jsjsjs
*╰═┅ৡৢ͜͡✦═══╡𝔐𝔎-𝔅𝔬𝔱╞═══┅ৡৢ͜͡✦═╯*

*╭═┅〘🛑 𝗢𝗯𝗲𝗱𝗲𝗰𝗲 𝗹𝗮𝘀 𝗿𝗲𝗴𝗹𝗮𝘀 🛑〙*
*┣➣*❌𝑷𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐 𝒍𝒍𝒂𝒎𝒂𝒓 𝒂𝒍 𝒃𝒐𝒕📲
*┣➣*❌𝑷𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐 𝒔𝒑𝒂𝒎 𝒂𝒍 𝒃𝒐𝒕☢
*┣➣*❌𝑵𝒐 𝒂𝒈𝒓𝒆𝒈𝒂𝒓 𝒂𝒍 𝒃𝒐𝒕 𝒂 𝒈𝒓𝒖𝒑𝒐𝒔♻
*╰═┅ৡৢ͜͡✦═══╡𝔐𝔎-𝔅𝔬𝔱╞═══┅ৡৢ͜͡✦═╯*
%readmore`
    let header = conn.menu.header || '*╭═┅〘👾%category👾 〙═╮*'
    let body   = conn.menu.body   || '*┣➣* %cmd%islimit'
    let footer = conn.menu.footer || '*╰═┅ৡৢ͜͡✦═══╡𝔐𝔎-𝔅𝔬𝔱╞═══┅ৡৢ͜͡✦═╯*\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      exp, limit, name, weton, week, date, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
    conn.reply(m.chat, text.trim(), m)
  } catch (e) {
    conn.reply(m.chat, 'Lo siento, el menú tiene un error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

handler.limit = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
