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
let player1Card;
let player2Card;
//first iteration player1Hand is equal to player 1
function compareCardGeneral(player1Hand, player2Hand, blankpile1, blankpile2) {
  while (player1Hand.length > 0 || player2Hand.length > 0) {
    // flips over top card from each player
    player1Card = player1Hand.pop();
    player2Card = player2Hand.pop();
    console.log(`Player 1 reveals a ${player1Card}`);
    console.log(`Player 2 reveals a ${player2Card}`);
    //compare cards to see whose ranks higher
    if (rankObj[player1Card] > rankObj[player2Card]) {
      //case player 1 wins, player 1 collects all cards
      console.log("Player 1 takes the cards!")
      blankpile1.push(player1Card, player2Card)
      console.log(blankpile1, blankpile2)
      console.log('--------------------------')
    } else if (rankObj[player2Card] > rankObj[player1Card]) {
      //case player 2 wins, player 2 collects all cards
      console.log("Player 2 takes the cards!")
      blankpile2.push(player1Card, player2Card)
      console.log(blankpile1, blankpile2)
      console.log('--------------------------')
    } else if (rankObj[player1Card] == rankObj[player2Card]) {
      //if there is a tie declare war, both players will put in three cards and one face up, repeat until there is a winner
      //winner takes all cards
      //if someone runs out of cards, winner takes all cards, shuffled decks and repeat entire play through
      console.log("It's a tie! This means WAR!!!!!!!!!!")

      tieCase(player1Hand, player2Hand, player1Collected, player2Collected)

    }
  }
  if ((blankpile1.length + blankpile2.length) < 54) {
    blankpile1.push(player1Card)
    blankpile2.push(player2Card)
  }

}


// compareCardGeneral(player1, player2, player1Collected, player2Collected)
// console.log(player1.length, player2.length, player1Collected.length, player2Collected.length)
// // cardSwap(player1Collected)
// // cardSwap(player2Collected)
// compareCardGeneral(player1Collected, player2Collected, player1, player2)
// console.log(player1.length, player2.length, player1Collected.length, player2Collected.length)

// just do when tie --> if both players have more than 4 cards each....pop pop pop popCompare.... whoever is greater take it ehoever is less domnt





function tieCase(player1Hand, player2Hand, blankpile1, blankpile2) {
  let tempArr1 = [], tempArr2 = [];
  tempArr1.unshift(player1Card)
  tempArr2.unshift(player2Card)
  console.log(blankpile1, blankpile2)
  if (player1Hand >= 4 && player2Hand >= 4) {
    for (let i = 1; i <= 4; i++) {
      tempArr1 = tempArr1.push(player1Hand.pop())
      tempArr2 = tempArr2.push(player2Hand.pop())
    }
    if (rankObj[tempArr1[4]] > rankObj[tempArr2[4]]) {
      blankpile1.concat(tempArr1)
      blankpile1.concat(tempArr2)
    } else if (rankObj[tempArr1[4]] < rankObj[tempArr2[4]]) {
      blankpile2.concat(tempArr1)
      blankpile2.concat(tempArr2)
    } else {
      console.log("Repeat War!")
    }
  } else if (player1Hand >= 4 && player2Hand < 4) {
    blankpile1.concat(player2Hand)
    blankpile1.concat(tempArr1)
    blankpile1.concat(tempArr2)
  } else {
    blankpile2.concat(player1Hand)
    blankpile2.concat(tempArr1)
    blankpile2.concat(tempArr2)
  }
}

compareCardGeneral(player1, player2, player1Collected, player2Collected)
console.log(player1Collected, player2Collected)
console.log(player1.length, player2.length)
console.log(player1Collected.length, player2Collected.length)
// compareCardGeneral(player1Collected, player2Collected, player1, player2)
// console.log(player1.length, player2.length)
// console.log(player1Collected.length, player2Collected.length)

// while (player1.length > 0 || player2.length > 0) {
//   compareCard(player1, player2);
  // console.log(player1.length);
//   console.log(player2.length);
// }


//you can use recursion and then just dump everything from the collected hand back into the playerhand 



//if cards are a tie, add three cards, flip forth
//if either player has less than 4 cards, just hand em over you lose the war, play again




//winner takes all cards




//shuffle individual decks




//play with those decks




//when either of the player buckets === 0 game is over, print that the opposite player wins