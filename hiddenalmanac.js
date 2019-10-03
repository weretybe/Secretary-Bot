const Discord = require('discord.js');
const client = new Discord.Client();

client.login("NjI3OTIzODkxODAwNzY4NTQy.XZVuAw.h_wb59-9UIAHSgqUrjz7K4nTcXw").then(() => {
    console.log("I am ready");
    var guild = client.guilds.get('594210768962977802');
    if(guild && guild.channels.get('594210769416224810')){
        guild.channels.get('594210769416224810').send("Good Morning").then(() => client.destroy());
    } else {
        console.log("nope");
        //if the bot doesn't have guild with the id guildid
        // or if the guild doesn't have the channel with id channelid
    }
    client.destroy();
});