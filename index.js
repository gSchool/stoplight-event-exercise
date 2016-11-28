(function() {
  'use strict';

  // YOUR CODE HERE
  var stop = document.querySelector('#stopButton');
  var stop_light = document.querySelector('#stopLight');
  var slow = document.querySelector('#slowButton');
  var slow_light = document.querySelector('#slowLight');
  var go = document.querySelector('#goButton');
  var go_light = document.querySelector('#goLight');
  function changeColorRed() {
    if (stop_light.className === 'bulb') {
      stop_light.className += ' stop';
    } else {
      stop_light.className = 'bulb';
    }
  }
  function changeColorYellow() {
    if (slow_light.className === 'bulb') {
      slow_light.className += ' slow';
    } else {
      slow_light.className = 'bulb';
    }
  }
  function changeColorGreen() {
    if (go_light.className === 'bulb') {
      go_light.className += ' go';
    } else {
      go_light.className = 'bulb';
    }
  }
  stop.addEventListener('click',changeColorRed);
  slow.addEventListener('click',changeColorYellow);
  go.addEventListener('click',changeColorGreen);

})();
