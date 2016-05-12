# Stoplight Exercise

As always, fork and clone this repo.

## Stoplight

For this exercise, you will be creating a web page that looks like a spotlight with buttons that make changes to the light. Open up `script.js` in your editor for the directions. Once completed, try out the challenges and the bonus below.

#### Challenge One: Button Click

Wire up the controls to the left of the stoplight so that when a button is clicked, the corresponding bulb will turn on and all others will turn off.

#### Challenge Two: Button Toggle

Alter your event listeners to toggle the on/off state of each bulb. All three bulbs can be on or off from now on.

#### Challenge Three: Group "Hover" Handler

* Keep your existing code, but add new event listeners on each of your buttons that log `"Entered <textContent> button"` when a user mouses over a button.

* Add new event listeners on each of your buttons that log `"Left <textContent> button"` when a user mouses out.

* Add a single event listener on all three buttons as a group. In your group event handler, log the `textContent` of each button when a user clicks the button.

#### Bonus Challenge: On/Off Message

* If the corresponding bulb is off when a user clicks a button, change the log message in your group event listener to say `"<textContent> bulb on"`

* If the corresponding bulb is on when a user clicks a button, change the log message in your group event listener to say `"<textContent> bulb off"`

![Screenshot of the stop bulb lit up](screenshot.png)

## Hints

* Retrieve a DOMElement with [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) or similar method
* Attach event listeners with [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* Set the color of a bulb with [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
* Explore the various options of [`MouseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
