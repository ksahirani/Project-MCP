
// console.log("Welcome back, Sir Chirs!");
// [SECTION] Functions
	// Functions in JavaScript are lines/block of codes that tell our device/application to perform a certain task when called/invoke
	// Functions are mostly created to create complicated tasks to run several lines of codes in succession.
	// They are also used to prevent repeating lines/block of codes that perform the same task/function/logic

// [SECTION] Function Declarations
	/*
		Syntax:
			function functionName(){
				code block/ statements;
			}
		
		function keyword - used to define a javascript function
		functionName() - the name of the function.
		function block {}  - the statements which comprise the body of the function
	*/

// console.log("Hello World!");

// Example:
function sayHello(){
	console.log("Hello World!");
}

function displayCarInfo(){
	console.log("Brand : Toyota");
	console.log("Type: Sedan");
	console.log("Price: 1 500 000");
}

// [SECTION] Function Invocation/Calling function
	// The code block and statements inside a function is not immediately exectued when function is defined or created. The code and statements inside a function is executed when the function is invoked or called.

	// Note: It is common to use the term "call the function" instead of "invoke a function".

	/*
		Syntax:
			functionName();
	*/

// Invoking/calling a function.
sayHello();
// sayHello();
// sayHello();

displayCarInfo();


// [SECTION] Function Naming Convention
	// JavaScript function Names are also case-sensitive. The camelCase approach is the recommended way to declare function names.
	// Function names should be definitive of the task it will perform. It usually contains a descriptive nouns and verbs as prefixes.

// Good practice
function displayCourses(){
	let courses = [ "Science 101", "Math 101", "English 101"];

	console.log(courses);
}

displayCourses();

// a bad practice
function displayName(){
	let name = "Dahyun";
	console.log(name);
}

displayName();

// [SECTION] Understanding Scope in JavaScript
	// scope determines the accessiblity and visibility of variables in JavaScript. It's like the boundaries that define where in your code variables can be used and accessed.

// 1. Global Scope: Think of it as the entirety of JavaScript. Variables declared outside of any function/block using "let" or "const" , are in the global scope.

// Global Scope Example:
const globalVariable = "I'm a globalVariable!";

function displayGlobal(){
	console.log(globalVariable);
}

displayGlobal();

// 2. Local Scoping
		// 2.1 Function Scope: Variables declared inside a function using let or const are scoped to that function.

// Function Scope Example:
function localFunction(){
	const localVariable = "I'm a localVariable!"
	console.log(localVariable);
}

// function secondLocalFunction(){
// 	let globalVariable = "I am global inside local!"
// 	console.log(globalVariable);
// }

// secondLocalFunction();

localFunction();

// console.log(localVariable);

		//2.2 Block Scope: Variables declared with let or const inside block are scoped to that specific block ({});

	// Block Scope
	{
		const blockVariable = "Im a blocked-scoped variable";
		console.log(blockVariable);

		const anotherBlockVariable = "I am new blocked-scope.";


	}
// console.log(blockVariable);

// [SECTION] Return Statement
	//Return statement allows us to output a value from a function to be passed to the line/block of code that invoked/called the function.

// Return statement:
function returnFullName(){

	
	return "Hi"
}

// console.log(returnFullName())



let fullName = returnFullName();
console.log(fullName);