// console.log("Happy Wednesday!");

//Javascript ES6 Updates
// [SECTION] Exponent Operator:
    // Syntax:
        // basenumber ** exponent;

const firstNum = 8 ** 2;
console.log("Result from Exponent Operator:");
console.log(firstNum);

    // Syntax:
        // Math.pow(baseNumber, exponent);

let secondNum = Math.pow(8, 3);
console.log("Result from using Math.pow()");
console.log(secondNum);

// [SECTION] Template Literals
    // Allows to write strings without using concatenation(+);
    // Greatly helps with code readibility;
        // Syntax:
        // `String`;

let myName = "John";
// Pre-Template Literals
let message = "Hello" + myName + "! Welcome to Programming";
console.log(message);
// Sting using template literal:
let anotherMessage = `Hello ${myName}! Welcome to Programming!`;
console.log(anotherMessage);

//Multi-line string using Template Literals
let thirdMessage = `${myName} attanded a math competition.
    He won it by solving the problem 8**3 with the solution of
    ${firstNum}.`
console.log(thirdMessage);

// Template Literals allows us to write strings with embedded
// Javascript expression.

const interestRate = 1;
const principal = 1000;

console.log(`The interest on your savings account is : ${principal * interestRate}`);

// [SECTION] Array Destructure
// Allows us to unpack elements in arrays into distinct variables.
// Allows us to name array elements with variables instead of using index number.

// Syntax:
    // let/const [variableName0, variableName1, variableName2, ...] = arrayName;

const fullName = ["Juan", "Dela", "Cruz"];

console.log("fullName array befor Array Destructuring:");
console.log(fullName);

// Array Destructuring:
const [firstName, midddleName, lastName] = fullName;

console.log("After Destructuring:")
console.log(firstName);
console.log(midddleName);
console.log(lastName);

console.log(fullName);


// var exampleVar = "Hello";

// console.log(exampleVar);

// [SECTION] Arrow Function
    // Compact alternative syntax to a traditional functions.
    // Useful for code snippets wehere  creating functions will
    // not be reused in any other portion of the code.

    // Syntax:
        // (parameter/s) => {code/ logic};
        // () => {code/logic()};

let hello = (name, age) => {
    console.log(`Hello ${name} Your age is ${age}!`);
}
hello("John", 18);

let add = (x, y) => x + y;


// [SECTION] Function Expression
    // We use function keyword and specify a name for the
    // function declaration.

    // Syntax:
        // function(){logic/statement}


let funcExpression = function funcName() {
    console.log("Hello from the other side!");
}
funcExpression();

let variableFunction = function(){
    console.log("Hello, love Goodbye!");
}
variableFunction();

// [SECTION] Class-Based Object Blueprints
	// Allows creation/instantiation of objects using classes as blueprints
	// The constructor is a special method of a class for creating/ initializing an object for that class

	// Syntax:
		/*
			class ClassName {
				constructor(objectPropertyA, objectPropertyB){
					this.propertyA = objectPropertyA;
					this.propertyB = objectPropertyB;
				}
			}
		*/
class Car {
    constructor(brand, name, year){
        this.brand = brand;
        this.name = name;
        this.year = year;
    }
}
// Instantiating an object out of an Class-Based Blueprint
let myCar = new Car("Toyota", "Vios", 2011);
console.log(myCar);

let sampleCar = new Car("Toyota");
console.log(sampleCar);

// sampleFunction();

// // Function Declaration:

// function sampleFunction() {
//         console.log("Hello I am from function declaration!");
// }

// [SECTION] ES14 Updates

// toSorted();
    // This method is a new addition to Javascript in ES14
    // It allows you to sort an array by returning a new array
    // instead of updating the original.

let array = [22, 56, 78, 15, 12];
console.log("Array before toSorted method")
console.log(array);

let sortedArray = array.toSorted();

console.log(sortedArray);
console.log(array);

// findLast()
    // It allows you to find the last occurence of an element in an array.

let lastEvenNumber = array.findLast((number) => {
    return number % 2 === 0;
})
console.log(lastEvenNumber);

// toSpliced method
    // it allows you to create an updated array from the original array
    // by removing or adding elements.

let songsList = ["Uhaw", "Raining in Manila", "Ere", "Multo"];

let updatedSongsList = songsList.toSpliced(2, 1, "Buloy");
console.log(updatedSongsList);
console.log(songsList);