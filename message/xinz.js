//Jangn hapus creator ny
//di record oleh xyann
"use strict";
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    ChatModification,
    mentionedJid,
    WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys");
const fs = require("fs");
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const fetch = require("node-fetch");
const ms = require("parse-ms");
const axios = require("axios");
const { default: Axios } = require("axios");
const speed = require("performance-now");
const cheerio = require("cheerio");
const yts = require("yt-search");
const translate = require("@vitalets/google-translate-api");
const { da } = require("@vitalets/google-translate-api/languages");
const util = require('util');
const imgbb = require('imgbb-uploader');
const imageToBase64 = require('image-to-base64');
const base64Img = require('base64-img');
const mathjs = require("mathjs");
/*const brainly = require('brainly-scraper'); //require("brainly-scraper-v2");*/
const qrcode = require("qrcode");
const acrcloud = require("acrcloud");
const FormData = require("form-data");
const toMs = require("ms");
const nhentai = require('nhentai-js');
const Dym = require("didyoumean");
const request = require("request");

// stickwm
const Exif = require('../lib/exif')
const exif = new Exif()

const { color, bgcolor } = require("../lib/color");
const { pickRandom, getBuffer, getRandom, getGroupAdmins, runtime, fetchJson, makeid, processTime, serialize } = require("../lib/myfunc");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const _prem = require("../lib/premium");
const _sewa = require("../lib/sewa");
const afk = require("../lib/afk");
const gtts = require("../lib/gtts")
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("../lib/banned");
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const tictac = require("../lib/tictac");
const { msgFilter } = require('../lib/index');
const { asmaul } = require("../lib/asmaulhusna");
const { yta, ytv } = require("../lib/ytdl");
const { getUser, getPost, searchUser } = require("../lib/instagram");
const { covid, covidGlobal } = require("../lib/covid");
const { fbdl } = require("../lib/fbdl");
const { tebakgmbr } = require("../lib/tebakgambar");
const { suitJs, getSuit, isSuit, cekWaktuSuit } = require("../lib/suit");
const { fakeStatus, fakeToko } = require("./fakeReply");
const { antidelete } = require("../lib/antidelete");
const { lirik } = require("../lib/lirik");
const { kbbi, wiki } = require("../lib/edukasi");
const { jagoKata } = require("../lib/jagokata");
const { spamcall } = require("../lib/spamers");
const { google } = require("../lib/google");
const { webp2mp4File } = require("../lib/convert");
const { mediafire } = require("../lib/mediafire");
const { TiktokDownloader } = require("../lib/tiktok");
const { pinterest } = require("../lib/pinterest");
const game = require("../lib/game");
const { addMessage, getJawabanMsg, getSoalMsg, getMessagePosi, checkMessage, isCreated, deleteMessage } = require("../lib/message");
const { addSticker, getJawabanStc, getSoalStc, getStickerPosi, checkSticker, isCreatedStc, deleteSticker } = require("../lib/sticker");
const { addCmd, getCommandPosition, getCmd, checkSCommand } = require("../lib/stikercmd");
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("../lib/badword");
const { addEmotbatu, delEmotbatu, isBatu, addCountBatu, isCountBatu, delCountBatu } = require("../lib/emotbatu");

// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let winner = JSON.parse(fs.readFileSync('./database/winner.json'))
let setting = JSON.parse(fs.readFileSync('./config.json'));
let mess = JSON.parse(fs.readFileSync('./message/mess.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antiemotbatu = JSON.parse(fs.readFileSync('./database/antiemot.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let badword = JSON.parse(fs.readFileSync('./database/badword.json'));
let batu = JSON.parse(fs.readFileSync('./database/emot.json'));
let grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
let grupbatu = JSON.parse(fs.readFileSync('./database/grupbatu.json'));
let senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
let sendbatu = JSON.parse(fs.readFileSync('./database/sendbatu.json'));
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let change = JSON.parse(fs.readFileSync('./database/change.json'));
let _msg = JSON.parse(fs.readFileSync('./database/message.json'));
let _stick = JSON.parse(fs.readFileSync('./database/sticker.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));

// Game
let tictactoe = [];
let tebakgambar = [];
let family100 = [];
let math = [];
let kuis = [];
let tebaklagu = [];
let tebakbendera = [];
let suit = [];
let siapaku = [];


// Prefix
let multi = true
let nopref = true
let prefa = 'anjing'
// Mode
let mode = 'public'
let simi = false
let event = false
let antiViewOnce = true
let kickall = true
let hentai = false
let anal = false
let yaoi = false
let yuri = false
let cum = false
let husbu = true
let pussy = false
let wpp = true
let sgri = true 
let popo = false




let { ownerNumber, limitCount,
    lolkey, igbkey, zerokey, xteamkey, xcodekey, gamewaktu,
} = setting

moment.tz.setDefault("Asia/Jakarta").locale("id");

// Auto Reset Limit
    setInterval(function() { 
     var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
     var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
    // hasilnes Kalo mau Jam 00 jadi 12:00:00 AM
	if(hasilnes === '12:00:00 AM') {
      limit = []
        fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
      glimit = []
        fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
      console.log("Limit Sudah Di Reset!")
    }
    }, 1000);

module.exports = async(xinz, msg, blocked, baterai, _afk, welcome, left, _scommand, blockUser) => {

    try {
        const { menu } = require("./help");
        const { type, quotedMsg, isGroup, isQuotedMsg, mentioned, sender, from, now, fromMe, chats, isBaileys, isOwa, isChibot } = msg
        if (isBaileys || isChibot) return
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage } = MessageType
        var args = chats.split(' ')
        var command = chats.toLowerCase().split(' ')[0] || ''
		var q = chats.slice(command.length + 1, chats.length)
		var x = '```'
		var totalhit = 0
    for (let x of _cmd) {
      totalhit = totalhit + x.count}
        if (type === "buttonsResponseMessage" && quotedMsg.fromMe) {
          var anu = msg.message.buttonsResponseMessage.selectedButtonId
          args = anu.split(' ')
		  command = anu.toLowerCase().split(' ')[0] || ''
		  q = anu.slice(command.length + 1, anu.length)
		}

        if (multi){
        var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~🗿🐥🐤🐣!?#$%^&.+-,\/\\©^]/.test(command) ? command.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
        const isCmd = command.startsWith(prefix)
        const body = chats.startsWith(prefix) ? chats : ''

        const botNumber = xinz.user.jid
        const groupMetadata = isGroup ? await xinz.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupId = isGroup ? groupMetadata.jid : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const groupOwner = isGroup ? groupMetadata.owner ? groupMetadata.owner.split("@")[0]+'@s.whatsapp.net' : groupMetadata.id.split("-")[0]+'@s.whatsapp.net' : ''
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isGroupAdmins = groupAdmins.includes(sender) || false

        const isOwner = ownerNumber.includes(sender)
        const modsNumber = JSON.parse(fs.readFileSync('./database/modsNumber.json'));
        const isMods = modsNumber.includes(sender)
        const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
        const isBan = cekBannedUser(sender, ban)
        const isBlock = blocked.includes(sender) ? true : false
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isBatu = isGroup ? grupbatu.includes(from) : false
        const isUser = pendaftar.includes(sender)
        const isBadword = isGroup ? grupbadword.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        var pes = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''
        const message = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const pushname = xinz.contacts[sender] != undefined ? xinz.contacts[sender].vname || xinz.contacts[sender].notify : undefined
        const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        var jamta = moment.tz('Asia/Makassar').format('HH:mm:ss')
        var jamti = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        const ucapanWaktu = 'Selamat '+moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a').kapitalis()
        var tgl = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')

        const gcounti = setting.gcount
        const gcount = isPremium ? gcounti.prem : gcounti.user

        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function formatDate(n, locale = 'id') {
            let d = new Date(n)
            return d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        function randomNomor2(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        function parseMention(text = '') {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }
        String.prototype.kapitalis = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
        const sleep = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        const nebal = (angka) => {
            return Math.floor(angka)
        }
        const reply = (teks, options) => {
            return xinz.sendMessage(from, teks, text, {quoted: msg, contextInfo: { mentionedJid: parseMention(teks) }, ...options})
        }
        async function replyDeface(teks) {
            return xinz.sendMessage(from, teks, text, {quoted: msg, contextInfo: {mentionedJid: parseMention(teks), externalAdReply: { title: `GhosKyy Bid V2.0`, body: `Bot WhatsApp`, mediaType: 2, thumbnail: fs.readFileSync('./media/Chitanda.jpg'), sourceUrl: `wa.me/6289653381067?text=hy+kaka+`}}})
        }
        const sendMess = (hehe, teks) => {
            return xinz.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            let ai = (id == null || id == undefined || id == false) ? xinz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : xinz.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": memberr}})
            return ai
        }
		async function sendStickerFromUrl(from, url, packname1, author1, options = {}) {
			var names = Date.now() / 10000;
			var download = function (uri, filename, callback) {
		      request.head(uri, function (err, res, body) {
               request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	          });
			};
		    exif.create(packname1, author1, `sendstc_${names}`)
			download(url, './sticker/' + names + '.png', async function () {
		     let filess = './sticker/' + names + '.png'
			 let asw = './sticker/' + names + '.webp'
			  exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, async (err) => {
			   exec(`webpmux -set exif ./sticker/sendstc_${names}.exif ${asw} -o ${asw}`, async (error) => {
				xinz.sendMessage(from, fs.readFileSync(asw), MessageType.sticker, options)
				fs.unlinkSync(filess)
				fs.unlinkSync(asw)
			   })
		      })
			})
		}
        async function status(jid) {
           var data = await xinz.getStatus(jid ? jid : sender)
           var status = data.status
            if (status === 401) {
               status = "Status Not Found"
            }
            return status
        }

        async function sendFileFromUrl(from, url, caption, msg, men) {
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
            return xinz.sendMessage(from, { url: url }, type, {thumbnail: Buffer.alloc(0), caption: caption, quoted: msg, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        async function downloadM(encmed, path) {
             var encmedia = encmed ? encmed : JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
             return await xinz.downloadAndSaveMediaMessage(encmedia, path ? path : './undefined')
        }
        async function uploadImgbb(path) {
              var anu = await imgbb(igbkey, path)
              return anu.display_url
        }
        async function uploadTele(path) {
            let form = new FormData();
            form.append('photo', fs.createReadStream(path))
            let data = await Axios({ method: "POST", url: "https://telegra.ph/upload",data: form, headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}`}})
            return 'https://telegra.ph' + data.data[0].src
        }
        async function cekGender(nama) {
           if (nama === undefined) return `Masukkan Namanya!`
           let dat = await axios.get('https://api.genderize.io/?name='+nama)
           if (dat.data.gender === 'male') dat.data.gender  = 'Pria'
           if (dat.data.gender === 'female') dat.data.gender = 'Wanita'
           return dat.data
        }
        async function getAsmaulHusna(urut) {
        return new Promise (async(resolve, reject) => {
        if (!urut) resolve(await asmaul())
         if (isNaN(urut)) return resolve({status: 403, result: `Hanya support angka!`})
         if (urut > 99) return resolve({status: 404, result: `Hanya sampai 99`})
         var anu = await asmaul()
         var ya = anu.result.data
         var posi = null
         Object.keys(ya).forEach((i) => {
          if (ya[i].index === urut) {
             posi = i
          }
         })
          resolve(ya[posi])
          })
        }
		
		async function nhentaidl(code) {
		   if (!code) return "Pake Code Pak"
		   var data = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${code}?apikey=${lolkey}`)
		   if (data.status === 200) {
		     return data.result
		   } else {
			 return "Code Invalid"
		   }
		}

        const textImg = (teks) => {
            return xinz.sendMessage(from, teks, text, {detectLinks: false, quoted: msg, thumbnail: fs.readFileSync(setting.pathImg), contextInfo: {mentionedJid: parseMention(teks)}})
        }
        async function sendInfoBot(from, capt, msg) {
             var buttons = [{ buttonId: '!sc', buttonText: { displayText: "Source Code" }, type: 1 }, { buttonId: '!owner', buttonText: { displayText: "Owner" }, type: 1 }]
             var imegnya = await xinz.prepareMessageMedia(fs.readFileSync('./media/Chitanda.jpg'), MessageType.image, { thumbnail: fs.readFileSync('./media/Chitanda.jpg') })
             imegnya.imageMessage.jpegThumbnail = fs.readFileSync('./media/Chitanda.jpg')
             var buttosMessage = {
                 imageMessage: imegnya.imageMessage,
                 contentText: capt,
                 footerText: '© 25 Juli 2021 || All Rights Reserved',
                 buttons: buttons,
                 headerType: 'IMAGE'
              }
             return xinz.sendMessage(from, buttosMessage, buttonsMessage, {quoted: msg, contextInfo: { mentionedJid: [botNumber, ownerNumber] }})
        }
        async function sendButtonImage(from, query, id1, capt, quoted, options) {
             var buttos = [{ buttonId: id1, buttonText: { displayText: "Dapatkan Lagi" }, type: 1 }]
             var imegnya = await xinz.prepareMessageMedia(query, MessageType.image, { thumbnail: query })
             imegnya.imageMessage.jpegThumbnail = Buffer.alloc(0)
             var buttonMessage2 = {
                 imageMessage: imegnya.imageMessage,
                 contentText: capt,
                 footerText: 'Created By Xyann',
                 buttons: buttos,
                 headerType: 'IMAGE'
              }
             return xinz.sendMessage(from, buttonMessages, MessageType.buttonsMessage, { quoted, ...options })
        }
        async function sendSuit(from) {
            var button = [
                { buttonId: 'kertas', buttonText: { displayText: "Kertas" }, type: 1 },
                { buttonId: 'gunting', buttonText: { displayText: "Gunting" }, type: 1 },
                { buttonId: 'batu', buttonText: { displayText: "Batu" }, type: 1 }
            ]
            var teks = `Silahkan Pilih Di Bawsh\nHanya Bisa Untuk  @${sender.split("@")[0]}`
            const buttonMsg = { contentText: teks, footerText: 'Created By Xyann', buttons: button, headerType: 1 }
            return xinz.sendMessage(from, buttonMsg, buttonsMessage, { contextInfo: { mentionedJid: [sender] }})
        }
        async function sendSlot(teks) {
          const buttonTs = [{ buttonId: "!slot", buttonText: { displayText: "Mainkan Lagi" }, type: 1 }]
          const buttonMessage2 = { contentText: teks, footerText: 'Created By Xyann', buttons: buttonTs, headerType: 1 }
          return xinz.sendMessage(from, buttonMessage2, buttonsMessage, {detectLinks: false, contextInfo: {mentionedJid: [sender]}})
        }

        const hour_ev = moment().format('HH:mm')
        if (hour_ev === '15:00') {
          event = true
        }

        const isImage = (type === 'imageMessage')
        const isVideo = (type === 'videoMessage')
        const isSticker = (type == 'stickerMessage')
        const isAudio = (type == 'audioMessage')
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
        const isQuotedVideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
        const isQuotedSticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false
        const isQuotedAudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
        const isQuotedTxt = isQuotedMsg ? (quotedMsg.type === 'conversation') ? true : false : false

        const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        
        const fakefoto = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"}: {})}, message: {imageMessage: {caption: 'GhosKyy Bid V2.0', jpegThumbnail: fs.readFileSync('./media/Chitanda.jpg')}}}
        const fakevideo = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"}: {})}, message: {videoMessage: {caption: 'GhosKyy V2.0', jpegThumbnail: fs.readFileSync('./media/Chitanda.jpg')}}}
        const bugtroli = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {orderMessage: {itemCount: 9999999, status: 1, surface: 1, message: `${jamti}  WIT\n${jamta}  WITA\n${jam}  WIB`, orderTitle: 'gopudd', sellerJid: "0@s.whatsapp.net"}}}
        const xenz = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {orderMessage: {itemCount: 2022, status: 1, surface: 1, message: `${ucapanWaktu}`, orderTitle: 'gopudd', sellerJid: "0@s.whatsapp.net"}}}
        const fakelokasi = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {locationMessage: {degreesLatitude: -7.0389318, degreesLongitude: 113.8969749, name: 'Tokyo, Japan', address: 'iamghosky_', jpegThumbnail: fs.readFileSync('./media/Chitanda.jpg')}}}
        const fakekontak = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {contactMessage: {displayName: 'My Owner', vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'N:GhosKyy;Bid;;\n' + 'FN:Owner GhosKyy\n' + 'item1.TEL;waid='+botNumber.replace('@s.whatsapp.net', '')+':'+botNumber.replace('@s.whatsapp.net', '')+'\n' + 'item1.X-ABLabel:Telepon\n' + 'END:VCARD'}}}
        const faketoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {productMessage: {product: {currencyCode: "BRL", title: 'GhosKyy Bid V2.0', priceAmount1000: 0, productImageCount: 0, productImage: {jpegThumbnail: fs.readFileSync('./media/Chitanda.jpg')}}, businessOwnerJid: "0@s.whatsapp.net"}}}
        const faketroli = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {orderMessage: {itemCount: 0, status: 200, surface: 200, message: 'GhosKyy Bid', orderTitle: 'GhosKyy Bid', thumbnail: fs.readFileSync('./media/Chitanda.jpg'), sellerJid: '0@s.whatsapp.net'}}}
        const fakedoc = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: 'GhosKyy Bid', pageCount: 99999, fileLength: '9999999999999',fileName: 'Author : Xyann', jpegThumbnail: fs.readFileSync('./media/Chitanda.jpg')}}}
        const fakeinvite = {key: {fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"}, message: {groupInviteMessage: {groupJid: from, inviteCode: 'GhosKyy', groupName: groupName, caption: 'GhosKyy V2.0', jpegThumbnail: fs.readFileSync('./media/Chitanda.jpg')}}}

        // Auto Read
		xinz.chatRead(from, "read")
		// Presence Online
		xinz.updatePresence(from, Presence.available)

        // Mode
        if (mode === 'self'){
            if (!isOwner && !fromMe) return
            if (fromMe && isBaileys) return
        }

        // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins && !chats.includes(await xinz.groupInviteCode(from))){
            if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                if (!isBotGroupAdmins) return reply(`Untung bot bukan admin`)
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                .then( res => {
                xinz.groupRemove(from, [sender])
             })
           }
         }
         

        // Badword
        if (isGroup && isBadword && !isOwner && !isGroupAdmins){
            for (let kasar of badword){
                if (chats.toLowerCase().includes(kasar)){
                    if (isCountKasar(sender, senbadword)){
                        if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
                        reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
                        xinz.groupRemove(from, [sender])
                        delCountKasar(sender, senbadword)
                    } else {
                        addCountKasar(sender, senbadword)
                        reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
                    }
                }
            }
        }
//Batu
if (isGroup && isBatu && !isOwner && !isGroupAdmins){
            for (let batu of batu){
                if (chats.toLowerCase().includes(batu)){
                    if (isCountBatu(sender, sendbatu)){
                        if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
                        reply(`*「 EMOT BATU PHOBIC 」*\n\nSepertinya kamu sudah menggunakan emot batu lebih dari 5x, maaf kamu akan di kick`)
                        xinz.groupRemove(from, [sender])
                        delCountBatu(sender, senbadword)
                    } else {
                        addCountBatu(sender, sendbatu)
                        reply(`Kamu terdeteksi menggunakan emot batu\nJangan ulangi lagi atau kamu akan dikick`)
                    }
                }
            }
        }
       async function addCountCmdUser(nama, sender, u) {
         var posi = null
         var pos = null
         Object.keys(u).forEach((i) => {
            if (u[i].jid === sender) {
               posi = i
            }
          })
         if (posi === null) {
            u.push({jid: sender, db: [{nama: nama, count: 0}]})
            fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          Object.keys(u).forEach((i) => {
             if (u[i].jid === sender) {
               posi = i
             }
          })
         }
         if (posi !== null) {
         Object.keys(u[posi].db).forEach((i) => {
            if (u[posi].db[i].nama === nama) {
               pos = i
            }
          })
         if (pos === null) {
           u[posi].db.push({nama: nama, count: 1})
           fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          } else {
           u[posi].db[pos].count += 1
           fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          }
         }
        }

        async function getPosiCmdUser(sender, _db) {
         var posi = null
         Object.keys(_db).forEach((i) => {
          if (_db[i].jid === sender) {
             posi = i
          }
         })
          return posi
        }

        function getWinner(sender) {
          var posi = null
          Object.keys(winner).forEach((i) => {
            if (winner[i].jid === sender) {
              posi = i
            }
          })
          return posi
        }

        function isClaimWinner(sender) {
          var anu = false
          Object.keys(winner).forEach((i) => {
            if (winner[i].jid === sender) {
              anu = true
            }
          })
          return anu
        }

        async function addCountCmd(nama, sender, _db) {
         addCountCmdUser(nama, sender, _cmdUser)
          var posi = null
            Object.keys(_db).forEach((i) => {
               if (_db[i].nama === nama) {
                 posi = i
               }
            })
            if (posi === null) {
              _db.push({nama: nama, count: 1})
              fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
            } else {
            _db[posi].count += 1
            fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
          }
        }

        const getPosiSaying = (from, _db) => {
            let posi = null
              Object.keys(_db).forEach((i) => {
                if (_db[i].jid === from) {
                   posi = i
                }
              })
            if (posi !== null) {
                return posi
            }
        }
        const isWelcome = isGroup ? getPosiSaying(from, welcome) ? true : false : false
        const isLeft = isGroup ? getPosiSaying(from, left) ? true : false : false

        // Banned
		if (!isGroup && isBan) {
		  xinz.modifyChat(from, 'delete')
		}
        if (isBan) return
        if (isBlock) return
        BannedExpired(ban)

        // MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner) return
            if (chats.toLowerCase().startsWith(prefix+'unmute')){
				addCountCmd('#unmute', sender, _cmd)
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
                reply(`Bot telah diunmute di group ini`)
            }
        }

        // TicTacToe
        if (isTicTacToe(from, tictactoe)) tictac(chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance)

        // GAME 
        game.cekWaktuFam(xinz, family100)
        game.cekWaktuTG(xinz, tebakgambar)
        game.cekWaktuMath(xinz, math)
        game.cekWaktuKuis(xinz, kuis)
        game.cekWaktuTL(xinz, tebaklagu)
        game.cekWaktuBendera(xinz, tebakbendera)
		game.cekWaktuSA(xinz, siapaku)
        cekWaktuSuit(from, xinz, suit)

        // GAME 
        if (game.isTebakGambar(from, tebakgambar) && isUser){
            if (chats.toLowerCase() === game.getJawabanTG(from, tebakgambar)){
				var htgm = randomNomor2(100, 200)
                addBalance(sender, htgm, balance)
                await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
            }
        }
        if (game.isTebakLagu(from, tebaklagu) && isUser){
            if (chats.toLowerCase() === game.getJawabanTL(from, tebaklagu)){
                var htgm = randomNomor2(200, 300)
                addBalance(sender, htgm, balance)
                await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTL(from, tebaklagu)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                tebaklagu.splice(game.getTLPosi(from, tebaklagu), 1)
            }
        }
        if (game.isMathGame(from, math) && isUser){
          if (chats === game.getJawabanMath(from, math)){
            var htgm = nebal(game.getHadiahMath(from, math))
            addBalance(sender, htgm, balance)
            await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMath(from, math)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}math*`)
            math.splice(game.getMathPosi(from, math), 1)
          }
        }
        if (game.isKuisGame(from, kuis) && isUser){
          if (chats.toLowerCase() === game.getJawabanKuis(from, kuis)) {
            var htgm = randomNomor2(100, 200)
            addBalance(sender, htgm, balance)
            await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanKuis(from, kuis)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}kuis*`)
            kuis.splice(game.getKuisPosi(from, kuis), 1)
          }
        }
        if (game.isBenderaGame(from, tebakbendera) && isUser){
          if (chats.toLowerCase() === game.getJawabanBendera(from, tebakbendera)){
			var htbg = randomNomor2(100, 200)
            addBalance(sender, htbg, balance)
            await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanBendera(from, tebakbendera)}\n*Hadiah :* $${htbg}\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
            tebakbendera.splice(game.getBenderaPosi(from, tebakbendera), 1)
          }
        }
		if (game.isSiapaAku(from, siapaku) && isUser) {
		  if (chats.toLowerCase() === game.getJawabanSA(from, siapaku)) {
			var hsa = randomNomor2(100, 200)
			addBalance(sender, hsa, balance)
			await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSA(from, siapaku)}\n*Hadiah :* $${hsa}\n\nIngin bermain lagi? kirim *${prefix}siapaaku*`)
			siapaku.splice(game.getSAPosi(from, siapaku), 1)
		  }
		}
        if (game.isfam(from, family100) && isUser){
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (chats.toLowerCase().includes(i)){
                    var htgmi = Math.floor(Math.random() * 20) + 1
                    addBalance(sender, htgmi, balance)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmi}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                xinz.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
        }
		
        // Casino Game
        if (fs.existsSync(`./media/casino/${from}.json`)) {
          var casinoo = game.setCasino(`${from}`)
          if (sender == `${casinoo.Y}@s.whatsapp.net` && chats.toLowerCase() == 'n') {
          xinz.sendMessage(from, `「 Game Casino Rejected 」\n\n• @${casinoo.Y} Membatalkan Game`, text, {quoted: msg, contextInfo: { mentionedJid: [casinoo.Y + "@s.whatsapp.net"]}})
          game.deleteCasino(from)
          }
        if (sender == `${casinoo.Y}@s.whatsapp.net` && chats.toLowerCase() == 'y') {
          var angka1 = await randomNomor2(10, 20)
          var angka2 = await randomNomor2(10, 20)
          if (angka1 > angka2) {
          starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
        xinz.sendMessage(from, starGame, text, {quoted: msg, contextInfo: { mentionedJid: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net",]}})
            await addBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
            await kurangBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
            game.deleteCasino(from)
        } else if (angka1 < angka2) {
           starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
        xinz.sendMessage(from, starGame, text, {quoted: msg, contextInfo: { mentionedJid: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net",]}})
        await addBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
        await kurangBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
        game.deleteCasino(from)
          } else if (angka1 = angka2) {
        starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
            xinz.sendMessage(from, starGame, text, {quoted: msg, contextInfo: { mentionedJid: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net",]}})
            game.deleteCasino(from)
        }
    }
}

        // Premium
        _prem.expiredCheck(xinz, premium)

        // Sewa
        _sewa.expiredCheck(xinz, sewa)

        // Auto Regist
        if (isCmd && !isUser) {
          pendaftar.push(sender)
          fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }

        // Message
        for (var i = 0; i < _msg.length ; i++) {
            if (!isBaileys && chats.toLowerCase() === _msg[i].message) {
              reply(`${_msg[i].jawaban}`)
           }
        }
        // Sticker
        for (var i = 0; i < _stick.length ; i++) {
            if (!isBaileys && chats.toLowerCase() === _stick[i].commands) {
              xinz.sendMessage(from, fs.readFileSync(`./media/sticker/${chats.toLowerCase()}.webp`), sticker, { quoted: msg })
           }
        }
        // Chats
        if (!msg.key.fromMe && chats.toLowerCase() === 'bot') {
            replyDeface(`Iya ada apa? ketik ${prefix}help untuk melihat list menu`)
        } else if (!msg.key.fromMe && !isBaileys && !isGroup && chats.toLowerCase() === 'bot?') {
            replyDeface(`Iya kak aku bot, ada yang bisa bot bantu?, ketik ${prefix}help untuk melihat list menu`)
        } else if (!msg.key.fromMe && !isBaileys && chats.toLowerCase() === 'p') {
            replyDeface(`Iya ada apa? ketik ${prefix}help untuk melihat list menu`)
        } else if (!msg.key.fromMe && !isOwner && msg.type === 'groupInviteMessage') {
            reply(`Hai kak ${pushname ? pushname : ''}, Jika ingin memasukkan bot ke dalam group silahkan chat ${prefix}owner, Terimakasih`)
        }

        // Anti View Once Message
        if (!msg.key.fromMe && !isOwner && antiViewOnce && msg.type === 'viewOnceMessage') {
            var tipe = 'Gambar'
             var tipeS = 'imageMessage'
              if (msg.message.viewOnceMessage.message.videoMessage) {
               tipe = 'Video'
                tipeS = 'videoMessage'
               }
               console.log(color('[AVO]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`Send ViewOnce ${tipe}`), 'from', color(pushname))
                var data = JSON.parse(JSON.stringify(msg.message.viewOnceMessage.message).replace(true, false))
                var men = msg.message.viewOnceMessage.message[tipeS].caption
                var tks = `@${sender.split("@")[0]} Terdeteksi mengirim ${tipe} bertipe viewOnce!`
                xinz.sendMessage(from, tks, text, { quoted: msg, contextInfo: { mentionedJid: parseMention(tks) }})
                .then( res => {
                  xinz.sendMessageFromContent(from, data, { contextInfo: { mentionedJid: parseMention(men) }})
            })
        }

        // Hidetag Detect
        if (isGroup && isBaileys) {
            if (mentioned.length >= groupMembers.length){
                if (!chats.match(/(@)/gi)) {
                    let xtt = `Terdeteksi @${sender.split('@')[0]} melakukan hidetag`
                    xinz.sendMessage(from, xtt, text, { quoted: msg, contextInfo: { mentionedJid: parseMention(xtt) }})
                }
            }
        }
        if (isGroup && isBaileys) {
            if (mentioned.length >= groupMembers.length){
                if (!chats.match(/(🗿)/gi)) {
                    let xtt = `Terdeteksi @${sender.split('@')[0]} mengirim emot batu`
                    xinz.sendMessage(from, xtt, text, { quoted: msg, contextInfo: { mentionedJid: parseMention(xtt) }})
                }
            }
        }

        // Simi Fitur
        if (!isGroup && simi && isQuotedMsg && !isCmd) {
        if (quotedMsg.fromMe) {
          try {
           xinz.updatePresence(from, Presence.composing)
           var get = await axios.get(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(chats)}&lang=id`)
           xinz.sendMessage(from, get.data.success, text, { quoted: msg })
          } catch (e) {
            xinz.sendMessage(from, { url: 'media/sticker/badut.webp' }, sticker, { quoted: msg })
            }
          }
        }

        // AFK
        if (isGroup && !isBaileys && !isChibot) {
            if (mentioned.length !== 0){
                for (let ment of mentioned) {
                    if (afk.checkAfkUser(ment, _afk)) {
                        const getId = afk.getAfkId(ment, _afk)
                        const getReason = afk.getAfkReason(getId, _afk)
                        const getTime = Date.now() - afk.getAfkTime(getId, _afk)
                        const heheh = ms(getTime)
                        await reply(`@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`)
                    }
                }
            }
            if (afk.checkAfkUser(sender, _afk)) {
                _afk.splice(afk.getAfkPosition(sender, _afk), 1)
                fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
                await mentions(`@${sender.split('@')[0]} telah kembali`, [sender], true)
            }
        }

        // Auto Sticker
       if (!isCmd && !isBaileys && !isChibot) {
        if (isImage || isQuotedImage) {
         if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (chats.toLowerCase().includes('sticker') || chats.toLowerCase().includes('stiker')) {
         addCountCmd('#sticker', sender, _cmd)
         console.log(color('[AS]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`Type Image`), 'from', color(pushname))
         let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : isQuotedTxt ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
         let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
          await ffmpeg(`${media}`)
          .input(media)
          .on('start', function (cmd) {
           console.log(`Started : ${cmd}`)
          })
          .on('error', function (err) {
           console.log(`Error : ${err}`)
           fs.unlinkSync(media)
           reply(mess.error.api)
          })
          .on('end', function () {
           console.log('Finish')
           exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
            if (error) return reply(mess.error.api)
            xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
            limitAdd(sender, limit)
            fs.unlinkSync(media)
            fs.unlinkSync(`./sticker/${sender}.webp`)
           })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(`./sticker/${sender}.webp`)
        }}
        if (isVideo || isQuotedVideo) {
         if (chats.toLowerCase().includes('sticker') || chats.toLowerCase().includes('stiker')) {
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
           var seconds = isQuotedVideo ? msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds : msg.message.videoMessage.seconds
           if (seconds > 100) return reply(`Maximal video 10 detik!`)
            addCountCmd('#sticker', sender, _cmd)
            console.log(color('[AS]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`Type Video`), 'from', color(pushname))
            let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : isQuotedTxt ? msg : msg
            let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
             reply(mess.wait)
              await ffmpeg(`${media}`)
              .inputFormat(media.split('.')[4])
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                reply(mess.error.api)
              })
              .on('end', function () {
               console.log('Finish')
               exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                 if (error) return reply(mess.error.api)
                 xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                 limitAdd(sender, limit)
                 fs.unlinkSync(media)
                 fs.unlinkSync(`./sticker/${sender}.webp`)
                })
              })
              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(`./sticker/${sender}.webp`)
        }}}

        if (!isCmd && !isChibot && isQuotedTxt && quotedMsg.id.startsWith('stc')) {
         if (msg.type === "imageMessage") {
          console.log(color('[AS]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`Type Image`), 'from', color(pushname))
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
          addCountCmd('#sticker', sender, _cmd)
          var media = await downloadM(msg, `./sticker/${sender}`)
          await ffmpeg(`${media}`)
          .input(media)
          .on('start', function (cmd) {
           console.log(`Started : ${cmd}`)
          })
          .on('error', function (err) {
           console.log(`Error : ${err}`)
           fs.unlinkSync(media)
           reply(mess.error.api)
          })
          .on('end', function () {
           console.log('Finish')
           exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
            if (error) return reply(mess.error.api)
            xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
            limitAdd(sender, limit)
            fs.unlinkSync(media)
            fs.unlinkSync(`./sticker/${sender}.webp`)
           })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(`./sticker/${sender}.webp`)
         } else if (msg.type === "videoMessage") {
          console.log(color('[AS]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`Type Video`), 'from', color(pushname))
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
          if (msg.message.videoMessage.seconds > 10) return reply(`Maximal video 10 detik!`)
          addCountCmd('#sticker', sender, _cmd)
          var media = await downloadM(msg, `./sticker/${sender}`)
          reply(mess.wait)
          await ffmpeg(`${media}`)
           .inputFormat(media.split('.')[4])
           .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
           })
           .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(mess.error.api)
           })
           .on('end', function () {
           console.log('Finish')
           exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
            if (error) return reply(mess.error.api)
            xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
            limitAdd(sender, limit)
            fs.unlinkSync(media)
            fs.unlinkSync(`./sticker/${sender}.webp`)
           })
        })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(`./sticker/${sender}.webp`)
         }
        }
		
		if (isQuotedMsg && quotedMsg.isChibot && quotedMsg.id.endsWith('NHT')) {
		  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (isNaN(chats)) return reply(`Harus berupa angka`)
				reply(mess.wait).then( res => xinz.sendMessage(from, 'Mungkin agak lama...', text))
			    addCountCmd('#nhentaidl', sender, _cmd)
			    nhentaidl(chats).then(async(res) => {
				  if (isUrl(res)) {
				  var anu = await nhentai.getDoujin(chats)
				  var media = await getBuffer(anu.thumbnails[0])
				  var data = await xinz.prepareMessageMedia(await getBuffer(res), MessageType.document, { mimetype: 'application/pdf', filename: chats+'.pdf' })
				  data.documentMessage.jpegThumbnail = media
				  var dataButton = [{ buttonId: prefix+'nhentaidl', buttonText: { displayText: 'Dapatkan Lagi' }, type: 1 }]
				  var button = {
					  documentMessage: data.documentMessage,
					  contentText: `_*Nhentai*_\n\n*Title :* ${anu.title}\n*Link :* ${anu.link}`,
		 	          footerText: 'Created By Xyann',
				      buttons: dataButton,
					  headerType: 'DOCUMENT'
				  }
				  xinz.sendMessage(from, button, buttonsMessage, { quoted: msg })
				  limitAdd(sender, limit)
				  } else {
					reply(res)
				  }
				})
		}

        // Anti Spam
        if (!isOwner && !msg.key.fromMe && !isPremium && isCmd && msgFilter.isFiltered(from) && !isGroup) {
        return console.log('[', color('SPAM!!', 'red'), ']', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)),
        textImg('Spam!! Wait Cooldown 10 second!')
        } else if (!isOwner && !msg.key.fromMe && !isPremium && isCmd && msgFilter.isFiltered(from) && isGroup) {
        return console.log('[', color('SPAM!!', 'red'), ']', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName)),
        textImg('Spam!! Wait Cooldown 10 second!')}
        // [BETA] Avoid Spam Message
		if (isCmd && !isOwner && !isPremium && !msgFilter.isFiltered(from)) {
		  if (command.length !== 1 && listCmd.includes(command.split(prefix)[1])) {
		   msgFilter.addFilter(from)
		  }
		}

        //if (isMods && isOwner){
            if (chats.startsWith(">")) {
            if (!isMods && !isOwner) return
            console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
            const ev = (sul) => {
               var sat = JSON.stringify(sul, null, 2)
               var bang = util.format(sat)
             if (sat == undefined) {
                bang = util.format(sul)
             }
             return replyDeface(bang)
             }
             try {
             replyDeface(util.format(eval(`;(async () => { ${q} })()`)))
             } catch (e) {
             replyDeface(util.format(e))
             }
            } else if (chats.startsWith("x")) {
                if (!isOwner) return
                console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                try {
                    let evaled = await eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    replyDeface(`${evaled}`)
                } catch (err) {
                    replyDeface(`${err}`)
                }
            } else if (chats.startsWith("$ ")){
            if (!isMods && !isOwner) return
                console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                exec(chats.slice(2), (err, stdout) => {
		    if (err) return replyDeface(`${err}`)
		    if (stdout) replyDeface(`${stdout}`)
		})
            }
        //}

        // CMD
        if (isCmd && !isGroup && !fromMe) {
			//xinz.updatePresence(from, Presence.composing)
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[ Exec ]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        }
        if (isCmd && isGroup && !fromMe) {
			//xinz.updatePresence(from, Presence.composing)
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[ Exec ]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }

        switch(command){
            case 'prefix': case 'cekprefix':{
                textImg(`Multi Prefix!`)
            }
                 break
            case 'assalamualaikum':{
                textImg('Waalaikumusalam Warahmatullahi Wabarakatuh')
                }
                break
			case prefix+'dym':
			    if (!isOwner) return
				if (args.length < 2) return reply(`Nama cmd nya?`)
				args.splice(0, 1)
			    for (let i of args) {
				  if (!listCmd.includes(i)) {
			      listCmd.push(i)
				  fs.writeFileSync('./database/listcmd.json', JSON.stringify(listCmd, null, 2))
				}}
				reply('Sukses')
			    break
			case prefix+'akseseval':
			    if (isOwner) return reply(`Lu owner vangke!`)
				if (isMods) return reply(`Kamu sudah terdaftar dalam database mods`)
			    if (isGroup) return reply(mess.OnlyPM)
			    if (args.length < 2) return reply(`Masukkan parameter Username dan Password\nContoh: ${command} username|password`)
			    var user = q.split("|")[0]
				var pw = q.split("|")[1]
				if (!user) return reply(`Masukkan parameter Username dan Password\nContoh: .akseseval username|password`)
				if (!pw) return reply(`Masukkan parameter Username dan Password\nContoh: .akseseval username|password`)
			    var uss = `Admin`
				var pass = `inipw`
				if (user !== uss) return reply(`Login failed. Invalid username or password`)
			    if (pw !== pass) return reply(`Login failed. Invalid username or password`)
			    modsNumber.push(sender)
			    fs.writeFileSync('./database/modsNumber.json', JSON.stringify(modsNumber, null, 2))
				reply(`Login accepted!`)
			    xinz.sendMessage(ownerNumber, `@${sender.split("@")[0]} Join access eval on ${jam} WIB`, text, { contextInfo: { mentionedJid: [sender] }})
			    break
			case prefix+'delakses':
			    if (!isOwner) return reply(mess.OnlyOwner)
				var number = null
			    if (mentionUser[0]) {
				   number = mentionUser[0]
				} else if (args[1].length === 1 && !isNaN(args[1])) {
				   if (args[1] > modsNumber.length) return reply(`Hanya terdaftar sebanyak ${modsNumber.length}, ketik ${prefix}listmods`)
					   number = modsNumber[args[1] - 1]
		        } else if (args[1].length > 1 && !isNaN(args[1])) {
				   var data = await xinz.isOnWhatsApp(args[1]+'@s.whatsapp.net')
				   if (data === undefined) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
				   number = args[1]+'@s.whatsapp.net'
	            } else {
				  reply(`Kirim perintah ${command} @tag atau nomor yang ingin di hapus dari list mods`)
				}
			    var posi = null
			    Object.keys(modsNumber).forEach((i) => {
				   if (modsNumber[i] === number) {
					 posi = i
				   }
				})
				if (posi !== null) {
				  modsNumber.splice(posi, 1)
				  fs.writeFileSync('./database/modsNumber.json', JSON.stringify(modsNumber, null, 2))
				  reply(`Sukses`)
				} else {
				  reply(`Nomer tersebut tidak terdaftar di dalam database!`)
				}
			    break
			case prefix+'listmods':
			    if (!isOwner) return reply(mess.OnlyOwner)
			    var no = 1
				var teks = `List Mods GhosBid\n\n`
			    for (let i of modsNumber) {
				  teks += `*${no++}.* @${i.split("@")[0]}\n`
				}
				  teks += `\nKetik ${prefix}delakses num/@tag untuk menghapus <Only Owner>`
				reply(teks)
			    break
            case prefix+'sendcontact':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah ${command} nama`)
                addCountCmd('#sendcontact', sender, _cmd)
                await xinz.getContact(q)
                .then(async(res) => {
				 if (res.status == 200) {
				  if (res.result.length > 1) {
				  let arry = []
				  for (let i = 0; i < res.result.length; i++) {
					 var name = res.result[i].name
					 var jid = res.result[i].jid.split("@")[0]
					 var status = 401 ? 'Kontak' : res.result[i].status
					 var data = { displayName: name, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + name + '\n' + 'ORG:' + status +'\n' + 'TEL;type=CELL;type=VOICE;waid=' + jid + ':+' + jid + '\n' + 'END:VCARD'.trim() }
					 arry.push(data)
				  }
				  xinz.sendMessage(from, { contacts: arry }, MessageType.contactsArray, { quoted: msg }).then( anu => xinz.reply(from, 'Hanya ditemukan '+res.result.length+' kontak', anu))
				  } else {
					xinz.sendContact(from, res.result[0].jid.split("@")[0], res.result[0].name, 404 ? 'Kontak' : res.result[0].status, { quoted: msg })
					.then(an => xinz.reply(from, 'Hanya ditemukan '+res.result.length+' kontak', an))
				  }
				} else if (res.status == 404) {
				   xinz.sendMessage(from, res.msg, text, { quoted: msg })
				} else if (res.status == 401) {
				   xinz.sendMessage(from, res.msg, text, { quoted: msg })
				}
                })
				break
        /*    case prefix+'claim':
                 if (!event) return reply('Event nya belum dimulai!')
                 if (event) {
                 if (isClaimWinner(sender)) return reply('Kamu sudah mengclaimnya')
                 if (winner.length > 4) return reply(`Sayangnya kamu telat, event sudah di menang kan oleh 5 orang pemenang :(\nSee you next time in 2000 user ~`)
                 if (isUser) {
                 winner.push({jid: sender, claim: false})
                 fs.writeFileSync('./database/winner.json', JSON.stringify(winner, null, 2))
                 reply(`Selamat kamu memenangkan event ini, silahkan kirim perintah *${prefix}join link grup* untuk memasukkan bot ke dalam group mu`)
                 }
              }
                 break
            case prefix+'listpemenang':
                 var tek = `List Pemenang Event :\n\n`
                 var nox = 0
                 for (let x of winner) {
                   nox += 1
                   tek += `*${nox.toString()}.* @${x.jid.split("@")[0]}\n`
                 }
                 tek += `\nCongrats untuk pemenang 🎉`
                 reply(tek)
                 break
             case prefix+'join':
                 if (!event) return reply(`Event nya belum dimulai!`)
                 if (!isClaimWinner(sender)) return reply(`Kamu belum mengklaim event nya`)
                 if (winner[getWinner(sender)].claim) return reply(`Hanya bisa memasukkan bot satu kali!`)
                 if (args.length < 2) return reply(`Kirim perintah *${prefix}join* link grup`)
                 if (!isUrl(args[1]) && !args[1].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
                 let coe = args[1].replace('https://chat.whatsapp.com/', '')
                 var dat = await xinz.inspectCode(coe)
                 if (dat.size < 150) return reply(`Minimal member pada group harus 150, sedangkan group tersebut hanya memiliki ${dat.size} member, silahkan masukkan bot pada group yang lebih banyak membernya!`)
                 xinz.acceptInvite(coe)
                 .then((res) => {
                  reply(`Berhasil memasukkan bot ke dalam group tersebut`)
                  _sewa.addSewaGroup(res.gid, '30d', sewa)
                  winner[getWinner(sender)].claim = true
                  fs.writeFileSync('./database/winner.json', JSON.stringify(winner, null, 2))
                 })
                 .catch((err) => reply(`Harap masukkan link yang valid, gua walau bot gabisa di bodohin ye`))
                 break 
			case prefix+'join':
			     if (winner.length === 5) return reply(`Temlat yahaha, udh ada 5 orang yang dapet`)
			     if (getWinner(sender) !== null) return reply (`Hanya bisa memasukkan bot satu kali!`)
			     if (args.length < 2) return reply(`Kirim perintah ${command} link grup\nContoh : ${command} https://chat.whatsapp.com/xxxxxxxxxxx`)
			     if (!isUrl(args[1]) && !args[1].startsWith('https://chat.')) return reply(mess.error.Iv)
				 var cde = args[1].split("/")[3]
			     var hhh = await xinz.inspectCode(cde).catch((e) => reply(mess.error.Iv))
				 if (hhh.size < 100) return reply(`Minimal grup tersebut mempunyai 100 member`)
				 xinz.acceptInvite(cde)
			     .then(async(anu) => {
				   reply(`Sukses`)
				   _sewa.addSewaGroup(anu.gid, '30d', sewa)
			       var anx = { jid: sender, joined: true }
				   winner.push(anx)
				   fs.writeFileSync('./database/winner.json', JSON.stringify(winner, null, 2))
				 }).catch((e) => reply(mess.error.Iv))
			     break
            case prefix+'dashboard':
			     addCountCmd('#dashboard', sender, _cmd)
                 var posi = await getPosiCmdUser(sender, _cmdUser)
                 _cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
                 _cmd.sort((a, b) => (a.count  < b.count) ? 1 : -1)
                 var posi = await getPosiCmdUser(sender, _cmdUser)
                 var jumlah = _cmdUser[posi].db.length
                 if (jumlah > 5) jumlah = 5
                 var totalUser = 0
                 for (let x of _cmdUser[posi].db) {
                    totalUser = totalUser + x.count
                 }
                 var total = 0
                 for (let o of _cmd) {
                    total = total + o.count
                 }
                 var teks = `*GhosKyy Bid DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
                 teks += `*Most Command Global*\n`
                 for (let u = 0; u < 10; u ++) {
                     teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
                 }
                 teks += `\n*Most Command User*\n`
                 for (let i = 0; i < jumlah; i ++) {
                     teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
                 }
                 reply(teks)
                 break*/
            case prefix+'fetch':
                 if (!isOwner) return reply(mess.OnlyOwner)
                 let ress = await fetch(q)
                 if (!/text|json/.test(ress.headers.get('content-type'))) return xinz.sendMessage(from, ress, image, { caption: text, quoted: msg })
                 var tks = await ress.buffer()
                 addCountCmd('#fetch', sender, _cmd)
                 try {
                    tks = util.format(JSON.parse(tks+''))
                      } catch (e) {
                    tks = tks + ''
                      } finally {
                    xinz.sendMessage(from, tks.slice(0, 65536) + '', MessageType.extendedText, { quoted: msg })
                 }
                 break
            case prefix+'imgbb':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (isImage || isQuotedImage) {
                 addCountCmd('#imgbb', sender, _cmd)
                 reply(mess.wait)
                 var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                 var media = await xinz.downloadAndSaveMediaMessage(enmedia)
                 var anu = await imgbb(igbkey, media)
                 reply(anu.display_url)
                 limitAdd(sender, limit)
                 fs.unlinkSync(media)
                 } else {
                    reply(`Kirim/reply gambar dengan caption *${command}*`)
                 }
                 break
            case prefix+'addmsg':
            case prefix+'addmessage':
                 if (!isPremium) return reply(mess.OnlyPrem)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* message|jawaban`)
                 var soal = q.split('|')[0]
                 var jawaban = q.split('|')[1]
                 if (!jawaban) return reply(`Jawabannya apa?`)
                 if (body.slice(130) && !isOwner) return reply(`Jawaban lu kepanjangan bro`)
                 if (checkMessage(soal.toLowerCase(), _msg)) return reply(`Message tersebut sudah ada!`)
                 addMessage(soal.toLowerCase(), jawaban, sender, _msg)
                 addCountCmd('#addmsg', sender, _cmd)
                 reply('Sukses!')
                 break
            case prefix+'delmsg':
            case prefix+'delmessage':
                 if (!isPremium) return reply(mess.OnlyPrem)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* message`)
                 if (isCreated(q.toLowerCase(), sender, _msg, isOwner)) return reply(`Anda bukan pembuat message!`)
                 deleteMessage(q.toLowerCase(), _msg)
                 addCountCmd('#delmsg', sender, _cmd)
                 reply('Sukses!')
                 break
            case prefix+'listmessage':
            case prefix+'listmsg':
                 var txtt = `List Message\nJumlah : *${_msg.length}*\n\n`
                 for (let i of _msg){
                    txtt += `*Msg :* ${i.message}\n*Jawaban :* ${i.jawaban}\n*Created :* @${i.created.split("@")[0]}\n\n`
                 }
                 xinz.sendMessage(from, txtt, text, { quoted: msg, contextInfo:{ mentionedJid: parseMention(txtt) }})
                 addCountCmd('#listmsg', sender, _cmd)
                 break
            case prefix+'addstc':
            case prefix+'addsticker':
                 if (!isPremium) return reply(mess.OnlyPrem)
                 if (!q || !isQuotedSticker) return reply(`Example: ${command} wibu dan tag stickernya`)
                 addCountCmd('#addstc', sender, _cmd)
                 if (checkSticker(q.toLowerCase(), _stick)) {
                    reply(`Sticker tersebut sudah ada!`)
                 } else {
                    addSticker(q.toLowerCase(), sender, _stick)
                    fs.writeFileSync('./database/sticker.json', JSON.stringify(_stick))
                    var mediaData = await xinz.downloadAndSaveMediaMessage(JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo, `./media/sticker/${q}`)
                    reply(`Sukses menambahkan sticker ke dalam database!`)
                 }
                 break
            case prefix+'delstc':
            case prefix+'delsticker':
                 if (!isPremium) return reply(mess.OnlyPrem)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* query`)
                 addCountCmd('#delstc', sender, _cmd)
                 if (isCreatedStc(q.toLowerCase(), sender, _stick, isOwner)) return reply(`Anda bukan pembuat command sticker tersebut!`)
                 try {
                 deleteSticker(q.toLowerCase(), _stick)
                 fs.unlinkSync(`./media/sticker/${q}.webp`)
                 reply(`Sukses!`)
                 } catch (e) {
                 reply(`Sticker tersebut tidak terdaftar didatabase!`)
                 }
                 break
            case prefix+'liststiker':
            case prefix+'liststicker':
            case prefix+'liststc':
                 var txs = `List Sticker\nJumlah : *${_stick.length}*\n\n`
                 for (let i of _stick) {
                    txs += `*Teks :* ${i.commands}\n*Created :* @${i.created.split("@")[0]}\n\n`
                 }
                 xinz.sendMessage(from, txs, text, { quoted: msg, contextInfo:{ mentionedJid: parseMention(txs) }})
                 addCountCmd('#liststc', sender, _cmd)
                 break
            case prefix+'addcmd': 
       case prefix+'setcmd':
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              addCountCmd('#setcmd', sender, _cmd)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} commandnya dan <tag stickernya>`)
              if (!q.startsWith('')) return reply(`Command di awali dengan prefix "#"\nContoh : ${command} #help`)
              var kodenya = msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              if (checkSCommand(kodenya, _scommand)) return reply(`Stiker tersebut sudah terdaftar di dalam database, silahkan gunakan stiker lain!`)
              addCmd(kodenya, q, _scommand)
              var mediaData = await xinz.downloadAndSaveMediaMessage(JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo, `./media/sticker/${q}`)
              textImg("Done!")
              } else {
              reply('tag stickernya')
              }
              break
       case prefix+'delcmd':
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              addCountCmd('#delcmd', sender, _cmd)
              if (args.length < 2) return reply(`Cmd Nya Apa ?\n\nPenggunaan : ${command} cmd\nContoh : ${command} #menu`)
              if (fs.existsSync('./media/sticker/' + q + '.webp')) {
              _scommand.splice(getCommandPosition(q, _scommand), 1)
              fs.writeFileSync('./database/stickercmd.json', JSON.stringify(_scommand, null, 2))
              fs.unlinkSync(`./media/sticker/${q}.webp`)
              textImg("Done!")
              } else {
                reply(`Stiker Command ${q} Tidak Terdaftar Di Database, Ketik ${prefix}listcmd untuk melihat list command`)
              }
              break
       case prefix+'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              addCountCmd('#listcmd', sender, _cmd)
              break
         case prefix+'getstc': case prefix+'getsticker':
         case prefix+'getstiker': case prefix+'getcmd':{
             if (args.length < 2) return reply(`Kirim perintah *${command}* cmd\nContoh : ${command} #menu`)
             addCountCmd('#getstiker', sender, _cmd)
             if (fs.existsSync('./media/sticker/' + q + '.webp')) {
             xinz.sendMessage(from, fs.readFileSync('./media/sticker/' + q + '.webp'), sticker, { quoted: msg })
             } else {
               reply(`Stiker Command ${q} Tidak Terdaftar Di Database, Ketik ${prefix}listcmd untuk melihat list command`)
             }
         }
            break
            case prefix+'00': case prefix+'00': {
      let timestampi = speed();
let latensii = speed() - timestampi
          xen = "6289653381067@s.whatsapp.net"
ghoo = "6289514080169@s.whatsapp.net"
exports.menu = (xinz, prefix, pushname, ucapanWaktu, sender, isOwner, isPremium, gcount, glimit, baterai, limit, balance, getLimit, getBalance, cekGLimit, _cmd) 
              menu = `
              🐥🐣
yoo my name is GhosKyy Bid V2.0 , Iam Simple NodeJs By @${xen.split('@')[0]}

› *Info User* ‹
Hello ${pushname ? pushname: ''}, ${ucapanWaktu} ✨
Status : *${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}*
Limit Harian : *${isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*
Limit Game : *${isOwner ? 'Unlimited' : `${cekGLimit(sender, gcount, glimit)}`}*

${readmore}
› My Feature ‹
› ${prefix}infobot
› ${prefix}stats
› ${prefix}runtime
› ${prefix}sourcecode
› ${prefix}groupchitanda
› ${prefix}speed
› ${prefix}owner
› ${prefix}donasi
› ${prefix}sewa
› ${prefix}ping
› ${prefix}snk
› ${prefix}dashboard
› ${prefix}infoupdate
› ${prefix}partner
› ${prefix}topbalance
› ${prefix}report
› ${prefix}listban
› ${prefix}listblock
› ${prefix}listprem
› ${prefix}listmods

› *Feature Converter* ‹
› ${prefix}sticker
› ${prefix}swm
› ${prefix}take
› ${prefix}toimg
› ${prefix}tovid
› ${prefix}tomp3
› ${prefix}toptt
› ${prefix}tourl
› ${prefix}attp text
› ${prefix}ttp text
› ${prefix}semoji
› ${prefix}tinyurl url
› ${prefix}imgbb
› ${prefix}nuliskiri text
› ${prefix}nuliskanan text
› ${prefix}foliokiri text
› ${prefix}foliokanan text
› ${prefix}stcmeme
› ${prefix}stikerwa
› ${prefix}takeviewonce
› ${prefix}memegenerator

› *Feature Download* ‹
› ${prefix}ytmp4 url
› ${prefix}ytmp3 url
› ${prefix}igdl url
› ${prefix}igstory username
› ${prefix}fbdl url
› ${prefix}tiktok url
› ${prefix}tiktokmp3 url
› ${prefix}snackvideo url
› ${prefix}ytsearch query
› ${prefix}getmusic urutan
› ${prefix}getvideo urutan
› ${prefix}play query
› ${prefix}playmp4 query
› ${prefix}mediafire link
› ${prefix}whatmusic
› ${prefix}telestick
› ${prefix}pinterestdl
› ${prefix}nhentaidl
 
› *Feature Stalk* ‹
› ${prefix}igstalk username
› ${prefix}ghstalk username
› ${prefix}tiktokstalk username
› ${prefix}freefire id
›  ${prefix}inspect

› *Feature Other* ‹
› ${prefix}covid19
› ${prefix}lirik
› ${prefix}chord
› ${prefix}wikipedia
› ${prefix}translate kodebahasa text
› ${prefix}kalkulator soal
› ${prefix}faktaunik
› ${prefix}ssweb url
› ${prefix}cekprem
› ${prefix}daftarpremium
› ${prefix}spamcall
› ${prefix}tts
 
› *Feature Text Maker* ‹
› ${prefix}blackpink text
› ${prefix}tahta text
› ${prefix}neon text
› ${prefix}glitch text1|text2
› ${prefix}thundername text
› ${prefix}pornhub text1|text2
› ${prefix}wlogo text1|text2
› ${prefix}ninjalogo text1|text2
› ${prefix}metaldark text
› ${prefix}cglogo text1|text2

› *Baileys* ‹
› ${prefix}tagme
› ${prefix}kontak nomor|nama
› ${prefix}hidetag
› ${prefix}fakehidetag @tag|teks
› ${prefix}tohidetag
› ${prefix}fakeloc name|addres
› ${prefix}bugimg teks
› ${prefix}fakedeface link|name|desk
› ${prefix}readmore text|text
› ${prefix}jadian
› ${prefix}ganteng
› ${prefix}cantik
› ${prefix}fitnah
› ${prefix}nowa
› ${prefix}takequoted
› ${prefix}addmessage
› ${prefix}delmessage
› ${prefix}listmessage
› ${prefix}addsticker
› ${prefix}delsticker
› ${prefix}liststicker

› *Feature Game* ‹
› ${prefix}tictactoe 
› ${prefix}delttc
› ${prefix}tebaklagu
› ${prefix}tebakgambar
› ${prefix}family100
› ${prefix}casino 
› ${prefix}suit
› ${prefix}siapaaku
› ${prefix}tebakbendera
› ${prefix}delcasino
› ${prefix}koin
› ${prefix}math
› ${prefix}kuis
› ${prefix}slot

› *Feature Limit* ‹
› ${prefix}buylimit
› ${prefix}buyglimit
› ${prefix}givelimit
› ${prefix}givegamelimit
› ${prefix}transfer
› ${prefix}limit
› ${prefix}balance

› *Feature Wibu* ‹
› ${prefix}waifu
› ${prefix}loli
› ${prefix}nekonime
› ${prefix}megumin
› ${prefix}sagiri
› ${prefix}shinobu
› ${prefix}hentai
› ${prefix}videoanime

› *Feature Random Teks* ‹
› ${prefix}apakah
› ${prefix}bisakah
› ${prefix}kapankah
› ${prefix}hobby
› ${prefix}rate
› ${prefix}cekbapak
› ${prefix}seberapagay
› ${prefix}quotes
› ${prefix}motivasi
› ${prefix}bucin
› ${prefix}katabijak
› ${prefix}pantun

› *Feature Islam* ‹
› ${prefix}asmaulhusna
› ${prefix}listsurah
› ${prefix}alquran
› ${prefix}alquranaudio
› ${prefix}kisahnabi
› ${prefix}jadwalsholat
› ${prefix}quoteislami

› *Feature Random* ‹
› ${prefix}truth
› ${prefix}dare
› ${prefix}meme
› ${prefix}darkjokes
› ${prefix}asupan
› ${prefix}pinterest
› ${prefix}cecan
› ${prefix}cogan
› ${prefix}patrick
› ${prefix}gimage
› ${prefix}aesthetic

› *Feature Group* ‹
› ${prefix}afk
› ${prefix}infogrup
› ${prefix}chatinfo
› ${prefix}add 628xx
› ${prefix}kick @tag
› ${prefix}promote @tag
› ${prefix}demote @tag
› ${prefix}linkgc
› ${prefix}leave
› ${prefix}setdesc
› ${prefix}setgrupname
› ${prefix}setppgrup
› ${prefix}group
› ${prefix}opengrup
› ${prefix}closegrup
› ${prefix}ceksewa
› ${prefix}listadmin
› ${prefix}myprofile
› ${prefix}join
› ${prefix}tagall
› ${prefix}mute
› ${prefix}unmute

› *Feature No Category* ‹
› ${prefix}left
› ${prefix}antilink
› ${prefix}setwelcome
› ${prefix}welcome
› ${prefix}delbadword
› ${prefix}setleft
› ${prefix}antibadword 
› ${prefix}addbadword
› ${prefix}listbadword

› *Owner* ‹
> <code>
$ <executor>
› ${prefix}self
› ${prefix}public
› ${prefix}setpp
› ${prefix}setname
› ${prefix}setbio
› ${prefix}setprefix
› ${prefix}akseseval
› ${prefix}delakses
› ${prefix}bc
› ${prefix}ban @tag
› ${prefix}unban @tag
› ${prefix}addprem @tag
› ${prefix}delprem @tag
› ${prefix}addchange
› ${prefix}delchange
› ${prefix}quotegc
› ${prefix}block
› ${prefix}unblock
› ${prefix}setsewa
› ${prefix}listsewa
› ${prefix}clearall
› ${prefix}clearchat
› ${prefix}readall
› ${prefix}resetlimit
› ${prefix}exif nama|author

› *Info Owner* ‹
Nomor : @${xen.split('@')[0]}
Instagram : instagram.com/iamghosky_
 › *BOT INFO* ‹
 Nomor : @${ghoo.split('@')[0]}
 Device ku : _${xinz.user.phone.device_manufacturer.kapitalis()} Versi ${xinz.user.phone.device_model}_
 Ram : _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
 kekuatan sinyal : _${latensii.toFixed(4)}ms_
`,
  xinz.sendButLocation(from, menu(xinz, prefix, pushname, ucapanWaktu, sender, isOwner, isPremium, gcount, glimit, baterai, limit, balance, getLimit, getBalance, cekGLimit, _cmd), 'Bot Ini Masih Tahap Pengembangan, Jika Menemukan Semacam Bug Harap Lapor Owner', fs.readFileSync('./media/Chitanda.jpg'), [ { buttonId: `${prefix}sc`, buttonText: { displayText: "Source Code" }, type: 1}, { buttonId: `${prefix}owner`, buttonText: { displayText: "Owner" }, type: 1}], { contextInfo: { mentionedJid: [sender, ownerNumber] }})
                addCountCmd('#help', sender, _cmd)
            }
            break
            case prefix+'menu': case prefix+'help':{
                 /*const buttonT = [
                   { buttonId: `${prefix}sc`, buttonText: { displayText: "< SourceCode />" }, type: 1 },
                   { buttonId: `${prefix}owner`, buttonText: { displayText: "Owner" }, type: 1 }
                 ]
                 const buttonMessage = {
                   contentText: menu(xinz, prefix, pushname, ucapanWaktu, sender, isOwner, isPremium, gcount, glimit, baterai, limit, balance, getLimit, getBalance, cekGLimit, _cmd),
                   footerText: 'Bot Ini Masih Tahap Pengembangan, Jika Menemukan Semacam Bug Harap Lapor Owner',
                   buttons: buttonT,
                   headerType: 1
                 }
                 xinz.sendMessage(from, buttonMessage, buttonsMessage, {detectLinks: false, contextInfo: {mentionedJid: [ownerNumber, sender]}})
*/
var xyx = ["./media/saskeh.jpg", "./media/fllw.jpg", "./media/Chitanda.jpg","./media/suba.jpg", "./media/yot.jpg"]
var yann = pickRandom(xyx)
                xinz.sendButLocation(from, menu(xinz, prefix, pushname, ucapanWaktu, sender, isOwner, isPremium, gcount, glimit, baterai, limit, balance, getLimit, getBalance, cekGLimit, _cmd), `\nNew Feature :\n› ${prefix}ppcouple\n› ${prefix}cekme\n› ${prefix}wallml\n› ${prefix}cosplay\n› ${prefix}milf\n\nWaktu Di Indonesia\n\nWib : ${jam}\nWita : ${jamta}\nWit : ${jamti}\n\nGhos - Bid By Xyann\n\nFollow My Instagram :\ninstagram.com/iamghosky_\n\nJoin My Grup Chat\nhttps://chat.whatsapp.com/HECLovHbCI6LVVH4Q8FN2C\n\nGhos - Bid`, fs.readFileSync(`${yann}`), [ { buttonId: `${prefix}sc`, buttonText: { displayText: "Source Code" }, type: 1}, { buttonId: `${prefix}owner`, buttonText: { displayText: "Owner" }, type: 1}], { contextInfo: { mentionedJid: [sender, ownerNumber, ghoo], externalAdReply: { title: `Follow My Instagram`, body: `Click Here >_<`, mediaType: 2, thumbnail: fs.readFileSync('./media/fllw.jpg'), sourceUrl: `instagram.com/iamghosky_`}}})
                addCountCmd('#help', sender, _cmd)
            }
                break
            case prefix+'>':
	    if (!isMods && !isOwner) return
	    let syntaxerror = require('syntax-error');
	    let { JSDOM } = require('jsdom')

	    let util = require('util');

	    let _return;
	    let _syntax = '';
	    let _text = body.slice(2);
	    try {
	    let exec = new (async () => {}).constructor(
	        'print',
	        'msg',
	        'require',
	        'xinz',
	        'axios',
	        'fs',
	        'exec',
	        'reply',
	        'from',
	        'sender',
	        'cheerio',
	        'JSDOM',
	        _text
	    );
	    _return = await exec(
	        (...args) => {
		console.log(...args);
		return reply(util.format(...args));
	        },
	        msg,
	        require,
	        xinz,
	        axios,
	        fs,
	        exec,
	        reply,
	        from,
	        sender,
	        cheerio,
	        JSDOM
	    );
	    } catch (e) {
	    let err = await syntaxerror(_text);
	    if (err) _syntax = '' + err + '\n\n';
	    _return = e;
	    } finally {
	    reply(_syntax + util.format(_return));
	    }
