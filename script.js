/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var stop = document.querySelector("#stopButton");
var slow = document.querySelector("#slowButton");
var go = document.querySelector("#goButton");
var stopLight = document.querySelector("#stopLight");
var slowLight = document.querySelector("#slowLight");
var goLight = document.querySelector("#goLight");
stopLight.style.backgroundColor = "black";
slowLight.style.backgroundColor = "black";
goLight.style.backgroundColor = "black";


stop.addEventListener("click", function() {
  if (stopLight.style.backgroundColor === "black") {
    stopLight.style.backgroundColor = "red";
  } else {
    stopLight.style.backgroundColor = "black";
  }
  slowLight.style.backgroundColor = "black";
  goLight.style.backgroundColor = "black";
});

slow.addEventListener("click", function() {
  if (slowLight.style.backgroundColor === "black") {
    slowLight.style.backgroundColor = "orange";
  } else {
    slowLight.style.backgroundColor = "black";
  }
  stopLight.style.backgroundColor = "black";
  goLight.style.backgroundColor = "black";
});

go.addEventListener("click", function() {
  if (goLight.style.backgroundColor === "black") {
    goLight.style.backgroundColor = "green";
  } else {
    goLight.style.backgroundColor = "black";
  }
  stopLight.style.backgroundColor = "black";
  slowLight.style.backgroundColor = "black";
});
