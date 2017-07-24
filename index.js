(function() {
  'use strict';

  var Button = document.getElementsByClassName("button")
  var Bulb = document.getElementsByClassName("bulb")

  Button[0].addEventListener("click", function () {
    if (Bulb[0].className === "bulb") {
    Bulb[0].classList.add("stop");
  } else if (Bulb[0].className === "bulb stop") {
    Bulb[0].classList = "bulb";
    }
  })

  Button[1].addEventListener("click", function () {
    if (Bulb[1].className === "bulb") {
    Bulb[1].classList.add("slow");
  } else if (Bulb[1].className === "bulb slow") {
    Bulb[1].classList = "bulb";
    }
  })

  Button[2].addEventListener("click", function () {
    if (Bulb[2].className === "bulb") {
    Bulb[2].classList.add("go");
  } else if (Bulb[2].className === "bulb go") {
    Bulb[2].classList = "bulb";
    }
  })

})();