break
//------------------< Sticker / Tools >-------------------
            case prefix+'exif':{
                 if (!isOwner) return
                 const namaPack = q.split('|')[0] ? q.split('|')[0] : q
                 const authorPack = q.split('|')[1] ? q.split('|')[1] : ''
                 exif.create(namaPack, authorPack)
                 await reply('Done gan')
                 addCountCmd('#exif', sender, _cmd)
            }
                 break
             case prefix+'translate': case prefix+'tr':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}translate* kodebahasa teks\n*${prefix}translate* kodebahasa <reply message>`)
                addCountCmd('#translate', sender, _cmd)
                if (isQuotedMsg){
                    let bahasanya = args[1].toString()
                    const trans = await translate(quotedMsg.chats, {
                        to: bahasanya
                    })
                    .then((res) => reply(res.text))
                    .catch((err) => {
                        reply(`Kode bahasa salah!`)
                    })
                    trans
                    limitAdd(sender, limit)
                } else {
                    if (args.length < 3) return reply(`Penggunaan :\n*${prefix}translate* kodebahasa teks\n*${prefix}translate* kodebahasa <reply message>`)
                    let bahasanya = args[1].toString()
                    let textnya = q.slice(args[1].length + 1, q.length)
                    const trans = await translate(textnya, {
                        to: bahasanya
                    })
                    .then((res) => reply(res.text))
                    .catch((err) => {
                        reply(`Kode bahasa salah!`)
                    })
                    trans
                    limitAdd(sender, limit)
                }
            }
                break
             case prefix+'off':
               case prefix+'turu':
                  if (!isOwner)return reply(mess.OnlyOwner)
                  addCountCmd('#off', sender, _cmd)
                  reply('Sukses Mematikan Bot, byeee 👋')
                  await sleep(5000)
                  process.exit()
                  break
             case prefix+'takeviewonce':
                  if (!isPremium) return reply(mess.OnlyPrem)
                  addCountCmd('#takeviewonce', sender, _cmd)
                  if (quotedMsg.type === 'viewOnceMessage') {
                  var data = JSON.parse(JSON.stringify(quotedMsg).replace(true, false))
                  xinz.sendMessageFromContent(from, data, { quoted: msg })
                  } else {
                   reply(`Reply view once nya blok!`)
                  }
                  break
             case prefix+'resetlimit':
                  if (!isOwner) return reply(mess.OnlyOwner)
                  limit = []
                  fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
                  glimit = []
                  fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
                  textImg('Sedang proses mereset limit....')
                  await sleep(5000)
                  textImg('Sukses Reset Limit!')
                  addCountCmd('#resetlimit', sender, _cmd)
                  break
            case prefix+'sticker': case prefix+'stiker':
            case prefix+'s': case prefix+'stikergif':
            case prefix+'stickergif':
            case prefix+'sgif':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                   addCountCmd('#sticker', sender, _cmd)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg, fileLength: 99999})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if ((isVideo && msg.message.videoMessage.fileLength < 110000000000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 99999999999)){
                    addCountCmd('#sticker', sender, _cmd)
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg, fileLength: 99999})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else {
                    xinz.sendMessage(from, `Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, text, { quoted: msg, messageId: "stc"+makeid(10) })
                }
            }
                break
            case prefix+'stickerwm': case prefix+'swm': case prefix+'take': case prefix+'takesticker': case prefix+'takestick':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                let packname1 = q.split('|')[0] ? q.split('|')[0] : q
                let author1 = q.split('|')[1] ? q.split('|')[1] : ''
                if (isImage || isQuotedImage) {
                   addCountCmd('#stickerwm', sender, _cmd)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					exif.create(packname1, author1, `stickwm_${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if ((isVideo && msg.message.videoMessage.fileLength < 110000000000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 99999999999)) {
                    addCountCmd('#stickerwm', sender, _cmd)
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					exif.create(packname1, author1, `stickwm_${sender}`)
                    reply(mess.wait)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if (isQuotedSticker) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    exif.create(packname1, author1, `takestick_${sender}`)
                    exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                        if (error) return reply(mess.error.api)
                        xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                        fs.unlinkSync(media)
                        fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
                    })
                }else {
                    reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            }
                break
            case prefix+'toimg': case prefix+'toimage': case prefix+'stickertoimage': case prefix+'stickertoimg':
            case prefix+'tovid': case prefix+'tovideo': case prefix+'stickertovideo': case prefix+'stickertovid':
            case prefix+'tomedia':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!isQuotedSticker) return reply('Reply stickernya')
                let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                if (quotedMsg.stickerMessage.isAnimated === true) {
                    addCountCmd('#tovid', sender, _cmd)
                    reply(mess.wait)
                    var res = await webp2mp4File(media)
                    xinz.sendMessage(from, { url: `https://api.lolhuman.xyz/converter/webptomp4?` }, video, {quoted: msg,size: 99999, caption: `_*Sukses Convert Sticker To Video*_\n*• Processed :* ${processTime(now, moment())} _detik_`})
                    fs.unlinkSync(media)
                    limitAdd(sender, limit)
                } else {
                    addCountCmd('#toimg', sender, _cmd)
                    reply(mess.wait)
                    let ran = getRandom('.png')
                    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return reply('Gagal :v')
                    xinz.sendMessage(from, fs.readFileSync(ran), image, {thumbnail: Buffer.alloc(0), quoted: msg,size: 999999, caption: `_*Sukses Convert Sticker To Image*_\n*• Processed :* ${processTime(now, moment())} _detik_`})
                    limitAdd(sender,  limit)
                    fs.unlinkSync(ran)
                    })
                  }
                }
                break
          case prefix+'tomp3': case prefix+'toaudio':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isVideo || isQuotedVideo) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    reply(mess.wait)
                    addCountCmd('#tomp3', sender, _cmd)
                    let ran = getRandom('.mp3')
                     exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
                      fs.unlinkSync(media)
                        if (err) return reply('Gagal :V')
                         xinz.sendMessage(from, fs.readFileSync(ran), audio, { quoted: msg, mimetype: 'audio/mp4' })
                         limitAdd(sender, limit)
                         fs.unlinkSync(ran)
                    })
                 } else {
                   reply(`Kirim/reply video dengan caption ${command}`)
                }
                break
            case prefix+'toptt': case prefix+'tovn':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isVideo || isQuotedVideo) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    reply(mess.wait)
                    addCountCmd('#toptt', sender, _cmd)
                    let ran = getRandom('.mp3')
                     exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
                      fs.unlinkSync(media)
                        if (err) return reply('Gagal :V')
                         xinz.sendMessage(from, fs.readFileSync(ran), audio, { quoted: msg, mimetype: 'audio/mp4', ptt: true })
                         limitAdd(sender, limit)
                         fs.unlinkSync(ran)
                    })
                 } else if (isQuotedAudio) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    reply(mess.wait)
                    addCountCmd('#toptt', sender, _cmd)
                    let ran = getRandom('.mp3')
                     exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
                      fs.unlinkSync(media)
                        if (err) return reply('Gagal :V')
                         xinz.sendMessage(from, fs.readFileSync(ran), audio, { quoted: msg, mimetype: 'audio/mp4', ptt: true })
                         limitAdd(sender, limit)
                         fs.unlinkSync(ran)
                    })
                 } else {
                   reply(`Kirim/reply audio/video dengan caption ${command}`)
                }
                break
                case prefix+'jadibot':
      if (isLimit(sender, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (msg.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        ahhhh(reply, xinz, from);
        break;
      case prefix+'stopjadibot':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`) 
        ihhhhhh(reply);
        break;
      case prefix+'listbot':
        if (isLimit(sender, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)     
        var mmm = "「 *LIST JADIBOT* 」\n";
        for (let xinz of listjadibot) {
          tekss += `*Nomor* : ${xinz.jid.split("@")[0]}
*Nama* : ${xinz.name}
*Device* : ${xinz.phone.device_manufacturer}
*Model* : ${xinz.phone.device_model}\n\n`;
        }
        reply(mmm);
        break;
            case prefix+'tourl': case prefix+'tolink':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uploadTele(yoooo)
                    reply(link)
                    limitAdd(sender, limit)
                    fs.unlinkSync(yoooo)
                } else if (isQuotedSticker) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uploadImgbb(yoooo)
                    reply(link)
                    limitAdd(sender, limit)
                    fs.unlinkSync(yoooo)
                 } else if (isVideo || isQuotedVideo) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uploadTele(yoooo)
                    reply(link)
                    limitAdd(sender, limit)
                    fs.unlinkSync(yoooo)
                 } else {
                   reply(`Kirim/reply file (gambar, sticker, video) dengan caption ${command}`)
                }
               }
                    break
            case prefix+'attp':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}attp* teks`)
                if (body.slice(50)) return reply(`Teksnya kepanjangan`)
                addCountCmd('#attp', sender, _cmd)
                let ane = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
                var h = randomNomor(20)
                fs.writeFileSync(`./sticker/attp${h}.webp`, ane)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/attp${h}.webp -o ./sticker/attp${h}.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    xinz.sendMessage(from, fs.readFileSync(`./sticker/attp${h}.webp`), sticker, {quoted: msg})
                    limitAdd(sender, limit)
                    fs.unlinkSync(`./sticker/attp${h}.webp`)
                })
            }
                break
            case prefix+'telestick':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (isGroup) return reply(mess.OnlyPM)
                if (args.length < 2) return reply(`Kirim perintah *${command}* url`)
                if (!isUrl(args[1])) return reply(mess.error.Iv)
                if (!args[1].includes('t.me/addstickers')) return reply(mess.error.Iv)
                addCountCmd('#telestick', sender, _cmd)
                reply(mess.wait)
                var data = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${args[1]}`)
                var no = 0
                for (let i of data.result.sticker) {
                   xinz.sendStickerFromUrl(from, i, 'Author : Xyann', 'GhosKyy Bid V2.0')
                   await sleep(1500)
              }
            }
                break
            case prefix+'ttp':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ttp* teks`)
                if (body.slice(50)) return reply(`Teksnya kepanjangan`)
                addCountCmd('#ttp', sender, _cmd)
                var pth = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(q)}`)
                fs.writeFileSync(`./sticker/${sender}.png`, pth)
                var media = `./sticker/${sender}.png`
                await ffmpeg(`${media}`)
                 .input(media)
                 .on('start', function (cmd) {
                 })
                  .on('error', function (err) {
                  console.log(`Error : ${err}`)
                  fs.unlinkSync(media)
                  reply(mess.error.api)
                  })
                 .on('end', function () {
                 exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                    limitAdd(sender, limit)
                    fs.unlinkSync(media)
                    fs.unlinkSync(`./sticker/${sender}.webp`)
                    })})
                    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                    .toFormat('webp')
                    .save(`./sticker/${sender}.webp`)
                break
            /*case prefix+'ttp': 
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ttp* teks`)
                if (body.slice(70)) return reply(`Teksnya kepanjangan`)
                fetch(`http://api.areltiyan.xyz/sticker_maker?text=${encodeURIComponent(q)}`, { method: 'GET'})
                .then(async res => {
                const ttptxt = await res.json()
                base64Img.img(ttptxt.base64, 'sticker', 'ttp', function(err, filepath) {
                if (err) return console.log(err);
                console.log('Success Create TtpWm By Xyann!')
                exec(`ffmpeg -i ./sticker/ttp.png -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ./sticker/ttp.webp`, (err) => {
                   exec(`webpmux -set exif ./sticker/data.exif ./sticker/ttp.webp -o ./sticker/ttp.webp`, async (error) => {
                      xinz.sendMessage(from, fs.readFileSync('./sticker/ttp.webp'), sticker, {quoted: msg})
                      fs.unlinkSync('./sticker/ttp.webp')
                      limitAdd(sender, limit)
                      fs.unlinkSync('./sticker/ttp.png')
                         })
                     })
                 })
             });
                break*/
            case prefix+'semoji':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command}* emoji`)
                addCountCmd('#semoji', sender, _cmd)
                try {
                var emoji = args[1]
                    try {
                        emoji = encodeURI(emoji[1])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/smoji2/${emoji}?apikey=${lolkey}`)
                let asuu = await getBuffer(anu.result.emoji[4].img.replace('png', 'webp'))
                var o = randomNomor(20)
                fs.writeFileSync(`./sticker/semoji${o}.webp`, asuu)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/semoji${o}.webp -o ./sticker/semoji${o}.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    xinz.sendMessage(from, fs.readFileSync(`./sticker/semoji${o}.webp`), sticker, {quoted: msg, fileLength: 9999999999999})
                    limitAdd(sender, limit)
                    fs.unlinkSync(`./sticker/semoji${o}.webp`)
                 })
                 } catch (e) {
                   reply(mess.error.api)
                   }
                }
                break
           case prefix+'patrick': case prefix+'stickerpatrick':
           case prefix+'patrik': case prefix+'stikerpatrik':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                addCountCmd('#patrick', sender, _cmd)
                reply(mess.wait)
                var buff = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
                var y = randomNomor(20)
                fs.writeFileSync(`./sticker/patrick${y}.webp`, buff)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/patrick${y}.webp -o ./sticker/patrick${y}.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    xinz.sendMessage(from, fs.readFileSync(`./sticker/patrick${y}.webp`), sticker, {quoted: msg})
                    limitAdd(sender, limit)
                    fs.unlinkSync(`./sticker/patrick${y}.webp`)
                 })
           }
            break
            case prefix+'stikbucin':
           case prefix+'bucinstik': case prefix+'stikerbucin':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                addCountCmd('#bucin', sender, _cmd)
                reply(mess.wait)
                var buff = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lolkey}`)
                var y = randomNomor(20)
                fs.writeFileSync(`./sticker/bucin${y}.webp`, buff)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/bucin${y}.webp -o ./sticker/bucin${y}.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    xinz.sendMessage(from, fs.readFileSync(`./sticker/bucin${y}.webp`), sticker, {quoted: msg, fileLength:999999})
                    limitAdd(sender, limit)
                    fs.unlinkSync(`./sticker/bucin${y}.webp`)
                 })
           }
                break
           case prefix+'stikerwa': case prefix+'stickerwa':
           case prefix+'stikersearch': case prefix+'stickersearch':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command}* query`)
                if (q.includes('query')) return reply(`Yang di maksud query adalah apa yang ingin kamu cari\nContoh : ${command} patrick`)
                addCountCmd('#stikerwa', sender, _cmd)
                reply(mess.wait)
                let url = await fetchJson(`https://megayaa.herokuapp.com/api/searchsticker?q=${q}`).catch((e) => reply(`Stiker *${q}* tidak ditemukan, silahkan coba query lain!`))
                let res = await fetchJson(`https://megayaa.herokuapp.com/api/pngtowebp?url=${pickRandom(url.sticker)}`)
                var buff = await getBuffer(res.result)
                var i = randomNomor(20)
                fs.writeFileSync(`./sticker/stikerwa${i}.webp`, buff)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/stikerwa${i}.webp -o ./sticker/stikerwa${i}.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    xinz.sendMessage(from, fs.readFileSync(`./sticker/stikerwa${i}.webp`), sticker, {quoted: msg})
                    limitAdd(sender, limit)
                    fs.unlinkSync(`./sticker/stikerwa${i}.webp`)
                 })
           }
                break
           case prefix+'memegenerator':
           case prefix+'memegen':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command}* teks atas|teks bawah`)
                if (isImage || isQuotedImage) {
                addCountCmd('#memegenerator', sender, _cmd)
                reply(mess.wait)
                var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                var media = await xinz.downloadAndSaveMediaMessage(enmedia)
                var anu = await imgbb(igbkey, media)
                var teks1 = q.split('|')[0] ? q.split('|')[0] : q
                var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
                var resu = await getBuffer(`http://zekais-api.herokuapp.com/mgen?text1=${teks1}&text2=${teks2}&url=${anu.display_url}`)
                xinz.sendMessage(from, resu, image, {quoted: msg, thumbnail: Buffer.alloc(0), caption: `_*Sukses Create Meme*_\n*• Processed :* ${processTime(now, moment())} _detik_`})
                .catch((err) => reply(`Error bang:v`))
                fs.unlinkSync(media)
                limitAdd(sender, limit)
                } else {
                   reply(`Kirim/reply gambar dengan caption *${command}* teks atas|teks bawah`)
                }
                break
           case prefix+'memecreated':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command}* teks atas|teks bawah`)
                if (isImage || isQuotedImage) {
                addCountCmd('#memegecreator', sender, _cmd)
                reply(mess.wait)
                var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                var media = await xinz.downloadAndSaveMediaMessage(enmedia)
                var anu = await imgbb(igbkey, media)
                var teks1 = q.split('|')[0] ? q.split('|')[0] : q
                var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
                var teks3 =q.split('|')[2] ? q.split('|')[2] : ''
                var resu = await getBuffer(`https://api.lolhuman.xyz/api/MemeCreator3?apikey=${lolkey}&text1=${teks1}&text2=${teks2}&teks3=${teks3}&url=${anu.display_url}`)
                xinz.sendMessage(from, resu, image, {quoted: msg, thumbnail: Buffer.alloc(0), caption: `_*Sukses Create Meme*_\n*• Processed :* ${processTime(now, moment())} _detik_`})
                .catch((err) => reply(`Error bang:v`))
                fs.unlinkSync(media)
                limitAdd(sender, limit)
                } else {
                   reply(`Kirim/reply gambar dengan caption *${command}* teks atas|teks bawah`)
                }
                break
           case prefix+'stickermeme': case prefix+'memesticker': case prefix+'memestick': case prefix+'stickmeme': case prefix+'stcmeme': case prefix+'textmaker':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim gambar/reply sticker dengan caption ${command} teks1|teks2`)
       			    var text1 = q.split('|')[0] ? q.split('|')[0] : q
                    var text2 = q.split('|')[1] ? q.split('|')[1] : ''
                  if (!q.includes("|")) {
				    text1 = '-'
					text2 = q
				  }
				if (isImage || isQuotedImage) {
                  addCountCmd('#stickermeme', sender, _cmd)
                    reply(mess.wait)
                    var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    var media = await await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    var tolink = await uploadImgbb(media)
                    var sticknye = `https://api.lolhuman.xyz/api/memegen?apikey=${lolkey}&texttop=${text1}&textbottom=${text2}&img=${tolink}`
                    var pth = await getBuffer(sticknye)
                fs.writeFileSync(`./sticker/${sender}.png`, pth)
                var media = `./sticker/${sender}.png`
                await ffmpeg(`${media}`)
                 .input(media)
                 .on('start', function (cmd) {
                 })
                  .on('error', function (err) {
                  console.log(`Error : ${err}`)
                  fs.unlinkSync(media)
                  reply(mess.error.api)
                  })
                 .on('end', function () {
                 exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                    limitAdd(sender, limit)
                    fs.unlinkSync(media)
                    fs.unlinkSync(`./sticker/${sender}.webp`)
                    })})
                    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                    .toFormat('webp')
                    .save(`./sticker/${sender}.webp`)
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated){
                  addCountCmd(`#stickermeme`, sender, _cmd)
                    reply(mess.wait)
					var encmed = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    var medias = await xinz.downloadAndSaveMediaMessage(encmed)
                    let ran = getRandom('.png')
                    exec(`ffmpeg -i ${medias} ${ran}`, async(err) => {
                    fs.unlinkSync(medias)
                    if (err) return reply('Gagal :v')
					var tolinks = await uploadImgbb(ran)
                    var sticknyes = `https://api.lolhuman.xyz/api/memegen?apikey=${lolkey}&texttop=${text1}&textbottom=${text2}&img=${tolinks}`
                    var pth = await getBuffer(sticknyes)
                fs.writeFileSync(`./sticker/${sender}.png`, pth)
                var media = `./sticker/${sender}.png`
                await ffmpeg(`${media}`)
                 .input(media)
                 .on('start', function (cmd) {
                 })
                  .on('error', function (err) {
                  console.log(`Error : ${err}`)
                  fs.unlinkSync(media)
                  reply(mess.error.api)
                  })
                 .on('end', function () {
                 exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                    limitAdd(sender, limit)
                    fs.unlinkSync(media)
                    fs.unlinkSync(`./sticker/${sender}.webp`)
                    })})
                    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                    .toFormat('webp')
                    .save(`./sticker/${sender}.webp`)
			   	 })
                } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command} text atas|text bawah`)
                }
               }
                    break
           case prefix+'fakeloc':
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!isQuotedImage) return reply('Reply gambar dengan teks '+command+' name|addres')
                if (args.length < 2) return reply(`Example: ${command} name|addres`)
                addCountCmd('#fakeloc', sender, _cmd)
                var oh = body.slice(9)
                var name = oh.split('|')[0]
                var address = oh.split('|')[1]
                if (isImage || isQuotedImage) {
                var ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                var owgi = await xinz.downloadAndSaveMediaMessage(ger)
                var fotonye = fs.readFileSync(owgi)
                }
                xinz.sendMessage(from, {degreesLatitude: 0, degreesLongtitude: 0, name: name, address: address}, MessageType.location, {thumbnail: fotonye})
                fs.unlinkSync(owgi)
                break
            case prefix+'fitnah':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (args.length < 2) return reply(`Kirim perintah *${command}* @tag|pesantarget|pesanbot`)
                var org = q.split("|")[0]
                var target = q.split("|")[1];
                var bot = q.split("|")[2];
                if (!org.startsWith('@')) return reply('Tag orangnya')
                if (!target) return reply(`Masukkan pesan target!`)
                if (!bot) return reply(`Masukkan pesan bot!`)
                addCountCmd('#fitnah', sender, _cmd)
                xinz.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned[0]}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}, contextInfo: { mentionedJid: parseMention(q)}})
                break
                case prefix+'wallml':
                  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                  let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/wallml.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  var bb = await xinz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
            var buttonnsss = [{buttonId:`${command}`,buttonText: {displayText: 'Next️'}, type: 1}]
            var ButtonssMessages = {
            contentText: `*Nih Kak ${pushname}*`,
            buttons: buttonnsss,
            footerText: `Klik Next Untuk Melanjutkan\n© GhosKyy\n\n${jamti}  WIT\n${jamta}  WITA\n${jam}  WIB`,
            headerType: 4,
            imageMessage: bb.message.imageMessage
            }
            await xinz.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : msg})
            fs.unlinkSync(`./${sender}.jpeg`)
            limitAdd(sender, limit)
            break
            case prefix+'cosplay':
                  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                  let ipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/cosplay.json`)).data
          let wpi = ipu[Math.floor(Math.random() * (ipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wpi))
    	  var bb = await xinz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
            var buttonnsss = [{buttonId:`${command}`,buttonText: {displayText: 'Next️'}, type: 1}]
            var ButtonssMessages = {
            contentText: `*Nih Kak ${pushname}*`,
            buttons: buttonnsss,
            footerText: `Klik Next Untuk Melanjutkan\n\n${jamti}  WIT\n${jamta}  WITA\n${jam}  WIB\n\n© Ghos - Bid`,
            headerType: 4,
            imageMessage: bb.message.imageMessage
            }
            await xinz.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : msg})
            fs.unlinkSync(`./${sender}.jpeg`)
            limitAdd(sender, limit)
            break
            case prefix+'loli2':
                  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                  let iipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
          let wpiui = iipu[Math.floor(Math.random() * (iipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wpiui))
    	  var bbds = await xinz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
            var buttonnsss = [{buttonId:`${command}`,buttonText: {displayText: 'Next️'}, type: 1}]
            var ButtonssMessages = {
            contentText: `*Nih Kak ${pushname}*`,
            buttons: buttonnsss,
            footerText: `Klik Next Untuk Melanjutkan\n\n${jamti}  WIT\n${jamta}  WITA\n${jam}  WIB\n\n© Ghos - Bid`,
            headerType: 4,
            imageMessage: bbds.message.imageMessage
            }
            await xinz.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : msg})
            fs.unlinkSync(`./${sender}.jpeg`)
            limitAdd(sender, limit)
            break
            case prefix+'milf':
                  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                  let iiipuu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/milf.json`)).data
          let wpiuui = iiipuu[Math.floor(Math.random() * (iiipuu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wpiuui))
    	  var bbdds = await xinz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
            var buttonnsss = [{buttonId:`${command}`,buttonText: {displayText: 'Next️'}, type: 1}]
            var ButtonssMessages = {
            contentText: `*Nih Kak ${pushname}*`,
            buttons: buttonnsss,
            footerText: `Klik Next Untuk Melanjutkan\n\n${jamti}  WIT\n${jamta}  WITA\n${jam}  WIB\n\n© Ghos - Bid`,
            headerType: 4,
            imageMessage: bbdds.message.imageMessage
            }
            await xinz.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : msg})
            fs.unlinkSync(`./${sender}.jpeg`)
            limitAdd(sender, limit)
            break
            case prefix+'tinyurl':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}tinyurl link`)
                if (!isUrl(args[1])) return reply(`Masukkan link yang benar`)
                addCountCmd('#tinyurl', sender, _cmd)
                axios.get(`https://tinyurl.com/api-create.php?url=${args[1]}`)
                .then((a) => reply(`${a.data}`))
                limitAdd(sender, limit)
                .catch(() => reply(`Error, harap masukkan link dengan benar`))
                break
            /*case prefix+'brainly':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command}* soal`)
                try {
                 brainly(`${q}`).then(res => {
                 var teks = '\n────────────\n'
                 for (let Y of res.data) {
                 teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
                    }
                 textImg(teks)
                    })
                 limitAdd(sender, limit)
                 } catch (e) {
                 reply(mess.error.api)
                 }
                    break*/
            case prefix+'brainly':
                if (args.length < 2) return reply(`Masukkan soalnya\nContoh : ${command} siapa bapak pendidikan`)
                var data = await fetchJson(`https://xteam.xyz/brainly?soal=${q}&APIKEY=${xteamkey}`)
                var teks = `*BRAINLY FITUR*\n\n*Soal :* ${data.soal}\n*Jawaban :* ${data.jawaban}\n*Processed :* ${x} ${processTime(now, moment())}${x} _detik_`
                xinz.sendMessage(from, teks, text, { quoted: msg })
                break
