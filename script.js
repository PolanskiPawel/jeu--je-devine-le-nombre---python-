const form = document.querySelector('form');
const result = document.querySelector('#result');
const score = document.querySelector('#score');

let secret_number = 0;

function generateRandomNumber() {
  secret_number = Math.floor(Math.random() * 100) + 1;
}

function readScore() {
  fetch('score.txt')
    .then(response => response.text())
    .then(data => {
      score.textContent = data.trim();
    })
}

function writeScore(newScore) {
  fetch('score.txt', {
    method: 'PUT',
    body: newScore
  })
}

function playGame(guess) {
  if (guess === '') {
    result.textContent = 'Veuillez entrer un nombre.';
    return;
  }
  
  guess = parseInt(guess);
  
  if (guess === secret_number) {
    result.textContent = 'Félicitations ! Vous avez trouvé le nombre.';
    let newScore = parseInt(score.textContent) + 1;
    score.textContent = newScore;
    writeScore(newScore.toString());
    generateRandomNumber();
    } else if (guess < secret_number) {
    result.textContent = 'Le nombre est plus grand.';
    } else {
    result.textContent = 'Le nombre est plus petit.';
    }
    }
    
    form.addEventListener('submit', event => {
    event.preventDefault();
    playGame(event.target.guess.value);
    event.target.guess.value = '';
    });
    
    readScore();
    generateRandomNumber();
