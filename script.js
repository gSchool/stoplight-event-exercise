/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var stopBtn = document.getElementById("stopButton");
var slowBtn = document.getElementById("slowButton");
var goBtn = document.getElementById("goButton");
var stopLt = document.getElementById("stopLight");
var slowLt = document.getElementById("slowLight");
var goLt = document.getElementById("goLight");


stopBtn.addEventListener('click', function() {
  if(stopLt.style.background=="red"){
    stopLt.style.background="black";
  }
  else{
    stopLt.style.background="red";
  }
});

slowBtn.addEventListener('click', function(){
  if(slowLt.style.background=="yellow"){
    slowLt.style.background="black";
  }
  else{
    slowLt.style.background="yellow";
  }
})

goBtn.addEventListener('click', function() {
  if(goLt.style.background=="green"){
    goLt.style.background="black";
  }
  else{
    goLt.style.background="green";
  }
})
