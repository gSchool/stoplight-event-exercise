/*
  Write JS to make this stoplight work.
var
  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', function(){
  if (stopLight.classList.contains('red')){
    stopLight.classList.remove('red');
  } else {
    stopLight.classList.add('red');
  }
});

stopButton.addEventListener('mouseover', function(){
  console.log("Entered " + stopButton.innerHTML + " button.");
});

var slowButton = document.getElementById('slowButton');
slowButton.addEventListener('click', function(){
  if (slowLight.classList.contains('yellow')){
    slowLight.classList.remove('yellow');
  } else {
    slowLight.classList.add('yellow');
  }
});
slowButton.addEventListener('mouseover', function(){
  console.log("Entered " + slowButton.innerHTML + " button.");
});

var goButton = document.getElementById('goButton');
goButton.addEventListener('click', function(){
  if (goLight.classList.contains('green')){
    goLight.classList.remove('green');
  } else {
    goLight.classList.add('green');
  }
});
goButton.addEventListener('mouseover', function(){
  console.log("Entered " + goButton.innerHTML + " button.");
});
