
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

//#region Match Literal Strings 

// In the last challenge, you searched for the word Hello using the regular expression /Hello/. 
// That regex searched for a literal match of the string Hello. 
// Here's another example searching for a literal match of the string Kevin:

    let testStr = "Hello, my name is Kevin.";
    let testRegex = /Kevin/;
    testRegex.test(testStr);

// This test call will return true.
// Any other forms of Kevin will not match. 
// For example, the regex /Kevin/ will not match kevin or KEVIN.

    let wrongRegex = /kevin/;
    wrongRegex.test(testStr);

// This test call will return false.

//#endregion

//#region Match a Literal String with Different Possibilities 

// Using regexes like /coding/, you can look for the pattern coding in another string.

// This is powerful to search single strings, but it's limited to only one pattern. 
// You can search for multiple patterns using the alternation or OR operator: |.

// This operator matches patterns either before or after it. 
// For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

// You can also search for more than just two patterns. 
// You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

//#endregion

//#region Ignore Case While Matching 

// Up until now, you've looked at regexes to do literal matches of strings. 
// But sometimes, you might want to also match case differences.

// Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. 
// Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

// You can match both cases using what is called a flag. 
// There are other flags but here you'll focus on the flag that ignores case - the i flag. 
// You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. 
// This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

    let myString = "freeCodeCamp";
    let fccRegex = /freecodecamp/i; // Change this line
    let result = fccRegex.test(myString);

//#endregion

//#region Extract Matches 

// So far, you have only been checking if a pattern exists or not within a string. 
// You can also extract the actual matches you found with the .match() method.

// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.
// Here's an example:

    "Hello, World!".match(/Hello/);
    let ourStr = "Regular expressions";
    let ourRegex = /expressions/;
    ourStr.match(ourRegex);

// Here the first match would return ["Hello"] and the second would return ["expressions"].
// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

    'string'.match(/regex/);
    /regex/.test('string');

//#endregion

//#region Find More Than the First Match 

// So far, you have only been able to extract or search a pattern once.

    let testStr = "Repeat, Repeat, Repeat";
    let ourRegex = /Repeat/;
    testStr.match(ourRegex);

// Here match would return ["Repeat"].

// To search or extract a pattern more than once, you can use the g flag.

    let repeatRegex = /Repeat/g;
    testStr.match(repeatRegex);

// And here match returns the value ["Repeat", "Repeat", "Repeat"]
// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

// Note
// You can have multiple flags on your regex like /search/gi

//#endregion

//#region Match Anything with Wildcard Period 

// Sometimes you won't (or don't need to) know the exact characters in your patterns. 
// Thinking of all words that match, say, a misspelling would take a long time. 
// Luckily, you can save time using the wildcard character: .

// The wildcard character . will match any one character. 
// The wildcard is also called dot and period. 
// You can use the wildcard character just like any other character in the regex. 
// For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

    let humStr = "I'll hum a song";
    let hugStr = "Bear hug";
    let huRegex = /hu./;
    huRegex.test(humStr);
    huRegex.test(hugStr);

// Both of these test calls would return true.

//#endregion

//#region Match Single Character with Multiple Possibilities 

// You learned how to match literal patterns (/literal/) and wildcard character (/./). 
// Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. 
// There are options that are a balance between the two extremes.

// You can search for a literal pattern with some flexibility with character classes. 
// Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

// For example, you want to match bag, big, and bug but not bog. 
// You can create the regex /b[aiu]g/ to do this. 
// The [aiu] is the character class that will only match the characters a, i, or u.

    let bigStr = "big";
    let bagStr = "bag";
    let bugStr = "bug";
    let bogStr = "bog";
    let bgRegex = /b[aiu]g/;
    bigStr.match(bgRegex);
    bagStr.match(bgRegex);
    bugStr.match(bgRegex);
    bogStr.match(bgRegex);

// In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

//#endregion

//#region Match Letters of the Alphabet 

