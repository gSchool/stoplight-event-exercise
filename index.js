var redOn = false
let stopButton = document.getElementById('stopButton');
let stopLight = document.getElementById('stopLight');
  // add event listener to detect a click event for the stop button
  stopButton.addEventListener('click', () => {
       if (redOn === false) {
         stopLight.style.background = "red"; 
          return redOn = true;
       } else {
         stopLight.style.background = "black";
         return redOn = false;
       }
  });

var yellowOn = false
let slowButton = document.getElementById('slowButton');
let slowLight = document.getElementById('slowLight');

  slowButton.addEventListener('click', () => {
    if (yellowOn === false) {
      slowLight.style.background = "yellow"; 
       return yellowOn = true;
    } else {
      slowLight.style.background = "black";
      return yellowOn = false;
    }
});

var greenOn = false
let goButton = document.getElementById('goButton');
let goLight = document.getElementById('goLight');

  goButton.addEventListener('click', () => {
    if (greenOn === false) {
      goLight.style.background = "green"; 
       return greenOn = true;
    } else {
      goLight.style.background = "black";
      return greenOn = false;
    }
});