//------------------< EDUCATION / OTHER >---------------------
            case prefix+'nulis':
                reply(`*Pilihan*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
                break
            case prefix+'nuliskiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                addCountCmd('#nuliskiri', sender, _cmd)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xinz.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail: Buffer.alloc(0), quoted: msg, caption: `Jangan malas pak...`})
                    limitAdd(sender, limit)
                })
            }
                break
                case prefix+'ktpmaker':

                                         if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                                         

                                                             ajglu = args.join(" ").split("|")
nik = ajglu[0]
prov = ajglu[1]
kabu = ajglu[2]  
podnz = ajglu[3]
ttl = ajglu[4]
jk = ajglu[5]
jl = ajglu[6]
rtrw = ajglu[7]
lurah = ajglu[8]
camat = ajglu[9]
agama = ajglu[10]
nikah = ajglu[11]
kerja = ajglu[12]
warga = ajglu[13]
until = ajglu[14]
img = ajglu[15]
reply('wait bang')
break
case prefix+'ktp': case prefix+'ktp':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text1|text2`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} text1|text2`)
                addCountCmd('#wolflogo', sender, _cmd)
                reply(mess.wait)
                xinz.sendMessage(from, { url: `https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${q.split("|")[1]}&nama=${q.split("|")[2]}&ttl=${q.split("|")[3]}&jk=${q.split("|")[4]}&gdarah=-&almt=${q.split("|")[5]}&rtrw=${q.split("|")[6]}&kel=${q.split("|")[7]}&kcmtn=${q.split("|")[8]}&agama=${q.split("|")[9]}&status=${q.split("|")[10]}&kerja=${q.split("|")[11]}&negara=${q.split("|")[12]}&berlaku=${q.split("|")[13]}&prov=${q.split("|")[14]}&kab=${q.split("|")[15]}&picurl=${q.split("|")[16]}` }, image, { quoted: msg, caption: `Nih Kak ${pushname}\n*Processed :* ${x}${processTime(now, moment())}${x} _detik_`}).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
            case prefix+'nuliskanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                addCountCmd('#nuliskanan', sender, _cmd)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xinz.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail: Buffer.alloc(0), quoted: msg, caption: `Jangan malas pak...`})
                    limitAdd(sender, limit)
                })
            }
                break
            case prefix+'foliokiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                addCountCmd('#foliokiri', sender, _cmd)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xinz.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail: Buffer.alloc(0), quoted: msg, caption: `Jangan malas pak...`})
                    limitAdd(sender, limit)
                })
            }
                break
            case prefix+'foliokanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                addCountCmd('#foliokanan', sender, _cmd)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xinz.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail: Buffer.alloc(0), quoted: msg, caption: `Jangan malas pak...`})
                    limitAdd(sender, limit)
                })
            }
                break
           case prefix+'corona': case prefix+'covid': case prefix+'covid19': case prefix+'covid-19':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                addCountCmd('#covidindo', sender, _cmd)
                let country = 'indonesia'
                fetchJson('https://coronavirus-19-api.herokuapp.com/countries/' + country.toLowerCase() + '/')
                .then((res)=>{
                    reply('🌎️ Covid Info - ' + country.charAt(0).toUpperCase() + country.slice(1) + ' 🌍️\n\n✨️ Total Cases: ' + `${res.cases}` + '\n📆️ Today\'s Cases: ' + `${res.todayCases}` + '\n☣️ Total Deaths: ' + `${res.deaths}` + '\n☢️ Today\'s Deaths: ' + `${res.todayDeaths}` + '\n⛩️ Active Cases: ' + `${res.active}` + '.')
                    limitAdd(sender, limit)
                }).catch((err) => { reply(mess.error.api) })
                }
                break
            case prefix+'ssweb': case prefix+'screenshotweb':{
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* url`)
                 if (!isUrl(args[1])) return reply(`Masukkan link yang benar`)
                 addCountCmd('#ssweb', sender, _cmd)
                 reply(mess.wait)
                 var web = `https://shot.screenshotapi.net/screenshot?&url=${isUrl(args[1])[0]}`
                 xinz.sendMessage(from, { url: web }, image, { quoted: msg, thumbnail: Buffer.alloc(0) })
                 limitAdd(sender, limit)
            }
                 break
            case prefix+'spamcall':{
                 if (!isPremium) return reply(mess.OnlyPrem)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* nomer`)
                 if (isNaN(args[1])) return reply(`Masukkan nomer yang valid!`)
                 addCountCmd('#spamcall', sender, _cmd)
                 await spamcall(args[1].replace('62', '').replace('08', '8')).then((res) => {
                 let hasil = res.result
                 reply(hasil)
              })
            }
                 break
            case prefix+'wikipedia': case prefix+'wiki':{
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* query`)
                 if (q.includes('query')) return reply(`Yang di maksud query adalah apa yang ingin kamu cari\nContoh : ${command} kucing`)
                 addCountCmd('#wikipedia', sender, _cmd)
                 reply(mess.wait)
                 await wiki(q).then((res) => {
                  var tks = `Hasil Pencarian *${res[0].judul}*\n\n${res[0].wiki}`
                  xinz.sendMessage(from, { url: res[0].thumb }, image, { quoted: msg, caption: tks })
                  limitAdd(sender, limit)
              })
            }
                 break
            case prefix+'tts': case prefix+'gtts':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan :\n*${command}* kodebahasa teks\n*${command}* kodebahasa <reply message>`)
                try {
                if (isQuotedMsg) {
                let bahas = args[1].toString()
                let dtt = quotedMsg.chats
                if (!dtt) return (`Penggunaan :\n*${command}* kodebahasa teks\n*${command}* kodebahasa <reply message>`)
                addCountCmd('#tts', sender, _cmd)
                var ranm = getRandom('.mp3')
                var rano = getRandom('.ogg')
                dtt.length > 600 ? reply('Textnya kebanyakan om')
                : gtts(bahas).save(ranm, dtt, function() {
                xinz.updatePresence(from, Presence.recording)
                 exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                   fs.unlinkSync(ranm)
                     var buffer = fs.readFileSync(rano)
                if (err) return reply('Gagal om:(')
                    xinz.sendMessage(from, buffer, audio, { quoted: msg,mimetype: 'audio/mp4',duration: 999999999998,ptt: true })
                    limitAdd(sender, limit)
                    fs.unlinkSync(rano)
                    })
                 })
                } else {
                let bahas = args[1].toString()
                let dtt = q.slice(args[1].length + 1, q.length)
                if (!dtt) return reply(`Penggunaan :\n*${command}* kodebahasa teks\n*${command}* kodebahasa <reply message>`)
                addCountCmd('#tts', sender, _cmd)
                var ranm = getRandom('.mp3')
                var rano = getRandom('.ogg')
                dtt.length > 600 ? reply('Textnya kebanyakan om')
                : gtts(bahas).save(ranm, dtt, function() {
                xinz.updatePresence(from, Presence.recording)
                 exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                   fs.unlinkSync(ranm)
                     var buffer = fs.readFileSync(rano)
                if (err) return reply('Gagal om:(')
                    xinz.sendMessage(from, buffer, audio, { quoted: msg, mimetype: 'audio/mp4'})
                    limitAdd(sender, limit)
                    fs.unlinkSync(rano)
                    })
                 })
               }
             } catch (e) {
                reply(`Kode bahasa salah!`)
              }
            }
                break
            case prefix+'say':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                addCountCmd('#say', sender, _cmd)
			    var lang = q.split("--")[1]
                if (!lang) lang = 'id'
                var gen = ["female", "male"].includes(args[1]) ? args[1] : 'male'
                var teks = ["female", "male"].includes(args[1]) ? (q.slice(args[1].length + 1, q.length).split('--')[0]) : q.split('--')[0]
                xinz.updatePresence(from, Presence.recording)
                getBuffer(`http://texttospeech.responsivevoice.org/v1/text:synthesize?text=${teks}&lang=${lang}&engine=g3&name=&pitch=0.5&rate=0.420&volume=1&key=0POmS5Y2&gender=${gen}`)
                 .then(async(buf) => {
                  xinz.sendMessage(from, buf, audio, { quoted: msg, mimetype: 'audio/mp4', duration: 999999999998,ptt: true })
                  limitAdd(sender, limit)
                 })
            }
                break
//------------------< Text Marker >-------------------
            case prefix+'blackpink': case prefix+'bp':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                if (body.slice(20)) return reply(`Teks kepanjangan`)
                addCountCmd('#blackpink', sender, _cmd)
                reply(mess.wait)
                xinz.sendMessage(from, { url: `https://api.lolhuman.xyz/api/textprome/blackpink?apikey=${lolkey}&text=${q}`  }, image, { thumbnail: Buffer.alloc(0), quoted: msg }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
            case prefix+'glitch': case prefix+'glitchtext':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text1|text2`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} text1|text2`)
                addCountCmd('#glitch', sender, _cmd)
                reply(mess.wait)
                xinz.sendMessage(from, { url: `https://api.lolhuman.xyz/api/textprome2/glitch?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`  }, image, { quoted: msg }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
                case prefix+'nlogo': case prefix+'ninjalogo':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text1|text2`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} text1|text2`)
                addCountCmd('#ninjalogo', sender, _cmd)
                reply(mess.wait)
                xinz.sendMessage(from, { url: `https://api.lolhuman.xyz/api/textprome2/ninjalogo?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}` }, image, { quoted: msg }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
case prefix+'wlogo': case prefix+'wolf':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text1|text2`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} text1|text2`)
                addCountCmd('#wolflogo', sender, _cmd)
                reply(mess.wait)
                xinz.sendMessage(from, { url: `https://api.lolhuman.xyz/api/textprome2/wolflogo?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}` }, image, { quoted: msg, caption: `Nih Kak ${pushname}\n*Processed :* ${x}${processTime(now, moment())}${x} _detik_`}).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
                case prefix+'tobc':

				if (!isOwner) return reply('Khusus owner ngntd')

				xinz.updatePresence(from, Presence.composing)
					anu = await xinz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xinz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							xinz.sendMessage(_.jid, buff, audio, { quoted: msg })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xinz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							xinz.sendMessage(_.jid, buff, sticker, { quoted: msg, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
					case prefix+'ketik':
					  wet = `${q}`
					  xinz.updatePresence(from, Presence.typing)
			xinz.sendMessage(from, wet, {quoted: msg})
					  break
            case prefix+'neon': case prefix+'neontext':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                addCountCmd('#neon', sender, _cmd)
                reply(mess.wait)
                xinz.sendMessage(from, { url: `https://api.lolhuman.xyz/api/textprome/neon?apikey=${lolkey}&text=${q}` }, image, { thumbnail: Buffer.alloc(0), quoted: msg, caption: `Nih Kak ${pushname}\n*Processed :* ${x} ${processTime(now, moment())}${x} _detik_`}).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
                case prefix+'metaldark': case prefix+'metal':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                addCountCmd('#metal', sender, _cmd)
                reply(mess.wait)
                xinz.sendMessage(from, { url: `https://api.lolhuman.xyz/api/textprome/metaldark?apikey=${lolkey}&text=${q}` }, image, { thumbnail: Buffer.alloc(0), quoted: msg, caption: `Nih Kak ${pushname}\n*Processed :* ${x} ${processTime(now, moment())}${x} _detik_` }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
            case prefix+'harta': case prefix+'hartatahta': case prefix+'tahta':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                if (body.slice(20)) return reply(`Teks nya kepanjangan`)
                addCountCmd('#harta', sender, _cmd)
                reply(mess.wait)
                xinz.sendMessage(from, { url: `https://api.lolhuman.xyz/api/hartatahta?apikey=${lolkey}&text=${q}` }, image, { thumbnail: Buffer.alloc(0), quoted: msg , caption: `Nih Kak ${pushname}\n*Processed :* ${x} ${processTime(now, moment())}${x} _detik_`}).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
           case prefix+'thundername': case prefix+'thunder':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                addCountCmd('thunder', sender, _cmd)
                reply(mess.wait)
                xinz.sendMessage(from, { url: `https://api.lolhuman.xyz/api/textprome/thunder?apikey=${lolkey}&text=${q}` }, image, { thumbnail: Buffer.alloc(0), quoted: msg, caption: `Nih Kak ${pushname}\n*Processed :* ${x} ${processTime(now, moment())}${x} _detik_` }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
            case prefix+'pornhub': case prefix+'phlogo':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text1|text2`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} text1|text2`)
                addCountCmd('pornhub', sender, _cmd)
                reply(mess.wait)
                xinz.sendMessage(from, { url: `https://api.lolhuman.xyz/api/textprome2/pornhub?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}` }, image, { quoted: msg, caption: `Nih Kak ${pushname}\n*Processed :* ${x} ${processTime(now, moment())}${x} _detik_` }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
                case prefix+'wmetal': case prefix+'wolfmetal':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                addCountCmd('#wolfmetal', sender, _cmd)
                q = args.join("")
                reply(mess.wait)
                xinz.sendMessage(from, { url: `https://api.lolhuman.xyz/api/photooxy/wolfmetal?apikey=${lolkey}&text1=${q}` }, image, { quoted: msg, caption: `Nih Kak ${pushname}\n*Processed :* ${x} ${processTime(now, moment())}${x} _detik_` }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
                case prefix+'cglogo': case prefix+'coolgravity':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text1|text2`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} text1|text2`)
                addCountCmd('coolgravity', sender, _cmd)
                reply(mess.wait)
                xinz.sendMessage(from, { url: `https://api.lolhuman.xyz/api/textprome2/coolgravity?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}` }, image, { quoted: msg, caption: `Nih Kak ${pushname}\n*Processed :* ${x} ${processTime(now, moment())}${x} _detik_` }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
//------------------< Math Random >-------------------
                case prefix+'darkjokes':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    addCountCmd('#darkjokes', sender, _cmd)
                    var dat = `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`
                    xinz.sendMessage(from, { url: dat }, image, {quoted: msg, thumbnail: Buffer.alloc(0) })
                    limitAdd(sender, limit)
                    break
                    case prefix+'memeindo':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    addCountCmd('#memeindo', sender, _cmd)
                    var dat = `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`
                    xinz.sendMessage(from, { url: dat }, image, {quoted: msg, thumbnail: Buffer.alloc(0) })
                    limitAdd(sender, limit)
                    break
               case prefix+'ganteng':
                    if (!isGroup)return reply(mess.OnlyGrup)
                    addCountCmd('#ganteng', sender, _cmd)
                    var kamu = groupMembers
                    var cinta = groupMembers
                    var aku = cinta[Math.floor(Math.random() * kamu.length)]
                    var cintax = kamu[Math.floor(Math.random() * cinta.length)]
                    let tejs = `Cowok paling ganteng di group ini adalah\n*@${aku.jid.split('@')[0]}*`
                    mentions(tejs, [aku.jid, cintax.jid], true)
                    break
                    case prefix+'cekpedofil':
                      addCountCmd('#cekganteng', sender, _cmd)
                      break
                      case prefix+'cekme':
                        addCountCmd('#cekme', sender, _cmd)
                        try {
                  var pp = await xinz.getProfilePicture(sender)
                } catch {
                  var pp = 'https://telegra.ph/file/a2e79878a04e492037717.jpg'
                }
                var pintar = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                var pandai = pickRandom(pintar)
                var bdohhh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                var lazyyy = pickRandom(bdohhh)
                var malesyn = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                var maled = pickRandom(malesyn)
                var nherikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'] 
                var cringentd = pickRandom(nherikan)
                var kelakuan = ["jutek", "Pemarah", "Baik", "Pelit", "Pembohong", "Ramah"]
                var chakep = ["cakep bgt", "jelek", "sedikit lagi cakep", "netral"]
                var ckepkykku = pickRandom(chakep)
                var sipat = pickRandom(kelakuan)
                var hobbies = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk','Coli Pake Kartun Telanjang', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri', 'ngehabisin duit ortu buat jajan in cwe ny', 'maling kotak amal', 'pengganda nasi kotak']
                var ctacta = ["Maling Kotak Amal","Pilot", "Pengemis", "Bandar Pekob", "Pedofil", "Wibu Elite", "Ketua Partai PDI", "Ketua Partai Komunis V2", "Artis Vid Porn"]
                var citaxxcita = pickRandom(ctacta)
                var hobbbi = pickRandom(hobbies)
                var fakeya = ["fakefoto", "fakevideo", "fakelokasi", "fakekontak", "faketoko", "faketroli"]
                var bbick = ["Neraka", "Surga", "TongSampah", "Empang", "Comberan","Kolam", "Sungai","Wc", "Knalpot", "Rumah"]
                var todvarangntd = pickRandom(bbick)
                var boongya = pickRandom(fakeya)
                var bgggsd = [ "Sulit", "Mudah"]
                var sulit = pickRandom(bgggsd)
                var yntkts = `
              
Nama   : ${pushname}
Nomor  : @${sender.split('@')[0]}
Sifat  : ${sipat}
Hobby  : ${hobbbi}
Cakep  : ${ckepkykku}
Cita”  : Ingin Menjadi ${citaxxcita}
Takut  : ${cringentd}%
Pintar : ${pandai}%
Males  : ${maled}%
Pelit : ${lazyyy}%

${sulit} Di Mengerti Semoga Kamu Masuk ${todvarangntd}

———[CekMe Feature]———
                `
xinz.sendMessage(from, { url: pp }, image, { quoted: msg, caption: yntkts, thumbnail: Buffer.alloc(0), contextInfo: {mentionedJid: [sender] }})
break
                case prefix+'cantik':
                    if (!isGroup)return reply(mess.OnlyGrup)
                    addCountCmd('#cantik', sender, _cmd)
                    var kamu = groupMembers
                    var cinta = groupMembers
                    var aku = cinta[Math.floor(Math.random() * kamu.length)]
                    var cintax = kamu[Math.floor(Math.random() * cinta.length)]
                    let gejs = `Cewek️ paling cantik di group ini adalah\n*@${cintax.jid.split('@')[0]}*`
                    mentions(gejs, [aku.jid, cintax.jid], true)
                    break
               case prefix+'jadian': case prefix+'jodohku': case prefix+'jodoh':
                    if (!isGroup)return reply(mess.OnlyGrup)
                    addCountCmd('#jadian', sender, _cmd)
                    var kamu = groupMembers
                    var cinta = groupMembers
                    var aku = cinta[Math.floor(Math.random() * kamu.length)]
                    var cintax = kamu[Math.floor(Math.random() * cinta.length)]
                    let vejs = `Ciee.. yang lagi jadian\n*@${aku.jid.split('@')[0]}* ♥️ *@${cintax.jid.split('@')[0]}*\nSemoga Langgeng Hii`
                    mentions(vejs,[aku.jid, cintax.jid], true)
                    break
               case prefix+'seberapagay':
                    if (args.length < 2) return reply('@tag/nama')
                    addCountCmd('#seberapagay', sender, _cmd)
                    axios.get(`https://arugaz.herokuapp.com/api/howgay`).then(res => res.data).then(res =>
                    reply(`Nih Liat Data Gay Si ${q}

Persentase Gay : ${res.persen}%
Alert!!! : ${res.desc}`))
                    break
               case prefix+'bisakah':
                   addCountCmd('#bisakah', sender, _cmd)
                   const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
                   const keh = bisa[Math.floor(Math.random() * bisa.length)]
                   reply('Pertanyaan : Bisakah ' + q + '\n\nJawaban : ' + keh)
                   break
              case prefix+'kapankah':
                   addCountCmd('#kapankah', sender, _cmd)
                   const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
                   const koh = kapan[Math.floor(Math.random() * kapan.length)]
                   reply('Pertanyaan : Kapankah ' + q + '\n\nJawaban : ' + koh)
                   break
              case prefix+'apakah':
                  addCountCmd('#apakah', sender, _cmd)
                  const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
                  const kah = apa[Math.floor(Math.random() * apa.length)]
                  reply('Pertanyaan : Apakah ' + q + '\n\nJawaban : ' + kah)
                  break
             case prefix+'rate':
                 addCountCmd('#rate', sender, _cmd)
                 const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
                 const te = ra[Math.floor(Math.random() * ra.length)]
                 reply('Pertanyaan : Rate ' + q + '\n\nJawaban : ' + te + '%')
                 break
            case prefix+'hobby':
                 addCountCmd('#hobby', sender, _cmd)
                 const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
                 const by = hob[Math.floor(Math.random() * hob.length)]
                 reply('Pertanyaan : Hobby ' + q + '\n\nJawaban : ' + by)
                 break
            case prefix+'truth':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#truth', sender, _cmd)
                 const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
                 // const ttrth = trut[Math.floor(Math.random() * trut.length)]
                 var ttrth = (await fetchJson(`https://pencarikode.xyz/api/truthid?apikey=APIKEY`)).message
				 var bff = Buffer.alloc(0)
                 xinz.sendButLocation(from, `_*Truth*_\n\n${ttrth}`, 'Truth Or Dare?', fs.readFileSync("./media/trorda.jpeg"), [ { buttonId: `${prefix}truth`, buttonText: { displayText: "Truth" }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: "Dare" }, type: 1} ], { contextInfo: { mentionedJid: [sender] }})
                 limitAdd(sender, limit)
                 break
            case prefix+'dare':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#dare', sender, _cmd)
                 const dare = ['Prank mak bilang "aku hamil" (bagi cewe) atau "Aku hamilin anak orang" (bagi cowo)\nrecord terus kirim kesini', 'Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
                 // const der = dare[Math.floor(Math.random() * dare.length)]
				 var der = (await fetchJson(`https://pencarikode.xyz/api/dareid?apikey=APIKEY`)).message
                 var bff = Buffer.alloc(0)
                 xinz.sendButLocation(from, `_*Dare*_\n\n${der}`, 'Truth Or Dare?', fs.readFileSync("./media/trorda.jpeg"), [ { buttonId: `${prefix}truth`, buttonText: { displayText: "Truth" }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: "Dare" }, type: 1} ], { contextInfo: { mentionedJid: [sender] }})
                 limitAdd(sender, limit)
                 break
            case prefix+'cekbapak': // By Ramlan ID
                 addCountCmd('#cekbapak', sender, _cmd)
                 const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
                 const cek = bapak[Math.floor(Math.random() * bapak.length)]
                 xinz.sendMessage(from, cek, text, { quoted: msg })
                 break
            case prefix+'pinterest':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* query`)
                 if (isUrl(q)) return reply(`Jika ingin mendownload video/foto dari pinterest ketik ${prefix}pinterestdl url`)
			     if (q.includes('query')) return reply(`Yang di maksud query adalah apa yang ingin kamu cari\nContoh : ${command} wallpaper aesthetic`)
                 addCountCmd('#pinterest', sender, _cmd)
                 reply(mess.wait)
                 var result = await pinterest(q)
                 let pint = await pickRandom(result.result)
                 sendButtonImage(from, await getBuffer(pint), `!pinterest ${q}`, `*Pencarian :* ${q.kapitalis()}\n*Url :* ${pint}`, msg)
                 limitAdd(sender, limit)
                 break
                 case prefix+'pin':

			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

				if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
				reply(mess.wait)
			    var jumlah;
			    if (q.includes('--')) jumlah = q.split('--')[1]
			    pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
				  if (q.includes('--')) {
					if (data.result.length < jumlah) {
					  jumlah = data.result.length
					  reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
					}
					for (let i = 0; i < jumlah; i++) {
					  xinz.sendMessage(from, { image: { url: data.result[i] }})
					}
				    limitAdd(sender, limit)
				  } else {
					var but = [{buttonId: `/pinterest ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					xinz.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
				    limitAdd(sender, limit)
				  }
				})
			    break
            case prefix+'cecan': case prefix+'cewek': case prefix+'cewe':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#cecan', sender, _cmd)
                 reply(mess.wait)
                 var qury = [ "cewek cantik", "cewek indonesia", "cewek aesthetic" ]
                 var assa = await pinterest(pickRandom(qury))
                 var bff = await getBuffer(await pickRandom(assa.result))
                 sendButtonImage(from, bff, '!cecan', 'Random Cecan', msg)
                 limitAdd(sender, limit)
                 break
            case prefix+'cogan': case prefix+'cowok': case prefix+'cowo':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#cogan', sender, _cmd)
                 reply(mess.wait)
                 var qery = [ "cogan", "cowok ganteng", "cowok indonesia", "cowok aesthetic" ]
                 var asw = await pinterest(pickRandom(qery))
                 var buf = await getBuffer(pickRandom(asw.result))
                 sendButtonImage(from, buf, '!cogan', 'Random Cogan', msg)
                 limitAdd(sender, limit)
                 break
case prefix+'fotobarengrp': case prefix+'fotbar': 
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#fotbar', sender, _cmd)
                 reply(mess.wait)
                 var qery = [ "fotbar rp", "fotbar aesthetic", "fotbar cewe cowo", "fotbar cewe", "fotbar banyakan","fotbar ama pacar", "fotbar ama bestie", "fotbar ama papa", "fotbar ama mama", "fotbar sekeluarga"]
                 var asw = await pinterest(pickRandom(qery))
                 var buf = await getBuffer(pickRandom(asw.result))
                 sendButtonImage(from, buf, '!fotbar', `Nih Kak ${pushname}\n*Pencarian :*  ${x}${command}${x}\n*Processed :* ${x} ${processTime(now, moment())}${x} _detik_`, msg)
                 limitAdd(sender, limit)
                 break
                 case prefix+'wppaesthethic': case prefix+'walpapera':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#walpapera', sender, _cmd)
                 reply(mess.wait)
                 var qery = [ "walpaper bagus", "walpaper anime", "walpaper aesthethic", "walpaper anak rp", "walpaper kpoper", "walpaper blackpink" ]
                 var asw = await pinterest(pickRandom(qery))
                 var buf = await getBuffer(pickRandom(asw.result))
                 sendButtonImage(from, buf, '!walpapera', `Ni Kak ${pushname}\n*Pencarian :* ${x}Wallpaper Aesthethic${x}`, msg)
                 limitAdd(sender, limit)
                 break
                 case prefix+'memep': case prefix+'memepinterest':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#memek', sender, _cmd)
                 reply(mess.wait)
                 var qery = [ "aib anime", "meme old", "meme konyol", "meme anoyima", "meme absurd", "meme kocak" , "meme no absurd", "meme virall", "meme kdrt", "meme anime", "meme dark", "meme k", "meme epep", "meme pubg", "meme mobile legend", "aib hero mobile legend", "meme indosiar"]
                 var asw = await pinterest(pickRandom(qery))
                 var buf = await getBuffer(pickRandom(asw.result))
                 sendButtonImage(from, buf, '!memep', `Ni Kak ${pushname}\n*Pencarian :* ${x}Meme ${q}${x}\n*Processed :* ${processTime(now, moment())} _detik_`, msg)
                 limitAdd(sender, limit)
                 break
            case prefix+'image': case prefix+'gimage':
            case prefix+'googleimg': case prefix+'imgsearch':{
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (args.length < 2) return reply(`Masukkan Query nya\nContoh : ${command} pemandangan`)
                 addCountCmd('#googleimg', sender, _cmd)
                 reply(mess.wait)
                  await google(q).then(async(res) => {
                    var img = await getBuffer(pickRandom(res.result))
					sendButtonImage(from, img, `!gimage ${q}`, `Hasil pencarian : *${q}*\n*Processed :* ${x} ${processTime(now, moment())}${x} _detik_`, msg)
                    limitAdd(sender, limit)
                 }).catch(() => reply(mess.error.api))
            }
                 break
            case prefix+'quotes': case prefix+'randomquotes':
            case prefix+'quote': case prefix+'randomquote':{
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#quotes', sender, _cmd)
                 var quote = await pickRandom([ "syukur", "sukses", "cinta", "rindu", "mimpi", "sendiri", "sabar", "kesedihan", "pernikahan", "kemerdekaan", "motivasi", "senja", "sedih", "ditinggal" ])
                   await jagoKata(quote).then((fec) => {
                    var teks = `${fec[0].isi}\n\n-- ${fec[0].by}`
                     xinz.sendMessage(from, teks, text,{ quoted: msg,})
                     limitAdd(sender, limit)
                  }).catch(() => reply(mess.error.api))
            }
                 break
            case prefix+'motivasi':{
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#motivasi', sender, _cmd)
                   await jagoKata('motivasi').then((res) => {
                    var txt = `${res[0].isi}\n\n-- ${res[0].by}`
                     xinz.sendMessage(from, txt, text, { quoted: msg })
                     limitAdd(sender, limit)
                 }).catch(() => reply(mess.error.api))
            }
                 break
            case prefix+'fakta': case prefix+'faktaunik':{
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#faktaunik', sender, _cmd)
                 var feth = await fetchJson(`https://api.lolhuman.xyz/api/random/faktaunik?apikey=${lolkey}`)
                 xinz.sendMessage(from, feth.result, text, { quoted: msg ,caption: `Nih Kak ${pushname}\n*Pencarian :* ${command}\n*Processed :* ${x} ${processTime(now, moment())}${x} _detik_`})
                 limitAdd(sender, limit)
            }
                 break
            case prefix+'bucin': case prefix+'katabijak':{
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#'+command.split(prefix)[1], sender, _cmd)
                 var data = await fetchJson(`https://api.lolhuman.xyz/api/random/`+command.split(prefix)[1]+`?apikey=${lolkey}`)
                 xinz.sendMessage(from, data.result, text, { quoted: msg })
                 limitAdd(sender, limit)
            }
                 break
            case prefix+'aesthetic':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#aesthetic', sender, _cmd)
                 var link = `https://megayaa.herokuapp.com/api/randomaesthetic`
                 xinz.sendMessage(from, { url: link }, video, { quoted: msg , caption: `Nih Kak ${pushname}\n*Pencarian :* ${x} ${command} ${x}\n*Processed :* ${x} ${processTime(now, moment())}${x} _detik_`})
                 limitAdd(sender, limit)
                 break
//------------------< Islami >---------------------
            case prefix+'asmaulhusna': case prefix+'asmaul': case prefix+'husna':{
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#asmaulhusna', sender, _cmd)
                 var anu = await asmaul()
                 let asmaulhusna = JSON.stringify(anu)
                 let json = JSON.parse(asmaulhusna)
                 let data = json.result.data.map((v, i) => `${i + 1}.\n*• Latin:* ${v.latin}\n*• Arab:* ${v.arabic}\n*• Artinya:* ${v.translation_id}\n*• English:* ${v.translation_en}`).join('\n\n')
                 var contoh = `*ASMAUL-HUSNA*\n\n`
                 var hasil = []
                 hasil.push(contoh + data)
                 reply(hasil[0])
                 limitAdd(sender, limit)
            }
                 break
            case prefix+'listsurah':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 addCountCmd('#listsurah', sender, _cmd)
                 var get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
                 get_result = get_result.result
                 var ini_txt = '*List Surah :*\n\n'
                 for (var x in get_result) {
                    ini_txt += `${x}. ${get_result[x]}\n`
                 }
                 reply(ini_txt).catch(() => reply(mess.error.api))
                 limitAdd(sender, limit)
                 break
            case prefix+'alquran':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (args.length < 2) return reply(`Example: ${command} 18 or ${command} 18/10 or ${command} 18/1-10`)
                 addCountCmd('#alquran', sender, _cmd)
                 var urls = `https://api.lolhuman.xyz/api/quran/${args[1]}?apikey=${lolkey}`
                 var quran = await fetchJson(urls).catch(() => reply(mess.error.api))
                 var result = quran.result
                 var ayat = result.ayat
                 var ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                   for (var x of ayat) {
                        var arab = x.arab
                        var nomor = x.ayat
                        var latin = x.latin
                        var indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                 ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                 ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                 ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                 reply(ini_txt)
                 limitAdd(sender, limit)
                 break
            case prefix+'alquranaudio':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (args.length < 2) return reply(`Example: ${command} 18 or ${command} 18/10`)
                 addCountCmd('#alquranaudio', sender, _cmd)
                 var surah = args[1]
                 var ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
                 await xinz.sendMessage(from, ini_buffer, audio, { quoted: msg, ptt: true, mimetype: Mimetype.mp4Audio })
                 .catch(() => reply(mess.error.api))
                 limitAdd(sender, limit)
                 break
            case prefix+'kisahnabi':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (args.length < 2) return reply(`Example: ${command} Muhammad`)
                 addCountCmd('#kisahnabi', sender, _cmd)
                 var query = args.join(" ")
                 var get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
                 get_result = get_result.result
                 var ini_txt = `Name : ${get_result.name}\n`
                 ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                 ini_txt += `Umur : ${get_result.age}\n`
                 ini_txt += `Tempat : ${get_result.place}\n`
                 ini_txt += `Story : \n${get_result.story}`
                 reply(ini_txt).catch(() => reply(mess.error.api))
                 limitAdd(sender, limit)
                 break
                 case prefix+'cekapikey':
                 if (isLimit(sender, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (args.length < 2) return reply(`Example: ${command} GhosBid2007`)
                 addCountCmd('#cekapikey', sender, _cmd)
                 var query = args.join(" ")
                 var get_result = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lolkey}`)
                 get_result = get_result.result
                 var ini_txt = `Name : ${get_result.username}\n`
                 ini_txt += `Request : ${get_result.requests}\n`
                 ini_txt += `Today: ${get_result.today}\n`
                 ini_txt += `Account Type : ${get_result.account_type}\n`
                 ini_txt += `Expired : \n${get_result.expired}`
                 reply(ini_txt).catch(() => reply(mess.error.api))
                 limitAdd(sender, limit)
                 break
                 case prefix+'infotsunami':
                   var get_result = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/infotsunami?apikey=Syaa`)
                 get_result = get_result.result
                 get_results = get_results.daftar_tsunami.result
                 var ini_txt = `Title : ${get_result.titles}\n`
                 ini_txt += `Daftar Tsunami :  ${get_result.daftar_tsunami}\n`
                 ini_txt += `Tanggal : ${get_result.tangal}\n`
                 ini_txt += `Lokasi : ${get_result.lokasi}\n`
                 ini_txt += `Magnitude : ${get_result.daftar_tsunami.magnitude}\n`
                 ini_txt += `Kedalaman : ${get_result.daftar_tsunami.kedalaman}\n`
                 ini_txt += `Wilayah : ${get_result.daftar_tsunami.wilayah}\n]`
                 reply(ini_txt).catch(() => reply(mess.error.api))
                 limitAdd(sender, limit)
                 break
                 case prefix+'ppcp': case prefix+'ppcouple':
                 anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
var jing = await getBuffer(anu.result.female)
var angs = await getBuffer(anu.result.male)
xinz.sendMessage(from, angs, image, {quoted: msg, caption: 'Male [ Cowo ]' })
xinz.sendMessage(from, jing, image, {quoted: msg, caption: 'Female [ Cewe ]' })
break
                 case prefix+'nhentai':
                 if (isLimit(sender, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (args.length < 2) return reply(`Example: ${command} GhosBid2007`)
                 addCountCmd('#cekapikey', sender, _cmd)
                 var get_result = await fetchJson(`https://api-xcoders.xyz/api/anime/codenhentai?code=${q}&apikey=${xcodekey}`)
                 get_result = get_result.result
                 var ini_txt = `Title Indonesia : ${get_result.titleID}\n`
                 ini_txt += `Title Jepang : ${get_result.titleJP}\n`
                 ini_txt += `Thumbnail : ${get_result.thumbnail}\n`
                 ini_txt += `Parodies : ${get_result.parodies}\n`
                 ini_txt += `Character : ${get_result.characters}\n`
                 ini_txt += `Tag : ${get_result.Tags}\n`
                 ini_txt += `Artis : ${get_result.artists
                 }\n`
                 ini_txt += `Group : ${get_result.groups}\n`
                 ini_txt += `Bahasa : ${get_result.languages}\n`
                 ini_txt += `Kategori : ${get_result.categories}\n`
                 ini_txt += `Halaman : ${get_result.pages}\n`
                 ini_txt += `Upload : ${get_result.uploaded}\n`
                 ini_txt += `Cover : ${get_result.cover}`
                 reply(ini_txt).catch(() => reply(mess.error.api))
                 limitAdd(sender, limit)
                 break
            case prefix+'jadwalsholat':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (args.length < 2) return reply(`Example: ${command} Yogyakarta`)
                 addCountCmd('#jadwalsholat', sender, _cmd)
                 var daerah = args.join(" ")
                 var get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
                 get_result = get_result.result
                 var ini_txt = `Wilayah : ${get_result.wilayah}\n`
                 ini_txt += `Tanggal : ${get_result.tanggal}\n`
                 ini_txt += `Sahur : ${get_result.sahur}\n`
                 ini_txt += `Imsak : ${get_result.imsak}\n`
                 ini_txt += `Subuh : ${get_result.subuh}\n`
                 ini_txt += `Terbit : ${get_result.terbit}\n`
                 ini_txt += `Dhuha : ${get_result.dhuha}\n`
                 ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                 ini_txt += `Ashar : ${get_result.ashar}\n`
                 ini_txt += `Maghrib : ${get_result.imsak}\n`
                 ini_txt += `Isya : ${get_result.isya}`
                 reply(ini_txt).catch(() => reply(mess.error.api))
                 limitAdd(sender, limit)
                 break
			case prefix+'quoteislami': case prefix+'quotesislam':
			     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			     addCountCmd('#quoteislami', sender, _cmd)
				 fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${lolkey}`)
				 .then(async(res) => {
					reply(res.result)
					limitAdd(sender, limit)
				 }).catch(() => reply(mess.error.api))
				 break
//------------------< Baileys >---------------------
            case prefix+'tagme':
                addCountCmd('#tagme', sender, _cmd)
                mentions(`@${sender.split("@")[0]}`, [sender], true)
                break
            case prefix+'kontak':
                if (args.length < 2) return reply(`Penggunaan ${command} nomor|nama`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} nomor|nama`)
                if (isNaN(q.split("|")[0])) return reply(`Penggunaan ${command} nomor|nama`)
                addCountCmd('#kontak', sender, _cmd)
                xinz.sendContact(from, q.split("|")[0], q.split("|")[1], 'Kontak', { quoted: msg })
                break
            case prefix+'sasa':{
                if (!sender.includes("6283851748823@s.whatsapp.net")) return reply('Anda bukan sasa, jadi gabisa make fiturnya!')
                if (!isGroup) return reply(mess.OnlyGrup)
                if (args.length < 2) return reply(`Masukin teksnya sayang :3`)
                let mem = [];
                for (let i of groupMembers){
                    mem.push(i.jid)
                }
                mentions(q, mem, false)
            }
                break
            case prefix+'hidetag':{
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length < 2) return reply(`Masukkan text`)
                addCountCmd('#hidetag', sender, _cmd)
                let arr = [];
                for (let i of groupMembers){
                    arr.push(i.jid)
                }
                mentions(q, arr, false)
                }
                break
           case prefix+'fakehidetag':{
                if (!isGroup) return reply(mess.onlyGrup)
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length < 2) return reply(`Example ${command} @tag|teks`)
                var pe = body.slice(13)
                var org = pe.split("|")[0]
                var tks = pe.split("|")[1]
                if (!org.startsWith('@')) return reply('Tag orangnya')
                addCountCmd('#fakehidetag', sender, _cmd)
                let arrr = [];
                for (let i of groupMembers){
                    arrr.push(i.jid)
                }
                xinz.sendMessage(from, tks, text, { contextInfo: { mentionedJid: arrr }, quoted: { key: { fromMe: false, participant: `${mentionUser}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${prefix}hidetag ${tks}` }}})
                }
                break
            case prefix+'tohidetag':{
                 if (!isGroup) return reply(mess.onlyGrup)
                 if (!isPremium) return reply(mess.OnlyPrem)
                 let memx = await xinz.getMembers(from)
                 addCountCmd('#tohidetag', sender, _cmd)
                 if (isQuotedMsg && quotedMsg.conversation) {
                   for (let x of parseMention(quotedMsg.chats)) {
                     memx.push(x)
                   }
                   xinz.sendMessage(from, quotedMsg.chats, text, { contextInfo: { mentionedJid: memx }})
                 } else if (isQuotedMsg && quotedMsg) {
                   for(let i of parseMention(quotedMsg.chats)) {
                     memx.push(i)
                   }
                   xinz.sendMessageFromContent(from, quotedMsg, { contextInfo: { mentionedJid: memx }})
                 } else {
                   reply(`Reply media/teks yang ingin di jadikan hidetag!`)
                 }
            }
                 break
                 case "ea":

  case prefix+'culikidgrup':

