  var stopButton = document.getElementById("stopButton");
  var slowButton = document.getElementById("slowButton");
  var goButton = document.getElementById("goButton");

  var stopLight = document.getElementById("stopLight");
  var slowLight =  document.getElementById("slowLight");
  var goLight =  document.getElementById("goLight");

  stopButton.addEventListener("click", function(){
    if (stopLight.style.backgroundColor !== "red"){
      stopLight.style.backgroundColor = "red";
    }
    else if (stopLight.style.backgroundColor == "red"){
      stopLight.style.backgroundColor = "black";
    }
  });

  slowButton.addEventListener("click", function(){
    if (slowLight.style.backgroundColor !== "yellow"){
      slowLight.style.backgroundColor = "yellow";
    }
    else if (slowLight.style.backgroundColor == "yellow"){
      slowLight.style.backgroundColor = "black";
    }
  });

  goButton.addEventListener("click", function(){
    if (goLight.style.backgroundColor !== "green"){
      goLight.style.backgroundColor = "green";
    }
    else if (goLight.style.backgroundColor == "green"){
      goLight.style.backgroundColor = "black";
    }
  });
