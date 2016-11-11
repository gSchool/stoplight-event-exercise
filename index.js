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
    stopLight.classList.toggle('stop');
  });

  slowButton.addEventListener('click', () => {
    slowLight.classList.toggle('slow');
  });

  goButton.addEventListener('click', () => {
    goLight.classList.toggle('go');
  });

  // part 2
  const handleMouseEnter = (event) => {
    console.log(`Entered ${event.target.textContent} button`);
  };

  const handleMouseLeave = (event) => {
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
      status = stopLight.classList.contains('stop') ? 'on' : 'off';
    }
    else if (event.target === slowButton) {
      status = slowLight.classList.contains('slow') ? 'on' : 'off';
    }
    else {
      status = goLight.classList.contains('go') ? 'on' : 'off';
    }

    console.log(`${event.target.textContent} bulb ${status}`);
  });
})();
