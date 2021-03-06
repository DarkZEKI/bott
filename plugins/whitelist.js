let handler = async (m, { conn, text }) => {
	if(isNaN(text)) {
		var number = text.split`@`[1]
	} else if(!isNaN(text)) {
		var number = text
	}
	
	if(!text && !m.quoted) return conn.reply(m.chat, `*Escriba el numero o responda a un mensaje del usuario.*`, m)
	if(number.length > 15) return conn.reply(m.chat, `*Formato no valido.*`, m)
	
try {
	if(text) {
		var user = number + '@s.whatsapp.net'
	} else if(m.quoted.sender) {
		var user = m.quoted.sender
	} else if(m.mentionedJid) {
		var user = number + '@s.whatsapp.net'
	} 
} catch (e) {
		} finally {
			if(global.DATABASE._data.users[user].whitelist == true){
			  conn.reply(m.chat, `*@${user.split('@')[0]} ya esta en la lista blanca del usuario*`, m, {contextInfo: {
          mentionedJid: [user]
        }})
			}else {
        global.DATABASE._data.users[user].whitelist = true
				conn.reply(m.chat, `*Gestionado para agregar @${user.split('@')[0]} por usuario de la lista blanca*`, m, {contextInfo: {
          mentionedJid: [user]
        }})
			}
	}	
}

handler.help = ['*34xx*','*@user*','*(reply)*'].map(v => 'whitelist ' + v)
handler.tags = ['Creador']
handler.command = /^whitelist$/i
handler.owner = true
module.exports = handler
