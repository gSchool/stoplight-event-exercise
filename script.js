// //declare your variables (the buttons)

var stop = document.getElementById('stopButton');
var slow = document.getElementById('slowButton');
var go = document.getElementById('goButton');



stop.addEventListener('mousedown', redLight);

function redLight(){
    if(stop.clicked === false) {
      stop.clicked = true;
      document.querySelector('#stopLight').style.background ="red";
    } else {
      stop.clicked = false;
      document.querySelector('#stopLight').style.background ="black";
    }
}

slow.addEventListener('mousedown', yellowLight);


function yellowLight(){
    if(slow.clicked === false) {
      slow.clicked = true;
      document.querySelector('#slowLight').style.background ="yellow";
    } else {
      slow.clicked = false;
      document.querySelector('#slowLight').style.background ="black";
    }
}

go.addEventListener('mousedown', goLight);


function goLight(){
    if(go.clicked === false) {
      go.clicked = true;
      document.querySelector('#goLight').style.background ="green";
    } else {
      go.clicked = false;
      document.querySelector('#goLight').style.background ="black";
    }
}

// stop.addEventListener('mouseup', redOffBckgrd);

// function redOffBckgrd(){
//     document.querySelector('#stopLight').style.background ="black";
// }


// slow.addEventListener('click', yellowBackground);

// function yellowBackground(){
//     document.querySelector('#slowLight').style.background ="yellow";
// }

// go.addEventListener('click', greenBackground);

// function greenBackground(){
//     document.querySelector('#goLight').style.background ="green";
// }







// var stopLight = document.getElementById('stopLight');
// var slowLight = document.getElementById('slowLight');
// var goLight = document.getElementById('goLight');
// var goButton = document.getElementById('goButton');
// var goButton = document.getElementById('goButton');
// var goButton = document.getElementById('goButton');

// function changeBackground(elem, color){
//   elem.style.background = color;
// }


// stop.addEventListener('click',function(){changeBackground(stop, 'red');});
// slow.addEventListener('click', changeBackground(slow, 'yellow'));
// go.addEventListener('click', changeBackground(go, 'green'));
 
  

// // slow.addEventListener('click', changeBackground);
 
// //     function changeBackground(){
// //     document.querySelector('#slowLight').style.background ="yellow";
// //   }

// // go.addEventListener('click', changeBackground);
 
// //     function changeBackground(){
// //     document.querySelector('#goLight').style.background ="green";
// //   }



// // $('#stopButton').on('click', function(){    
// //   $('#stopLight').css('background-color', 'red')
// // });


