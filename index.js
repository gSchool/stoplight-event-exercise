(function() {
    'use strict';

    // buttons by id
    var stopButton = document.getElementById('stopButton'),
        slowButton = document.getElementById('slowButton'),
        goButton = document.getElementById('goButton');


    // the lights
    var stopLight = document.getElementById('stopLight'),
        slowLight = document.getElementById('slowLight'),
        goLight = document.getElementById('goLight');

    // buttons class

    var btns = document.getElementsByClassName('button');

    btns[0].onmouseover = function() {
        console.log(btns[0].textContent);
    };

    btns[1].onmouseover = function() {
        console.log(btns[1].textContent);
    };

    btns[2].onmouseover = function() {
        console.log(btns[2].textContent);
    };



    //
    // function showButtonText() {
    //     for(var i = 0; i < btns.length; i++) {
    //         if()
    //     }
    // }
    //
    // showButtonText();
    //
    //




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
