/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var redBulb = document.getElementById('stopLight');

var stopButton = document.getElementById("stopButton");
  stopButton.addEventListener("click", function () {
    redBulb.style.backgroundColor = "red";
    greenBulb.style.backgroundColor = "black";
  });

var yellowBulb = document.getElementById('slowLight');

var slowButton = document.getElementById("slowButton");
  slowButton.addEventListener("click", function () {
    yellowBulb.style.backgroundColor = "yellow";
    redBulb.style.backgroundColor = "black";
  });

var greenBulb = document.getElementById('goLight');

var goButton = document.getElementById("goButton");
  goButton.addEventListener("click", function () {
    greenBulb.style.backgroundColor = "green";
    yellowBulb.style.backgroundColor = "black";
  });
