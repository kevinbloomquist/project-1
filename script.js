var test = function() {
console.log("new refresh!");
};

$( document ).ready(function() {
    console.log( "ready!" );
});

// generate a random even or odd value
var randomNum = Math.floor(Math.random()*(5-1) +1);
console.log("random number " +randomNum);


// generate arrays for use in the functionality of game stages
var callArray = [];
console.log("callArray "+ callArray);

var useArray = [];
console.log("useArray " + useArray);

var compareArray = [];
console.log("compareArray "+ compareArray);

// generate vars for easy DOM manipulation
var grabBox1 = document.getElementsByClassName("box1");
console.log(grabBox1); 

var grabBox2 = document.getElementsByClassName("box2");
console.log(grabBox2); 


// Function to extend the current random array by 1 new random number 1-4) -> saves to useArray
var extendArray = function(callArray) {
	
console.log(callArray);
var randomNum = Math.floor(Math.random()*(5-1) +1);
callArray.push(randomNum);
useArray = callArray;


console.log("useArray " + useArray);

};


extendArray(callArray);
console.log("UseArray "+useArray);

// create functions to manage display CSS vaues

// turnon...
// turn off...

//***************************************start switch/ case approach here

function turn1on() {
		document.getElementsByClassName("box1")[0].setAttribute("id","on");

	}

function turn1off() {
		document.getElementsByClassName("box1")[0].removeAttribute("id");
	}

function turn2on() {
		document.getElementsByClassName("box2")[0].setAttribute("id","on");

	}

function turn2off() {
		document.getElementsByClassName("box2")[0].removeAttribute("id");
	}

function turn3on() {
		document.getElementsByClassName("box3")[0].setAttribute("id","on");

	}

function turn3off() {
		document.getElementsByClassName("box3")[0].removeAttribute("id");
	}

function turn4on() {
		document.getElementsByClassName("box4")[0].setAttribute("id","on");

	}

function turn4off() {
		document.getElementsByClassName("box4")[0].removeAttribute("id");
	}

// function to loop through useArray sequence. Each iteration chooses a box and "turns it on...then off"
var funcLoop = function(useArray) {
// loop will throw away first value to avoid case i=0 which negates time interval on first integer.
	for (i=1; i<useArray.length; i++) {
	
	
			switch (useArray[i]) {
			    
			    case 1:
			    	setTimeout(turn1on,(1000*i)+500);
			        turn1on();
			        setTimeout(turn1off,(1000*i)+1000);
			        turn1off();
			        console.log("BOX 1 STUFF!!!");
			        break;
			    case 2:
			    	setTimeout(turn2on,(1000*i)+500);
			        turn2on();
			        setTimeout(turn2off,(1000*i)+1000);
			        turn2off();
			        console.log("BOX 2 STUFF!!!");
			        break;
			    case 3:
			    	setTimeout(turn3on,(1000*i)+500);
			    	turn3on();
			    	setTimeout(turn3off,(1000*i)+1000);
			        turn3off();
			        console.log("BOX 3 STUFF!!!");
			        break;
			    case 4:
			    	setTimeout(turn4on,(1000*i)+500);
			        turn4on();
			        setTimeout(turn4off,(1000*i)+1000);
			        turn4off();
			        console.log("BOX 4 STUFF!!!");
			        break;
			}
		
  	}
};


// pick-up here: added setTimeout, on and off work. offset timers to better understand...delay coordination is off trying switch context*/

/*********************************************************************************Working for loop quarantine below
var funcLoop = function(useArray) {
	for (i=0; i<useArray.length; i++) {
	if (useArray[i] ===2) {
		setTimeout(turn2on,2000);

		function turn2on() {
		document.getElementsByClassName("box2")[0].setAttribute("id","on");
	}
		// wait...
		setTimeout(turn2off,4000);

		function turn2off() {
		document.getElementsByClassName("box2")[0].removeAttribute("id");
			console.log("turn2off fired!");
	}
		// wait...
		console.log("BOX 2 STUFF!!!");
	} else if (useArray[i]===1) {

		setTimeout(turn1on,1000);

		function turn1on() {
		document.getElementsByClassName("box1")[0].setAttribute("id","on");

	}
		// wait...
		setTimeout(turn1off,3000);

		function turn1off() {
		document.getElementsByClassName("box1")[0].removeAttribute("id");
	}
		console.log("BOX 1 STUFF!!!");

	} else if (useArray[i]===3) {

		setTimeout(turn3on,1000);

		function turn3on() {
		document.getElementsByClassName("box3")[0].setAttribute("id","on");

	}
		// wait...
		setTimeout(turn3off,3000);

		function turn3off() {
		document.getElementsByClassName("box3")[0].removeAttribute("id");
	}
		console.log("BOX 3 STUFF!!!");
		// wait...

	} else if (useArray[i]===4) {

		setTimeout(turn4on,2000);

		function turn4on() {
		document.getElementsByClassName("box4")[0].setAttribute("id","on");

	}
		// wait...
		setTimeout(turn4off,4000);

		function turn4off() {
		document.getElementsByClassName("box4")[0].removeAttribute("id");
	}
		console.log("BOX 4 STUFF!!!");
}
}
};
*********************************************************************working for loop quarantine above*/

// addEventListener to divs****************************************************************************
var responseArray = [];
// diagnostic function
var mark = function(b) {
	console.log("clicked" + b);
};

// need to make visual response to user click
document.getElementsByClassName("box1")[0].addEventListener("click",function(){
	responseArray.push(1);
	mark(responseArray);
	turn1on();
	setTimeout(turn1off,250);

});
console.log(responseArray);

document.getElementsByClassName("box2")[0].addEventListener("click",function(){
	responseArray.push(2);
	mark(responseArray);
	turn2on();
	setTimeout(turn2off,250);
});
console.log(responseArray);

document.getElementsByClassName("box3")[0].addEventListener("click",function(){
	responseArray.push(3);
	mark(responseArray);
	turn3on();
	setTimeout(turn3off,250);
});
console.log(responseArray);

document.getElementsByClassName("box4")[0].addEventListener("click",function(){
	responseArray.push(4);
	mark(responseArray);
	turn4on();
	setTimeout(turn4off,250);
});
console.log(responseArray);
// compare to useArray************************************************************

// used underscore.js to compare arrays in checkWin function

var compare = _.isEqual(responseArray,shiftDecoy);
console.log("compare is "+ compare);
// dummy variable so useArray stays in tact across rounds.
var shiftDecoy = useArray;

var checkWin = function() {
// jettison shiftDecoy[0] before comparing to responseArray
shiftDecoy.shift(); //need a solution (maybe something in callArr/useArray cycle) for this you need to pop for comparison inside this function but outside useArray has to remain intact.

var compare = _.isEqual(responseArray,shiftDecoy);
if (compare ===true) {
// Alert win/lose----> change to modal
alert("correct!");
} else {
	alert("beat it nerd!");
}
};

// variable and advance function for round display
var roundNum = 0;
var roundAdvance = function() {
roundNum++;
};


// go will run extendArray run funcLoop and change round.
// transition to next round: clear responseArray/ run extendArray/ run funcLoop and change round number
document.getElementsByClassName("start")[0].addEventListener("click",function(){
responseArray = [];
extendArray(useArray);
funcLoop(useArray);
roundAdvance();
document.getElementsByClassName("roundBox")[0].innerHTML="ROUND " + roundNum;
	});


// when response.length = shiftDecoy.length -> run check win
// ->trigger modal response (user closes) ten clicks go! (change alerts)
// Scoring metric: background color -> each round passes will add to rgba values


