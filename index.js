(function() {
  'use strict';
  // Lights
let stop = document.getElementById('stopLight');
let slow = document.getElementById('slowLight');
let go = document.getElementById('goLight');
  //Buttons
let stopButton = document.getElementById('stopButton');
let slowButton = document.getElementById('slowButton');
let goButton = document.getElementById('goButton');

stopButton.addEventListener('click', function(){
  toggleLight(stop, 'stop');
});

slowButton.addEventListener('click', function(){
  toggleLight(slow, 'slow');
});

goButton.addEventListener('click', function(){
  toggleLight(go, 'go');
});

function toggleLight(light, className) {
  light.classList.toggle(className);
};

})();
