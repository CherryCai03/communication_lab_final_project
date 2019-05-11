var words = ["Hi stranger!!", "I've been thinking about you a lot lately!!", "I see you trying to do so many things at oncee", "Worrying about a decision you madee", "Or worried that you said the wrong thing to someonee", "I know it's so hard to make things sometimess", "It just takes so much mental energyy", "Don’t worryy", "I am here trying to bring you some calm.."];
var currWord = "";
var currText = "";
var wordIndex = 0;
var letterIndex = 0;
var direction = 0;
var playOnce;
var yi = document.getElementById('yi');
var candle = document.getElementById('candle');
var er = document.getElementById('er');
var san = document.getElementById("san");
var apple = document.getElementById("apple");
var si = document.getElementById("si");
var plastic = document.getElementById("plastic");
var wu = document.getElementById("wu");
var liu = document.getElementById("liu");
var strawberryAudio1 = document.getElementById("strawberry1");
var strawberryAudio2 = document.getElementById("strawberry2");
var strawberryAudio3 = document.getElementById("strawberry3");
var jelly = document.getElementById("jelly");
var qi = document.getElementById("qi");
var oil = document.getElementById("oil");
var microwave = document.getElementById("microwave");
var chicken = document.getElementById("chicken");
var beer = document.getElementById("beer");
var hiccup = document.getElementById("hiccup");
var shiyi = document.getElementById("shiYi");
var teeth = document.getElementById("teeth");
var shiEr = document.getElementById("shiEr");
var shiSan = document.getElementById("shiSan");
var shiSi = document.getElementById("shiSi");

var once = true;

function scene0(){
	if (once == true) {
		setTimeout(animateText, 1000);
		document.getElementById("scene").style.display = "none";
		document.getElementById("scene0").style.display = "block";
		once = false;
	}
	
}

playOnce = true;

function animateText(){
	currWord = words[wordIndex];
	if (direction == 0) {
		currText += currWord[letterIndex];
		if ( letterIndex < currWord.length - 1) {
			letterIndex++;
			setTimeout(animateText,100);
		} else if (wordIndex < words.length - 1) {
			letterIndex = 0;
			currText = "";
			wordIndex++;
			setTimeout(animateText,100);
		} else {
			currText = "";
		}
//remove letter
	}
	document.getElementById('typedText').innerHTML = currText;

	if (playOnce == true) {
		yi.play();
		playOnce = false;
	}
}

function toScene1(){
	document.getElementById("scene0").style.display = "none";
	document.getElementById("scene1").style.display = "block";
	candle.play();
	candle.onended = function() {
		er.play();
	}
}

var applePlayOnce = true;

function mouseMoved() {
	var x = event.clientX;
	var y = event.clientY;

	console.log(x);
	console.log(y);

	var leftValue = x - 6700;
	var topValue = y - 4500;

	document.getElementById("imgspotLight1").style.left = leftValue + "px";
	document.getElementById("imgspotLight1").style.top = topValue + "px";

	document.getElementById("imgspotLight2").style.left = leftValue + "px";
	document.getElementById("imgspotLight2").style.top = topValue + "px";


	if (x > 600  && x < 1200  && y < 600 && y > 150 && applePlayOnce == true ) {
   		san.play();
   		console.log("work");
   		applePlayOnce = false;
   		san.onended = function() {
		apple.play();
	}
  }
}

function toScene2(){
	document.getElementById("scene1").style.display = "none";
	document.getElementById("scene2").style.display = "block";
	//san.play();
	// san.onended = function() {
	// apple.play();
	//}
	// document.getElementById("moveMouse").innerHTML = "move your mouse";
	//document.getElementById("imgcandle1").style.visibility = "visible";
}

// function appleAppear(){
// 	document.getElementById("imgapple").style.opacity = "1";
// 	san.play();
// 	console.log("work");
// }

// function appleHalf(){
// 	document.getElementById("imgapple1").style.visibility = "visible";
// 	apple.play();
// 	san.pause();
// }

function toScene3() {
	document.getElementById("scene2").style.display = "none";
	document.getElementById("scene3").style.display = "block";
	si.play();
}

