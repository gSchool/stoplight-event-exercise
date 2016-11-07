/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

$(document).ready(function() {
  $('#stopButton').mouseover(mouseIn);
  $('#slowButton').mouseover(mouseIn);
  $('#goButton').mouseover(mouseIn);

  $('#stopButton').mouseout(mouseOut);
  $('#slowButton').mouseout(mouseOut);
  $('#goButton').mouseout(mouseOut);

  $('.button').click(buttonClick);
});

function mouseIn(event) {
  console.log('Entered <textContent> button');
}

function mouseOut(event) {
  console.log('Left <textContent> button');
}

function buttonClick(event) {
  console.log($(this).text());

  var $thisID = $(this).attr('id');
  var $stopColor = $('#stopLight').css('background-color');
  var $slowColor = $('#slowLight').css('background-color');
  var $goColor = $('#goLight').css('background-color');

  if ($thisID === 'stopButton' && $goColor === 'rgb(0, 128, 0)') {
    goOff();
    makeYellow();
    setTimeout(function() {
      makeRed();
      $('#slowLight').css('background-color', 'rgb(17, 17, 17)');
    }, 5000);
  } else if ($thisID === 'stopButton' && $stopColor === 'rgb(17, 17, 17)') {
    makeRed();
    slowOff();
    goOff();
  } else if ($thisID === 'stopButton' && $stopColor === 'rgb(255, 0, 0)') {
    stopOff();
  } else if ($thisID === 'slowButton' && $slowColor === 'rgb(17, 17, 17)') {
    makeYellow();
    stopOff();
    goOff();
  } else if ($thisID === 'slowButton' && $slowColor === 'rgb(255, 255, 0)') {
    slowOff();
  } else if ($thisID === 'goButton' && $goColor === 'rgb(17, 17, 17)') {
    makeGreen();
    stopOff();
    slowOff();
  } else {
    goOff();
  }
}

function stopOff() {
  $('#stopLight').css('background-color', 'rgb(17, 17, 17)');
}

function slowOff() {
  $('#slowLight').css('background-color', 'rgb(17, 17, 17)');
}

function goOff() {
  $('#goLight').css('background-color', 'rgb(17, 17, 17)');
}

function makeRed() {
  $('#stopLight').css('background-color', 'rgb(255, 0, 0)');
}

function makeYellow() {
  $('#slowLight').css('background-color', 'rgb(255, 255, 0)')
}

function makeGreen() {
  $('#goLight').css('background-color', 'rgb(0, 128, 0)');
}
