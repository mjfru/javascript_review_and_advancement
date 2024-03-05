//! Determining the Value of 'this'
/*
* Here's a handy chart to help determine what the heck the value of 'this' is:

? 1. Did you define the function with an arrow function?
* Write 'console.log(this)' on the first valid line above the arrow function. Value of 'this' in the arrow function will be equal to that console log.

console.log(this);
const printThis = () => {
  console.log(this);
}
! These two console logs should be absolutely identical.

const colors = {
  printColor() {
    console.log(this);
    const printThis = () => {
      console.log(this);
    }
    printThis();
  }
}

? 2. Did you call 'bind', 'call', or 'apply' on the function when you invoked it?
* 'this' is equal to the first argument of 'bind', 'call', or 'apply'.

const printThis = function() {
  console.log(this);
}
printThis.call({ color: 'red' }); // { color: red }

? 3. All other cases
* 'this' is equal to whatever is to the left of the '.' in the method call.

const colors = {
  printColor() {
    console.log(this);
  }
}

colors.printColor(); // 'colors' is to the left! this = colors

*/

/*
! SVG Elements - Scalable Vector Graphics
* These are HTML elements that we can use to draw shapes in our document.
* These are made with an SVG element <svg></svg> and are assigned a height and width.
* This acts as a canvas on which we can draw different shapes.
? The top-left corner of the SVG is the origin of the element and contains an X and Y axis.
Typically, negative values are not used because they would be moved out of the canvas we created!
? We can draw paths (a line with a direction), polygons, circles, ovals, etc. within this SVG canvas.
* Within our shapes <circle />, we have some additional properties like r (radius), cx (center point on x-axis), cy (center point on y-axis)
<svg height="200" width="200">
  <circle r="20" cx="30" cy="30" />
</svg>
* The content in circles is known as the 'fill' and the line that actually forms the circle is known as the 'stroke'.
? These properties are set like this: fill="transparent" stroke="blue" stroke-width="10"
? Interestingly, with the property stroke-dasharray, this will start drawing on the right-hand side of our element and goes around clockwise.
! These properties are key to producing the desired animation for this project.
*/
