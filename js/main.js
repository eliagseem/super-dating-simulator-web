var currentScreen;

window.onload = loadGame();

function loadGame()
{
	//load the first screen to get the game started
	loadScreen(getScreen(0));
}

function getScreen(screenToLoad)
{
	var gameName = document.getElementById("scriptTag").getAttribute("game");
	if(gameName == "fieri"){
		return fieriScreens[screenToLoad];
	}
	else if(gameName == "devito"){
		return devitoScreens[screenToLoad];
	}
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
		//console.log(button);
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

