/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

// var stop = document.querySelector('#stopButton');
// var slow = document.querySelector('#slowButton');
// var go = document.querySelector('#goButton');
//
// stop.addEventListener('click', function () {
// document.querySelector('#stopLight').style.backgroundColor= "rgb(246, 9, 37)";
// ('#stopLight').toggle();
// });
//
//
// slow.addEventListener('click', function () {
// document.querySelector('#slowLight').style.backgroundColor= "rgb(251, 166, 0)";
// ('#slowLight').toggle();
// });
//
//
// go.addEventListener('click', function () {
// document.querySelector('#goLight').style.backgroundColor= "rgb(11, 250, 49)";
// ('#goLight').toggle();
// });

var stopButton = document.getElementById('stopButton');
var slowButton = document.getElementById('slowButton');
var goButton = document.getElementById('goButton');

stopButton.addEventListener('click', function(){
  document.getElementById('stopLight').style.backgroundColor = "red";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
});

slowButton.addEventListener('click', function(){
  document.getElementById('slowLight').style.backgroundColor = "yellow";
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
});

goButton.addEventListener('click', function(){
  document.getElementById('goLight').style.backgroundColor = "green";
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
});
