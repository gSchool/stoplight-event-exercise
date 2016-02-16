/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/



 var stopButton = document.getElementById('stopButton');
 var slowButton = document.getElementById('slowButton');
 var gotButton = document.getElementById('goButton');

 var stopLight = document.getElementById('stopLight');
 var slowLight = document.getElementById('slowLight');
 var goLight = document.getElementById('goLight');

 stopButton.addEventListener('click', function() {
   stopLight.style.backgroundColor = 'red';
   slowLight.style.backgroundColor = 'black';
   goLight.style.backgroundColor = 'black';

 });

slowButton.addEventListener('click', function() {
  slowLight.style.backgroundColor = 'yellow';
  stopLight.style.backgroundColor = 'black';
  goLight.style.backgroundColor = 'black';

  });

goButton.addEventListener('click', function() {
  goLight.style.backgroundColor = 'green';
  stopLight.style.backgroundColor = 'black';
  slowLight.style.backgroundColor = 'black';
})
