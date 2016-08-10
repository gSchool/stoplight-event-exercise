/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var stopButton = document.querySelector("#stopButton");
var stopLight = document.getElementById('stopLight');

stopButton.addEventListener("click", function(){
  var color;
  stopLight.style.backgroundColor === "red" ? color = "" : color = "red";
  stopLight.style.backgroundColor = color;
});

stopButton.addEventListener("mouseenter", function(){
  console.log(`Entered ${this.textContent} button`);
});

stopButton.addEventListener("mouseleave", function(){
  console.log(`Left ${this.textContent} button`);
});

var slowButton = document.querySelector("#slowButton");
var slowLight = document.getElementById('slowLight');

slowButton.addEventListener("click", function(){
  var color;
  slowLight.style.backgroundColor === "orange" ? color = "" : color = "orange";
  slowLight.style.backgroundColor = color;
});

slowButton.addEventListener("mouseenter", function(){
  console.log(`Entered ${this.textContent} button`);
});

slowButton.addEventListener("mouseleave", function(){
  console.log(`Left ${this.textContent} button`);
});

var goButton = document.querySelector("#goButton");
var goLight = document.getElementById('goLight');

goButton.addEventListener("click", function(){
  var color;
  goLight.style.backgroundColor === "green" ? color = "" : color = "green";
  goLight.style.backgroundColor = color;
});

goButton.addEventListener("mouseenter", function(){
  console.log(`Entered ${this.textContent} button`);
});

goButton.addEventListener("mouseleave", function(){
  console.log(`Left ${this.textContent} button`);
});

var controls = document.querySelector('#controls');

controls.addEventListener('click', function(event) {
  var text = event.target.textContent;
  var status;
  if (text === 'Stop') {
    status = stopLight.style.backgroundColor === 'red' ? 'on' : 'off';
  } else if (text === 'Slow') {
    status = slowLight.style.backgroundColor === 'orange' ? 'on' : 'off';
  } else {
    status = goLight.style.backgroundColor === 'green' ? 'on' : 'off';
  }
  console.log(`${text} bulb ${status}`);
});
