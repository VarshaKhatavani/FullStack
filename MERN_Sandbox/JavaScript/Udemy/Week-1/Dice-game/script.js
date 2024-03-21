'use strict';

const player1Score = document.querySelector('#score--0');
const player2Score = document.getElementById('score--1');

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const activePlayer0 = document.querySelector('.player--0');
const activePlayer1 = document.querySelector('.player--1');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let diceImage = document.querySelector('.dice');
console.log(diceImage);

let audio, currentScore, activePlayer, score, isGameRunning;

//initialize
const init = function () {
  audio = document.getElementById('myAudio');
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0]; // added array as will update the score according to 0 to 1 player
  isGameRunning = true;

  player1Score.textContent = 0;
  player2Score.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  diceImage.classList.add('hidden');
  activePlayer0.classList.remove('player--winner');
  activePlayer1.classList.remove('player--winner');
  activePlayer0.classList.add('player--active');
  activePlayer1.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  activePlayer = activePlayer == 0 ? 1 : 0;
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer0.classList.toggle('player--active');
  activePlayer1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (isGameRunning) {
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
      switchPlayer();
    }
  }
});

// hold score & switch the player
btnHold.addEventListener('click', function () {
  if (isGameRunning) {
    // 1. Add current score to active player's score
    score[activePlayer] += currentScore;
    // score[0] = score[0]+ currentScore

    // 2. Update the score
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      isGameRunning = false;
      diceImage.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. Switch to next player
      switchPlayer();
    }
  }
});

//Reset game
btnNew.addEventListener('click', init);
