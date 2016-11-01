/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/


var stopButton = document.getElementById("stopButton");
var sbText = stopButton.textContent;
stopButton.addEventListener("mouseenter", function() {
    console.log("Entered " + sbText + " button")
});

stopButton.addEventListener("mouseleave", function() {
    console.log("Left " + sbText + " button")
})

var slowButton = document.getElementById("slowButton");
var slText = slowButton.textContent;
slowButton.addEventListener("mouseenter", function() {
    console.log("Entered " + slText + " button")
});

slowButton.addEventListener("mouseleave", function() {
    console.log("Left " + slText + " button")
})

var goButton = document.getElementById("goButton");
var goText = goButton.textContent;
goButton.addEventListener("mouseenter", function() {
    console.log("Entered " + goText + " button")
});

goButton.addEventListener("mouseleave", function() {
    console.log("Left " + goText + " button")
})



var buttonArr = document.getElementsByClassName("button");
for (var i=0;i<buttonArr.length;i++) {
    var thisButton = buttonArr[i];
    thisButton.addEventListener("click", function(event) {
      var buttonPushedText = event.srcElement.textContent;
      console.log(buttonPushedText);
      switch (buttonPushedText){
          case "Stop":
          var stopLight = document.getElementById("stopLight");
          if(stopLight.style.backgroundColor ==="red"){
            stopLight.style.backgroundColor =  "#111";
          }
          else{
          stopLight.style.backgroundColor = "red";
          }
          break;

          case "Slow":
          var slowLight = document.getElementById("slowLight");
          if(slowLight.style.backgroundColor ==="yellow"){
            slowLight.style.backgroundColor =  "#111";
          }
          else{
          slowLight.style.backgroundColor = "yellow";
          }
          break;

          case "Go":
          var goLight = document.getElementById("goLight");
          if(goLight.style.backgroundColor ==="green"){
            goLight.style.backgroundColor =  "#111";
          }
          else{
          goLight.style.backgroundColor = "green";
          }
          break;

      }
    });
}
