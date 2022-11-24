
let body = document.getElementById('body');

var redOn = false
let stopButton = document.getElementById('stopButton');
let stopLight = document.getElementById('stopLight');
  // add event listener to detect a click event for the stop button
  stopButton.addEventListener('click', (event) => {
       if (redOn === false) {
         stopLight.style.background = "red"; 
           //if the stop light is enabled, log "<textContent> bulb on" 
           console.log(`${event.target.id} bulb on`)
          return redOn = true;
       } else {
         stopLight.style.background = "black";
         //if the stop light is disabled, log "<textContent> bulb off" 
         console.log(`${event.target.id} bulb off`)
         return redOn = false;
       }
  });

  //add event listener to detect a mouse enter event for the stop button
  stopButton.addEventListener('mouseenter', (event) => {
    console.log(`Entered ${event.target.id}`)
  });

  //add event listner to log mouse leave event for the stop button
  stopButton.addEventListener('mouseleave', () => {
    console.log('Left stop button')
  });



var yellowOn = false
let slowButton = document.getElementById('slowButton');
let slowLight = document.getElementById('slowLight');
// add event listner to detect a click event for the slow button
  slowButton.addEventListener('click', (event) => {
    if (yellowOn === false) {
      slowLight.style.background = "yellow"; 
      console.log(`${event.target.id} bulb on`)
       return yellowOn = true;
    } else {
      slowLight.style.background = "black";
      console.log(`${event.target.id} bulb off`)
      return yellowOn = false;
    }
});

//add event listener to detect a mouse event for the slow button
slowButton.addEventListener('mouseenter', () => {
  console.log('Entered slow button')
});

//add event listener to detect a mouse event for the slow button
slowButton.addEventListener('mouseleave', () => {
  console.log('Left slow button')
});

var greenOn = false
let goButton = document.getElementById('goButton');
let goLight = document.getElementById('goLight');

  goButton.addEventListener('click', (event) => {
    if (greenOn === false) {
      goLight.style.background = "green"; 
      console.log(`${event.target.id} bulb on`)
       return greenOn = true;
    } else {
      goLight.style.background = "black";
      console.log(`${event.target.id} bulb off`)
      return greenOn = false;
    }
});

//add event listener to detect a mouse event for the go button
goButton.addEventListener('mouseenter', () => {
  console.log('Entered go button')
});

//add event listener to detect a mouse event for the go button
goButton.addEventListener('mouseleave', () => {
  console.log('Left go button')
});