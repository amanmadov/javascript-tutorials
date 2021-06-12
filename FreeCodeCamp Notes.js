
/*

    Freecodecamp - JavaScript Algorithms and Data Structures

*/


// Basic Javascript


//#region Var 

// Variables which are declared without the "var" keyword are automatically created in the global scope. 
// This can create unintended consequences elsewhere in your code or when running a function again. 
// You should always declare your variables with "var".


//#endregion

//#region Codding Challenge: Profile Lookup 

    // A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
    // The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
    // If both are true, then return the "value" of that property.
    // If name does not correspond to any contacts then return the string No such contact.
    // If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

  // Setup
    var contacts = [
        {
            "firstName": "Akira",
            "lastName": "Laine",
            "number": "0543236543",
            "likes": ["Pizza", "Coding", "Brownie Points"]
        },
        {
            "firstName": "Harry",
            "lastName": "Potter",
            "number": "0994372684",
            "likes": ["Hogwarts", "Magic", "Hagrid"]
        },
        {
            "firstName": "Sherlock",
            "lastName": "Holmes",
            "number": "0487345643",
            "likes": ["Intriguing Cases", "Violin"]
        },
        {
            "firstName": "Kristian",
            "lastName": "Vos",
            "number": "unknown",
            "likes": ["JavaScript", "Gaming", "Foxes"]
        }
    ];


    function lookUpProfile(name, prop){
        let n = contacts.length;
        for(let i = 0; i < n; i++){
            if(contacts[i].firstName === name){
                if(contacts[i].hasOwnProperty(prop)){
                    return contacts[i][prop];
                }
                else{
                    return "No such property";
                }
            }
            else{
                if(i === n - 1){
                    return "No such contact";
                }
            }
        }
    }

    lookUpProfile("Akira", "likes");


//#endregion

//#region The parseInt() 

// The parseInt() function parses a string and returns an integer. Here's an example:

    var a = parseInt("007");

// The above function converts the string 007 to the integer 7. 
// If the first character in the string can't be converted into a number, then it returns NaN.

// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, 
// which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

// The function call looks like:

    parseInt(string, radix);

// And here's an example:

    var a = parseInt("11", 2);
// The radix variable says that 11 is in the binary system, or base 2. 
// This example converts the string 11 to an integer 3.


//#endregion

//#region Single conditional operators 

// Single conditional operators can also be used to check for multiple conditions.

    function findGreaterOrEqual(a, b) {
        return (a === b) ? "a and b are equal" 
        : (a > b) ? "a is greater" 
        : "b is greater";
    }


    function checkSign(num) {
    return (num === 0) ? "zero" 
        : (num > 0) ? "positive" 
        : "negative";
    }

    checkSign(10);


//#endregion

//#region Recursive programming 

// Replace Loops using Recursion
// Recursion is the concept that a function can be expressed in terms of itself. 
// To help understand this, start by thinking about the following task: 
// multiply the first n elements of an array to create the product of those elements. 
// Using a for loop, you could do this:

    function multiply(arr, n) {
        var product = 1;
        for (var i = 0; i < n; i++) {
            product *= arr[i];
        }
        return product;
    }


// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 
// That means you can rewrite multiply in terms of itself and never need to use a loop.


    function multiply(arr, n) {
        if (n <= 0) {
            return 1;
        } else {
            return multiply(arr, n - 1) * arr[n - 1];
        }
    }


// The recursive version of multiply breaks down like this. 
// In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. 
// That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, 
// all the functions can return and the original multiply returns the answer.

// Note: Recursive functions must have a base case when they return without calling the function again 
// (in this example, when n <= 0), otherwise they can never finish executing.


// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

    function sum(arr, n) {
        if(n <= 0){
            return 0;
        }
        return arr[n-1] + sum(arr, n - 1);
    }

// The base case tells the recursive function when it no longer needs to call itself. 
// It is a simple case where the return value is already known. 
// There will also be a recursive call which executes the original function with different arguments. 
// If the function is written correctly, eventually the base case will be reached.

// For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. 
// This function will need to accept an argument, n, representing the final number. 
// Then it will need to call itself with progressively smaller values of n until it reaches 1. 
// You could write the function as follows:

    function countup(n) {
        if (n < 1) {
            return [];
        } else {
            const countArray = countup(n - 1);
            countArray.push(n);
            return countArray;
        }
    }

    console.log(countup(5));

