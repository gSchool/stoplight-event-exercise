/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var stopButton = document.querySelector("#stopButton");
var stopLight = document.getElementById('stopLight');

stopButton.addEventListener("click", function(){
  var color;
  stopLight.style.backgroundColor === "red" ? color = "" : color = "red";
  stopLight.style.backgroundColor = color;
});

var slowButton = document.querySelector("#slowButton");
var slowLight = document.getElementById('slowLight');

slowButton.addEventListener("click", function(){
  var color;
  slowLight.style.backgroundColor === "orange" ? color = "" : color = "orange";
  slowLight.style.backgroundColor = color;
});

var goButton = document.querySelector("#goButton");
var goLight = document.getElementById('goLight');

goButton.addEventListener("click", function(){
  var color;
  goLight.style.backgroundColor === "green" ? color = "" : color = "green";
  goLight.style.backgroundColor = color;
});
