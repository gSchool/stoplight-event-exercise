/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/



// function redClick () {
//  stopLight.style = "background-color: red";
// }
//
// stopButton.addEventListener('click', redClick)
//
// function orangeClick () {
//  slowLight.style = "background-color: orange";
// }
//
// slowButton.addEventListener('click', orangeClick)
//
// function greenClick () {
//  goLight.style = "background-color: green";
// }
//
// goButton.addEventListener('click', greenClick)

function toggleRed() {
    var clicked = document.getElementById('stopLight')
    if (clicked.className == 'bulb') {
      clicked.className = 'bulbRed';
    } else {
      clicked.className = 'bulb';
    };
}
stopButton.addEventListener("click", toggleRed);

function toggleOrange() {
    var clicked = document.getElementById('slowLight')
    if (clicked.className == 'bulb') {
      clicked.className = 'bulbOrange';
    } else {
      clicked.className = 'bulb';
    };
}
slowButton.addEventListener("click", toggleOrange);

function toggleGreen() {
    var clicked = document.getElementById('goLight')
    if (clicked.className == 'bulb') {
      clicked.className = 'bulbGreen';
    } else {
      clicked.className = 'bulb';
    };
}
goButton.addEventListener("click", toggleGreen);
