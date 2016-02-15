var button = document.getElementsByClassName('button');
var bulb = document.getElementsByClassName('bulb');
var color = ['red', 'yellow', 'green'];

function toggle(x) {
  for (var i = 0; i < button.length; i++) {
    bulb[i].style.backgroundColor = '#111';
  }
  bulb[x].style.backgroundColor = color[x];
}

button[0].addEventListener('click', function(){toggle(0)});
button[1].addEventListener('click', function(){toggle(1)});
button[2].addEventListener('click', function(){toggle(2)});
