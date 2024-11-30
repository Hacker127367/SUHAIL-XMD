const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_16_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDM1LFxuICAgICAgICA2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDk1LFxuICAgICAgICA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDMzLFxuICAgICAgICA5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDkzLFxuICAgICAgICA1LFxuICAgICAgICAzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOCxcbiAgICAgICAgMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM2LFxuICAgICAgICA2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWncvbmhmQ0poTk1CcWl3NzJzOERDNlMvTk44SGpZamtlR2lHUEowUlN4UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNDc3NDU0MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhDRDZBRjIzRjMxM0RFRDg5QzZFOEJGMzk2MUQxNzAwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjk3NjE2M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE0Nzc0NTQxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEFDNEY1NTlBOEI5QTZGMkJENDcyNTE0MzEyRjU5ODZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyOTc2MTY0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVhMGg3Q2VzUXVDUVRNSk5YanlrYUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzY0ZGRiNjgtYTYwYS00ZjdlLWIwZDktMWZjOTk4MjgwZTc1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMjQyLFxuICAgICAgMyxcbiAgICAgIDYzLFxuICAgICAgNTMsXG4gICAgICAxNDgsXG4gICAgICAxMzgsXG4gICAgICA4OSxcbiAgICAgIDkwLFxuICAgICAgMTEyLFxuICAgICAgNjAsXG4gICAgICAxMjEsXG4gICAgICAyMDYsXG4gICAgICA5MixcbiAgICAgIDEzMCxcbiAgICAgIDIwMCxcbiAgICAgIDkwLFxuICAgICAgMTQ3LFxuICAgICAgMTUxLFxuICAgICAgMjMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDE0NyxcbiAgICAgIDU5LFxuICAgICAgNDQsXG4gICAgICA3OSxcbiAgICAgIDExLFxuICAgICAgMTQ5LFxuICAgICAgMTgyLFxuICAgICAgMTIyLFxuICAgICAgMTcwLFxuICAgICAgMjQ5LFxuICAgICAgMTk0LFxuICAgICAgNjUsXG4gICAgICAxMDcsXG4gICAgICA2MyxcbiAgICAgIDgsXG4gICAgICAxNzAsXG4gICAgICAxOTMsXG4gICAgICAxNDEsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0VTRkY5M1NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE0Nzc0NTQxNzo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcyMDY5ODExNzAzOTE3OjYzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCThqnjgKzwnYWmX19DSFVaQV9fX1/JseqquMmbzJrwn5Ct8J+Sl/Cfqr1cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYkZuSzBHRUp5OHJMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImptMkF3WWpCUlRNWVRUcVJmNlk3TUxtM3VuYVRuMGt6eHIwWjlsd3JMazA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRXhTWmNwbW5seHBBeU5OT0hjeUNWN01HZ3ZZMHdtZERvK1psTnMxWGp2T3ZkZmdSYTNWUGxHT0liRHpWZ0lkaWhiU3p5NG80N0crMmdiY2lPcEMzQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaUVEWGU0cXYvNzFrTFR0UkVCWDNyeHQzNjlrWFFUbjB5NldremNaYWsrQVBicHlCTUQwNlExeGlzbU9TVHMzaUlGVExYR3dMazZxU2Fka09lWlpUQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTQ3NzQ1NDE3OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjk3NjE1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlRYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVFhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT01KWlRmYXBlaTAwM2FHUVowaUpjKzlSRHNydFlMVmpuVGFMeUNLMjhwQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzA1NDUyMjc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI5NzYxNjA3NTJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
