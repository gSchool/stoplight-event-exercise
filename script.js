/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

document.getElementById('stopButton').addEventListener('click',function(){


  if (document.getElementById('goLight').style['background-color'] === 'green'){
    document.getElementById('slowLight').style['background-color'] = 'yellow';
    document.getElementById('goLight').style['background-color'] = '';
    setTimeout (function(){
      document.getElementById('slowLight').style['background-color'] = '';
      document.getElementById('stopLight').style['background-color'] = 'red';
    },5000);
  }
  else if (document.getElementById('stopLight').style['background-color'] === '') {
    document.getElementById('stopLight').style['background-color'] = 'red';
    document.getElementById('slowLight').style['background-color'] = '';
    document.getElementById('goLight').style['background-color'] = '';

  }
  else {
    document.getElementById('stopLight').style['background-color'] = '';
  }
});

document.getElementById('stopButton').addEventListener('mouseover',function(){
  console.log('Entered'+ document.getElementById('stopButton').textContent + 'button');
});

document.getElementById('stopButton').addEventListener('mouseleave',function(){
  console.log('Leaving'+ document.getElementById('stopButton').textContent + 'button');
});

document.getElementById('slowButton').addEventListener('click',function(){
  if (document.getElementById('slowLight').style['background-color'] === '') {
    document.getElementById('slowLight').style['background-color'] = 'yellow';
    document.getElementById('stopLight').style['background-color'] = '';
    document.getElementById('goLight').style['background-color'] = '';
  } else {
    document.getElementById('slowLight').style['background-color'] = '';
  }
});

document.getElementById('slowButton').addEventListener('mouseover',function(){
  console.log('Entered'+ document.getElementById('slowButton').textContent + 'button');
});

document.getElementById('slowButton').addEventListener('mouseleave',function(){
  console.log('Leaving'+ document.getElementById('slowButton').textContent + 'button');
});


document.getElementById('goButton').addEventListener('click',function(){
  if (document.getElementById('goLight').style['background-color'] === '') {
    document.getElementById('slowLight').style['background-color'] = '';
    document.getElementById('stopLight').style['background-color'] = '';
    document.getElementById('goLight').style['background-color'] = 'green';
  } else {
    document.getElementById('goLight').style['background-color'] = '';
  }
});

document.getElementById('goButton').addEventListener('mouseover',function(){
  console.log('Entered'+ document.getElementById('goButton').textContent + 'button');
});

document.getElementById('goButton').addEventListener('mouseleave',function(){
  console.log('Leaving'+ document.getElementById('goButton').textContent + 'button');
});

var buttonElements = document.getElementsByClassName('button');
for (var i = 0; i < buttonElements.length; i++) {
  buttonElements[i].addEventListener('click',function(){
    console.log(this.textContent);
  });
}
