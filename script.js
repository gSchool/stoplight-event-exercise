/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.*/

function stopLight() {
  lightOff();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function slowLight() {
  lightOff();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function goLight() {
  lightOff();
  document.getElementById('goLight').style.backgroundColor = "green";
}

function lightOff() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

function hover() {
  document.getElementById('stopButton');
}

document.addEventListener('DOMContentLoaded', function() {
  var stop = document.getElementById('stopButton');
  stop.addEventListener('click', stopLight, true);
  stop.addEventListener('mouseover', stopLight);

  var slow = document.getElementById('slowButton');
  slow.addEventListener('click', slowLight, true);
  slow.addEventListener('mouseover', slowLight);

  var go =document.getElementById('goButton');
  go.addEventListener('click', goLight, true);
  go.addEventListener('mouseover', goLight);

  var button = document.querySelector('h1');
  button.addEventListener('mousehover', hover);
});