// function throwApple(){
// 	document.getElementById("imggarbage1").style.visibility = "visible";
// 	document.getElementById("imggarbage").style.visibility = "hidden";
// 	document.getElementById("imgapple2").style.visibility = "hidden";
// 	si.pause();
// 	plastic.play();
// }

function toScene4(){
	document.getElementById("scene3").style.display = "none";
	document.getElementById("scene4").style.display = "block";
	wu.play();
	wu.onended = function() {
		setInterval(cutStrawberry, 10);
	}
	strawberryAudio2.onended = function() {
		setTimeout(toScene5, 1500);
	}
	strawberryAudio1.onended = function() {
		setTimeout(toScene5, 1500);
	}
	strawberryAudio3.onended = function() {
		setTimeout(toScene5, 1500);
	}
}

var strawberry1PlayOnce = true;
var strawberry2PlayOnce = true;
var strawberry3PlayOnce = true;

function cutStrawberry() {
	var strawberry1 = document.getElementById("imgstrawberry");
    var straw1 = parseInt(window.getComputedStyle(strawberry1, null).getPropertyValue("top"), 10);
    console.log(straw1);
    var strawTop1 = 420 - straw1;
    strawberry1.style.clip = "rect(" + strawTop1 + 'px' + ", 1000px,1000px, 0px)"; 
    if (strawTop1 >= 0 && strawberry1PlayOnce == true) {
    	strawberryAudio3.play();
    	strawberry1PlayOnce = false;
    }

    var strawberry2 = document.getElementById("imgstrawberry1")
    var straw2 = parseInt(window.getComputedStyle(strawberry2, null).getPropertyValue("top"), 10);
    console.log(straw1);
    var strawTop2 = 420 - straw2;
    strawberry2.style.clip = "rect(" + strawTop2 + 'px' + ", 1000px,1000px, 0px)"; 
    if (strawTop2 >= 0 &&  strawberry2PlayOnce == true) {
    	strawberryAudio1.play();
    	strawberry2PlayOnce = false;
    }

    var strawberry3 = document.getElementById("imgstrawberry3")
    var straw3 = parseInt(window.getComputedStyle(strawberry3, null).getPropertyValue("top"), 10);
    console.log(straw3);
    var strawTop3 = 420 - straw3;
    strawberry3.style.clip = "rect(" + strawTop3 + 'px' + ", 1000px,1000px, 0px)"; 
    if (strawTop3 >= 0 && strawberry3PlayOnce == true) {
    	clearInterval();
    	strawberryAudio2.play();
    	strawberry3PlayOnce = false;
    }
}

// function appearStraw(){
// 	document.getElementById("imgstrawberry").style.opacity = "1";
// 	console.log("work");
// 	liu.play();
// }

function toScene5(){
	document.getElementById("scene4").style.display = "none";
	document.getElementById("scene5").style.display = "block";
	setTimeout(function(){jelly.play();}, 1000); 

	// liu.pause();
}

// function tojelly(){
// 	document.getElementById('imgstrawberryJam').style.animationDirection = "reverse";
// 	document.getElementById('imgstrawberryJam').style.animationDuration = "1s";
// 	document.getElementById('imgstrawberryJam').style.animationName = "raise";
// 	document.getElementById('imgstrawberryJam').style.animationName = "fadeIn";
// 	qi.play();


// 	// document.getElementById("imgpuddingCup").style.visibility = "visible";
// 	// document.getElementById("imgstrawberry3").style.visibility = "hidden";
// 	jelly.play();
// }

function toScene6(){
	document.getElementById("imgstrawberryJam").style.animation = "fadeOut 5s";
	setTimeout(function() {document.getElementById("scene5").style.display = "none";}, 1050);
	setTimeout(function() {document.getElementById("scene6").style.display = "block";}, 1100);
	setTimeout(function(){qi.play();}, 1000);

}

function toground(){
	setTimeout(function(){jelly1.play();}, 1000);
	setTimeout(function(){ba.play();}, 1500);
}

function toScene7(){
 document.getElementById("scene6").style.display = "none";
 document.getElementById("scene7").style.display = "block";
  microwave.play();
  microwave.onended = function(){
   jiu.play();
  }
}

function eatChicken(){
microwave.pause();
jiu.pause();
 chicken.play();
 document.getElementById("imgmicrowave").style.visibility = "hidden";
 document.getElementById("imgfiredChicken").style.visibility = "visible";
}

