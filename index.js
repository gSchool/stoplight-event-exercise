(function() {
    'use strict';
    // YOUR CODE HERE
    var redButton = $('#stopButton');
    var yellowButton = $('#slowButton');
    var greenButton = $('#goButton');


    redButton.on('click', function(ev) {
        $('#stopLight.bulb').css("background-color", "red");
        $('#slowLight.bulb').css("background-color", "black");
        $('#goLight.bulb').css("background-color", "black");
        console.log("Entered $('#stopLight.bulb')");
    });

    yellowButton.on('click', function(ev) {
        $('#slowLight.bulb').css("background-color", "yellow");
        $('#stopLight.bulb').css("background-color", "black");
        $('#goLight.bulb').css("background-color", "black");
        console.log("Entered $('#slowLight.bulb')");
    });

    greenButton.on('click', function(ev) {
        $('#goLight.bulb').css("background-color", "green");
        $('#slowLight.bulb').css("background-color", "black");
        $('#stopLight.bulb').css("background-color", "black");
        console.log("Entered $('#goLight.bulb')");
    });



})();
