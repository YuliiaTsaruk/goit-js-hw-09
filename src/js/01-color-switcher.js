const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;

startBtn.addEventListener('click', () => {
  if (!timerId) {
    timerId = setInterval(() => {
      const randomColor = getRandomHexColor();
      bodyEl.style.backgroundColor = randomColor;
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
});

stopBtn.addEventListener('click', () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;

    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
