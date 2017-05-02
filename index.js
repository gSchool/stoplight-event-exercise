(function() {
  'use strict';

  // YOUR CODE HERE
  var stopBtn = document.getElementById('stopButton');
  var stopLte = document.getElementById('stopLight');
  stopBtn.addEventListener('click', activateStop);
  stopBtn.addEventListener('mouseenter', enter);
  stopBtn.addEventListener('mouseleave', leave);
  function enter(){
    console.log("Entered " + this.textContent + " button");
  }
  function leave(){
    console.log("Left " + this.textContent + " button");
  }
  function activateStop(){
    if (stopLte.style.background == "red"){
      stopLte.style.background = "black";
    } else {stop
      stopLte.style.background = "red";
    }
  }

  
  var slowBtn = document.getElementById('slowButton');
  var slowLte = document.getElementById('slowLight');
  slowBtn.addEventListener('click', activateSlow);
  slowBtn.addEventListener('mouseenter', enter);
  slowBtn.addEventListener('mouseleave', leave);
  function enter(){
    console.log("Entered " + this.textContent + " button");
  }
  function leave(){
    console.log("Left " + this.textContent + " button");
  }
  function activateSlow(){
    if (slowLte.style.background == "orange"){
      slowLte.style.background = "black";
    } else {
      slowLte.style.background = "orange";
    }
  }


  var goBtn = document.getElementById('goButton');
  var goLte = document.getElementById('goLight');
  goBtn.addEventListener('click', activateGo);
  goBtn.addEventListener('mouseenter', enter);
  goBtn.addEventListener('mouseleave', leave);

  function enter(){
    console.log("Entered " + this.textContent + " button");
  }
  function leave(){
    console.log("Left " + this.textContent + " button");
  }
  function activateGo(){
    if (goLte.style.background == "green"){
      goLte.style.background = "black";
    } else {
      goLte.style.background = "green";
    }
  }
})();
