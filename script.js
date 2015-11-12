/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var stopButton = document.querySelector('#stopButton');
var slowButton = document.querySelector('#slowButton');
var goButton = document.querySelector('#goButton');
var stopLight = document.querySelector('#stopLight');
var slowLight = document.querySelector('#slowLight');
var goLight = document.querySelector('#goLight');
var stopOn = function() {stopLight.style.backgroundColor = "red";};
var slowOn = function() {slowLight.style.backgroundColor = "yellow";};
var goOn = function() {goLight.style.backgroundColor = "green";};
var stopOff = function() {stopLight.style.backgroundColor = "black";};
var slowOff = function() {slowLight.style.backgroundColor = "black";};
var goOff = function() {goLight.style.backgroundColor = "black";};

var stopLightTest = function() {
  var bgColor = stopLight.style.backgroundColor;
  if (bgColor === '' || bgColor === "black") {
    stopOn();
  } else {
    stopOff();
  }
};

var slowLightTest = function() {
  var bgColor = slowLight.style.backgroundColor;
  if (bgColor === '' || bgColor === "black") {
    slowOn();
  } else {
    slowOff();
  }
};

var goLightTest = function() {
  var bgColor = goLight.style.backgroundColor;
  if (bgColor === '' || bgColor === "black") {
    goOn();
  } else {
    goOff();
  }
};

stopButton.addEventListener("click", stopLightTest);
slowButton.addEventListener("click", slowLightTest);
goButton.addEventListener("click", goLightTest);
