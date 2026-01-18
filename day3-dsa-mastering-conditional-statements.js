// leap year

// function isLeapYear(){

//     let year = 2024;
//     if((year % 4===0 && year % 100 !==0) || (year % 400===0)){
//         console.log(year + " is a leap year.");
//     }    else{
//         console.log(year + " is not a leap year.");
//     }
// }

// isLeapYear();

// Discount based on quantity


// function discount(amount,dis=0){

// if(amount>=0 && amount <=5000) dis=0
// else if(amount>5000 && amount <=7000)dis=5     
// else if(amount>7000 && amount <=9000)dis=15
// else if(amount>9000) dis=20
// else   console.log("Invalid amount"); 
// console.log(amount - (dis*amount)/100);
// }
// discount(10000);


// electricty bill

// function electricityBill(units){
//     let electricityBill=0
// if(units>400){
//     electricityBill = (units-400)*8 
//     units=400
// }
// if(units>200 && units <=400 ){
//     electricityBill += (units-200)*6
//     units=200
// }
// if(units>100 && units <=200 ){
//     electricityBill += (units-100)*5
//     units=100
// }
// if(units>=0 && units <=100 ){
//     electricityBill += units*3
// }
// console.log(electricityBill);
// }    
// electricityBill(450);