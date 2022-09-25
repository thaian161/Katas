/* eslint-disable camelcase */
let games = [
  { winner: "Alice", loser: "Bob", loserPoints: 3 },
  { winner: "Carol", loser: "Dean", loserPoints: 1 },
  { winner: "Elise", loser: "Bob", loserPoints: 2 },
  { winner: "Elise", loser: "Carol", loserPoints: 4 },
  { winner: "Alice", loser: "Carol", loserPoints: 2 },
  { winner: "Carol", loser: "Dean", loserPoints: 3 },
  { winner: "Dean", loser: "Elise", loserPoints: 2 },
];

const players1 = (games) => {
  let result = [];

  games.forEach((game) => {
    result.push(game.winner);
    result.push(game.loser);
  });
  // turn result into a set
  // spread the set back into an array
  // return the array
  return [...new Set(result)];
  // result is already an array so if we spread it:
  // [...result]
  // it doesnt change anything.
};
console.log(players1(games));

const players = (games) => {
  let result = [];
  games.forEach((game) => {
    if (!result.includes(game.winner)) {
      result.push(game.winner);
    }
    if (!result.includes(game.loser)) {
      result.push(game.loser);
    }
  });
  return result;
};

const finalRecords = (games) => {
  //give everyone an empty array to start:
  let output = {};
  let allPlayers = players(games);
  allPlayers.forEach((player) => {
    output[player] = [];
  });

  for (let game of games) {
    // push the loser to the winner's array
    output[game.winner].push(game.loser);
  }

  return output;
};
console.log(finalRecords(games));

// let games = [
//   { winner: "Alice", loser: "Bob", loserPoints: 3 },
//   { winner: "Carol", loser: "Dean", loserPoints: 1 },
//   { winner: "Elise", loser: "Bob", loserPoints: 2 },
//   { winner: "Elise", loser: "Carol", loserPoints: 4 },
//   { winner: "Alice", loser: "Carol", loserPoints: 2 },
//   { winner: "Carol", loser: "Dean", loserPoints: 3 },
//   { winner: "Dean", loser: "Elise", loserPoints: 2 },
// ];
