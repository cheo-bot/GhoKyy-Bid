const fs = require("fs");
let { ownerNumber, limitCount } = JSON.parse(fs.readFileSync('./config.json'));
const speed = require("performance-now");
let timestampi = speed();
let latensii = speed() - timestampi
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const x = '```'
const xc = '—'
xen = "6289653381067@s.whatsapp.net"
ghoo = "6289514080169@s.whatsapp.net"
exports.menu = (xinz, prefix, pushname, ucapanWaktu, sender, isOwner, isPremium, gcount, glimit, baterai, limit, balance, getLimit, getBalance, cekGLimit, _cmd) => {
    var totalhit = 0
    for (let x of _cmd) {
      totalhit = totalhit + x.count
    }
    return `                            🐥🐣
yoo my name is GhosKyy V 2.0 , Iam Simple NodeJs By @${xen.split('@')[0]}

› *Info User* ‹
Hello ${pushname ? pushname: ''}, ${ucapanWaktu} 
Status = [ *${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}* ]
Limit Harian = [ *${isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}* ]
Limit Game = [ *${isOwner ? 'Unlimited' : `${cekGLimit(sender, gcount, glimit)}`}* ]

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
› ${prefix}inspect

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
› ${prefix}sideoppai
› ${prefix}cum 
› ${prefix}yuri
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
› ${prefix}fotbar
› ${prefix}memep

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
Nomor = [ @${xen.split('@')[0]} ]
Instagram = [ @iamghosky_ ]
› *BOT INFO* ‹
Nomor = [ @${ghoo.split('@')[0]} ]
Device = [ _${xinz.user.phone.device_manufacturer.kapitalis()} Versi ${xinz.user.phone.device_model}_ ]
Ram = [ _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_ ]
kekuatan sinyal = [ _${latensii.toFixed(4)}ms_ ]
Baterai = [ _${baterai.baterai}%_ ]
Charging = [ ${x}${baterai.cas === 'true' ? 'True' : 'False'}${x} ]
Total Hit = [ _${totalhit}_ ]
Note = [ _GhosBid di lengkapi dengan anti spam command , jadi kalo kalian spam command bakal ada cooldown 5 detik and limit kalian terbuang sia sia_ ]\n
 ———[ GhosKyy V2.0 ]———
`
}