console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Luke',
    hand: []
  },
  {
    name: 'Leia',
    hand: []
  },
  {
    name: 'Han',
    hand: []
  },
  {
    name: 'Chewie',
    hand: []
  }
];
var cardDeck = [
  {
    rank: 'ace',
    suit: 'spades'
  },
  {
    rank: 'king',
    suit: 'spades'
  },
  {
    rank: 'queen',
    suit: 'spades'
  },
  {
    rank: 'jack',
    suit: 'spades'
  },
  {
    rank: 10,
    suit: 'spades'
  },
  {
    rank: 9,
    suit: 'spades'
  },
  {
    rank: 8,
    suit: 'spades'
  },
  {
    rank: 7,
    suit: 'spades'
  },
  {
    rank: 6,
    suit: 'spades'
  },
  {
    rank: 5,
    suit: 'spades'
  },
  {
    rank: 4,
    suit: 'spades'
  },
  {
    rank: 3,
    suit: 'spades'
  },
  {
    rank: 2,
    suit: 'spades'
  },
  {
    rank: 'ace',
    suit: 'clubs'
  },
  {
    rank: 'king',
    suit: 'clubs'
  },
  {
    rank: 'queen',
    suit: 'clubs'
  },
  {
    rank: 'jack',
    suit: 'clubs'
  },
  {
    rank: 10,
    suit: 'clubs'
  },
  {
    rank: 9,
    suit: 'clubs'
  },
  {
    rank: 8,
    suit: 'clubs'
  },
  {
    rank: 7,
    suit: 'clubs'
  },
  {
    rank: 6,
    suit: 'clubs'
  },
  {
    rank: 5,
    suit: 'clubs'
  },
  {
    rank: 4,
    suit: 'clubs'
  },
  {
    rank: 3,
    suit: 'clubs'
  },
  {
    rank: 2,
    suit: 'clubs'
  },
  {
    rank: 'ace',
    suit: 'diamonds'
  },
  {
    rank: 'king',
    suit: 'diamonds'
  },
  {
    rank: 'queen',
    suit: 'diamonds'
  },
  {
    rank: 'jack',
    suit: 'diamonds'
  },
  {
    rank: 10,
    suit: 'diamonds'
  },
  {
    rank: 9,
    suit: 'diamonds'
  },
  {
    rank: 8,
    suit: 'diamonds'
  },
  {
    rank: 7,
    suit: 'diamonds'
  },
  {
    rank: 6,
    suit: 'diamonds'
  },
  {
    rank: 5,
    suit: 'diamonds'
  },
  {
    rank: 4,
    suit: 'diamonds'
  },
  {
    rank: 3,
    suit: 'diamonds'
  },
  {
    rank: 2,
    suit: 'diamonds'
  },
  {
    rank: 'ace',
    suit: 'hearts'
  },
  {
    rank: 'king',
    suit: 'hearts'
  },
  {
    rank: 'queen',
    suit: 'hearts'
  },
  {
    rank: 'jack',
    suit: 'hearts'
  },
  {
    rank: 10,
    suit: 'hearts'
  },
  {
    rank: 9,
    suit: 'hearts'
  },
  {
    rank: 8,
    suit: 'hearts'
  },
  {
    rank: 7,
    suit: 'hearts'
  },
  {
    rank: 6,
    suit: 'hearts'
  },
  {
    rank: 5,
    suit: 'hearts'
  },
  {
    rank: 4,
    suit: 'hearts'
  },
  {
    rank: 3,
    suit: 'hearts'
  },
  {
    rank: 2,
    suit: 'hearts'
  }
];

var cardKey = {
  ace: 11,
  king: 10,
  queen: 10,
  jack: 10,
  10: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2
};

function playCards(players, cardDeck, cardsPerHand) {
  var j;
  var playerScore = 0;
  var winner = { name: '', score: 0 };
  var tieBreaker = [];
  var whoTied = [];
  var shuffledDeck = _.shuffle(cardDeck);
  for (var i = 0; i < players.length; i++) {
    players[i].hand = [];
  }
  for (i = 0; i < cardsPerHand; i++) {
    for (j = 0; j < players.length; j++) {
      players[j].hand.push(shuffledDeck.shift());
    }
  }
  for (i = 0; i < players.length; i++) {
    for (j = 0; j < cardsPerHand; j++) {
      playerScore += cardKey[players[i].hand[j].rank];
    }
    if (playerScore > winner.score) {
      winner.name = players[i].name;
      winner.score = playerScore;
    }
    tieBreaker.push(playerScore);
    playerScore = 0;
  }
  for (i = 0; i < players.length; i++) {
    if (tieBreaker[i] === winner.score) {
      whoTied.push(players[i]);
    }
  }
  if (whoTied.length > 1) {
    console.log("We have a tie! Let's settle this with another round...");
    playCards(whoTied, cardDeck, cardsPerHand);
  } else {
    console.log('Winner is: ' + winner.name + ', with a high score of:', winner.score);
  }
}

playCards(players, cardDeck, 5);
