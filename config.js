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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_07_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI4LFxuICAgICAgICA1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDc4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NixcbiAgICAgICAgODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICA0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc1LFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDkyLFxuICAgICAgICA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMixcbiAgICAgICAgOTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibnJsWDlJTmtFejBGYVRIZHI4TnVLYmtZWDBuNWRJZ2FUNXFZK2V3OXVudz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQjlWYUxWWnJUd2lsNnRWVnlZN0l4Z1wiLFxuICBcInBob25lSWRcIjogXCJiOTFkYzc4NS04OTFiLTQ1ODgtODc3OS00ZmIyYmNkZjg4NGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMjU1LFxuICAgICAgMjQ2LFxuICAgICAgNzMsXG4gICAgICAxMDQsXG4gICAgICA2MCxcbiAgICAgIDQxLFxuICAgICAgODAsXG4gICAgICAxMjIsXG4gICAgICAxMTIsXG4gICAgICA0NSxcbiAgICAgIDQzLFxuICAgICAgMzksXG4gICAgICAyMTAsXG4gICAgICAxMzcsXG4gICAgICAyMzAsXG4gICAgICAyMDQsXG4gICAgICAxODMsXG4gICAgICAxNTgsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICAzOCxcbiAgICAgIDcyLFxuICAgICAgMjIzLFxuICAgICAgMTc3LFxuICAgICAgMTMxLFxuICAgICAgODIsXG4gICAgICA2MixcbiAgICAgIDIwNCxcbiAgICAgIDI0MyxcbiAgICAgIDEyNyxcbiAgICAgIDI1NSxcbiAgICAgIDcxLFxuICAgICAgMTAsXG4gICAgICAxMTYsXG4gICAgICAxNTEsXG4gICAgICAxMDksXG4gICAgICA4OCxcbiAgICAgIDEzMCxcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOUlBWQ0dERVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjkyMjY3MjQ3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNjYxMjg5MjA1ODI2OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzdKNmhFUTllTHRzZ1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyQnZDZW41UHZKN0xBOVl5b3RoUjZ2WGRJU01CbnNjdmlCUTZnQWJnWmpNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVuVUhrZ3ZLdWxSNk5kVzZORFl4RHN1RTRuMWtXZVVUZDZHZTd6Z0IxSko3OXpVOXN0ZG9DbzVGejVQWlpSczZqSFQxRm5PR0duQ1o4ZGZjcHNOa0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVuL1pGUlRGb2s1OG84c0p1V1huOTVkVkExRmsxWTZvbHhvUzM1UjFBcDlaaEIrUFFiNkpEcms2SzMwNkxGZDRRMG1XVVVjMlNGQ3pFd0NadGtBRmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY5MjI2NzI0Nzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcyNjg4NTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOaDVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5oNS5qc29uIjogIntcImtleURhdGFcIjpcIjIwQWUxY3c1TnlLT3dKNExJRUU1VW92UjZSVVNSV3F5TlVJOGp4L1AvVnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzczOTc2NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcxMzk0NDg3NDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ SIRTHEPROGRAMMER 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SIRTHEPROGRAMMER",
  ownername:process.env.OWNER_NAME|| "PROHACKER ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-wtlA8Q8y00pw0SFuX8iVT3BlbkFJUTlbzlarIdQV3QcgnzDM",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2211991d-c969-4bf3-9030-23c497f807ac",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "kibikibot255",
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
