const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const restart = document.querySelector('.restart');
let seconds = 0;
let showTimer;

function getTimeFromSeconds(seconds) {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString('pt-PT', {
    hour12: false,
    timeZone: 'UTC',
  });
};

function startTimer() {
  showTimer = setInterval(function () {
    seconds++;
    timer.innerHTML = getTimeFromSeconds(seconds);
  }, 1000);
};

document.addEventListener('click', function (event) {
  const element = event.target;
  
  if (element.classList.contains('start')) {
    clearInterval(showTimer);
    timer.classList.remove('paused');
    startTimer();
  };

  if (element.classList.contains('pause')) {
    clearInterval(showTimer);
    if (seconds !== 0) {
      timer.classList.add('paused');
    };
  };

  if (element.classList.contains('restart')) {
    clearInterval(showTimer);
    timer.classList.remove('paused');
    timer.innerHTML = '00:00:00';
    seconds = 0;
  };
});