// How data is stored and accessed in memory -> this is the basis of categorization for primitive & non-primitive data types

// Primitive datatypes : -> call by value hote h (copy me changes honge)

/*

1.String
2.Number
3.Boolean
4.null
5.undefined
6.Symbol
7.BigInt

*/

// Primitive data types in JavaScript - stored by value
// When assigned or passed, a copy is created

// 1. String - textual data
let stringExample = "Hello World";
let stringCopy = stringExample;
stringCopy = "Modified";
console.log(stringExample); // "Hello World" - original unchanged

// 2. Number - numeric values (integers and floats)
let numberExample = 42;
let numberCopy = numberExample;
numberCopy = 100;
console.log(numberExample); // 42 - original unchanged

// 3. Boolean - true or false values
let booleanExample = true;
let booleanCopy = booleanExample;
booleanCopy = false;
console.log(booleanExample); // true - original unchanged

// 4. null - intentional absence of value
let nullExample = null;
let nullCopy = nullExample;
nullCopy = "not null";
console.log(nullExample); // null - original unchanged

// 5. undefined - variable declared but not assigned
let undefinedExample;
let undefinedCopy = undefinedExample;
undefinedCopy = "defined now";
console.log(undefinedExample); // undefined - original unchanged

// 6. Symbol - unique identifier
let symbolExample = Symbol("id");
let symbolCopy = symbolExample;
console.log(symbolExample === symbolCopy); // true - same reference

// 7. BigInt - large integers beyond Number.MAX_SAFE_INTEGER
let bigIntExample = 123456789012345678901234567890n;
let bigIntCopy = bigIntExample;
bigIntCopy = 999n;
console.log(bigIntExample); // original value unchanged

// Function to demonstrate primitive type behavior
function demonstratePrimitiveTypes() {
    
    let original = 10;
    let copy = original;
    copy = 20;
    return { original, copy }; // original: 10, copy: 20
}


// Non Primitive or Reference type 

/*

1.Arrays
2.Objects
3.Funtions

*/

// Non-Primitive Data Types in JavaScript - stored by reference
// When assigned or passed, only the reference is copied, not the actual data

// 1. Arrays - ordered collections of values

const arrayExample = [1, 2, 3];

let myobj = 
{
    name: "Sachin",
    age: 25,
}

const myfunction = function()  {
    console.log("Hello ji");
}

myfunction();