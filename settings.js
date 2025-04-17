const fs = require('fs');
const chalk = require('chalk');

// Settings Owner
global.owner = ['6285123965378'] //ur owner number
global.ownernomer = "6285123965378" //ur owner number2
global.ownerNumber = ["6285123965378@s.whatsapp.net"]

// Settings Bot
global.version = "𝟭.𝟬.𝟬"
global.namaOwner = "𝗥𝗮𝗳𝗹𝗶𝗲 𝗠𝗼𝗱𝗱𝗲𝗿"
global.packname = '𝗥𝗮𝗳𝗹𝗶𝗲-𝗕𝗼𝘁𝘇'
global.botname = '𝗥𝗮𝗳𝗹𝗶𝗲-𝗕𝗼𝘁𝘇'
global.botname2 = '𝗥𝗮𝗳𝗹𝗶𝗲-𝗕𝗼𝘁𝘇'
global.key = 'Gaad Key Nya Tolol'

// Server v1
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https:/raflie.my.id" //domain lu
global.apikey = "ptla_kdOfHycEtWXLtTIo39uiQPQgFpuVrdycJgRENASIJ6q" //ptla
global.capikey = "ptlc_TFA0ae9PdMtEDyFWU4wV2uXOE1ndMhppmwX" //ptlc

// Server v2
global.eggV2 = "15" // Egg IDv2
global.nestidV2 = "5" // nest IDv2
global.locV2 = "1" // Location IDv2
global.domainV2 = "https:/raflie.my.id" //domain lu
global.apikeyV2 = "ptla_kdOfHycEtWXLtTIo39uiQPQgFpuVrdycJgRENASIJ6q" //ptla
global.capikeyV2 = "ptlc_TFA0ae9PdMtEDyFWU4wV2uXOE1ndMhppmwX" //ptlc

// Server v3
global.eggV3 = "15" // Egg IDv3
global.nestidV3 = "5" // nest IDv3
global.locV3 = "1" // Location IDv3
global.domainV3 = "https:/raflie.my.id" //domain lu
global.apikeyV3 = "ptla_kdOfHycEtWXLtTIo39uiQPQgFpuVrdycJgRENASIJ6q" //ptla
global.capikeyV3 = "ptlc_TFA0ae9PdMtEDyFWU4wV2uXOE1ndMhppmwX" //ptlc

// All pay
global.dana = "085754661077"
global.gopay = false 
global.ovo = false
global.qris = "_"

//Image Set
global.image = {
thumb: "https://files.catbox.moe/npytz0.jpg", 
reply: "https://files.catbox.moe/npytz0.jpg"
}

// Reply Mess
global.mess = {
	owner: "Fitur ini hanya untuk owner bot!",
	admin: "Fitur ini hanya untuk admin grup!",
	botAdmin: "Fitur ini hanya untuk ketika bot menjadi admin!",
	group: "Fitur ini hanya untuk dalam grup!",
	private: "Fitur ini hanya untuk dalam private chat!",
	prem: "Fitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})