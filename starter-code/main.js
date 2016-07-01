var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var createBoard = function() {
	for(var i=0; i<4; i++){
		var playingCard = document.createElement('div');
		playingCard.className = 'Card';
		document.getElementById('game-board').appendChild(playingCard)
	}
}

/* if (cardOne === cardTwo) {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
}

if (cardThree === cardFour) {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
}

if (cardTwo === cardThree) {
	alert("You found a match!")
} else {alert ("Sorry, try again.")} */
