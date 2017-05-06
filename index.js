(function() {
  'use strict';
  // Part 1

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
}

//Part 2

//console log mouseenter

stopButton.addEventListener('mouseenter', function(){
  logMouseEnter('stop');
});

slowButton.addEventListener('mouseenter', function(){
  logMouseEnter('slow');
});

goButton.addEventListener('mouseenter', function(){
  logMouseEnter('go');
});

function logMouseEnter(light) {
  console.log('Entered ' + light + ' button');
}

//console log mouseleave

stopButton.addEventListener('mouseleave', function(){
  logMouseLeave('stop');
});

slowButton.addEventListener('mouseleave', function(){
  logMouseLeave('slow');
});

goButton.addEventListener('mouseleave', function(){
  logMouseLeave('go');
});

function logMouseLeave(light) {
  console.log('Left ' + light + ' button');
}

})();
