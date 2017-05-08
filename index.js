(function() {
  'use strict';

  // YOUR CODE HERE
  $(document).ready(function(){

    //stop button
    $('#stopButton').click(function(event){
      $('#stopLight').toggleClass('stop');
    });

    $('#stopButton').mouseenter(function(event){
      console.log('Entered ' +event.target.textContent+' button');
    });

    $('#stopButton').mouseleave(function(event){
      console.log('Left ' +event.target.textContent+' button');
    });

    //slow button
    $('#slowButton').click(function(event){
      $('#slowLight').toggleClass('slow');
    });

    $('#slowButton').mouseenter(function(event){
      console.log('Entered ' +event.target.textContent+' button');
    });

    $('#slowButton').mouseleave(function(event){
      console.log('Left ' +event.target.textContent+' button');
    });

    //go button
    $('#goButton').click(function(event){
      $('#goLight').toggleClass('go');
    });

    $('#goButton').mouseenter(function(event){
      console.log('Entered ' +event.target.textContent+' button');
    });

    $('#goButton').mouseleave(function(event){
      console.log('Left ' +event.target.textContent+' button');
    });

    //bulb state
    $('#controls').children().click(function(event){
      let text = event.target.textContent;
      if($('#traffic-light').children().hasClass(text.toLowerCase())){
        console.log(text+' bulb on');
      } else{
        console.log(text+' bulb off');
      }
    });
  });
})();
