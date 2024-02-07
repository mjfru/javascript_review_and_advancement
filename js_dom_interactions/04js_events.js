//! JavaScript Events

/*
* Events are what trigger changes or actions on our page. How does our page know when to add an element? When to change a color? They're done through events!
? These include: hover, onClick, doubleClick, onMouseOver, scroll, drag, drop, typing, etc.
? While all the 'triggers' for these events are different, they fortunately follow the same patterns:
        eventTarget(button)      eventTime(click)         {codeToRun}{changeColor}
        input                    presses return           {getSearchResults}
        image                    mouseover                {turnBlackAndWhite}
* First, however, let's talk about ways NOT to add events.
  ! Do not add inline JavaScript unless it's for some reason unavoidable.
  ? See button example.
  This clutters your markup even more, especially if you're using CSS in the same way...for again, some reason.
*/

/*
! addEventListeners - Specifying the event type and a callback function to run
* This is the way to go with adding events, we can trigger differents events with different functions.
  eventTarget.addEventListener('eventType', () => {codeToRun})
? Check the demos for more information!
*/

/*
! Events on Multiple Items
? See color box example.
*/

/*
! The Event Object
In our previous example, the color picker, we didn't pass anything to our changeColor function.
* However, we have access to the 'event' object, which contains information about the particular event. (Where it occured, type of event, location in nested HTML, etc.)
* This will give us information about the particular event when we press a key anywhere on the body.
? We often need to know what key is being pressed, the event object will reveal this to us.
*/

document.body.addEventListener("keypress", function (e) {
  console.log(e);
});

/*
! Key Events: keypress, keyup, keydown
* All three of these events are similar but have some distinct, useful differences.
? See the demo for more information and to play with it.
*/

// We want to pass in the 'e' because we will want to know what key was pressed
//? Key down means a key has been pressed...down. Nothing to do with directionals!
input.addEventListener("keydown", function (e) {
  console.log("Key Down!");
});

// This is for when the key bounces back up / releases
input.addEventListener("keyup", function (e) {
  console.log("Key Up!");
});

// This accepts only 'visible' inputs...letters, spaces, numbers, etc.
// Shift, tab, caps lock, etc. will not trigger it.
//? An odd quirk is that the enter / return key counts as a key press but delete does not.
//! This is important because we often listen for a 'return key press' to signify the user is done typing and is trying to submit.
input.addEventListener("keypress", function (e) {
  console.log("Key Press");
});
