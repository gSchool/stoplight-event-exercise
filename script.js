/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var body = document.querySelector("body");

var stop = document.getElementById("stopButton");
var slow = document.getElementById("slowButton");
var go = document.getElementById("goButton");

var stopLight = document.getElementById("stopLight");
var slowLight = document.getElementById("slowLight");
var goLight = document.getElementById("goLight");

var clickedStop = function(){
    stopLight.style.backgroundColor = "#B81811";
    goLight.style.backgroundColor = "#2d2d2d";
    slowLight.style.backgroundColor = "#2d2d2d";
  };

var clickedSlow = function(){
    slowLight.style.backgroundColor = "#FFED18";
    goLight.style.backgroundColor = "#2d2d2d";
    stopLight.style.backgroundColor = "#2d2d2d";
  };

var clickedGo = function(){
    goLight.style.backgroundColor = "#348F37";
    slowLight.style.backgroundColor = "#2d2d2d";
    stopLight.style.backgroundColor = "#2d2d2d";
  };

stop.addEventListener("click", clickedStop);
go.addEventListener("click", clickedGo);
slow.addEventListener("click", clickedSlow);
