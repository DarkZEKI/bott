let handler  = async (m, { conn, usedPrefix: _p }) => {
        conn.reply(m.chat, `
┏━────────────━┓
            _*𝔐𝔎-𝔅𝔬𝔱*_
┗──────────────┛
╭───❉ *「  INFO 」 * ❉─────•>
╠➥ *IG : Por el momento no hay*
╠➥ *YT : Hmm?*
╠➥ *Numero del creador : Wa.me/+552197001-9765*
╠➥ *Creador : DarkZE*
╰──────────────•>
┏━❉ * ℑ𝔑𝔉𝔒 * ❉━┓
╠➠ *${_p}owner*
╠➠ *${_p}grouplist*
╠➠ *${_p}ping*
┗━━━━━━━━━━━━━━━━┛
`.trim(), m)
}
handler.command = /^info$/i

module.exports = handler
