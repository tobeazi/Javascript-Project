//Arithmetic Operators
//1. Additions
let sum=5+3;
console.log(sum);

//2. Subtractions
let difference=10-4;
console.log(difference);

//3. Multiplication
let product=7*2;
console.log(product);

//4. Division
let quotient=20/5
console.log(quotient);

//5. Remainder
let remainder=10%3;
console,log(remainder);

//6. Power
let power=10**2;
console.log(power);

//Assignment Operators
//Assignment-assigns a value to a variable
let y =5;

//Add and assign(+=)
y+=3; // y=y+3; //8
//Subtract and assign(-=)
y+=3; // y=y-3; //

//Comparison Operators
// == is equal to
// != is not equal to
// >= is greater than or equal to
// <= is less than or equal to

//Logical Operatorss
//AND(&&): returns true if both operands are true.
let isTrue = (5>3 && 3>5); //true
//OR(||): returns true if at least one operand is true
let isFalse = (5>3 || 3>5); //true
//NOT (!): returns true if the operands are false

//CONTROL STRUCTURE
//1. Conditional Structure

//if statement: executes a block of code if a specified condition is true.
let x =4;

if (x>0) {
    console.log('x is positive');
}
//if.... else statement: Executes a block of code if a specified condition is true, otherwise another block of code is executed.

if (x>0) {
    console.log('x is positive');
} else if (x==0) {
    console.log('x is zero');
} else {
    console.log('x is negative');
}

let temperature= 15;
if (temperature>25) {
    console.log("it's a cold day!");
} else if (temperature < 15) {
    console.log("it's a cold day!")
} else {
    console.log("it's a warm day!")
}

let fruit="apple";
switch (fruit) {
    case "banana":
        console.log("it's a banana!");
        break;
    case "apple":
        console.log("it's an apple");
        break;
    case "orange":
        console,log("it's an orange!");
        break;
    default:
        console.log("unknown fruit");
}