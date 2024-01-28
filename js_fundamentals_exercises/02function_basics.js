/*
? #2 - Write a function to find the average value in an array of numbers.
avg([0, 50]) - 25
avg([75, 76, 80, 95, 100]) - 85.2
*/

//? My Solution:
function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(average([0, 50]));
console.log(average([75, 76, 80, 95, 100]));

//? Other Solution:
function average(arr) {
  let total = 0;
  for(let num of arr) {
    total += num;
  }
  let result = total / arr.length;
  return result;
}