var stopButton = document.getElementById("stopButton");
var slowButton = document.getElementById("slowButton");
var goButton = document.getElementById("goButton");

stopButton.addEventListener("click", stopLight);
slowButton.addEventListener("click", slowLight);
goButton.addEventListener("click", goLight);

function stopLight()
{
  var idTargetStop = document.getElementById("stopLight");
    if(idTargetStop.style.backgroundColor == 'red')
    {
      idTargetStop.style.backgroundColor = 'black';
    } else {
      idTargetStop.style.backgroundColor = 'red';
    }
}

function slowLight(){
  var idTargetSlow = document.getElementById("slowLight")
  if(idTargetSlow.style.backgroundColor == 'yellow')
  {
    idTargetSlow.style.backgroundColor = 'black';
  } else {
    idTargetSlow.style.backgroundColor = 'yellow';
  }
}
function goLight(){
  var idTargetGo = document.getElementById("goLight")
  if(idTargetGo.style.backgroundColor == 'green')
  {
    idTargetGo.style.backgroundColor = 'black';
  } else {
    idTargetGo.style.backgroundColor = 'green';
  }
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
