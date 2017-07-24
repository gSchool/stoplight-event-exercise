( function () {
    'use strict';

    // YOUR CODE HERE
    //Part I
    let stopBtn = document.querySelector( '#stopButton' );
    let stopBulb = document.querySelector( '#stopLight' );
    let slowBtn = document.querySelector( '#slowButton' );
    let slowBulb = document.querySelector( '#slowLight' );
    let goBtn = document.querySelector( '#goButton' );
    let goBulb = document.querySelector( '#goLight' );

    stopBtn.addEventListener( 'click', () => {
        if ( stopBulb.style.backgroundColor === "red" ) {
            stopBulb.style.backgroundColor = "black";
        } else {
            stopBulb.style.backgroundColor = "red"
        }

    } );

    slowBtn.addEventListener( 'click', () => {
        if ( slowBulb.style.backgroundColor === "orange" ) {
            slowBulb.style.backgroundColor = "black";
        } else {
            slowBulb.style.backgroundColor = "orange"
        }

    } );

    goBtn.addEventListener( 'click', () => {
        if ( goBulb.style.backgroundColor === "green" ) {
            goBulb.style.backgroundColor = "black";
        } else {
            goBulb.style.backgroundColor = "green"
        }

    } );


    //Part II
    // Add new DOM event listeners and handlers to log the mouse state of each button.

    //
    // - When a user's mouse enters a button, log `"Entered <textContent> button"` to the console.
    let anyBtn = document.querySelectorAll( '.button' );


    anyBtn.forEach( ( button ) => {
        button.addEventListener( 'mouseenter', () => {
            // anyBtn[event]
            console.log( '"Entered <textContent> button"' );

        } );

    } );


    // - When a user's mouse leaves a button, log `"Left <textContent> button"` to the console.
    anyBtn.forEach( ( button ) => {
        button.addEventListener( 'mouseleave', () => {
            // anyBtn[event]
            console.log( '"Left <textContent> button"' );

        } );

    } );


    // **TIP:** Each event type will need a separate event listener.

    // ## Bonus
    //
    // Add **one** DOM event listener and **one** handler to log the state of each bulb.
    //
    // - When a user clicks a button that just turned on, log`"<textContent> bulb on"` to the console.


    ///NOT WORKING..NEED HELP

    anyBtn.forEach( ( button ) => {
        button.on( 'click change', ( event ) => {
            let bulbType = event.target;
            let bulbTypeText = bulbType.textContent;

            //if bulbType.style.backgroundColor==="black" // log button off

            if ( bulbType.style.backgroundColor === "black" ) {
                console.log( bulbTypeText + " button off" );

            }
            // else log button on
            else {
                console.log( bulbTypeText + " button on" );
            }
        } )
    } );



} )();;
