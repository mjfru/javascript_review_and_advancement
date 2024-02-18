// From our import in the HTML, all from the 'Matter' library.
const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } =
  Matter;
// Mouse & Mouse Constraint adds interactivity to be able to move objects around

const engine = Engine.create();
// When we create an engine, we get a world object along with it (among other things), so let's destructure that out:
const { world } = engine;
const render = Render.create({
  // Shows where we want this to be
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Adds the ability to click and drag items around the screen
World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);
// Creates a shape utilizing 'Bodies'
// (Position from top left X Axis, Y Axis, Height, Width, {Options})
// const shape = Bodies.rectangle(200, 200, 50, 50, {
//   isStatic: true
// });
// Adds it to the world to get it to appear
// World.add(world, shape);

// Let's make some walls for this boilerplate:
const walls = [
  Bodies.rectangle(400, 0, 800, 40, {
    isStatic: true,
  }),
  Bodies.rectangle(400, 600, 800, 40, {
    isStatic: true,
  }),
  Bodies.rectangle(0, 300, 40, 600, {
    isStatic: true,
  }),
  Bodies.rectangle(800, 300, 40, 600, {
    isStatic: true,
  }),
];
// Passing in the walls array to add to our world.
World.add(world, walls);
// And let's add something inside of these walls now too:
World.add(world, Bodies.rectangle(200, 200, 50, 50));
