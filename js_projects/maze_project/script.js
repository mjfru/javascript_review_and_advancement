// From our import in the HTML, all from the 'Matter' library.
const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;
// Mouse & Mouse Constraint adds interactivity to be able to move objects around
// Body allows us to update properties inside of shapes (velocity, for example)

// The number of cells in the horizontal / vertical edges:
// const cells = 6;
const cellsHorizontal = 8;
const cellsVertical = 8;

// The abstracted heights and widths to be reused:
const width = window.innerWidth; // Was 600
const height = window.innerHeight; // Was 600

// const unitLength = width / cells;
const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;

const engine = Engine.create();
engine.world.gravity.y = 0;
// When we create an engine, we get a world object along with it (among other things), so let's destructure that out:
const { world } = engine;
const render = Render.create({
  // Shows where we want this to be
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
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
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
  // Bottom
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  // Left
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
  // Right
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true }),
];
// Passing in the walls array to add to our world.
World.add(world, walls);
// And let's add something inside of these walls now too:
// World.add(world, Bodies.rectangle(200, 200, 50, 50));

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
const grid = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false));
// console.log(grid);

const verticals = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal - 1).fill(false));

const horizontals = Array(cellsVertical - 1)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false));

const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);

const stepThroughCell = (row, column) => {
  // If I have visited a cell at [row, column], then return.
  if (grid[row][column]) {
    return;
  }

  // Mark this cell as being visited
  grid[row][column] = true;

  // Assemble randomly-ordered list of neighbors
  const neighbors = shuffle([
    [row - 1, column, "up"],
    [row, column + 1, "right"],
    [row + 1, column, "down"],
    [row, column - 1, "left"],
  ]);

  // console.log(neighbors);

  // For each neighbor...
  for (let neighbor of neighbors) {
    // Check if that neighbor is out-of-bounds
    const [nextRow, nextColumn, direction] = neighbor;
    if (
      nextRow < 0 ||
      nextRow >= cellsVertical ||
      nextColumn < 0 ||
      nextColumn >= cellsHorizontal
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
    } else if (direction === "up") {
      horizontals[row - 1][column] = true;
    } else if (direction === "down") {
      horizontals[row][column] = true;
    }

    // Visit that next cell
    stepThroughCell(nextRow, nextColumn);
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
      columnIndex * unitLengthX + unitLengthX / 2,
      rowIndex * unitLengthY + unitLengthY,
      unitLengthX,
      5,
      {
        isStatic: true,
        label: "wall",
        render: {
          fillStyle: "teal",
        },
      }
    );
    World.add(world, wall);
  });
});

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }
    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX,
      rowIndex * unitLengthY + unitLengthY / 2,
      5,
      unitLengthY,
      {
        isStatic: true,
        label: "wall",
        render: {
          fillStyle: "orangered",
        },
      }
    );
    World.add(world, wall);
  });
});

// Creating the goal:
const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  unitLengthX * 0.7,
  unitLengthY * 0.7,
  {
    isStatic: true,
    label: "goal",
    render: {
      fillStyle: "limegreen",
    },
  }
);
World.add(world, goal);

// Creating the ball (usable object)
const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
const ball = Bodies.circle(unitLengthX / 2, unitLengthY / 2, ballRadius, {
  label: "ball",
  render: {
    fillStyle: "goldenrod",
  },
});
World.add(world, ball);

// Event listener for key press movement (ASWD)
document.addEventListener("keydown", (event) => {
  const { x, y } = ball.velocity;
  // console.log(x, y);

  if (event.keyCode === 87) {
    Body.setVelocity(ball, { x, y: y - 5 });
  }
  if (event.keyCode === 68) {
    Body.setVelocity(ball, { x: x + 5, y });
  }
  if (event.keyCode === 83) {
    Body.setVelocity(ball, { x, y: y + 5 });
  }
  if (event.keyCode === 65) {
    Body.setVelocity(ball, { x: x - 5, y });
  }
});

// Win Condition & Event:
Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    const labels = ["ball", "goal"];
    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      document.querySelector('.winner').classList.remove('hidden');
      world.gravity.y = 1;
      world.bodies.forEach((body) => {
        if (body.label === "wall") {
          Body.setStatic(body, false);
        }
      });
    }
  });
});