function toScene8(){
 document.getElementById("scene7").style.display = "none";
 document.getElementById("scene8").style.display = "block";
 document.getElementById("imgfiredChicken1").style.visibility = "visible";
 shi.play();
 shi.onended = function(){
  document.getElementById("imgbeerCan").style.visibility = "visible";
  beer.play();
  beer.onended = function(){
   hiccup.play();
  }
 }
}


function openBeer(){
	beer.play();
	beer.onended = function(){
		hiccup.play();
	}
}

function toScene9() {
 document.getElementById("scene8").style.display = "none";
 document.getElementById("scene9").style.display = "block";
 shiyi.play();
 shiyi.onended = function(){
  
  teeth.play();

 }
}


function toScene10() {
 document.getElementById("scene9").style.display = "none";
 document.getElementById("scene10").style.display = "block";
 shiEr.play();
}

var played = 0;

function cottonMoved(){
 var x = event.clientX;
 var y = event.clientY;

 var leftValue = x;
 var topValue = y;

 console.log(leftValue);
 console.log(topValue);
 

  document.getElementById("imgcottonStick").style.visibility = "hidden";
if (leftValue > 440  && leftValue < 514  && topValue < 580 && topValue > 430 ) {
   document.getElementById("earL1-1").play();
   played += 1;
   console.log("workssss")
  } else if (leftValue > 1048 && leftValue < 1100  && topValue < 580 && topValue > 430) {
   document.getElementById("earR2-1").play();
   played += 1;
  }
  console.log(played);
  
  if (played > 600) {
   document.getElementById("earR2-1").pause();
   document.getElementById("earL1-1").pause();
   shiSan.play();
   shiSan.onended = function(){
    toScene11();
   }
  }
 }


 function cottonStop(){
 document.getElementById("imgcottonStick").style.visibility = "visible";
}

function toScene11() {
 document.getElementById("scene10").style.display = "none";
 document.getElementById("scene11").style.display = "block";
 shiSi.play();
 shiSi.onended = function(){
  document.getElementById("imgcandle6").style.visibility = "hidden";
  document.getElementById("eye").style.visibility = "hidden";
  document.getElementById("eye1").style.visibility = "hidden";
  document.getElementById("mouth").style.visibility = "hidden";
  // document.getElementById("eye2").style.visibility = "hidden";
  // document.getElementById("eye3").style.visibility = "hidden";
  // document.getElementById("eye4").style.visibility = "hidden";
  // document.getElementById("eye5").style.visibility = "hidden";
  document.getElementById("scene12").style.display = "block";
 }
}


// var clicked = 0;
// function playLeft() {
// 	document.getElementById("earL1-1").pause();
// 	document.getElementById("earL2-1").pause();
// 	document.getElementById("earR1-1").pause();
// 	document.getElementById("earR2-1").pause();
// 	var audio = Math.random(0, 1);
	
// 	if (audio > 0.5) {
// 		document.getElementById("earL1-1").play();
// 	} else {
// 		document.getElementById("earL2-1").play();
// 	}
// 	clicked = clicked + 1;

// 	if (clicked > 3) {
// 		document.getElementById("earL1-1").pause();
// 		document.getElementById("earL2-1").pause();
// 		document.getElementById("earR1-1").pause();
// 		document.getElementById("earR2-1").pause();
// 		shiSan.play();
// 	}
// }

// function playRight() {
// 	document.getElementById("earL1-1").pause();
// 	document.getElementById("earL2-1").pause();
// 	document.getElementById("earR1-1").pause();
// 	document.getElementById("earR2-1").pause();
// 	var audio1 = Math.random(0, 1);
// 	if (audio1 > 0.5) {
// 		document.getElementById("earR1-1").play();
// 	} else {
// 		document.getElementById("earR2-1").play();
// 	}
// 	clicked = clicked + 1;

// 	if (clicked > 3) {
// 		document.getElementById("earL1-1").pause();
// 		document.getElementById("earL2-1").pause();
// 		document.getElementById("earR1-1").pause();
// 		document.getElementById("earR2-1").pause();
// 		shiSan.play();
// 	}
// }

