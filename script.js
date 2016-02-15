var stopButton = document.getElementById("stopButton");
var slowButton = document.getElementById("slowButton");
var goButton = document.getElementById("goButton");

stopButton.addEventListener("click", stopLight);
slowButton.addEventListener("mousedown", slowLight);
goButton.addEventListener("mousedown", goLight);

function stopLight(){
  var idTargetStop = document.getElementById("stopLight")
    //if (idTargetStop.style.backgroundColor.value = "red"){
      idTargetStop.style.backgroundColor = "red"
//} else {idTargetStop.style.backgroundColor.value = "red"}

}
function slowLight(){
  var idTargetSlow = document.getElementById("slowLight")
  idTargetSlow.style.backgroundColor = "yellow";
}
function goLight(){
  var idTargetGo = document.getElementById("goLight")
  idTargetGo.style.backgroundColor = "green";
}








/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
