const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', 'Joker'];

class Deck {
  constructor(cards = newDeck()) {
    this.cards = cards
  }

  get numberOfCards() {
    return this.cards.length
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const randIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[randIndex]
      this.cards[randIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}

class Card {
  constructor(rank) {
    this.rank = rank
  }
}

function newDeck() {
  return ranks.map(rank => {
    return new Card(rank)
  })
}

let playerOne, playerTwo;



startGame()
function startGame() {
  const deck = new Deck()
  deck.shuffle()
  
  const deckHalf = Math.ceil(deck.numberOfCards / 2)
  playerOne = new Deck(deck.cards.slice(0, deckHalf))
  playerTwo = new Deck(deck.cards.slice(deckHalf, deck.numberOfCards))
  inPlay = false
}
console.log(deck.cards)