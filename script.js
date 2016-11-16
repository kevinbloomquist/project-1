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
console.log(callArray);

var useArray = [];
console.log(useArray);

var extendArray = function(callArray) {
useArray = callArray.push(randomNum);
};
extendArray(callArray);
console.log(useArray);

