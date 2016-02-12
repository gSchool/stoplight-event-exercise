/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

document.getElementById('stopButton').addEventListener('click', function(){
  var stopLight = document.getElementById('stopLight');
  document.getElementById('slowLight').style.backgroundColor = "";
  document.getElementById('goLight').style.backgroundColor = "";
  if(stopLight.style.backgroundColor === "") return stopLight.style.backgroundColor = "red";
  stopLight.style.backgroundColor = "";
});


document.getElementById('slowButton').addEventListener('click', function(){
  var slowLight = document.getElementById('slowLight');
  document.getElementById('stopLight').style.backgroundColor = "";
  document.getElementById('goLight').style.backgroundColor = "";
  if(slowLight.style.backgroundColor === "") return slowLight.style.backgroundColor = "yellow";
  slowLight.style.backgroundColor = "";
});


document.getElementById('goButton').addEventListener('click', function(){

  var goLight = document.getElementById('goLight');
  document.getElementById('stopLight').style.backgroundColor = "";
  document.getElementById('slowLight').style.backgroundColor = "";

  if(goLight.style.backgroundColor === "") return goLight.style.backgroundColor = "green";
  goLight.style.backgroundColor = "";
});
