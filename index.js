(function() {
  'use strict';


var stopBtn = document.getElementById("stopButton");
var slowBtn = document.getElementById("slowButton");
var goBtn = document.getElementById("goButton");
var goLight = document.getElementById("goLight");
var slowLight = document.getElementById("slowLight");
var stopLight = document.getElementById("stopLight");
var buttons = document.getElementsByClassName("button");

// stopBtn.onclick = stopClick();
// slowBtn.onclick = slowClick();
// goBtn.onclick = goClick();


// stopBtn.addEventListener('click', function(event) {
//   stopClick();
// });
// goBtn.addEventListener('click', function(event) {
//   goClick();
// });
// slowBtn.addEventListener('click', function(event) {
//   slowClick();
// });

stopBtn.addEventListener('mouseover', function(event) {
  console.log("Entered " + this.textContent + " button.")
});
stopBtn.addEventListener('mouseout', function(event) {
  console.log("Left " + this.textContent + " button.")
});
goBtn.addEventListener('mouseover', function(event) {
  console.log("Entered " + this.textContent + " button.")
});
goBtn.addEventListener('mouseout', function(event) {
  console.log("Left " + this.textContent + " button.")
});
slowBtn.addEventListener('mouseover', function(event) {
  console.log("Entered " + this.textContent + " button.")
});
slowBtn.addEventListener('mouseout', function(event) {
  console.log("Left " + this.textContent + " button.")
});



  // Get the parent DIV, add click listener...
  document.getElementById("controls").addEventListener("click",function(e) {
  	// e.target was the clicked element
    if (e.target && e.target.matches("div#stopButton")) {
      console.log(e.target.textContent + " bulb " + stopClick());
  	}
    else if (e.target && e.target.matches("div#slowButton")) {
      console.log(e.target.textContent + " bulb " + slowClick());
    }
    else {
      console.log(e.target.textContent + " bulb " + goClick());
    }
  });

function slowClick() {
  if (slowLight.classList.contains("slow")) {
    slowLight.classList.remove("slow");
    return("off");
  }
  else {
    slowLight.classList.add("slow");
    return("on");
  }
}

function goClick() {
  if (goLight.classList.contains("go")) {
    goLight.classList.remove("go");
    return("off");
  }
  else {
    goLight.classList.add("go");
    return("on");
  }
}

function stopClick() {
  if (stopLight.classList.contains("stop")) {
    stopLight.classList.remove("stop");
    return("off");
  }
  else {
    stopLight.classList.add("stop");
    return("on");
  }
}

})();
