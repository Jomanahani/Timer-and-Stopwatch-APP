// access html element
const Timer = document.querySelector(".timer");
const Stopwatch = document.querySelector(".stopwatch");
const main = document.querySelector(".main");
const timerSection = document.querySelector(".timerSec");
const StopwatchSection = document.querySelector(".stopSec");
const timerFooter = document.querySelector(".timerFooter");
const StopFooter = document.querySelector(".stopFooter");

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
