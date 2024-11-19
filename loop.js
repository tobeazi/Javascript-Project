//A loop is a programming construct used to repeat a block of code multiple times until a specific condition is met. Loops help automate repititive tasks.
//TYPES
                    //1. FOR LOOP
//for loop:the loop is ideal when you know in advance how many times you want to repeat a block of code.
//for (initialization; condition; increment) {
    //code to be executed in here}


// initialization: let i = 0 sets the starting point.
// condition: i<5 keeps the loop running wile 1 is less than 5.
// increment: i++ increases i by 1  after each loop. 

for (let i=0; i<5; i++) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
}

const fruits = ["apple", "banana", "orange", "mango", "grape"]

for (let x=0; x<fruits.length; x++){
    console.log(fruits[x]);
}
                    //2. WHILE LOOP
//while loop: It is used when the number of iterations is unknown beforehand, It keeps running as long as the condition is true.
//while (condition) {
    //code to be executed}

let y = 0;
do {
    console.log(y); // Outputs: 0, 1, 2, 3, 4
    y++;
} while (y<5);

//break;

for(let y=0; y<5; y++) {
    if(y===3) break;
    console.log(y) //Outputs: 0, 1, 2, 
}

//continue;

for(let y=0; y<5; y++) {
    if(y===3) continue;
    console.log(y) //Outputs: 0, 1, 2, 4
}







