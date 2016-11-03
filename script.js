/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

document.getElementById('stopButton').addEventListener('mouseover', function() {

    console.log(document.getElementById('stopLight').text = 'Entered ' + document.getElementById('stopButton').textContent + ' button');
});
document.getElementById('stopButton').addEventListener('mouseout', function() {
    console.log(document.getElementById('stopLight').text = 'Left ' + document.getElementById('stopButton').textContent + ' button');
});
//slow button functions
document.getElementById('slowButton').addEventListener('mouseover', function() {

    console.log(document.getElementById('stopLight').text = 'Entered ' + document.getElementById('slowButton').textContent + ' button');
});
document.getElementById('slowButton').addEventListener('mouseout', function() {
    console.log(document.getElementById('stopLight').text = 'Left ' + document.getElementById('slowButton').textContent + ' button');
});
//go button functions
document.getElementById('goButton').addEventListener('mouseover', function() {

    console.log(document.getElementById('goLight').text = 'Entered ' + document.getElementById('goButton').textContent + ' button');
});
document.getElementById('goButton').addEventListener('mouseout', function() {
    console.log(document.getElementById('goLight').text = 'Left ' + document.getElementById('goButton').textContent + ' button');
});
document.getElementById('controls').addEventListener('click', function() {
    console.log(event.target.textContent);
});
// toggling if one is off then all others are off
document.getElementById('stopButton').addEventListener('click', function() {
    if (document.getElementById('stopLight').style.background === 'red') {
        document.getElementById('stopLight').style.background = 'black';
    } else {
        document.getElementById('stopLight').style.background = 'red';
    }
});
document.getElementById('slowButton').addEventListener('click', function() {
    if (document.getElementById('slowLight').style.background === 'yellow') {
        document.getElementById('slowLight').style.background = 'black';
    } else {
        document.getElementById('slowLight').style.background = 'yellow';
    }
});
document.getElementById('goButton').addEventListener('click', function() {
    if (document.getElementById('goLight').style.background === 'green') {
        document.getElementById('goLight').style.background = 'black';
    } else {
        document.getElementById('goLight').style.background = 'green';
    }
});
document.getElementById('stopButton').addEventListener('click', function() {
    if (document.getElementById('slowLight').style.background === 'yellow') {
        document.getElementById('slowLight').style.background = 'black';
    } else if (document.getElementById('goLight').style.background === 'green') {
        document.getElementById('goLight').style.background = 'black';
    }
});
document.getElementById('stopButton').addEventListener('click', function() {
    if (document.getElementById('slowLight').style.background === 'yellow') {
        document.getElementById('slowLight').style.background = 'black';
    } else if (document.getElementById('goLight').style.background === 'green') {
        document.getElementById('goLight').style.background = 'black';
    }
});
document.getElementById('slowButton').addEventListener('click', function() {
    if (document.getElementById('stopLight').style.background === 'red') {
        document.getElementById('stopLight').style.background = 'black';
    } else if (document.getElementById('goLight').style.background === 'green') {
        document.getElementById('goLight').style.background = 'black';
    }
});
document.getElementById('goButton').addEventListener('click', function() {
    if (document.getElementById('slowLight').style.background === 'yellow') {
        document.getElementById('slowLight').style.background = 'black';
    } else if (document.getElementById('stopLight').style.background === 'red') {
        document.getElementById('stopLight').style.background = 'black';
    }
});
