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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_28_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA1OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDcxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUxLFxuICAgICAgICA1NixcbiAgICAgICAgMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODksXG4gICAgICAgIDI0LFxuICAgICAgICAxNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NixcbiAgICAgICAgOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MixcbiAgICAgICAgNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzRWRNWmtYUGdiU253YlVmUVVkTU9LMnIzV1JuUkM5S3Y2RlNnbXg5SU84PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE0Nzc0NTQxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzZFQkM1MjgwQ0ZBMUQ3QkYwMzlCNDk0RjUyMjk3RkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyOTc2OTA0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpOdmg4Rk1JUWcyWERUalRZUkoyVkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTcyODQ0NDctMjJjNi00NzI3LWI3OWMtNWE3NGMwMzQzOGU4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNCxcbiAgICAgIDE4MyxcbiAgICAgIDk1LFxuICAgICAgODAsXG4gICAgICAxMDIsXG4gICAgICAyMDcsXG4gICAgICAyNDQsXG4gICAgICAxNjIsXG4gICAgICAxMjgsXG4gICAgICA2NCxcbiAgICAgIDE2OCxcbiAgICAgIDY0LFxuICAgICAgNzAsXG4gICAgICAyMzksXG4gICAgICA1OSxcbiAgICAgIDc1LFxuICAgICAgNTEsXG4gICAgICAxMixcbiAgICAgIDEyOSxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICA0LFxuICAgICAgMTQsXG4gICAgICAyMjQsXG4gICAgICAyMzcsXG4gICAgICAxNyxcbiAgICAgIDIzOSxcbiAgICAgIDEzMSxcbiAgICAgIDU2LFxuICAgICAgNDEsXG4gICAgICA4OCxcbiAgICAgIDE0MyxcbiAgICAgIDE1OCxcbiAgICAgIDE1MSxcbiAgICAgIDE4MSxcbiAgICAgIDMzLFxuICAgICAgMzgsXG4gICAgICAxNSxcbiAgICAgIDE2MSxcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFUzU3RlczRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTQ3NzQ1NDE3OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzIwNjk4MTE3MDM5MTc6NjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8JOGqeOArPCdhaZfX0NIVVpBX19fX8mx6qq4yZvMmvCfkK3wn5KX8J+qvVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BmRm5LMEdFSUhDckxvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiam0yQXdZakJSVE1ZVFRxUmY2WTdNTG0zdW5hVG4wa3p4cjBaOWx3ckxrMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNeFZDWmJqdDRiZ0RaUnQ1RHJXckVmMUgxekQ1NERWdTVhU2VtRWdQYzlRdndUS1RSS3NtR3V0WFJYdGtJeHFvUGYraEcwRml3aTh1UmJmNHVZb0lCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFRTVVam9ZbVRVd0hjU05XWEptSFJURFVWWmxmay8wMVpHbk5wN2dJMmE2OWhyb0U5ZlpkUm1IelpYbit0dkw4OUJLdnEyMjAzOWpENXFTdUMyQWVBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNDc3NDU0MTc6NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyOTc2OTAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVFjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEUTltVUFGazNNVzdjQ00yRmJMTTRqaThWMUh4QS91d29OV0FjOERyN2RVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDU0NTIyNzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjk3NjkwMzk2NlwifSIKfQ=="  // PUT your SESSION_ID 


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
