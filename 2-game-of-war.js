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

// This object will be accessed to compare the 'score' of each card
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

//Deck Constructor with creatDeck and shuffle methods
class Deck {
  constructor() {
    this.cards = []
    this.createDeck()
    this.shuffle() 
  }

  // createDeck sets cards equal to the full deck created at beginning of file
  createDeck() {
    return this.cards = fullDeck
  }

  // deck.shuffle method
  shuffle() {
    let currentIndex = this.cards.length, randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
  }
}
let winner;
class GameOfWar {
  constructor() {
    // round counter
    this.round = 1
    // arrays to hold player cards
    this.playerOne = []
    this.playerTwo = []

    // pile that will hold all cards currently in play
    this.pile = []

    //automatically run these three methods when an instance of GameOfWar is called
    this.gameSetup()
    this.compare()
    this.displayWinner()
  }
  // creates an instance of the Deck class, sets cards to created deck
  gameSetup() {
    const deck = new Deck()
    let cards = deck.cards
    console.log(cards)
    // Deal cards to player hands
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
    while (this.playerOne.length >= 4 && this.playerTwo.length >= 4) {
      console.log(`Round: ${this.round}`)
      this.pile.push(this.playerOne.pop())
      this.pile.push(this.playerTwo.pop())
      console.log(this.pile)
      console.log(`Player 1 reveals a ${this.pile[this.pile.length - 2]}`);
      console.log(`Player 2 reveals a ${this.pile[this.pile.length - 1]}`);

      if (rankObj[this.pile[this.pile.length - 2]] > rankObj[this.pile[this.pile.length - 1]]) {
        console.log("Player 1 takes the cards!")
        this.playerOne.unshift(...this.pile)
        this.pile = []
        // console.log(this.playerOne)
        // console.log(this.playerTwo)
        // console.log('---------------------------------')
      } else if (rankObj[this.pile[this.pile.length - 2]] < rankObj[this.pile[this.pile.length - 1]]) {
        console.log("Player 2 takes the cards!")
        this.playerTwo.unshift(...this.pile)
        this.pile = []
        // console.log(this.playerOne)
        // console.log(this.playerTwo)
        // console.log('---------------------------------')
      } else if (this.pile[this.pile.length - 2] == this.pile[this.pile.length - 1]) {
        console.log("Tie")
        if (this.playerOne.length >= 4 && this.playerTwo.length >= 4) {

          this.pile.push(this.playerOne.pop())
          this.pile.push(this.playerTwo.pop())
          this.pile.push(this.playerTwo.pop())
          this.pile.push(this.playerOne.pop())
          this.pile.push(this.playerOne.pop())
          this.pile.push(this.playerTwo.pop())

          this.compare()
        }
        if (this.playerOne.length < 4 && this.playerTwo.length >= 4) {
          this.playerTwo.unshift(...this.playerOne)
          this.playerTwo.unshift(...this.pile)
          this.pile = []
          this.playerOne = []
          // console.log(...this.playerOne)
          // console.log(...this.playerTwo)
          // console.log('---------------------------------')
        } else if (this.playerTwo.length < 4 && this.playerOne.length >=4) {
          this.playerOne.unshift(...this.pile)
          this.playerOne.unshift(...this.playerTwo)
          this.pile = []
          this.playerTwo = []
          // console.log(...this.playerOne)
          // console.log(...this.playerTwo)
          // console.log('---------------------------------')
        }
        
      }
      this.round += 1
      if (this.playerOne.length + this.playerTwo.length + this.pile.length >54) {
        break;
      }
    }
    if (this.playerOne.length < 4 && this.playerTwo.length >= 4) {
      this.playerTwo.unshift(...this.playerOne)
      this.playerTwo.unshift(...this.pile)
      this.pile = []
      this.playerOne = []

    } else if (this.playerTwo.length < 4 && this.playerOne.length >=4) {
      this.playerOne.unshift(...this.pile)
      this.playerOne.unshift(...this.playerTwo)
      this.pile = []
      this.playerTwo = []
 
    }
    
  }

  displayWinner() {
    if (this.playerOne.length > this.playerTwo.length) {
      console.log(`Player One wins after ${this.round} rounds`)
    } else {
      console.log(`Player Two wins after ${this.round} rounds`)
    }
  }
}

let game = new GameOfWar()

console.log(game)
console.log(game.playerOne.length, game.playerTwo.length, game.pile.length)



