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
  if (msg.content === '!version') {
    msg.channel.send('I am Secretary Bot 2.15. I have 11 new Haiku and 5 new Images. You all have been busy little bees! We need to talk about how many quotes there are - seriously there are so many quotes and I have to remember them all please help.'); }
  if (msg.content === '!commands') {
    msg.channel.send('Right now I know airhorn, bot, haiku, and quotelist.');  }     
  if (msg.content === '!quotelist') {
    msg.channel.send('Currently, here are the prefixes for the ![prefix]quote command and the number of quotes for each. Note: all commands for the bot have to be in lower case: **ty** (7 - cougar, pants, rarity, furries, otter, spider, king), **chris** (3 - whales, bones, hawks), **npc** (6), **scott** (5 - tiddy, macgyver, dragon, pee, cuck), **kristyn** (8 - ass, basic, puppet, king, hedgehog, santa, cougar, wolf), **eth** (2 - spider, housecats), **austin** (8 - slaves, tacos, boobs, possum, crab, magic, funeral, coke), **thunder** (2 - blind, paintball), **devan** (8 - ahegao, goat, pony, saw, genocide, neko, coffee, nuts), **jake** (5 - avatar, roll, cheese, believe, baby), **sully** (3 - gorilla,graveyards, wolves), **megan** (1), **beth** (1), **troy** (1), **laurel** (1). '); } 

//Haiku Function 
 if (msg.content === '!haiku') {
    msg.channel.send(haikupicture()); msg.channel.send(haikuwords()); }       
	
