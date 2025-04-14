//variables - containers used to store data

//1. var - used to declare a variable that can be changed later
// keyword var = value;
var name = "Daniel"; //string

console.log(name); // output: Daniel

//2. let - used to declare a variable that can be changed later, but has block scope (modern way of declaring variables)
// keyword let = value;
let age = 30
console.log(age); // output: 30

age = 50
name = "John" //reassigning the variable name to a new value
console.log(name); // output: John
console.log(age); // output: 50

//3. const - used to declare a variable that cannot be changed later (constant value)
// keyword const = value;
const pi = 3.14; // pi is a constant value
console.log(pi); // output: 3.14
// pi = 3.14159; // this will throw an error because pi is a constant value
// console.log(pi); // output: 3.14

//4. Data types - used to define the type of data that can be stored in a variable
// 1.string - a sequence of characters enclosed in quotes (single or double)
let nameString = "Daniel"; // string
// 2.Number - a numeric value (integer or float)
let ageNumber = 30; // number(integer)
const piNumber = 3.14; // number(float)
// 3.Boolean - a true or false value
let isTrue = true; // boolean(true or false)
// 4.Null - a special value that represents "no value or no object"
let emptyValue = null; // null(no value assigned); // empty string(no characters assigned)
// 5.Undefined - a variable that has been declared but not assigned a value
let undefinedValue; // undefined(no value assigned)


// Non primitive Data Types - a data type that can hold multiple values or complex data structures
//1. Object - a collection of key-value pairs (similar to a dictionary in Python)
let person = { // object
    name: "Daniel",
    age: 30,
    isTrue: true
};

let car = { // object
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "red"
};
console.log(car.color); // output: {make: "Toyota", model: "Camry", year: 2020, color: "red"}

let fruits = { // object
    fruit1: "apple",
    fruit2: "banana",
    fruit3: "orange"
};
console.log(fruits.fruit1); // output: apple
console.log(fruits.fruit2); // output: banana

//2. Array - an ordered list of values (can be od different data types) indexed by numbers starting from 0
let colors = ["red", "green", "blue"]; // array
console.log(colors); // output: ["red", "green", "blue"]
console.log(colors[0]); // output: red (first element of the array)

let cars = ["Toyota", "Honda", "Ford", "BMW", "Mercedes", "porsche", "volvo", "vw"]; // array
console.log(cars[5]); // output: porsche (sixth element of the array)
console.log(cars[6]); // output: volvo (seventh element of the array)

//3. Function - a block of code that performs a specific task (similar to a method in Python)
// keyword function = functionName(parameter1, parameter2, ...){
function functionName(parameter1, parameter2) {
    // code to be executed
    return value; // return statement to return a value from the function
}

function greet(name) { // function
    return "Hello " + name + "!"; // concatenating string with variable name
}

console.log(greet("Daniel")); // output: Hello Daniel! (calling the function with argument "Daniel")

function greet(name, email) { // function with two parameters
    return "Hello my name is " + name + "! my email is " + email; // concatenating string with variable name and email
}
console.log(greet("Daniel", "daniel.kague@gmail.com"));

//operators - symbols that perform operations on variables and values
//1. Arithmetic operators - used to perform mathematical operations

let a = 50; // number
let b = 20; // number
console.log(a % b); // output: 10 (modulus operator - returns the remainder of a division operation)

