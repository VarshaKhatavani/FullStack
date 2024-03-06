'use strict';

let player1Score = document.querySelector('#score--0');
let player2Score = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const btnRoll = document.querySelector('.btn--roll');
const activePlayer0 = document.querySelector('.player--0');
const activePlayer1 = document.querySelector('.player--1');

player1Score.textContent = 0;
player2Score.textContent = 0;

let diceImage = document.querySelector('.dice');
console.log(diceImage);

diceImage.classList.add('hidden');

let audio = document.getElementById('myAudio');
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  // when roll a dice, generate random number to dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceImage.classList.remove('hidden');
  audio.play();
  diceImage.src = `dice-${dice}.png`;

  // Apply a random rotation to simulate rolling
  var rotation = Math.floor(Math.random() * 720) - 360; // Random rotation between -360deg and 360deg
  diceImage.style.transform = 'rotate(' + rotation + 'deg)';

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; //update score dynamically
    // currentScore0.textContent = currentScore; // initially set player 1 score
  } else {
    activePlayer = activePlayer == 0 ? 1 : 0;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer0.classList.toggle('player--active');
    activePlayer1.classList.toggle('player--active');
  }
});
