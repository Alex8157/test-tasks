const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

let timerId;
const stopTimer = () => clearInterval(timerId);

const calculateTime = (time) => {
  const date = new Date(0, 0, 0, 0, 0, time);
  return date.toLocaleTimeString();
};

const createTimerAnimator = () => {
  return (seconds) => {
    if (seconds > 0) {
      stopTimer();
      timerEl.innerHTML = calculateTime(seconds);
      timerId = setInterval(() => {
        if (seconds === 1) stopTimer();
        seconds--;
        timerEl.innerHTML = calculateTime(seconds);
      }, 1000);
    } else {
      return 0;
    }
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/[^\d]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
