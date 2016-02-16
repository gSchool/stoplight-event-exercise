/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
// function bulbReset() {
//   var bulb = document.querySelector('.bulb');
//   bulb.style.backgroundColor = '#111';
// }
var stop = document.querySelector('#stopButton');
var stopLight = document.querySelector('#stopLight');
stop.addEventListener('click', function() {
  // bulbReset();
  goLight.style.backgroundColor = '#111';
  slowLight.style.backgroundColor = '#111';
  stopLight.style.backgroundColor = 'red';
}, true);

var slow = document.querySelector('#slowButton');
var slowLight = document.querySelector('#slowLight');
slow.addEventListener('click', function() {
  // bulbReset();
  goLight.style.backgroundColor = '#111';
  stopLight.style.backgroundColor = '#111';
  slowLight.style.backgroundColor = 'orange';
}, true);

var go = document.querySelector('#goButton');
var goLight = document.querySelector('#goLight');
go.addEventListener('click', function() {
  // bulbReset();
  stopLight.style.backgroundColor = '#111';
  slowLight.style.backgroundColor = '#111';
  goLight.style.backgroundColor = 'green';
}, true);
