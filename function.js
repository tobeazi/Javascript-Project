//function
//declaration

//function functionName(parameters) {
//code to be executed
//}

function greet(name) {
    console.log("Hello," +name);
}

greet("Oluwatobi"); //Outout: Hello, Oluwatobi

function greet(name, course) {
    console.log("Hello " +name + ", you are a "+course);
}

greet("Oluwatobi", "Fullstack Developer"); //Outout: Hello, Oluwatobi





function add(a, b) {
    return a+b;
}
const sum = add(4, 5);
console.log(sum);

function multiply(x, y){
    return  x*y;
}
const product= multiply(6, 8);
console.log(product);

function divide(x, y){
    return  x/y;
}
const quotient= divide(72, 6);
console.log(quotient);

function subtract(x, y){
    return  x-y;
}
const difference= subtract(72, 6);
console.log(difference);

//function expression

//const functionName = function(parameters) {
//code to be executed
//}

const respond = function(name) {
    console.log("Hello, "+name);
};
respond("Tobi");

const addition = function(a, b) {
    return a + b;
}
const addUp = add(4, 5); 
console.log(addUp);

const multiplication = function(x, y) {
    return x * y;
}
const multiplyBoth = multiply(4, 5); 