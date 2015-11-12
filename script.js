/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var rdon = false;
var ydon = false;
var gdon = false;

var btn1 = document.querySelector('#stopButton');
btn1.addEventListener("click", function(){
  if(rdon === false){
    document.getElementById('stopLight').style['backgroundColor'] = 'red';
    rdon = true;
  }
  else if(rdon === true){
    document.getElementById('stopLight').style['backgroundColor'] = 'black';
    rdon = false;
  }
});


var btn2 = document.querySelector('#slowButton');
btn2.addEventListener("click", function(){
  if(ydon === false){
    document.getElementById('slowLight').style['backgroundColor'] = 'yellow';
    ydon = true;
  }
  else if(ydon === true){
    document.getElementById('slowLight').style['backgroundColor'] = 'black';
    ydon = false;
  }
});

var btn3 = document.querySelector('#goButton');
btn3.addEventListener("click", function(){
  if(gdon === false){
    document.getElementById('goLight').style['backgroundColor'] = 'green';
    gdon = true;
  }
  else if(gdon === true){
    document.getElementById('goLight').style['backgroundColor'] = 'black';
    gdon = false;
  }
});
