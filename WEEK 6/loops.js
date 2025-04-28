// For loop
// Basic for loop
// for (initialization; condition; increment/decrement){
//     // code to be executed
// }

// Basic for loop example
for (let i=0; i<=5; i++){
    //console.log(`Iteration ${i}`); // output: 0, 1, 2, 3, 4
}

//while loop
let count = 0;

while (count < 5) {
    //console.log(`count: ${count}`);
    count++
}

//Do..while loop
let num = 10;

do{
    //console.log(`num: ${num}`);
    num -= 2;
}while(num > 0);

//For..of loop
const fruits = ["apple", "banana", "orange", "mango"]

for (const fruit of fruits){
    //console.log(fruit);
}


const name = "Daniel Kague"

for (const letter of name){
    //console.log(letter);
}

//for ..in loop
const person = {
    firstName: "Daniel",
    lastName: "Kague",
    age: 39,
    isStudent: false
};

for (const property in person){
    console.log(`${property}: ${person[property]}`)
};