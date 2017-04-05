// Jquery start here
$(document).ready(function() {
	
// create random number
var randomNum = 0;

// create varible for user score
var userScore = 0;

// userScore
var winCounter = 0;
var loseCounter = 0;

// create random number each crystal
var crystalNum1 = 0;
var crystalNum2 = 0;
var crystalNum3 = 0;
var crystalNum4 = 0;
var crystalNum5 = 0;

// function will start everytime when load the page and either win or lose
function startGame() {
	randomNum = Math.floor((Math.random() * 126) + 19);
	userScore = 0;
	crystalNum1 = Math.floor((Math.random() * 12) + 1);
	crystalNum2 = Math.floor((Math.random() * 12) + 1);
	crystalNum3 = Math.floor((Math.random() * 12) + 1);
	crystalNum4 = Math.floor((Math.random() * 12) + 1);
	crystalNum5 = Math.floor((Math.random() * 12) + 1);

	$("#random-number").text(randomNum);
	$("#total-number").text(userScore);
	$("#win-score").text(winCounter);
	$("#lose-score").text(loseCounter);

	console.log("crystal 1 = " + crystalNum1);
	console.log("crystal 2 = " + crystalNum2);
	console.log("crystal 3 = " + crystalNum3);
	console.log("crystal 4 = " + crystalNum4);
	console.log("crystal 5 = " + crystalNum5);

};

// call function
startGame();
	
	// create funtion when user click picture and add score to user score
	$(".crystal-1").on("click",function(){
		userScore += crystalNum1;
		$("#total-number").text(userScore);
		checkScore();
	});

	$(".crystal-2").on("click",function(){
		userScore += crystalNum2;
		$("#total-number").text(userScore);
		checkScore();
	});

	$(".crystal-3").on("click",function(){
		userScore += crystalNum3;
		$("#total-number").text(userScore);
		checkScore();
	});

	$(".crystal-4").on("click",function(){
		userScore += crystalNum4;
		$("#total-number").text(userScore);
		checkScore();
	});

	$(".crystal-5").on("click",function(){
		userScore += crystalNum5;
		$("#total-number").text(userScore);
		checkScore();
	});

	// change mousestyle when point to the picture
	$('.crystal').css( 'cursor', 'pointer' );


// create function to run each time when user clicks
function checkScore () {


	if(randomNum == userScore) {
		winCounter++;
		$("#win-score").text(winCounter);
		startGame();
	}

	else if (randomNum < userScore) {
		loseCounter++;
		$("#lose-score").text(loseCounter);
		startGame();
	}

}

});




