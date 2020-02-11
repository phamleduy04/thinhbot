const Discord = require("discord.js");
const client = new Discord.Client();
var fs = require('fs')
var array = fs.readFileSync('thinh.txt','utf8').split("\n")
var {discord_token} = require('./config.json')

 
client.login(discord_token);

// Set the bot's presence (activity and status)
client.on("ready", () => {
    client.user.setPresence({
        game: { 
            name: 'With Thính :))',
            type: 'PLAYING'
        },
        status: 'Online'
    })
    console.log(`${client.user.username} is ready!`)
})
//thính thính =)))
client.on("message", (message) => {
    let content = ["xin thính", "thính", "thính ơi", "xin thinh","úm ba la xì bùa cho con cái thính","thinh","xin thinh"]
    if (content.includes(message.content.toLowerCase())) {
        if(message.author.id == '479503913565945856') 
            return message.reply(`Học không lo học suốt ngày thính cc `).then(m => m.delete(5000))
        const random = array[Math.floor(Math.random() * array.length)]
        message.channel.send(random)
    }   
})