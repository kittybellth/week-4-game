// Jquery start here


// create random number
var randomNumber = 0;

// function will start everytime when load the page and either win or lose
function startGame() {
	randomNumber = Math.floor((Math.random() * 100) +1);
	$("#random-number").text(randomNumber);
};

startGame();


