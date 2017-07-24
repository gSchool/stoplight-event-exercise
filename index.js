(function() {
  'use strict';
  // YOUR CODE HERE
  const stop = document.getElementById("stopButton");
  const stopBulb = document.getElementById("stopLight");
  const slow = document.getElementById("slowButton");
  const slowBulb = document.getElementById("slowLight");
  const go = document.getElementById("goButton");
  const goBulb = document.getElementById("goLight");
  stop.addEventListener("click", function(){
    stopBulb.classList.toggle('stop')
  })
  slow.addEventListener("click", function(){
    slowBulb.classList.toggle('slow')
  })
  go.addEventListener("click", function(){
    goBulb.classList.toggle('go')
  })
})();
