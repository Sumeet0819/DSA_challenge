// strong number

// let n =145;
// let copy = n;
// let ans =0

// while(n>0){
//    let digit=n%10;
//    let fact=1

//     for(let i=1;i<=digit;i++){
//         fact = fact * i;
//     }
//     ans = ans + fact
//     n=Math.floor(n/10)
// }
// if(copy==ans) console.log("strong number");
// else console.log("not a strong number");

// let arr = [10,20,30,40]
// arr.push(100)
// arr.unshift(101)
// arr.pop()
// console.log(arr);
// arr.shift(arr)
// console.log(arr);

// function moveOnesLeftZerosRight(arr) {
//   let k = 0; // next position for a 1

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       // swap arr[i] and arr[k]
//       let temp = arr[i];
//       arr[i] = arr[k];
//       arr[k] = temp;
//       k++;
//     }
//   }

//   return arr;
// }

// Example
// [1, 1, 1, 1, 0, 0, 0, 0]

// left rotation by k elements.

//  brute force method

// let k = 2;

// k = k % arr.length;

// for (let j = 1; j <= k; j++) {
//   let copy = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//     arr[arr.length - 1] = copy;
//   }
// }

// console.log(arr);

// 1st new version

// let temp = new Array(arr.length);

// let k =2;
// k= k% arr.length;

// for (let i = 0; i < arr.length; i++) {
// temp[i] = arr[(i+k)%arr.length]
// }
// console.log(temp);

// best version block swap reversal algo

// let arr = [1, 2, 3, 4, 5];

// let k = 2;

// k = k% arr.length;

// reverse(0,k-1);
// reverse(k,arr.length-1)
// reverse(0,arr.length-1)

// console.log(arr);

// function reverse(i,j){
//   while(i<j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++;
//     j--;

//   }
// }

//  Linear search algo

// let arr =[1,4,5,34,2,42,8,9,10,12,13]

// let target = 12;

// for(let i=0;i< arr.length;i++){
//   if (arr[i] == target) {
//     index=i;
//     break
//   }
// }

// if(index == -1) console.log("element not found");
// else console.log("found at" + " " + index + " index",arr[index]);

//  Binary Search

// arrays should be sorted

let arr = [5, 8, 13, 19, 75, 100, 150, 170];

if (binarySearch(arr, 100) == -1) console.log("not found");
else console.log("element found");

function binarySearch(arr, target) {
  let s = 0,
    e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else s = mid + 1;
  }
  return -1;
}
