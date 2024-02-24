const express = require('express');

// Object that describes everything the app can do using express
const app = express();

// Route Handler:
// Request from a browser to the server, Response, from the server to browser
app.get('/', (req, res) => {
  res.send(
  `
    <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirm" placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

app.post('/', (req, res) => {
  res.send('Account Created!');
});

app.listen(3000, () => {
  console.log('Listening on Port 3000.')
})