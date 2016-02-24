/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
(function(){
var stop = document.getElementById('stopButton');
var slow = document.getElementById('slowButton');
var go = document.getElementById('goButton');

var stopLight = document.getElementById('stopLight');
var slowLight = document.getElementById('slowLight');
var goLight = document.getElementById('goLight');

var clickedStop = function() {
    stopLight.style.backgroundColor = '#B81811';
    goLight.style.backgroundColor = '#2d2d2d';
    slowLight.style.backgroundColor = '#2d2d2d';
  };
var clickedSlow = function() {
    slowLight.style.backgroundColor = '#FFED18';
    goLight.style.backgroundColor = '#2d2d2d';
    stopLight.style.backgroundColor = '#2d2d2d';
  };
var clickedGo = function() {
    goLight.style.backgroundColor = '#348F37';
    slowLight.style.backgroundColor = '#2d2d2d';
    stopLight.style.backgroundColor = '#2d2d2d';
  };

stop.addEventListener("click", clickedStop);
go.addEventListener("click", clickedGo);
slow.addEventListener("click", clickedSlow);
}()

//KYLE'S CODE
// var button1 = document.getElementById("stopButton");
// var light = document.getElementById("stopLight");
// button1.addEventListener('mouseenter', function(){
// light.style.backgroundColor = 'red';
// });
// button1.addEventListener('mouseleave', function(){
// light.style.backgroundColor = 'black';
// });
//
//
// var button2 = document.getElementById("slowButton");
// var light2 = document.getElementById("slowLight");
// button2.addEventListener('mouseenter', function(){
// light2.style.backgroundColor = 'yellow';
// });
// button2.addEventListener('mouseleave', function(){
// light2.style.backgroundColor = 'black';
// });
//
// var button3 = document.getElementById("goButton");
// var light3 = document.getElementById("goLight");
// button3.addEventListener('mouseenter', function(){
// light3.style.backgroundColor = 'green';
// });
// button3.addEventListener('mouseleave', function(){
// light3.style.backgroundColor = 'black';
// });
