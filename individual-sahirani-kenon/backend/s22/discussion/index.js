// Javascript Variables
// console.log("Hello World!");

/*
 [Section] Adding Comments in JS
 	1. Single line comment:
 		windows/linux : ctrl + /
 		MacOS: cmd + /

 	2. Multi line comments:
 		Windows/Linux: ctrl + shift + /
 		MacOS: cmd + shift + /

*/

console.log("My name is Kenon!");

// Variables can be used to store data within a program
let myName = "My name is Rupert!";

// We can then call this variable as much as we can/like in our program
// console.log() method is used to display the content  of variable in the browser console.
console.log(myName);
console.log(myName);
console.log(myName);

// In JS, "=" is called an assignment operator. This is used to assign value to a variable.
// syntax: let <nameofvariable> = <valueofvariable>

let myPet = "Bantay";
console.log(myPet);

// Using the "=" assignment operator, we can re-assign a value created using the let declaration.

let productName = "desktop computer";

// re-assign the value of  productName variable

productName = "Alienware Aurora";
console.log("After re-assigning values:");
console.log(productName);

// A variable created using let can be created without the use of "=" assignment operator in assigning a value. However, the variable will contain a value called "undefined"
// this is what we called variable declaration.

let productPrice;
console.log(productPrice);

// since 'let' variables can be updated, a value can be added later.
productPrice = 120000;
console.log(productPrice);

// This leads to an error: index.js Uncaught ReferenceError: Cannot access 'hello' before initialization.
// console.log(hello);

let hello;
console.log(hello);

// [Section] Variable Naming Best Practices

// 1. Descriptive
let movieTitle = "The Godfather"; // good variable name
let pokemon = 250000; // bad variable name

console.log(movieTitle);
console.log(pokemon);

// 2. Start with a lowercase letter or use camelCasing.
let LastName = "Smith"; //bad variable name for JS
let lastName = "Smith"; // good variable name for JS.

console.log(LastName);
console.log(lastName);

// 3. Do not add spaces. Use camelCase or use underscore

// let first name = "Mike";
// console.log(first name);

// camelCasing
let firstName = "Mike";
let product_description = "Lorem ipsum";
let product_id = "250000eaf6ab07";

console.log(firstName);
console.log(product_description);
console.log(product_id);

// 4. Avoid Using a reserved keyword as variable name
// reserved keywords are keywords in javascript that serves a specific function.

// let new = "New Addition";
// console.log(new);

// This works but is not encourage

let newAdd = "New Addition"
console.log(newAdd);

// [Section] Const Declaration
// const cannot be updated or re-declared
// const interest = 4.489 - will lead to uncaught SyntaxError:
// missing initializer in const declaration
// interest = 5.375;
// console.log(interest);


const pi = 3.1416;
console.log(pi);

// [Section] Data Types
let myString = '';
let country = "Philippines"
let province = "Manila";

console.log("");
console.log(myString);
console.log(country);
console.log(province);

// Numbers are use for mathematical operations

// Integers/Whole Numbers
let myNumber = 0;
let headCount = 22;
console.log(headCount);

// Decimals numbers/ Factions
let grade = 98.7
console.log(grade);


// Boolean is used to show status as true or false

let isMarried = false;
let inGoodConduct = true;
console.log(isMarried);
console.log(inGoodConduct);

// null - means intentionally empty

let spouse = null;
console.log(spouse);

// undefined - means a variable was declared but was not assigned an initial value.

let fullName;
console.log(fullName);

// Arrays are used to group data of similar types

// Syntax:
// let / const arrayName = [elementA, elementB, elementC, elementN, ...]

let grades = [98.7, 91.2, 90.2, 94.6];
console.log(grades);

let students = ["Dennis", "Eugene", "Vincent", "Alfred"];
console.log(students);

// Objects are used to represent a real world object and its characteristics.

/*
let/ const objectName = {
	propertyA: valueA,
	propertyB: valueB
}

*/

let person = {
	fullName: "Juan Dela Cruz",
	age: 35,
	isMarried: false,
	contact: ["+63917 123 4567", "8123 4567"],
	address: {
		houseNumber: "345",
		city: "Manila"
	}
};




let myGrades = {
	firstGrading: 98.7,
	secondGrading: 91.2,
	thirdGrading: 90.2,
}

console.log(person);
console.log(myGrades);