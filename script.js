var currentIndex = 0;
var video = document.getElementById('video-background');
var wordList = ['Creative', 'Proactive', 'Self-taught', 'Teamwork', 'Punctual', 'Dedicated', 'Responsible', 'Best Practices', 'Hired! ;)'];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function showHiredText(words, currentIndex) {
  currentIndex = currentIndex % words.length;

  var hiredText = document.createElement('div');
  hiredText.className = 'random-text';
  var currentWord = words[currentIndex];
  hiredText.textContent = currentWord;

  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  var textWidth = 7 * currentWord.length;
  var textHeight = 7;

  var maxX = screenWidth - textWidth;
  var maxY = screenHeight - textHeight;

  var randomX = getRandomNumber(0, maxX);
  var randomY = getRandomNumber(0, maxY);

  randomX = Math.max(0, Math.min(randomX, maxX));
  randomY = Math.max(0, Math.min(randomY, maxY));

  hiredText.style.left = randomX + 'px';
  hiredText.style.top = randomY + 'px';

  document.body.appendChild(hiredText);

  setTimeout(function () {
    hiredText.style.display = 'block';
    setTimeout(function () {
      hiredText.style.display = 'none';
      document.body.removeChild(hiredText);
    }, 490);
  }, 0);

  return currentIndex + 1;
}

function startAudio() {
  video.muted = false;
  setInterval(function () {
    currentIndex = showHiredText(wordList, currentIndex);
  }, 490);
  document.getElementById('start-button').style.display = 'none';
  video.play().catch(error => {
    console.error('Error al reproducir audio:', error);
  });
}

video.addEventListener('loadeddata', function () {
  document.getElementById('loader').classList.add('hide');
});

window.onload = function () {
  document.getElementById('loader').classList.add('hide');
}