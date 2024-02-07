const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

//? Creating the element we'll want to be placing things into:
const ulParent = document.createElement("ul");

//? a for...of loop to cycle through all the provided games and do something with them:
for (let game of warriorsGames) {
  //? Extracing the homeTeam and awayTeam objects from each iteration, or game, in the loop
  const { homeTeam, awayTeam } = game;
  //? Creating a line item for each instance of 'game' (each iteration)
  const gameLi = document.createElement("li");

  //? Doing a little renaming in this deconstruction, changing team name to hTeam for homeTeam objects and the same for points & awayTeam object
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;

  const teamNames = `${aTeam} @ ${hTeam}`;
  // const scoreLine = `${aPoints} - ${hPoints}`;
  //? Setting score line with 'let' to be empty so that it can take the result of the below conditional statement:
  let scoreLine;
  //? If the away team's points are more than the home team's, bold the winner's point total:
  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
  //? Else, the home team must've won, so we'll bold their points instead.
  } else {
    scoreLine = `${aPoints} - <b>${hPoints}</b>`;
  }

  //? Making this from the Warrios' POV, so we need to check if hTeam has the value of 'Golden State', set them to the homeTeam. If not, they're set to the awayTeam.
  const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;

  //? Add a class of 'win' if they won, and loss if they didn't the the game Li element.
  gameLi.classList.add(warriors.isWinner ? 'win' : 'loss');

  //? Set the innerHTML (because we want our <b> tags and such to apply, not render) to our teamNames variable and our scoreline variable that was determined by the conditional statement.
  gameLi.innerHTML = `${teamNames} ${scoreLine}`;

  //? Stick the li into the ul element, the parent.
  ulParent.appendChild(gameLi);
}

document.body.prepend(ulParent);
