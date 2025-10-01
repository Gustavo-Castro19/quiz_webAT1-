import { Game } from './classes/game.js';

const game = new Game();
const startBtn = document.getElementById('start-quiz-btn');
const optionButtons = document.querySelectorAll('.option-btn');
const prevBtn = document.getElementById('prev-question-btn');
const nextBtn = document.getElementById('next-question-btn');
const finishBtn = document.getElementById('finish-quiz-btn');
const restartBtn = document.getElementById('restart-quiz-btn');
const shareBtn = document.getElementById('share-result-btn');


function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const targetPage = document.getElementById(pageId);
  if (targetPage) targetPage.classList.add('active');
}

function displayCurrentQuestion() {
  const question = game.getCurrentQuestion();
  document.getElementById('question-text').textContent = question.text;

  optionButtons.forEach((btn, i) => {
    if (question.options[i]) {
      btn.textContent = question.options[i].text;
      btn.style.display = 'block';
      btn.classList.toggle('selected', game.getAnswer(game.quiz.currentQuestionIndex) === i);
    } else {
      btn.style.display = 'none';
    }
  });

  document.querySelector('.progress-fill').style.width = `${game.getProgress()}%`;
  document.getElementById('current-question').textContent = game.quiz.currentQuestionIndex + 1;
  prevBtn.disabled = !game.hasPreviousQuestion();

  if (game.isLastQuestion()) {
    nextBtn.style.display = 'none';
    finishBtn.style.display = game.getAnswer(game.quiz.currentQuestionIndex) !== undefined ? 'block' : 'none';
  } else {
    nextBtn.style.display = game.getAnswer(game.quiz.currentQuestionIndex) !== undefined ? 'block' : 'none';
    nextBtn.disabled = game.getAnswer(game.quiz.currentQuestionIndex) === undefined;
    finishBtn.style.display = 'none';
  }
}

function displayResult() {
  const character = game.getWinnerCharacter();
  if (!character) return;

  document.getElementById('character-name').textContent = character.name;
  document.getElementById('character-element').textContent = `Elemento: ${character.element}`;
  document.getElementById('character-element').style.backgroundColor = character.elementColor;
  document.getElementById('character-description').textContent = character.description;
  document.getElementById('character-score').textContent = character.score;

  const characterImg = document.getElementById('character-img');
  characterImg.src = character.imageSrc;
  characterImg.alt = character.name;
  characterImg.style.borderColor = character.elementColor;

  const traitsList = document.getElementById('character-traits-list');
  traitsList.innerHTML = '';
  character.traits.forEach(trait => {
    const li = document.createElement('li');
    li.textContent = trait;
    traitsList.appendChild(li);
  });

  document.querySelector('.result-content').classList.add('bounce-in');
}

if (startBtn) {
  startBtn.addEventListener('click', () => {
    showPage('quiz-page');
    displayCurrentQuestion();
  });
}

optionButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    game.selectOption(index);
    displayCurrentQuestion();
  });
});

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    game.previousQuestion();
    displayCurrentQuestion();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    game.nextQuestion();
    displayCurrentQuestion();
  });
}

if (finishBtn) {
  finishBtn.addEventListener('click', () => {
    game.calculateResult();
    showPage('result-page');
    displayResult();
  });
}

if (restartBtn) {
  restartBtn.addEventListener('click', () => {
    game.restartGame();
    showPage('welcome-page');
  });
}

if (shareBtn) {
  shareBtn.addEventListener('click', () => {
    const shareText = game.getShareText();
    if (navigator.share) {
      navigator.share({
        title: 'Reino dos Elementos - Resultado',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Resultado copiado para a área de transferência!');
      });
    }
  });
}

showPage('welcome-page');
