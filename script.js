/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var MyProgram = function(){

	var red = false;
	var yellow = false;
	var green = false;
	
	var redBtn = document.querySelector("#stopButton");
	redBtn.addEventListener('click',function(){
		red = true;
		yellow = false;
		green = false;
		lightChange();
	});
	
	var yellowBtn = document.querySelector("#slowButton");
	yellowBtn.addEventListener('click',function(){
		red = false;
		yellow = true;
		green = false;
		lightChange();
	});

	var greenBtn = document.querySelector('#goButton');
	greenBtn.addEventListener('click',function(){
		red = false;
		yellow = false;
		green = true;
		lightChange();
	});


function lightChange() {

      if(red) {
      		document.querySelector('#goLight').style.backgroundColor = 'black';
      		document.querySelector('#slowLight').style.backgroundColor = 'black';
      		document.querySelector('#stopLight').style.backgroundColor = 'red';
      		red = false;
			yellow = true;
			green = false;
      } else if(yellow) {
      		document.querySelector('#goLight').style.backgroundColor = 'black';
      		document.querySelector('#slowLight').style.backgroundColor = 'yellow';
      		document.querySelector('#stopLight').style.backgroundColor = 'black';
      		red = false;
			yellow = false;
			green = true;
      } else if(green) {
      		document.querySelector('#goLight').style.backgroundColor = 'green';
      		document.querySelector('#slowLight').style.backgroundColor = 'black';
      		document.querySelector('#stopLight').style.backgroundColor = 'black';
      		red = true;
			yellow = false;
			green = false;
      }
}

var timerA;
function autoLight() {
      timerA = window.setInterval(function() { lightChange(); }, 3000);
}

function startLight() {
	red = true;
	yellow = false;
	green = false;
	autoLight();
}

function stopLight() {
      clearInterval(timerA);
}


autoLight();//call autolight on start

}();//End of program












