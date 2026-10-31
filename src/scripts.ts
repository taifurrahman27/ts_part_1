let myString:string="Hello World";
let myNumber:number=22;
let myBoolean:boolean=true;
let mySymbol:Symbol=Symbol("My Symbol");
let myBigInt:bigint=9007199254740991n;
let myNull:null=null;
let myUndefined:undefined=undefined;



// myString = 22; // This will give an error because myString is of type string
// myNumber = "Hello"; // This will give an error because myNumber is of type number
// myBoolean = "true"; // This will give an error because myBoolean is of type boolean
// mySymbol = "My Symbol"; // This will give an error because mySymbol is of type Symbol
// myBigInt = 9007199254740991; // This will give an error because myBigInt is of type bigint
// myNull = "Hello"; // This will give an error because myNull is of type null
// myUndefined = "Hello"; // This will give an error because myUndefined is of type undefined



const addTwo :(a: number, b: number) => number = (a, b) =>{
    return a+b
}

console.log(addTwo(5,10));
console.log(addTwo(40,50));


// Array and Tuple an readonly modifier

const myArray: string[] = ["apple", "banana", "cherry"];

// myArray.push(22); // This will give an error because myArray is of type string[] and we are trying to push a number into it

const numberArray: number[] = [1, 2, 3, 4, 5];

// numberArray.push("Hello"); // This will give an error because numberArray is of type number[] and we are trying to push a string into it

const myTuple: [string, number] = ["apple", 22];
// myTuple[0] = "date"; // This will give an error because myTuple is of type [string, number] and we are trying to assign a string to the first element
// myTuple[1] = 25; // This will give an error because myTuple is of type [string, number] and we are trying to assign a number to the second element

const dhakaLatLong:readonly [number, number]= [23.8103, 90.4125];

// dhakaLatLong[0] = 24.8103; // This will give an error because dhakaLatLong is of type readonly [number, number] and we are trying to assign a number to the first element
// dhakaLatLong[1] = 91.4125; // This will give an error because dhakaLatLong is of type readonly [number, number] and we are trying to assign a number to the second element

