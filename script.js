'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // * 20 is a limited number (0 to 20) to check!
let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // CONVERT STRING TO NUMBER

  const saveHighScore = function (totalScore, newHighScore) {};

  if (!guess) {
    displayMessage('No has number 😑');
  } else if (guess === secretNumber) {
    displayMessage('Correct number 🥳');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too High! 🙄' : 'Too low! 🙃');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 😭');
    }
  }
});