// You saw how you can use character sets to specify a group of characters to match, 
// but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). 
// Fortunately, there is a built-in feature that makes this short and simple.
// Inside a character set, you can define a range of characters to match using a hyphen character: -.
// For example, to match lowercase letters a through e you would use [a-e].

    let catStr = "cat";
    let batStr = "bat";
    let matStr = "mat";
    let bgRegex = /[a-e]at/;
    catStr.match(bgRegex);
    batStr.match(bgRegex);
    matStr.match(bgRegex);

// In order, the three match calls would return the values ["cat"], ["bat"], and null.

//#endregion

//#region Match Numbers and Letters of the Alphabet 

// Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
// Also, it is possible to combine a range of letters and numbers in a single character set.

    let jennyStr = "Jenny8675309";
    let myRegex = /[a-z0-9]/ig;
    jennyStr.match(myRegex);

//#endregion

//#region Match Single Characters Not Specified 

// So far, you have created a set of characters that you want to match, 
// but you could also create a set of characters that you do not want to match. 
// These types of character sets are called negated character sets.

// To create a negated character set, you place a caret character (^) after the opening bracket 
// and before the characters you do not want to match.

// For example, /[^aeiou]/gi matches all characters that are not a vowel. 
// Note that characters like ., !, [, @, / and white space are matched - the negated vowel 
// character set only excludes the vowel characters.

// Coding Challenge:
// Create a single regex that matches all characters that are not a number or a vowel. 
// Remember to include the appropriate flags in the regex.

    let quoteSample = "3 blind mice.";
    let myRegex = /[^aeiou0-9]/gi; 
    let result = quoteSample.match(myRegex); 

//#endregion

//#region Match Characters that Occur One or More Times 

// Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. 
// This means it occurs at least once, and may be repeated.

// You can use the + character to check if that is the case. 
// Remember, the character or pattern has to be present consecutively. 
// That is, the character has to repeat one after the other.

// For example, /a+/g would find one match in abc and return ["a"]. 
// Because of the +, it would also find a single match in aabc and return ["aa"].

// If it were instead checking the string abab, 
// it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. 
// Finally, since there is no a in the string bcd, it wouldn't find a match.

// Coding challenge:
// You want to find matches when the letter s occurs one or more times in Mississippi. 
// Write a regex that uses the + sign.

    let difficultSpelling = "Mississippi";
    let myRegex = /s+/gi; // Change this line
    let result = difficultSpelling.match(myRegex);

//#endregion

//#region Match Characters that Occur Zero or More Times 

// The last challenge used the plus + sign to look for characters that occur one or more times. 
// There's also an option that matches characters that occur zero or more times.
// The character to do this is the asterisk or star: *.

    let soccerWord = "gooooooooal!";
    let gPhrase = "gut feeling";
    let oPhrase = "over the moon";
    let goRegex = /go*/;
    soccerWord.match(goRegex);
    gPhrase.match(goRegex);
    oPhrase.match(goRegex);

// In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

//#endregion

//#region Find Characters with Lazy Matching 

// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. 
// The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

// You can apply the regex /t[a-z]*i/ to the string "titanic". 
// This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

// Regular expressions are by default greedy, so the match would return ["titani"]. 
// It finds the largest sub-string possible to fit the pattern.

// However, you can use the ? character to change it to lazy matching. "titanic" matched against the 
// adjusted regex of /t[a-z]*?i/ returns ["ti"].

// Note: Parsing HTML with regular expressions should be avoided, 
//       but pattern matching an HTML string with regular expressions is completely fine.

// Coding challenge:
// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". 
// Remember the wildcard . in a regular expression matches any character.

    let text = "<h1>Winter is coming</h1>";
    let myRegex = /<.*?>/;
    let result = text.match(myRegex);

//#endregion

//#region Find One or More Criminals in a Hunt 

// Time to pause and test your new regex writing skills. 
// A group of criminals escaped from jail and ran away, but you don't know how many. 
// However, you do know that they stay close together when they are around other people. 
// You are responsible for finding all of the criminals at once.

// Here's an example to review how to do this:

