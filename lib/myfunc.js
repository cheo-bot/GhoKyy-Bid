"use strict";
const axios = require("axios");
const { default: Axios } = require("axios");
const { MessageType, WAMessageProto } = require("@adiwajshing/baileys");
const fs = require("fs");
const fetch = require('node-fetch')
const PhoneNumber = require('awesome-phonenumber')
const Crypto = require('crypto')
const moment = require('moment-timezone')
const Exif = require('../lib/exif')
const exif = new Exif()
const ffmpeg = require("fluent-ffmpeg");
const request = require("request");
const { exec, spawn } = require("child_process")
let mess = JSON.parse(fs.readFileSync('./message/mess.json'));
const { addCmd, getCommandPosition, getCmd, checkSCommand } = require("../lib/stikercmd");
moment.tz.setDefault("Asia/Jakarta").locale("id");

let setting = JSON.parse(fs.readFileSync('./config.json'));

exports.WAConnection = _WAConnection => {
    class WAConnection extends _WAConnection {
        constructor(...args) {
            super(...args)
            this.sendFileFromUrl = this.sendFile
        }
        async sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return this.sendMessage(from, await exports.getBuffer(url), type, {caption: caption, quoted: msg, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }

        async sendRandomImage(from, query, caption, quoted, options) {
             const { pinterest } = require("../lib/pinterest");
             let result = await pinterest(query)
             let pint = await exports.pickRandom(result.result)
             return this.sendMessage(from, { url: pint }, MessageType.image, { caption, thumbnail: Buffer.alloc(0), quoted, ...options })
        }

        async sendMessageFromContent(jid, message, options) {
            var option = { contextInfo: {}, ...options }
            var prepare = await this.prepareMessageFromContent(jid, message, option)
            await this.relayWAMessage(prepare)
            return prepare
        }

        async sendStickerFromUrl(from, url, packname1, author1, options = {}) {
			var data = await exports.getBuffer(url)
            var namw = exports.makeid(8)
            fs.writeFileSync(`./sticker/${namw}.webp`, data)
            exif.create(packname1, author1, `sendstc_${namw}`)
             exec(`webpmux -set exif ./sticker/sendstc_${namw}.exif ./sticker/${namw}.webp -o ./sticker/${namw}.webp`, async (error) => {
                if (error) return this.reply(from, `Maaf, Salah satu sticker error!`, '')
                this.sendMessage(from, fs.readFileSync(`./sticker/${namw}.webp`), MessageType.sticker, options)
                .then( res => {
                fs.unlinkSync(`./sticker/${namw}.webp`)
                fs.unlinkSync(`./sticker/sendstc_${namw}.exif`)
                })
            })
        }

        async sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return this.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

        /**
         * Send Contact
         * @param {String} jid 
         * @param {String|Number} number 
         * @param {String} name 
         * @param {Object} quoted 
         */
        async sendContact(jid, number, name, bio = "Kontak", options = {}) {
        // TODO: Business Vcard
        number = number.replace(/[^0-9]/g, '')
        let njid = number + '@s.whatsapp.net'
        let { isBusiness } = await this.isOnWhatsApp(njid) || { isBusiness: false }
        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + name + '\n' + 'ORG:'+bio+'\n' + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n' + 'END:VCARD'.trim()
        return await this.sendMessage(jid, {
            displayName: name,
            vcard
        }, MessageType.contact, options)
        }
        /**
         * Get Contact
         * @string {String} nama
         */
        async getContact(nama) {
          let metadata = [];
          for (let i in this.contacts) {
            metadata.push(this.contacts[i])
          }
          let dataContact = [];
          for (let x of metadata) {
            if (x.name && x.jid.endsWith('@s.whatsapp.net')) {
              dataContact.push(x)
            }
          }
		  if (dataContact.length !== 0) {
          if (nama !== undefined) {
            let data = { status: 200, result: [] }
            for (let r of dataContact) {
              if (r.name.toLowerCase().includes(nama.toLowerCase())) {
                r.status = (await this.getStatus(r.jid)).status
                data.result.push(r)
              }
            }
          if (data.result.length === 0) {
             return { status: 404, msg: 'Contacts Not Found' }
          } else {
            return data
            }
          } else {
            return dataContact
		  }
		  } else {
			return { status: 401, msg: 'Allow whatsapp to access your contacts first.' }
          }
        }
        /**
        * Buggc From Riyan
        */
        async sendBuggc(jid, ephemeralExpiration, opts = { waitForAck: true }) {
              const message = this.prepareMessageFromContent(jid, this.prepareDisappearingMessageSettingContent(ephemeralExpiration), {});
              await this.relayWAMessage(message, opts);
              return message;
        }
        async sendTextWithMentions(jid, teks, quoted, options) {
          this.sendMessage(jid, teks, MessageType.text, { contextInfo: { mentionedJid: [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') }, quoted, ...options })
        }
        async sendGroupInvite(jid, participant, inviteCode, inviteExpiration, groupName = 'unknown subject',caption = 'Invitation to join my WhatsApp group', options = {}) {
            let msg = WAMessageProto.Message.fromObject({
              groupInviteMessage: WAMessageProto.GroupInviteMessage.fromObject({
                inviteCode,
                inviteExpiration: parseInt(inviteExpiration) || + new Date(new Date + (3 * 86400000)),
                groupJid: jid,
                groupName: groupName ? groupName : this.getName(jid),
                caption
              })
            })
            let message = await this.prepareMessageFromContent(participant, msg, options)
            await this.relayWAMessage(message)
            return message
        }
        /**
        * Revokes the current invite link for a group chat
        * @param jid the ID of the group
        */
        async revokeInvite(jid) {
           const json = ['action', 'inviteReset', jid]
           const response = await this.query({json, expect200: true})
           return response
        }

        async inspectCode(jid){
           const json = ["query", "invite", jid]
           const response = await this.query({json, expect200: true})
           return response
        }
        
        async getMembers(jid){
           let data = await this.groupMetadata(jid)
           var mem = data.participants
           let em = []
           for (let x of mem) {
              em.push(x.jid)
           }
           return em
        }

        reply = (from, teks, quoted, options) => {
            return this.sendMessage(from, teks, MessageType.text, { quoted, ...options })
        }

        sendImage = (from, buffer, capt = '', msg = '', men = []) => {
            return this.sendMessage(from, buffer, MessageType.image, {caption: capt, quoted: msg, contextInfo: {"mentionedJid": men}})
        }

        sendVideo = (from, buffer, capt = '', msg = '', men = []) => {
            return this.sendMessage(from, buffer, MessageType.video, {caption: capt, quoted: msg, contextInfo: {"mentionedJid": men}})
        }

        sendSticker = (from, buffer, quoted, options) => {
            return this.sendMessage(from, buffer, MessageType.sticker, { quoted, ...options })
        }

        textImg = (from, teks, msg = '', buffer = fs.readFileSync(setting.pathImg)) => {
            return this.sendMessage(from, teks, Message.text, {quoted: msg, thumbnail: buffer})
        }

        fakeThumb = (from, buffer, capt = '', msg = '', fakethumb = fs.readFileSync(setting.pathImg), men = []) => {
            let ai = {
                thumbnail: fakethumb ,
                quoted: msg,
                caption: capt,
                contextInfo: {
                    "mentionedJid": men
                }
            }
            return this.sendMessage(from, buffer, MessageType.image, {})
        }

        async getQuotedMsg (msg) {
            if (!msg.isQuotedMsg) return false
            let qi = await this.loadMessage(msg.key.remoteJid, msg.quotedMsg.id)
            return await exports.serialize(this, qi)
        }
        /**
         * Get name from jid
         * @param {String} jid 
         * @param {Boolean} withoutContact
         */
        getName(jid, withoutContact = false) {
            withoutContact = this.withoutContact || withoutContact
            let v = jid === '0@s.whatsapp.net' ? {
            jid,
            vname: 'WhatsApp'
            } : jid === this.user.jid ?
            this.user :
            this.contactAddOrGet(jid)
            return (withoutContact ? '' : v.name) || v.vname || v.notify || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
        }
        getUserName(nomor) {
            var user = this.contacts[nomor]
            return user != undefined ? user.notify : ""
        }
    }
    return WAConnection
}

exports.pickRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

exports.serialize = (xinz, msg, _scommand) => {
    if (msg.message["ephemeralMessage"]){
        msg.message = msg.message.ephemeralMessage.message
        msg.ephemeralMessage = true
        
    }else{
      msg.ephemeralMessage = false
    }
    msg.isGroup = msg.key.remoteJid.endsWith('@g.us')
    try{
        const berak = Object.keys(msg.message)[0]
        msg.type = berak
    } catch {
        msg.type = null
    }
    try{
        const context = msg.message[msg.type].contextInfo.quotedMessage
        if(context["ephemeralMessage"]){
            msg.quotedMsg = context.ephemeralMessage.message
        }else{
            msg.quotedMsg = context
        }
        msg.isQuotedMsg = true
        msg.quotedMsg.sender = msg.message[msg.type].contextInfo.participant
        msg.quotedMsg.fromMe = msg.quotedMsg.sender === xinz.user.jid ? true : false
        msg.quotedMsg.type = Object.keys(msg.quotedMsg)[0]
        let ane = msg.quotedMsg
        msg.quotedMsg.chats = (ane.type === 'conversation' && ane.conversation) ? ane.conversation : (ane.type == 'imageMessage') && ane.imageMessage.caption ? ane.imageMessage.caption : (ane.type == 'documentMessage') && ane.documentMessage.caption ? ane.documentMessage.caption : (ane.type == 'videoMessage') && ane.videoMessage.caption ? ane.videoMessage.caption : (ane.type == 'extendedTextMessage') && ane.extendedTextMessage.text ? ane.extendedTextMessage.text : (ane.type == 'buttonsMessage') && ane.buttonsMessage.contentText ? ane.buttonsMessage.contentText : ""
        msg.quotedMsg.id = msg.message[msg.type].contextInfo.stanzaId
        msg.quotedMsg.isBaileys = msg.quotedMsg.id.startsWith('3EB0') && msg.quotedMsg.id.length === 12
        msg.quotedMsg.isChibot = msg.quotedMsg.id.startsWith('GHOSBID') && msg.quotedMsg.id.length === 14
    }catch{
        msg.quotedMsg = null
        msg.isQuotedMsg = false
    }

    try{
        const mention = msg.message[msg.type].contextInfo.mentionedJid
        msg.mentioned = mention
    }catch{
        msg.mentioned = []
    }
    
    if (msg.isGroup){
        msg.sender = msg.participant
    }else{
        msg.sender = msg.key.remoteJid
    }
    if (msg.key.fromMe){
        msg.sender = xinz.user.jid
    }

    msg.from = msg.key.remoteJid
    msg.now = msg.messageTimestamp
    msg.fromMe = msg.key.fromMe
    msg.isBaileys = msg.key.id.startsWith('3EB0') && msg.key.id.length === 12
    msg.isOwa = msg.key.id.length === 20
    msg.isChibot = msg.key.id.startsWith('GHOSBID') && msg.key.id.length === 14

    const conts = msg.key.fromMe ? xinz.user.jid : xinz.contacts[msg.sender]
	msg.pushname = msg.key.fromMe ? xinz.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   

    msg.chats = (msg.type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (msg.type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (msg.type == 'stickerMessage') && (getCmd(msg.message.stickerMessage.fileSha256.toString('base64'), _scommand) !== null && getCmd(msg.message.stickerMessage.fileSha256.toString('base64'), _scommand) !== undefined) ? getCmd(msg.message. stickerMessage.fileSha256.toString('base64'), _scommand) : ""

    return msg
}

exports.makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
exports.fetchJson = (url, options) => new Promise(async (resolve, reject) => {
         fetch(url, options)
        .then(response => response.json())
        .then(json => {
        // console.log(json)
         resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})

exports.getGroupAdmins = function(participants){
    let admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.processTime = function(timestamp, now) {
    // timestamp => timestamp when message was received
    return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}
exports.randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

exports.generateMessageID = () => {
    return '3EB0' + exports.randomBytes(7).toString('hex').toUpperCase()
}

exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
