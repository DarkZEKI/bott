let handler = async m => m.reply(`
╭─〘 DONACIONES 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 [Sin uno aun...]
│ • Pero con que te suscribas a mi canal basta:)
│ 
╰────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
