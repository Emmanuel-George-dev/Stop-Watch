let hourEL = document.querySelector(".hour");
let minutesEL = document.querySelector(".minutes");
let secondsEL = document.querySelector(".seconds");
let millisecondsEL = document.querySelector(".milliseconds");
let startTimer = document.querySelector(".play");
let endTimer = document.querySelector(".pause");
let resetTimer = document.querySelector(".reset");
let sec = document.querySelector(".sec");
let gradient = document.querySelector(".gradient");
let lapHour = document.querySelector(".lap-hour");
let lapMinutes = document.querySelector(".lap-minutes");
let lapSeconds = document.querySelector(".lap-seconds");
let lap = document.querySelector(".lap-print");
let body = document.querySelector(".laps-wrapper");

let hour = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
function stopWatch() {
  milliseconds++;
  millisecondsEL.innerHTML = milliseconds;
  if (milliseconds < 10) {
    millisecondsEL.innerHTML = `0${milliseconds}`;
  }
  if (milliseconds > 99) {
    seconds++;
    secondsEL.innerHTML = seconds;
    milliseconds = 0;
  }
  if (seconds < 10) {
    secondsEL.innerHTML = `0${seconds}`;
  }
  if (seconds > 59) {
    minutes++;
    minutesEL.innerHTML = minutes;
    seconds = 0;
  }
  if (minutes < 10) {
    minutesEL.innerHTML = `0${minutes}`;
  }
  if (minutes > 59) {
    hour++;
    hourEL.innerHTML = hour;
    minutes = 0;
  }
  if (hour < 10) {
    hourEL.innerHTML = `0${hour}`;
  }
}

startTimer.onclick = () => {
  interval = setInterval(stopWatch, 10);
  endTimer.style.display = "grid";
  startTimer.style.display = "none";
  sec.style.animationPlayState = "running";
  gradient.style.animationPlayState = "running";
  sec.style.animation = "turn 10s linear infinite";
  gradient.style.animation = "turn 10s linear infinite";
};

endTimer.onclick = () => {
  clearInterval(interval);
  endTimer.style.display = "none";
  startTimer.style.display = "grid";
  sec.style.animationPlayState = "paused";
  gradient.style.animationPlayState = "paused";
};
resetTimer.onclick = () => {
  clearInterval(interval);
  sec.style.animation = "none";
  gradient.style.animation = "none";
  endTimer.style.display = "none";
  startTimer.style.display = "grid";
  hour = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  hourEL.innerHTML = `0${hour}`;
  minutesEL.innerHTML = `0${minutes}`;
  secondsEL.innerHTML = `0${seconds}`;
  millisecondsEL.innerHTML = `0${milliseconds}`;
  body.innerHTML = ''
  lapIndex = 1
};

let lapIndex = 1;

let test = document.querySelector('.wrap')

lap.addEventListener("click", () => {
  
  let lapWrap = document.createElement("div");
  lapWrap.classList.add("lap");
  let lapId = document.createElement("span");
  let lapTime = document.createElement("span");
  let lapTimeCount = document.createElement("span");
  body.appendChild(lapWrap);
  lapWrap.appendChild(lapId);
  lapWrap.appendChild(lapTime);
  lapWrap.appendChild(lapTimeCount);
  lapId.innerText = `Lap ${lapIndex++}`;
  lapTime.innerText = `${hourEL.innerHTML}:${minutesEL.innerHTML}:${secondsEL.innerHTML}`
  lapTimeCount.innerText = `+${hourEL.innerHTML}:${minutesEL.innerHTML}:${secondsEL.innerHTML}`
  test.scrollTop = 0
});
