(function() {
    'use strict';
    // YOUR CODE HERE
    var redButton = $('#stopButton');
    var yellowButton = $('#slowButton');
    var greenButton = $('#goButton');


    redButton.on('click', function(ev) {
        // $('#stopLight.bulb').bgColor = "red";
        $('#stopLight.bulb').css("background-color", "red");
        $('#slowLight.bulb').css("background-color", "black");
        $('#goLight.bulb').css("background-color", "black");
    });

    yellowButton.on('click', function(ev) {
        // $('#stopLight.bulb').bgColor = "red";
        $('#slowLight.bulb').css("background-color", "yellow");
        $('#stopLight.bulb').css("background-color", "black");
        $('#goLight.bulb').css("background-color", "black");
    });

    greenButton.on('click', function(ev) {
        // $('#stopLight.bulb').bgColor = "red";
        $('#goLight.bulb').css("background-color", "green");
        $('#slowLight.bulb').css("background-color", "black");
        $('#stopLight.bulb').css("background-color", "black");
    });



})();
