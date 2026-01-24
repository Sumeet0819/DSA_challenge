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


function moveOnesLeftZerosRight(arr) {
  let k = 0; // next position for a 1

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      // swap arr[i] and arr[k]
      let temp = arr[i];
      arr[i] = arr[k];
      arr[k] = temp;
      k++;
    }
  }

  return arr;
}

// Example
// [1, 1, 1, 1, 0, 0, 0, 0]
