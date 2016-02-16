/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

function $(selector){
  var newSelector;
  if(selector.charAt(0) === '.'){
    console.log("class");
    newSelector = selector.slice(1, selector.length);
    return document.getElementsByClassName(newSelector);
  } else if (selector.charAt(0) === '#'){
    console.log("id");
    newSelector = selector.slice(1, selector.length);
    return document.getElementById(newSelector);
  } else {
    console.log("element");
    return document.getElementsByTagName(selector);
  }
}

var stopButton = $('#stopButton');
var stopLight = $('#stopLight');

stopButton.addEventListener('click', function(){
  if(stopLight.style.backgroundColor === "red"){
    stopLight.style.backgroundColor = "black";
  } else {
    stopLight.style.backgroundColor = "red";
  }
}, false);

var slowButton = $('#slowButton');
var slowLight = $('#slowLight');

slowButton.addEventListener('click', function(){
  if(slowLight.style.backgroundColor === "yellow"){
    slowLight.style.backgroundColor = "black";
  } else {
    slowLight.style.backgroundColor = "yellow";
  }
}, false);

var goButton = $('#goButton');
var goLight = $('#goLight');

goButton.addEventListener('click', function(){
  if(goLight.style.backgroundColor === "green"){
    goLight.style.backgroundColor = "black";
  } else {
    goLight.style.backgroundColor = "green";
  }
}, false);
