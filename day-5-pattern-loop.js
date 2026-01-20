const prompt = require("prompt-sync")()

let n = prompt("enter a number ")

// for(let i = 1; i <= n; i++) {
//     for(let j=1; j<=i;j++){
//         process.stdout.write("*")
//     }
//         console.log();
// }


// for(let i =1; i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(j+" ")
//     }
//     console.log(); 
// }

// for(let i =1; i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(64 + j))
//     }
//     console.log(); 
// }


// inverted right angled triangle

for(let i =1; i<=n;i++){
    for(let j=1;j<=n-i+1;j++){
        process.stdout.write("*")
    }
    console.log(); 
}



