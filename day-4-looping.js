// sum of digits of a number using loop

// function sumOfDigits(number) {
//     let sum = 0;
//     while (number > 0) {
//     let lastDigit = number %10;
//     sum +=lastDigit;
//     number = Math.floor(number /10);
//     }
//     return sum;
// }
// console.log(sumOfDigits(2245));


// reverse a number using loop

// function reverseNumber(number) {
//     let reversed = 0;

//     while(number > 0) {
//         let lastDigit = number % 10;
//         reversed = reversed*10 + lastDigit;
//         number = Math.floor(number / 10);
//     }
// }


// autoomorphic number

// function isAutomorphic(number) {
//     let cpy = number;
//     let sqr = number * number;
//     let count =0;
//     while(number>0){
//         count++;
//         number=Math.floor(number/10);
//     }
//         if sqr % Math.pow(10,count) === cpy
// }
// console.log(isAutomorphic(76));

// let i =0;

// while(++i < 5) {
//     console.log(i);
// }


let x =1 ;

while(true){
    console.log(x);
    x++;
    if(x>3) break;    
}