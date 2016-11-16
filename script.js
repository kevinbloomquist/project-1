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
	if (UseArray[i]%2 ===0) {
		console.log("BOX 2 STUFF!!!");
	} else if (useArray[i]%2===1) {
		console.log("BOX 1 STUFF!!!");
	}
}
};