// The regex /z+/ matches the letter z when it appears one or more times in a row. 
// It would find matches in all of the following strings:

    "z"
    "zzzzzz"
    "ABCzzzz"
    "zzzzABC"
    "abczzzzzzzzzzzzzzzzzzzzzabc"

// But it does not find matches in the following strings since there are no letter z characters:

    ""
    "ABC"
    "abcabc"

//#endregion

//#region Match Beginning String Patterns 

// Prior challenges showed that regular expressions can be used to look for a number of matches. 
// They are also used to search for patterns in specific positions in strings.

// In an earlier challenge, you used the caret character (^) inside a character set 
// to create a negated character set in the form [^thingsThatWillNotBeMatched]. 
// Outside of a character set, the caret is used to search for patterns at the beginning of strings.

    let firstString = "Ricky is first and can be found.";
    let firstRegex = /^Ricky/;
    firstRegex.test(firstString);
    let notFirst = "You can't find Ricky now.";
    firstRegex.test(notFirst);

// The first test call would return true, while the second would return false.

//#endregion

//#region Match Ending String Patterns 

// In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. 
// There is also a way to search for patterns at the end of strings.

// You can search the end of strings using the dollar sign character $ at the end of the regex.

    let theEnding = "This is a never ending story";
    let storyRegex = /story$/;
    storyRegex.test(theEnding);
    let noEnding = "Sometimes a story will have to end";
    storyRegex.test(noEnding);

// The first test call would return true, while the second would return false.

//#endregion

//#region Match All Letters and Numbers 

// Using character classes, you were able to search for all letters of the alphabet with [a-z]. 
// This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

// The closest character class in JavaScript to match the alphabet is \w. 
// This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. 
// Note, this character class also includes the underscore character (_).

    let longHand = /[A-Za-z0-9_]+/;
    let shortHand = /\w+/;
    let numbers = "42";
    let varNames = "important_var";
    longHand.test(numbers);
    shortHand.test(numbers);
    longHand.test(varNames);
    shortHand.test(varNames);

// All four of these test calls would return true.
// These shortcut character classes are also known as shorthand character classes.

//#endregion

//#region Match Everything But Letters and Numbers 

// You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. 
// A natural pattern you might want to search for is the opposite of alphanumerics.

// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. 
// This shortcut is the same as [^A-Za-z0-9_].

    let shortHand = /\W/;
    let numbers = "42%";
    let sentence = "Coding!";
    numbers.match(shortHand);
    sentence.match(shortHand);

// The first match call would return the value ["%"] and the second would return ["!"].

//#endregion

//#region Match All Numbers 

// You've learned shortcuts for common string patterns like alphanumerics. 
// Another common pattern is looking for just digits or numbers.

// The shortcut to look for digit characters is \d, with a lowercase d. 
// This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

// Coding challenge:
// Use the shorthand character class \d to count how many digits are in movie titles. 
// Written out numbers ("six" instead of 6) do not count.

    let movieName = "2001: A Space Odyssey";
    let numRegex = /\d/g;
    let result = movieName.match(numRegex).length;

//#endregion

//#region Match All Non-Numbers 

// The last challenge showed how to search for digits using the shortcut \d with a lowercase d. 
// You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

// The shortcut to look for non-digit characters is \D. 
// This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

// Coding challenge:
// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

    let movieName = "2001: A Space Odyssey";
    let noNumRegex = /\D/g;
    let result = movieName.match(noNumRegex).length;

//#endregion

//#region Restrict Possible Usernames 

// Usernames are used everywhere on the internet. 
// They are what give users a unique identity on their favorite sites.

// You need to check all the usernames in a database. 
// Here are some simple rules that users have to follow when creating their username.

// Usernames can only use alpha-numeric characters.

// The only numbers in the username have to be at the end. 
// There can be zero or more of them at the end. 
// Username cannot start with the number.

// Username letters can be lowercase and uppercase.

// Usernames have to be at least two characters long. 
// A two-character username can only use alphabet letters as characters.

    let username = "JackOfAllTrades";
    let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;; // Change this line
    let result = userCheck.test(username);

