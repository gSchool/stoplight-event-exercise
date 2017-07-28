$(document).ready(function() {
  'use strict';
$('#stopButton').click(function(){
  console.log("hey");
  $('#stopLight').toggleClass("stop");
})

$('#slowButton').click(function(){
  console.log("hi");
  $('#slowLight').toggleClass('slow');
})

$('#goButton').click(function(){
  console.log("whatsup");
  $('#goLight').toggleClass('go');
})


});