// The value [1, 2, 3, 4, 5] will be displayed in the console.
// At first, this seems counterintuitive since the value of n decreases, 
// but the values in the final array are increasing. 
// This happens because the push happens last, after the recursive call has returned. 
// At the point where n is pushed into the array, 
// countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].


// We have defined a function named rangeOfNumbers with two parameters. 
// The function should return an array of integers which begins with a number 
// represented by the startNum parameter and ends with a number represented by the endNum parameter. 
// The starting number will always be less than or equal to the ending number. 
// Your function must use recursion by calling itself and not use loops of any kind. 
// It should also work for cases where both startNum and endNum are the same.

    function rangeOfNumbers(startNum, endNum) {
        if(startNum > endNum){
            return [];
        }
        const arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    };


    rangeOfNumbers(1, 5) // [1, 2, 3, 4, 5]

//#endregion


// ES6


//#region Differences Between the "var" and "let" keywords 

// One of the biggest problems with declaring variables with the "var" keyword 
// is that you can overwrite variable declarations without an error.

    var camper = 'James';
    var camper = 'David';
    console.log(camper);

// Here the console will display the string David.

// As you can see in the code above, the camper variable is originally declared as James and then overridden to be David. 
// In a small application, you might not run into this type of problem, but when your code becomes larger, 
// you might accidentally overwrite a variable that you did not intend to overwrite. 
// Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.
// A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. 
// If you were to replace var with let in the variable declarations of the code above, the result would be an error.

    let camper = 'James';
    let camper = 'David';

// This error can be seen in the console of your browser. 
// So unlike var, when using let, a variable with the same name can only be declared once. 
// Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

    "use strict";
    x = 3.14;

// This will display an error that x is not defined.

// When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

    var numArray = [];
    for (var i = 0; i < 3; i++) {
    numArray.push(i);
    }
    console.log(numArray);
    console.log(i);

// Here the console will display the values [0, 1, 2] and 3.
// With the var keyword, i is declared globally. 
// So when i++ is executed, it updates the global variable. This code is similar to the following:

    var numArray = [];
    var i;
    for (i = 0; i < 3; i++) {
    numArray.push(i);
    }
    console.log(numArray);
    console.log(i);


// This behavior will cause problems if you were to create a function 
// and store it for later use inside a for loop that uses the i variable. 
// This is because the stored function will always refer to the value of the updated global i variable.

    var printNumTwo;
    for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
        return i;
        };
    }
    }
    console.log(printNumTwo());

// Here the console will display the value 3.

// As you can see, printNumTwo() prints 3 and not 2. 
// This is because the value assigned to i was updated and the printNumTwo() 
// returns the global i and not the value i had when the function was created in the for loop. 
// The let keyword does not follow this behavior:

    let printNumTwo;
    for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
        return i;
        };
    }
    }
    console.log(printNumTwo());
    console.log(i);

// Here the console will display the value 2, and an error that i is not defined.

//#endregion

//#region Mutate an Array Declared with "const" keyword 

// The const declaration has many use cases in modern JavaScript.
// Some developers prefer to assign all their variables using const by default, 
// unless they know they will need to reassign the value. Only in that case, they use let.

// However, it is important to understand that objects (including arrays and functions) 
// assigned to a variable using const are still mutable. 
// Using the const declaration only prevents reassignment of the variable identifier.

    const s = [5, 6, 7];
    s = [1, 2, 3];
    s[2] = 45;
    console.log(s);

// s = [1, 2, 3] will result in an error. The console.log will display the value [5, 6, 45].

// As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. 
// Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s 
// to point to a different array using the assignment operator.

//#endregion

//#region Prevent Object Mutation 

// As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. 
// To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.

// Once the object is frozen, you can no longer add, update, or delete properties from it. 
// Any attempt at changing the object will be rejected without an error.

    let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
    };
    Object.freeze(obj);
    obj.review = "bad";
    obj.newProp = "Test";
    console.log(obj); 

// The obj.review and obj.newProp assignments will result in errors, 
// and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.


//#endregion

//#region Use Arrow Functions to Write Concise Anonymous Functions 

