// let userRole = 'admin';
// let message;

// switch (userRole) {
//     case 'user':
//     message = 'Welcome, user!';
//     break;
//     case 'moderator':
//     message = 'Welcome, moderator!';
//     break;
//     case 'admin':
//     message = 'Welcome, admin!';
//     default:
//     message = 'Unauthorized access!';
// }

// console.log(message);

// let x = 5;
// function changeX() {
//     let x = 10;
// }
// changeX();
// console.log(x); // 5  

// function calculatevolume(length, width, height) {
//     if (typeof length !== 'number' || typeof width !== 'number' || typeof height !== 'number') {
//         return 'Length, width, and height must be numbers';
//     }
//     if (length === 0 || width === 0 || height === 0){
//         return 'Length, width, and height must be positive numbers';
//     }
//     return length * width * height;
// }

// let volume = calculatevolume(5, 0, 3);
// console.log(volume); // 0

// function calculateTriangleArea(base, height) {
//     if (typeof base !== 'number' || typeof height !== 'number') {
//         return 'Base and height must be numbers';
//     }
//     if (base <= 0 || height <= 0) {
//         return 'Base and height must be positive numbers';
//     }
//     return 0.5 * base * height;
// }
// let triangleArea = calculateTriangleArea(5, 4);
// console.log(triangleArea); // 10

// function calculateDiscount(price, discount) {
//     if (discount >= 0 || discount <=100){
//         return price * (1 - discount /100);
//     }else{
//         return 'Invalid discount';
//     }
// }
// let discountedPrice = calculateDiscount(50, 101);
// console.log(discountedPrice)

// function divide(dividend, divisor) {
//     if(typeof dividend !=='number' || typeof divisor !== 'number'){
//         return 'Type validation failed. Both input must be numbers.';
//     }
//     if (dividend === 0) {
//         return 'Value validation failed. No value must be zero'
//     }
//     return dividend / divisor;
// }

// let qoutient = divide(1,0)
// console.log(qoutient)

// let num = '10';
// if (typeof num === 'number') {
//     console.log(num * 2);
// }else{
//     console.log(num + num);
// }
// function getProduct(num1, num2) {
//     if (typeof num1 !== 'number' && typeof num2 !== 'number') {
//         return 'Error: Both parameters must be numbers.';
//     }
//     return num1 * num2;
// }

// let product = getProduct(25, 2);
// console.log(product);

// console.log("TGIF!");

// [SECTION] if, else if and else Statement

// if statement - executes a statement if the specified condition is true.
let numG = -1;

// if(numG < 0){
// 	console.log("The condition is true!")
// 	console.log("Hello");
// }

//else if statement - executes if previous condition are false and if the specified condition is true
	// The "else if" clause is optional and can be added to capture additional condtions to change the flow of the program

let numH = 1;

// numG = -1
// if(numG < 0){
// 	console.log("Hello");
// }else if(numH === -1){
// 	console.log('World');
// }else if(numH < 0){
// 	console.log("Hello from Sir Chris!")
// }

// else statement
	//executes a statement if all other conditions are false.
	// the else statement is optional and can be added to capture any other result to change the flow of a program.

// numG = -1 , numH = 1;
if(numG > 0){
	console.log("Hello");
} else if(numH == 0){
	console.log("World");
} else {
	console.log('Rebound');
}


// if, else if and else statement with function
/*
1 - 30 = Not a typhoon yet
31 - 61 = Tropical depression
62 - 88 = Tropical Strom
89 - 117 = Severe Tropical Strom
> 117 = Typhoon
*/



function determineTyphoonIntensity(windSpeed){
	// console.log(typeof windSpeed)
	// early exit
	if(typeof windSpeed !== "number"){
		return "NaN is not a valid value for the windspeed!";
	}

	if(windSpeed < 0){
		return "Negative windspeed is invalid."
	}
	else if(windSpeed <= 30){
		return 'Not a typhoon yet.';
	} 
	else if (windSpeed <= 61){
		return "Tropical Depression detected"; 
	}
	else if( windSpeed <= 88){
		return "Tropical Storm detected!"
	}
	else if(windSpeed <= 117){
		return "Severe Tropical Storm Detected.";
	}
	else{
		return 'Typhoon detected.';
	}
}

let message = determineTyphoonIntensity(65);

if(message === "Tropical Storm detected!"){
	console.warn(message);
}

// [Section] Truthy and Falsy values
	// In javascript a "truthy" value is a value that is considered true when encountered in boolean context
	// Values are considered true unless defined otherwise:

	// Falsy values/ exceptions for truthy:
	/*
		1. false
		2. 0
		3. -0
		4. ""
		5. null
		6. undefined
		7. NaN
	*/

// Section: Truthy examples:
	
if(true){
	console.log("Truthy");
}

if(1){
	console.log("Truthy");
}

if({}){
	console.log("Truthy");
}

// Falsy value

if(0){
	console.log("falsy");
}

if(-0){
	console.log("falsy");
}

if(NaN){
	console.log("falsy");
}

let name = "Shaina";
console.log(0);

if(name){
	console.log("Truthy or falsy");
}

// SECTION: Conditional or Ternary Operator
	// The ternary operator takes three operands:
		//1. conditiom
		//2. expression to execute if the condition is true
		//3. expression to execute if the condition is false
	// Commonly used for single statement execution where the result consist of only one line of code.

	// The ternary operator has implicit return.
	/*
		(expression) ? ifTrue : ifFalse;
	*/

// example:
let ternaryResult = (1 > 18) ? true : false;

console.log(ternaryResult);


// console.log("Hi I am before the error");

// conole.log("I am the error");

// console.log("Hi I am after the error");

// Try Catch Finally statement
	// Try catch statements are commonly use for error handling
	//There are instances when the application returns an error/warning that is not necessarily an error in the contect of our code

function showIntensity(windSpeed){
	try {
		alerat(determineTyphoonIntensity(windSpeed));
	}
	catch(error){
		console.log(error)
	}
	finally{
		alert("Intensity updates will show new alert.");
	}
}

showIntensity(17);

console.log("I am after the error");
