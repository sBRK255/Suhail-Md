const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sirtheprogrammer:01319943591@cluster0.p2rjers.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ SIRTHEPROGRAMMER" 


global.devs = "255692267247" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255692267247";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255692267247,255xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_44_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjExLFxuICAgICAgICA4NixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICA4LFxuICAgICAgICA0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0LFxuICAgICAgICA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDksXG4gICAgICAgIDE1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwLFxuICAgICAgICAzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU0LFxuICAgICAgICA2NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIms4MVZhK0pqUEEweDF2aGNTeUlHRjN1K0VFc0tKaU9mb0ZvMGNycFlpL1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjkyMjY3MjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0QjM3RDYwREY1RDcxNjQ4QTJGNkYzODcxMDg5NEI3NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg3MDc0NjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2OTIyNjcyNDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZEMDdFQkIzNjc1RjE5RkM2ODkwMUE0QTY1NTEwQjU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODcwNzQ2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY5MjI2NzI0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOURFMDg3NDI3NDg5NUE1NEM2Qzc2REY1QkI4MjFGQzlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NzA3NDY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjkyMjY3MjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCODA5ODgyMDM2Q0Y3MTQ3MkRDRjQ2NTRDQTU5MTExNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg3MDc0NjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM2E2Q1h5UXFUSC1zUVI3Q2RGd3dtZ1wiLFxuICBcInBob25lSWRcIjogXCI5OWEyODc0My04NDYzLTQwMDYtYThiMi1iOGI5N2I0MjI4YWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMyxcbiAgICAgIDgxLFxuICAgICAgMjM0LFxuICAgICAgMjM1LFxuICAgICAgOTUsXG4gICAgICA1NCxcbiAgICAgIDc4LFxuICAgICAgMjI3LFxuICAgICAgMTIzLFxuICAgICAgNDMsXG4gICAgICAyNDMsXG4gICAgICAyMDgsXG4gICAgICAyMzMsXG4gICAgICAyMzgsXG4gICAgICAxNTcsXG4gICAgICAxMjEsXG4gICAgICA4MSxcbiAgICAgIDEyNCxcbiAgICAgIDE3MixcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDEzNyxcbiAgICAgIDU5LFxuICAgICAgMjA0LFxuICAgICAgMTMzLFxuICAgICAgMTMxLFxuICAgICAgNTMsXG4gICAgICAyMDksXG4gICAgICAyMzAsXG4gICAgICAyMDMsXG4gICAgICAxMDAsXG4gICAgICAyMDgsXG4gICAgICA3MyxcbiAgICAgIDE5NixcbiAgICAgIDM4LFxuICAgICAgNjAsXG4gICAgICAyNDQsXG4gICAgICAxNzEsXG4gICAgICA2NixcbiAgICAgIDEzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGWkdSTEFNQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjkyMjY3MjQ3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNjYxMjg5MjA1ODI2OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE95MzVRR0VJUEt4Yk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWN28wUGF2K1V1L3hEdTkxelR1RDJwU2Nadjk1c3MyS3NucGdqU3UzeWswPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNUaUpaQkUxZ2RwUkJZb3VMTTl5a1ZRT1I4aG9UTnNmbnZuZHo5VnhLUVF4bm5ISjgzeWQwajBpQitCRWV2dVpKRnBxTysyZ3NNVWkyd3FDcGJLekRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlYwdUpQSTR2Yjl5dTR1UW50V3F3MjRsNWN1ZnF5YXlDazFlSjhLQ285Vk41eFM5QXM3UDYyWXRLbGlsS2VuMjVSTXFJU0ZRYmVUYnpURkpKdGgyS2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY5MjI2NzI0Nzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NzA3NDYzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDBsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIMGwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvRnJVV3ZXRnduSFhzSEV1S0JZdkRrV2tDak41Vk9mMk9SbHFsSUgwMkFzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NTQxMTg3NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODcwNzQ2NzA0NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ SIRTHEPROGRAMMER 』```", //*『sᴜʙsᴄʀɪʙᴇ • sirtheprogrammer ᴛᴇᴄʜ』*\n youtube.com/@sirtheprogrammertech"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SIRTHEPROGRAMMER",
  ownername:process.env.OWNER_NAME|| "PROHACKER ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-wtlA8Q8y00pw0SFuX8iVT3BlbkFJUTlbzlarIdQV3QcgnzDM",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-03689e57-ac65-482e-bd19-b3437b90fb36",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "sirtheprogrammerbot",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "345f70f1c3f2ecef4d718d33c14026f9";
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
