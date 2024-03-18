'use strict';

console.log('Hello Varsha, Welcome to JS!');

// TODO
// BUG
// FIXME

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);
  console.log(inputNumber, typeof inputNumber);

  if (!inputNumber) {
    displayMessage('⚠️ Enter Number!');
  } else if (inputNumber === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#00c04b';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (inputNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        inputNumber > secretNumber ? '📈 Too High!' : '📉 Too Low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Opps!😓 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('again called');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
