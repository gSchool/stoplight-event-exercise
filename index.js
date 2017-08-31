(function() {
  'use strict';

  $("#stopButton").click(function() {
    $("#stopLight").toggleClass('stop');
  });

  $("#slowButton").click(function() {
    $("#slowLight").toggleClass("slow");
  });

  $("#goButton").click(function() {
    $("#goLight").toggleClass("go");
  });

}());
