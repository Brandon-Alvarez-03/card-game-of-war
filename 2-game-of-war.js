//Game of War with Classes this time

//full deck
let fullDeck = []
function createFullDeck(fullDeck) {
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
  return fullDeck = fullDeck
}
createFullDeck(fullDeck)
//ranking obj
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
console.log(fullDeck)
console.log(fullDeck.length)

//split in two

class Player {
  constructor(hand) {
    this.hand = hand
    this.discard = discardpile
  }
}