//This is the game of war

//Create ranking structure of a deck of cards including the jokers
// suits do not matter
//joker is the highest ranking with a 2 being the lowest
//Possibly an array where the index will serve as the ranking

//card ranking 0 index is lowest, 13 index is highest
const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', 'Joker'];
for (card in rank) {
  console.log(`${rank[card]} Card Rank: ${card}`);
}
console.log("Joker ranks highest!")
//option to use an object "dict" as ranking reference  
const rankObj = {
  '2': 1,
  '3': 2,
  '4': 3,
  '5': 4,
  '6': 5,
  '7': 6,
  '8': 7,
  '9': 8,
  '10': 9,
  'J': 10,
  'Q': 11,
  'K': 12,
  'A': 13,
  'Joker': 14
}

//create a DS with all 56 cards

let fullDeck = []

function pushN(card, deck, N = 4) {
  for (let i = 1; i <= N; i++) {
    deck.push(card.toString());
  }
}
for (let i = 2; i <= 10; i++) {
  pushN(i, fullDeck);
}
pushN("J", fullDeck);
pushN("Q", fullDeck);
pushN("K", fullDeck);
pushN("A", fullDeck);
pushN("Joker", fullDeck, 2);

//shuffle the cards (manipulating original deck is ideal to save space complexity)
//Fisher-Yates Algorithim for generating a random permutation of a finite sequence (AKA shuffling a sequence)
//Fisher-Yates Shuffle

// function shuffleDeck(deck) {
//   for (let i = deck.length; i > 0; i--) {

//   }
// }

//selects the random number descending of fisher-yates

// function showRandomNum(len) {
//   while (len.length > 0) {
//     let randIndex = Math.floor(Math.random() * (len.length - 1));
//     console.log(randIndex);
//     len.length--;
//   }
// }
// showRandomNum(fullDeck);


//manipulate random number selection into an actual shuffle
function cardSwap(workingDeck) {
  let startNum = workingDeck.length - 1
  while (startNum > 0) {
    let randIndex = Math.floor(Math.random() * (startNum - 1));
    let holdCardValue = workingDeck[randIndex];
    let newSpotForEndCard = randIndex;
    let endCardValue = workingDeck[startNum + 1]
    workingDeck[newSpotForEndCard] = endCardValue;
    workingDeck[startNum + 1] = holdCardValue;
    startNum--;
  }
  let workingDeckFiltered = workingDeck.filter(x => x !== undefined);
  return workingDeck = workingDeckFiltered;
}
fullDeck = cardSwap(fullDeck)
// console.log(fullDeck);

//alternate cards and split into two separate player decks
let player1 = [];
let player2 = [];


while (fullDeck.length > 0) {
  player1.push(fullDeck.pop())
  player2.push(fullDeck.pop())
}
console.log(player1);
console.log(player2);



//create two empty decks to store winning cards
let player1Collected = [];
let player2Collected = [];




//flip "top" cards, log them, compare
//whoever has the higher ranking card has both cards stored in their empty deck





//if cards are a tie, add three cards, flip forth
//if either player has less than 4 cards, just hand em over you lose the war, play again




//winner takes all cards




//shuffle individual decks




//play with those decks




//when either of the player buckets === 0 game is over, print that the opposite player wins


