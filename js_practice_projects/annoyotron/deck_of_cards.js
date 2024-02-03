const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  initializeDeck() {
    const { suits, values, deck } = this;
    for (let value of values.split(",")) {
      for (let suit of suits) {
        deck.push({
          value,
          suit,
        });
      }
    }
    return deck;
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    const { deck } = this;
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },
};

// myDeck.initializeDeck();
// console.log(myDeck.deck);
// myDeck.shuffle();
// console.log(myDeck.deck);

//? If we want to make more than one deck of cards...(using only what has been covered so far)
const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initializeDeck() {
      const { suits, values, deck } = this;
      for (let value of values.split(",")) {
        for (let suit of suits) {
          deck.push({
            value,
            suit,
          });
        }
      }
      return deck;
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(numCards) {
      const cards = [];
      for (let i = 0; i < numCards; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      const { deck } = this;
      for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
  };
};

const myHand = makeDeck();
console.log(myHand.initializeDeck());
const yourHand = makeDeck();
yourHand.initializeDeck();
yourHand.shuffle();
console.log(yourHand.deck);

//? The Fisher-Yates Shuffle Method
function shuffle(arr) {
  // Looping over the array backwards
  for (let i = arr.length - 1; i > 0; i--) {
    // Picking a random index before the current element
    let j = Math.floor(Math.random() * (i + 1));
    // Swap things around
    [arr[i], arr[j]] = [arr[j], arr[i]];
    console.log(arr);
  }
}

// shuffle(["b", "a", "c", "z", "h", "q", "t", "f"]);
// function makeDeck() {
//   const deck = [];
//   const suits = ["hearts", "diamonds", "spades", "clubs"];
//   const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
//   for (let value of values.split(",")) {
//     for (let suit of suits) {
//       deck.push({
//         value,
//         suit,
//       });
//     }
//   }
//   return deck;
// }

// console.log(makeDeck());

// function drawCard(deck) {
//   return deck.pop();
// }

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);
// console.log(card1);
