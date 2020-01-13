const Discord = require("discord.js");
const client = new Discord.Client();
var fs = require('fs')
var array = fs.readFileSync('test.txt','utf8').split("\n")

 
client.login("TOKEN");

// Set the bot's presence (activity and status)
client.on("ready", () => {
    client.user.setPresence({
        game: { 
            name: 'With Thính :))',
            type: 'PLAYING'
        },
        status: 'Online'
    })
    console.log("Ready!")
})
//thính thính =)))
client.on("message", (message) => {
    let content = ["xin thính", "thính", "thính ơi"]
    if (content.includes(message.content.toLowerCase())) {
        const random = array[Math.floor(Math.random() * array.length)]
        message.channel.send(random)
        
    }
})
