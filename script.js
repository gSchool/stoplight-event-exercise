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
  if(stopLight.style.backgroundColor == 'black'){
    stopLight.style.backgroundColor = 'red';
  }
  else{
    stopLight.style.backgroundColor = 'black';
  }
})
slowButton.addEventListener('click', function() {
  if(slowLight.style.backgroundColor == 'black'){
    slowLight.style.backgroundColor = 'orange';
  }
  else{
    slowLight.style.backgroundColor = 'black';
  }
})
goButton.addEventListener('click', function() {
  if(goLight.style.backgroundColor == 'black'){
    goLight.style.backgroundColor = 'green';
  }
  else{
    goLight.style.backgroundColor = 'black';
  }
})
