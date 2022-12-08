// access html element
const Timer = document.querySelector(".timer");
const Stopwatch = document.querySelector(".stopwatch");
const main = document.querySelector(".main");
const timerSection = document.querySelector(".timerSec");
const StopwatchSection = document.querySelector(".stopSec");
const watchInput = document.querySelector(".stopInput");
const timerFooter = document.querySelector(".timerFooter");
const StopFooter = document.querySelector(".stopFooter");
const watchStartBout = document.querySelector("#watchStart");
const resetWatchBout = document.querySelector("#stopReset");

let curentTime = 0;
let interval = null;

// add event listeners
Stopwatch.addEventListener("click", () => {
  Timer.classList.remove("active");
  Stopwatch.classList.add("active");
  StopwatchSection.style.display = "block";
  timerSection.style.display = "none";
  StopFooter.style.display = "block";
  timerFooter.style.display = "none";
});

Timer.addEventListener("click", () => {
  Stopwatch.classList.remove("active");
  Timer.classList.add("active");
  StopwatchSection.style.display = "none";
  timerSection.style.display = "block";
  StopFooter.style.display = "none";
  timerFooter.style.display = "block";
});

watchStartBout.addEventListener("click", startWatch);
resetWatchBout.addEventListener("click", reset);

function startWatch() {
  if (watchStartBout.textContent === "START") {
    watchStartBout.textContent = "STOP";
    interval = setInterval(timer, 1000);
  } else {
    clearInterval(interval);
    watchStartBout.textContent = "START";
  }
}

// function to increase the time
function timer() {
  curentTime++;
  //Time Format
  let hrs = Math.floor(curentTime / 3600);
  let mins = Math.floor((curentTime - hrs * 3600) / 60);
  let secs = curentTime % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  watchInput.value = `${hrs}h ${mins}m ${secs}s`;
}

// function to reset the time
function reset() {
  stop();
  curentTime = 0;
  watchInput.value = "00 00 00";
}

function stop() {
  clearInterval(interval);
  interval = null;
}
