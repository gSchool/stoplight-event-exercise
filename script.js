/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var stopB = document.querySelector("#stopButton"); 
var stopL = document.querySelector("#stopLight");
var slowB = document.querySelector("#slowButton"); 
var slowL = document.querySelector("#slowLight"); 
var goB = document.querySelector("#goButton"); 
var goL = document.querySelector("#goLight"); 

stopB.onclick = turnRed; 
slowB.onclick = turnYellow; 
goB.onclick = turnGreen; 

function turnRed(){
	stopL.style["background-color"] = "red"; 
	slowL.style["background-color"] = "black"; 
	goL.style["background-color"] = "black"; 
}

function turnYellow(){ 
	slowL.style["background-color"] = "orange"; 
	stopL.style["background-color"] = "black"; 
	goL.style["background-color"] = "black"; 
}

function turnGreen(){
	goL.style["background-color"] = "green"; 
	slowL.style["background-color"] = "black"; 
	stopL.style["background-color"] = "black"; 
}
