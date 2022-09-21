
class Card {
  constructor(rank, score) {
    this.rank = rank
    this.score = score
  }

  setRankScore(obj, rank) {
    return obj[rank]
  }
}

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



class Deck {
  constructor() {
    this.cards = []
    this.createDeck()
    this.shuffle() 
  }

  createDeck() {
    return this.cards = fullDeck
  }
  shuffle() {
    let currentIndex = this.cards.length, randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
  }

  drawCard() {
    let randInt = Math.floor(Math.random() * (this.length - 1))
    return this.cards.splice(randInt, 1)
  }
}

class GameOfWar {
  constructor() {
    this.round = 1
    this.playerOne = []
    this.playerTwo = []
    this.pile = []
    this.gameSetup()
    this.compare()
  }

  gameSetup() {
    const deck = new Deck()
    let cards = deck.cards

    this.playerOne.push(...cards.slice(0, cards.length / 2))
    this.playerTwo.push(...cards.slice(cards.length / 2))
  }
  shuffle() {
    let currentIndex = this.cards.length, randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
  }

  compare() {
    while (this.playerOne.length > 0 || this.playerTwo.length > 0) {
      console.log(`Round: ${this.round}`)
      this.pile.push(this.playerOne.pop())
      this.pile.push(this.playerTwo.pop())
      console.log(this.pile)
      console.log(this.pile.length)
      console.log(`Player 1 reveals a ${this.pile[this.pile.length - 2]}`);
      console.log(`Player 2 reveals a ${this.pile[this.pile.length - 1]}`);

      if (rankObj[this.pile[this.pile.length - 2]] > rankObj[this.pile[this.pile.length - 1]]) {
        console.log("Player 1 takes the cards!")
        this.playerOne.unshift(...this.pile)
        this.pile = []
      } else if (rankObj[this.pile[this.pile.length - 2]] < rankObj[this.pile[this.pile.length - 1]]) {
        console.log("Player 2 takes the cards!")
        this.playerTwo.unshift(...this.pile)
        this.pile = []
      } else if (this.pile[this.pile.length - 2] == this.pile[this.pile.length - 1]) {
        console.log("Tie")
        break;
      }
      this.round += 1
      this.shuffle
    }

    return this.pile
  }
}

let game = new GameOfWar()
// console.log(game)
console.log(game.playerOne, game.playerTwo)
console.log(game)