// Code Explanation
// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input

//#endregion

//#region Match Whitespace 

// The challenges so far have covered matching letters of the alphabet and numbers. 
// You can also match the whitespace or spaces between letters.

// You can search for whitespace using \s, which is a lowercase s. 
// This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. 
// You can think of it as similar to the character class [ \r\t\f\n\v].

    let whiteSpace = "Whitespace. Whitespace everywhere!"
    let spaceRegex = /\s/g;
    whiteSpace.match(spaceRegex);

// This match call would return [" ", " "].

//#endregion

//#region Match Non-Whitespace Characters 

// You learned about searching for whitespace using \s, with a lowercase s. 
// You can also search for everything except whitespace.

// Search for non-whitespace using \S, which is an uppercase s. 
// This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. 
// You can think of it being similar to the character class [^ \r\t\f\n\v].

    let whiteSpace = "Whitespace. Whitespace everywhere!"
    let nonSpaceRegex = /\S/g;
    whiteSpace.match(nonSpaceRegex).length;

// The value returned by the .length method would be 32.

//#endregion

//#region Specify Upper and Lower Number of Matches 

// Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. 
// These are convenient but sometimes you want to match a certain range of patterns.

// You can specify the lower and upper number of patterns with quantity specifiers. 
// Quantity specifiers are used with curly brackets ({ and }). 
// You put two numbers between the curly brackets - for the lower and upper number of patterns.

// For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

    let A4 = "aaaah";
    let A2 = "aah";
    let multipleA = /a{3,5}h/;
    multipleA.test(A4);
    multipleA.test(A2);

// The first test call would return true, while the second would return false.

//#endregion

//#region Specify Only the Lower Number of Matches 

// You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. 
// Sometimes you only want to specify the lower number of patterns with no upper limit.

// To only specify the lower number of patterns, keep the first number followed by a comma.

// For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

    let A4 = "haaaah";
    let A2 = "haah";
    let A100 = "h" + "a".repeat(100) + "h";
    let multipleA = /ha{3,}h/;
    multipleA.test(A4);
    multipleA.test(A2);
    multipleA.test(A100);

// In order, the three test calls would return true, false, and true.

//#endregion

//#region Specify Exact Number of Matches 

// You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. 
// Sometimes you only want a specific number of matches.

// To specify a certain number of patterns, just have that one number between the curly brackets.

// For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.

    let A4 = "haaaah";
    let A3 = "haaah";
    let A100 = "h" + "a".repeat(100) + "h";
    let multipleHA = /ha{3}h/;
    multipleHA.test(A4);
    multipleHA.test(A3);
    multipleHA.test(A100);

// In order, the three test calls would return false, true, and false.

//#endregion

//#region Check for All or None 

// Sometimes the patterns you want to search for may have parts of it that may or may not exist. 
// However, it may be important to check for them nonetheless.

// You can specify the possible existence of an element with a question mark, ?. 
// This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

// For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

    let american = "color";
    let british = "colour";
    let rainbowRegex= /colou?r/;
    rainbowRegex.test(american);
    rainbowRegex.test(british);

// Both uses of the test method would return true.

//#endregion

//#region Positive and Negative Lookahead 

// Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. 
// This can be useful when you want to search for multiple patterns over the same string.

// There are two kinds of lookaheads: positive lookahead and negative lookahead.

// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. 
// A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. 
// A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. 
// The rest of the pattern is returned if the negative lookahead part is not present.

// Lookaheads are a bit confusing but some examples will help.

    let quit = "qu";
    let noquit = "qt";
    let quRegex= /q(?=u)/;
    let qRegex = /q(?!u)/;
    quit.match(quRegex);
    noquit.match(qRegex);

// Both of these match calls would return ["q"].

// A more practical use of lookaheads is to check two or more patterns in one string. 
// Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

    let password = "abc123";
    let checkPass = /(?=\w{3,6})(?=\D*\d)/;
    checkPass.test(password);

// Coding challenge:
// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

    let sampleWord = "astronaut";
    let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
    let result = pwRegex.test(sampleWord);


