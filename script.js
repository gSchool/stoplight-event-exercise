/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var stopbutton = document.querySelector('#stopButton');
var stoplight = document.querySelector('#stopLight');

stopbutton.addEventListener('click', function(e){
  stoplight.style.backgroundColor = 'red';
})

var gobutton = document.querySelector('#goButton');
var golight = document.querySelector('#goLight');

gobutton.addEventListener('click', function(e){
  golight.style.backgroundColor = 'green';
})

var slowbutton = document.querySelector('#slowButton')
var slowlight = document.querySelector('#slowLight')

slowbutton.addEventListener('click', function(e){
  slowlight.style.backgroundColor = 'orange';
})
