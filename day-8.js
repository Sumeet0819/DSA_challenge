// Multi dimesional array

// 2D array
// let prompt = require("prompt-sync")();

// let innerArraySize = Number(prompt("Enter inner array size : "));
// let arr = new Array(innerArraySize);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = new Array(4);
// }

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     arr[i][j] = Number(prompt("Enter element : "));
//   }
// }

// console.log(arr);

// 3D array

// let array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let leftSum = 0,
//   rightSum = 0;
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     if (i == j) leftSum += array[i][j];
//     if (i + j == array.length - 1) rightSum += array[i][j];
//   }
// }

// console.log("leftSum", leftSum);
// console.log("righSum", rightSum);

// one line

let arr = Array.from({ length: 3 }, () => Array(4).fill(0));

console.log(arr);
