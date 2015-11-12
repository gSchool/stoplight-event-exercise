/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

// red light
var stopLit = document.getElementById('stopLight');
var stopBut = document.getElementById('stopButton');
// orange light
var slowLit = document.getElementById('slowLight');
var slowBut = document.getElementById('slowButton');
// green light
var goLit = document.getElementById('goLight');
var goBut =document.getElementById('goButton');

function black(){
	stopLit.style['background'] = 'black';
	slowLit.style['background'] = 'black';
	goLit.style['background'] = 'black';
};


stopBut.addEventListener('click', function() {
	stopLit.style['background'] = 'red';
	setTimeout(black, 1500);
});

slowBut.addEventListener('click', function() {
	slowLit.style['background'] = 'orange';
	setTimeout(black, 1500);
});

goBut.addEventListener('click', function(){
	goLit.style['background'] = 'green';
	setTimeout(black, 1500);
});
