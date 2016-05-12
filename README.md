# Stoplight Exercise

As always, fork and clone this repo. Submit a Pull Request when you are done.

## Stoplight

#### Challenge One: Button Click

Wire up the buttons to the left of the stoplight so that when clicked, the corresponding bulb will turn on and any others will turn off.

#### Challenge Two: Button Toggle

Alter you event listeners to toggle the on/off state of each bulb. All three lights can be on or off for this challenge.

#### Challenge Three: Hover/Group Handler

A) Keep your existing code, but add new event listeners on each of your buttons that log `"Entered [textContent] button"` when a user mouses over a button.

B) Add new event listeners on each of your buttons that log `"Left [textContent] button"` when a user mouses out.

C) Add a single event listener on all three buttons as a group. In your group event handler, log the `textContent` of each button when a user clicks the button.

![Screenshot of the stop bulb lit up](screenshot.png)

## Hints

* Retrieve a DOMElement with [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) or similar method
* Attach event listeners with [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* Set the color of a bulb with [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
* Explore the various options of [`MouseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
