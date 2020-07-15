const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`I am ready!`);
});

client.on('message', msg => {
  //Simple 1 to 1 responses
  if (msg.content === '!airhorn') {
    msg.channel.send('BRRRR BURR BURR BURR BURRRRRR'); }
  if (msg.content === '!bot') {
    msg.channel.send('I am listening and taking notes'); }
  if (msg.content === '!commands') {
    msg.channel.send('Right now I know airhorn, bot, and maps, and quotelist.');  }     
  if (msg.content === '!quotelist') {
    msg.channel.send('Currently, here are the prefixes for the ![prefix]quote command and the number of quptes for each: ty(5), Chris(2), npc(5), scott(3), kristyn(5), eth(1), austin(5), thunder(2), devan(5), jake(3), megan(1), beth(1). '); }    
  if (msg.content === '!maps') {
    msg.channel.send('I have guided maps for !houston and !nola'); }  
  if (msg.content === '!houston') {
    msg.channel.send('https://drive.google.com/open?id=1Jo_qj2kzXdzza1N-iLxHO5IIWJM'); }   
  if (msg.content === '!nola') {
    msg.channel.send('https://drive.google.com/open?id=174k_24ILN6YkEWdVbTO4x6uGDW2HFRw8'); } 

  if (msg.content === '!boldtest1') {
    msg.channel.send(' this is normal *is this bold?* **italics??**'); } 
  if (msg.content === '!boldtest1 1') {
    msg.channel.send('Yes, this works'); } 	
  
    //Quotes        
  if (msg.content === '!tyquote') {
    msg.channel.send(tyquote()); }       
  if (msg.content === '!chrisquote') {
    msg.channel.send(chrisjquote()); }    
  if (msg.content === '!npcquote') {
    msg.channel.send(npcquote()); }
  if (msg.content === '!scottquote') {
    msg.channel.send(scottquote()); }
  if (msg.content === '!kristynquote') {
    msg.channel.send(kristynquote()); }
  if (msg.content === '!ethquote') {
    msg.channel.send(ethquote()); }   
  if (msg.content === '!austinquote') {
    msg.channel.send(austinquote()); }  
  if (msg.content === '!thunderquote') {
    msg.channel.send(thunderquote()); }  
  if (msg.content === '!devanquote') {
    msg.channel.send(devanquote()); }  
  if (msg.content === '!jakequote') {
      msg.channel.send(jakequote()); }    
  if (msg.content === '!meganquote') {
    msg.channel.send("'Boobies, and you can quote me on that' - Megan Vasquez, 2019"); }
   if (msg.content === '!bethquote') {
    msg.channel.send("'If you cum even a single bee inside a girl, you are never going to fuck her again' - Beth DeLeon, 2018"); } 
});

//Quote Funtions
function tyquote() {
  var values = ["'You can't naked dat butt with pants on.' - Ty Oden, 2017","'If we talking about best fashonista and you are talking some other fillies name besides Rarity you need to spit that trash out of your dick catcher you ignorant fuckass.' - Ty Oden, 2017","'Furries are the blackface of dogs' - Ty Oden, 2018","'This otter is stupid thicc and the Monteray Bay Aquarium should not have to apoligize for fat shaming their own otter.' - Ty Oden, 2019","'That's how you get eaten by a big spider disguised as a sexy person' - Ty Oden, 2020"],
      valueToUse = values[Math.floor(Math.random() * values.length)]
  return(valueToUse) }
  function chrisjquote() {
    var values = ["'I think we need to purge the whale[s]' - Chris Johnson, 2017", "'You have the hawks of an eagle.' - Chris Johnson, 2014","*After vomiting 'Oh that drink.. Oh my bones' - Chris Johnson, aproximately 8 seconds into 2019." ],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function npcquote() {
    var values = ["'Sir, do you know what month it is?' - Officer Colin, 2017","'For the love of god, stay away from the Dip'N'Dots!' - JR, 2020","'Your legs are like your eyes on the ground' - Amanda, 2018","'Did I just get cucked by God?!' -Ryan, 2017","'Im not nice... I am a death eater. I love Azkaban. There will be no joy here.' - Kelly, 2018"],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function scottquote() {
    var values = ["'I'm going to MacGyver my dick into my own ass!' -Scott Gilfoil, 2017","'this is literally my only utility in a world where Devan is a dragon' - Scott Gilfoil on Dragon Fucking, 2018","'Is it possible to cuck yourself?' - Scoott Gilfoot, 2018"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function kristynquote() {
  var values = ["'It's basically like ass-to-mouthing a puppet, but yelling while you do it so that your words come out of its mouth' - Kristyn Fusco 2017","''Financially assault me, King-Daddy' - Ty Oden' - Kristyn Fusco, 2019","'I mean, fuck. If I could hoodwink a Santa into sugar-daddying me a DIAMOND MINE, I'd be jingling those bells all the way to the BANK!' - Kristyn Fusco, noted Santa Fetishist, 2018","'Why can't an anthropomorphic hedgehog pull a Marilyn Manson in the privacy of in front of his own personal webcam?' - Kristyn Fusco, 2017","'I want bear meet/Say hello to bear/Meet and greet/Meet and... yeet' - Kristyn Fusco, 2018"],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function ethquote() {
    var values = ["'I was supposed to get spider powers. This sucks!' - John Etheridge, 2017"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }  
function austinquote() {
    var values = ["'Possum blood is high in alcohol content. Trust me; I'm a scientist' - Austin McDaniel, 2017","'I will mansplain the shit outta magic to you' - Austin McDaniel, 2018","'I also want a compilation of every pinned quote I've ever earned read out by whomever is presiding over my funeral.' - Austin McDaniel, 2019","'I don't think volcanoes... cum' - Austin McDaniel, 2019","'Only thing worse than a coke dealer, is a coke dealer who refuses to go green' - Austin McDaniel, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }  
function thunderquote() {
    var values = ["'If a level 1 blind man showed up at our door I would kick his ass up and down that street' - Thunder O'Brien 2017","'If we are ever on Queer Eye playing paintball I'm going to shoot the goddamn cameraman' - Thunder O'Brien 2018"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }  
function devanquote() {
    var values = ["'Now hang on just a darn toot'in minute. How the floppy fuck can someone be anti-pony?' - Devan Horn, 2017","'[Jake], did you dick the gas outta my car?!?' - Devan Horn, 2020","'There's one or two rapes, but they're tasteful' - Devan Horn, 2018","'In all honesty it was a really fair and rational genocide' - Devan Horn, 2018","'All neko genitalia are valid!' - Devan Horn, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function jakequote() {
    var values = ["'If your vag is stuffed with cheese no man mayo is getting in' - Jake, 2020","'I believe in your testicles, Troy' - Jake, 2019","'Oooo baby. I just wanna lay ya down a platonically watch a movie together so bad.' - Jake, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }    

client.login(process.env.BOT_TOKEN);