//2. Assignment operators - used to assign values to variables
let x = 10; // assignment operator - assigns the value 10 to variable x
let y = 5; // assignment operator - assigns the value 5 to variable y
x += y; // x = x + y (adds the value of y to x and assigns the result to x)
console.log(x); // output: 15 (x is now 15)
x -= y; // x = x - y (subtracts the value of y from x and assigns the result to x)
console.log(x); // output: 10 (x is now 10)
x *= y; // x = x * y (multiplies the value of y with x and assigns the result to x)
console.log(x); // output: 50 (x is now 50) 
x /= y; // x = x / y (divides the value of x by y and assigns the result to x)
console.log(x); // output: 10 (x is now 10)
x %= y; // x = x % y (modulus operator - returns the remainder of a division operation)
console.log(x); // output: 0 (x is now 0)
x **= y; // x = x ** y (exponentiation operator - raises the value of x to the power of y and assigns the result to x)
console.log(x); // output: 0 (x is now 0)
x **= 2; // x = x ** 2 (exponentiation operator - raises the value of x to the power of 2 and assigns the result to x)
console.log(x); // output: 0 (x is now 0)

//3. Comparison operators - used to compare two values and return a boolean value (true or false)
let num1 = 10; // number
let num2 = 20; // number
// == - equal to operator (compares the values of two variables)
let isEqual = num1 == num2; // compares the values of num1 and num2
console.log(isEqual); // output: false (10 is not equal to 20)
// === - equal value and equal type operator (compares the values and types of two variables)
let isEqualStrict = num1 === num2; // compares the values and types of num1 and num2
console.log(isEqualStrict); // output: false (10 is not equal to 20)
// != - not equal to operator (compares the values of two variables)
let isNotEqual = num1 != num2; // compares the values of num1 and num2
console.log(isNotEqual); // output: true (10 is not equal to 20)
// !== - not equal value and not equal type operator (compares the values and types of two variables)
let isNotEqualStrict = num1 !== num2; // compares the values and types of num1 and num2
console.log(isNotEqualStrict); // output: true (10 is not equal to 20)
// > - greater than operator (compares the values of two variables)
let isGreater = num1 > num2; // compares the values of num1 and num2
console.log(isGreater); // output: false (10 is not greater than 20)
// < - less than operator (compares the values of two variables)
let isLess = num1 < num2; // compares the values of num1 and num2
console.log(isLess); // output: true (10 is less than 20)
// >= - greater than or equal to operator (compares the values of two variables)
let isGreaterOrEqual = num1 >= num2; // compares the values of num1 and num2
console.log(isGreaterOrEqual); // output: false (10 is not greater than or equal to 20)
// <= - less than or equal to operator (compares the values of two variables)
let isLessOrEqual = num1 <= num2; // compares the values of num1 and num2
console.log(isLessOrEqual); // output: true (10 is less than or equal to 20)

let d = 100;
let e = "200";

console.log(d == e); // output: false (100 is not equal to "200" because they are of different types)   
console.log(d === e); // output: false (100 is not equal to "200" because they are of different types)
console.log(d != e); // output: true (100 is not equal to "200" because they are of different types)
console.log(d !== e); // output: true (100 is not equal to "200" because they are of different types)
console.log(d > e); // output: false (100 is not greater than "200" because they are of different types)
console.log(d < e); // output: true (100 is less than "200" because they are of different types)
console.log(d >= e); // output: false (100 is not greater than or equal to "200" because they are of different types)
console.log(d <= e); // output: true (100 is less than or equal to "200" because they are of different types)

//4. Logical operators - used to combine two or more conditions and return a boolean value (true or false)
// && - logical AND operator (returns true if both conditions are true)
// || - logical OR operator (returns true if at least one condition is true)
// ! - logical NOT operator (returns true if the condition is false)

console.log(d < e) && (d <= e);
//output: true (100 is less than "200" and 100 is less than or equal to "200")
console.log(d > e) && (d >= e);
//output: false (100 is not greater than "200" and 100 is not greater than or equal to "200")
console.log(d > e) || (d >= e);
//output: false (100 is not greater than "200" or 100 is not greater than or equal to "200")
console.log(!(d < e));
//output: false (not true is false)

let myAge = 25;
let isLearner = true;

console.log(myAge < 25 && isLearner); // output: false (myAge is not less than 25 and isLearner is true)
console.log(myAge < 25 || isLearner); // output: true (myAge is less than 25 or isLearner is true)