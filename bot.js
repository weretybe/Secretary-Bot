const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`I am ready!`);
});

//Simple 1 to 1 responses
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

//Quote Handler
client.on('message', msg => {
  if (msg.content === '!tyquote') {
    msg.channel.sendText(tyquote()); }       
});

function tyquote() {
  var values = ["'You can't naked dat butt with pants on.' - Ty Oden, 2017","'Okay; first off Im not even in that chat right now but if we talking about best fashonista and you are talking some other fillies name besides Rarity you need to spit that trash out of your dick catcher you ignorant fuckass.' - Ty Oden, 2017","'Furries are the blackface of dogs' - Ty Oden, 2018","'This otter is stupid thicc and the Monteray Bay Aquarium should not have to apoligize for fat shaming their own otter.' - Ty Oden, 2018"],
      valueToUse = values[Math.floor(Math.random() * values.length)]
  return(valueToUse)
}
client.login(process.env.BOT_TOKEN);
