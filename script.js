/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var red = false;
var redBtn = document.querySelector("#stopButton");
redBtn.addEventListener('click',function(){
	var light = document.querySelector("#stopLight");
	if (!red) {
		light.style.backgroundColor = 'red';
	} else {
		light.style.backgroundColor = 'black';
	}
	red = !red;
	
});

var yellow = false;
var yellowBtn = document.querySelector("#slowButton");
yellowBtn.addEventListener('click',function(){
	var light = document.querySelector("#slowLight");
	if (!yellow) {
		light.style.backgroundColor = 'yellow';
	} else {
		light.style.backgroundColor = 'black';
	}
	yellow = !yellow;
});

var green = false;
var greenBtn = document.querySelector("#goButton");
greenBtn.addEventListener('click',function(){
	var light = document.querySelector("#goLight");
	if (!green) {
		light.style.backgroundColor = 'green';
	} else {
		light.style.backgroundColor = 'black';
	}
	green = !green;
});