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
  document.getElementById('stopLight').style.backgroundColor = "red";
  document.getElementById('slowLight').style.backgroundColor = "";
  document.getElementById('goLight').style.backgroundColor = "";
});


document.getElementById('slowButton').addEventListener('click', function(){
  document.getElementById('stopLight').style.backgroundColor = "";
  document.getElementById('slowLight').style.backgroundColor = "yellow";
  document.getElementById('goLight').style.backgroundColor = "";
});


document.getElementById('goButton').addEventListener('click', function(){
  document.getElementById('stopLight').style.backgroundColor = "";
  document.getElementById('slowLight').style.backgroundColor = "";
  document.getElementById('goLight').style.backgroundColor = "green";
});
