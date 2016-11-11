(function() {
  'use strict';

  const stopButton = document.querySelector('#stopButton');
  const slowButton = document.querySelector('#slowButton');
  const goButton = document.querySelector('#goButton');

  const stopLight = document.querySelector('#stopLight');
  const slowLight = document.querySelector('#slowLight');
  const goLight = document.querySelector('#goLight');

  // part 1
  stopButton.addEventListener('click', () => {
    const color = stopLight.style.backgroundColor === 'red' ? '' : 'red';

    stopLight.style.backgroundColor = color;
  });

  slowButton.addEventListener('click', () => {
    const color = slowLight.style.backgroundColor === 'orange' ? '' : 'orange';

    slowLight.style.backgroundColor = color;
  });

  goButton.addEventListener('click', () => {
    const color = goLight.style.backgroundColor === 'green' ? '' : 'green';

    goLight.style.backgroundColor = color;
  });

  // part 2
  const handleMouseEnter = function(event) {
    console.log(`Entered ${event.target.textContent} button`);
  };

  const handleMouseLeave = function(event) {
    console.log(`Left ${event.target.textContent} button`);
  };

  stopButton.addEventListener('mouseenter', handleMouseEnter);
  slowButton.addEventListener('mouseenter', handleMouseEnter);
  goButton.addEventListener('mouseenter', handleMouseEnter);

  stopButton.addEventListener('mouseleave', handleMouseLeave);
  slowButton.addEventListener('mouseleave', handleMouseLeave);
  goButton.addEventListener('mouseleave', handleMouseLeave);

  // bonus
  const controls = document.querySelector('#controls');

  controls.addEventListener('click', (event) => {
    if (event.target === controls) {
      return;
    }

    let status;

    if (event.target === stopButton) {
      status = stopLight.style.backgroundColor === 'red' ? 'on' : 'off';
    }
    else if (event.target === slowButton) {
      status = slowLight.style.backgroundColor === 'orange' ? 'on' : 'off';
    }
    else {
      status = goLight.style.backgroundColor === 'green' ? 'on' : 'off';
    }

    console.log(`${event.target.textContent} bulb ${status}`);
  });
})();
