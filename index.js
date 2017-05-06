
(function() {
  'use strict';
  document.getElementById("stopButton").addEventListener("click", function() {
    document.getElementById("stopLight").classList.toggle('stop');
  });
  document.getElementById("slowButton").addEventListener("click", function() {
    document.getElementById("slowLight").classList.toggle('slow');
  });
  document.getElementById("goButton").addEventListener("click", function() {
    document.getElementById("goLight").classList.toggle('go');
  });
})();
