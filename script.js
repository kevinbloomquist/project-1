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

// generate vars for easy DOM manipulation
var grabBox1 = document.getElementsByClassName("box1");
console.log(grabBox1); 

var grabBox2 = document.getElementsByClassName("box2");
console.log(grabBox2); 



var extendArray = function(callArray) {
	
console.log(callArray);
var randomNum = Math.floor(Math.random()*(5-1) +1);
callArray.push(randomNum);
useArray = callArray;


console.log("useArray " + useArray);

};


extendArray(callArray);
console.log("UseArray "+useArray);

// create loop to manage display CSS vaues

// turnon...
// turn off...

var funcLoop = function(useArray) {
	for (i=0; i<useArray.length; i++) {
	if (useArray[i] ===2) {
// ************************************************************remove below

		/*setTimeout(myFunction,3000);

		function myFunction() {
    	alert('Hello');
	}*/
// *************************************************************remove above
// pick-up here: added setTimeout, on and off work. offset timers to better understand...delay coordination is off
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





