#!/usr/bin/env node
import fs from "fs"; // fs = filesystem
//? Method #2
// import * as util from "util";
import chalk from "chalk";
// const lstat = util.promisify(fs.lstat);
import * as path from "path";
//? Method #3
const { lstat } = fs.promises;

// What's going to go in here? - the path[, options], callback function
// '.' indicates the current directory
//? process.cwd() offers better cross-compatability, so let's use that instead though to see our current working directory
// The first possible argument that the callback function could get is an error object, often shortened to err.

const targetDirectory = process.argv[2] || process.cwd();

fs.readdir(targetDirectory, async (err, filenames) => {
  // Either err === to an error object
  if (err) {
    // Error handling
    console.log(err);
    // throw new Error(err);
  }
  const statPromises = filenames.map((filename) => {
    return lstat(path.join(targetDirectory, filename));
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(filenames[index]);
    } else {
      console.log(chalk.greenBright(filenames[index]));
    }
  }
  // Or, err === null (all is OK)
});

//? Method #1
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(stats);
//     });
//   });
// };
//! Option #1
//* This creates an array that will be equal to the length of the filesnames array and fill each index with a null value.
// const allStats = Array(filenames.length).fill(null);
// for (let filename of filenames) {
//   const index = filename.indexOf(filename);
//   fs.lstat(filename, (err, stats) => {
//     if (err) {
//       console.log(err);
//     }
//     allStats[index] = stats;

// The every function is built into arrays, the inner function is called for every element inside of the array it's called on.
//     const ready = allStats.every((stats) => {
//       return stats;
//     });

//     if (ready) {
//       allStats.forEach((stats, index) => {
//         console.log(filesname[index], stats.isFile());
//       })
//     }
//   });
