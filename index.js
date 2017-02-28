(function() {

  'use strict';
console.log("booya")
//pseudo-code:
// need to set up click listeners on each of the ID's of the buttons
//#stopButton, #slowbutton, #goButton
//if clicked will toggle class of : .stop .slow and .go to the html Divs of
// id="goLight" class="bulb"></div>
//get
var getStopLight = document.getElementById('stopLight')
var getStop = document.getElementById('stopButton')

getStop.addEventListener('click', function(){
getStopLight.classList.toggle("stop");
    console.log("STOP!!!")
});
var getSlowLight = document.getElementById('slowLight')
var getSlow = document.getElementById('slowButton')

getSlow.addEventListener('click', function(){
getSlowLight.classList.toggle("slow");
    console.log("slow")
});
var getGoLight = document.getElementById('goLight')
var getGo = document.getElementById('goButton')

getGo.addEventListener('click', function(){
getGoLight.classList.toggle("go");
    console.log("go")
});
// div.addEventListener('click', function(){
//   console.log('stop!!!')
// })
// btn.addEventListener("click", function(){
//       // console.log("YOU CLICKED!!");
//     var addedText =  document.getElementsByTagName("input")[0];
//     // console.log(addedText.value)
//     var newItem = addedText.value
//     console.log(newItem)
//
//     var list = document.getElementById("list")
//     var newLi = document.createElement("li"); //
//     newLi.innerText = newItem
//     theUL.append(newLi); // needs to be appended to the actual UL
//
//     });

  // YOUR CODE HERE
})();