if (!isOwner)return reply('only owner')
if (!isGroup)return reply('onlygrup')
if (!isGroupAdmins)return reply('khusus admin')
if (!q) return xinz.sendMessage(from, "```culik [idGroup]```", MessageType.text);
try {
	const metadata = await xinz.groupMetadata(q);
	const partc = metadata.participants;
	let i = [];
	for (let k of partc) {
		i.push(k.jid);
    }
    xinz.groupAdd(from, i);
} catch (err) {
	xinz.sendMessage(from, "```cannot find the group for given id```", MessageType.text);
}
break
case prefix+'culik':
         if (!isOwner) return reply(`Only Owner!`)
         if (!isGroup) return reply(`Hanya bisa digunakan didalam grup!`)
         if (!isBotGroupAdmins) return reply(`Hanya bisa digunakan ketika bot menjadi admin!`)
         var gid = [];
for (let i of xinz.chats.all()) {
  if (i.jid.endsWith('g.us') && i.jid !== from) {
   gid.push(i.jid)
  }
}
async function getMembers(gid) {
   var dataMem = [];
   var metadata = await xinz.groupMetadata(gid)
   for (let x of metadata.participants) {
      dataMem.push(x.jid)
   }
   return dataMem
}

var alldata = []
for (let x of gid) {
    var data = await getMembers(x)
    for (let a of data) {
      alldata.push(a)
    }
}

var metaData = await xinz.groupMetadata(from)
var jumlah = 257 - metaData.participants.length

for (let i = 0; i < jumlah; i++) {
   var anunya = await getMembers(from)
   var mem = alldata[Math.floor(Math.random() * alldata.length)]
   if (!anunya.includes(mem)) {
   await xinz.groupAdd(from, [mem]).then(async(res) => {
     if (res.participants[0][mem.split("@")[0]+'@c.us'].code !== 200) {
         var mem2 = alldata[Math.floor(Math.random() * alldata.length)]
         await xinz.groupAdd(from, [mem2]).then((su) => {
          if (su.participants[0][mem2.split("@")[0]+'@c.us'].code !== 200) {
            reply('Salah satu orang tidak bisa di tambahkan!')
          }
})

      }

   })
 }
reply(`Sukses, Maaf jika beberapa member tidak berhasil di tambahkan, kamu bisa mengulangi command!`)
}
break
            case prefix+'kalkulator':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command}* soal\n\nNote :\n[ * ] Perkalian / kali kalian\n[ - ] Pengurangan / kurang kurangin\n[ / ] Pembagian / bagi bagian\n[ + ] Pertambahan / tambah tambahan\n\nKirim perintah *${command}* --help\nuntuk melihat cara pemakaian fitur dengan benar`)
                if (q.endsWith("--help")) return reply(`Kirim perintah *${command}* soal\n\nNote :\n[ * ] Perkalian / kali kalian\n[ - ] Pengurangan / kurang kurangin\n[ / ] Pembagian / bagi bagian\n[ + ] Pertambahan / tambah tambahan\n\nContoh Penggunaan:\n*${command}* 12 * 12\n\nNote : Fitur ini menggunakan 1 limit harian`)
                if (isNaN(!q.match(/[*|+|/|-]/gi))) return reply(`Hanya support angka!\nKirim perintah *${command}* --help\nuntuk melihat cara memakai fitur dengan benar`)
                if (!q.match(/[*|+|/|-]/gi)) return reply(`Option salah!\n\n[ * ] Perkalian / kali kalian\n[ - ] Pengurangan / kurang kurangin\n[ / ] Pembagian / bagi bagian\n[ + ] Pertambahan / tambah tambahan\n\nKirim perintah *${command}* --help\nuntuk melihat cara memakai fitur dengan benar`)
                addCountCmd('#kalkulator', sender, _cmd)
                try {
                var result = mathjs.evaluate(q)
                reply(`*「 Calculator Tool's 」*\n\n${q} = ${result}`)
                limitAdd(sender, limit)
                } catch (e) {
                reply(`Salah! Example *${command}* 12 * 2\nNote :\n[ * ] Perkalian / kali kalian\n[ - ] Pengurangan / kurang kurangin\n[ / ] Pembagian / bagi bagian\n[ + ] Pertambahan / tambah tambahan`)
                }}
                break
            case prefix+'readmore': case prefix+'more':{
                if (args.length < 2) return reply(`Kirim perintah *${command}* read|more`)
                addCountCmd('#readmore', sender, _cmd)
                const more = String.fromCharCode(8206)
                const readmore = more.repeat(4001)
                var teks = `${q.split("|")[0]}${readmore}${q.split("|")[1]}`
                xinz.reply(from, teks, msg)
            }
                break
          case prefix+'nowa':
		      if (args.length < 2) return reply(`Mana nomernya?`)
              var teks = args[1]
              var numberPattern = /\d+/g;
              if (!teks.includes('x')) return reply('ngabtuk?')
              addCountCmd('#nowa', sender, _cmd)
		      var nomer = teks.match(numberPattern)
              var random_length = teks.length - nomer[0].length
              var random
			   if (random_length == 1) {
                   random = 10
               } else if (random_length == 2) {
                   random = 100
               } else if (random_length == 3) {
                   random = 1000
               } else if (random_length == 4) {
                   random = 10000
               }
              var nomerny = `List Nomer\n\nPunya Bio/status/info\n`
              var no_bio = `\nTanpa Bio/status/info ||\nHey there! I am using WhatsApp.\n`
              var no_watsap = `\nTidak Terdaftar\n`
                for (let i = 0; i < random; i++) {
                   var nu = ['1','2','3','4','5','6','7','8','9']
                   var dom1 = nu[Math.floor(Math.random() * nu.length)]
                   var dom2 = nu[Math.floor(Math.random() * nu.length)]
                   var dom3 = nu[Math.floor(Math.random() * nu.length)]
                   var dom4 = nu[Math.floor(Math.random() * nu.length)]
                   var rndm
                if (random_length == 1) {
                    rndm = `${dom1}`
                } else if (random_length == 2) {
                    rndm = `${dom1}${dom2}`
                } else if (random_length == 3) {
                    rndm = `${dom1}${dom2}${dom3}`
                } else if (random_length == 4) {
                    rndm = `${dom1}${dom2}${dom3}${dom4}`
                }
              var anu = await xinz.isOnWhatsApp(`${nomer[0]}${i}@s.whatsapp.net`);
              var anuu = anu ? anu : false
                  try {
               var anu1 = await xinz.getStatus(anu.jid)
                if (anu1.status == 401 || anu1.status == 'Hey there! I am using WhatsApp.') {
                  no_bio += `wa.me/${anu.jid.split("@")[0]}\n`
                } else {
                  nomerny += `wa.me/${anu.jid.split("@")[0]}\n`
                }
                  } catch {
                     no_watsap += `${nomer[0]}${i}\n`
                  }
                }
                reply(`${nomerny}${no_bio}${no_watsap}`)
                break
