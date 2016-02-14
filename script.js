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
var stoplight = document.getElementById('stopLight');
stopbtn.addEventListener('click', function(){
  stoplight.style.backgroundColor = (stoplight.style.backgroundColor == 'black') ? 'red' : 'black';
  });

var slowbtn = document.getElementById('slowButton');
var slowlight = document.getElementById('slowLight');
slowbtn.addEventListener('click', function(){
  slowlight.style.backgroundColor = (slowlight.style.backgroundColor == 'black') ? 'orange' : 'black';
  })

var gobtn = document.getElementById('goButton');
var golight = document.getElementById('goLight');
gobtn.addEventListener('click', function(){
  golight.style.backgroundColor = (golight.style.backgroundColor == 'black') ? 'green' : 'black';
  })
