/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

//identify the element that will set off the event

//STOP
var stopB = document.querySelector('#stopButton');
//write a function that will change another object on a click
var stopL = document.querySelector('#stopLight');

function goRed(){
  stopL.style['background-color'] = 'red';
  stopB.addEventListener('click', turnOffRed);
}
function turnOffRed(){
  stopL.style['background-color'] = '#111';
}
stopB.addEventListener('click', goRed);

//SLOW
var slowB = document.querySelector('#slowButton');
var slowL = document.querySelector('#slowLight');

function goYellow(){
  slowL.style['background-color'] = 'yellow';
  slowB.addEventListener('click', turnOffYellow);
}
function turnOffYellow(){
  slowL.style['background-color'] = '#111';
}
slowB.addEventListener('click', goYellow);
//GO
var goB = document.querySelector('#goButton');
var goL = document.querySelector('#goLight');

function goGreen(){
  goL.style['background-color'] = 'green';
  goB.addEventListener('click', turnOffGreen);
}
function turnOffGreen(){
  goL.style['background-color'] = '#111';
}
goB.addEventListener('click', goGreen);
