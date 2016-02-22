/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/



function redClick () {
 stopLight.style = "background-color: red";
}

stopButton.addEventListener('click', redClick)

function orangeClick () {
 slowLight.style = "background-color: orange";
}

slowButton.addEventListener('click', orangeClick)

function greenClick () {
 goLight.style = "background-color: green";
}

goButton.addEventListener('click', greenClick)
