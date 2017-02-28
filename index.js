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
        console.log("$('#stopLight.bulb') on");
        console.log("$('#slowLight.bulb') off");
        console.log("$('#goLight.bulb') off");
    });

    yellowButton.on('click', function(ev) {
        $('#slowLight.bulb').css("background-color", "yellow");
        $('#stopLight.bulb').css("background-color", "black");
        $('#goLight.bulb').css("background-color", "black");
        console.log("Entered $('#slowLight.bulb')");
        console.log("$('#slowLight.bulb') on");
        console.log("$('#stopLight.bulb') off");
        console.log("$('#goLight.bulb') off");

    });

    greenButton.on('click', function(ev) {
        $('#goLight.bulb').css("background-color", "green");
        $('#slowLight.bulb').css("background-color", "black");
        $('#stopLight.bulb').css("background-color", "black");
        console.log("Entered $('#goLight.bulb')");
        console.log("$('#goLight.bulb') on");
        console.log("$('#slowLight.bulb') off");
        console.log("$('#stopLight.bulb') off");

    });



})();
