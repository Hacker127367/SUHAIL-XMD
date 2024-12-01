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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_23_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgODksXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwLFxuICAgICAgICA3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTksXG4gICAgICAgIDkxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA5OSxcbiAgICAgICAgNixcbiAgICAgICAgMTMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDMsXG4gICAgICAgIDE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBHWlh1YWQwRGgvSnBYUG13a1hPdXBqMDVpWWhSUUUySDBvN29NMlBsVWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTQ3NzQ1NDE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRkQ0MTQ3QjZDMUQzQTZGMUI1OUU5RTQwOUI4MDM0MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMwMjcwMDZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaU9fclpNX21UdUdiZldDbXhSa3hXd1wiLFxuICBcInBob25lSWRcIjogXCI3OWRmNzY2OC1jMmYzLTRiOTktYmQ2NC05ZTBiYmU0OTUwYWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgMzMsXG4gICAgICA2MCxcbiAgICAgIDc0LFxuICAgICAgMTQ2LFxuICAgICAgMTk4LFxuICAgICAgMjUsXG4gICAgICAxNTQsXG4gICAgICAxOTksXG4gICAgICAxNDcsXG4gICAgICAyNCxcbiAgICAgIDI2LFxuICAgICAgMjM4LFxuICAgICAgODAsXG4gICAgICA1OSxcbiAgICAgIDYsXG4gICAgICAxLFxuICAgICAgNDQsXG4gICAgICA0MSxcbiAgICAgIDE4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyMDYsXG4gICAgICAxMTAsXG4gICAgICA0OCxcbiAgICAgIDEyMixcbiAgICAgIDU5LFxuICAgICAgMjEzLFxuICAgICAgODUsXG4gICAgICAyNDIsXG4gICAgICAyMDAsXG4gICAgICA3LFxuICAgICAgMjM0LFxuICAgICAgMTY4LFxuICAgICAgMCxcbiAgICAgIDcsXG4gICAgICAyNDUsXG4gICAgICAyMzAsXG4gICAgICAxMjAsXG4gICAgICAyMDgsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjE0R042UjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE0Nzc0NTQxNzo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcyMDY5ODExNzAzOTE3OjY3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCThqnjgKzwnYWmX19DSFVaQV9fX1/JseqquMmbzJrwn5Ct8J+Sl/Cfqr1cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQckZuSzBHRUxiSnI3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImptMkF3WWpCUlRNWVRUcVJmNlk3TUxtM3VuYVRuMGt6eHIwWjlsd3JMazA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiLzZHVGRCK1V1RHpMUG5VeUd0eWNqOGlEczJlWlFvWGczY09DRnQ4VzhNb09rT3ZGZTNDTWJvcEpQTGQ0YWJlRFZnVHFxUis0dG5lUkl2eURZR2svQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTkYzK1RBdjVnMEM4OW4xTmRVaGtkVklxTVRXRUtCVmw0OUREM2o5Wk5UVkwxOFl3MjZMb0lyOGJvekxOK2p0SGVVRE5iWHNDdkl1bldMNVJhWFNsZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTQ3NzQ1NDE3OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzAyNzAwMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhFUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEVSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVXUwRDY2YklvUlhxVUVHNmRVcjZmWStCeXkveVd5RUVFQmpreXRIUU9haz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzA1NDUyMjgyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMwMjcwMDQ1NjdcIn0iCn0="  // PUT your SESSION_ID 


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
