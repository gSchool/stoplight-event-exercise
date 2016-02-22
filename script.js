/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var stop = document.getElementById('stopButton');
var stopLight = document.getElementById('stopLight');
var slow = document.getElementById('slowButton');
var slowLight = document.getElementById('slowLight');
var go = document.getElementById('goButton');
var goLight = document.getElementById('goLight');

stop.addEventListener('click', function(){
  slowLight.style.backgroundColor = '#111';
  goLight.style.backgroundColor = '#111';
  stopLight.style.backgroundColor = 'red';
});

slow.addEventListener('click', function() {
  goLight.style.backgroundColor = '#111';
  stopLight.style.backgroundColor = '#111';
  slowLight.style.backgroundColor = 'yellow';
});

go.addEventListener('click', function() {
  slowLight.style.backgroundColor = '#111';
  stopLight.style.backgroundColor = '#111';
  goLight.style.backgroundColor = 'green';
});
