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