//------------------< INFO >-------------------
            case prefix+'report':
                 if (args.length < 2) return textImg('Lu mau lapor apa?')
                 addCountCmd('#report', sender, _cmd)
                 var waktu = moment().format('DD/MM/YY')
                 var yahaha = ["fakefoto", "fakevideo", "fakelokasi", "fakekontak", "faketoko", "faketroli"]
                 var fake = pickRandom(yahaha)
                 var yoi = 'Masalah telah di laporkan kepada owner, maaf atas ketidak nyamanannya\nNote : Laporan yang main-main akan di block + di banned oleh owner!\n\nTerimakasih atas masukannya'
                 textImg(yoi)
                 if (!isGroup) {
                 var tks = `_*REPORT FROM USER!*_\n\n*Pengirim :* @${sender.split("@")[0]}\n*Pesan :* ${args.join(" ")}\n*Waktu :* ${waktu} || ${jam}`
                 } else if (isGroup) {
                 var tks = `*REPORT FROM USER!*\n\n*Pengirim :* @${sender.split("@")[0]}\n*Pesan :* ${args.join(" ")}\n*In Group :* ${groupName}\n*Waktu :* ${waktu} || ${jam}`
                 }
                 var teks = `xinz.sendMessage(ownerNumber, tks, text, {quoted: ${fake}, thumbnail: fs.readFileSync(setting.pathImg), contextInfo: {mentionedJid: parseMention(tks)}})`
                 await eval(teks)
                 break
            case prefix+'limit': case prefix+'ceklimit': case prefix+'balance': case prefix+'glimit':
                if (command.includes('balance')) {
                   addCountCmd('#balance', sender, _cmd)
                } else {
                   addCountCmd('#limit', sender, _cmd)
                }
                if (mentioned.length !== 0){
                    var limitMen = `${getLimit(mentioned[0], limitCount, limit)}`
                    textImg(`Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : limitMen}/${limitCount}\nLimit Game : ${cekGLimit(mentioned[0], gcount, glimit)}/${gcount}\nBalance : $${getBalance(mentioned[0], balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                } else {
                    var limitPrib = `${getLimit(sender, limitCount, limit)}/${limitCount}`
                    textImg(`Limit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
                break
            case prefix+'myprofile': case prefix+'profile':{
                if (!isGroup) return reply(mess.OnlyGrup)
                addCountCmd('#myprofile', sender, _cmd)
                try {
                  var pp = await xinz.getProfilePicture(sender)
                } catch {
                  var pp = 'https://telegra.ph/file/a2e79878a04e492037717.jpg'
                }
                var posi = await getPosiCmdUser(sender, _cmdUser)
                var hitnye = 0
                for (let x of _cmdUser[posi].db) {
                    hitnye = hitnye + x.count
                }
                var limitPr = getLimit(sender, limitCount, limit)
                var teks = `*-= 「 _Info Your Profile_ 」 =-*\n\n👤 *Name :* ${pushname}\n📚 *Bio :* ${await status()}\n💳 *Limit :* ${isPremium ? 'Unlimited' : limitPr}\n🎖 *Jabatan :* ${groupOwner === sender ? 'Owner Group' : isGroupAdmins ? 'Admin' : 'Member Biasa'}\n💎 *Status :* ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}\n🎯 *Hit User :* ${hitnye} _hit_`
                xinz.sendMessage(from, { url: pp }, image, { quoted: msg, caption: teks, thumbnail: Buffer.alloc(0) })
            }
                break
            case prefix+'owner': case prefix+'creator':
			case prefix+'pemilik': case prefix+'pemilikbot':
                let owner = [
                                 { "nama": "Xyann / Owner", "nomor": "6289653381067" },
                              ]
                  let xensz = []
                    for (let i = 0; i < owner.length; i++){
                        const getnumber = owner[i].nama
                        const cyanz = owner[i].nomor
                        const f = { displayName: getnumber, vcard: 'BEGIN:VCARD\n' + 
                        'VERSION:3.0\n' + 
                        'FN:' + getnumber + '\n' + 
                        'ORG:Kontak\n' + 
                        'item1.TEL;waid=' + cyanz + ':+' + cyanz + '\n' + 
                        'item1.X-ABLabel:Telepon\n' +
                        'item0.TEL;waid=' + cyanz + ':+' + cyanz + '\n' +
                        'item0.X-ABLabel:Creator GhosBid\n' + 
                        'item2.EMAIL;type=INTERNET:wisnubayusaputra917@gmail.com\n' + 
                        'item2.X-ABLabel:📧 Email\n' +
                        'item3.ADR:;;🇮🇩 Indonesia;;;;\n'+
                        'item3.X-ABADR: ac\n' +
                        'item3.X-ABLabel:🌎 Region\n'+
                        'item4.ADR:;;Tangerang;;;;\n' +
                         'item4.X-ABADR: ac\n'+
                         'item4.X-ABLabel:Kota\n' +
                        'item5.URL:https://instagram.com/iamghosky_\n'+
                        'item5.X-ABLabel:Instagram Owner\n' +
                        'item6.X-ABLabel:Developer Ghos - Bid\n' +
                        'END:VCARD'.trim()}
                        xensz.push(f)
                    }
                 xinz.sendMessage(from, { contacts: xensz}, MessageType.contactsArray, { quoted: msg }).then((res) => xinz.sendMessage(from, `Owner GhosBid`, text, { quoted: res }))
                 break
case prefix+'sendkontak':
  if (!q.includes("|")) return reply(`Penggunaan ${command} nama|nomor only 62|negara`)
  let kontak = [
                                 { "nama": `${q.split("|")[0]}`, "nomor": `${q.split("|")[1]}`, "negara" : `${q.split("|")[2]}` },
    ]
  
let yooooi = []
for (let i = 0; i < kontak.length; i++){
                        const getkntl = kontak[i].nama
                     const ccccz = kontak[i].negara
                        const cxz = kontak[i].nomor
                     const yzx = { displayName: getkntl, ccccz, vcard: 'BEGIN:VCARD\n' + 
                        'VERSION:3.0\n' + 
                        'FN:' + getkntl + '\n' + 
                        'ORG:Kontak\n' + 
                        'item1.TEL;waid=' + cxz + ':+' + cxz + '\n' + 
                        'item1.X-ABLabel:Telepon\n' +
                        'item0.TEL;waid=' + cxz + ':+' + cxz + '\n' +
                        'item0.X-ABLabel:Ponsel\n' +
                      'item1.ADR:;;' + ccccz + ';;;;\n'+
                        'item1.X-ABADR: ac\n' +
                        'item1.X-ABLabel:🌎 Region\n' +
                        'END:VCARD'.trim()}
                        yooooi.push(yzx)
                    }
                 xinz.sendMessage(from, { contacts: yooooi}, MessageType.contactsArray, { quoted: msg }).then((res) => xinz.sendMessage(from, `Done Send Kontak`, text, { quoted: res }))
                 break
                 
            case prefix+'speed':{
                let timestamp = speed();
                let latensi = speed() - timestamp
                textImg(`${latensi.toFixed(4)} Second`)
                addCountCmd('#speed', sender, _cmd)
            }
                break
            case prefix+'sourcecode': case prefix+'sc' :
           var amjwing = '_*COMING SOON*_'
     xinz.sendButLocation(from, amjwing, `GhosKyyy `,fs.readFileSync('./media/wangsaff.jpg'), [ { buttonId: `${prefix}owner`, buttonText: { displayText: "Owner" }, type: 1}, { buttonId: `${prefix}partner`, buttonText: { displayText: "Partner" }, type: 1}],{quoted: xenz})
                  break
    
            case prefix+'partner':
                 addCountCmd('#partner', sender, _cmd)
                 let listown = [
                                 { "nama": "Xyann / Owner", "nomor": "6289653381067", "ig": "iamghosky_", "kota": "Tangerang"},
                                 { "nama": "Arasya", "nomor": "6281319944917", "ig": "sofunsyabi.jpg","kota": "Jaksel"},
                                 { "nama": "Hazn", "nomor": "6281539336834", "ig": "", "kota": ""},
                                 { "nama" : "Takim",
                                 "nomor": "6282194424412", "ig": "zyee_ez", "kota": "Makassar"}
                                  ]
                  let arry = []
                    for (let i = 0; i < listown.length; i++){
                        const getnem = listown[i].nama
                        const x = listown[i].nomor
                        const insta = listown[i].ig
                        const ngra = listown[i].kota
                        const conara = { displayName: getnem,insta, vcard: 'BEGIN:VCARD\n' + 
                        'VERSION:3.0\n' + 
                        'FN:' + getnem + '\n' + 
                        'ORG:Kontak\n' + 
                        'item1.TEL;waid=' + x + ':+' + x + '\n' + 
                        'item1.X-ABLabel: Partner GhosBid\n' + 
                        'item2.EMAIL;type=INTERNET:wisnubayusaputra917@gmail.com\n' + 
                        'item2.X-ABLabel:📧 Email\n' +
                        'item3.ADR:;;🇮🇩 Indonesia;;;;\n'+
                        'item3.X-ABADR: ac\n' +
                        'item3.X-ABLabel:🌎 Region\n'+
                        'item4.ADR:;;'+ ngra + ';;;;\n'+
                        'item4.X-ABADR: ac\n'+
                        'item4.X-ABLabel:Kota\n' +
                        'item5.URL:https://instagram.com/' + insta + '\n'+
                        'item5.X-ABLabel:Instagram Owner\n' +
                        'item6.X-ABLabel:Partner GhosBid\n' +
                        'END:VCARD'.trim()}
                        arry.push(conara)
                    }
                 xinz.sendMessage(from, { contacts: arry }, MessageType.contactsArray, { quoted: msg }).then((res) => xinz.sendMessage(from, `Partner GhosBid`, text, { quoted: res }))
                 break
            case prefix+'donasi':
            case prefix+'donate':
                addCountCmd('#donasi', sender, _cmd)
                textImg(`
Donasi GhosKyy Bid
Hi Kak ${pushname} !
*Ovo :* Chat Owner
*Dana :* 089653381067
*Pulsa :* 089563381067

Donasi Seiklhas nya ya kaka tidak memaksa`)
                break
            case prefix+'sewa': case prefix+'sewabot':
                addCountCmd('#sewa', sender, _cmd)
                textImg(`*GhosKyy Bid V2.0*\n\n*<----- Jasa Sewa ----->*\nRp5.000 / minggu\nRp15.000/ bulan\n\n*Keuntungan Sewa :*\n- Meramaikan Grup\n- Memainkan berbagai Game\n- dan jaga grup\n- dll.\n\n*<----- Premium ----->*\nRp5.000 / minggu\nRp15.000 / bulan\n\n*Keuntungan Premium :*\n- Memiliki Limit tak terbatas (unlimited)\n- Limit game bertambah menjadi 35\n- Unlock fitur Premium\n- dll.\n\n*<----- Script Bot ----->*\nLagi Ga Di Jual y\n\n*Beberapa Fitur :*\n- Berbagai fake reply\n- Casino Game\n- Ytmp4/Ytmp3/Tiktok\n- dan banyak lagi...\n\nNote : Untuk Pembelian Script Bot Bonus Cara Pemasangan Di Termux, Jika Sudah Tau Yah Tidak Usah. And script ini no abal-abal, bukan dari YouTube Asli Recode an sendiri dri sc ori XinzBot!!\n\n*Pembayaran :*\n1 - 40k via Pulsa/Gopay\n50k - seterusnya via Ovo Only!\n\nMinat ? Chat Owner👇\n@6289653381067 / wa.me/6289653381067`)
                break
            case prefix+'runtime':
                addCountCmd('#runtime', sender, _cmd)
                textImg(`${runtime(process.uptime())}`)
                break
            case prefix+'stats': 
            case prefix+'botstat':{
                addCountCmd('#stats', sender, _cmd)
                let pc = []
                let gc = []
                for (let i of xinz.chats.all()) { if (i.jid.endsWith('@g.us')) { gc.push(i.jid) } }
				for (let x of xinz.chats.all()) { if (x.jid.endsWith('@s.whatsapp.net')) { pc.push(x.jid) } }
                var hit = 0
                for (let i of _cmd) { hit = hit + i.count }
                let timestampi = speed();
                let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = xinz.user.phone
                let anu = process.uptime()
                let teksny = `*• STATISTIK BOT •*

*• _Info Device_*
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi Hp :* ${device_model}
*Baterai :* ${baterai.baterai}% ${baterai.cas === 'true' ? 'Charging ✅⚡' : 'Not Charging ❌🔌'}

*• _Other\'s Info_*
*WhatsApp Versi :* ${wa_version}
*Group Chat :* ${gc.length}
*Personal Chat :* ${pc.length}
*Total Chat :* ${pc.length + gc.length}
*Speed :* ${latensii.toFixed(4)} Second\'s
*Runtime :* ${runtime(anu)}
*Total Hit :* ${hit}`
				reply(teksny)
            }
				break
		case prefix+'infoupdate': case prefix+'change': case prefix+'update':
		    addCountCmd('#infoupdate', sender, _cmd)
			var teks = `*Info Update GhosKyy Bid V2.0*\n\n`
			for (let i of change) {
			  teks += `*Topic\'s :* ${i.topik}\n*Description :* ${i.desc}\n\n`
			}
			if (isOwner) {
			  teks += `Ketik ${prefix}delchange / ${prefix}addchange untuk menghapus atau menambah info update lainnya tentang bot!`
			} else {
			  teks += `Di atas merupakan informasi tentang update bot!`
			}
			reply(teks)
		    break
		case prefix+'ping':
		    addCountCmd('#ping', sender, _cmd)
                     var mtd = mute.includes(from)
                     let timestampi = speed();
                     let latensii = speed() - timestampi
                     tks = `Status Bot : *${mtd ? 'Mute' : 'Aktif'}*
Speed : ${latensii.toFixed(4)} Seconds

*Bot Device Battery Info*
Batterai : ${baterai.baterai}%
Is Charging : ${baterai.cas}

*_Waktu Server Bot :_* ${moment(msg.messageTimestamp * 1000).format('HH:mm:ss')}`
                      textImg(tks)
                      break
               case prefix+'snk':
               case prefix+'syarat&ketentuan':
                    addCountCmd('#snk', sender, _cmd)
                    var teks = `@${xinz.user.jid.split("@")[0]} merupakan suatu program bot whatsapp, yang menggunakan engine nodejs v14.x.x
Adapun ketentuan untuk memakai GhosKyy Bid V2.0 :
*1.* Pengguna dapat menggunakan semua perintah/command dengan batasan limit sebanyak ${limitCount} setiap pengguna terkecuali user premium dengan limit tanpa batas/unlimited, dan tidak melakukan spam terhadap bot.
*2.* Limit akan di reset oleh owner satu kali 24 jam
*3.* Bot dapat memblokir pengguna/user melanggar rules yang ada di bot ini, rules yang harus dipatuhi oleh pengguna antara lain :
  • Tidak melakukan panggilan telepon/video call terhadap Bot
  • Tidak melakukan spam perintah/command yang ada dalam bot ini
*4.* Dilarang keras mengirim pesan V dan semacamnya yang membuat server down ataupun bot crash
*5.* Pengguna yang mengirim hal atau data pribadi tidak akan disimpan oleh bot ini, dan tidak akan bertanggung jawab atas data pribadi tersebut!

_Note : Bot ini menggunakan autoread atau langsung membaca pesan yang pengguna kirim_

Regards : Xyann
Nomor : @${ownerNumber.split("@")[0]}`
                     textImg(teks)
                     break
//------------------< Downloader >-------------------
              case prefix+'ytmp4': case prefix+'yt':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length === 1) return reply(`Kirim perintah *${command} [linkYt]*`)
                let isLinks2 = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks2) return reply(mess.error.Iv)
                addCountCmd('#ytmp4', sender, _cmd)
                try {
                    reply(mess.wait)
                    ytv(args[1])
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 30000) return xinz.sendMessage(from, { url: thumb }, image, { caption: `*YOUTUBE DOWNLOAD MP4*\n\n≻ *Title :* ${title}\n≻ *Size :* ${filesizeF}\n≻ *Ext :* MP4\n≻ *Download :* ${a.data}\n\n_for larger sizes, presented in the form of a link_`, quoted: msg, thumbnail: Buffer.alloc(0)})
                        const captionsYtmp4 = `*YOUTUBE DOWNLOAD MP4*\n\n≻ *Title :* ${title}\n≻ *Size :* ${filesizeF}\n≻ *Ext :* MP4\n\n_wait a minute, sending video..._`
                            xinz.sendMessage(from, { url: thumb }, image, { caption: captionsYtmp4, thumbnail: Buffer.alloc(0), quoted: msg, duration: 999999})
                            sendFileFromUrl(from, dl_link, '', msg)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    sendMess(ownerNumber, 'Ytmp4 Error : ' + err)
                    console.log(color('[Ytmp4]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'ytmp3':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length === 1) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
                let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks) return reply(mess.error.Iv)
                addCountCmd('#ytmp3', sender, _cmd)
                try {
                    reply(mess.wait)
                    yta(args[1])
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize, fileLength} = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 3000000000) return xinz.sendMessage(from, { url: thumb }, image, { caption: `*YOUTUBE DOWNLOAD MP3*\n\n≻ *Title :* ${title}\n≻ *Size :* ${filesizeF}\n≻ *Ext :* MP3\n≻ *Download :* ${a.data}\n\n_for larger sizes, presented in the form of a link_`, quoted: msg, thumbnail: Buffer.alloc(0) })
                        const captions = `*YOUTUBE DOWNLOAD MP3*\n\n≻ *Title :* ${title}\n≻ *Size :* ${filesizeF}\n≻ *Ext :* MP3\n\n_wait a minute, sending audio..._`
                            xinz.sendMessage(from, { url: thumb }, image, { caption: captions, thumbnail: Buffer.alloc(0), quoted: msg })
                            xinz.sendMessage(from, { url: dl_link }, document, { quoted: msg,fileLength: 9999,mimetype: 'audio/mp3', filename: title+'.mp3'})
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    sendMess(ownerNumber, 'Ytmp3 Error : ' + err)
                    console.log(color('[Ytmp3]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'playmp4':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length === 1) return reply(`Kirim perintah *${prefix}playmp4 query*`)
                addCountCmd('#playmp4', sender, _cmd)
                try {
                    reply(mess.wait)
                    let yut = await yts(q)
                    ytv(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                         if (Number(yut.videos[0].timestamp.replace(':', '').replace(':', '').replace(':', '')) >= 3000) return xinz.sendMessage(from, { url: thumb }, image, { caption: `*YOUTUBE PLAY MP4*\n\n≻ *Title :* ${title}\n≻ *Duration :* ${yut.videos[0].timestamp}\n≻ *Url :* ${yut.videos[0].url}\n≻ *Download :* ${a.data}\n\n_for a longer duration, presented in the form of a link_`, quoted: msg, thumbnail: Buffer.alloc(0) })
                          const captionisu = `*YOUTUBE PLAY MP4*\n\n≻ *Title :* ${title}\n≻ *Duration :* ${yut.videos[0].timestamp}\n≻ *Url :* ${yut.videos[0].url}\n\n_wait a minute, sending video..._`
                            xinz.sendMessage(from, { url: thumb }, image, { caption: captionisu, thumbnail: Buffer.alloc(0), quoted: msg })
                            sendFileFromUrl(from, dl_link, '', msg)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    sendMess(ownerNumber, 'PlayMp4 Error : ' + err)
                    console.log(color('[PlayMp4]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'play': case prefix+'playmp3':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                var teks = `Kirim perintah *${prefix}play query --option*\n\nList Option :\n- --ptt _for send voice notes_\n- --doc _for send document_\n\nContoh :\n*${command} query --ptt*\n*${command} query* Untuk Option Default Mengirim Audio\n\nNote : Fitur ini menggunakan satu limit harian!`
                if (args.length === 1) return xinz.sendMessage(from, teks, text, {quoted: msg, contextInfo: {externalAdReply: { title: `Youtube Play Music`, body: `How to Use the Play Music Feature`, mediaType: 2, thumbnail: fs.readFileSync('./media/Chitanda.jpg'), sourceUrl: `https://wa.me/6289653381067?text=assalamualaikum+bang+`}}})
                addCountCmd('#play', sender, _cmd)
                try {
                 reply(mess.wait)
                   let yut = await yts(q.replace('--ptt', '').replace('--doc', ''))
                    var res = await yta(yut.videos[0].url)
                    const { dl_link, thumb, title, filesizeF, filesize } = res
                    if (Number(yut.videos[0].timestamp.replace(':', '').replace(':', '').replace(':', '')) >= 1000) return reply(`Durasi terlalu panjang, maximal 10 menit!`)
                     var thumbna = await getBuffer(thumb)
                     var capt = `*YOUTUBE PLAY MP3*\n\n≻ *Title :* ${title}\n≻ *Duration :* ${yut.videos[0].timestamp}\n≻ *Url :* ${yut.videos[0].url}\n\n_wait a minute, sending audio..._`
                        xinz.sendMessage(from, thumbna, image, {thumbnail: Buffer.alloc(0), quoted: msg, caption: capt})
                        var audionye = await getBuffer(dl_link)
                    if (q.endsWith('--ptt')) {
                        xinz.updatePresence(from, Presence.recording)
                        xinz.sendMessage(from, audionye, audio, {ptt: true, quoted: msg, mimetype: 'audio/mp4', contextInfo: {externalAdReply: { title: `Youtube Play Music`, body: `${title}`, mediaType: 2, thumbnail: thumbna, mediaUrl: `${yut.videos[0].url}`}}})
                            limitAdd(sender, limit)
                    } else if (q.endsWith('--doc')) {
                        xinz.sendMessage(from, audionye, MessageType.document, {quoted: msg, mimetype: 'audio/mp3', filename: `${title}.mp3`, contextInfo: {externalAdReply: { title: `Youtube Play Music`, body: `${title}`, mediaType: 2, thumbnail: thumbna, mediaUrl: `${yut.videos[0].url}`}}})
                            limitAdd(sender, limit)
                    } else {
                        xinz.sendMessage(from, audionye, audio, {quoted: msg, mimetype: 'audio/mp4', contextInfo: {externalAdReply: { title: `Youtube Play Music`, body: `${title}`, mediaType: 2, thumbnail: thumbna, mediaUrl: `${yut.videos[0].url}`}}})
                            limitAdd(sender, limit)
                    }
                } catch (err) {
                    sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
                    console.log(color('[PlayMp3]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'ig':
            case prefix+'igdl':
            case prefix+'instagram':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ig* link ig`)
                if (!isUrl(args[1])) return reply(mess.error.Iv)
                if (!args[1].includes('instagram.com')) return reply(mess.error.Iv)
                addCountCmd('#instagram', sender, _cmd)
                reply(mess.wait)
                getPost(args[1].split('/')[4])
                .then((res) => {
                  if (res.status === 404) return reply(`Error, Mungkin private/instagram story\nSilahkan coba url postingan instagram lainnya..`)
                    let { owner_user, post, date, capt } = res
                    let caption = `*INSTAGRAM DOWNLOAD*\n\n≻ *Owner :* ${owner_user}\n≻ *Jumlah Media :* ${post.length}\n≻ *Caption :* ${capt}\n\n_wait a minute, media is being sent..._`
                    xinz.sendMessage(from, caption, text, {quoted: msg})
                    for (let i = 0; i < post.length; i++){
                        sendFileFromUrl(from, post[i].url)
                    }
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'IG Download Error : ' + err)
                    console.log(color('[IG Download]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
            case prefix+'fb':
            case prefix+'fbdl':
            case prefix+'facebook':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}fb* url`)
                if (!isUrl(args[1]) && !args[1].includes('facebook.com')) return reply(mess.error.Iv)
                addCountCmd('#facebook', sender, _cmd)
                reply(mess.wait)
                fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkey}&url=${args[1]}`)
                .then((res) => {
                    sendFileFromUrl(from, res.result, '', msg)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    console.log(color('[FB]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
            case prefix+'yts':
            case prefix+'ytsearch':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ytsearch* _query_`)
                addCountCmd('#ytsearch', sender, _cmd)
                reply(mess.wait)
                yts(q)
                .then((res) => {
                    let yt = res.videos
                    var jumlah = 15
                    if (yt.length < jumlah) jumlah = yt.length
                    let no = 0
                    let txt = `*YOUTUBE SEARCH*

*Data Berhasil Didapatkan!*
*Hasil Pencarian : ${q}*

*${prefix}getmusic* urutan
*${prefix}getvideo* urutan
Untuk Mengambil Video/Music\n`
                    for (let i = 0; i < jumlah; i++){
                        no += 1
                        txt += `\n─────────────────\n\n*Nomer Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author.name}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
                    }
                    xinz.sendMessage(from, { url: yt[0].image }, image, { thumbnail: Buffer.alloc(0), quoted: msg, caption: txt })
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'YT SEARCH Error : ' + err)
                    console.log(color('[YT SEARCH]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
        case prefix+'getmusic': case prefix+'getmusik':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!isQuotedImage) return replyDeface(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (!quotedMsg.fromMe) return replyDeface(`Hanya bisa mengambil result dari pesan bot!`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}getmusic* _urutan_`)
                var kuoted = await quotedMsg.chats
                var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                if (args[1] > arrey.length) return replyDeface(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
                addCountCmd('#getmusic', sender, _cmd)
                try {
                    reply(mess.wait)
                    yta(`https://youtube.com/watch?v=${arrey[args[1] -1]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 30000) return xinz.sendMessage(from, { url: thumb}, image, { caption: `*YOUTUBE DOWNLOAD MP3*\n\n≻ *Title :* ${title}\n≻ *Size :* ${filesizeF}\n≻ *Ext :* MP3\n≻ *Download :* ${a.data}\n\n_for larger sizes, presented in the form of a link_`, quoted: msg, thumbnail: Buffer.alloc(0) })
                        const captions = `*YOUTUBE DOWNLOAD MP3*\n\n≻ *Title :* ${title}\n≻ *Size :* ${filesizeF}\n≻ *Ext :* MP3\n\n_wait a minute, sending audio..._`
                            xinz.sendMessage(from, { url: thumb }, image, { thumbnail: Buffer.alloc(0), caption: captions, quoted: msg})
                            xinz.sendMessage(from, { url: dl_link }, document, { quoted: msg, mimetype: 'audio/mp3', filename: title+'.mp3', fileLength: '99999999999' })
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    sendMess(ownerNumber, 'GetMusic Error : ' + err)
                    console.log(color('[GetMusic]', 'red'), err)
                    reply(mess.error.api)
                }
                 break
        case prefix+'getvideo': case prefix+'getvidio':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (!isQuotedImage) return replyDeface(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                 if (!quotedMsg.fromMe) return replyDeface(`Hanya bisa mengambil result dari pesan bot!`)
                 if (args.length < 2) return reply(`Kirim perintah *${prefix}getvideo* _urutan_`)
                 var kuoted = await quotedMsg.chats
                 var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                 var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                 if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                 if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                 if (args[1] > arrey.length) return replyDeface(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
                 addCountCmd('#getvideo', sender, _cmd)
                 try {
                    reply(mess.wait)
                    ytv(`https://youtube.com/watch?v=${arrey[args[1] -1]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 30000) return xinz.sendMessage(from, { url: thumb }, image, { caption: `*YOUTUBE DOWNLOAD MP4*\n\n≻ *Title :* ${title}\n≻ *Size :* ${filesizeF}\n≻ *Ext :* MP4\n≻ *Download :* ${a.data}\n\n_for larger sizes, presented in the form of a link_`, quoted: msg, thumbnail: Buffer.alloc(0) })
                        const captionsYtmp4 = `*YOUTUBE DOWNLOAD MP4*\n\n≻ *Title :* ${title}\n≻ *Size :* ${filesizeF}\n≻ *Ext :* MP4\n\n_wait a minute, sending video..._`
                            xinz.sendMessage(from, { url: thumb }, image, { caption: captionsYtmp4, filesize: '999999',thumbnail: Buffer.alloc(0), quoted: msg })
                            sendFileFromUrl(from, dl_link, '', msg)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    sendMess(ownerNumber, 'GetVideo Error : ' + err)
                    console.log(color('[GetVideo]', 'red'), err)
                    reply(mess.error.api)
                }
                break
	case prefix+'tiktok': case prefix+'tiktokaudio':
	case prefix+'tiktoknowm': case prefix+'tiktokmp3':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                var teks = `Kirim perintah *${command} _link tiktok_*\n\nContoh :\n${command} https://vt.tiktok.com/ZGJAoUNXf/\n\nNote : Kirim perintah *${command} --help*\nuntuk melihat cara pemakaian fitur dengan benar`
                var teks2 = `Command ini berfungsi untuk mendownload postingan Tiktok\n\n*Penggunaan :*\n- ${command} link tiktok --option\n\n*List Option :*\n- --ptt _for send voice notes_\n- --mp3 _for send audio mp3_\n- --ori _for send original audio from video_\n- --wm _for send video with watermark_\n- --nowm _for send video without watermark_\n- --docmp3 _for send document mp3_\n- --docmp4 _for send document mp4_\n- default: --nowm\n\nContoh :\n*${command}* https://vt.tiktok.com/ZGJAoUNXf/\n*${command}* https://vt.tiktok.com/ZGJAoUNXf/ --ptt\n\nNote : Fitur ini menggunakan satu limit harian!`
                if (args.length < 2) return xinz.sendMessage(from, teks, text, {quoted: msg, contextInfo: {externalAdReply: { title: `Tiktok Downloader`, body: `How to Use the Tiktok Download Feature`, mediaType: 2, thumbnail: fs.readFileSync('./media/Chitanda.jpg'), sourceUrl: `wa.me/6289653381067`}}})
                if (args[1].endsWith('--help')) return xinz.sendMessage(from, teks2, text, {quoted: msg, contextInfo: {externalAdReply: { title: `Tiktok Downloader`, body: `How to Use the Tiktok Download Feature`, mediaType: 2, thumbnail: fs.readFileSync('./media/Chitanda.jpg'), sourceUrl: `wa.me/6289653381067`}}})
                if (!isUrl(args[1])) return reply(mess.error.Iv)
                if (!args[1].includes('tiktok.com')) return reply(mess.error.Iv)
                try {
                reply(mess.wait).then( anu => xinz.reply(from, `Jika vidio tidak dikirim, berarti link yang anda berikan tidak bisa bot download. Coba link lain!`, anu))
                var tiktok = await TiktokDownloader(args[1])
                // const { username, nickname, description, views, likes, comments, shares } = tiktok.result
                let txt = ``
                // let foto = await getBuffer(tiktok.result.thumbnail)
                if (q.endsWith('--ptt')) {
                var ptt_music = await getBuffer(tiktok.result.watermark)
                xinz.updatePresence(from, Presence.recording)
                    xinz.sendMessage(from, ptt_music, audio, { quoted: msg, ptt: true, mimetype: 'audio/mp4' })
                    limitAdd(sender, limit)
                    addCountCmd('#tiktokmp3', sender, _cmd)
                } else if (q.endsWith('--mp3')) {
                var music_mp3 = await getBuffer(tiktok.result.watermark)
                    xinz.sendMessage(from, music_mp3, audio, { quoted: msg, mimetype: 'audio/mp4', filename: `tiktok_audio_${moment(msg.messageTimestamp * 1000).format('HH:mm:ss')}.mp3` })
                    limitAdd(sender, limit)
                    addCountCmd('#tiktokmp3', sender, _cmd)
                } else if (q.endsWith('--docmp3')) {
                var doc_mp3 = await getBuffer(tiktok.result.watermark)
                    xinz.sendMessage(from, doc_mp3, document, { quoted: msg, mimetype: 'audio/mp3', filename: `tiktok_audio_${moment(msg.messageTimestamp * 1000).format('HH:mm:ss')}.mp3` })
                    limitAdd(sender, limit)
                    addCountCmd('#tiktokmp3', sender, _cmd)
                } else if (q.endsWith('--docmp4')) {
                var doc_mp4 = await getBuffer(tiktok.result.nowatermark)
                    xinz.sendMessage(from, doc_mp4, document, { quoted: msg, mimetype: 'video/mp4', filename: `tiktok_video_${moment(msg.messageTimestamp * 1000).format('HH:mm:ss')}.mp4` })
                    limitAdd(sender, limit)
                    addCountCmd('#tiktok', sender, _cmd)
                } else if (q.endsWith('--ori')) {
                var ori_sound = await getBuffer(tiktok.result.audio)
                    xinz.sendMessage(from, ori_sound, audio, { quoted: msg, mimetype: 'audio/mp4', filename: `tiktok_video_${moment(msg.messageTimestamp * 1000).format('HH:mm:ss')}.mp3` })
                    limitAdd(sender, limit)
                    addCountCmd('#tiktokmp3', sender, _cmd)
                } else if (q.endsWith('--wm')) {
                var vidwm = await getBuffer(tiktok.result.watermark)
                    xinz.sendMessage(from, vidwm, video, { quoted: msg, caption: txt })
                    limitAdd(sender, limit)
                    addCountCmd('#tiktok', sender, _cmd)
                } else if (q.endsWith('--nowm')) {
                var vidnwm = await getBuffer(tiktok.result.nowatermark)
                    xinz.sendMessage(from, vidnwm, video, { quoted: msg, caption: txt })
                    limitAdd(sender, limit)
                    addCountCmd('#tiktok', sender, _cmd)
                } else if (command.includes('mp3')) {
                var cmd_mp3 = await getBuffer(tiktok.result.watermark)
                    xinz.sendMessage(from, cmd_mp3, audio, { quoted: msg, mimetype: 'audio/mp4', filename: `tiktok_audio_${moment(msg.messageTimestamp * 1000).format('HH:mm:ss')}.mp3` })
                    limitAdd(sender, limit)
                    addCountCmd('#tiktokmp3', sender, _cmd)
                } else if (command.includes('audio')) {
                var cmd_aud = await getBuffer(tiktok.result.watermark)
                    xinz.sendMessage(from, cmd_aud, audio, { quoted: msg, mimetype: 'audio/mp4', filename: `tiktok_audio_${moment(msg.messageTimestamp * 1000).format('HH:mm:ss')}.mp3` })
                    limitAdd(sender, limit)
                    addCountCmd('#tiktokmp3', sender, _cmd)
                } else {
                var vidnowm = await getBuffer(tiktok.result.nowatermark)
                    xinz.sendMessage(from, vidnowm, video, { quoted: msg, caption: txt })
                    limitAdd(sender, limit)
                    addCountCmd('#tiktok', sender, _cmd)
                }
                    } catch (e) {
                        sendMess(ownerNumber, 'TiktokWM Error : ' + e)
                        console.log(color('[TiktokWM]', 'red'), e)
                        reply(mess.error.api)
                    }
            }
                break
            case prefix+'snackvid': case prefix+'snackvideo':{
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* url`)
                 if (!isUrl(args[1])) return reply(mess.error.Iv)
                 if (!args[1].includes('sck.io')) return reply(mess.error.Iv+`\nContoh : ${command} http://sck.io/p/akTuhc2b`)
                 addCountCmd('#snackvideo', sender, _cmd)
                 reply(mess.wait)
                 var data = await fetchJson(`https://api.xteam.xyz/dl/snackvideo?url=${args[1]}&APIKEY=${xteamkey}`).catch(() => reply(mess.error.api))
                 var teks = `_*Succes Download Snack Video*_\nProcessed : _${processTime(now, moment())} detik_`
                 xinz.sendMessage(from, { url: data.result.mp4Url }, video, { quoted: msg, caption: teks })
                 limitAdd(sender, limit)
            }
                 break
            case prefix+'mediafire':
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* link`)
                 if (!isUrl(args[1])) return reply(mess.error.Iv)
                 if (!args[1].includes('mediafire.com')) return reply(mess.error.Iv)
                 addCountCmd('#mediafire', sender, _cmd)
                 reply(mess.wait)
                 var anu = await mediafire(args[1]).catch(() => reply(mess.error.api))
                 var teks = `*MEDIAFIRE DOWNLOADER*

Data Berhasil Didapatkan!
*Nama :* ${anu[0].nama}
*Size :* ${anu[0].size}
*Link :* ${anu[0].link}

_Tunggu beberapa menit, file segara dikirim!_`
                 reply(teks)
                 xinz.sendMessage(from, { url: anu[0].link }, document, { mimetype: `application/${anu[0].mime}`, filename: anu[0].nama, quoted: msg})
                 .then((res) => xinz.sendMessage(from, `*_File Berhasil Dikirim @${sender.split("@")[0]}_*\n*• Processed :* ${processTime(now, moment())} _detik_`, text, { quoted: res, contextInfo: { mentionedJid: [sender] } }))
                 .catch(() => reply(mess.error.api))
                 limitAdd(sender, limit)
                 break
			case prefix+'pindl': case prefix+'pinterestdl':
		        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
		        if (args.length < 2) return reply(`Kirim perintah *${command}* url`)
		        if (!isUrl(args[1])) return reply(mess.error.Iv)
				if (!args[1].includes('pin')) return reply(mess.error.Iv)
			    addCountCmd('#pinterestdl', sender, _cmd)
			    reply(mess.wait)
				fetchJson(`https://xteam.xyz/dl/pinterestdl?url=${args[1]}&APIKEY=${xteamkey}`)
				.then(async(res) => {
				  sendFileFromUrl(from, res.result.hd_img, '', msg)
				  limitAdd(sender, limit)
				})
				.catch(() => { reply(mess.error.api) })
				break
			case prefix+'nhentaidl':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return xinz.reply(from, `Kirim perintah ${command} <code> atau reply pesan ini dengan kode Nhentai yang valid!`, msg, { messageId: 'GHOSBID'+makeid(5).toUpperCase()+'NHT' })
				if (isNaN(args[1])) return reply(`Harus berupa angka`)
				reply(mess.wait).then( res => xinz.sendMessage(from, 'Mungkin agak lama...', text))
			    addCountCmd('#nhentaidl', sender, _cmd)
			    nhentaidl(args[1]).then(async(res) => {
				  if (isUrl(res)) {
				  var anu = await nhentai.getDoujin(args[1])
				  var media = await getBuffer(anu.thumbnails[0])
				  var data = await xinz.prepareMessageMedia(await getBuffer(res), MessageType.document, { mimetype: 'application/pdf', filename: args[1]+'.pdf' })
				  data.documentMessage.jpegThumbnail = media
				  var dataButton = [{ buttonId: prefix+'nhentaidl', buttonText: { displayText: 'Dapatkan Lagi' }, type: 1 }]
				  var button = {
					  documentMessage: data.documentMessage,
					  contentText: `_*Nhentai Downloader*_\n\n*Title :* ${anu.title}\n*Link :* ${anu.link}`,
		 	          footerText: 'Created By Xyann',
				      buttons: dataButton,
					  headerType: 'DOCUMENT'
				  }
				  xinz.sendMessage(from, button, buttonsMessage, { quoted: msg })
				  limitAdd(sender, limit)
				  } else {
					reply(res)
				  }
				})
				break
//------------------< Stalker >-------------------
            case prefix+'igstalk': case prefix+'stalkig':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}igstalk* _username_`)
                addCountCmd('#igstalk', sender, _cmd)
                reply(mess.wait)
                getUser(args[1].replace('@', ''))
                .then((res) => {
                   if (res.status === 404) return reply(`User tidak ditemukan!`)
                    let { username, biography, fullName, subscribersCount, subscribtions, highlightCount, isBusinessAccount, isPrivate, isVerified, profilePicHD, postsCount } = res
                    let caption = `*INSTAGRAM PROFILE*\n\n≻ *Username :* ${username}\n≻ *Fullname :* ${fullName}\n≻ *Followers :* ${subscribersCount}\n≻ *Following :* ${subscribtions}\n≻ *Post Count :* ${postsCount}\n≻ *Highlight Count :* ${highlightCount}\n≻ *Account Status :* ${isPrivate ? 'Private' : 'Public'}\n≻ *Verified Account :* ${isVerified ? 'Yes' : 'No'}\n≻ *Business Account :* ${isBusinessAccount ? 'Yes' : 'No'}\n≻ *Biography :* ${biography}`
                    xinz.sendMessage(from, { url: profilePicHD }, image, { caption: caption, quoted: msg, thumbnail: Buffer.alloc(0) })
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'IG Stalk Error : ' + err)
                    console.log(color('[IG Stalk]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
            case prefix+'ghstalk': case prefix+'githubstalk': case prefix+'ghuser':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                addCountCmd('#ghstalk', sender, _cmd)
                reply(mess.wait)
                axios.get(`https://api.github.com/users/${args[1]}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `*GITHUB USER*\n\n≻ *Username :* ${login}\n≻ *Name :* ${name}\n≻ *Followers :* ${followers}\n≻ *Following :* ${following}\n≻ *Public Gists :* ${public_gists}\n≻ *Public Repos :* ${public_repos}\n≻ *Blog :* ${blog}\n≻ *Bio :* ${bio}\n≻ *Created At :* ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}`
                    xinz.sendMessage(from, { url: avatar_url }, image, { caption: txt, thumbnail: Buffer.alloc(0), quoted: msg })
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'GH Stalk Error : ' + err)
                    console.log(color('[GH Stalk]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
        case prefix+'tiktokstalk': case prefix+'ttstalk':{
             if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
             if (args.length < 2) return reply(`Kirim perintah *${command}* _username_`)
             addCountCmd('#tiktokstalk', sender, _cmd)
             reply(mess.wait)
             await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${args[1].replace('@', '')}?apikey=${lolkey}`)
             .then((res) => {
             let { user_picture, username, nickname, bio, followers, followings, likes, video } = res.result
             let txt = `*TIKTOK PROFILE*\n\n≻ *Username :* ${username}\n≻ *Nickname :* ${nickname}\n≻ *Followers :* ${followers}\n≻ *Following :* ${followings}\n≻ *Likes :* ${likes}\n≻ *Video :* ${video}\n≻ *Bio :* ${bio}`
              xinz.sendMessage(from, { url: user_picture }, image, { caption: txt, thumbnail: Buffer.alloc(0), quoted: msg })
              limitAdd(sender, limit)
             })
             .catch((err) => {
                  sendMess(ownerNumber, 'Tiktok Stalk Error : ' + err)
                  console.log(color('[Tiktok Stalk]', 'red'), err)
                              reply(mess.error.api)
                })
        }
             break
        case prefix+'freefire': case prefix+'ff': case prefix+'epep':{
             if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
             if (args.length < 2) return reply(`Kirim perintah *${command}* id`)
             if (isNaN(args[1])) return reply(`Id free fire harus berupa angka!\nContoh : *${command}* 1991741733`)
             addCountCmd('#freefire', sender, _cmd)
             await fetchJson(`https://api.xteam.xyz/search/freefire?id=${args[1]}&APIKEY=${xteamkey}`)
             .then((res) => {
              let { id, name } = res.result
              let txt = `Id : ${id}\nName : ${name}`
              xinz.sendMessage(from, txt, text, { quoted: msg })
              limitAdd(sender, limit)
             })
             .catch((err) => {
                  console.log(color('[Free Fire]', 'red'), err)
                       reply(mess.error.api)
             })
        }
             break
        case prefix+'whatmusic': case prefix+'whatmusik':
             if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
             if (isQuotedAudio || isQuotedVideo) {
			 if (quotedMsg.id.endsWith('TL')) return reply(`Jangan curang yah <3`)
             addCountCmd('#whatmusic', sender, _cmd)
             reply(mess.wait)
              try {
                var boij = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                var delb = await xinz.downloadMediaMessage(boij)
                fs.writeFileSync(`./audio.mp3`, delb)
                const acr = new acrcloud({
                    host: "identify-eu-west-1.acrcloud.com",
                    access_key: "1598f147ee841b02dc18821a1be79fae",
                    access_secret: "FLMLqyIMv19PHb8L4Xgy86YeD1K2qrHQFnL3muYO"
                });
                var sampleq = fs.readFileSync(`./audio.mp3`)
                var metadata = await acr.identify(sampleq)
                console.log(metadata)
                xinz.sendMessage(from, `*「 Berhasil Ditemukan 」*\n\n➸ Judul Lagu : ${metadata.metadata.music[0].title}\n➸ Artis : ${metadata.metadata.music[0].artists[0].name}\n➸ Album : ${metadata.metadata.music[0].album.name}\n➸ Rilis : ${metadata.metadata.music[0].release_date}`, text, {quoted: msg})
                fs.unlinkSync(`./audio.mp3`)
                limitAdd(sender, limit)
                } catch (e) {
                fs.unlinkSync(`./audio.mp3`)
                reply(`Lagu tidak dapat ditemukan, atau ukuran lagu yang terlalu besar!`)
                }
            } else {
              reply(`Reply video/audio dan sertakan caption ${prefix}whatmusic`)
            }
               break
//------------------< VVIBU >-------------------
          case prefix+'waifu':{
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                reply(mess.wait)
                addCountCmd('#waifu', sender, _cmd)
                 var res = await axios.get('https://waifu.pics/api/sfw/waifu')
                 var su = await getBuffer(res.data.url)
                 sendButtonImage(from, su, '!waifu', 'Random Waifu', msg)
                 limitAdd(sender, limit)
           }
                break
                case prefix+'sagiri':
			    if (isPremium) {
			      reply(mess.wait)
				  addCountCmd('#sagiri', sender, _cmd)
				  let hn = await getBuffer(`https://api.lolhuman.xyz/api/random/sagiri?apikey=${lolkey}`)
				  xinz.sendMessage(from, hn, image, { quoted: msg })
				} else {
				 if (!sgri) return reply(`Fitur sagiri sedang di nonaktifkan oleh owner!`)
				  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				  reply(mess.wait)
				  addCountCmd('#sgiri', sender, _cmd)
				  let oa = await getBuffer(`https://api.lolhuman.xyz/api/random/sagiri?apikey=${lolkey}`)
				  xinz.sendMessage(from, oa, image, { quoted: msg, viewOnce: false, caption: `Nih` })
				  limitAdd(sender, limit)
				}
			    break
                case prefix+'shota':
			    if (isPremium) {
			      reply(mess.wait)
				  addCountCmd('#shota', sender, _cmd)
				  let hn = await getBuffer(`https://api.lolhuman.xyz/api/random/shota?apikey=${lolkey}`)
				  xinz.sendMessage(from, hn, image, { quoted: msg })
				} else {
				 if (!wpp) return reply(`Fitur shota sedang di nonaktifkan oleh owner!`)
				  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				  reply(mess.wait)
				  addCountCmd('#walpaperanime', sender, _cmd)
				  let oa = await getBuffer(`https://api.lolhuman.xyz/api/random/shota?apikey=${lolkey}`)
				  xinz.sendMessage(from, oa, image, { quoted: msg, viewOnce: false, caption: `Nih` })
				  limitAdd(sender, limit)
				}
			    break
                case prefix+'husbu':
			  if(isPremium)   {
			      reply(mess.wait)
				  addCountCmd('#husbu', sender, _cmd)
				  let hn = await getBuffer(`https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkey}`)
				  xinz.sendMessage(from, hn, image, { quoted: msg })
				} else {
				 if (!husbu) return reply(`Fitur husbu sedang di nonaktifkan oleh owner!`)
				  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				  reply(mess.wait)
				  addCountCmd('#husbu', sender, _cmd)
				  let oa = await getBuffer(`https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkey}`)
				  xinz.sendMessage(from, oa, image, { quoted: msg, viewOnce: false, caption: `Nih Kak` })
				  limitAdd(sender, limit)
				}
			    break
	   case prefix+'nekonime':{
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                reply(mess.wait)
                addCountCmd('#nekonime', sender, _cmd)
                 var res = await axios.get('https://waifu.pics/api/sfw/neko')
                 var su = await getBuffer(res.data.url)
                 sendButtonImage(from, su, '!nekonime', 'Random Nekonime', msg)
                 limitAdd(sender, limit)
          }
                break
	  case prefix+'megumin':{
              if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                reply(mess.wait)
                addCountCmd('#megumin', sender, _cmd)
                var res = await axios.get('https://waifu.pics/api/sfw/megumin')
                var su = await getBuffer(res.data.url)
                sendButtonImage(from, su, '!megumin', 'Random Megumin', msg)
                limitAdd(sender, limit)
            }
                break
	    case prefix+'shinobu':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                reply(mess.wait)
                addCountCmd('#shinobu', sender, _cmd)
                 var res = await axios.get('https://waifu.pics/api/sfw/shinobu')
                 var su = await getBuffer(res.data.url)
                 sendButtonImage(from, su, '!shinobu', 'Random Shinobu', msg)
                 limitAdd(sender, limit)
            }
                break
            case prefix+'loli':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                reply(mess.wait)
                addCountCmd('#loli', sender, _cmd)
                let pit = await getBuffer(`https://api.lolhuman.xyz/api/random/loli?apikey=${lolkey}`)
                sendButtonImage(from, pit, '!loli', 'Random Loli', msg)
                limitAdd(sender, limit)
                break
            case prefix+'sagiri':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                reply(mess.wait)
                addCountCmd('#sagiri', sender, _cmd)
                let pin = await getBuffer(`https://api.lolhuman.xyz/api/random/sagiri?apikey=${lolkey}`)
                sendButtonImage(from, pin, '!sagiri', 'Random Sagiri', msg)
                limitAdd(sender, limit)
                break
                case prefix+'pussy':
			    if (isPremium) {
			      reply(mess.wait)
				  addCountCmd('#pussy', sender, _cmd)
				  let hn = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/pussy?apikey=${lolkey}`)
				  xinz.sendMessage(from, hn, image, { quoted: fakedoc, caption:`kamu user premium jadi kamu mendapatkan foto normal` })
				} else {
				 if (!pussy) return reply(`Fitur pussy sedang di nonaktifkan oleh owner!`)
				  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				  reply(mess.wait)
				  addCountCmd('#pussy', sender, _cmd)
				  let oa = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/pussy?apikey=${lolkey}`)
				  xinz.sendMessage(from, oa, image, { quoted: bugtroli, viewOnce: true,caption: `Nih Kak` })
				  limitAdd(sender, limit)
				}
			    break

			case prefix+'hentai':
			    if (isPremium) {
			      reply(mess.wait)
				  addCountCmd('#hentai', sender, _cmd)
				  let hn = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolkey}`)
				  xinz.sendMessage(from, hn, image, { quoted: fakedoc,size: 99999, caption:`kamu user premium jadi kamu mendapatkan foto normal` })
				} else {
				 if (!hentai) return reply(`Fitur hentai sedang di nonaktifkan oleh owner!`)
				  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				  reply(mess.wait)
				  addCountCmd('#hentai', sender, _cmd)
				  let oa = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolkey}`)
				  xinz.sendMessage(from, oa, image, { quoted: bugtroli, viewOnce: true,caption: `Nih Kak` })
				  limitAdd(sender, limit)
				}
			    break
			    case prefix+'yaoi':
			    if (isPremium) {
			      reply(mess.wait)
				  addCountCmd('#yaoi', sender, _cmd)
				  let hn = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=${lolkey}`)
				  xinz.sendMessage(from, hn, image, { quoted: fakedoc, caption:`kamu user premium jadi kamu mendapatkan foto normal` })
				} else {
				 if (!hentai) return reply(`Fitur yaoi sedang di nonaktifkan oleh owner!`)
				  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				  reply(mess.wait)
				  addCountCmd('#yaoi', sender, _cmd)
				  let oa = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=${lolkey}`)
				  xinz.sendMessage(from, oa, image, { quoted: bugtroli, viewOnce: true,caption: `Nih Kak` })
				  limitAdd(sender, limit)
				}
			    break
			    case prefix+'anal':
			    if (isPremium) {
			      reply(mess.wait)
				  addCountCmd('#anal', sender, _cmd)
				  let hn = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/anal?apikey=${lolkey}`)
				  xinz.sendMessage(from, hn, image, { quoted: fakedoc, caption:`kamu user premium jadi kamu mendapatkan foto normal` })
				} else {
				 if (!anal) return reply(`Fitur anal sedang di nonaktifkan oleh owner!`)
				  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				  reply(mess.wait)
				  addCountCmd('#anal', sender, _cmd)
				  let oa = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/anal?apikey=${lolkey}`)
				  xinz.sendMessage(from, oa, image, { quoted: fdoc, viewOnce: true,caption: `Nih Kak ` })
				  limitAdd(sender, limit)
				}
			    break
			    case prefix+'sideoppai':
			    if (isPremium) {
			      reply(mess.wait)
				  addCountCmd('#sideoppai', sender, _cmd)
				  let hn = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=${lolkey}`)
				  xinz.sendMessage(from, hn, image, { quoted: fakedoc, caption:`kamu user premium jadi kamu mendapatkan foto normal` })
				} else {
				 if (!popo) return reply(`Fitur side oppai sedang di nonaktifkan oleh owner!`)
				  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				  reply(mess.wait)
				  addCountCmd('#sideoppai', sender, _cmd)
				  let oa = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=${lolkey}`)
				  xinz.sendMessage(from, oa, image, { quoted : bugtroli, viewOnce: true,caption: `up` })
				  limitAdd(sender, limit)
				}
			    break
			    case prefix+'yuri':
			    if (isPremium) {
			      reply(mess.wait)
				  addCountCmd('#hentai', sender, _cmd)
				  let hn = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/yuri?apikey=${lolkey}`)
				  xinz.sendMessage(from, hn, image, { quoted: fakedoc, caption:`kamu user premium jadi kamu mendapatkan foto normal`})
				} else {
				 if (!yuri) return reply(`Fitur yuri sedang di nonaktifkan oleh owner!`)
				  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				  reply(mess.wait)
				  addCountCmd('#hentai', sender, _cmd)
				  let oa = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/yuri?apikey=${lolkey}`)
				  xinz.sendMessage(from, oa, image, { quoted: fakedoc, caption:`kamu user premium jadi kamu mendapatkan foto normal` })
				  limitAdd(sender, limit)
				}
			    break
			    case prefix+'cum':
			    if (isPremium) {
			      reply(mess.wait)
				  addCountCmd('#hentai', sender, _cmd)
				  let hn = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/cum?apikey=${lolkey}`)
				  xinz.sendMessage(from, hn, image, { quoted: fakedoc, caption:`kamu user premium jadi kamu mendapatkan foto normal` })
				} else {
				 if (!cum) return reply(`Fitur cum sedang di nonaktifkan oleh owner!`)
				  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				  reply(mess.wait)
				  addCountCmd('#cum', sender, _cmd)
				  let oa = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/cum?apikey=${lolkey}`)
				  xinz.sendMessage(from, oa, image, { quoted: msg, viewOnce: true, caption: `Daftar premium untuk mendapatkan foto normal, ketik #owner untuk daftar premium` })
				  limitAdd(sender, limit)
				}
			    break
			    case prefix+'ahegao':
			    if (isPremium) {
			      reply(mess.wait)
				  addCountCmd('#ahegao', sender, _cmd)
				  let hn = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${lolkey}`)
				  xinz.sendMessage(from, hn, image, { quoted: msg, caption : `kamu user premium jadi mendapatkan foto normal` })
				} else {
				 if (!yuri) return reply(`Fitur ahegao sedang di nonaktifkan oleh owner!`)
				  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				  reply(mess.wait)
				  addCountCmd('#ahegao', sender, _cmd)
				  let oa = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${lolkey}`)
				  xinz.sendMessage(from, oa, image, { viewOnce: true, caption: `Nihkak` })
				  limitAdd(sender, limit)
				}
			    break
	
            case prefix+'lirik':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command}* judul`)
                addCountCmd('#lirik', sender, _cmd)
                reply(mess.wait)
                await lirik(q).then((res) => { let teks = `*Lirik Lagu :* ${q.kapitalis()}\n\n${res[0].result}`
                xinz.sendMessage(from, teks, text, {quoted: msg})
                limitAdd(sender, limit)
                }).catch(() => reply(`Lirik tidak di temukan!`))
                break
			case prefix+'chord': case prefix+'chordgitar':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah *${command}* judul`)
				addCountCmd('#chord', sender, _cmd)
			    reply(mess.wait)
				await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${lolkey}&query=${q}`)
				.then(async(res) => {
				  var teks = `*Judul :* ${res.result.title}\n\n${res.result.chord}`
				  reply(teks)
				  limitAdd(sender, limit)
				}).catch((e) => {
				  reply('Chord tidak ditemukan')
				})
			    break
            case prefix+'asupan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                reply(mess.wait)
                addCountCmd('#asupan', sender, _cmd)
                var data = fs.readFileSync('./database/asupan.txt', 'utf-8').split('\n')
                var anx = await pickRandom(data)
				var url = anx.split('/')[4]
                await getPost(url).then( res => {
                xinz.sendMessage(from, { url: res.post[0].url }, video, { quoted: msg, caption: 'Nih jan buat bacol yak' })
                limitAdd(sender, limit)
              }).catch(() => {
				 xinz.reply(ownerNumber, `Asupan eror pak, link : ${anx}`, '')
			  })
            }
                break
//------------------< Premium >-------------------
            case prefix+'addprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)
                if (!args[2]) return reply(`Mau yang berapa hari?`)
                addCountCmd('#addprem', sender, _cmd)
                if (mentioned.length !== 0) {
                    _prem.addPremiumUser(mentioned[0], args[2], premium)
                    reply('Sukses')
                } else {
                  var cekap = await xinz.isOnWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekap === undefined) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    _prem.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
                    reply('Sukses')
                }
                break
            case prefix+'delprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                addCountCmd('#delprem', sender, _cmd)
                if (mentioned.length !== 0){
                        premium.splice(_prem.getPremiumPosition(mentioned[0], premium), 1)
                        fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    textImg('Sukses!')
                } else {
                  var cekpr = await xinz.isOnWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekpr === undefined) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    textImg('Sukses!')
                }
                break
            case prefix+'cekprem':
            case prefix+'cekpremium':
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
                addCountCmd('#cekpremium', sender, _cmd)
                if (isOwner) return reply(`Lu owner bego!`)
                if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                break
            case prefix+'listprem':
                addCountCmd('#listprem', sender, _cmd)
                let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium) {
                    men.push(i.id)
                    txt += `*ID :* @${i.id.split("@")[0]}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                mentions(txt, men, true)
                break
            case prefix+'daftarprem':
            case prefix+'daftarpremium':
                 if (isPremium) return reply('Kamu sudah terdaftar sebagai user premium')
                 addCountCmd('#daftarprem', sender, _cmd)
                 var tks = 'Silahkan chat owner Bot untuk mendaftarkan akun anda ke premium, silahkan ketik '+prefix+'owner\n\nTerimakasih!'
                 textImg(tks)
                 break
