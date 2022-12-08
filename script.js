// access html element
const Timer = document.querySelector(".timer")
const Stopwatch = document.querySelector(".stopwatch")
const main =document.querySelector(".main")

// add event listeners
Stopwatch.addEventListener("click",()=>{
    Timer.classList.remove("active")
    Stopwatch.classList.add("active")
    createStopwatchElement();
})

Timer.addEventListener("click",()=>{
    Stopwatch.classList.remove("active")
    Timer.classList.add("active")
    createTimerElement()
})
// functions to create elements for the selected type
function createStopwatchElement(){

}
function createTimerElement(){

}