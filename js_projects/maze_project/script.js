// From our import in the HTML, all from the 'Matter' library.
const { Engine, Render, Runner, World, Bodies } = Matter;
// Mouse & Mouse Constraint adds interactivity to be able to move objects around

// The number of cells in the horizontal / vertical edges:
const cells = 3;

// The abstracted heights and widths to be reused:
const width = 600;
const height = 600;

const unitLength = width / cells;

const engine = Engine.create();
// When we create an engine, we get a world object along with it (among other things), so let's destructure that out:
const { world } = engine;
const render = Render.create({
  // Shows where we want this to be
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width,
    height,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Creates a shape utilizing 'Bodies'
// (Position from top left X Axis, Y Axis, Height, Width, {Options})
// const shape = Bodies.rectangle(200, 200, 50, 50, {
//   isStatic: true
// });
// Adds it to the world to get it to appear
// World.add(world, shape);

// Let's make some walls for this boilerplate (essentially some rectangles on what we want to be the perimeter):
//? Using a constant variable makes it much easier to change the width and height on the fly without touching the values below:
const walls = [
  // Top
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  // Bottom
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  // Left
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  // Right
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),
];
// Passing in the walls array to add to our world.
World.add(world, walls);
// And let's add something inside of these walls now too:
World.add(world, Bodies.rectangle(200, 200, 50, 50));

// Maze Generation Grid

// For random array making:
const shuffle = (arr) => {
  let counter = arr.length;
  while (counter > 0) {
    // Gives us a random index inside the array
    const index = Math.floor(Math.random() * counter);
    counter--;

    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
};

// Option #1
// const grid = [];
// for (let i = 0; i < 3; i++) {
//   grid.push([]);
//   for (let j = 0; j < 3; j++) {
//     grid[i].push(false);
//   }
// }

// Option #2
const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));
// console.log(grid);

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

const stepThroughCell = (row, column) => {
  // If I have visited a cell at [row, column], then return.
  if (grid[row][column]) {
    return;
  }

  // Mark this cell as being visited
  grid[row][column] = true;

  // Assemble randomly-ordered list of neighbors
  const neighbors = shuffle([
    [row - 1, column, 'up'],
    [row, column + 1, "right"],
    [row + 1, column, 'down'],
    [row, column - 1, 'left']
  ]);

  // console.log(neighbors);

  // For each neighbor...
  for (let neighbor of neighbors) {
    // Check if that neighbor is out-of-bounds
    const [nextRow, nextColumn, direction] = neighbor;
    if (
      nextRow < 0 ||
      nextRow >= cells ||
      nextColumn < 0 ||
      nextColumn >= cells
    ) {
      continue;
    }
    // If we have visited that neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn]) {
      continue;
    }
    // Remove a wall from either horizontals or verticals array
    if (direction === "left") {
      verticals[row][column - 1] = true;
    } else if (direction === "right") {
      verticals[row][column] = true;
    } else if (direction === 'up') {
      horizontals[row - 1][column] = true;
    } else if (direction === 'down') {
      horizontals[row][column] = true;
    }

    // Visit that next cell
    stepThroughCell(nextRow, nextColumn)
  }
};

stepThroughCell(startRow, startColumn);
// console.log(grid);

horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLength + unitLength / 2,
      rowIndex * unitLength + unitLength,
      unitLength,
      10,
      {
        isStatic: true
      }
    );
    World.add(world, wall);
  });
});