// In JavaScript, we often don't need to name our functions, especially when passing a function 
// as an argument to another function. Instead, we create inline functions. 
// We don't need to name these functions because we do not reuse them anywhere else.

// To achieve this, we often use the following syntax:

    const myFunc = function() {
    const myVar = "value";
    return myVar;
    }

// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. 
// Instead, you can use arrow function syntax:

    const myFunc = () => {
    const myVar = "value";
    return myVar;
    }

// When there is no function body, and only a return value, 
// arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. 
// This helps simplify smaller functions into one-line statements:

    const myFunc = () => "value";

// This code will still return the string value by default.

//#endregion

//#region Write Arrow Functions with Parameters 

// Just like a regular function, you can pass arguments into an arrow function.

    const doubler = (item) => item * 2;
    doubler(4);

//doubler(4) would return the value 8.

// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

    const doubler = item => item * 2;

// It is possible to pass more than one argument into an arrow function.

    const multiplier = (item, multi) => item * multi;
    multiplier(4, 2);

// multiplier(4, 2) would return the value 8.

//#endregion

//#region Set Default Parameters for Your Functions 

// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

    const greeting = (name = "Anonymous") => "Hello " + name;

    console.log(greeting("John"));
    console.log(greeting());

// The console will display the strings "Hello John" and "Hello Anonymous".

// The default parameter kicks in when the argument is not specified (it is undefined). 
// As you can see in the example above, the parameter name will receive its default value 
// Anonymous when you do not provide a value for the parameter. 
// You can add default values for as many parameters as you want.



//#endregion

//#region Use the Rest Parameter with Function Parameters 

// In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. 
// With the rest parameter, you can create functions that take a variable number of arguments. 
// These arguments are stored in an array that can be accessed later from inside the function.

    function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
    }
    console.log(howMany(0, 1, 2));
    console.log(howMany("string", null, [1, 2, 3], { }));

// The console would display the strings "You have passed 3 arguments." and "You have passed 4 arguments."

// The rest parameter eliminates the need to check the args array and allows us 
// to apply map(), filter() and reduce() on the parameters array.


//#endregion

//#region Use the Spread Operator to Evaluate Arrays In-Place 

// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places 
// where multiple parameters or elements are expected.

// The ES5 code below uses apply() to compute the maximum value in an array:

    var arr = [6, 89, 3, 45];
    var maximus = Math.max.apply(null, arr);

// maximus would have a value of 89.

// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. 
// Math.max() expects comma-separated arguments, but not an array. 
// The spread operator makes this syntax much better to read and maintain.

    const arr = [6, 89, 3, 45];
    const maximus = Math.max(...arr);

// maximus would have a value of 89.

// ...arr returns an unpacked array. In other words, it spreads the array. 
// However, the spread operator only works in-place, like in an argument to a function or in an array literal. 


    const spreaded = ...arr; // This code will not work

    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;

    arr2 = [...arr1];  // This code will work

//#endregion

//#region Use Destructuring Assignment to Extract Values from Objects 


// Destructuring assignment is special syntax introduced in ES6, 
// for neatly assigning values taken directly from an object.
// Consider the following ES5 code:

    const user = { name: 'John Doe', age: 34 };
    const name = user.name;
    const age = user.age;

// name would have a value of the string John Doe, and age would have the number 34.
// Here's an equivalent assignment statement using the ES6 destructuring syntax:

    const { name, age } = user;

// Again, name would have a value of the string John Doe, and age would have the number 34.
// Here, the name and age variables will be created and assigned the values of their respective values from the user object. 
// You can see how much cleaner this is.
// You can extract as many or few values from the object as you want.

    const HIGH_TEMPERATURES = {
        yesterday: 75,
        today: 77,
        tomorrow: 80
    };

// This will also work
    const {today, tomorrow} = HIGH_TEMPERATURES;

// Destructuring allows you to assign a new variable name when extracting values. 
// You can do this by putting the new name after a colon when assigning the value.
// Using the same object from the last example:

    const user = { name: 'John Doe', age: 34 };

// Here's how you can give new variable names in the assignment:

    const { name: userName, age: userAge } = user;

// You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. 
// The value of userName would be the string John Doe, and the value of userAge would be the number 34.


