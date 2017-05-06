
(function() {
  'use strict';
  document.getElementById("stopButton").addEventListener("click", function() {
    document.getElementById("stopLight").classList.toggle('stop');
  });
  document.getElementById("stopButton").addEventListener("mouseenter", function() {
    console.log("Entered stop button");
  });
  document.getElementById("stopButton").addEventListener("mouseleave", function() {
    console.log("Leave stop button");
  });

  document.getElementById("slowButton").addEventListener("click", function() {
    document.getElementById("slowLight").classList.toggle('slow');
  });
  document.getElementById("slowButton").addEventListener("mouseenter", function() {
    console.log("Entered slow button");
  });
  document.getElementById("slowButton").addEventListener("mouseleave", function() {
    console.log("Leave slow button");
  });

  document.getElementById("goButton").addEventListener("click", function() {
    document.getElementById("goLight").classList.toggle('go');
  });
  document.getElementById("goButton").addEventListener("mouseenter", function() {
    console.log("Entered go button");
  });
  document.getElementById("goButton").addEventListener("mouseleave", function() {
    console.log("Leave go button");
  });

})();
