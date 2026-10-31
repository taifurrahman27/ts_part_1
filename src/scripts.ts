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
