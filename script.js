/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var stop = document.querySelector('#stopButton');
var slow = document.querySelector('#slowButton');
var go = document.querySelector('#goButton');

stop.addEventListener('click', function () {
document.querySelector('#stopLight').style.backgroundColor= "rgb(246, 9, 37)";
('#stopLight').toggle();
});


slow.addEventListener('click', function () {
document.querySelector('#slowLight').style.backgroundColor= "rgb(251, 166, 0)";
('#slowLight').toggle();
});


go.addEventListener('click', function () {
document.querySelector('#goLight').style.backgroundColor= "rgb(11, 250, 49)";
('#goLight').toggle();
});




// stop.addEventListener('click', function () {
//   document.querySelector('#stopLight').style.backgroundColor = "rgb(242, 13, 13)";
//   document.querySelector('#slowLight').style.backgroundColor = "rgb(0, 0, 0)";
//   document.querySelector('#goLight').style.backgroundColor = "rgb(0, 0, 0)";
// });
//
// slow.addEventListener('click', function () {
//   document.querySelector('#stopLight').style.backgroundColor = "rgb(0, 0, 0)";
//   document.querySelector('#slowLight').style.backgroundColor = "rgb(243, 255, 10)";
//   document.querySelector('#goLight').style.backgroundColor = "rgb(0, 0, 0)";
// });
//
// go.addEventListener('click', function () {
//   document.querySelector('#stopLight').style.backgroundColor = "rgb(0, 0, 0)";
//   document.querySelector('#slowLight').style.backgroundColor = "rgb(0, 0, 0)";
//   document.querySelector('#goLight').style.backgroundColor = "rgb(0, 255, 3)";
// });
