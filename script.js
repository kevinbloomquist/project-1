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
var callArray = [1,2,1];
console.log("callArray "+callArray);

var useArray = [];
console.log("useArray " + useArray);

var extendArray = function(callArray) {
	
console.log(callArray);

callArray.push(randomNum);
useArray = callArray;

console.log("useArray " + useArray);

};


extendArray(callArray);
console.log("UseArray "+useArray);

