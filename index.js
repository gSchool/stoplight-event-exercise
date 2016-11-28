(function() {
  'use strict';
  var stop = document.getElementById('stopButton');
  var stopL = document.getElementById('stopLight');
  stop.addEventListener('click', function() {
    stopL.classList.toggle('stop');
  })
  //
  var slow = document.getElementById('slowButton');
  var slowL = document.getElementById('slowLight');
  slow.addEventListener('click', function() {
    slowL.classList.toggle('slow');
  })
  //
  var go = document.getElementById('goButton');
  var goL = document.getElementById('goLight');
  go.addEventListener('click', function() {
    goL.classList.toggle('go');
  })
  //
  function enterListen(e) {
      console.log("Entered "+e.target.innerHTML+" button");
  }
  function leaveListen(e) {
      console.log("Left "+e.target.innerHTML+" button");
  }
  stop.addEventListener('mouseenter', enterListen);
  slow.addEventListener('mouseenter', enterListen);
  go.addEventListener('mouseenter', enterListen);
  //
  stop.addEventListener('mouseleave', leaveListen);
  slow.addEventListener('mouseleave', leaveListen);
  go.addEventListener('mouseleave', leaveListen);
})();
