"use strict";
let { WAConnection : _WAConnection } = require("@adiwajshing/baileys");
let { MessageType } = require("@adiwajshing/baileys");
const qrcode = require("qrcode-terminal");
const figlet = require("figlet");
const fs = require("fs");

const { color, XinzLog } = require("./lib/color");
const { serialize, generateMessageID, sleep } = require("./lib/myfunc");
const myfunc = require("./lib/myfunc");
const afk = require("./lib/afk");

let WAConnection = myfunc.WAConnection(_WAConnection)

let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
let left = JSON.parse(fs.readFileSync('./database/left.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/stickercmd.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));
let group_update = false
let blocked = [];
let baterai = {
    baterai: 0,
    cas: false
};

require('./message/xinz.js')
nocache('./message/xinz.js', module => console.log(color(`'${module}' Telah berubah!`)))
require('./message/help.js')
nocache('./message/help.js', module => console.log(color(`'${module}' Telah berubah!`)))

const start = async(sesion, xinz = new WAConnection) => {
    xinz.logger.level = 'warn'
	xinz.version = [2, 2140, 12]

    // MENG WE EM
	console.clear()
    console.log(color(figlet.textSync('GhosKyy V2.0', {
            font: 'Standard',
            horizontalLayout: 'default',
            vertivalLayout: 'default',
            whitespaceBreak: false
        }), 'cyan'))
        console.log(color('[ RECODE BY XYANN! ]'))

    // Menunggu QR
    xinz.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(XinzLog('Scan QR ~~'))
    })
xen = `6289653381067@s.whatsapp.net`
    // Restore Sesion
    fs.existsSync(sesion) && xinz.loadAuthInfo(sesion)

    // Mencoba menghubungkan
    xinz.on('connecting', () => {
      console.log(XinzLog('Connecting...'))
    })

    // Konek
    xinz.on('open', (json) => {
      console.log(XinzLog('Connect, Welcome Owner'))
    })

    // Write Sesion
    await xinz.connect({timeoutMs: 30*1000})
    fs.writeFileSync(sesion, JSON.stringify(xinz.base64EncodedAuthInfo(), null, '\t'))

    // Ya gitulah
    xinz.on('ws-close', () => {
        console.log(XinzLog('Koneksi terputus, mencoba menghubungkan kembali..'))
    })

    // Ntahlah
    xinz.on('close', async ({ reason, isReconnecting }) => {
        console.log(XinzLog('Terputus, Alasan :' + reason + '\nMencoba mengkoneksi ulang :' + isReconnecting))
        if (!isReconnecting) {
            console.log(XinzLog('Connect To Phone Rejected and Shutting Down.'))
        }
    })

    // Block
    xinz.on('CB:Blocklist', json => {
        if (blocked.length > 2) return
        for (let i of json[1].blocklist) {
            blocked.push(i.replace('c.us','s.whatsapp.net'))
        }
    })

    // Action Call
    xinz.on('CB:Call', async json => {
        let number = json[1]['from'];
        let isOffer = json[1]["type"] == "offer";
        if (number && isOffer && json[1]["data"]) {
            var tag = xinz.generateMessageTag();
            var NodePayload = ["action", "call", ["call", {
                "from": xinz.user.jid,
                "to": number.split("@")[0] + "@s.whatsapp.net",
                "id": tag
            }, [["reject", {
                "call-id": json[1]['id'],
                "call-creator": number.split("@")[0] + "@s.whatsapp.net", 
                "count": "0"
            }, null]]]];
            xinz.send(`${tag}, ${JSON.stringify(NodePayload)}`)
            xinz.sendMessage(number, `Maaf bot tidak menerima telepon, bot otomatis memblokir nomer anda! Jika ingin membuka blokir chat owner : ${xen.split('@')[0]}\n\n*WhatsApp Bot*`, MessageType.text, { contextInfo: { mentionedJid: [setting.ownerNumber] }})
            .then(async(res) => {
              await xinz.blockUser(number, 'add')
            })
        }
    })

    // Action Battery
    xinz.on('CB:action,,battery', json => {
        const a = json[2][0][1].value
        const b = json[2][0][1].live
        baterai.baterai = a
        baterai.cas = b
    })

    async function blockUser(jid, opsi) {
      await xinz.blockUser(jid, opsi)
      if (opsi === 'add') {
        blocked.push(jid.replace('c.us','s.whatsapp.net'))
      } else if (opsi === 'remove') {
       Object.keys(blocked).forEach((i) => {
       if (blocked[i] === jid.replace('c.us','s.whatsapp.net')) {
         if (i === null) return
          blocked.splice(i, 1)
         }
       })
      }
    }

    // Chat
    xinz.on('chat-update', async (qul) => {
        // Presence
        if (qul.presences){
            for (let key in qul.presences){
                if (qul.presences[key].lastKnownPresence === "composing" || qul.presences[key].lastKnownPresence === "recording"){
                    if (afk.checkAfkUser(key, _afk)) {
                        _afk.splice(afk.getAfkPosition(key, _afk), 1)
                        fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
                        xinz.sendMessage(qul.jid, `@${key.split("@")[0]} berhenti afk, dia sedang ${qul.presences[key].lastKnownPresence === "composing" ? "mengetik" : "merekam"}`, MessageType.extendedText, {contextInfo: {"mentionedJid": [key]}})
                    }
                }
            }
        }
    if (!qul.hasNewMessage) return
     qul = qul.messages.all()[0]
      if (!qul.message) return
      if (qul.key.remoteJid === "status@broadcast") return xinz.chatRead("status@broadcast", 'read')
       if (qul.key && qul.key.remoteJid == 'status@broadcast') return
        let msg = serialize(xinz, qul, _scommand)
         require('./message/xinz')(xinz, msg, blocked, baterai, _afk, welcome, left, _scommand, blockUser)
          xinz.user.imgUrl = "https://telegra.ph/file/4f259c934fb21f2d52885.jpg"
    })

    // Event Group 
    xinz.on('group-participants-update', async (anj) => {
        require("./message/group")(xinz, anj, welcome, left)
    })

    // Group Update
    xinz.on('group-update', async (anu) => {
     console.log(anu)
      if (group_update) {
       var metdata = await xinz.groupMetadata(anu.jid)
        if(anu.announce == 'false'){
         var teks = `- *「 _Group Opened_ 」* -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
         xinz.sendMessage(metdata.id, teks, MessageType.text)
        } else if(anu.announce == 'true'){
         var teks1 = `- *「 _Group Closed_ 」* -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
         xinz.sendMessage(metdata.id, teks1, MessageType.text)
        } else if (!anu.desc == ''){
         var tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
         var teks2 = `- *「 _Group Description Change_ 」* -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\nDeskripsi Baru :\n${anu.desc}`
         xinz.sendMessage(metdata.id, teks2, MessageType.text, {contextInfo: {"mentionedJid": [tag]}})
        }
      }
    })
}
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 function nocache(module, cb = () => { }) {
    console.log(color(`Module ${module} Dipantau oleh Soeharto`))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

start(`./Xyann.json`)
.catch(err => console.log(err))