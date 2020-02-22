
var cards = [
"queen", 
"queen", 
"kings", 
"kings"
];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push('cardOne');

console.log("User flipped queen"); 

var cardTwo = cards[2];

cardsInPlay.push('cardTwo');

console.log("User flipped king");

if (cardsInPlay.legth === 2) {
	if (cardsInPlay[0] === cardsInPlay[2]) {
		alert("You found a match!");
	} else {
		alert("Sorry try again.");
	}
}