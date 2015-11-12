/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var button1 = document.getElementById("stopButton");
var light1 = document.getElementById("stopLight");
button1.addEventListener("click", function() {
  if (light1.style.backgroundColor === "black") {
        light1.style.backgroundColor = "red";
        light2.style.backgroundColor = "black";
        light3.style.backgroundColor = "black";
  } else {
    light1.style.backgroundColor = "black";
    light2.style.backgroundColor = "black";
    light3.style.backgroundColor = "black";
  }
});

var button2 = document.getElementById("slowButton");
var light2 = document.getElementById("slowLight");
button2.addEventListener("click", function() {
  if (light2.style.backgroundColor === "black") {
        light1.style.backgroundColor = "black";
        light2.style.backgroundColor = "yellow";
        light3.style.backgroundColor = "black";
  } else {
    light1.style.backgroundColor = "black";
    light2.style.backgroundColor = "black";
    light3.style.backgroundColor = "black";
  }
});

var button3 = document.getElementById("goButton");
var light3 = document.getElementById("goLight");
button3.addEventListener("click", function() {
  if (light3.style.backgroundColor === "black") {
        light1.style.backgroundColor = "black";
        light2.style.backgroundColor = "black";
        light3.style.backgroundColor = "green";
  } else {
    light1.style.backgroundColor = "black";
    light2.style.backgroundColor = "black";
    light3.style.backgroundColor = "black";
  }
});
