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
  console.log($('.button').text());
}