//Quotes        
  if (msg.content === '!tyquote') {
    msg.channel.send(tyquote()); }       
  if (msg.content === '!sullyquote') {
    msg.channel.send(sullyquote()); }       	
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
  if (msg.content === '!troyquote') {
    msg.channel.send("'Welp, I've seen Beastars and now I'm a furry' - Troy, 2020"); }       	  
  if (msg.content === '!meganquote') {
    msg.channel.send("'**Boobies**, and you can quote me on that' - Megan Vasquez, 2019"); }
  if (msg.content === '!bethquote') {
    msg.channel.send("'If you cum even a single **bee** inside a girl, you are never going to fuck her again' - Beth DeLeon, 2018"); } 
  if (msg.content === '!laurelquote') {
    msg.channel.send("'The rash will only last a week, but you'll remember this night forever' - Laurel, 2021"); }


  if (msg.content === '!tyquote pants') {
    msg.channel.send("'You can't naked dat butt with **pants** on.' - Ty Oden, 2017"); }  
  if (msg.content === '!tyquote rarity') {
    msg.channel.send("'If we talking about best fashonista and you are talking some other filly's name besides **Rarity** you need to spit that trash out of your dick catcher you ignorant fuckass.' - Ty Oden, 2017"); }  
  if (msg.content === '!tyquote furries') {
    msg.channel.send("'**Furries** are the blackface of dogs' - Ty Oden, 2018"); }  
  if (msg.content === '!tyquote otter') {
    msg.channel.send("'This **otter** is stupid thicc and the Monteray Bay Aquarium should not have to apoligize for fat shaming their own otter.' - Ty Oden, 2019"); }  
  if (msg.content === '!tyquote spider') {
    msg.channel.send("'That's how you get eaten by a big **spider** disguised as a sexy person' - Ty Oden, 2020"); }  
  if (msg.content === '!tyquote king') {
    msg.channel.send("'Don't let any 5-year age gap or bounce house dominatrix get you down. You're a **King**.' - Ty Oden, 2020"); }  	
 if (msg.content === '!tyquote cougar') {
    msg.channel.send("'New! From the creators of paper>rock>scissors, it's **cougar**>20 something>student debt.' - Ty Oden, 2020"); }
  
  
  if (msg.content === '!chrisquote whales') {
    msg.channel.send("'I think we need to purge the **whales**' - Chris Johnson, 2017"); } 
  if (msg.content === '!chrisquote hawks') {
    msg.channel.send("'You have the **hawks** of an eagle.' - Chris Johnson, 2014"); } 
  if (msg.content === '!chrisquote bones') {
    msg.channel.send("*After vomiting 'Oh that drink.. Oof my **bones**' - Chris Johnson, aproximately 8 seconds into 2019."); } 	


  if (msg.content === '!scottquote macgyver') {
    msg.channel.send("'I'm going to **MacGyver** my dick into my own ass!' -Scott Horn, 2017"); } 	
  if (msg.content === '!scottquote dragon') {
    msg.channel.send("'[That] is literally my only utility in a world where Devan is a **dragon**' - Scott Horn on Dragon Fucking, 2018"); } 	
  if (msg.content === '!scottquote cuck') {
    msg.channel.send("'Is it possible to **cuck** yourself?' - Scott Horn, 2018"); } 	
 if (msg.content === '!scottquote tiddy') {
    msg.channel.send("'This woman is a **tiddy** billionaire' -Scott Horn, 2021"); } 		
 if (msg.content === '!scottquote pee') {
    msg.channel.send("'Now **pee** in this cup, Seabiscuit' -Scott Horn, 2021"); } 
	

  if (msg.content === '!kristynquote puppet') {
    msg.channel.send("'It's basically like ass-to-mouthing a **puppet**, but yelling while you do it so that your words come out of its mouth' - Kristyn Oden 2017"); } 
  if (msg.content === '!kristynquote king') {
    msg.channel.send("''Financially assault me, **King**-Daddy' - Ty Oden' - Kristyn Oden, 2019"); } 
  if (msg.content === '!kristynquote ass') {
    msg.channel.send("'Dev just likes it when I use my **ass** for evil.' - Kristyn Oden, 2020"); } 
  if (msg.content === '!kristynquote santa') {
    msg.channel.send("'I mean, fuck. If I could hoodwink a **Santa** into sugar-daddying me a DIAMOND MINE, I'd be jingling those bells all the way to the BANK!' - Kristyn Oden, noted Santa Fetishist, 2018"); } 
  if (msg.content === '!kristynquote hedgehog') {
    msg.channel.send("'Why can't an anthropomorphic **hedgehog** pull a Marilyn Manson in the privacy of in front of his own personal webcam?' - Kristyn Oden, 2017"); } 
  if (msg.content === '!kristynquote cougar') {
    msg.channel.send("'I could totally top a **cougar**.' - Kristyn Oden, 2020"); }
  if (msg.content === '!kristynquote basic') {
    msg.channel.send("'Look at this **basic**, she's not even a monsterfucker' - Kristyn Oden, 2020"); }
  if (msg.content === '!kristynquote wolf') {
    msg.channel.send("'No one finds **wolf** porn in a vacum, Ty' - Kristyn Oden, 2021"); }  

  
  if (msg.content === '!austinquote possum') {
    msg.channel.send("'**Possum** blood is high in alcohol content. Trust me; I'm a scientist' - Austin McDaniel, 2017"); } 	
  if (msg.content === '!austinquote magic') {
    msg.channel.send("'I will mansplain the shit outta **magic** to you' - Austin McDaniel, 2018"); } 	
  if (msg.content === '!austinquote funeral') {
    msg.channel.send("'I also want a compilation of every pinned quote I've ever earned read out by whomever is presiding over my **funeral**.' - Austin McDaniel, 2019"); } 	
  if (msg.content === '!austinquote crab') {
    msg.channel.send("'If a **crab** manages to sneak up on me, I deserve to die' - Austin, 2021"); } 	
  if (msg.content === '!austinquote coke') {
    msg.channel.send("'Only thing worse than a coke dealer, is a **coke** dealer who refuses to go green' - Austin McDaniel, 2020"); } 	
  if (msg.content === '!austinquote tacos') {
    msg.channel.send("'**Tacos** are the devil's work'-Austin McDaniel, Sandwich Purist, 2020"); }
  if (msg.content === '!austinquote slaves') {
    msg.channel.send("'You're really giving me a hard time about owning **slaves**, but I'm trying to help!' - Austin McDaniel, 2020"); }
  if (msg.content === '!austinquote boobs') {
    msg.channel.send("'They're like the nunchucks of **boobs**' - Austin, 2021"); }  
	
	
  if (msg.content === '!thunderquote blind') {
    msg.channel.send("'If a level 1 **blind** man showed up at our door I would kick his ass up and down that street' - Thunder O'Brien 2017"); }  
  if (msg.content === '!thunderquote paintball') {
    msg.channel.send("'If we are ever on Queer Eye playing **paintball** I'm going to shoot the goddamn cameraman' - Thunder O'Brien 2018"); }  


  if (msg.content === '!devanquote pony') {
    msg.channel.send("'Now hang on just a darn toot'in minute. How the floppy fuck can someone be anti-**pony**?' - Devan Horn, 2017"); }  
  if (msg.content === '!devanquote nuts') {
    msg.channel.send("'I am full of many **nuts** and none regrets.' - Devan Horn, 2021"); }  
  if (msg.content === '!devanquote saw') {
    msg.channel.send("'I think **Saw** could be like, way sexier' - Devan Horn, 2020"); }  
  if (msg.content === '!devanquote genocide') {
    msg.channel.send("'In all honesty it was a really fair and rational **genocide**' - Devan Horn, 2018"); }  
  if (msg.content === '!devanquote neko') {
    msg.channel.send("'All **neko** genitalia are valid!' - Devan Horn, 2020"); }  
  if (msg.content === '!devanquote ahegao') {
    msg.channel.send("'**Ahegao** is in your heart' - Devan Horn, 2020"); } 
  if (msg.content === '!devanquote coffee') {
    msg.channel.send("'So now I’m drinking my home **coffee** so I can drink my first work **coffee**.' - Devan Horn, 2020."); }	
  if (msg.content === '!devanquote goat') {
    msg.channel.send("'I’ll waterboard a literal **goat** all damn day if they had nuclear launch codes.' - Dev 2021"); }	

  
  if (msg.content === '!jakequote cheese') {
    msg.channel.send("'If your vag is stuffed with **cheese** no man mayo is getting in' - Jake, 2020"); }  
  if (msg.content === '!jakequote believe') {
    msg.channel.send("'I **believe** in your testicles, Troy' - Jake, 2019"); }  
  if (msg.content === '!jakequote baby') {
    msg.channel.send("'Oooo **baby**. I just wanna lay ya down and platonically watch a movie together so bad.' - Jake, on Quarantine Loneliness, 2020"); } 
  if (msg.content === '!jakequote avatar') {
    msg.channel.send("'Now the **avatar** must master the 4 elements; Gun, Bear, Man, and Woman' - Jake, 2020"); }
  if (msg.content === '!jakequote roll') {
    msg.channel.send("'Roll intelligence to realize you’re the problem' - Jake, 2019"); } 

 
  if (msg.content === '!sullyquote gorilla') {
    msg.channel.send("'God as my witness- if a **gorilla** ever grabs me I have no shame' - Sully, 2021"); }   
  if (msg.content === '!sullyquote graveyards') {
    msg.channel.send("'God I love **graveyards** and fat asses' - Sully, 2021"); }   
  if (msg.content === '!sullyquote wolves') {
    msg.channel.send("'Inside of you are two **wolves**. One of them wants to cum, and one of them wants to cry' -Sully, 2020"); }   	


  if (msg.content === '!ethquote spider') {
    msg.channel.send("'I was supposed to get **spider** powers. This sucks!' - John Etheridge, 2017"); }  
  if (msg.content === '!ethquote housecats') {
    msg.channel.send("'The 40 hour work week was invented by **housecats** trying to get their humans out of the house for most of the day.' - John Etheridge, 2020"); }  
});


