"use strict";
const {
	MessageType,
	Presence
} = require("@adiwajshing/baileys");
const fs = require("fs");

const { getBuffer, sleep, getGroupAdmins } = require("../lib/myfunc");

let setting = JSON.parse(fs.readFileSync('./config.json'));
let { botName, lolkey } = setting

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

module.exports = async(xinz, anj, welcome, left) => {
    const isWelcome = getPosiSaying(anj.jid, welcome) ? true : false
    const isLeft = getPosiSaying(anj.jid, left) ? true : false
    const posiw = getPosiSaying(anj.jid, welcome)
    const posil = getPosiSaying(anj.jid, left)
    const mdata = await xinz.groupMetadata(anj.jid)
    const groupName = mdata.subject
    const groupDesc = mdata.desc
    const ownerGroup = mdata.owner ? mdata.owner : mdata.id.split("-")[0]+'@c.us'
    const groupMembers = mdata.participants.length
    const groupAdmins = await getGroupAdmins(mdata.participants)
    const isBotAdmins = groupAdmins.includes(xinz.user.jid) || false
    const pp_group = await xinz.getProfilePicture(anj.jid)
    const num = anj.participants[0]
    var conts = xinz.contacts[num] || { notify: jid.replace(/@.+/, '') }
    var pushname = conts.notify || conts.vname || conts.name || '-'

    if (anj.action === 'add') {
        if (anj.participants[0] === xinz.user.jid){
            await sleep(3000)
            xinz.updatePresence(anj.jid, Presence.composing)
            xinz.sendMessage(anj.jid, `Hai aku ${botName} Bot, silahkan kirim #menu`, MessageType.text)
        } else if (anj.participants[0].replace('@s.whatsapp.net', '@c.us') === ownerGroup && isBotAdmins){
            xinz.groupMakeAdmin(anj.jid, [num])
            .then( res => {
            xinz.sendMessage(anj.jid, `*「 Auto Promote 」*\n@${num.split("@")[0]} Telah menjadi admin karena owner group ini!`, MessageType.text, { contextInfo: { "mentionedJid": [num] }})
           })
        } else if (isWelcome) {
            try {
                var pp_user = await xinz.getProfilePicture(anj.participants[0])
            } catch {
                var pp_user = 'https://telegra.ph/file/d325d3ae07ac6cb751db8.png'
            }
            // var picture = `https://api.lolhuman.xyz/api/base/welcome?apikey=${lolkey}&img1=${pp_user}&img2=${pp_group}&background=https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg&username=${encodeURI(pushname)}&member=${groupMembers}&groupname=${encodeURIComponent(groupName)}`
            const teksx = welcome[posiw].teks
            const teksw = teksx.replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@subject/gi, groupName).replace(/@pushname/gi, pushname).replace(/@desc/gi, groupDesc)
            xinz.sendMessage(anj.jid, { url: pp_user }, MessageType.image, {caption: teksw, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": [anj.participants[0]]}})
        }
    } else if (anj.action === 'remove' && isLeft) {
        try {
            var pp_user = await xinz.getProfilePicture(anj.participants[0])
        } catch {
            var pp_user = 'https://telegra.ph/file/d325d3ae07ac6cb751db8.png'
        }
        // var picture = `https://api.lolhuman.xyz/api/base/leave?apikey=${lolkey}&img1=${pp_user}&img2=${pp_group}&background=https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg&username=${encodeURI(pushname)}&member=${groupMembers}&groupname=${encodeURIComponent(groupName)}`
        var teksl = left[posil].teks.replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@subject/gi, groupName).replace(/@pushname/gi, pushname).replace(/@desc/gi, groupDesc)
        xinz.sendMessage(anj.jid, { url: pp_user }, MessageType.image, {caption: teksl, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": [anj.participants[0]]}})
    } else if (anj.action === 'promote' && anj.participants[0].replace('@s.whatsapp.net', '@c.us') !== ownerGroup) {
        xinz.sendMessage(anj.jid, `*「 _Promote Detected_ 」*\n@${num.split("@")[0]} Telah Menjadi Admin Di Grup Ini`, MessageType.text, { contextInfo: { mentionedJid: [ num ] } })
    } else if (anj.action === 'demote') {
       if (anj.participants[0].split("@")[0] === ownerGroup.split("@")[0] && isBotAdmins) {
         xinz.groupMakeAdmin(anj.jid, [num])
         xinz.sendMessage(anj.jid, `*「 _Demote Detected_ 」*\nKarena @${num.split("@")[0]} Owner Group, Maka Bot Otomatis Menjadikannya admin :3`, MessageType.text, { contextInfo: { mentionedJid: [ num ] }})
       } else {
         xinz.sendMessage(anj.jid, `*「 _Demote Detected_ 」*\n@${num.split("@")[0]} Telah Menjadi Member Biasa Di Grup Ini`, MessageType.text, { contextInfo: { mentionedJid: [ num ] } })
       }
    }
}