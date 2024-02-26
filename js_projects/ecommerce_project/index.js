const express = require('express');
const bodyParser = require('body-parser');
const usersRepo = require('./repositories/users');

// Object that describes everything the app can do using express
const app = express();
// All route handlers will now be body parsed for us.
app.use(bodyParser.urlencoded({ extended: true }));

// Route Handler:
// Request from a browser to the server, Response, from the server to browser
app.get("/", (req, res) => {
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
  `
  );
});

// Manually-made Middleware Function (always called with 3 arguments):
// const bodyParser = (req, res, next) => {
//   if (req.method === "POST") {
//     req.on("data", (data) => {
//       const parsed = data.toString("utf8").split("&");
//       const formData = {};
//       for (let pair of parsed) {
//         const [key, value] = pair.split("=");
//         formData[key] = value;
//       }
//       req.body = formData;
//       next();
//     });
//   } else {
//     next();
//   }
// };

app.post('/',  async (req, res) => {
  // console.log(req.body);
  const { email, password, passwordConfirm } = req.body;
  const existingUser = await usersRepo.getOneBy({ email });
  if (existingUser) {
    return res.send('Email already in use.');
  }

  if (password !== passwordConfirm) {
    return res.send('Passwords must match.');
  }

  // Create a user in our user repo to represent this person:
  

  // Store the id of that user inside the users cookie to identify them:

  res.send('Account Created!');
// Get access to submitted information:
// The on method is almost identical to 'addEventListener"
// req.on('data', data => {
//   const parsed = data.toString('utf8').split('&');
//   const formData = {};
//   for (let pair of parsed) {
// Take the first element from this array and assign it to the key, the other to the value
//       const [key, value] = pair.split('=');
//       formData[key] = value;
//     }
//     console.log(formData);
//   });
});

// Writing a data store from scratch...on our HDD...just for experience and fun!
// This idea is terrible for anything entering production: Will error if we try to open/write to the same file twice at the same time, won't work if we have multiple servers running, have to write the FS every time we want to update some data.

app.listen(3000, () => {
  console.log("Listening on Port 3000.");
});