//Quote Funtions
function tyquote() {
  var values = ["'You can't naked dat butt with **pants** on.' - Ty Oden, 2017","'New! From the creators of paper>rock>scissors, it's **cougar**>20 something>student debt.' - Ty Oden, 2020","'If we talking about best fashonista and you are talking some other filly's name besides Rarity you need to spit that trash out of your dick catcher you ignorant fuckass.' - Ty Oden, 2017","'**Furries** are the blackface of dogs' - Ty Oden, 2018","'This **otter** is stupid thicc and the Monteray Bay Aquarium should not have to apoligize for fat shaming their own otter.' - Ty Oden, 2019","'That's how you get eaten by a big **spider** disguised as a sexy person' - Ty Oden, 2020","'Don't let any 5-year age gap or bounce house dominatrix get you down. You're a **King**.' - Ty Oden, 2020"],
      valueToUse = values[Math.floor(Math.random() * values.length)]
  return(valueToUse) }
function chrisjquote() {
    var values = ["'I think we need to purge the **whales**' - Chris Johnson, 2017","'You have the **hawks** of an eagle.' - Chris Johnson, 2014","*After vomiting 'Oh that drink.. Oof my **bones**' - Chris Johnson, aproximately 8 seconds into 2019."],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function npcquote() {
    var values = ["'Sir, do you know what month it is?' - Officer Colin, 2017","'We have done some shit to bees, y'all' - Brian David Gilbert, 2018","'For the love of god, stay away from the Dip'N'Dots!' - JR, 2020","'Your legs are like your eyes on the ground' - Amanda, 2018","'Did I just get cucked by God?!' -Ryan, 2017","'Im not nice... I am a death eater. I love Azkaban. There will be no joy here.' - Kelly, 2018"],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function scottquote() {
    var values = ["'This woman is a **tiddy** billionaire' -Scott Horn, 2021","'Now **pee** in this cup, Seabiscuit' -Scott Horn, 2021","'I'm going to **MacGyver** my dick into my own ass!' -Scott Horn, 2017","'[That] is literally my only utility in a world where Devan is a **dragon**' - Scott Horn on Dragon Fucking, 2018","'Is it possible to **cuck** yourself?' - Scoott Horn, 2018"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function kristynquote() {
  var values = ["'I got puppyflustered' - K 2020","'No one finds **wolf** porn in a vacum, Ty' - Kristyn Oden, 2021","'Look at this **basic**, she's not even a monsterfucker' - Kristyn Oden, 2020","'Dev just likes it when I use my **ass** for evil.' - Kristyn Oden, 2020","'It's basically like ass-to-mouthing a **puppet**, but yelling while you do it so that your words come out of its mouth' - Kristyn Oden 2017","''Financially assault me, **King**-Daddy' - Ty Oden' - Kristyn Oden, 2019","'I mean, fuck. If I could hoodwink a **Santa** into sugar-daddying me a DIAMOND MINE, I'd be jingling those bells all the way to the BANK!' - Kristyn Oden, noted Santa Fetishist, 2018","'Why can't an anthropomorphic **hedgehog** pull a Marilyn Manson in the privacy of in front of his own personal webcam?' - Kristyn Oden, 2017","'I could totally top a **cougar**.' - Kristyn Oden, 2020"],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function ethquote() {
    var values = ["'I was supposed to get **spider** powers. This sucks!' - John Etheridge, 2017","'The 40 hour work week was invented by **housecats** trying to get their humans out of the house for most of the day.' - John Etheridge, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }  
function austinquote() {
    var values = ["'They're like the nunchucks of **boobs**' - Austin, 2021","'If a **crab** manages to sneak up on me, I deserve to die' - Austin, 2021","'**Tacos** are the devil's work'-Austin McDaniel, Sandwich Purist, 2020","'You're really giving me a hard time about owning **slaves**, but I'm trying to help!' - Austin McDaniel, 2020","'**Possum** blood is high in alcohol content. Trust me; I'm a scientist' - Austin McDaniel, 2017","'I will mansplain the shit outta **magic** to you' - Austin McDaniel, 2018","'I also want a compilation of every pinned quote I've ever earned read out by whomever is presiding over my **funeral**.' - Austin McDaniel, 2019","'I don't think **volcanoes**... cum' - Austin McDaniel, 2019","'Only thing worse than a coke dealer, is a **coke** dealer who refuses to go green' - Austin McDaniel, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }  
function thunderquote() {
    var values = ["'If a level 1 **blind** man showed up at our door I would kick his ass up and down that street' - Thunder O'Brien 2017","'If we are ever on Queer Eye playing **paintball** I'm going to shoot the goddamn cameraman' - Thunder O'Brien 2018"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }  
function devanquote() {
    var values = ["'I’ll waterboard a literal goat all damn day if they had nuclear launch codes.' - Dev 2021","'I am full of many **nuts** and none regrets.' - Devan Horn, 2021","'**Ahegao** is in your heart' - Devan Horn, 2020","'America is a continent you warm disaster' - Dev 2019","'So now I’m drinking my home coffee so I can drink my first work coffee.' - Devan Horn, 2020.","'Now hang on just a darn toot'in minute. How the floppy fuck can someone be anti-**pony**?' - Devan Horn, 2017","'[Jake], did you dick the gas outta my car?!?' - Devan Horn, 2020","'I think **Saw** could be like, way sexier' - Devan Horn, 2020","'In all honesty it was a really fair and rational **genocide**' - Devan Horn, 2018","'All **neko** genitalia are valid!' - Devan Horn, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function sullyquote() {
    var values = ["'God as my witness- if a **gorilla** ever grabs me I have no shame' - Sully, 2021","'God I love **graveyards** and fat asses' - Sully, 2021","'Inside of you are two **wolves**. One of them wants to cum, and one of them wants to cry' -Sully, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }	
function jakequote() {
    var values = ["'Roll intelligence to realize you’re the problem' - Jake 2019","'If your vag is stuffed with **cheese** no man mayo is getting in' - Jake, 2020","'I **believe** in your testicles, Troy' - Jake, 2019","'Oooo **baby**. I just wanna lay ya down a platonically watch a movie together so bad.' - Jake, 2020","'Now the **avatar** must master the 4 elements; Gun, Bear, Man, and Woman' - Jake, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }     

//Haiku Function
function haikuwords() {
    var values = ["I can forgive that // one, I have no idea who // any of you are. -Brian","I saw Lance Archer // get jobbed and I've lost all faith // in the murderhawk -K","Taryn took me to // Whiskey Cake Kitchen & Bar. // It was delicious! -Eth","Wait- now we get some // alien knockers. This is // what we're all here for. -Ty","Fire the marketing // person who didn’t think to // mention ass to ass -Dev","Devan strips down to // help a new girl feel comfy // after chasing cats. -Sully","Hi im here to ask // an important question. Is // Venom a fursuit? -Chris J","Newfound fixation // Forgotten in a few days // Too many haiku -Thunder","Red Bull at midnight // That shit will fry your kidneys // Broken sleep schedule -Dev","Hmmm I'll always go // for a Reubens or a new // your pile of meat -Austin","Water come from sky, // rock come from ground, but no one // know where fire come from. -Ty","I'll fight anyone // anywhere at anytime // about anything... For Free -Brian 'Fightmaster' Neff","We also freed a // pig. Into the woods. But that // was a different night. -Dev","I know the cool kids // are on TikTok, but I still // can't get into it. -Ty","I am Kevin, God //of course, bringer of your memes. //Fear me because please. -Kevin","Man, every single // one of Houston’s gentleman’s // clubs have gone tits up -Dev","Oops. I made a mess // of the sprinkles. You really // rustled my jimmies -Jake","I should warn you that // the masseuse said this will pass // in a day or two. -Dev","It's summer most of // the year, and August is the // best part of summer. -Ty","I'm still waiting for // the end of this pandemic // for our big party. -Ty","I know the cool kids // are on TikTok, but I still // can't get into it. -Ty","Yeah. Thats gonna be // real choice as soon as Tiktok // goes the way of Vine. -Ty","Hurricanrana // off the top rope through glass is // pretty fuckin' wild. -Brian","Austin's right. We're all // safest if we all just stop // fucking real cute months. -Ty","How did I let my // moth-chan get locked in this room? // We have to save her. -Ty","That's why real prisons // don't have windows, I guess. Too // many boar escapes. -Ty","I feel the need to // balance this by having a // NYC morning. -Dev","just put them in there // unwrapped and let me tilt this // thing over my mouth -Brian","He's a mascot for // kids. His smile isn't even // unhinged, just happy. -Ty","I flew too close to // the sun. And then tried to put // rice through my face mask. -Dev","I am such a fool. // I should have been doing this // from the beginning. -Eth","Except Britt Baker, // we can all agree she is // for everyone -Brian","Honestly, tavern // where things immediately // go tits up sounds good. -Austin","What part of 'be sluts // and do whatever you want' // don't you understand? -Ty","I'm excited, I // don't think I've done this as an // adult l.o.l. -Scott","At first I thought it / was their tongue? Now, I don't want // to guess anymore. -Hill","This bot gets better // every time I plug something // stupid into it. -Ty","Buddy, if you want // To fuck Robocop I am // not gonna stop you  -Scott","Hello hi I am // Here and I have a question // For a straight person  -K","So clearly you can't // Judge a book by its cover // Or by its reviews.  -Ty","What do you think is // happening in your body // to cause you this pain? -Scott","Just tit and leg. It's // The Spore creature creator // All over again.  -Ty","Alright. So as long // As we do fewer water // Park crimes we’ll be safe.  - Dev","It was attached to // My shoulder. I will take no // Follow up questions.  - Dev","Throw that pooch inna // Baby bjorn and start stealing // Shit from fey kingdoms.  -Ty","I pushed your cousin // Into a thresher where they // Died... allegedly  -Jake","Oh yes? Wait no not // a question mark, I meant a // Jesus speech to text  -K","I can’t see the man’s // face but somehow I know this // is ugly bastard  -Jake","Thick thighs save lives and // hopefully one day they will // end my life as well.  -Etheridge","HaikuBot does not // belong in this place of sin // and debauchery  -Sully","I'll be buttered up // and called a biscuit before // I let this slight stand  -Hill","A physical and // metaphorical flight of // M C Esher stairs  -Ty","The United States // of America: The Land // of the Rising Gun","Too bad you can't just // dramatically ghost zone // people anymore. -Ty","20s.....I mostly // get 1s down here. The coke heads // here be balling soft. -Austin","I'm a pisces and // that's why I don't think I have // to go to the store  -K","Went on a walk with // the dogs and got adopted // by a nice grandma  -K","I appreciate // every single one of these // asthenic choices. -Dev","He's the gateway to // thinking about how deeply // fucked Pokemon is.","Your boy has been stabbed // all over now and looks like // the worst drug addict -Sully","Where does this leave us // in regards to link being // a monster fucker?  -Scott","Ah yes, the classic // american Isekai // movie, Wreck-It-Ralph"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }	
function haikupicture() {
    var values = ["Image:[A prickly cactus]","Image:[A mirror showing a handsome fellow - hey, that isn't you!]","Image:[A mirror showing a handsome person - hey that's you!]","Image:[A crab scuttling through the surf]","Image:[Lightning splitting a tree]","Image:[A bare tree on a field of snow]","Image:[A duck staring suggestively]","Image:[A bunch of birds that are sitting on a branch]","Image:[A leaf blowing on the wind]","Image:[A waterfall cascading down a cliff face]","Image:[A restfull mountain pond]","Image:[Raindrops on a bed of leaves]","Image:[A salad]","Image:[Three wolves howling at the moon, painted on the side of a van]","Image:[A field of flowers]","Image:[A field of wheat]","Image:[Two dinosaurs wrestling each other]","Image:[A hummingbird drinking from a bright orange flower]","Image:[Three moons howling at a wolf]","Image:[A turtle]","Image:[Two kittens sleeping in coffee mugs]","Image:[A big tree. Bigger. No, bigger than that.]","Image:[A fat tiger]","Image:[A lone cactus standing in the desert]","Image:[Purple Mountain's Majesty above the fruited plain]","Image:[Snakes on a Plain]","Image:[A forest fire]","Image:[A lava flow]","Image:[A mountain goat standing on the hoover dam]","Image:[A cool succulent]","Image:[A cracked mesa covered in smooth stones]","Image:[A vibrant coral reef]","Image:[An elk striding through a lush forest]","Image:[An inspiring image]","Image:[That cool picture of pluto where you can see the heart on it]","Image:[A sky full of stars]","Image:[Sakura blossoms]","Image:[One fish]","Image:[A man shaking hands with a tree]","Image:[A neat leaf I found]","Image:[Two rabbits sheltering under a bush]","Image:[A field of flowers]","Image:[Two roads diverging in a yellow wood]","Image:[The Moon. Beautiful]","Image:[The Sun. Even More Beautiful]","Image:[That grainy picture of the Loch Ness Monster]","Image:[Sunlight shining through a green canopy]","Image:[A giraffe silhouetted against the setting sun]","Image:[A bumblebee in a purple flower]","Image:[A piglett wearing rainboots]","Image:[A spiderweb with a message written in it]","Image:[Smooth river rocks stacked on top of each other]","Image:[Six dogs]"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }	

client.login(process.env.BOT_TOKEN);
