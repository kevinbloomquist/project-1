var test = function() {
console.log("new refresh!");
};

$( document ).ready(function() {
    console.log( "ready!" );
});

// generate a random even or odd value
var randomNum = Math.floor(Math.random()*(3-1) +1);
console.log(randomNum);


// generate arrays for use in the functionality of game stages
var callArray = [];
console.log("callArray "+callArray);

var useArray = [];
console.log("useArray " + useArray);

// generate vars for easy DOM manipulation
var grabBox1 = document.getElementsByClassName("box1");
console.log(grabBox1); 

var grabBox2 = document.getElementsByClassName("box2");
console.log(grabBox2); 



var extendArray = function(callArray) {
	
console.log(callArray);
var randomNum = Math.floor(Math.random()*(3-1) +1);
callArray.push(randomNum);
useArray = callArray;

console.log("useArray " + useArray);

};


extendArray(callArray);
console.log("UseArray "+useArray);

// create loop to manage display CSS vaues

var funcLoop = function(useArray) {
	for (i=0; i<useArray.length; i++) {

	if (useArray[i]%2 ===0) {

		document.getElementsByClassName("box2")[0].setAttribute("id","on");
		// wait...
		// off
		// wait...
		console.log("BOX 2 STUFF!!!");
	} else if (useArray[i]%2===1) {
		document.getElementsByClassName("box1")[0].setAttribute("id","on");
		console.log("BOX 1 STUFF!!!");
	}
}
};






