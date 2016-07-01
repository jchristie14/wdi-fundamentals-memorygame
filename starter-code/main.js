var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];


var isMatch = function(firstCard, secondCard) {
	if ((cardsInPlay[0]) === (cardsInPlay[1])) {alert ("You Found a Match!")}
	else {alert ("Sorry, try again.")};
	for(var w=0; w<4; w++){
		document.getElementsByClassName('card')[w].innerHTML="";
	};
	cardsInPlay = [];
	
}


var createBoard = function() {
	for(var i=0; i<cards.length; i++){
		var playingCard = document.createElement('div');
		playingCard.className = 'card';
		document.getElementById('game-board').appendChild(playingCard);
		playingCard.setAttribute('data-card', cards[i]);
		playingCard.addEventListener('click', isTwoCards);
		function isTwoCards () {
			if (this.getAttribute('data-card') === "queen") {this.innerHTML = '<img src="queenSpades.png" alt = "Queen of Spades" />'

			}
			else {this.innerHTML = '<img src="kingSpades.png" alt = "King of Spades" />'

			}
			cardsInPlay.push(this.getAttribute('data-card'));
			if (cardsInPlay.length === 2) {
				isMatch(cardsInPlay);}
			}
		}
		
	
	};

createBoard()
