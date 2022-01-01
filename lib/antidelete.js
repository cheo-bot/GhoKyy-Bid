"use strict";
const { MessageType } = require("@adiwajshing/baileys");
const moment = require("moment-timezone")
const fs = require("fs");
const { color, XinzLog } = require("../lib/color");
const { serialize } = require("../lib/myfunc");

moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = async(xinz, msg) => {
    try {
        msg = serialize(xinz, msg.message)
        const { type, quotedMsg, isGroup, isQuotedMsg, mentioned, sender, from, fromMe, pushname, chats, isBaileys } = msg
        const time = moment.tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')
        console.log(XinzLog(`Deleting message from ${pushname} in ${isGroup ? from : 'Private Chat'}`))
        if (fromMe) return
        let msgOpt = msg.message[type]
        let options = {
            contextInfo: msgOpt.contextInfo ? msgOpt.contextInfo : '',
            thumbnail: msgOpt.jpegThumbnail ? msgOpt.jpegThumbnail : '',
            mimetype: msgOpt.mimetype ? msgOpt.mimetype : '',
            caption: chats,
            filename: msgOpt.fileName ? msgOpt.fileName : '',
            ptt: msgOpt.ptt ? msgOpt.ptt : '',
            duration: msgOpt.seconds ? msgOpt.seconds : ''
        }
        let tmxt = `*Anti delete*
*Name :* ${pushname}
*Tipe :* ${type}
*Pesan dikirim :* ${moment.unix(msg.messageTimestamp).format('DD/MM/YYYY HH:mm:ss')}
*Pesan dihapus :* ${time}
${type === 'conversation' ? '*Text :* '+chats : ''}`
        if (type === 'conversation'){
            xinz.reply(from, tmxt, msg)
        } else if (type === 'stickerMessage' || type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type === 'documentMessage'){
            let media = await xinz.downloadMediaMessage(msg)
            xinz.reply(from, tmxt, msg)
            xinz.sendMessage(from, media, type, options)
        } else {
            xinz.reply(from, tmxt, msg)
            xinz.sendMessage(from, msgOpt, type, options)
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
}