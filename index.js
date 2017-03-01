'use strict';
$(function() {

    var buttonsss = document.getElementById('controls')
    var theBulbs = document.getElementsByClassName('bulb')
    // console.log(theBulbs.);

    buttonsss.addEventListener("click", function(ev) {
        console.log(ev.target);
        $('#stopLight').css({
            backgroundColor: '#111'
        })
        $('#slowLight').css({
            backgroundColor: '#111'
        })
        $('#goLight').css({
            backgroundColor: '#111'
        })
        switch (ev.target.textContent) {
            case 'Stop':
                return document.getElementById('stopLight').style.backgroundColor = 'red';
                break;
            case 'Slow':
                return document.getElementById('slowLight').style.backgroundColor = 'orange';
                break;
            case 'Go':
                return document.getElementById('goLight').style.backgroundColor = 'green';
                break;
            default:
                theBulbs.style.backgroundColor = '#111'
        }

    })

});
