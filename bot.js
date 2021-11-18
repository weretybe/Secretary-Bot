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
    msg.channel.send('I am Secretary Bot 2.20. I have 13 new quotes, 18 new haiku, and I have edited my quote function to spit out certain quotes a little less often. **In December, we are going to reduce the # of quotes I have to keep up with.**'); }
  if (msg.content === '!commands') {
    msg.channel.send('Right now I know airhorn, bot, version, haiku, tarot1 for a single card draw, tarot3 to get omens of the future, and quotelist.');  }     
  if (msg.content === '!quotelist') {
    msg.channel.send('Here are the prefixes for the ![prefix]quote command. You can also get a random quote with !quote **ty**, **chris**, **scott**, **kristyn**, **eth**, **austin**, **thunder**, **devan**, **jake**, **alex**, **megan**, **beth**, **troy**, **brian**,**laurel**, and **npc**. '); } 

//Haiku Function 
 if (msg.content === '!haiku') {
    msg.channel.send(haikupicture()); msg.channel.send(haikuwords()); }       

//Tarot Functions
 if (msg.content === '!tarot1') {
    msg.channel.send('*The seer shuffles the deck. A smile. A wink. A deft hand motion, almost hidden.*'); msg.channel.send('**Behold, the cards speak**:'); msg.channel.send(haikupicture()); }
 if (msg.content === '!tarot3') {
    msg.channel.send('*The seer closes their eyes. Falling leaves settle. Cold winds blow. The world is laid bare.*'); msg.channel.send('**With these words and omens, I will reveal your fate**'); msg.channel.send(everything()); msg.channel.send(everything()); msg.channel.send(everything()); }
	
//Quotes        
if (msg.content === '!quote') {
    msg.channel.send(anyquote()); } 
  if (msg.content === '!tyquote') {
    msg.channel.send(tyquote()); }       
  if (msg.content === '!alexquote') {
    msg.channel.send(alexquote()); }       	
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
    msg.channel.send(troyquote()); }       	  
  if (msg.content === '!meganquote') {
    msg.channel.send(meganquote()); }
  if (msg.content === '!bethquote') {
    msg.channel.send(bethquote()); } 
  if (msg.content === '!laurelquote') {
    msg.channel.send(laurelquote()); } 
  if (msg.content === '!brianquote') {
    msg.channel.send(brianquote()); } 	
});


//Quote Funtions
function everything() {
  var values = [anyquote(),haikupicture(),haikuwords()],
      valueToUse = values[Math.floor(Math.random() * values.length)]
  return(valueToUse) }
function anyquote() {
  var values = [tyquote(),chrisjquote(),npcquote(),jakequote(),alexquote(),devanquote(),scottquote(),kristynquote(),ethquote(),austinquote(),tyquote(),chrisjquote(),npcquote(),jakequote(),alexquote(),devanquote(),scottquote(),kristynquote(),ethquote(),austinquote(),laurelquote(),bethquote(),troyquote(),meganquote(),brianquote()],
      valueToUse = values[Math.floor(Math.random() * values.length)]
  return(valueToUse) }
