var redButton = document.getElementById('stopButton');
redButton.addEventListener("click", stop);

var yellowButton = document.getElementById('slowButton');
yellowButton.addEventListener("click", slow);

var greenButton = document.getElementById('goButton');
greenButton.addEventListener("click", go);

function stop (){
  document.getElementsByClassName("bulb")[0].style.backgroundColor = "red";
  document.getElementsByClassName("bulb")[1].style.backgroundColor = "black";
  document.getElementsByClassName("bulb")[2].style.backgroundColor = "black";
};

function slow (){
  document.getElementsByClassName("bulb")[0].style.backgroundColor = "black";
  document.getElementsByClassName("bulb")[1].style.backgroundColor = "yellow";
  document.getElementsByClassName("bulb")[2].style.backgroundColor = "black";
};

function go (){
  document.getElementsByClassName("bulb")[0].style.backgroundColor = "black";
  document.getElementsByClassName("bulb")[1].style.backgroundColor = "black";
  document.getElementsByClassName("bulb")[2].style.backgroundColor = "green";
};
