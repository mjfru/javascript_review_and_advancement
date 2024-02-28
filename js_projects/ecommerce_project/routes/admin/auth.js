const express = require("express");
const { check, validationResult } = require("express-validator");
const usersRepo = require("../../repositories/users");
const signupTemplate = require("../../views/admin/auth/signup");
const signinTemplate = require("../../views/admin/auth/signin");
const {
  requireEmail,
  requirePassword,
  requirePasswordConfirm,
  requireEmailExists,
  requireValidPasswordForUser
} = require("./validators");

// Making a sub-router to link the 'app' in index.js
const router = express.Router();

router.get("/signup", (req, res) => {
  res.send(signupTemplate({ req }));
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

//? Sanitization --> Validation
router.post(
  "/signup",
  [requireEmail, requirePassword, requirePasswordConfirm],
  async (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.send(signupTemplate({ req, errors }));
    }

    console.log(errors);
    const { email, password, passwordConfirm } = req.body;

    // Create a user in our user repo to represent this person:
    const user = await usersRepo.create({ email, password });

    // Store the id of that user inside the users cookie to identify them:
    req.session.userId = user.id; // Added by cookie session

    res.send("Account Created!");
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
  }
);

// Writing a data store from scratch...on our HDD...just for experience and fun!
// This idea is terrible for anything entering production: Will error if we try to open/write to the same file twice at the same time, won't work if we have multiple servers running, have to write the FS every time we want to update some data.

router.get("/signout", (req, res) => {
  // Nullifies a user's session
  req.session = null;
  res.send("You are now logged out.");
});

router.get("/signin", (req, res) => {
  res.send(signinTemplate({}));
});

router.post("/signin", [requireEmailExists, requireValidPasswordForUser], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(signinTemplate({ errors }));
  }
  // All of a signed-up users info is stored in the req.body so let's destructure it for easier access:
  const { email } = req.body;

  const user = await usersRepo.getOneBy({ email });

  req.session.userId = user.id;
  res.send("You are now signed in.");
  }
);

module.exports = router;
