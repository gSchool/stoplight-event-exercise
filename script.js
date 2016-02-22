/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

//the below section works technically BUT optimization would lead to me writing a single event listener
var stopLight = document.getElementById("stopLight");
var slowLight = document.getElementById("slowLight");
var goLight = document.getElementById("goLight");

//find corresponding control buttons and add event handler
var stButton = document.querySelector("#stopButton");
stButton.addEventListener("click", function(){
  stopLight.style.backgroundColor = "red";
  slowLight.style.backgroundColor = "black";
  goLight.style.backgroundColor = "black";
});

var slButton = document.querySelector("#slowButton");
slButton.addEventListener("click", function(){
  slowLight.style.backgroundColor = "yellow";
  stopLight.style.backgroundColor = "black";
  goLight.style.backgroundColor = "black";
});

var goButton = document. querySelector("#goButton");
goButton.addEventListener("click", function(){
  goLight.style.backgroundColor = "green";
  stopLight.style.backgroundColor = "black";
  slowLight.style.backgroundColor = "black";
});

//attempting optimized version
// var stButton = document.querySelector("#stopButton");
// var slButton = document.querySelector("#slowButton");
// var goButton = document. querySelector("#goButton");

// var buttons = document.querySelector(".button");
// buttons.addEventListener("click", function(){
//   if (stButton.clicked == true) {
//     stopLight.style.backgroundColor = "red";
//     slowLight.style.backgroundColor = "black";
//     goLight.style.backgroundColor = "black";
//   } else if (slButton.clicked == true) {
//       slowLight.style.backgroundColor = "yellow";
//       stopLight.style.backgroundColor = "black";
//       goLight.style.backgroundColor = "black";
//   } else if (goButton.clicked == true) {
//       goLight.style.backgroundColor = "green";
//       stopLight.style.backgroundColor = "black";
//       slowLight.style.backgroundColor = "black";
//   }
// });