const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!airhorn') {
    msg.channel.send('BRRRR BURR BURR BURR BURRRRRR'); }
  if (msg.content === '!bot') {
    msg.channel.send('I am listening and taking notes'); }
  if (msg.content === '!commands') {
    msg.channel.send('Right now I know airhorn, bot, and maps. I am trying to remember Quotes and News');  }     
  if (msg.content === '!maps') {
    msg.channel.send('I have guided maps for !houston and !nola'); }  
  if (msg.content === '!houston') {
    msg.channel.send('https://drive.google.com/open?id=1Jo_qj2kzXdzza1N-iLxHO5IIWJM'); }   
  if (msg.content === '!nola') {
    msg.channel.send('https://drive.google.com/open?id=174k_24ILN6YkEWdVbTO4x6uGDW2HFRw8'); }       
});

client.login('NjI3OTIzODkxODAwNzY4NTQy.XZDuRw.4iXXjTEurxhBqkb99u1Mfc2Td18');