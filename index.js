(function() {
  'use strict';
  $('#stopButton').mouseover(function(){

      console.log('Entered stop button')
  }).click(function(){
      $('#stopLight').toggleClass('stop')
  })

  $('#slowButton').mouseover(function(){
      console.log('Entered slow button')
  }).click(function(){
      $('#slowLight').toggleClass('slow')
  })

  $('#goButton').mouseover(function(){
      console.log('Entered go button')
  }).click(function(){
      $('#goLight').toggleClass('go')
  })
})();
