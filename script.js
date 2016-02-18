/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

document.querySelector('#stopButton').addEventListener('click', redLight);

function redLight() {
  var red = document.querySelector('#stopLight');
  if (red.style.backgroundColor == 'red') {
    red.style.backgroundColor = '#111';
    return;
  }
  red.style.backgroundColor = 'red';
}

document.querySelector('#slowButton').addEventListener('click', orangeLight);

function orangeLight() {
  var orange = document.querySelector('#slowLight');
  if (orange.style.backgroundColor == 'orange') {
    orange.style.backgroundColor = '#111';
    return;
  }
  orange.style.backgroundColor = 'orange';
}

document.querySelector('#goButton').addEventListener('click', greenLight);

function greenLight() {
  var green = document.querySelector('#goLight');
  if (green.style.backgroundColor == 'green') {
    green.style.backgroundColor = '#111';
    return;
  }
  green.style.backgroundColor = 'green';
}
