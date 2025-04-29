// Javascript Array Non-Mutator Methods
// console.log("Welcome Back, B546!");

// [SECTION] Non-Mutator Methods
// Non-mutator methods are functions that do not 
// modify or change an array after they're created.


let countries = ["US", "PH", "CAN", "SG", "PH", "FR", "DE"];
console.log("This is the original array: ");
console.log(countries);
// returns the index number of the "FIRST" matching element found in array.

// If no match was found, the result will be -1.
// The search process will be done from the first element(index zero) proceeding the last element.

// Syntax:
    // arrayName.indexOf(searchElement);
    // arrayName.indexOf(searchElement, fromIndex);

let firstIndexOfPH = countries.indexOf("PH");
console.log(firstIndexOfPH); // 1
console.log(countries);

let invalidCountry = countries.indexOf("BR");
console.log(invalidCountry); // -1

// slice()
  //portions/slices elements from an array AND returns a new array.

// Syntax:
    // arrayName.slice(start);
    // arrayName.slice(start, end);

let slicedArrayA = countries.slice(1, 6);
console.log(slicedArrayA);
console.log(countries);

// concat();
    // combines two or more arrays and returns the combine result.

    // arrayA.concat(arrayB);
    // arrayA.concat(elementA);

let tasksArrayA = ['drink HTML', 'eat javascript'];
let tasksArrayB = ['inhale CSS', 'breathe sass'];
let tasksArrayC = ['get git', 'be node'];

console.log(tasksArrayA);
console.log(tasksArrayB);
console.log(tasksArrayC);

// using concat to concatenate an array with another array.
let tasks = tasksArrayA.concat(tasksArrayA);
console.log("Result from concat method:");
console.log(tasks);

// using concat to concatenate an array with an element.
let secondTasks = tasksArrayA.concat("I am an array");
console.log("Result from concat method:");
console.log(tasks);

// concatenate multiple arrays using concat method:
let AllTasks = tasksArrayA.concat(tasksArrayB, tasksArrayC, "smell express", "throw react");
console.log(AllTasks);

// [SECTION] Iterator Methods
    // Iteration methods are loops design to perform repetitive tasks on arrays.

    // Iteration methods loops over an array data resulting in complex tasks.

// forEach()
    // Similar to a for loop that iterates on each array element
    // The anonymous function passed in the forEach() will methods will be run repeatedly for each item in the array.
    // forEach() does not return anything

    // Syntax:
        // arrayName.forEach(indevElement){statement/logic});

console.log("This is our allTasks array:");
console.log(AllTasks);

AllTasks.forEach(function(task){
    console.log(task);
})

// Using for Each method we will be filtering the allTasks Array, push the elements/s of the allTasks array that has more than 10 characters.

let filteredTasks = [];

AllTasks.forEach(function(task){
    // This is statement
    if (task.length > 10){
        filteredTasks.push(task);
    }
})

console.log(filteredTasks);

// Mini activity:
// You will filtering the users array, push the admin users to the adminList array.
// let's try this:
let adminList = [];

let users = [
    {
        username: "peterSmith",
        isAdmin: false
    },
    {
        username: "andrewJones99",
        isAdmin: true
    },
    {
        username: "alexMartin",
        isAdmin: false
    },
    {
        username: "smithyS",
        isAdmin: true
    }
];

// Using forEach to iterate and filter
users.forEach(user => {
    if (user.isAdmin === true) {
      // If it's true, push the entire user object to the adminList
      adminList.push(user);
    }
  });
  
  console.log("Admin Users List:", adminList);

//map() method
    // Iterates on each element and returns a new array with different values depending on the result of the function's operation:

    // Syntax:
        // arrayName.map(function(indivElement) {logic/statement});

let numbers = [1, 2, 3 , 4, 5];

let numberMap = numbers.map(function(number){
    console.log(number);

    return number + 2;
})

console.log(numbers);
console.log(numberMap);

// every()
    // checks if all elements in an array meet the given condition.
    // This is useful for validating data stored in arrays especially when dealing with large amounts of data
    // Returns a true value if all elements meets/satisfy the condition and false of otherwise.

    // Syntax:
        // arrayName.every(function(indivElement) {return/expression/ condition});

let grades = [86, 85, 74, 89, 90];

let allPassingGrade = grades.every(function(grade) {
    return grade >=75;
})
console.log(allPassingGrade);

// filter();
    //Returns new array that contains elements which meets the given condition.

    // returns an empty array if no elements were found.

    // Syntax:
        // arrayName.filter(function(indivElement) {return expression/condition});

let filterValue = numbers.filter(function(number){
    return number < 7;
})
console.log(filterValue);