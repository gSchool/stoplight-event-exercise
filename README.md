# Stoplight Exercise

As always, fork and clone this repo.

![Screenshot of the stop bulb lit up](screenshot.png)

## Part 1

Add DOM event listeners to toggle the on/off state of three bulbs.

- When a user clicks on the "Stop" button, the top bulb should turn `red`.
- When a user clicks on the "Slow" button, the middle bulb should turn `orange`.
- When a user clicks on the "Go" button, the bottom bulb should turn `green`.

**TIP**: All three bulbs can be on/off independently of one another.

#### Resources

- [MDN - `Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN - `EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN - `click`](https://developer.mozilla.org/en-US/docs/Web/Events/click)
- [MDN -  `background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)

## Part 2

Add new DOM event listeners to log the mouse state of each button.

- When a user's mouse "enters" a button, log `"Entered <textContent> button"` to the console.
- When a user's mouse "leaves" a button, log `"Left <textContent> button"` to the console.

#### Resources

- [MDN - `mouseenter`](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter)
- [MDN - `mouseleave`](https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave)

## Bonus

Add **one** new DOM event listener to log the state of each bulb.

- When a user clicks a button that just turned on, log`"<textContent> bulb on"` to the console.
- When a user clicks a button that just turned off, log`"<textContent> bulb off"` to the console.