// You can use the same principles from the previous two lessons to destructure values from nested objects.
// Using an object similar to previous examples:

    const user = {
        johnDoe: { 
            age: 34,
            email: 'johnDoe@freeCodeCamp.com'
        }
    };

// Here's how to extract the values of object properties and assign them to variables with the same name:

    const { johnDoe: { age, email }} = user;

// And here's how you can assign an object properties' values to variables with different names:

    const { johnDoe: { age: userAge, email: userEmail }} = user;


//#endregion

//#region Use Destructuring Assignment to Assign Variables from Arrays 

// ES6 makes destructuring arrays as easy as destructuring objects.
// One key difference between the spread operator and array destructuring is that 
// the spread operator unpacks all contents of an array into a comma-separated list. 
// Consequently, you cannot pick or choose which elements you want to assign to variables.
// Destructuring an array lets us do exactly that:

    const [a, b] = [1, 2, 3, 4, 5, 6];
    console.log(a, b);

// The console will display the values of a and b as 1, 2.
// The variable a is assigned the first value of the array, and b is assigned the second value of the array. 
// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

    const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
    console.log(a, b, c);

// The console will display the values of a, b, and c as 1, 2, 5.

// swapping variables
    let a = 8, b = 6;
    [a, b] = [b,a]


//#endregion

//#region Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements 

// In some situations involving array destructuring, 
// we might want to collect the rest of the elements into a separate array.

// The result is similar to Array.prototype.slice(), as shown below:

    const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
    console.log(a, b);
    console.log(arr);

// The console would display the values 1, 2 and [3, 4, 5, 7].

//#endregion

//#region Use Destructuring Assignment to Pass an Object as a Function's Parameters 

// In some cases, you can destructure the object in a function argument itself.
// Consider the code below:

    const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;

    }

// This effectively destructures the object sent into the function. This can also be done in-place:

    const profileUpdate = ({ name, age, nationality, location }) => {

    }

// When profileData is passed to the above function, 
// the values are destructured from the function parameter for use within the function.


    const stats = {
        max: 56.78,
        standard_deviation: 4.34,
        median: 34.54,
        mode: 23.87,
        min: -0.75,
        average: 35.85
    };
  
    const half = ({max,min}) => (max + min) / 2.0; 


//#endregion

//#region Create Strings using Template Literals 

// A new feature of ES6 is the template literal. 
// This is a special type of string that makes creating complex strings easier.

// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
// Consider the code below:

    const person = {
    name: "Zodiac Hasbro",
    age: 56
    };

    const greeting = `Hello, my name is ${person.name}!
    I am ${person.age} years old.`;

    console.log(greeting);

    // The console will display the strings "Hello, my name is Zodiac Hasbro! and I am 56 years old."

//#endregion

//#region Write Concise Object Literal Declarations Using Object Property Shorthand 

// ES6 adds some nice support for easily defining object literals.
// Consider the following code:

    const getMousePosition = (x, y) => ({
        x: x,
        y: y
    });

// getMousePosition is a simple function that returns an object containing two properties. 
// ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. 
// You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. 
// Here is the same function from above rewritten to use this new syntax:

    const getMousePosition = (x, y) => ({ x, y });

    const createPerson = (name, age, gender) => {
        return {
          name: name,
          age: age,
          gender: gender
        };
      };

    // simplified
    const createPerson = (name, age, gender) => {
    return {name, age, gender };
    };

//#endregion

//#region Write Concise Declarative Functions with ES6 

// When defining functions within objects in ES5, we have to use the keyword function as follows:

    const person = {
        name: "Taylor",
        sayHello: function() {
            return `Hello! My name is ${this.name}.`;
        }
    };

// With ES6, you can remove the function keyword and colon altogether when defining functions in objects. 
// Here's an example of this syntax:

    const person = {
        name: "Taylor",
        sayHello() {
            return `Hello! My name is ${this.name}.`;
        }
    };

//#endregion

//#region Use class Syntax to Define a Constructor Function 

// ES6 provides a new syntax to create objects, using the class keyword.

// It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation 
// of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