function tyquote() {
  var values = ["'I promise you. Someone out there ain't jokin' - they're choke'in.' - Ty Oden, 2021","'Can't handle the uwu, don't buy the horse goo.' - Ty Oden, 2021","'Does ... Does everyone have a bussy chakra?' - Ty Oden, 2021","'It doesn't surprise me that devs Discord full of cat boys is so conflict avoidant that they couldn't confidently choose one top.' - Ty Oden, 2021","'You, and by extension us, have been daddy-kink baited.' - Ty Oden, 2021","'Goths in fishnets aren't just good for an individual, they are good for the community.' - Ty Oden, 2021","'There's a witch boning curve' - Ty Oden, 2021","Alex:'How else do I get over hiking a haunted fucking hill and not realizing that till I got to the top?' Ty:'If you wanted to be less lewd, you should have climbed a haunted normal hill.'","'But it must be poly because he's definitely boning that frog he soulbonds with.' - Ty Oden, 2021","'Asking a faes gender is like asking the gender of an anglerfish's lure.' - Ty Oden, 2021","'**I won't eat any mashed potatoes unless I can get off by eye-fucking them first**' - Ty Oden, 2021","'Every mouthful is a whole 9/11' - Ty Oden, 2021","'See? I was an innovator. I knew exactly what I was doing when I incinerated those civilians.' - Ty Oden, 2021","'If covid had more tentacles I'm sure we would all feel differently about it.' - Ty Oden, 2021","'I find that there's no better seasoning than sin.' - Ty Oden, 2021","'Is it gauche to write your # on a MILF's kid's birthday card?' -Ty Oden 2021 ","'I would sign a petition to redo the entire evolution line Charpotle > Charmelín > Chorizard' - Ty Oden, 2021","'You can't naked dat butt with pants on.' - Ty Oden, 2017","'New! From the creators of paper>rock>scissors, it's cougar>20 something>student debt.' - Ty Oden, 2020","'If we talking about best fashonista and you are talking some other filly's name besides Rarity you need to spit that trash out of your dick catcher you ignorant fuckass.' - Ty Oden, 2017","'Furries are the blackface of dogs' - Ty Oden, 2018","'This otter is stupid thicc and the Monteray Bay Aquarium should not have to apoligize for fat shaming their own otter.' - Ty Oden, 2019","'That's how you get eaten by a big spider disguised as a sexy person' - Ty Oden, 2020","'Don't let any 5-year age gap or bounce house dominatrix get you down. You're a King.' - Ty Oden, 2020"],
      valueToUse = values[Math.floor(Math.random() * values.length)]
  return(valueToUse) }
