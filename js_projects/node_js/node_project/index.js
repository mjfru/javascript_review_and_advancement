const fs = require("fs"); // fs = filesystem

// What's going to go in here? - the path[, options], callback function
// '.' indicates the current directory
// The first possible argument that the callback function could get is an error object, often shortened to err.
fs.readdir(".", (err, filenames) => {
  // Either err === to an error object
  if (err) {
    // Error handling
    console.log(err);
    // throw new Error(err);
  }
  console.log(filenames);
  // Or, err === null (all is OK)
});
