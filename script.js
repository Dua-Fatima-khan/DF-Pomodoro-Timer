let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timer = document.getElementById("timer");
let isRunning = false;
let timeLeft = 25 * 60;
let interval;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  timer.innerHTML = `
  00:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

start.addEventListener("click", function () {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
    start.innerHTML = `    <i class="fa-solid fa-play"></i>`;
  } else {
    isRunning = true;
    start.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    interval = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft == 0) {
        clearInterval(interval);
        alert(`Time's up`);
        timeLeft = 1500;
        updateTimer();
      }
    }, 1000);
  }
});

reset.addEventListener("click", function () {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
  isRunning = false;
});
