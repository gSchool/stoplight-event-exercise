/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var stop = document.querySelector('#stopButton');
var stopLight = document.querySelector('#stopLight');

stop.addEventListener('click', function () {
stopLight.style.backgroundColor = (stopLight.style.backgroundColor == 'black') ? 'red' : 'black';
});


var slow = document.querySelector('#slowButton');
var slowLight = document.querySelector('#slowLight');

slow.addEventListener('click', function () {
slowLight.style.backgroundColor = (slowLight.style.backgroundColor == 'black') ? 'orange' : 'black';
});



var go = document.querySelector('#goButton');
var goLight = document.querySelector('#goLight');

go.addEventListener('click', function () {
goLight.style.backgroundColor = (goLight.style.backgroundColor == 'black') ? 'green' : 'black';
});
