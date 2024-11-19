const fruits = ["Apple", "Banana", "Cherry"]

//Adding to the end
fruits.push("Mango");
console.log(fruits);

//Adding to the beginning 
fruits.unshift("Elderberry");
console.log(fruits);

//Removing Elements from an array
//Explain methods like pop, shift, and splice for removing elements

//Rempvong from the end
//fruits.pop();
//console.log(fruits);

//Removing the beginning
//fruits.shift();
//console.log(fruits);

//Removing from a specific position
fruits.splice(1, 1);
console.log(fruits);

//Modifying Elements
//show how to change elements in an array

fruits[1] = "Blueberry";
console.log(fruits);

fruits.splice(1,0, "coconut"); //the first number indicates the index, the second number indicates that nothing 
console.log(fruits);

let array = [1, 2, 3, 4, 5, 6]
array.splice(2, 3); //removes 3 elements from an index of 2
console.log(array);

//Iterating over arrays
//Introduce different ways to loop through arrays

//Using Loop
for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//USING Foreach
fruits.forEach(function(fruit) {
    console.log(fruit);
})

//Common Array Methods
//Explain more useful array methods like 




const people = [
    {name: "Alice", age: 25},
    {name: "Bobby", age: 30},
    {name: "Charlie", age: 35}
];

//Using map to create a new arrays with just the names of the people
const names = people.map(person => person.name);
console.log(names);

const ages = people.map(person => person.age);
console.log(ages);
