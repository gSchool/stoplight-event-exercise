/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/



var stopl = document.getElementById ('stopButton');
var bulb1 = document.getElementsByClassName('bulb')[0];

var slowl = document.getElementById ('slowButton');
var bulb2 = document.getElementsByClassName('bulb')[1];

var gol = document.getElementById ('goButton');
var bulb3 = document.getElementsByClassName('bulb')[2];





stopl.addEventListener('click', function(){
  bulb1.style.backgroundColor = 'red';
});

slowl.addEventListener('click', function(){
  bulb2.style.backgroundColor = 'yellow';
});

gol.addEventListener('click', function(){
  bulb3.style.backgroundColor = 'green';
});
