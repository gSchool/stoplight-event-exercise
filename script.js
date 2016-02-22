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