// Hint 1
// Remeber to use 2 lookaheads to check the patterns in the string. 
// The first lookahead is very similar to that given in the example 
// - ‘(?=\w{3,6})’ - only the lower-number 3 is too low for our test cases, 
// and an upper-number is completely unneccesarry. 
// This first lookahead is only used to find a string consisting of a certain amount of characters. 
// A second lookahead must be used to check for consecutive numerical values at the end of the string.

// Hint 2
// The second lookahead is also similar to that given in the example - (?=\D*\d) - however, 
// this expression too must be modified to pass all test cases. 
// Remember to specify the exact amount of numbers you want to appear at the end of the string.

//#endregion

//#region Check For Mixed Grouping of Characters 

// Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().
// If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g
// Then check whether the desired string groups are in the test string by using the test() method.

    let testStr = "Pumpkin";
    let testRegex = /P(engu|umpk)in/;
    testRegex.test(testStr);

// The test method here would return true.

//#endregion

//#region Reuse Patterns Using Capture Groups 

// Some patterns you search for will occur multiple times in a string. 
// It is wasteful to manually repeat that regex. 
// There is a better way to specify when you have multiple repeat substrings in your string.

// You can search for repeat substrings using capture groups. 
// Parentheses, ( and ), are used to find repeat substrings. 
// You put the regex of the pattern that will repeat in between the parentheses.

// To specify where that repeat string will appear, you use a backslash (\) and then a number. 
// This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.

// The example below matches any word that occurs twice separated by a space:

    let repeatStr = "regex regex";
    let repeatRegex = /(\w+)\s\1/;
    repeatRegex.test(repeatStr);
    repeatStr.match(repeatRegex);

// The test call would return true, and the match call would return ["regex regex", "regex"].
// Using the .match() method on a string will return an array with the string it matches, along with its capture group.

// Hint 1
// Given code below:

    let testString = "test test test";
    let reRegex = /(test)\s\1/;
    let result = reRegex.test(testString);

// result will match only test test because \1 in this example stands for the same text 
// as most recently matched by the 1st capturing group (test).
// If we were to literally translate the regex, it would look something like this:

    let re = /(test)\s\1/;
    let literalRe = /test\stest/;

// Both re and literalRe would match the same thing.

// Hint 2
// Given the code below:

    let testString = "test test test";
    let reRegex = /(test)(\s)\1\2\1/;
    let result = reRegex.test(testString);

// result will match whole test test test because:
// \1 repeats (test)
// \2 repeats (\s)

// Hint 3
// The code below:

    let testString = "test test test test test test";
    let reRegex = /(test)(\s)\1\2\1/g;
    let result = reRegex.test(testString);

// because we used \g, our Regex doesn’t return after first full match (test test test) and matched all repetitions. 
// Think about how you can assert the start and end of the string.

//#endregion

//#region Use Capture Groups to Search and Replace 

// Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

// You can search and replace text in a string using .replace() on a string. 
// The inputs for .replace() is first the regex pattern you want to search for. 
// The second parameter is the string to replace the match or a function to do something.

    let wrongText = "The sky is silver.";
    let silverRegex = /silver/;
    wrongText.replace(silverRegex, "blue");

// The replace call would return the string The sky is blue..
// You can also access capture groups in the replacement string with dollar signs ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

// The replace call would return the string Camp Code.
// Write a regex fixRegex using three capture groups that will search for each word in the string one two three. 
// Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. 
// Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.

    let str = "one two three";
    let fixRegex = /(\w+)\s(\w+)\s(\w+)/;  
    let replaceText = "$3 $2 $1"; 
    let result = str.replace(fixRegex, replaceText);

//#endregion

//#region Remove Whitespace from Start and End 

// Sometimes whitespace characters around strings are not wanted but are there. 
// Typical processing of strings is to remove the whitespace at the start and end of it.
// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

// Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.

    let hello = "   Hello, World!  ";
    let wsRegex = /^\s+|\s+$/g; 
    let result = hello.replace(wsRegex, ""); 

//#endregion







































