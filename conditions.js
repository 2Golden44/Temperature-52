console.log("if-statement file");

// --- if statement---
// if (condition)
// code to be executed if condition is true
//}

if(1<2){
    console.log(" I am inside the if statement");
}

let studentAge=45;
let studentAge2=35;

if(studentAge==studentAge2){
console.log("Both are the same");
}

// --- if-else statement ---
//if(condition){
//     code to be executed if condition is true 
// }else{
//     code to be executed if condition is false
// }

if("Sam" =="Jesus"){
    console.log("Sam us equals to Jesus");
}else{
    console.log("Sam is different than Jesus");
}

//Challenge:
// check if the age is greater than 21
//T: display"you are an adult"
//F: display"you are underage"

let age=21;

if(age=21){
    console.log("You are an adult");
}else{
    console.log("You are underage");
}

// if-else if-else statements ---
//if(condition1){
//code to be executed if condition1 is true
//}else if(condition2){
// code to be executed if condition2 is true 
//}else{
// code to be executed if conditions are false
//}

age=75;

if(age<13){
    console.log("Child");
}else if(age<20){
    console.log("Teenager");
}else if(age<64){
    console.log("adult");
}else{
    console.log("senior");
}


// let viewersAge = prompt("Enter your age:");

// if(viewersAge<12){
//    console.log("Price = $5.00");
// }else if(viewersAge<18){
//    console.log("Price = $8.00");
// }else{
//   console.log("Price = $10.00");
// }

let temp = prompt("Enter the temp:");

if(temp<15){
    console.log("you should wear a jacket");
}else if(temp<25){
    console.log("you should wear a sweater");
}else{
    console.log("you should wear a t- shirt");
}






