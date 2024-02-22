#!/usr/bin/env node
const fs = require('fs'); // fs = filesystem

// What's going to go in here? - the path[, options], callback function
// '.' indicates the current directory
//? process.cwd() offers better cross-compatability, so let's use that instead though to see our current working directory
// The first possible argument that the callback function could get is an error object, often shortened to err.
fs.readdir(process.cwd(), (err, filenames) => {
  // Either err === to an error object
  if (err) {
    // Error handling
    console.log(err);
    // throw new Error(err);
  }
  // Or, err === null (all is OK)
  
});
