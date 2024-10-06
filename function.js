console.log("function");

// function
function sayHello(){
    console.log("Hello");
}

sayHello();//trigger/runs the fn

// function with parameters
function greet(name){
    console.log("Welcome to the system " + name);
}

greet("Seth");
greet("Andrew");

// functions that return values
function addNumbers(a,b){
    return a+b;
}

let result =addNumbers(3,5);//8
result = addNumbers(6,8);//14
console.log(result);//14

//function with default parameters

function greetinf(name="David"){
    console.log("Hello to " + name);
}

greetings("Ava");


// challenge 1

function doubleNumber(num){
let total = num *2;
console.log(total);
return total;
}

doubleNumber(4);
doubleNumber(10);

//challenge 2

function combineNames(firstName,lastName){
    return firstName + " " + lastName;
}

let studentName = combineNames("David","Golden");
console.log(David,"Golden");

// challenge 3

function convertToseconds(minutes){
    return minutes * 60;
 }
 return amount;
convertToseconds(5)
convertToseconds(10)

function sayHello2(){
    let name = prompt("Enter your name");
document.getElementById("result").innerHTML="<p> Welcome to the system " + name +"</p>";
//template string
document.getElementById("result").innerHTML ='<p> Welcome to the system $ 

}






