/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var stopbtn = document.getElementById('stopButton');
stopbtn.addEventListener('click', function() {
  document.getElementById('stopLight').style.backgroundColor = 'red';
  document.getElementById('slowLight').style.backgroundColor = 'black';
  document.getElementById('goLight').style.backgroundColor = 'black';
});

var slowbtn = document.getElementById('slowButton');
slowbtn.addEventListener('click', function() {
  document.getElementById('slowLight').style.backgroundColor = 'orange';
  document.getElementById('stopLight').style.backgroundColor = 'black';
  document.getElementById('goLight').style.backgroundColor = 'black';
});

var gobtn = document.getElementById('goButton');
gobtn.addEventListener('click', function() {
  document.getElementById('goLight').style.backgroundColor = 'green';
  document.getElementById('stopLight').style.backgroundColor = 'black';
  document.getElementById('slowLight').style.backgroundColor = 'black';  
});
