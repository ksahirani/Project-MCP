// console.log("Happy Monday!");

// [Section] While Loop
/*
	-A while loop takes in an expression/condition.
	-Expressions are any unit of code that can be evaluated to a value
	-If the condition evaluates to true, the statement/s inside the code block will be executed.
	-A loop will iterate a ceratin number of times until expression/condition is met
	-Iteration is the term given to the repitition of statements
	Syntax:
		while(expression/condition){
			statement/s;

			decrement/increment;
		}
*/

let count = 5;

// This while loop will run as long as the value of count is not equal to zero
while (count !== 0){
	count--;

	console.log("While " + count);

	//This decrementation decreases the value of count by 1 after every iteration to stop the loop when it reaches 0.
	// Loops occupy a significant amount of memory space in our spaces
	//Warning: Make sure that expressions/conditions in loops have their increment/decrement operators to sstop the loop.
	//Forgetting to include this loops will make your application run infinitely which will cause your device to crash.
	
}

//[Section] Do-While Loop
	// A do-while loop works lot like the while loop. But unlike while loops, do-while loops guarantees that the code will run at least once.
		/*
		Syntax:
			do{
				statement/s;
				decrement/increment;
			} while(expression/condition)

		*/

function demoDoWhile(number){
	
	do {
		console.log("Do While: " + number );

		// Addition re-assignment operator;
		number += 1;
	}
	while (number < 10);
}

// [Section] For Loop
	// A for loop is more flexible than while and do-while loops. It conssts of three parts:
	/*
		1. "initialization" value that will track the progression of the loop
		2. the "expression/condition" that will evaluate which will determine whether the loop will run one more time
		3. "Iteration/final expresison" indicates how to advance the loop.
		Syntax:
			for(initialization; expression/condition; iteration){
				statement /statements;
			}


	*/

for(let count = 0; count <= 20; count += 3){
	console.log("For Loop Value: " + count);
}

/*for (let count = 0; count < 1000000000; count++) {
	console.log(count);
}*/
//              0123456
let myString = "Jerico De Jesus";
// In Javascript characters in strings can be counted using the legnth property.
console.log(myString.length);


//Accessing elements of a string
//Individual characters of a string may be accessed using it's index number.
//The first character in a string coressponds to the number 0, the next 1 up to the nth number.
console.log(myString[0]);
console.log(myString[1]);
console.log(myString[6]);

//Will create a loop that will print out the individual letters of the myString variable


for(let x = 0; x < myString.length; x++){
	//The current value of myString is printed out using it's index value
	console.log(myString[x])
}

//Create a string named "myName" with a value of "AlEx"
    //        0123
let myName = "AlEx";

/*
    - Creates a loop that will print out the letters of the name individually and print out the number 3 instead when the letter to be printed out is a vowel
    - How this For Loop works:
        1. The loop will start at 0 for the the value of "i"
        2. It will check if "i" is less than the length of myName (e.g. 0)
        3. The if statement will check if the value of myName[i] converted to a lowercase letter is equivalent to any of the vowels (e.g. myName[0] = a, myName[0] = e, myName[0] = i, myName[0] = o, myName[0] = u)
        4. If the expression/condition is true the console will print the number 3.
        5. If the letter is not a vowel the console will print the letter
        6. The value of "i" will be incremented by 1 (e.g. i = 1)
        7. Then the loop will repeat steps 2 to 6 until the expression/condition of the loop is false
*/

for (let i=0; i < myName.length; i++){
	if(
		myName[i].toLowerCase() == "a" ||
		myName[i].toLowerCase() == "i" ||
		myName[i].toLowerCase() == "u" ||
		myName[i].toLowerCase() == "e" ||
		myName[i].toLowerCase() == "o" 
	){
		console.log(3);
	} else {
		console.log(myName[i])
	}
}

//1st loop result = 3
//2nd loop result = l
//3rd loop result = 3
//4th loop result = x
