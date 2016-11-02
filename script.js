/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

//answer with javascript

var stopButton = document.getElementById('stopButton');
var stopLight = document.getElementById('stopLight');
var slowButton = document.getElementById('slowButton');
var slowLight = document.getElementById('slowLight');
var goButton = document.getElementById("goButton")
var goLight = document.getElementById("goLight")

function turnRed() {
  stopLight.style.background = "red";
  slowLight.style.background = "black";
  goLight.style.background = "black";
}

function turnYellow() {
  stopLight.style.background = "black";
  slowLight.style.background = "yellow";
  goLight.style.background = "black";
}

function turnGreen() {
  stopLight.style.background = "black";
  slowLight.style.background = "black";
  goLight.style.background = "green";
}

function showContent(event) {
  console.log("Entered " + this.textContent + "Button");
}

function leaveButton(event) {
  console.log("Leaving" + this.textContent + "Button")
}

stopButton.addEventListener("click", turnRed);
slowButton.addEventListener("click", turnYellow);
goButton.addEventListener("click", turnGreen);
stopButton.addEventListener("mouseover", showContent);
slowButton.addEventListener("mouseover", showContent);
goButton.addEventListener("mouseover", showContent);
stopButton.addEventListener("mouseout", leaveButton);
slowButton.addEventListener("mouseout", leaveButton);
goButton.addEventListener("mouseout", leaveButton);
// answer in jquery

$('#stopButton').click(function(){
  $('#stopLight').css("background-color", "red");
  $('#slowLight').css("background-color", "black");
  $('#goLight').css("background-color", "black");
});

$('#slowButton').click(function(){
  $('#slowLight').css("background-color", "yellow");
  $('#stopLight').css("background-color", "black");
  $('#goLight').css("background-color", "black");
});

$('#goButton').click(function(){
  $('#goLight').css("background-color", "green");
  $('#slowLight').css("background-color", "black");
  $('#stopLight').css("background-color", "black");
});
