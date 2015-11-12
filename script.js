/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

// var container = document.getElementById('container');
// function eventHandler (event) {
//  console.log('p clicked!');
// }
// container.addEventListener('click', eventHandler)


//Stop Button
var makeRed = document.getElementById('stopButton');
function changeColorRed (click){
  document.getElementById('stopLight').style.backgroundColor='red';
  document.getElementById('slowLight').style.backgroundColor='black';
  document.getElementById('gopLight').style.backgroundColor='black';
}
makeRed.addEventListener('click', changeColorRed);

//Slow Button
var makeYellow = document.getElementById('slowButton');
function changeColorYellow (click){
  document.getElementById('slowLight').style.backgroundColor='yellow';
  document.getElementById('goLight').style.backgroundColor='black';
  document.getElementById('stopLight').style.backgroundColor='black';
}
makeYellow.addEventListener("click", changeColorYellow);

//Go Button
var makeGreen = document.getElementById('goButton');
function changeColorGreen (click){
  document.getElementById('goLight').style.backgroundColor='green';
  document.getElementById('stopLight').style.backgroundColor='black';
  document.getElementById('slowLight').style.backgroundColor='black';
}
makeGreen.addEventListener("click", changeColorGreen);
