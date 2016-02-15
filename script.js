/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

window.addEventListener('load', function(){


  var btns = [document.getElementById('stopButton'),
              document.getElementById('slowButton'),
              document.getElementById('goButton')
  ];

  var lights = [document.getElementById('stopLight'),
                document.getElementById('slowLight'),
                document.getElementById('goLight')
  ];


  btns.forEach(function(x){

    x.addEventListener('click', function(){

      lights.forEach(function(y){

        y.style.backgroundColor = 'black';

      });
    });
  });


  btns[0].addEventListener('click', function(){

    lights[0].style.backgroundColor = 'red';

  });

  btns[1].addEventListener('click', function(){

    lights[1].style.backgroundColor = 'yellow';

  });

  btns[2].addEventListener('click', function(){

    lights[2].style.backgroundColor = 'lightgreen';

  });

});