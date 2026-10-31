"use strict";
let myString = "Hello World";
let myNumber = 22;
let myBoolean = true;
let mySymbol = Symbol("My Symbol");
let myBigInt = 9007199254740991n;
let myNull = null;
let myUndefined = undefined;
// myString = 22; // This will give an error because myString is of type string
// myNumber = "Hello"; // This will give an error because myNumber is of type number
// myBoolean = "true"; // This will give an error because myBoolean is of type boolean
// mySymbol = "My Symbol"; // This will give an error because mySymbol is of type Symbol
// myBigInt = 9007199254740991; // This will give an error because myBigInt is of type bigint
// myNull = "Hello"; // This will give an error because myNull is of type null
// myUndefined = "Hello"; // This will give an error because myUndefined is of type undefined
const addTwo = (a, b) => {
  return a + b;
};
console.log(addTwo(5, 10));
console.log(addTwo(40, 50));
// Array and Tuple an readonly modifier
const myArray = ["apple", "banana", "cherry"];
// myArray.push(22); // This will give an error because myArray is of type string[] and we are trying to push a number into it
const numberArray = [1, 2, 3, 4, 5];
// numberArray.push("Hello"); // This will give an error because numberArray is of type number[] and we are trying to push a string into it
const myTuple = ["apple", 22];
// myTuple[0] = "date"; // This will give an error because myTuple is of type [string, number] and we are trying to assign a string to the first element
// myTuple[1] = 25; // This will give an error because myTuple is of type [string, number] and we are trying to assign a number to the second element
const dhakaLatLong = [23.8103, 90.4125];
// dhakaLatLong[0] = 24.8103; // This will give an error because dhakaLatLong is of type readonly [number, number] and we are trying to assign a number to the first element
// dhakaLatLong[1] = 91.4125; // This will give an error because dhakaLatLong is of type readonly [number, number] and we are trying to assign a number to the second element
// optional and default parameters
const multiply = (a, b, c) => {
  if (c) {
    return a * b * c;
  } else {
    return a * b;
  }
};
console.log(multiply(2, 3));
console.log(multiply(2, 3, 4));
const concatName = (firstName, lastName) => {
  if (!lastName) {
    return firstName;
  }
  return firstName + " " + lastName;
};
console.log(concatName("John", "Doe"));
console.log(concatName("John", ""));

const greetings = (fullName, greeting = "Hello") => {
  console.log(greeting + " " + fullName);
  return `${greeting} ${fullName}`;
};

greetings("Mr. Switch", "Good Morning,");
greetings("Mr. Switch");
