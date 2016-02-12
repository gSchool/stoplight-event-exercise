/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var redb = document.getElementById('stopButton')

redb.addEventListener('click', function() {
  document.getElementById('stopLight').style.background='red';
});

var yellowb = document.getElementById('slowButton')

yellowb.addEventListener('click', function() {
  document.getElementById('slowLight').style.background='orange';
});

var greenb = document.getElementById('goButton')

greenb.addEventListener('click', function() {
  document.getElementById('goLight').style.background='green';
});
