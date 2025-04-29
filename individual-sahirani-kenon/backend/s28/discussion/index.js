// console.log("Happy Tuesday!");

// [SECTION] Introduction to Arrays
	// So far we have explored storing values on individual variables. However, modelling real-world infromation is a bit more complicated.

    let studentNumberA = '2020-1923';
    let studentNumberB = '2020-1924';
    let studentNumberC = '2020-1920';
    let studentNumberD = '2020-1925';
    let studentNumberE = '2020-1926';
    
    // We can contain multiple related data/values in an array:
    let studentNumbers = [
        '2020-1923',
        '2020-1924',
        '2020-1920',
        '2020-1925',
        '2020-1926'
    ]
    
    // [SECTION] Array Structure
        // Arrays are used to store multiple realted values in a sinlge variable;
        //They are declared using a square brackets ([]) also known as "Array Literals";
        //commonly used to store numerous amounts of data to manipulate in order to perform a numbers tasks.
        //Arrays also provide access to a number of built funtions/methods that help in acheiving our goals.
        //A method us another term for functions associated with an object and is used to execute statements that are relevant to a specific object.
        //Arrays are also objects which is of another type.
            /*
                Syntax:
                    let/const arrayName = [elementA, elementB, elementC, . . .];
    
            */
    
    // Array of numbers:
    let grades = [98.5, 94.3, 89.82, 90.1];
    console.log(typeof grades);
    console.log(grades);
    
    // Array of Strings:
    let computerBrands = ['Acer', 'Asus', 'Lenovo', "REdfox", "Neo", 'Gateway'];
    console.log(computerBrands);
    
    // Array of Boolean Values:
        //Truth Table
    let booleanArray = [true, false, false, true];
    console.log(booleanArray);
    
    // Mixed data type in an Array;
    // a bad practice
    // This is not recommended.
    let mixedArr = [78, null, undefined, false, "Hello"];
    console.log(mixedArr);
    
    // Creating an array with values from variables:
    let city1 = "Tokyo";
    let city2 = "Manila";
    let city3 = "Jakarta";
    
    let cities = [city1, city2, city3];
    console.log(cities);
    
    // .length property to get the number of elements in our Array:
    console.log(cities.length);
    
    let blankArr = [];
    console.log(blankArr.length);
    
    // .length can also be used to get the number characters in a String:
    let fullName = "Kevin Durant";
    console.log(fullName.length);
    
    // [SECTION] Accessing elements of an array
        //accessing array elements is one of the more common tasks that we do in an array
        // this can be done through the use of array indexes.
        //Each element, in an array is associated with it's own index/number
        //In javascript, the first element is associated with the number 0 and increasing this number by 1 for every element.
        //The reason an array starts with 0 is due to how the languages is designed.
        /*
            Syntax:
                arrayName[index]
    
        */
    
    console.log(grades[0]);
    console.log(computerBrands[3]);
    
    // What will happen if we access an element that is not existing:
    console.log(grades[10]);
    
    // How do you think you can get the last element in an array without counting the number of elements.
    // Negative indexing
    console.log(computerBrands[computerBrands.length - 1]);
    
    let lakersLegends = ["Kobe", "Shaq", "Lebron", "Magic", "Doncic"];
    
    // You can store element in a varibles:
    let currentLaker = lakersLegends[2];
    console.log(currentLaker);
    
    // Reassignment of array elements:
    console.log("Array before reassignment:");
    console.log(lakersLegends);
    
    lakersLegends[2] = "Pau Gasol";
    console.log('Array after reassignment:')
    console.log(lakersLegends);
    
    //[SECTION] Looping over array.
    
    let newArr = [1, 2, 3, 4, 5, 6, 7];
    
    // for(let index = 0; index < newArr.length; index++ ){
    // 	console.log(newArr[index]);
    // }
    
    
    let numArr = [5, 11, 30, 45, 40];
    
    // We will be creating a function that will determine if the elements in an array is divisible by 5 or not.
    function isAllDivisibleBy5(array){
    
        for(let index = 0; index < array.length; index++){
            
            if(array[index] % 5 !== 0){
                return false;
            }
        }
    
        return true;
    }
    