//------------------< BAN // BLOCK >-------------------
            case prefix+'ban':
                if (!isOwner) return reply(mess.OnlyOwner)
                addCountCmd('#ban', sender, _cmd)
                if (mentioned.length !== 0){
                    addBanned(mentioned[0], args[2], ban)
                    reply('Sukses')
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa ban Owner`)
                    addBanned(quotedMsg.sender, args[1], ban)
                    reply(`Sukses ban target`)
                } else if (!isNaN(args[1])) {
                    var cekab = await xinz.isOnWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekab === undefined) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
                    reply('Sukses')
                } else {
                    reply(`Kirim perintah ${prefix}ban @tag atau nomor atau reply pesan orang yang ingin di ban`)
                }
                break
            case prefix+'unban':
                if (!isOwner) return reply(mess.OnlyOwner)
                addCountCmd('#unban', sender, _cmd)
                if (mentioned.length !== 0) {
                    unBanned(mentioned[0], ban)
                    reply('Sukses')
                } else if (isQuotedMsg) {
                    unBanned(quotedMsg.sender, ban)
                    reply(`Sukses unban target`) 
                } else if (!isNaN(args[1])) {
                    var cekb = await xinz.isOnWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekb === undefined) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    unBanned(args[1] + '@s.whatsapp.net', ban)
                    reply('Sukses')
                } else {
                    reply(`Kirim perintah ${prefix}unban @tag atau nomor atau reply pesan orang yang ingin di unban`)
                }
                break
            case prefix+'listban':
                addCountCmd('#listban', sender, _cmd)
                let txtx = `List Banned\nJumlah : ${ban.length}\n\n`
                let menx = [];
                for (let i of ban){
                    menx.push(i.id)
                    txtx += `*ID :* @${i.id.split("@")[0]}\n`
                    if (i.expired === 'PERMANENT'){
                        let cekvip = 'PERMANENT'
                        txtx += `*Expire :* PERMANENT\n\n`
                    } else {
                        let cekvip = ms(i.expired - Date.now())
                        txtx += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                    }
                }
                mentions(txtx, menx, true)
                break
            case prefix+'block':
                 if (!isOwner) return reply(mess.OnlyOwner)
                 addCountCmd('#block', sender, _cmd)
                 if (mentioned.length !== 0) {
                     blockUser(mentioned[0], 'add')
                     reply('Sukses!')
                 } else if (isQuotedMsg) {
                     blockUser(quotedMsg.sender, 'add')
                     reply('Sukses!')
                 } else if (!isNaN(args[1])) {
                     blockUser(args[1] + '@c.us', 'add')
                     reply('Sukses!')
                 } else {
                     reply(`Kirim perintah ${command} @tag atau nomer atau reply pesan target!`)
                 }
                 break
            case prefix+'unblock':
                 if (!isOwner) return reply(mess.OnlyOwner)
                 addCountCmd('#unblock', sender, _cmd)
                 if (mentioned.length !== 0) {
                     blockUser(mentioned[0], 'remove')
                     reply('Sukses!')
                 } else if (isQuotedMsg) {
                     blockUser(quotedMsg.sender, 'remove')
                     reply('Sukses!')
                 } else if (!isNaN(args[1])) {
                     blockUser(args[1] + '@c.us', 'remove')
                     reply('Sukses!')
                 } else {
                     reply(`Kirim perintah ${command} @tag atau nomer atau reply pesan target!`)
                 }
                 break
            case prefix+'listblock': case prefix+'blocklist':
            case prefix+'listblok': case prefix+'bloklist':{
                 addCountCmd('#listblock', sender, _cmd)
                 let txt = `*List Block*\nTotal : ${blocked.length}\n\n`
                 var no = 0
                  for (let i of blocked) {
                     no += 1
                     txt += `${no.toString()}. @${i.split("@")[0]}\n`
                }
                reply(txt)
            }
                break
//------------------< Game >-------------------
           case prefix+'topbalance':{
                addCountCmd('#topbalance', sender, _cmd)
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
                for (let i = 0; i < 10; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
                case prefix+'upswteks':
        if (!isOwner) return reply('owner only')    
        if (!q) return reply("Isi teksnya!");
        xinz.sendMessage("status@broadcast", `${q}`, extendedText);
        reply(`Sukses Up story wea teks ${q}`);
        break;
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                addCountCmd('#buylimit', sender, _cmd)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
            case prefix+'givelimit':{
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${command}* 62xx/@tqg jumlah limit`)
                if (isNaN(args[2])) return reply('Harus berupa angka!')
                addCountCmd('#givelimit', sender, _cmd)
                if (msg.message.extendedTextMessage != undefined) {
                var nomor = mentionUser[0].split("@")[0]
                giveLimit(nomor + '@s.whatsapp.net', nebal(args[2]), limit)
                textImg('Sukses give limit sebanyak '+args[2]+' kepada @'+nomor+'')
                } else {
                var nomor = args[1]
                var cekss = await xinz.isOnWhatsApp(nomor+"@s.whatsapp.net")
                 if (cekss === undefined) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                giveLimit(nomor + '@s.whatsapp.net', nebal(args[2]), limit)
                textImg('Sukses give limit sebanyak '+args[2]+' kepada @'+nomor+'')
                }}
                break
            case prefix+'givegamelimit':{
                 if (!isOwner) return reply(mess.OnlyOwner)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* 62xx/@tag jumlah limit`)
                 if (isNaN(args[2])) return reply('Harus berupa angka!')
                 addCountCmd('#givegamelimit', sender, _cmd)
                 if (msg.message.extendedTextMessage != undefined) {
                 var nomor = mentionUser[0].split("@")[0]
                 givegame(nomor+'@s.whatsapp.net', nebal(args[2]), glimit)
                 textImg('Sukses give game limit sebanyak '+args[2]+' kepada @'+nomor+'')
                 } else {
                 var nomor = args[1]
                 var cekl = await xinz.isOnWhatsApp(nomor+"@s.whatsapp.net")
                 if (cekl === undefined) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                 givegame(nomor + '@s.whatsapp.net', nebal(args[2]), glimit)
                 textImg('Sukses give game limit sebanyak '+args[2]+' kepada '+nomor+'')
                 }}
                 break
            case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @6285791458996 2000`)
                 if (mentioned.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 addCountCmd('#transfer', sender, _cmd)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentioned[0], parseInt(args[2]), balance)
                 reply(`Sukses transfer balance sebesar $${args[2]} kepada @${mentioned[0].split("@")[0]}`)
            }
                 break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                addCountCmd('#buygamelimit', sender, _cmd)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
            case prefix+'tictactoe': case prefix+'ttt': case prefix+'ttc':
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                if (mentioned.length !== 0) {
                addCountCmd('#tictactoe', sender, _cmd)
				if (mentioned[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
                if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)
                        let h = randomNomor2(100, 200)
                        mentions(monospace(`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/N) untuk bermain\n\nHadiah : ${h} balance`), [sender, mentioned[0]], false)
                        tictactoe.push({
                            id: from,
                            status: null,
                            hadiah: h,
                            penantang: sender,
                            ditantang: mentioned[0],
                            TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                        })
                        gameAdd(sender, glimit)
                } else {
                    reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                }
                break
            case prefix+'delttt':
            case prefix+'delttc':
                if (!isGroup)return reply(mess.OnlyGrup)
                if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
                var posi = getPosTic(from, tictactoe)
                if (tictactoe[posi].penantang.includes(sender)) {
                    tictactoe.splice(posi, 1)
                    addCountCmd('#delttc', sender, _cmd)
                    reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (tictactoe[posi].ditantang.includes(sender)) {
                     tictactoe.splice(posi, 1)
                     addCountCmd('#delttc', sender, _cmd)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isGroupAdmins) {
                     tictactoe.splice(posi, 1)
                     addCountCmd('#delttc', sender, _cmd)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isOwner) {
                     tictactoe.splice(posi, 1)
                     addCountCmd('#delttc', sender, _cmd)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else {
                   reply(`Anda tidak bisa menghapus sesi tictactoe, karena bukan pemain!`)
                }
                break
            case prefix+'tebakgambar':{
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
                addCountCmd('#tebakgambar', sender, _cmd)
                let anu = await fetchJson(`https://megayaa.herokuapp.com/api/kuis/tebakgambar`)
                const petunjuk = anu.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                var capt = '*TEBAK GAMBAR*'+monospace(`\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`)
                xinz.sendMessage(from, { url: anu.image }, image, { caption: capt, thumbnail: Buffer.alloc(0), quoted: msg })
                .then( res => {
                let anih = anu.jawaban.toLowerCase()
                game.addgambar(from, anih, gamewaktu, res, tebakgambar)
                gameAdd(sender, glimit)
             })
            }
                break
            case prefix+'tebaklagu':{
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isTebakLagu(from, tebaklagu)) return reply(`Masih ada soal yang belum di selesaikan`)
                addCountCmd('#tebaklagu', sender, _cmd)
                xinz.updatePresence(from, Presence.recording)
                 var anuu = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?id=3AaKHE9ZMMEdyRadsg8rcy&APIKEY=${xteamkey}`)
                 var buff = await getBuffer(anuu.result.preview)
                 if (anuu.result.judul.toLowerCase() === 'audio tidak ditemukan, silahkan request ulang!') anuu.result.judul = 'Rick Roll'
				 var petunjuk = anuu.result.judul.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                 xinz.sendMessage(from, buff, audio, { mimetype: 'audio/mp4', ptt: true, quoted: msg, messageId: `CHIBOT${makeid(6).toUpperCase()}TL` })
                 .then( yan => {
                 xinz.sendMessage(from, '*TEBAK LAGU*'+monospace(`\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`), text, {quoted: yan})
                 var auh = anuu.result.judul.toLowerCase()
                 game.addLagu(from, auh, gamewaktu, yan, tebaklagu)
                 gameAdd(sender, glimit)
              })
            }
                 break
            case prefix+'math':{
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isMathGame(from, math)) return reply(`Masih ada soal yang belum di selesaikan`)
                addCountCmd('#math', sender, _cmd)
                var asu = [ "easy", "noob", "medium", "hard" ]
                var adeh = await pickRandom(asu)
                var url = `https://h4ck3rs404-api.herokuapp.com/api/kuis/math?mode=${adeh}&apikey=404Api`
                var fet = await fetchJson(url)
                reply(`*MATH GAME*\n\n❖ Soal : ${fet.result.soal}\n❖ Waktu : ${gamewaktu}s`)
                .then( res => {
                var anh = fet.result.jawaban
                var hdh = fet.result.poin
                game.addMath(from, anh, hdh, gamewaktu, res, math)
                gameAdd(sender, glimit)
              })
            }
                 break
            case prefix+'kuis':{
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isKuisGame(from, kuis)) return reply(`Masih ada soal yang belum di selesaikan`)
                addCountCmd('#kuis', sender, _cmd)
                var anu = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${xteamkey}`)
                var petunjuk = anu.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                reply(monospace(`Soal : ${anu.result.soal}\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s\n\nSoal Kuis Game`))
                .then( res => {
                var ahh = anu.result.jawaban.toLowerCase()
                game.addKuis(from, ahh, gamewaktu, res, kuis)
                gameAdd(sender, glimit)
              })
            }
                 break
            case prefix+'tebakbendera':{
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isBenderaGame(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
                addCountCmd('#tebakbendera', sender, _cmd)
                let asu = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=${xteamkey}`)
                var petun = asu.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                reply(monospace(`Nama Negara Dari Bendera ${asu.bendera}\nPetunjuk : ${petun}\nWaktu : ${gamewaktu}s\n\nSoal Tebak Bendera`))
                .then( res => {
                var hihi = asu.jawaban.toLowerCase()
                game.addBendera(from, hihi, gamewaktu, res, tebakbendera)
                gameAdd(sender, glimit)
             })
            }
                break
			case prefix+'siapaaku':{
			    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
		        if (game.isSiapaAku(from, siapaku)) return reply(`Masih ada soal yang belum di selesaikan`)
		       const button = [
                   { buttonId: `${prefix}siapaaku`, buttonText: { displayText: "< Next />" }, type: 1 }]
				addCountCmd('#siapaaku', sender, _cmd)
			    let sak = await fetchJson(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolkey}`)
				var jwb = sak.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
			    reply(monospace(`\n\nSoal : ${sak.result.question}\nPetunjuk : ${jwb}\nWaktu : ${gamewaktu}s\n\n`+`Soal Siapa Aku`))
			    .then( res => {
				  var jbx = sak.result.answer.toLowerCase()
				  game.addfam(from, jbx, gamewaktu, res, siapaku, 'Created By Xyann', button, {quoted :msg})
				  gameAdd(sender, glimit)
				})
			}
			    break
            case prefix+'family100':{
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
                addCountCmd('#family100', sender, _cmd)
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/family100?apikey=${lolkey}`)
                reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.result.question}\n*Total Jawaban :* ${anu.result.answer.length}\n\nWaktu : ${gamewaktu}s`)
                .then( res => {
                let anoh = anu.result.answer
                let rgfds = []
                for (let i of anoh){
                    let fefs = i.split('/') ? i.split('/')[0] : i
                    let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
                    let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                    rgfds.push(axsf.toLowerCase())
                }
                game.addfam(from, rgfds, gamewaktu, res, family100)
                gameAdd(sender, glimit)
              })
            }
                break
            case prefix+'casino':
                 if (!isGroup)return reply(mess.OnlyGrup)
                 if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal`)
                 if (mentioned.length == 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
                 if (mentioned.length > 2) return reply('Hanya bisa dengan 1 orang')
                 if (mentioned[0] === sender) return reply(`Sad amat main sama diri sendiri`)
				 if (mentioned[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
                 if (fs.existsSync(`./media/casino/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
                 if (args.length == 2) return reply('Masukan Nominal Nya')
                 if (args[2].includes('-')) return reply(`Jangan menggunakan -`)
                 if (isNaN(parseInt(args[2]))) return reply('Nominal Harus Berupa Angka!')
                 var anu = getBalance(sender, balance)
                 var ani = getBalance(mentioned[0], balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 if (ani < args[2] || ani == 'undefined') return reply(`Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}balance @tag untuk mengecek Balance lawanmu`)
                 addCountCmd('#casino', sender, _cmd)
                 var casinoo = game.setCasino(`${from}`)
                 casinoo.Z = sender.replace("@s.whatsapp.net", "")
                 casinoo.Y = mentioned[0].split("@")[0]
                 casinoo.nominal = parseInt(args[2])
                 fs.writeFileSync(`./media/casino/${from}.json`, JSON.stringify(casinoo, null, 2))
                 gameAdd(sender, glimit)
                 var starGame = `🎰 Memulai Game Casino 💰\n\n• @${sender.replace("@s.whatsapp.net", "")} Menantang ${args[1]}, dengan Nominal: *$ ${parseInt(args[2])}*\n• Ketik Y/N untuk menerima atau menolak Permainan!`
                 xinz.sendMessage(from, starGame, text, {quoted: msg, contextInfo: { mentionedJid: [sender, args[1].replace("@", "") + "@s.whatsapp.net"],}})
                 break
            case prefix+'delcasino':
                 addCountCmd('#delcasino', sender, _cmd)
                 if (fs.existsSync('./media/casino/' + from + '.json')) {
                 game.deleteCasino(from)
                 textImg('Berhasil Menghapus Sesi Casino')
                 } else {
                 reply('Tidak ada sesi yang berlangsung')
                 }
                 break
            case prefix+'suit': case prefix+'suitgame': case prefix+'suitgames':{
                 if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                 if (isSuit(sender, suit[getSuit(sender, suit)])) return xinz.sendMessage(from, `Harap selesaikan game yang sebelumnya!\n\nNote : Jika sudah tidak bisa di pencet ketik ${prefix}resuit untuk menampilkan buttons lagi!`, text, { quoted: suit[getSuit(sender, suit)].mek })
                 if (args.length < 2) return sendSuit(from).then(res => { suit.push({id: sender, expired: Date.now() + toMs(`30s`), mek: res}) })
                 addCountCmd('#suit', sender, _cmd)
                 var pilihan = args[1].toLowerCase()
                 var opsi = [ "kertas", "gunting", "batu" ]
                 if (!opsi.includes(pilihan)) return sendSuit(from).then(res => { suit.push({id: sender, expired: Date.now() + toMs(`30s`), mek: res}) })
                 await suitJs(pilihan, sender, balance)
                   .then( res => {
                    xinz.sendMessage(from, res, text, {quoted: msg, contextInfo: {mentionedJid: parseMention(res), externalAdReply: { title: `Suit Games`, body: `GhosKyy Bid V2.0`, mediaType: 2, thumbnail: fs.readFileSync('./media/Chitanda.jpg'), sourceUrl: `wa.me/6289653381067`}}})
                     gameAdd(sender, glimit)
                   })
            }
                 break
            case prefix+'resuit':{
                 if (!isSuit(sender, suit[getSuit(sender, suit)])) return replyDeface(`Anda belum memulai sesi suit, silahkan kirim perintah ${prefix}suit untuk memulai game!`)
                 addCountCmd('#resuit', sender, _cmd)
                 xinz.deleteMessage(from, suit[getSuit(sender, suit)].mek.key)
                 .then( su => {
                 suit.splice(getSuit(sender, suit), 1)
                 sendSuit(from).then( res => { suit.push({id: sender, expired: Date.now() + toMs(`30s`), mek: res}) })
               })
            }
                 break
            case 'kertas':
			     if (msg.type !== "buttonsResponseMessage") return
                 var posisi = getSuit(msg.message.buttonsResponseMessage.contextInfo.quotedMessage.buttonsMessage.contextInfo.mentionedJid[0], suit)
                 if (posisi === undefined && msg.message.buttonsResponseMessage.contextInfo.quotedMessage.buttonsMessage.contextInfo.mentionedJid[0] !== sender) return reply(`Button ini bukan untuk anda, kirim perintah ${prefix}suit untuk bermain`)
			     if (posisi === undefined) return reply(`Sesi tersebut sudah selesai, silahkan ketik ${prefix}suit untuk bermain lagi!`)
				 if (!isSuit(sender, suit[posisi])) return reply(`Button ini bukan untuk anda, kirim perintah ${prefix}suit untuk bermain`)
                 var posi = getSuit(sender, suit)
                 await suitJs('kertas', sender, balance)
                   .then( res => {
                    xinz.sendMessage(from, res, text, {quoted: msg, contextInfo: {mentionedJid: parseMention(res), externalAdReply: { title: `Suit Games`, body: `GhosKyy Bid V2.0`, mediaType: 2, thumbnail: fs.readFileSync('./media/Chitanda.jpg'), sourceUrl: `wa.me/6289653381067`}}})
                      gameAdd(sender, glimit)
                 xinz.deleteMessage(from, suit[posi].mek.key)
                 suit.splice(posi, 1)
                 addCountCmd('#suit', sender, _cmd)
            })
                 break
            case 'gunting':
			     if (msg.type !== "buttonsResponseMessage") return
                 var posisi = getSuit(msg.message.buttonsResponseMessage.contextInfo.quotedMessage.buttonsMessage.contextInfo.mentionedJid[0], suit)
                 if (posisi === undefined && msg.message.buttonsResponseMessage.contextInfo.quotedMessage.buttonsMessage.contextInfo.mentionedJid[0] !== sender) return reply(`Button ini bukan untuk anda, kirim perintah ${prefix}suit untuk bermain`)
				 if (posisi === undefined) return reply(`Sesi tersebut sudah selesai, silahkan ketik ${prefix}suit untuk bermain lagi!`)
				 if (!isSuit(sender, suit[posisi])) return reply(`Button ini bukan untuk anda, kirim perintah ${prefix}suit untuk bermain`)
                 var posi = getSuit(sender, suit)
                 await suitJs('gunting', sender, balance)
                   .then( res => {
                    xinz.sendMessage(from, res, text, {quoted: msg, contextInfo: {mentionedJid: parseMention(res), externalAdReply: { title: `Suit Games`, body: `GhosKyy Bid V2.0`, mediaType: 2, thumbnail: fs.readFileSync('./media/Chitanda.jpg'), sourceUrl: `wa.me/6289653381067`}}})
                      gameAdd(sender, glimit)
                 xinz.deleteMessage(from, suit[posi].mek.key)
                 suit.splice(posi, 1)
                 addCountCmd('#suit', sender, _cmd)
            })
                 break
            case 'batu':
			     if (msg.type !== "buttonsResponseMessage") return
                 var posisi = getSuit(msg.message.buttonsResponseMessage.contextInfo.quotedMessage.buttonsMessage.contextInfo.mentionedJid[0], suit)
                 if (posisi === undefined && msg.message.buttonsResponseMessage.contextInfo.quotedMessage.buttonsMessage.contextInfo.mentionedJid[0] !== sender) return reply(`Button ini bukan untuk anda, kirim perintah ${prefix}suit untuk bermain`)
  				 if (posisi === undefined) return reply(`Sesi tersebut sudah selesai, silahkan ketik ${prefix}suit untuk bermain lagi!`)
				 if (!isSuit(sender, suit[posisi])) return reply(`Button ini bukan untuk anda, kirim perintah ${prefix}suit untuk bermain`)
                 var posi = getSuit(sender, suit)
                 await suitJs('batu', sender, balance)
                   .then( res => {
                    xinz.sendMessage(from, res, text, {quoted: msg, contextInfo: {mentionedJid: parseMention(res), externalAdReply: { title: `Suit Games`, body: `GhosKyy Bid V2.0`, mediaType: 2, thumbnail: fs.readFileSync('./media/Chitanda.jpg'), sourceUrl: `wa.me/6289653381067`}}})
                      gameAdd(sender, glimit)
                 xinz.deleteMessage(from, suit[posi].mek.key)
                 suit.splice(posi, 1)
                 addCountCmd('#suit', sender, _cmd)
            })
                 break
            case prefix+'slot':
                 if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                 addCountCmd('#slot', sender, _cmd)
                 const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : 🍇 : 🍇']
                 const somtoy = pickRandom(sotoy)
                 const somtoyy = pickRandom(sotoy)
                 const somtoyyy = pickRandom(sotoy)
                 if (somtoyy  == '🍌 : 🍌 : 🍌') {
                 sendSlot(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *$500* balance`)
                 addBalance(sender, nebal(500), balance)
                 } else if (somtoyy == '🍒 : 🍒 : 🍒') {
                 sendSlot(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *$500* balance`)
                 addBalance(sender, nebal(500), balance)
                 } else if (somtoyy == '🔔 : 🔔 : 🔔') {
                 sendSlot(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *$500* balance`)
                 addBalance(sender, nebal(500), balance)
                 } else if (somtoyy == '🍐 : 🍐 : 🍐') {
                 sendSlot(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *$500* balance`)
                 addBalance(sender, nebal(500), balance)
                 } else if (somtoyy == '🍇 : 🍇 : 🍇') {
                 sendSlot(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *$500* balance`)
                 addBalance(sender, nebal(500), balance)
                 } else {
                 sendSlot(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *LOST @${sender.split('@')[0]}* ]\n\nDon't give up, let's try again`)
                 }
                 gameAdd(sender, glimit)
                 break
            case prefix+'koin':
                 if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                 addCountCmd('#koin', sender, _cmd)
                 var jens = pickRandom(["garuda", "uang"])
                 xinz.sendMessage(from, { url: 'media/koin/'+jens+'.webp' }, sticker, { quoted: msg })
                 gameAdd(sender, glimit)
                 break
//------------------< Owner >-------------------
            case prefix+'setpp': case prefix+'setppbot':
            case prefix+'setpic': case prefix+'setpicbot':{
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                if (isImage || isQuotedImage) {
                    addCountCmd('#setpp', sender, _cmd)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    xinz.updateProfilePicture(xinz.user.jid, media)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim gambar atau reply gambar dengan caption ${command}`)
                }
            }
                break
            case prefix+'setname':{
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} GhosKyy Bid V2.0`)
                addCountCmd('#setname', sender, _cmd)
                xinz.updateProfileName(q)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            }
                break
            case prefix+'setbio':{
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} GhosKyy Bid V2.0`)
                addCountCmd('#setbio', sender, _cmd)
                xinz.setStatus(q)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            }
                break
            case prefix+'self':{
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                mode = 'self'
                textImg('Berhasil berubah ke mode self')
                addCountCmd('#self', sender, _cmd)
            }
                break
            case prefix+'publik': case prefix+'public':{
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                mode = 'public'
                textImg('Berhasil berubah ke mode public')
                addCountCmd('#public', sender, _cmd)
            }
                break
            case prefix+'clearall':{
                if (!isOwner) return reply(mess.OnlyOwner)
                addCountCmd('#clearall', sender, _cmd)
                let chiit = await xinz.chats.all()
                for (let i of chiit){
                    xinz.modifyChat(i.jid, 'delete', {
                        includeStarred: false
                    })
                }
                reply(`Selesai`)
            }
                break
            case prefix+'clearchat':{
                if (!isOwner) return reply(mess.OnlyOwner)
                addCountCmd('#clearchat', sender, _cmd)
                let chats = await xinz.chats.all()
                for (let i of chats){
                    xinz.modifyChat(i.jid, 'clear', {
                        includeStarred: false
                    })
                }
                reply('Sukses')
            }
                break
            case prefix+'delchat':{
                if (isGroup) return reply(mess.OnlyPM)
                addCountCmd('#delchat', sender, _cmd)
                reply(`Sukses menghapus chat anda!`)
                .then( res => {
                  xinz.modifyChat(from, 'delete', { includeStarred: false })
                })
            }
                break
            case prefix+'setprefix':
                if (!isOwner) return reply(mess.OnlyOwner)
                addCountCmd('#setprefix', sender, _cmd)
                if (args.length < 2) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
                if (q === 'multi'){
                    multi = true
                    textImg(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    textImg(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    textImg(`Berhasil mengubah prefix ke ${q}`)
                }
                break
            case prefix+'bc': case prefix+'broadcast':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan text`)
                addCountCmd('#broadcast', sender, _cmd)
                let chiit = await xinz.chats.all()
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : xenz
                    let media = await xinz.downloadMediaMessage(encmedia)
                    for (let i of chiit){
                        xinz.sendMessage(i.jid, media, image, {caption: `BroadCast \n\n${q}`})
                    }
                    replyDeface(`Sukses`)
                } else if (isVideo || isQuotedVideo) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : xenz
                    let media = await xinz.downloadMediaMessage(encmedia)
                    for (let i of chiit){
                        xinz.sendMessage(i.jid, media, video, {caption: `BroadCast \n\n${q}`})
                    }
                    replyDeface(`Sukses`)
                } else {
                    for (let i of chiit){
                        xinz.sendMessage(i.jid, {"contentText": `BroadCast \n\n${q}`,
	    "footerText": `*Click Here To See The Menu || ${tgl}\n\n「 Ghos - Bid 」`,
	    "buttons": [
	    {"buttonId": `.menu`,
	    "buttonText": {"displayText": "MENU"
	    },"type": "RESPONSE"}
	    ],"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/pdf",
            "title": "Xyann.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "99999999999999999999999999",
            "pageCount": 10000,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "Ghos - Bid",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176"}}, MessageType.buttonsMessage, {quoted:bugtroli})
                    }
                    replyDeface(`Sukses`)
                }
                break
                case prefix+'cekapikey':
                 if (isLimit(sender, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (args.length < 2) return reply(`Example: ${command} GhosBid2007`)
                 addCountCmd('#cekapikey', sender, _cmd)
                 var query = args.join(" ")
                 var get_result = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=GhosBid2007`)
                 get_result = get_result.result
                 var ini_txt = `UserName : ${get_result.username}\n`
                 ini_txt += `Requests : ${get_result.requests}\n`
                 ini_txt += `Today: ${get_result.today}\n`
                 ini_txt += `Account Type : ${get_result.account_type}\n`
                 ini_txt += `Expired : ${get_result.expired}`
                 reply(ini_txt).catch(() => reply(mess.error.api))
                 limitAdd(sender, limit)
                 break
                 case prefix+'ytshort':
                 if (isLimit(sender, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 if (!isUrl(args[1])) return reply(`Masukkan link yang benar`)
                 if (args.length < 2) return reply(`Example: ${command} Link`)
                 addCountCmd('#ytshort', sender, _cmd)
                 var wisnubs = args.join(" ")
                 var get_result = await fetchJson(`https://api-xcoders.xyz/api/download/ytshort/url=${isUrl(args[1])[0]}?apikey=${xcodekey}`)
                 get_result = get_result.result
                 var ini_txt = `Creator : ${get_result.creator}\n`
                 ini_txt += `Title : ${get_result.title}\n`
                 ini_txt += `Durasi : ${get_result.duration}\n`
                 ini_txt += `Kualitas : ${get_result.quality}\n`
                 ini_txt += `Size : ${get_result.size}\n`
                 ini_txt += `Thumbnail : ${get_result.thumbnail}\n`
                 ini_txt *= `Url : ${get_result.url}\n`
                 reply(ini_txt).catch(() => reply(mess.error.api))
                 limitAdd(sender, limit)
                 break
            case prefix+'quotegc':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan text`)
                addCountCmd('#quotegc', sender, _cmd)
                var tlgc = await xinz.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
                for (let v of tlgc) {
                xinz.sendMessage(v, `*Quotes Of The Day*\n\n${q}`, text)
                }
                textImg(`Sukses`)
                break
            case prefix+'readall':
                if (!isOwner) return reply(mess.OnlyOwner)
                addCountCmd('#readall', sender, _cmd)
                let totalchat = await xinz.loadAllUnreadMessages()
                for (let v of totalchat){
                    xinz.chatRead(v.key.remoteJid, 'read')
                }
                replyDeface(`Sukses Read *${totalchat.length}* Chat`)
                break
			case prefix+'addchange': case prefix+'addupdate':
			    if (!isOwner) return reply(mess.OnlyOwner)
		        if (args.length < 2) return reply(`Kirim perintah ${command} topik|desc`)
			    if (!q.split("|")[1]) return reply(`Kirim perintah ${command} topik|desc`)
     		    addCountCmd('#addchange', sender, _cmd)
			    var anunya = { topik: q.split("|")[0], desc: q.split("|")[1] }
			    change.push(anunya)
				fs.writeFileSync('./database/change.json', JSON.stringify(change, null, 2))
				reply('Sukses')
			    break
			case prefix+'delchange': case prefix+'delupdate':
			    if (!isOwner) return reply(mess.OnlyOwner)
		        if (args.length < 2) return reply(`Kirim perintah ${command} topik`)
			    addCountCmd('#delchange', sender, _cmd)
			    async function getPosiChange(topik) {
				  var posi = null
				  Object.keys(change).forEach((i) => {
					if (change[i].topik === topik) {
						posi = i
					}
				  })
				  return posi
				}
				var anus = await getPosiChange(q)
				if (anus !== null) {
				  change.splice(anus, 1)
				  fs.writeFileSync('./database/change.json', JSON.stringify(change, null, 2))
				  reply(`Sukses`)
				} else {
				  reply(`Topik tersebut tidak terdaftar dalam database!`)
				}
				break
//------------------< G R U P >-------------------
            case prefix+'delete': case prefix+'del': case prefix+'d':
                if (!isGroupAdmins && !isOwner && !msg.key.fromMe)return reply(mess.GrupAdmin)
                if (!isQuotedMsg) return reply(`Reply pesan dari bot`)
                if (!quotedMsg.fromMe) return reply(`Reply pesan dari bot`)
                addCountCmd('#delete', sender, _cmd)
                xinz.deleteMessage(from, { remoteJid: from, id: quotedMsg.id, fromMe: true })
                break
           case prefix+'afk':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (isAfkOn) return reply('afk sudah diaktifkan sebelumnya')
                if (body.slice(100)) return reply('Alasanlu kepanjangan')
                addCountCmd('#afk', sender, _cmd)
                let reason = body.slice(5) ? body.slice(5) : 'Nothing.'
                afk.addAfkUser(sender, Date.now(), reason, _afk)
                reply(`@${sender.split('@')[0]} sedang afk\nAlasan : ${reason}`)
                break
            case prefix+'infogrup':
            case prefix+'infogroup':
            case prefix+'grupinfo':
            case prefix+'groupinfo':
                if (!isGroup) return reply(mess.OnlyGrup)
                addCountCmd('#infogrup', sender, _cmd)
                try {
                    var pic = await xinz.getProfilePicture(from)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                var tgl = `${groupMetadata.creation}`
                let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(tgl * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupOwner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelcome ? 'Aktif' : 'Mati'}\n*Left :* ${isLeft ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*AntiBadword :* ${isBadword ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
                xinz.sendMessage(from, await getBuffer(pic), image, {thumbnail: Buffer.alloc(0), quoted: msg, caption: ingfo, contextInfo: {"mentionedJid": parseMention(ingfo) }})
                break
            case prefix+'add':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                addCountCmd('#add', sender, _cmd)
                try {
                    var pic = await xinz.getProfilePicture(from)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                var pepeqq = await getBuffer(pic)
                if (isQuotedMsg && args.length < 2) {
                    xinz.groupAdd(from, [quotedMsg.sender])
                    .then((res) => {
                        if (res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us'].code === "403"){
                            let au = res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us']
                            xinz.sendMessage(quotedMsg.sender, { groupName: groupName, groupJid: from, inviteCode: au.invite_code, inviteExpiration: au.invite_code_exp, caption: `Invited by *GhosKyy Bid V2.0* To Group *${groupName}*`, jpegThumbnail: pepeqq }, MessageType.groupInviteMessage)
                            reply(`Mengirimkan groupInvite kepada nomor tersebut`)
                        } else if (res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us'].code === "408"){
                            reply(`Gagal menambahkan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
                        } else if (res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us'].code === "401"){
                            reply(`Gagal menambahkan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
                        } else if (res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us'].code === "409"){
                            reply(`Doi sudah berada di dalam grup!`)
                        } else {
                            reply(`Sukses menambahkan doi ke dalam group!`)
                        }
                    })
                    .catch((err) => reply(jsonformat(err)))
                } else if (args.length < 3 && !isNaN(args[1])){
                if (args[1].startsWith('+')) return reply(`Awali nomer dengan kode telepon negara yang valid\nContoh : ${command} 62xxxx`)
               var cekk = await xinz.isOnWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekk === undefined) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    xinz.groupAdd(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => {
                        if (res.participants[0][args[1] + '@c.us'].code === "403"){
                            let au = res.participants[0][args[1] + '@c.us']
                            xinz.sendMessage(args[1] + '@s.whatsapp.net', { groupName: groupName, groupJid: from, inviteCode: au.invite_code, inviteExpiration: au.invite_code_exp, caption: `Invited by *GhosKyy Bid V2.0* To Group *${groupName}*`, jpegThumbnail: pepeqq }, MessageType.groupInviteMessage)
                            reply(`Mengirimkan groupInvite kepada nomor tersebut`)
                        } else if (res.participants[0][args[1] + '@c.us'].code === "408"){
                            reply(`Gagal menambahkan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
                        } else if (res.participants[0][args[1] + '@c.us'].code === "401"){
                            reply(`Gagal menambahkan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
                        } else if (res.participants[0][args[1] + '@c.us'].code === "409"){
                            reply(`Nomer tersebut sudah berada di dalam grup!`)
                        } else {
                            reply(`Sukses menambahkan nomer tersebut ke dalam group!`)
                        }
                    })
		    .catch((err) => reply(jsonformat(err)))
		} else {
                    reply(`Kirim perintah ${prefix}add nomor atau reply pesan orang yang ingin di add, Contoh :\n${prefix}add <reply pesan>\n${prefix}add 62857xxxxxxxx`)
                }
                /*reply(`Maaf fitur sementara di nonaktifkan untuk menghindari banned dari pihak WhatsApp`)*/
                break
            case prefix+'kick':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                addCountCmd('#kick', sender, _cmd)
                if (mentionUser.length > 1) {
                  if (mentionUser.includes(xinz.user.jid)) return reply(`Tidak bisa kick bot!`)
                  if (mentionUser.includes(ownerNumber)) return reply(`Tidak bisa kick owner bot!`)
                  var teks = 'Perintah di terima, mengeluarkan :\n\n'
                  let orgx = []
                  for (let _ of mentionUser) {
                   if (mentionUser.includes(groupOwner.replace('@c.us', '@s.whatsapp.net'))) {
                    if (!_.startsWith(groupOwner.replace('@c.us', '@s.whatsapp.net'))) {
                       teks += `@${_.split('@')[0]}\n`
                       xinz.groupRemove(from, [_])
                     }
                  } else if (!mentionUser.includes(groupOwner.replace('@c.us', '@s.whatsapp.net'))) {
                       teks += `@${_.split('@')[0]}\n`
                       xinz.groupRemove(from, [_])
                     }
                  }
                  if (mentionUser.includes(groupOwner.replace('@c.us', '@s.whatsapp.net'))) { teks += `\nTidak bisa kick owner group!` }
                  mentions(teks, mentionUser, true)
                } else if (isQuotedMsg) {
                  var org = quotedMsg.sender
                  if (org.split("@")[0] === groupOwner.split("@")[0]) return reply(`Tidak bisa kick owner group!`)
                  if (org === xinz.user.jid) return reply(`Tidak bisa kick bot!`)
                  if (org === ownerNumber) return reply(`Tidak bisa kick owner bot!`)
                  mentions(`Perintah di terima, mengeluarkan : @${org.split('@')[0]}`, [org], true)
                  xinz.groupRemove(from, [org])
                } else if (mentionUser.length === 1) {
                  if (mentionUser[0].split("@")[0] === groupOwner.split("@")[0]) return reply(`Tidak bisa kick owner group!`)
                  if (mentionUser[0] === xinz.user.jid) return reply(`Tidak bisa kick bot!`)
                  if (mentionUser[0] === ownerNumber) return reply(`Tidak bisa kick owner bot!`)
                  mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
                  xinz.groupRemove(from, [mentioned[0]])
                } else {
                  reply(`@Tag atau reply pesan orang yang ingin di kick!`)
                }
                /*reply(`Maaf fitur sementara di nonaktifkan untuk menghindari banned dari pihak WhatsApp`)*/
                break
            case prefix+'kickall':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isOwner) return reply(mess.OnlyOwner)
                if (!kickall) return reply(`Yakin mau kick all? nyalain dulu modenya, ketik > kickall = true`)
                addCountCmd('#kickall', sender, _cmd)
                reply(`Perintah di terima, mengeluarkan semua member di group ini!`)
                .then(async(res) => {
                  var mem = await xinz.getMembers(from)
                   for (let x of mem) {
                    if (!groupAdmins.includes(x) && !ownerNumber.includes(x)) {
                     xinz.groupRemove(from, [x])
                    }
                   }
                  kickall = false
                  reply(`Sukses Kick All Member Group!`)
                })
                break
            case prefix+'promote':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                addCountCmd('#promote', sender, _cmd)
                if (mentioned.length !== 0){
                    xinz.groupMakeAdmin(from, [mentionUser[0]])
                    .then((res) => reply(`Sukses promote @${mentionUser[0].split("@")[0]}`))
                    .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMsg) {
                    xinz.groupMakeAdmin(from, [quotedMsg.sender])
                    .then((res) => reply(`Sukses promote @${quotedMsg.sender.split("@")[0]}`))
                    .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    var cok = await xinz.isOnWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cok === undefined) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    xinz.groupMakeAdmin(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => reply(`Sukses promote @${args[1]}`))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix}promote @tag atau nomor atau reply pesan orang yang ingin di promote`)
                }
                break
            case prefix+'demote':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                addCountCmd('#demote', sender, _cmd)
                if (mentioned.length !== 0){
                  if (mentionUser[0].split("@")[0] === groupOwner.split("@")[0]) return reply(`Tidak bisa demote owner group!`)
                  if (mentionUser[0] === xinz.user.jid) return reply(`Tidak bisa demote bot!`)
                    xinz.groupDemoteAdmin(from, [mentionUser[0]])
                    .then((res) => reply(`Sukses demote @${mentionUser[0].split("@")[0]}`))
                    .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender.split("@")[0] === groupOwner.split("@")[0]) return reply(`Tidak bisa demote owner group!`)
                    if (quotedMsg.sender === xinz.user.jid) return reply(`Tidak bisa demote bot!`)
                    xinz.groupDemoteAdmin(from, [quotedMsg.sender])
                    .then((res) => reply(`Sukses demote @${quotedMsg.sender.split("@")[0]}`))
                    .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                   var ceks = await xinz.isOnWhatsApp(args[1]+"@s.whatsapp.net")
                 if (ceks === undefined) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                  if (args[1] === groupOwner.split("@")[0]) return reply(`Tidak bisa demote owner group!`)
                   if (args[1]+'@s.whatsapp.net' === xinz.user.jid) return reply(`Tidak bisa demote bot!`)
                    xinz.groupDemoteAdmin(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => reply(`Sukses demote @${args[1]}`))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix}demote @tag atau nomor atau reply pesan orang yang ingin di demote`)
                }
                break
            case prefix+'kickbule':
                 if (!sender.includes("6287820694326@s.whatsapp.net") && !sender.includes(botNumber)) return
                 if (!isGroup) return reply(mess.OnlyGrup)
                 if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                 var mem = await xinz.getMembers(from)
                 let u = []
                 for (let i of mem) {
                   if (!i.startsWith('62')) {
                     u.push(i)
                   }
                 }
                 if (u.length === 0) return reply(`Gada bule disini:v`)
                 var tks = `List Bule Yang Akan Di Kick\nTotal : *${u.length}*\n\n`
                 var num = 0
                 for (let o of u) {
                   num += 1
                   tks += `${num.toString()}. @${o.split("@")[0]}\n`
                 }
                 reply(tks)
                 await sleep(1500)
                 for (let x of u) {
                   xinz.groupRemove(from, [x])
                 }
                 break
            case prefix+'listadmin':
            case prefix+'adminlist':
                if (!isGroup) return reply(mess.OnlyGrup)
                addCountCmd('#listadmin', sender, _cmd)
                var teks = `List Admin *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                 var no = 0
                 for (let admon of groupAdmins) {
                   no += 1
                   teks += `${no.toString()}. @${admon.split('@')[0]}\n`
                 }
                 mentions(teks, groupAdmins, true)
                 break
            case prefix+'linkgc': case prefix+'linkgrup': case prefix+'linkgroup':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                addCountCmd('#linkgc', sender, _cmd)
                xinz.groupInviteCode(from)
                .then((res) => reply('https://chat.whatsapp.com/' + res))
                break
            case prefix+'groupofficial': case prefix+'groupchitanda':{
                addCountCmd('#groupchitanda', sender, _cmd)
                xinz.groupInviteCode("6285791458996-1628076093@g.us")
                .then(async(res) => {
				  var anu = await xinz.groupInviteCode("6285791458996-1635595046@g.us")
                reply(`Group 1 : https://chat.whatsapp.com/`+res+'\n\nGroup 2 : https://chat.whatsapp.com/'+anu+'\n\nJangan lupa join group *GhosKyy Bid V2.0*')
              })
            }
                 break
            case prefix+'inspect':
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length < 2) return reply(`Kirim perintah *${command}* link grup`)
                addCountCmd('#inspect', sender, _cmd)
                 var codee = args[1].split('https://chat.whatsapp.com/')[1]
                 var res = await xinz.inspectCode(codee)
             var todd = `*「 Group Link Inspector 」*
• *Id:* ${res.id}
• *Nama grup:* ${res.subject}
• *Dibuat oleh* @${res.id.split('-')[0]}
  pada *${formatDate(res.creation * 1000)}*${res.subjectOwner ? `
• *Judul diubah oleh* @${res.subjectOwner.split(`@`)[0]}
  pada *${formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `
• *Deskripsi diubah oleh* @${res.descOwner.split(`@`)[0]}
  pada *${formatDate(res.descTime * 1000)}*` : ''}
• *Jumlah Member:* ${res.size}

• *Teman yang diketahui join*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split(`@`)[0]).join('\n').trim() : 'Tidak ada'}
${res.desc ? `\n• *Deskripsi:*\n
${res.desc}` : '\n*Tidak ada Deskripsi*'}`
             reply(todd)
                 break
            case prefix+'leave':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isOwner)return reply(mess.OnlyOwner)
                addCountCmd('#leave', sender, _cmd)
                reply('bye...')
                await sleep(2000)
                xinz.modifyChat(from, ChatModification.delete)
                xinz.groupLeave(from)
                break
            case prefix+'setdesc':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Penggunaan ${prefix}setdesc desc`)
                addCountCmd('#setdesc', sender, _cmd)
                xinz.groupUpdateDescription(from, q)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                break
            case prefix+'setgrupname':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Penggunaan ${prefix}setgrupname name`)
                addCountCmd('#setgrupname', sender, _cmd)
                xinz.groupUpdateSubject(from, q)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                break
            case prefix+'setsewa':
                if (!isGroup)return reply(mess.OnlyGrup)
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}+sewa* add/del waktu`)
                if (args[1].toLowerCase() === 'add'){
                    addCountCmd('#setsewa', sender, _cmd)
                    _sewa.addSewaGroup(from, args[2], sewa)
                    reply(`Success`)
                } else if (args[1].toLowerCase() === 'del'){
                    addCountCmd('#setsewa', sender, _cmd)
                    sewa.splice(_sewa.getSewaPosition(args[1] ? args[1] : from, sewa), 1)
                    fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
                    reply(`Success`)
                } else {
                   reply(`Penggunaan :\n*${prefix}+sewa* add/del waktu`)
                }
                break
            case prefix+'listsewa':
                if (!isOwner) return
                addCountCmd('#listsewa', sender, _cmd)
                let tkt = `List Sewa Bot\nJumlah : ${sewa.length}\n\n`
                for (let i of sewa) {
                  tkt += `*ID :* ${i.id}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    tkt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    tkt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                xinz.sendMessage(from, tkt, text, { quoted: msg })
                break
            case prefix+'sewacheck':
            case prefix+'ceksewa': {
                if (!isGroup)return reply(mess.OnlyGrup)
                if (!isSewa) return reply(`Bot tidak di sewa group ini!`)
                addCountCmd('#ceksewa', sender, _cmd)
                let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                }
                break
            case prefix+'sider': case prefix+'chatinfo':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isQuotedMsg) return reply(`Reply pesan dari bot`)
                if (!quotedMsg.fromMe) return reply(`Reply pesan dari bot`)
                addCountCmd('#chatinfo', sender, _cmd)
                xinz.messageInfo(from, quotedMsg.id)
                    .then((res) => {
                        let anu = []
                        let txt = `*Info Chat*\n\n`
                        for (let i = 0; i < res.reads.length; i++){
                            anu.push(res.reads[i].jid)
                            txt += `@${res.reads[i].jid.split("@")[0]}\n`
                            txt += `Waktu membaca : ${moment(res.reads[i].t * 1000).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                        }
                        mentions(txt, anu, true)
                    })
                    .catch((err) => reply(jsonformat(err)))
                break
            case prefix+'searchmsg':
                 break
            case prefix+'group': case prefix+'grup':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args[1] === 'open') {
                   xinz.groupSettingChange(from, GroupSettingChange.messageSend, false)
                   textImg('Sukses Open Group!')
                   addCountCmd('#opengrup', sender, _cmd)
                } else if (args[1] === 'close') {
                   xinz.groupSettingChange(from, GroupSettingChange.messageSend, true)
                   textImg('Sukses Close Group!')
                   addCountCmd('#closegrup', sender, _cmd)
                } else {
                   const buttGc = [
                   { buttonId: "!closegrup", buttonText: { displayText: "Close" }, type: 1 },
                   { buttonId: "!opengrup", buttonText: { displayText: "Open" }, type: 1 }
                 ]
                 const buttonGrup = {
                   contentText: `Please Select One of the Buttons Below To Change Group Settings`,
                   footerText: 'Group Settings by GhosKyy Bid V2.0',
                   buttons: buttGc,
                   headerType: 1
                 }
                 xinz.sendMessage(from, buttonGrup, buttonsMessage, {detectLinks: false, contextInfo: {mentionedJid: [sender]}})
                }
                break
            case prefix+'opengrup':
                 if (!isGroup) return reply(mess.OnlyGrup)
                 if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                 if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                 xinz.groupSettingChange(from, GroupSettingChange.messageSend, false)
                 textImg('Sukses Open Group!')
                 addCountCmd('#opengrup', sender, _cmd)
                 break
            case prefix+'closegrup':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                xinz.groupSettingChange(from, GroupSettingChange.messageSend, true)
                textImg('Sukses Close Group!')
                addCountCmd('#closegrup', sender, _cmd)
                break
            case prefix+'setppgrup':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (isImage || isQuotedImage) {
                    addCountCmd('#setppgrup', sender, _cmd)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    xinz.updateProfilePicture(from, media)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
                }
                break
            case prefix+'revoke':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                addCountCmd('#revoke', sender, _cmd)
                xinz.revokeInvite(from)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                break
           case prefix+'join':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}join* link grup`)
                if (!isUrl(args[1]) && !args[1].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
                addCountCmd('#join', sender, _cmd)
                let code = args[1].replace('https://chat.whatsapp.com/', '')
                xinz.acceptInvite(code)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                break
            case prefix+'tagall':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                addCountCmd('#tagall', sender, _cmd)
                let arr = [];
                let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
                for (let i of groupMembers){
                    txti += `=> @${i.jid.split("@")[0]}\n`
                    arr.push(i.jid)
                }
                mentions(txti, arr, true)
                break
//------------------< Enable / Disable >-------------------
            case prefix+'antibadword':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                addCountCmd('#antibadword', sender, _cmd)
                if (args[1].toLowerCase() === 'enable'){
                    if (isBadword) return reply(`Udah aktif`)
                    grupbadword.push(from)
                    fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword, null, 2))
                    reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                } else if (args[1].toLowerCase() === 'disable'){
                    anu = grupbadword.indexOf(from)
                    grupbadword.splice(anu, 1)
                    fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword, null, 2))
                    reply('antibadword grup nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
            case prefix+'listbadword':
                addCountCmd('#listbadword', sender, _cmd)
                let bi = `List badword\n\n`
                for (let boo of badword){
                    bi += `- ${boo}\n`
                }
                bi += `\nTotal : ${badword.length}`
                reply(bi)
                break
            case prefix+'addbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`masukkan kata`)
                if (isKasar(args[1].toLowerCase(), badword)) return reply(`Udah ada`)
                addCountCmd('#addbadword', sender, _cmd)
                addBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case prefix+'delbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`masukkan kata`)
                if (!isKasar(args[1].toLowerCase(), badword)) return reply(`Ga ada`)
                addCountCmd('#delbadword', sender, _cmd)
                delBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case prefix+'clearbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`tag atau nomor`)
                addCountCmd('#clearbadword', sender, _cmd)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    reply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    reply('Sukses')
                }
                break
             
            case prefix+'mute':
                if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
                if (!isOwner && !isGroupAdmins) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins && !isOwner) return reply(mess.BotAdmin)
                if (isMuted) return reply(`udah di mute`)
                addCountCmd('#mute', sender, _cmd)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
                reply(`Bot berhasil dimute di chat ini`)
                break
			case prefix+'unmute':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (!isMuted) return reply(`belum juga di mute`)
				addCountCmd('#unmute', sender, _cmd)
			    var anus = mute.indexOf(from)
                mute.splice(anus, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
                reply(`Bot telah diunmute di group ini`)
				break
            case prefix+'antilink':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                addCountCmd('#antilink', sender, _cmd)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiLink) return reply(`Udah aktif`)
                    antilink.push(from)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                    reply('Antilink grup aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antilink.indexOf(from)
                    antilink.splice(anu, 1)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                    reply('Antilink grup nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
                case prefix+'antiemotbatu':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                addCountCmd('#antiemotbatu', sender, _cmd)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiLink) return reply(`Udah aktif`)
                    antilink.push(from)
                    fs.writeFileSync('./database/antiemotbatu.json', JSON.stringify(antilink, null, 2))
                    reply('Anti emot batu grup aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antilink.indexOf(from)
                    antilink.splice(anu, 1)
                    fs.writeFileSync('./database/antiemotbatu.json', JSON.stringify(antiemotbatu, null, 2))
                    reply('Antiemotbatu grup nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
            case prefix+'welcome':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                addCountCmd('#welcome', sender, _cmd)
                if (args[1].toLowerCase() === 'enable'){
                    if (isWelcome) return reply(`Udah aktif`)
                    welcome.push({jid: from, teks: `Welcome @user`})
                    fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                    reply('Welcome aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = getPosiSaying(from, welcome)
                    welcome.splice(anu, 1)
                    fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                    reply('Welcome nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
            case prefix+'left':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                addCountCmd('#left', sender, _cmd)
                if (args[1].toLowerCase() === 'enable'){
                    if (isLeft) return reply(`Udah aktif`)
                    left.push({jid: from, teks: `Sayonara @user`})
                    fs.writeFileSync('./database/left.json', JSON.stringify(left, null, 2))
                    reply('Left aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = getPosiSaying(from, left)
                    left.splice(anu, 1)
                    fs.writeFileSync('./database/left.json', JSON.stringify(left, null, 2))
                    reply('Left nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
            case prefix+'setwelcome': case prefix+'setwelkom':
                 if (!isGroup) return reply(mess.OnlyGrup)
                 if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                 if (!isWelcome) return reply(`Welcome di group ini belum di aktifkan, kirim perintah ${prefix + 'welcome'} enable untuk mengaktifkan!`)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* teks\nUntuk penjelasan pemakaian yang lebih detail, ketik *${command} --help*`)
                 if (args[1] === '--help') {
                    addCountCmd('#setwelcome', sender, _cmd)
                    var teksw = `Command Ini Berfungsi Untuk Mengganti Teks Welcome\n\n*Penggunaan :*\n- ${command} teks baru\n\n*List Option :*\n- @user _untuk mentions new member_\n- @pushname _untuk nama new mem_\n- @subject _untuk nama group_\n- @desc _untuk deskripsi group_\n\nContoh :\n*${command}* Hai @user selamat datang di group @subject`
                    xinz.sendMessage(from, teksw, text, {quoted: msg, contextInfo: {externalAdReply: { title: `Set Welcome`, body: `How to Use the Change Welcome Text Feature`, mediaType: 2, thumbnail: fs.readFileSync('./media/Chitanda.jpg'), sourceUrl: `wa.me/6289653381067`}}})
                 } else {
                    addCountCmd('#setwelcome', sender, _cmd)
                    var posiw = getPosiSaying(from, welcome)
                    welcome[posiw].teks = q
                    fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                    reply(`Sukses merubah teks welcome menjadi :\n\n${q}`)
                 }
                 break
            case prefix+'setleft': case prefix+'setout':
                 if (!isGroup) return reply(mess.OnlyGrup)
                 if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                 if (!isLeft) return reply(`Left di group ini belum di aktifkan, kirim perintah ${prefix + 'left'} enable untuk mengaktifkan!`)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* teks\nUntuk penjelasan pemakaian yang lebih detail, ketik *${command} --help*`)
                 if (args[1] === '--help') {
                    addCountCmd('#setleft', sender, _cmd)
                    var teksl = `Command Ini Berfungsi Untuk Mengganti Teks Left\n\n*Penggunaan :*\n- ${command} teks baru\n\n*List Option :*\n- @user _untuk mentions new member_\n- @pushname _untuk nama new mem_\n- @subject _untuk nama group_\n- @desc _untuk deskripsi group_\n\nContoh :\n*${command}* Yah @user keluar dari group @subject`
                    xinz.sendMessage(from, teksl, text, {quoted: msg, contextInfo: {externalAdReply: { title: `Set Left`, body: `How to Use the Change Left Text Feature`, mediaType: 2, thumbnail: fs.readFileSync('./media/Chitanda.jpg'), sourceUrl: `wa.me/6289653381067`}}})
                 } else {
                    addCountCmd('#setleft', sender, _cmd)
                    var posil = getPosiSaying(from, left)
                    left[posil].teks = q
                    fs.writeFileSync('./database/left.json', JSON.stringify(left, null, 2))
                    reply(`Sukses merubah teks left menjadi :\n\n${q}`)
                 }
                 break
            case prefix+'fakedeface':
                 if (!isPremium) return reply(mess.OnlyPrem)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* url|name|desk`)
                 if (isImage || isQuotedImage) {
                 var nn = body.slice(12)
                 var textny = nn.split("|")[0];
                 var urlnye = isUrl(textny)[0];
                 var titlenye = nn.split("|")[1];
                 var descnye = nn.split("|")[2];
                 var run = getRandom('.jpeg')
                 var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
                 var media = await xinz.downloadAndSaveMediaMessage(encmedia)
                 var ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))
                 addCountCmd('#fakedeface', sender, _cmd)
                 xinz.sendMessage(from, {
                 text: `${textny}`,
                 matchedText: `${urlnye}`,
                 canonicalUrl: `${urlnye}`,
                 description: `${descnye}`,
                 title: `${titlenye}`,
                 jpegThumbnail: ddatae }, 'extendedTextMessage', { detectLinks: false })
                 limitAdd(sender, limit)
                 fs.unlinkSync(media)
                 } else {
                 reply(`Kirim/Reply gambar dengan teks *${command}* url|name|desk`)
                 }
                 break
            case prefix+'bugimg':
                 if (!isPremium) return reply(mess.OnlyPrem)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* teks`)
                 if (isImage || isQuotedImage) {
                 var nnn = body.slice(12)
                 var titlenyee = nnn.split("|")[1];
                 var run = getRandom('.jpeg')
                 var media1 = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                 var media2 = await xinz.downloadAndSaveMediaMessage(media1)
                 var ddatae = await imageToBase64(JSON.stringify(media2).replace(/\"/gi, ''))
                 addCountCmd('#bugimg', sender, _cmd)
                 xinz.sendMessage(from, {text: `${q}`, title: `Created By Xyann`, jpegThumbnail: ddatae }, 'extendedTextMessage', { detectLinks: false, contextInfo: { mentionedJid: parseMention (q) }})
                 limitAdd(sender, limit)
                 fs.unlinkSync(media2)
                 } else {
                 reply(`Kirim/Reply gambar dengan teks *${command}* teks`)
                 }
                 break
              default:
              if (isCmd && !isBaileys) {
               if (args[0].length > 1) {
                var detect = await Dym(command.split(prefix)[1], listCmd)
				if (detect !== null) {
				 reply(`Mungkin yang anda maksud adalah ${prefix + detect} abaikan jika salah!`)
				}
				if (!isGroup && detect === null) {
				 reply(`Maaf kak fitur ${command} tidak terdaftar di list ${prefix+'menu'}`)
				}
               }
              }
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
}
