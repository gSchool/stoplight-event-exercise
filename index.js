(function() {
  'use strict';

/* RED LIGHT */

let stop = document.getElementById("stopButton");
let red = document.getElementById('stopLight');
let enterExitStop = document.getElementById("stopButton");


enterExitStop.addEventListener('mouseenter', function() {
    console.log("Entered Stop button");
});
enterExitStop.addEventListener('mouseleave', function() {
    console.log("Left Stop button");
});

stop.addEventListener('click', function() {
    red.classList.toggle('stop');
});

/* ORANGE LIGHT */

let slow = document.getElementById("slowButton");
let orange = document.getElementById('slowLight');
let enterExitSlow = document.getElementById("slowButton");

enterExitSlow.addEventListener('mouseenter', function() {
    console.log("Entered Slow button");
});
enterExitSlow.addEventListener('mouseleave', function() {
    console.log("Left Slow button");
});
slow.addEventListener('click', function() {
    orange.classList.toggle('slow');
});

/* GREEN LIGHT */

let go = document.getElementById("goButton");
let green = document.getElementById('goLight');
let enterExitGo = document.getElementById("goButton");

enterExitGo.addEventListener('mouseenter', function() {
    console.log("Entered Go button");
});
enterExitGo.addEventListener('mouseleave', function() {
    console.log("Left Go button");
});
go.addEventListener('click', function() {
    green.classList.toggle('go');
});

})();
