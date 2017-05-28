//screens will be stored in an array of objects.
//each screen has an id, main text and a button panel

var dascreens = [
		{
			"screenID":0,
			"imageName":"images/image1.jpg",
			"musicName":"music/datemusic2.mp3",
			"mainText":"You won a date with Danny Devito!! Congratulations! You meet at a fancy restaurant, just the two of you. You sit down at your designated table and wait half an hour. He's late!",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Wait for him, he must be busy!",
                    "buttonGoTo":1
				},
				{
					"buttonPos":1,
					"buttonText":"Leave",
                    "buttonGoTo":2
				},
				{
					"buttonPos":2,
					"buttonText":"Attempt to claw through the concrete floor",
                    "buttonGoTo":0,
					"addOnText":"You attempt to claw through the concrete floor for some reason. Doesn't work and now your hands are bloody."
				},
                {
                    "buttonPos":3,
                    "buttonText":"Eat one of your limbs out of panicked depseration",
                    "buttonGoTo":0,
                    "addOnText":"You have a hard time picking which limb to eat but settle on your left hand. You now have no left hand."
                }
			]
		},
		{
			"screenID":1,
			"imageName":"images/generous1.jpg",
			"mainText":"Ah, at last! Danny Devito has arrived. He sits down in a rush and offers you a bowl of Honey Nut Cheerios.",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Refuse the bowl of cheerios, you'll eat later",
                    "buttonGoTo":3

				},
				{
					"buttonPos":1,
					"buttonText":"Accept the generous donation",
                    "buttonGoTo":4
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":2,
			"mainText":"You're not going to wait and leave the date. As you leave, Danny DeVito sits down. He eats by himself. He cries.",
			"imageName":"images/heartbroken1.jpg",
			"musicName":"music/gameover.mp3",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Restart",
                    "buttonGoTo":0
				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":0

				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":0
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":0
                }
			]
		},
		{
			"screenID":3,
			"mainText":"You refuse the bowl of cereal. Danny Devito is offended. He prepared this bowl just for you. He begins to cry uncontrollably in front of you, and asks you to leave.",
			"imageName":"images/heartbroken1.jpg",
			"musicName":"music/gameover.mp3",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Restart",
                    "buttonGoTo":0
				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":0

				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":0
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":0
                }
			]
		},
		{
			"screenID":4,
			"imageName":"images/pleased.jpg",
			"mainText":"He watches you eat and asks a question. 'So what made you want to apply to this contest?'",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Talk with your mouth full",
                    "buttonGoTo":5

				},
				{
					"buttonPos":1,
					"buttonText":"Finish your food before answering",
                    "buttonGoTo":6
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":5,
			"imageName":"images/pleased.jpg",
			"mainText":"You reply while eating: 'Affrrhhbllb mmbllbrbbrbrb...' Danny Devito nods. He turns to the waiter and orders a burger. He turns to you and asks what you want.",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"You'll have the same.",
                    "buttonGoTo":17

				},
				{
					"buttonPos":1,
					"buttonText":"Order a salad.",
                    "buttonGoTo":19
				},
				{
					"buttonPos":2,
					"buttonText":"Ask for a single piece of lettuce on a plate.",
                    "buttonGoTo":5,
                    "addOnText":"The waiter and Danny DeVito both laugh. But you really want a single piece of lettuce on a plate. Guess you'll have to order something else?"
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":6,
			"imageName":"images/annoyed1.jpg",
			"mainText":"You wait until finishing your food before answering. A few minutes of silence pass. 'I saw it on Facebook' you answer. Danny Devito is clearly agitated. 'Why didn't you answer when I asked you?'",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"You didn't want to be rude and talk while eating.",
                    "buttonGoTo":22
				},
				{
					"buttonPos":1,
					"buttonText":"You can do whatever you want, he's not the boss of you.",
                    "buttonGoTo":7
				},
				{
					"buttonPos":2,
					"buttonText":"Light a cigarette indoors",
                    "buttonGoTo":6,
                    "addOnText":"You light a cigarette indoors for no apparent reason. You are asked to put it out and you do."
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":7,
			"imageName":"images/angry1.jpg",
			"musicName":"music/tensemusic.mp3",
			"mainText":"You say you didn't feel like answering until after eating, and he isn't the boss of you. Danny DeVito's eyes light up, he is clearly angry. He tells you you're trying his patience",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Tell him you hated him as The Penguin in Batman Returns.",
                    "buttonGoTo":8

				},
				{
					"buttonPos":1,
					"buttonText":"Defuse the situation by saying sorry.",
                    "buttonGoTo":22
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":8,
			"imageName":"images/fight1.jpg",
			"mainText":"You tell Danny DeVito that you hated him as The Penguin in Batman Returns. He gets up and pushes the table to the side. Danny DeVito has challenged you to a street fight.",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"FIGHT DANNY DEVITO IN THE STREETS (there is no turning back now)",
                    "buttonGoTo":9

				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":100
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":9,
			"imageName":"images/fight1.jpg",
			"mainText":"You run out of the restaurant and into the streets. Danny DeVito is waiting for you. He says he has a surprise for you.",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Wait for his surprise",
                    "buttonGoTo":10

				},
				{
					"buttonPos":1,
					"buttonText":"Attack immediately",
                    "buttonGoTo":9,
                    "addOnText":"You try to attack but a mysterious force surrounds Danny DeVito and pushes you back."
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":10,
			"imageName":"images/robodevito.jpg",
			"musicName":"music/fightmusic2.mp3",
			"mainText":"DANNY DEVITO HAS MORPHED INTO ROBODEVITO!! He stands in a power stance and looks ready to attack!",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Block RoboDeVito's mighty strike.",
                    "buttonGoTo":11

				},
				{
					"buttonPos":1,
					"buttonText":"Throw a spare cheerio you hid into his power core.",
                    "buttonGoTo":23
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":11,
			"imageName":"images/robodevito.jpg",
			"mainText":"You raise your arms in an attempt to block RoboDeVito's strike. Your arms are destroyed in the process. He laughs, then asks: 'How's this for a first date?'",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Profess your love for him.",
                    "buttonGoTo":12
				},
				{
					"buttonPos":1,
					"buttonText":"Attempt to reattach your arms.",
                    "buttonGoTo":11,
					"addOnText":"You attempt to reattach your arms to no avail. RoboDeVito laughs at you again."
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":12,
			"imageName":"images/deceipt1.jpg",
			"musicName":"music/deceiptmusic.mp3",
			"mainText":"You confess that you are in love with Danny DeVito. His smile turns to a frown. 'Really? Oh no... all this time, I thought...'",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Open RoboDeVito's control panel and turn him off",
                    "buttonGoTo":13

				},
				{
					"buttonPos":1,
					"buttonText":"Give RoboDeVito an armless carress.",
                    "buttonGoTo":28
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":13,
			"imageName":"images/deceipt1.jpg",
			"mainText":"While RoboDeVito is distracted, you open his control panel to turn him off. There is only one button on the panel and it reads 'EMERGENCY ONLY.'",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Push the button",
                    "buttonGoTo":14

				},
				{
					"buttonPos":1,
					"buttonText":"Don't push the button",
                    "buttonGoTo":25
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":14,
			"imageName":"images/babydevito.jpg",
			"musicName":"music/fightmusic.mp3",
			"mainText":"You push the button. Instantly RoboDeVito ceases to move. The button pops out, revealing an even smaller and angrier Danny DeVito. He jumps at you.",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Swat him away",
                    "buttonGoTo":15

				},
				{
					"buttonPos":1,
					"buttonText":"Open your mouth",
                    "buttonGoTo":26
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":15,
			"imageName":"images/defeated1.jpg",
			"musicName":"music/defeat.mp3",
			"mainText":"You swat the smaller, angrier Danny DeVito away. He flies into the night sky at the force of your slap. The immobile carcass of RoboDeVito remains.",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Take RoboDeVito home as a souvenir",
                    "buttonGoTo":16

				},
				{
					"buttonPos":1,
					"buttonText":"Burn RoboDeVito in the streets to show your strength and superiority",
                    "buttonGoTo":27
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":16,
			"imageName":"images/uncertainending.jpg",
			"musicName":"music/gameover.mp3",
			"mainText":"You put RoboDeVito's motionless hull in your living room as a souvenir. All is calm once more. As you go to bed, you hear a droning sound. You look through your doorway and see RoboDeVito's animated corpse lunging at you. You scream, only to find yourself in your bed once more. RoboDeVito is still in the livingroom, motionless. It was only a dream...",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Restart",
                    "buttonGoTo":0

				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":100
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":17,
			"imageName":"images/tromboneinquiry.jpg",
			"mainText":"You order the same. Danny DeVito seems happy. There's an awkward silence. He pulls out a trombone and asks: 'Hey, can you play one of these?'",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Lie and say that you can.",
                    "buttonGoTo":24

				},
				{
					"buttonPos":1,
					"buttonText":"Admit that you can't play trombone.",
                    "buttonGoTo":18
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":18,
			"imageName":"images/tromboneend.jpg",
			"mainText":"You admit that you can't play. 'WHAT!?' exclaims Danny DeVito. He gets up and leaves the restaurant. The date has been cancelled.",
			"musicName":"music/gameover.mp3",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Restart",
                    "buttonGoTo":0

				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":100
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":19,
			"imageName":"images/lightshine.jpg",
			"mainText":"You order a salad. The waiter leaves. Danny seems happy! The date is going well. You see a bright white light shine down from the ceiling onto Danny DeVito.",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Look up to see where the light is coming from.",
                    "buttonGoTo":20

				},
				{
					"buttonPos":1,
					"buttonText":"Ignore it; probably a broken light.",
                    "buttonGoTo":21
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":20,
			"imageName":"images/escape.jpg",
			"mainText":"You look up and see that a UFO has broken through the ceiling and is attempting to kidnap Danny. You reach out to him in time and save him. The UFO promptly exits the room. Danny exhales. The waiter has brought the food! You both begin eating. After a few minutes Danny DeVito asks you where you found out about this contest.",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Wait until you finish your food before answering",
                    "buttonGoTo":6
				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":100
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":21,
			"imageName":"images/ufoending.jpg",
			"musicName":"music/gameover.mp3",
			"mainText":"You look down to your empty plate, ignoring the light. As you look back up you see Danny DeVito floating in the air. The source of the light is an alien UFO. They abduct Danny DeVito then promptly leave. Your date has been abducted by aliens.",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Restart",
                    "buttonGoTo":0
				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":100
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":22,
			"imageName":"images/tromboneend.jpg",
			"mainText":"Danny acknowledges. He gets up, turns to you in a very condescending manner then says 'Sorry, I only date people who talk with their mouths full. Not my type.' The date is over.",
			"musicName":"music/gameover.mp3",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Restart",
                    "buttonGoTo":0

				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":100
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100,
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":23,
			"imageName":"images/defeated1.jpg",
			"musicName":"music/goodending.mp3",
			"mainText":"You throw a spare cheerio you had hidden in your sleeve into RoboDeVito's power core. A bright light is emitted, as RoboDeVito explodes almost immediately. You have defeated RoboDeVito. A life of peace and prosperity awaits you.",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Restart",
                    "buttonGoTo":0

				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":100
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":24,
			"imageName":"images/deceased1.jpg",
			"mainText":"You lie and say that you can. He hands you the trombone. You attempt to play it. The resulting sound is so garish and disgusting that it kills Danny DeVito. The date is over.",
			"musicName":"music/gameover.mp3",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Restart",
                    "buttonGoTo":0

				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":100
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100,
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":25,
			"imageName":"images/deadending.jpg",
			"musicName":"music/gameover.mp3",
			"mainText":"You hesitate in pushing the button. RoboDeVito notices you opening his control panel and clubs you with one of his robot arms. You are dead. The date is over.",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Restart",
                    "buttonGoTo":0

				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":100
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":26,
			"imageName":"images/deadending.jpg",
			"musicName":"music/gameover.mp3",
			"mainText":"You open your mouth. The smaller, angrier Danny DeVito enters your body and destroys you from the inside. You are dead. The date is over.",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Restart",
                    "buttonGoTo":0

				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":100
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":27,
			"imageName":"images/goodend.jpg",
			"mainText":"You light RoboDeVito's motionless hull on fire. A crowd surrounds you and cheers your victory. You have become stronger and have gained one of RoboDeVito's powers. Your powerful future awaits you.",
			"musicName":"music/goodending.mp3",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Restart",
                    "buttonGoTo":0

				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":100
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
		{
			"screenID":28,
			"imageName":"images/bestend.jpg",
			"mainText":"You give RoboDeVito an armless embrace. He steps out of his robot suit and apologizes. All is forgiven. You both go back inside, have a great meal and a good time. The date was a success.",
			"musicName":"music/bestend.mp3",
			"buttonPanel":[
				{
					"buttonPos":0,
					"buttonText":"Restart",
                    "buttonGoTo":0

				},
				{
					"buttonPos":1,
					"buttonText":"",
                    "buttonGoTo":100
				},
				{
					"buttonPos":2,
					"buttonText":"",
                    "buttonGoTo":100
				},
                {
                    "buttonPos":3,
                    "buttonText":"",
                    "buttonGoTo":100
                }
			]
		},
];

