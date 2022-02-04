const stopButton = document.getElementById("stopButton");
const slowButton = document.getElementById("slowButton");
const goButton = document.getElementById("goButton");

const stopLight = document.getElementById("stopLight");
const slowLight = document.getElementById("slowLight");
const goLight = document.getElementById("goLight");

stopButton.addEventListener("click", function () {
  stopLight.classList.toggle("stop");
});

slowButton.addEventListener("click", function () {
  slowLight.classList.toggle("slow");
});

goButton.addEventListener("click", function () {
  goLight.classList.toggle("go");
});
const mouseEnter = function (event) {
  console.log(`mouse has entered ${event.target.innerHTML}`);
};

const mouseExit = function (event) {
  console.log(`mouse has exited ${event.target.innerHTML}`);
};
stopButton.addEventListener("mouseenter", mouseEnter);
stopButton.addEventListener("mouseleave", mouseExit);

slowButton.addEventListener("mouseenter", mouseEnter);
slowButton.addEventListener("mouseleave", mouseExit);

goButton.addEventListener("mouseenter", mouseEnter);
goButton.addEventListener("mouseleave", mouseExit);

const controls = document.getElementById("controls");
controls.addEventListener("click", buttonState);

function buttonState(event) {
  const currentLight = event.target.innerHTML;
  if (currentLight === "Go") {
    if (goLight.classList.contains("go")) {
      console.log(currentLight + " is on");
    } else {
      console.log(currentLight + " is off");
    }
  } else if (currentLight === "Slow") {
    if (slowLight.classList.contains("slow")) {
      console.log(currentLight + " is on");
    } else {
      console.log(currentLight + " is off");
    }
  } else {
    if (stopLight.classList.contains("stop")) {
      console.log(currentLight + " is on");
    } else {
      console.log(currentLight + " is off");
    }
  }
}
