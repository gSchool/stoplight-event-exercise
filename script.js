document.getElementById('stopButton').addEventListener('click', changeColorStop);
var stopLight = document.querySelector("#stopLight");

function changeColorStop() {
  stopLight.style.backgroundColor = (stopLight.style.backgroundColor === 'red') ? 'black' : 'red';
}

document.getElementById('slowButton').addEventListener('click', changeColorSlow);
var slowLight = document.querySelector("#slowLight");

function changeColorSlow() {
  slowLight.style.backgroundColor = (slowLight.style.backgroundColor === 'yellow') ? 'black' : 'yellow';
}

document.getElementById('goButton').addEventListener('click', changeColorGo);
var goLight = document.querySelector("#goLight");

function changeColorGo() {
  goLight.style.backgroundColor = (goLight.style.backgroundColor === 'green') ? 'black' : 'green';
}
