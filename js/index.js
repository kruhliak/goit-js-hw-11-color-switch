const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector("body");
let timeInterval;

btnStartRef.addEventListener("click", onBtnStartClick);
btnStopRef.addEventListener("click", onBtnStopClick);

function onBtnStartClick() {
  if (timeInterval) {
    return;
  }
  timeInterval = setInterval(() => {
    bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}

function onBtnStopClick() {
  console.log("onBtnStopClick");
  clearInterval(timeInterval);
}
