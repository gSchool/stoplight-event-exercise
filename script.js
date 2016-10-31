/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

$('#stopButton').click(function () {
  $('#stopLight').css('background-color', 'red');
});
$('#slowButton').click(function () {
  $('#slowLight').css('background-color', 'yellow');
});
$('#goButton').click(function () {
  $('#goLight').css('background-color', 'green');
});