function chrisjquote() {
    var values = ["'I think we need to purge the whales' - Chris Johnson, 2017","'You have the hawks of an eagle.' - Chris Johnson, 2014","*After vomiting 'Oh that drink.. Oof my bones' - Chris Johnson, aproximately 8 seconds into 2019."],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function npcquote() {
    var values = ["'If a level 1 blind man showed up at our door I would kick his ass up and down that street' - Thunder O'Brien 2017","'If we are ever on Queer Eye playing paintball I'm going to shoot the goddamn cameraman' - Thunder O'Brien 2018","'Sir, do you know what month it is?' - Officer Colin, 2017","'We have done some shit to bees, y'all' - Brian David Gilbert, 2018","'For the love of god, stay away from the Dip'N'Dots!' - JR, 2020","'Your legs are like your eyes on the ground' - Amanda, 2018","'Did I just get cucked by God?!' -Ryan, 2017","'Im not nice... I am a death eater. I love Azkaban. There will be no joy here.' - Kelly, 2018"],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function scottquote() {
    var values = ["'UWU, are you resisting arrest?' - ScUwUt Hown, 2021","'I can’t take a compliment. My brain just shorts out and I start sucking dick.' - Scott, 2021","'This woman is a tiddy billionaire' -Scott Horn, 2021","'Now pee in this cup, Seabiscuit' -Scott Horn, 2021","'[That] is literally my only utility in a world where Devan is a dragon' - Scott Horn on Dragon Fucking, 2018"],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function kristynquote() {
  var values = ["'I got puppyflustered' - K 2020","'No one finds wolf porn in a vacum, Ty' - Kristyn Oden, 2021","'Look at this basic, she's not even a monsterfucker' - Kristyn Oden, 2020","'Dev just likes it when I use my ass for evil.' - Kristyn Oden, 2020","'It's basically like ass-to-mouthing a puppet, but yelling while you do it so that your words come out of its mouth' - Kristyn Oden 2017","'I mean, fuck. If I could hoodwink a Santa into sugar-daddying me a DIAMOND MINE, I'd be jingling those bells all the way to the BANK!' - Kristyn Oden, noted Santa Fetishist, 2018","'Why can't an anthropomorphic hedgehog pull a Marilyn Manson in the privacy of in front of his own personal webcam?' - Kristyn Oden, 2017","'I could totally top a cougar.' - Kristyn Oden, 2020"],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function ethquote() {
    var values = ["'I was supposed to get spider powers. This sucks!' - John Etheridge, 2017","'The 40 hour work week was invented by housecats trying to get their humans out of the house for most of the day.' - John Etheridge, 2020"],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }  
function austinquote() {
    var values = ["'I don't wanna think about tit bones' - Austin, 2021","'They're like the nunchucks of boobs' - Austin, 2021","'If a crab manages to sneak up on me, I deserve to die' - Austin, 2021","'Tacos are the devil's work'-Austin McDaniel, Sandwich Purist, 2020","'Possum blood is high in alcohol content. Trust me; I'm a scientist' - Austin McDaniel, 2017","'I will mansplain the shit outta magic to you' - Austin McDaniel, 2018","'I also want a compilation of every pinned quote I've ever earned read out by whomever is presiding over my funeral.' - Austin McDaniel, 2019","'I don't think volcanoes... cum' - Austin McDaniel, 2019","'Only thing worse than a coke dealer, is a coke dealer who refuses to go green' - Austin McDaniel, 2020"],
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }  
function thunderquote() {
    var values = ["'If a level 1 blind man showed up at our door I would kick his ass up and down that street' - Thunder O'Brien 2017","'If we are ever on Queer Eye playing paintball I'm going to shoot the goddamn cameraman' - Thunder O'Brien 2018"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }  
function devanquote() {
    var values = ["'It was a daddy free zone until Alex showed up.' - Dev, 2021","'More cock, less cowards.' - Dev, 2021","'My catboy discord got into a fight over weither alien or predator would top today.' - Dev, 2021","'Oh, yeah, that Prince Aslan character that I didn’t know was an actual anime character. I though he was just, you know, a slut.' - Dev, 2021","'Im pretty sure mine are also the bad guys, but they’re hot, so I’m gonna hear them out.' - Dev, 2021","'Whoops! Fuck him. I’m team North Korea.' - Dev, 2021","'My god man Jennifer Lawrence’s ass isn’t even that big.' - Dev, 2021","'That's a classic hump and whump' - Dev 2021","'I know myself well enough to know I would never stop at one crime.' -Dev, 2021","'My favorite of triathlons. Creative driving, canoeing, and throwing hands.' - Dev, 2021","'I’ll waterboard a literal goat all damn day if they had nuclear launch codes.' - Dev 2021","'I am full of many nuts and none regrets.' - Devan Horn, 2021","'Ahegao is in your heart' - Devan Horn, 2020","'America is a continent you warm disaster' - Dev 2019","'So now I’m drinking my home coffee so I can drink my first work coffee.' - Devan Horn, 2020.","'Now hang on just a darn toot'in minute. How the floppy fuck can someone be anti-pony?' - Devan Horn, 2017","'[Jake], did you dick the gas outta my car?!?' - Devan Horn, 2020","'I think Saw could be like, way sexier' - Devan Horn, 2020","'In all honesty it was a really fair and rational genocide' - Devan Horn, 2018","'All neko genitalia are valid!' - Devan Horn, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function alexquote() {
    var values = ["'Devan. I promised myself I wouldn't pinn you so aggressively but, like, **c'mon**' - Alex, 2021","'God as my witness- if a gorilla ever grabs me I have no shame' - Alex, 2021","'God I love graveyards and fat asses' - Alex, 2021","'Inside of you are two wolves. One of them wants to cum, and one of them wants to cry' -Alex, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }	
function jakequote() {
    var values = ["'Long story short I couldn’t tell what was corn and what was cock. Crazy night.' - Jake, 2021","'If we mind break 'em we get a wish. That’s how witch bones work.' - Jake, 2021","'Cocaine is the past. Meth is the future' - Jake, 2021","'Are there wizards in the Taliban?' - Jake, 2021","'Roll intelligence to realize you’re the problem' - Jake 2019","'I believe in your testicles, Troy' - Jake, 2019","'Oooo baby. I just wanna lay ya down a platonically watch a movie together so bad.' - Jake, 2020","'Now the avatar must master the 4 elements; Gun, Bear, Man, and Woman' - Jake, 2020","'Is daddy kink an event at the Olympics?' - Jake, 2021","'Aslan deserves to be dommed by a pretty asshole damnit!' - Jake, 2021"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }     
function bethquote() {
    var values = ["'If you cum even a single bee inside a girl, you are never going to fuck her again' - Beth DeLeon, 2018","'When opportunity comes knocking, you let your brother get hit by a car in the parking lot.' - Beth 2021"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function troyquote() {
    var values = ["'Welp, I've seen Beastars and now I'm a furry' - Troy, 2020"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function laurelquote() {
    var values = ["'The rash will only last a week, but you'll remember this night forever' - Laurel, 2021"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function meganquote() {
    var values = ["'Boobies, and you can quote me on that' - Megan Vasquez, 2019"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }
function brianquote() {
    var values = ["'This is how H.P Lovecraft stories start, with people drinking from shoes' - Brian Neff, 2021"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }

//Haiku Function
function haikuwords() {
    var values = ["If I was an out // of work werewolf knot machine // I'd be pretty gay. - Ty","Apparently all // they needed to do was add // ponies and I’m SOLD. - Dev","I think as soon as // someone says the word 'daddy', // we get to protest. - Dev","Dont just give me a // single 'Daddy' in a heat // of the moment thing. - Alex","I have a soft spot // for this one thruple, ok. // I’m not getting soft! - Dev","I'm looking for some // fine clussy with a nice pair // of whoopie cushions. - Ty","With all those upside // down crosses, these nuns must be // extremely devout. - Ty","Stop putting my ass // up for grabs to get entrance // into the Fae Wilds! - Alex","I tend to ignore // red flags but surgical ass // to mouth is a lot. - Alex","I can think of 3 // worse things, but I’ve decided // to be merciful - Dev","And you should never // have mental breakdowns outside // of company time. - Alex","Thanks fam! Once I’m done // we can go ahead and sue // Walmart for justice - Panda","I want to get off // HaikuBot's wild ride as soon // as possible please. - Alex","Don’t go committing // pet theft while I’m on the run // for many murders. - Jake","I cannot! Once the // juevo has been given it // cannot be returned!! - Con Mon","you need to add the // candy falling out from the // shaking lol. - Con Mon","I'm excited. I // haven't had a big jug of // estud in a while. - Ty","She feeds me Capri // Suns. I’m going to have to // rearrange my schedule. -Dev","If I can't set a // car on fire in this module, // I'm not interested. - Brian","It does look like this // anime person had a // full-body transplant. -Ty","How on earth does the // werewolf not have a part to // play in the smut games? - Jake","Ya know with memes like // this it makes me think I might // be doing sex wrong. - Jake","They aren't even the // same god damn genre. And I'm // outie, 5000. - Ty","Full disclosure: I // did pick it cause I thought it // was about horses. - Dev","I want to spend bits // to make Mitch McConnell do // a cool fortnite dance. -Ty","Tell them I have big // dick magic energy. Get // some free time, maybe. -Alex","I'm not totally // sure I support Alien // Queen as a tomboy. -Ty","I need to see the // horny in their eyes before // I go making moves. -Jake","We are getting a // flashback to when the doctor // tittitized Silith. -Ty","Should be easy. They // don’t even need rings. They got // matching parasites -Jake","Neg an alien // for having blimps tied to her // chest, apperantly. -Ty","What grounds do they have // to specify how young he // does or does not look? -Ty","Most biology // probably wants to keep its // wets on the inside. -Ty","I didn’t think I // was gonna get teary eyed // from blues clues today -Jake","You know, only hot // people with Dumptruck asses // make Grammer mistakes -Alex","Hello gentlemen, // has anyone read Dragon // Emperor 13? -Dev","I can forgive that // one, I have no idea who // any of you are. -Brian","I saw Lance Archer // get jobbed and I've lost all faith // in the murderhawk -K","Taryn took me to // Whiskey Cake Kitchen & Bar. // It was delicious! -Eth","Wait- now we get some // alien knockers. This is // what we're all here for. -Ty","Fire the marketing // person who didn’t think to // mention ass to ass -Dev","Devan strips down to // help a new girl feel comfy // after chasing cats. -Alex","Hi im here to ask // an important question. Is // Venom a fursuit? -Chris J","Newfound fixation // Forgotten in a few days // Too many haiku -Thunder","Red Bull at midnight // That shit will fry your kidneys // Broken sleep schedule -Dev","Hmmm I'll always go // for a Reubens or a new // your pile of meat -Austin","Water come from sky, // rock come from ground, but no one // know where fire come from. -Ty","I'll fight anyone // anywhere at anytime // about anything... For Free -Brian 'Fightmaster' Neff","We also freed a // pig. Into the woods. But that // was a different night. -Dev","I know the cool kids // are on TikTok, but I still // can't get into it. -Ty","I am Kevin, God //of course, bringer of your memes. //Fear me because please. -Kevin","Man, every single // one of Houston’s gentleman’s // clubs have gone tits up -Dev","Oops. I made a mess // of the sprinkles. You really // rustled my jimmies -Jake","I should warn you that // the masseuse said this will pass // in a day or two. -Dev","It's summer most of // the year, and August is the // best part of summer. -Ty","I'm still waiting for // the end of this pandemic // for our big party. -Ty","I know the cool kids // are on TikTok, but I still // can't get into it. -Ty","Yeah. Thats gonna be // real choice as soon as Tiktok // goes the way of Vine. -Ty","Hurricanrana // off the top rope through glass is // pretty fuckin' wild. -Brian","Austin's right. We're all // safest if we all just stop // fucking real cute months. -Ty","How did I let my // moth-chan get locked in this room? // We have to save her. -Ty","That's why real prisons // don't have windows, I guess. Too // many boar escapes. -Ty","I feel the need to // balance this by having a // NYC morning. -Dev","just put them in there // unwrapped and let me tilt this // thing over my mouth -Brian","He's a mascot for // kids. His smile isn't even // unhinged, just happy. -Ty","I flew too close to // the sun. And then tried to put // rice through my face mask. -Dev","I am such a fool. // I should have been doing this // from the beginning. -Eth","Except Britt Baker, // we can all agree she is // for everyone -Brian","Honestly, tavern // where things immediately // go tits up sounds good. -Austin","What part of 'be sluts // and do whatever you want' // don't you understand? -Ty","I'm excited, I // don't think I've done this as an // adult l.o.l. -Scott","At first I thought it / was their tongue? Now, I don't want // to guess anymore. -Hill","This bot gets better // every time I plug something // stupid into it. -Ty","Buddy, if you want // To fuck Robocop I am // not gonna stop you  -Scott","Hello hi I am // Here and I have a question // For a straight person  -K","So clearly you can't // Judge a book by its cover // Or by its reviews.  -Ty","What do you think is // happening in your body // to cause you this pain? -Scott","Just tit and leg. It's // The Spore creature creator // All over again.  -Ty","Alright. So as long // As we do fewer water // Park crimes we’ll be safe.  - Dev","It was attached to // My shoulder. I will take no // Follow up questions.  - Dev","Throw that pooch inna // Baby bjorn and start stealing // Shit from fey kingdoms.  -Ty","I pushed your cousin // Into a thresher where they // Died... allegedly  -Jake","Oh yes? Wait no not // a question mark, I meant a // Jesus speech to text  -K","I can’t see the man’s // face but somehow I know this // is ugly bastard  -Jake","Thick thighs save lives and // hopefully one day they will // end my life as well.  -Etheridge","HaikuBot does not // belong in this place of sin // and debauchery  -Alex","I'll be buttered up // and called a biscuit before // I let this slight stand  -Hill","A physical and // metaphorical flight of // M C Esher stairs  -Ty","The United States // of America: The Land // of the Rising Gun","Too bad you can't just // dramatically ghost zone // people anymore. -Ty","20s.....I mostly // get 1s down here. The coke heads // here be balling soft. -Austin","I'm a pisces and // that's why I don't think I have // to go to the store  -K","Went on a walk with // the dogs and got adopted // by a nice grandma  -K","I appreciate // every single one of these // asthenic choices. -Dev","He's the gateway to // thinking about how deeply // fucked Pokemon is.","Your boy has been stabbed // all over now and looks like // the worst drug addict -Alex","Where does this leave us // in regards to link being // a monster fucker?  -Scott","Ah yes, the classic // american Isekai // movie, Wreck-It-Ralph"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }	
function haikupicture() {
    var values = ["Image:[Some majestic looking deer]","Image:[Two crabs, in black and white]","Image:[Two crabs in a car. Crab road trip!]","Image:[Two crabs on the beach]","Image:[A forest fire]","Image:[Light filtering through a green canopy of leaves]","Image:[A silk-swathed side street, choked with street vendors and patrons]","Image:[Your favorite Pokemon - Sweet!]","Image:[Ten-thousand Fireflies]","Image:[A green glass bottle, tipped over and spilling across the table]","Image:[A prickly cactus]","Image:[A mirror showing a handsome fellow - hey, that isn't you!]","Image:[A mirror showing a handsome person - hey that's you!]","Image:[A crab scuttling through the surf]","Image:[Lightning splitting a tree]","Image:[A bare tree on a field of snow]","Image:[A duck staring suggestively]","Image:[A bunch of birds that are sitting on a branch]","Image:[A leaf blowing on the wind]","Image:[A waterfall cascading down a cliff face]","Image:[A restfull mountain pond]","Image:[Raindrops on a bed of leaves]","Image:[A salad]","Image:[Three wolves howling at the moon, painted on the side of a van]","Image:[A field of flowers]","Image:[A field of wheat]","Image:[Two dinosaurs wrestling each other]","Image:[A hummingbird drinking from a bright orange flower]","Image:[Three moons howling at a wolf]","Image:[A turtle]","Image:[Two kittens sleeping in coffee mugs]","Image:[A big tree. Bigger. No, bigger than that.]","Image:[A fat tiger]","Image:[A lone cactus standing in the desert]","Image:[Purple Mountain's Majesty above the fruited plain]","Image:[Snakes on a Plain]","Image:[A forest fire]","Image:[A lava flow]","Image:[A mountain goat standing on the hoover dam]","Image:[A cool succulent]","Image:[A cracked mesa covered in smooth stones]","Image:[A vibrant coral reef]","Image:[An elk striding through a lush forest]","Image:[An inspiring image]","Image:[That cool picture of pluto where you can see the heart on it]","Image:[A sky full of stars]","Image:[Sakura blossoms]","Image:[One fish]","Image:[A man shaking hands with a tree]","Image:[A neat leaf I found]","Image:[Two rabbits sheltering under a bush]","Image:[A field of flowers]","Image:[Two roads diverging in a yellow wood]","Image:[The Moon. Beautiful]","Image:[The Sun. Even More Beautiful]","Image:[That grainy picture of the Loch Ness Monster]","Image:[Sunlight shining through a green canopy]","Image:[A giraffe silhouetted against the setting sun]","Image:[A bumblebee in a purple flower]","Image:[A piglett wearing rainboots]","Image:[A spiderweb with a message written in it]","Image:[Smooth river rocks stacked on top of each other]","Image:[Six dogs]"]
        valueToUse = values[Math.floor(Math.random() * values.length)]
    return(valueToUse) }	

client.login(process.env.BOT_TOKEN);
