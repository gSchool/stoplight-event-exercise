/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var light = document.getElementsByClassName("bulb");

var r = document.getElementById("stopButton");
var y = document.getElementById("slowButton");
var g = document.getElementById("goButton");


r.addEventListener("click", function(e){
  light[0].style = "background-color: red";
  light[1].style = "background-color: #111";
  light[2].style = "background-color: #111";

});

y.addEventListener("click", function(e){
  light[1].style = "background-color: yellow";
  light[2].style = "background-color: #111";
  light[0].style = "background-color: #111";
});

g.addEventListener("click", function(e){
  light[2].style = "background-color: green";
  light[0].style = "background-color: #111";
  light[1].style = "background-color: #111";
});
