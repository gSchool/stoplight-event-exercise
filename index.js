
(function() {
  'use strict';
  var stopButton = document.getElementById("stopButton");
  var stopLight = document.getElementById("stopLight");
  var slowButton = document.getElementById("slowButton");
  var slowLight = document.getElementById("slowLight");
  var goButton = document.getElementById("goButton");
  var goLight = document.getElementById("goLight");

  stopButton.addEventListener("click", function() {
    stopLight.classList.toggle('stop');
  });
  stopButton.addEventListener("mouseenter", function() {
    console.log("Entered " + stopButton.textContent + " Button");
  });
  stopButton.addEventListener("mouseleave", function() {
    console.log("Leave " + stopButton.textContent + " Button");
  });

  slowButton.addEventListener("click", function() {
    slowLight.classList.toggle('slow');
  });
  slowButton.addEventListener("mouseenter", function() {
    console.log("Entered " + slowButton.textContent + " Button");
  });
  slowButton.addEventListener("mouseleave", function() {
    console.log("Leave " + slowButton.textContent + " Button");
  });

  goButton.addEventListener("click", function() {
    goLight.classList.toggle('go');
  });
  goButton.addEventListener("mouseenter", function() {
    console.log("Entered " + goButton.textContent + " Button");
  });
  goButton.addEventListener("mouseleave", function() {
    console.log("Leave " + goButton.textContent + " Button");
  });
})();
