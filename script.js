/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var stopButton = document.getElementById('stopButton');
var slowButton = document.getElementById('slowButton');
var goButton = document.getElementById('goButton');
var stoplight = document.getElementById('stoplight');
var slowLight = document.getElementById('slowLight');
var goLight = document.getElementById('goLight');

stopButton.addEventListener('click', function() {
  stopLight.style.backgroundColor = 'red';
})
slowButton.addEventListener('click', function() {
  slowLight.style.backgroundColor = 'orange';
})
goButton.addEventListener('click', function() {
  goLight.style.backgroundColor = 'green';
})
