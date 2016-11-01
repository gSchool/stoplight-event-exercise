/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var buttons = document.getElementsByClassName('button');
var lights = document.getElementsByClassName('bulb');

var stopBtn = document.getElementById('stopButton');
var slowBtn = document.getElementById('slowButton');
var goBtn = document.getElementById('goButton');

wireButton(stopBtn);
wireButton(slowBtn);
wireButton(goBtn);


function lightFromButton(buttonElement) {
  var buttonId = buttonElement.getAttribute('id');
  var buttonAction = buttonId.replace('Button', '');
  return buttonAction + 'Light';
}

function lightOn(event) {
  var btnElement = event.srcElement;
  var lightId = lightFromButton(btnElement);
  var lightElement = document.getElementById(lightId);
  lightsOut(lightId);
  lightElement.className += ' on';
}

function lightsOut(exceptLightId) {
  for (var i = 0; i < lights.length; i++) {
    var lightId = lights[i].getAttribute('id');
    if (lightId !== exceptLightId) {
      var classes = lights[i].className;
      classes = classes.replace('on', '');
      lights[i].className = classes;
    }
  }
}

function wireButton(buttonElement) {
  buttonElement.addEventListener('click', lightOn);
}
