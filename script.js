/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var goL = document.getElementById('goLight');
var goB = document.getElementById('goButton');
// var goOn = goL.style.backgroundColor='green';

var sloL = document.getElementById('slowLight');
var sloB = document.getElementById('slowButton');
// var sloOn = sloL.style.backgroundColor='yellow';

var stopL = document.getElementById('stopLight');
var stopB = document.getElementById('stopButton');
// var stopOn = stopL.style.backgroundColor='red';

goB.addEventListener('click', function(){
  if (goL.style.backgroundColor==='black'){
  goL.style.backgroundColor='green';
  sloL.style.backgroundColor='black';
  stopL.style.backgroundColor='black';
}else {
  goL.style.backgroundColor='black';
  sloL.style.backgroundColor='black';
  stopL.style.backgroundColor='black';
}})


sloB.addEventListener('click', function(){
  if (sloL.style.backgroundColor==='black'){
  goL.style.backgroundColor='black';
  sloL.style.backgroundColor='yellow';
  stopL.style.backgroundColor='black';
}else {
  goL.style.backgroundColor='black';
  sloL.style.backgroundColor='black';
  stopL.style.backgroundColor='black';
}})



stopB.addEventListener('click', function(){
  if (stopL.style.backgroundColor==='black'){
  goL.style.backgroundColor='black';
  sloL.style.backgroundColor='black';
  stopL.style.backgroundColor='red';
}else {
  goL.style.backgroundColor='black';
  sloL.style.backgroundColor='black';
  stopL.style.backgroundColor='black';
}})


/*------------------------------------------------*/
