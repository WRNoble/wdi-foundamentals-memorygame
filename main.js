

var cards = [
"queen",
"queen",
"king",
"king",
]

console.log("User flipped " + cards[0]);
console.log("User flipped " + cards[3]);

var cardsInPlay = []

var cardOne = cards[0];
var cardTwo = cards[3];

cardsInPlay.push('cardOne');

cardsInPlay.push('cardTwo');

if ( cardsInPlay.length === 2 ) {
  if ( cardsInPlay[0] === cardsInPlay[1] ) {
    alert("You have found a match!");
  } else {
    alert("Sorry, try again.");
  }
}