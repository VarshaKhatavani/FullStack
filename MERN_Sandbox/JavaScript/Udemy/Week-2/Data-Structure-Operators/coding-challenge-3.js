/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)

const events = new Set([...gameEvents.values()]);
console.log(events);

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);

console.log(gameEvents);

// [
//   {
//     key: 17,
//     value: '⚽️ GOAL',
//   },
//   {
//     key: 36,
//     value: '🔁 Substitution',
//   },
//   {
//     key: 47,
//     value: '⚽️ GOAL',
//   },
//   {
//     key: 61,
//     value: '🔁 Substitution',
//   },
//   {
//     key: 69,
//     value: '🔴 Red card',
//   },
//   {
//     key: 70,
//     value: '🔁 Substitution',
//   },
//   {
//     key: 72,
//     value: '🔁 Substitution',
//   },
//   {
//     key: 76,
//     value: '⚽️ GOAL',
//   },
//   {
//     key: 80,
//     value: '⚽️ GOAL',
//   },
//   {
//     key: 92,
//     value: '🔶 Yellow card',
//   },
// ];

// 0: {17 => "⚽️ GOAL"}
// 1: {36 => "🔁 Substitution"}
// 2: {47 => "⚽️ GOAL"}
// 3: {61 => "🔁 Substitution"}
// 4: {69 => "🔴 Red card"}
// 5: {70 => "🔁 Substitution"}
// 6: {72 => "🔁 Substitution"}
// 7: {76 => "⚽️ GOAL"}
// 8: {80 => "⚽️ GOAL"}
// 9: {92 => "🔶 Yellow card"}

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// [...gameEvents.keys()]
// iterable object containing the keys of the gameEvents object.

const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4. Loop over the events and log them to the console,
// marking whether it's in the first half or second half (after 45 min) of the game,
// like this: [FIRST HALF] 17: ⚽️ GOAL

for (const [time, event] of gameEvents) {
  if (time > 45) {
    console.log(`[SECOND HALF] ${time}: ${event}`);
  } else if (time < 45) {
    console.log(`[FIRST HALF] ${time}: ${event}`);
  }
}

// instead of if used ternary operator
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
