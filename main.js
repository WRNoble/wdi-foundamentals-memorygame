
//* outlines cards and their details.*//
var cards = [
{status: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"},
{status: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png"},
{status: "king", suit: "hearts", cardImage: "images/king-of-hearts.png"},
{status: "king", suit: "hearts", cardImage: "images/king-of-diamonds.png"} 
]

//* empty array for the cards the user selects.*//
var cardsInPlay = []

//* function that checks to see if the player has selected two cards and if the two cards are a match.*//
function checkForMatch () {
  this.setAttribute('src', cards[cardId].cardImage)
  if (cardsInPlay.length === 2);
    if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else if (cardsInPlay[2] === cardsInPlay[3]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

//* function which flips the card which the user selects over and displays the information contained in the array.*//
function flipCard () {
  this.getAttribute(cardId = 'data-id');
  cardsInPlay.push(cards[cardId].status);
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  checkForMatch();
}

//*function which creates the game board that is displayed to the user.*//
function createBoard () {
  for ( var i = 0; i < cards.length; i ++); {
    var cardElement = document.createElement('img');
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute( 'data', i = 'data-id');
    cardElement.addEventListener('click', flipCard );
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();

