/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.*/

// create function to set color of stop light and apply function to turn it off
function stopLight() {
  lightOff();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

// create function to set color of slow down  light and apply function to turn it off
function slowLight() {
  lightOff();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

// create function to set color of go light and apply function to turn it off
function goLight() {
  lightOff();
  document.getElementById('goLight').style.backgroundColor = "green";
}

// create function to turns lights off when no event is activated
function lightOff() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

// create function to activate light color on hover
function hover() {
  document.getElementById('stopButton');
}

// create function to log text content when button is clicked
function logText() {
  console.log(this.textContent);
}

// create function to log content when mouse is moved off of button
function logTextMouseOut() {
  console.log('Left ' + this.textContent + ' button.');
}

// use DOMContentLoaded to improve page load
document.addEventListener('DOMContentLoaded', function() {
  // set variables using individual button ids
  var stop = document.getElementById('stopButton');
  var slow = document.getElementById('slowButton');
  var go =document.getElementById('goButton');

  // set variables for buttons as a group
  var button = document.querySelector('h1');
  var allButtons = document.getElementById('controls');

  // stop light events
  stop.addEventListener('click', stopLight);
  stop.addEventListener('mouseover', stopLight);
  stop.addEventListener('click', logText);
  stop.addEventListener('mouseout', logTextMouseOut);

  // slow down light events
  slow.addEventListener('click', slowLight);
  slow.addEventListener('mouseover', slowLight);
  slow.addEventListener('click', logText);
  slow.addEventListener('mouseout', logTextMouseOut);

  // go light events
  go.addEventListener('click', goLight);
  go.addEventListener('mouseover', goLight);
  go.addEventListener('click', logText);
  go.addEventListener('mouseout', logTextMouseOut);

  // hover over to activate lights
  button.addEventListener('mousehover', hover);
  allButtons.addEventListener('click', logText);
});
