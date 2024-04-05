///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

import { game } from './game-object.js';

console.log(game);

//1. Loop over the game.scored array and print each player name to the console,
//along with the goal number (Example: "Goal 1: Lewandowski")

for (const [i, value] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${value}`);
}

// Goal 1: Lewandowski
// Goal 2: Gnarby
// Goal 3: Lewandowski
// Goal 4: Hummels

// 2. Use a loop to calculate the average odd and
// log it to the console
// (We already studied how to calculate averages, you can go check if you don't remember)

// odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   }

const odds = Object.values(game.odds);
let average = 0;
for (const score of odds) {
  average += score;
}
average /= odds.length;
console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

for (const [team, score] of Object.entries(game.odds)) {
  const teamStr = team == 'x' ? 'draw' : `victory ${score}`;
  console.log(`Odd of ${teamStr}: ${score}`);
}

// Odd of victory 1.33: 1.33
// Odd of draw: 3.25
// Odd of victory 6.5: 6.5

// BONUS: Create an object called 'scorers' which contains
// the names of the players who scored as properties,
// and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

const scorers = {};

//create object from array
for (const player of game.scored) {
  console.log(player);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
