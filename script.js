/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var stopBtn = $('#stopButton');
var slowBtn = $('#slowButton');
var goBtn = $('#goButton');

$('.button').mouseover(function() {
  var text = $(this).text();
  console.log(`Entered ${text} button`);
})