var currentScreen;

window.onload = loadGame();

function loadGame()
{
	//load the first screen to get the game started
    loadScreen(getScreen(0));
}

function loadScreen(screenToLoad) {
	//this will load a screen, set the main text and all buttons after
	//a choice is made
	
	currentScreen = screenToLoad;
	appendText(currentScreen.mainText);
	setButtonPanel();
	
    if(currentScreen.hasOwnProperty("musicName"))
    {
	    var player=document.getElementById('musicpane');
	    var sourceMp3=document.getElementById('audiosrc');
	    
	    sourceMp3.src=currentScreen.musicName;
	    player.load();
	    player.play();
    }
		
	document.getElementById("imagebox").src = currentScreen.imageName;
}

function setButtonPanel() {
	//this will set every button in the panel, usually when
	//a choice is made
	
	for (var i = 0; i < currentScreen.buttonPanel.length; i++)
	{
		var button = currentScreen.buttonPanel[i];
		console.log(button);
		var buttonName = "button" + i;
		
		var htmlButton = document.getElementById(buttonName);
	    htmlButton.innerHTML = button.buttonText;
		htmlButton.onclick = (function(gotoinnerscope) {return function() { clickButton(gotoinnerscope) }})(button);
		htmlButton.Value = button.addOnText;
	}
}

function appendText(text) {
	//this will append the new text of each screen, creating a story
	var para = document.createElement("P");                      
	var t = document.createTextNode(text);     
	para.appendChild(t);                                          
	document.getElementById("textplaceholder").appendChild(para); 
	updateScroll();
}

function getScreen(id) {
	//pass an id which will load a screen stored in the debug object containing data
	return dascreens[id];
}

function clickButton(button) {
	//append the value text of the button somehow get the button value
    if(button.hasOwnProperty("addOnText"))
    	appendText(button.addOnText);
    else
    {
    	if(button.buttonGoTo == 0)
    		document.getElementById("textplaceholder").innerHTML = "";
    		
		loadScreen(getScreen(button.buttonGoTo));
    }
}

function updateScroll(){
    var element = document.getElementById("textpanel");
    element.scrollTop = element.scrollHeight;
}

