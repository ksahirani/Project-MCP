// console.log("Hello");

// [SECTION] JSON Objects
	// JSON stands for JavaScript Object Notation
	// JSON is also used in other programming languages.
	// Core JavaScript has built in JSON object that contains methods for parsing JSON objects and converting into JavaScript objects.

	// JavaScript objects are not to be confused with JSON.
	// JSON is used for serializing data types into bytes.
	// Serialization is the process of converting data into a series of bytes for easier transmission or transfer of information.
	// Syntax:
		/*
			{
				"propertyA" : "valueA",
				"propertyB" : "valueB",
				. . .
			}

		*/

// Example of JSON objects:
/*{
 "city" : "Quezon City",
 "province" : "Metro Manila",
 "country" : "Philippines"
}*/

// Array of JSON Objects;
/*[
	{ "city": "Quezon City", "province": "Metro Manila", "country": "Philippines" },
	{ "city": "Manila City", "province": "Metro Manila", "country": "Philippines" },
	{ "city": "Makati City", "province": "Metro Manila", "country": "Philippines" }
]*/

// [SECTION] JSON methods
	// Stringified JSON is a JavaScript object converted into a string to be used in other functions of a JavaScirpt application.
	// They are commonly used in HTTP request where information is required to be sent and received in a stringified JSON format.
	
	// Requests are an important part of programming where an application communicates with a backend application to perform different tasks such as getting/creating data in a database
	// A frontend application is an application that is used to interact with users to perform different visual tasks and display information while backend applications are commonly used for all the business logic and data processing
	// A database normally stores information/data that can be used in most applications
	// Commonly stored data in databases are user information, transaction records and product information
	// Node/Express JS are two of technologies that are used for creating backend applications which processes requests from frontend applications
	// Node JS is a Java Runtime Environment (JRE)/software that is made to execute other software
	// Express JS is a NodeJS framework that provides features for easily creating web and mobile applications
	// An example of where JSON is also used is on package.json files which an express JS application uses to keep track of information regarding a project

// Stringify method:
	// Syntax:
		// JSON.stringify(data);

        let batchesArr = [{batchName : 'Batch X'}, {batchName: 'Batch Y'}];
        console.log(batchesArr);
        
        console.log(JSON.stringify(batchesArr));
        console.log(typeof JSON.stringify(batchesArr));
        
        let batchesJSON = JSON.stringify(batchesArr);
        
        let data = JSON.stringify({
            name: 'John',
            age: 31,
            address: {
                city: "Manila",
                country: "Philippines"
            }
        });
        
        console.log(data);
        
        // Converting Stringified JSON into a JavaScript Object
        console.log(batchesJSON);
        
        console.log(JSON.parse(batchesJSON));
        
        console.log(JSON.parse(data));
        
        
        // request => API/backendApplication => process request by the => response => frontend
        
        