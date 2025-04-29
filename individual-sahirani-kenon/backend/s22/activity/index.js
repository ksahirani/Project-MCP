
// 1. In the s22 folder, create an activity folder, an index.html file inside of it and link the index.js file.
// 2. Create an index.js file and console log the message "Hello World" to ensure that the script file is properly associated with the html file.
console.log("Hello World");
// 3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.





// 4. Create the following variables to store the following user details:
  let firstName = "John";
  let lastName = "Smith";
  let age = 30;
  let hobbies = ["Reading", "Hiking", "Cooking"];
  let workAddress = {
  	houseNumber: 32,
  	street: "Washington",
  	city: "Lincoln",
  	state: "Nebraska"
  };
  console.log("First Name:" + firstName);
  console.log("last Name:" + lastName);
  console.log(age);
  console.log(hobbies);
  console.log(workAddress);

// 5. Research how to concatenate strings using + operator in Javascript. 

    let fullName = firstName + " " + lastName;
    console.log(fullName);



// 6. Continue the use of the + operator to concatenate strings.

   let intro = "Hi! My name is" + " " + fullName;
   console.log(intro);


// 7. Research how to determine the data type of each variable.
   let str = "Twice";
   let num = 27;
   let bool = true;
   let arr = ["Dahyun", "Chaeyoung", "Mina"];
   let obj = {twice: "Dahyun"};


	console.log(typeof str); 
	console.log(typeof num); 
	console.log(typeof bool); 
	console.log(typeof arr); 
	console.log(typeof obj);


/*
8. Identify and implement the best practices of creating and using variables by avoiding errors and debugging the following codes. 
    - Log the values of each variable to follow/mimic the output.
*/

    /* Don't change name of variables */
    /* Don't change console.log() */

    let realName = "Steve Rogers";
    console.log("My real name is" + realName);

    let currentAge = 40;
    console.log("My current age is: " +  currentAge);
    
    let profile = {

        username: "captain_america",
        fullName: "Steve Rogers",
        age: 40,
        isActive: false,
        username: "captain_america"

    };

    console.log("My Full Profile: ");
    console.log(profile);

    let deposits = [2000,4000,600,100];
    console.log("Your deposits: " + deposits);
    
    let expenses = [1000,2000,500,210];
    console.log("Your expenses: " + expenses);

    let isAdmin = true;
    console.log("Is the current user an admin?: " + isAdmin);

    const interestRate = 30;
    console.log("The current interest rate: " + interestRate);

    const loginKey = "EcommerceAPI";
    console.log("The current login key is: " + loginKey);

    const bankCode = "BANK456";
    console.log("Bank code: " + bankCode);

    let bankBalance = 500;
    bankBalance = bankBalance + 100;
    console.log("Updated bank balance: " + bankBalance);


    //Do not modify
    //For exporting to test.js

    //Refer to this list for all available and accepted variable names.
    //All needed variables are listed here.
    //Error in checking may result if one of the following variables was not created or initialized.

    try {
    
        module.exports = {
    
    
            firstName : typeof firstName !== 'undefined' ? firstName : null,
            lastName : typeof lastName !== 'undefined' ? lastName : null,
            email : typeof email !== 'undefined' ? email : null,
            age : typeof age !== 'undefined' ? age : null,
            hobbies : typeof hobbies !== 'undefined' ? hobbies : null,
            workAddress : typeof workAddress !== 'undefined' ? workAddress : null,
            fullName : typeof fullName !== 'undefined' ? fullName : null,
            intro : typeof intro !== 'undefined' ? intro : null,
            str : typeof str !== 'undefined' ? str : null,
            num : typeof num !== 'undefined' ? num : null,
            bool : typeof bool !== 'undefined' ? bool : null,
            arr : typeof arr !== 'undefined' ? arr : null,
            obj : typeof obj !== 'undefined' ? obj : null,
            realName : typeof realName !== 'undefined' ? realName : null,
            currentAge : typeof currentAge !== 'undefined' ? currentAge : null,
            friends : typeof friends !== 'undefined' ? friends : null,
            profile : typeof profile !== 'undefined' ? profile : null,
            deposits : typeof deposits !== 'undefined' ? deposits : null,
            expenses : typeof expenses !== 'undefined' ? expenses : null,
            isAdmin : typeof isAdmin !== 'undefined' ? isAdmin : null,
            interestRate : typeof interestRate !== 'undefined' ? interestRate : null,
            loginKey : typeof loginKey !== 'undefined' ? loginKey : null,
            bankCode : typeof bankCode !== 'undefined' ? bankCode : null,
            bankBalance : typeof bankBalance !== 'undefined' ? bankBalance : null
    
        };
    
    } catch (err) {}

