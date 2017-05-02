(function() {
    'use strict';

    // buttons
    var stopButton = document.getElementById('stopButton'),
        slowButton = document.getElementById('slowButton'),
        goButton = document.getElementById('goButton');


    // bulbs
    var stopLight = document.getElementById('stopLight'),
        slowLight = document.getElementById('slowLight'),
        goLight = document.getElementById('goLight');



    stopButton.addEventListener('click', function() {
        setColor(stopLight);
    });

    slowButton.addEventListener('click', function() {
        setColor(slowLight);
    });

    goButton.addEventListener('click', function() {
        setColor(goLight);
    });



    function setColor(bulb) {
        if (bulb == stopLight) {
            bulb.style.backgroundColor= '#ff0000';
        } else if(bulb == slowLight) {
            bulb.style.backgroundColor = '#ffb90f';
        } else {
            bulb.style.backgroundColor = '#00b300';
        }

    }

})();
