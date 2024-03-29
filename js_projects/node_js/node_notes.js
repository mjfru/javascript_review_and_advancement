//! Node JS
/*
* Node JS lets us run JavaScript directly on our machine rather than in the browser.
Node runs by utilizing its own Command Line Interface from your terminal.
No DOM exists when using Node in our terminal rather than in the browser.
? Each file is its own seperate world, we can't access other files and variables within as easily.
* With the browser, we can include libraries by using script tags but with Node, we use NPM (node package manager) to add in / install libraries and dependencies for our projects.
! To do this, we need to utilize what is known as the 'Module System'

If we have two files and want to make a variable available in one become available in another, we need to use the syntax:
? module.exports = variableName
And in the receiving file:
? const variableName = require('./original_file.js')

Behind the scenes, Node actually wraps our exports into a function to be used in any other files that require it...taking in (exports, require, module, _filename, _dirname) as arguments.

When we does this, this also updates an invisible Require Cache with the name of everything we're asking to be required as a key-value pair.
If we have two require statements, it will not execute it again, rather Node will notice that this has already been exported and lives in our Require Cache. (Can be viewed with require.cache)
! It only ever gets executed one single time.
*/

console.log('hi there!')
const message = 'hi there again'
