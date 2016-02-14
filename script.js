/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var stopButton = document.getElementById( 'stopButton' );

stopButton.addEventListener( 'click', function() {

  if( document.getElementById( 'stopLight' ).style.backgroundColor == '' ) {
  document.getElementById( 'stopLight' ).style.backgroundColor = 'red';

} else {
  document.getElementById( 'stopLight' ).style.backgroundColor = '';
}

});

var slowButton = document.getElementById('slowButton');

slowButton.addEventListener('click', function() {

  if( document.getElementById( 'slowLight' ).style.backgroundColor == '' ) {
  document.getElementById( 'slowLight' ).style.backgroundColor = 'orange';

} else {
  document.getElementById( 'slowLight' ).style.backgroundColor = '';
}
});

var goButton = document.getElementById('goButton');

goButton.addEventListener('click', function() {

  if( document.getElementById( 'goLight' ).style.backgroundColor == '' ) {
  document.getElementById( 'goLight' ).style.backgroundColor = 'green';

} else {
  document.getElementById( 'goLight' ).style.backgroundColor = '';
}
});
