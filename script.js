var stopBtn = document.getElementById('stopButton');
var slowBtn = document.getElementById('slowButton');
var goBtn = document.getElementById('goButton');
var stopLight = document.getElementById('stopLight');
var slowLight = document.getElementById('slowLight');
var goLight = document.getElementById('goLight');



stopBtn.addEventListener('click',changeRed);

function changeRed () {
  stopLight.style.background= "red";
  slowLight.style.background= "black";
  goLight.style.background= "black";
};
slowBtn.addEventListener('click',changeYellow);

function changeYellow () {
  stopLight.style.background= "black";
  slowLight.style.background= "yellow";
  goLight.style.background= "black";
};
goBtn.addEventListener('click',changeGreen);

function changeGreen () {
  stopLight.style.background= "black";
  slowLight.style.background= "black";
  goLight.style.background= "green";
};
