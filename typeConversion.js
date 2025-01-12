
console.log("Type Conversion \n");

const num = 10;
const str = "John";
const result1 = num - str;

console.log(typeof result1 );  // 10 John

console.log(num - str);  // NaN
console.log(num / str);  // NaN

const result = num / str;
console.log('results',result);  // NaN
console.log("Type of result",typeof result);  // number


// console.log(num + Number(str)); // 10 NAN

// console.log(num + parseInt(str)); //10NAN

// console.log(num + parseFloat(str)); //10NA

// console.log(num + str);//10 John

/*
console.log(Boolean(num)); //true

    console.log(Boolean(str)); //true
    console.log(Boolean(0)); //false
    console.log(Boolean(NaN)); //false
    console.log(Boolean("")); //false
    console.log(Boolean(null)); //false
    console.log(Boolean(undefined)); //false
    console.log(Boolean(false)); //false
    console.log(Boolean(true)); //true
    console.log(Boolean(" ")); //true
    console.log(Boolean("0")); //true
    console.log(Boolean("false")); //true
    console.log(Boolean("true")); //true
    console.log(Boolean("null")); //true
    console.log(Boolean("undefined")); //true
    console.log(Boolean(10)); //true
    console.log(Boolean(-10)); //true
    console.log(Boolean(0.1)); //true
    console.log(Boolean(-0.1)); //true
    console.log(Boolean(Infinity)); //true
    console.log(Boolean(-Infinity)); //true
    console.log(Boolean([])); //true
    console.log(Boolean({})); //true
    console.log(Boolean(function(){})); //true
    console.log(Boolean(()=>{})); //true
    console.log(Boolean(Symbol())); //true
    console.log(Boolean(new Date())); //true
    console.log(Boolean(new Error())); //true
    console.log(Boolean(new Map())); //true
    console.log(Boolean(new Set())); //true

*/

console.log("num is = " +num, num + Boolean(str));
console.log("num is = " +num,  Boolean(num + Boolean(str)));

/**
 * String Conversion


console.log("String Conversion \n");

console.log(String(num)); // "10"
console.log(String(str)); // "John" 
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(NaN)); // "NaN"
console.log(String(Infinity)); // "Infinity"
console.log(String(-Infinity)); // "-Infinity"
console.log(String([])); // ""
console.log(String({})); // "[object Object]"
console.log(String(function(){})); // "function(){}"
console.log(String(()=>{})); // "()=>{}"
console.log(String(Symbol())); // "Symbol()"
console.log(String(new Date())); // "Thu Jul 29 2021 14:45:00 GMT+0530 (India Standard Time)"
console.log(String(new Error())); // "Error"
console.log(String(new Map())); // "[object Map]"
console.log(String(new Set())); // "[object Set]"
console.log(String(new WeakMap())); // "[object WeakMap]"
console.log(String(new WeakSet())); // "[object WeakSet]"
console.log(String(new ArrayBuffer())); // "[object ArrayBuffer]"
 
 */


/*
Mumber Conversion

console.log("Number Conversion \n");

console.log(Number(num)); // 10
console.log(Number(str)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(NaN)); // NaN
console.log(Number(Infinity)); // Infinity
console.log(Number([])); // 0
console.log(Number({})); // NaN 
console.log(Number(function(){})); // NaN
console.log(Number(()=>{})); // NaN
console.log(Number(Symbol())); // NaN
console.log(Number(new Date())); // 1627551900000
console.log(Number(new Error())); // NaN
console.log(Number(new Map())); // NaN
console.log(Number(new Set())); // NaN
console.log(Number(new WeakMap())); // NaN

*/

console.log("\n");
console.log("Parse Type Conversion \n");

console.log( typeof parseInt(str));
console.log( typeof parseFloat(23));



console.log( str * NaN); // 10 NaN

const num1 = str * Math.PI;
console.log('typeof num1 is '+num1 + typeof num1 );


if ( num1 )
{
    console.log("str is null");
}
else
{
    console.log("str is not null");
}


console.log("\n");


/* 

1.This line No 9 log(num + str) attempts to add the number num (which is 10) to the string str (which is " John").

In JavaScript, when you try to add a number to a string, 
the JavaScript engine implicitly converts the number to a string. 

So, num (10) is converted to the string "10".
Then, string concatenation happens: "10" + " John" results in "10 John".
Therefore, this line prints "10 John" to the console.

The result is "10 John".

=========

2. This line No 11 log(num + Number(str))

This line attempts to add num (10) to the result of Number(str).

Number(str) tries to convert the string str (" John") into a number.

Since " John" starts with a space, it cannot be directly converted to a valid number.

Number(" John") will return NaN (Not-a-Number).

Now you have num (10) + NaN.

Any arithmetic operation involving NaN results in NaN.

Therefore, this line prints NaN to the console.


3.Both parseInt and parseFloat fail to convert 
the string " John" into a number due to the leading space.
Consequently, both lines will output NaN to the console.

 



 

Falsy Values
================

0: The number zero.
NaN: Not-a-Number, which represents an invalid number (e.g., the result of dividing by zero).
"": The empty string.
null: Represents the intentional absence of a value.
undefined: Represents a variable that has been declared but has not been assigned a value.   
false: The Boolean value false itself.

Truthy Values
===============

All other values that are not explicitly listed as falsy are considered truthy. This includes:
Non-zero numbers: 1, -5, 3.14, etc.
Non-empty strings: "hello", "true", "0", etc.
Objects: {} (empty object), { name: "Alice" } (object with properties)
Arrays: [] (empty array), [1, 2, 3] (array with elements)
The Boolean value true
How Falsy and Truthy Values Work

In Boolean Contexts: 
======================

When JavaScript expects a Boolean value (true or false), 
it will implicitly convert other values to their Boolean equivalent.

Falsy values are converted to false.
Truthy values are converted to true.

*/