// In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

    var SpaceShuttle = function(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
    var zeus = new SpaceShuttle('Jupiter');

// The class syntax simply replaces the constructor function creation:

    class SpaceShuttle {
        constructor(targetPlanet) {
            this.targetPlanet = targetPlanet;
        }
    }
    const zeus = new SpaceShuttle('Jupiter');

// It should be noted that the class keyword declares a new function, to which a constructor is added. 
// This constructor is invoked when new is called to create a new object.

// Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.

// The constructor method is a special method for creating and initializing an object created with a class. 

//#endregion

//#region Use getters and setters to Control Access to an Object 

// You can obtain values from an object and set the value of a property within an object.
// These are classically called getters and setters.
// Getter functions are meant to simply return (get) the value of an object's private variable 
// to the user without the user directly accessing the private variable.

// Setter functions are meant to modify (set) the value of an object's private variable 
// based on the value passed into the setter function. 
// This change could involve calculations, or even overwriting the previous value completely.

    class Book {
        constructor(author) {
            this._author = author;
        }
        // getter
        get writer() {
            return this._author;
        }
        // setter
        set writer(updatedAuthor) {
            this._author = updatedAuthor;
        }
    }

    const novel = new Book('anonymous');
    console.log(novel.writer);
    novel.writer = 'newAuthor';
    console.log(novel.writer);

// The console would display the strings "anonymous" and "newAuthor".

// Notice the syntax used to invoke the getter and setter. They do not even look like functions. 
// Getters and setters are important because they hide internal implementation details.

// Note: It is convention to precede the name of a private variable with an underscore (_). 
// However, the practice itself does not make a variable private.

// Coding challenge:
// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
// In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.
// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, 
// and C is the value of the same temperature in Celsius.
// Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
// This is the power of a getter and a setter. You are creating an API for another user, 
// who can get the correct result regardless of which one you track.
// In other words, you are abstracting implementation details from the user.

    class Thermostat {
        constructor(temp) {
        this._temperature = 5/9 * (temp - 32);
        }
        // getter
        get temperature() {
        return this._temperature;
        }
        // setter
        set temperature(updatedTemp) {
        this._temperature = updatedTemp;
        }
    }
  
    const thermos = new Thermostat(76); // Setting in Fahrenheit scale
    let temp = thermos.temperature; // 24.44 in Celsius
    thermos.temperature = 26;
    temp = thermos.temperature; // 26 in Celsius


//#endregion

//#region Create a Module Script 

// JavaScript started with a small role to play on an otherwise mostly HTML web. 
// Today, it’s huge, and some websites are built almost entirely with JavaScript. 
// In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. 
// This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. 
// In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. 
// Here’s an example:

<script type="module" src="filename.js"></script>

// A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.

//#endregion

//#region Use export to Share a Code Block 

// Imagine a file called math_functions.js that contains several functions related to mathematical operations. 
// One of them is stored in a variable, add, that takes in two numbers and returns their sum. 
// You want to use this function in several different JavaScript files.
// In order to share it with these other files, you first need to export it.

    export const add = (x, y) => {
        return x + y;
    }

// The above is a common way to export a single function, but you can achieve the same thing like this:

    const add = (x, y) => {
        return x + y;
    }

    export { add };

// When you export a variable or function, you can import it in another file and use it without having to rewrite the code. 
// You can export multiple things by repeating the first example for each thing you want to export, 
// or by placing them all in the export statement of the second example, like this:

    export { add, subtract };

//#endregion

//#region Reuse JavaScript Code Using import 

// import allows you to choose which parts of a file or module to load. 
// In the previous lesson, the examples exported add from the math_functions.js file. 
// Here's how you can import it to use in another file:

    import { add } from './math_functions.js';

// Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. 
// The ./ tells the import to look for the math_functions.js file in the same folder as the current file. 
// The relative file path (./) and file extension (.js) are required when using import in this way.

// You can import more than one item from the file by adding them in the import statement like this:

    import { add, subtract } from './math_functions.js';

//#endregion

//#region Use * to Import Everything from a File 

// Suppose you have a file and you wish to import all of its contents into the current file. 
// This can be done with the import * as syntax. 
// Here's an example where the contents of a file named math_functions.js are imported into a file in the same directory:

    import * as myMathModule from "./math_functions.js";

// The above import statement will create an object called myMathModule. 
// This is just a variable name, you can name it anything. 
// The object will contain all of the exports from math_functions.js in it, 
// so you can access the functions like you would any other object property. 
// Here's how you can use the add and subtract functions that were imported:

    myMathModule.add(2,3);
    myMathModule.subtract(5,3);

//#endregion

//#region Create an Export Fallback with export default 

// In the export lesson, you learned about the syntax referred to as a named export. 
// This allowed you to make multiple functions and variables available for use in other files.

// There is another export syntax you need to know, known as export default. 
// Usually you will use this syntax if only one value is being exported from a file. 
// It is also used to create a fallback value for a file or module.

// Below are examples using export default:

    export default function add(x, y) {
        return x + y;
    }

    export default function(x, y) {
        return x + y;
    }

// The first is a named function, and the second is an anonymous function.

// Since export default is used to declare a fallback value for a module or file, 
// you can only have one value be a default export in each module or file.
// Additionally, you cannot use export default with var, let, or const

//#endregion

//#region Import a Default Export 

// In the last challenge, you learned about export default and its uses. 
// To import a default export, you need to use a different import syntax. 
// In the following example, add is the default export of the math_functions.js file. 
// Here is how to import it:

    import add from "./math_functions.js";

// The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). 
// add here is simply a variable name for whatever the default export of the math_functions.js file is. 
// You can use any name here when importing a default.

//#endregion

//#region Create a JavaScript Promise 

// A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. 
// When the task completes, you either fulfill your promise or fail to do so. 
// Promise is a constructor function, so you need to use the new keyword to create one. 
// It takes a function, as its argument, with two parameters - resolve and reject. 
// These are methods used to determine the outcome of the promise. 
// The syntax looks like this:

    const myPromise = new Promise((resolve, reject) => {

    });

//#endregion

//#region Complete a Promise with resolve and reject 

// A promise has three states: pending, fulfilled, and rejected. 
// The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. 
// The resolve and reject parameters given to the promise argument are used to do this. 
// resolve is used when you want your promise to succeed, and reject is used when you want it to fail. 
// These are methods that take an argument, as seen below.

    const myPromise = new Promise((resolve, reject) => {
        if(condition) {
            resolve("Promise was fulfilled");
        } else {
            reject("Promise was rejected");
        }
    });

// The example above uses strings for the argument of these functions, but it can really be anything. 
// Often, it might be an object, that you would use data from, to put on your website or elsewhere.

//#endregion

//#region Handle a Fulfilled Promise with then 

// Promises are most useful when you have a process that takes an unknown amount of time 
// in your code (i.e. something asynchronous), often a server request. 
// When you make a server request it takes some amount of time, 
// and after it completes you usually want to do something with the response from the server. 
// This can be achieved by using the then method. 
// The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

    myPromise.then(result => {
    
    });

// result comes from the argument given to the resolve method.

    const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer is set to true to represent a successful response from a server
        let responseFromServer = true;
        
        if(responseFromServer) {
            resolve("We got the data");
        } else {  
            reject("Data not received");
        }
    });
    
    makeServerRequest.then(result => {
        console.log(result);
    });

//#endregion

//#region Handle a Rejected Promise with catch 

// catch is the method used when your promise has been rejected. 
// It is executed immediately after a promise's reject method is called. 
// Here’s the syntax:

    myPromise.catch(error => {
    
    });

// error is the argument passed in to the reject method.

    const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer is set to false to represent an unsuccessful response from a server
        let responseFromServer = false;
        
        if(responseFromServer) {
            resolve("We got the data");
        } else {  
            reject("Data not received");
        }
    });
    
    makeServerRequest.then(result => {
        console.log(result);
    });
    
    makeServerRequest.catch(error => {
        console.log(error);
    });

//#endregion


// Regular Expressions 


//#region Using the Test Method 

// Regular expressions are used in programming languages to match parts of strings. 
// You create patterns to help you do that matching.

// If you want to find the word the in the string The dog chased the cat, 
// you could use the following regular expression: /the/. 
// Notice that quote marks are not required within the regular expression.

// JavaScript has multiple ways to use regexes. 
// One way to test a regex is using the .test() method. 
// The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), 
// and returns true or false if your pattern finds something or not.

    let testStr = "freeCodeCamp";
    let testRegex = /Code/;
    testRegex.test(testStr);

// The test method here returns true.

//#endregion


















































































