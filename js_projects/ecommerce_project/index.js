const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
// const usersRepo = require("./repositories/users");
const authRouter = require('./routes/admin/auth');

// Object that describes everything the app can do using express
const app = express();
// All route handlers will now be body parsed for us.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["laksjdhfh1029qpwoe"],
  })
);
app.use(authRouter);
// Route Handler:
// Request from a browser to the server, Response, from the server to browser


app.listen(3000, () => {
  console.log("Listening on Port 3000.");
});
