/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var stop = document.getElementById('stopButton');
stop.addEventListener("click", function onClick(){
  document.querySelectorAll('.bulb')[2].style.backgroundColor = "black";
  document.querySelectorAll('.bulb')[1].style.backgroundColor = "black";
  document.querySelectorAll('.bulb')[0].style.backgroundColor = "red";
});


var slow = document.getElementById('slowButton');
slow.addEventListener("click", function onClick(){
  document.querySelectorAll('.bulb')[2].style.backgroundColor = "black";
  document.querySelectorAll('.bulb')[0].style.backgroundColor = "black";
  document.querySelectorAll('.bulb')[1].style.backgroundColor = "yellow";
});


var go = document.getElementById('goButton');
go.addEventListener("click", function onClick(){
  document.querySelectorAll('.bulb')[1].style.backgroundColor = "black";
  document.querySelectorAll('.bulb')[0].style.backgroundColor = "black";
  document.querySelectorAll('.bulb')[2].style.backgroundColor = "green";
});
