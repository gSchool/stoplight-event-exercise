// stop
var stopButton = document.getElementById('stopButton');
var stopLight = document.getElementById('stopLight');

stopButton.addEventListener('click', function() {
  if ( stopLight.style.backgroundColor == 'black'){
    stopLight.style.backgroundColor = 'red'
  } else {stopLight.style.backgroundColor = 'black'}
});

// slow
var slowButton = document.getElementById('slowButton');
var slowLight = document.getElementById('slowLight');

slowButton.addEventListener('click', function(){
  slowLight.style.backgroundColor = (slowLight.style.backgroundColor == 'black') ? 'orange' : 'black';
});

// go
var goButton = document.getElementById('goButton');
var goLight = document.getElementById('goLight');

goButton.addEventListener('click', function(){
  goLight.style.backgroundColor = (goLight.style.backgroundColor == 'black') ? 'green' : 'black';
});
