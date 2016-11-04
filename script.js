/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,

  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var stopButton = document.getElementById("stopButton")

var redlight = stopButton.addEventListener("click", function() {
    var stopLight = document.getElementById("stopLight")
    console.log();
    if (stopLight.style.background !== "black" || stopLight.style.background === '') {
        stopLight.style.background = "black";
    } else {
        stopLight.style.background = "red";
    }
})

var slowButton = document.getElementById('slowButton')

var slowLight = slowButton.addEventListener("click", function() {
    var slowLight = document.getElementById('slowLight')
    if (slowLight.style.background !== "black" || slowLight.style.background === '') {
        slowLight.style.background = "black";
    } else {
        slowLight.style.background = "orange";
    }
})

var goButton = document.getElementById("goButton")

var goLight = goButton.addEventListener("click", function() {
    var goLight = document.getElementById("goLight")
    if (goLight.style.background !== "black" || goLight.style.background === '') {
        goLight.style.background = "black";
    } else {
        goLight.style.background = "green";
    }
})


// * Add a event listeners on each of your buttons that log
//`"Entered <textContent> button"` when a user mouses over a button.

var redlight = stopButton.addEventListener("mouseover", function() {
    console.log("Entered stop button");
})

var slowLight = slowButton.addEventListener("mouseover", function() {
    console.log("Entered slow button");
})

var goLight = goButton.addEventListener("mouseover", function() {
    console.log("Entered go button");
})

//Add new event listeners on each of your buttons that log `"Left <textContent> button"`
//when a user mouses out.

var redLight = stopButton.addEventListener("mouseleave", function() {
    console.log("Left stop button");
})

var slowLight = slowButton.addEventListener("mouseover", function() {
    console.log("Left slow button");
})

var goLight = goButton.addEventListener("mouseover", function() {
    console.log("Left go button");
})

//Add a single event listener on all three buttons as a group. In your group event handler,
//log the `textContent` of each button when a user clicks the button.

var buttonListener = document.getElementById('controls')

var buttonClick = buttonListener.addEventListener("click", function(event) {
    console.log(event.target.textContent);
})
