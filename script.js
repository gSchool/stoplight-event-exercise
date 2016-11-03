/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
document.getElementById('stopButton').addEventListener('click', function(){
  if (document.getElementById('stopLight').style.backgroundColor === 'red') {
    document.getElementById('stopLight').style.backgroundColor = 'black';
  }
  else {
    document.getElementById('stopLight').style.backgroundColor = 'red';
  }
});

document.getElementById('slowButton').addEventListener('click', function(){
  if (document.getElementById('slowLight').style.backgroundColor === 'yellow') {
    document.getElementById('slowLight').style.backgroundColor = 'black';
  }
  else {
    document.getElementById('slowLight').style.backgroundColor = 'yellow';
  }
});

document.getElementById('goButton').addEventListener('click', function(){
  if (document.getElementById('goLight').style.backgroundColor === 'green') {
    document.getElementById('goLight').style.backgroundColor = 'black';
  }
  else {
    document.getElementById('goLight').style.backgroundColor = 'green';
  }
});

document.getElementById('stopButton').addEventListener('mouseover', function(){
  console.log('Entered ' + document.getElementById('stopButton').textContent + ' button');
});

document.getElementById('slowButton').addEventListener('mouseover', function(){
  console.log('Entered ' + document.getElementById('slowButton').textContent + ' button');
});

document.getElementById('goButton').addEventListener('mouseover', function(){
  console.log('Entered ' + document.getElementById('goButton').textContent + ' button');
});

document.getElementById('stopButton').addEventListener('mouseleave', function(){
  console.log('Left ' + document.getElementById('stopButton').textContent + ' button');
});

document.getElementById('slowButton').addEventListener('mouseleave', function(){
  console.log('Left ' + document.getElementById('slowButton').textContent + ' button');
});

document.getElementById('goButton').addEventListener('mouseleave', function(){
  console.log('Left ' + document.getElementById('goButton').textContent + ' button');
});

document.getElementById('controls').addEventListener('click', function(){
  console.log('Clicked ' + event.target.textContent + ' button');
});

document.getElementById('stopButton').addEventListener('click', function() {
  for (var i = 0; i < document.getElementsByClassName('bulb').length; i++) {
    document.getElementsByClassName('bulb')[i].style.backgroundColor = 'black';
  }
  document.getElementById('stopLight').style.backgroundColor = 'red';
});

document.getElementById('slowButton').addEventListener('click', function() {
  for (var i = 0; i < document.getElementsByClassName('bulb').length; i++) {
    document.getElementsByClassName('bulb')[i].style.backgroundColor = 'black';
  }
  document.getElementById('slowLight').style.backgroundColor = 'yellow';
});

document.getElementById('goButton').addEventListener('click', function() {
  for (var i = 0; i < document.getElementsByClassName('bulb').length; i++) {
    document.getElementsByClassName('bulb')[i].style.backgroundColor = 'black';
  }
  document.getElementById('goLight').style.backgroundColor = 'green';
});
