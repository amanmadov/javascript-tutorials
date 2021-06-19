

    let jsCourse = {

        courseName : "JavaScript Algorithms and Data Structures",
            author : "Freecodecamp",
               url : "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures"
    
    }



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


// Debugging


//#region Use typeof to Check the Type of a Variable 

// You can use typeof to check the data structure, or type, of a variable. 
// This is useful in debugging when working with multiple data types. 
// If you think you're adding two numbers, but one is actually a string, the results can be unexpected. 
// Type errors can lurk in calculations or function calls. 
// Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.

// Here are some examples using typeof:

    console.log(typeof "");
    console.log(typeof 0);
    console.log(typeof []);
    console.log(typeof {});

// In order, the console will display the strings string, number, object, and object.

// JavaScript recognizes six primitive (immutable) data types: 
// Boolean, Null, Undefined, Number, String, and Symbol (new with ES6) and one type for mutable items: Object. 
// Note that in JavaScript, arrays are technically a type of object.

//#endregion

//#region Catch Misspelled Variable and Function Names 

// The console.log() and typeof methods are the two primary ways to check intermediate values and types of program output. 
// Now it's time to get into the common forms that bugs take. 
// One syntax-level issue that fast typers can commiserate with is the humble spelling error.

// Transposed, missing, or mis-capitalized characters in a variable or function name will have the 
// browser looking for an object that doesn't exist - and complain in the form of a reference error. 
// JavaScript variable and function names are case-sensitive.

//#endregion

//#region Catch Unclosed Parentheses, Brackets, Braces and Quotes 

// Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair. 
// Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. 
// Also, take care when nesting code blocks into others, such as adding a callback function as an argument to a method.

// One way to avoid this mistake is as soon as the opening character is typed, 
// immediately include the closing match, then move the cursor back between them and continue coding. 
// Fortunately, most modern code editors generate the second half of the pair automatically.

//#endregion

//#region Catch Mixed Usage of Single and Double Quotes 

// JavaScript allows the use of both single (') and double (") quotes to declare a string. 
// Deciding which one to use generally comes down to personal preference, with some exceptions.

// Having two choices is great when a string has contractions or another piece of text that's in quotes. 
// Just be careful that you don't close the string too early, which causes a syntax error.

// Here are some examples of mixing quotes:

    const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
    const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
    const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';

// The first two are correct, but the third is incorrect.

// Of course, it is okay to use only one style of quotes. 
// You can escape the quotes inside the string by using the backslash (\) escape character:

    const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';

//#endregion

//#region Catch Use of Assignment Operator Instead of Equality Operator 

// Branching programs, i.e. ones that do different things if certain conditions are met, 
// rely on if, else if, and else statements in JavaScript. 
// The condition sometimes takes the form of testing whether a result is equal to a value.

// This logic is spoken (in English, at least) as "if x equals y, then ..." 
// which can literally translate into code using the =, or assignment operator. 
// This leads to unexpected control flow in your program.

// As covered in previous challenges, the assignment operator (=) in JavaScript assigns a value to a variable name. 
// And the == and === operators check for equality (the triple === tests for strict equality, 
//     meaning both value and type are the same).

// The code below assigns x to be 2, which evaluates as true. 
// Almost every value on its own in JavaScript evaluates to true, 
// except what are known as the "falsy" values: false, 0, "" (an empty string), NaN, undefined, and null.

    let x = 1;
    let y = 2;
    if (x = y) {

    } else {

    }

// In this example, the code block within the if statement will run for any value of y, unless y is falsy. 
// The else block, which we expect to run here, will not actually run.

//#endregion

//#region Catch Missing Open and Closing Parenthesis After a Function Call 

// When a function or method doesn't take any arguments, 
// you may forget to include the (empty) opening and closing parentheses when calling it. 
// Often times the result of a function call is saved in a variable for other use in your code. 
// This error can be detected by logging variable values (or their types) to the console 
// and seeing that one is set to a function reference, instead of the expected value the function returns.

// The variables in the following example are different:

    function myFunction() {
        return "You rock!";
    }
    let varOne = myFunction;
    let varTwo = myFunction();

// Here varOne is the function myFunction, and varTwo is the string You rock!.

//#endregion

//#region Catch Arguments Passed in the Wrong Order When Calling a Function 

// Continuing the discussion on calling functions, 
// the next bug to watch out for is when a function's arguments are supplied in the incorrect order. 
// If the arguments are different types, such as a function expecting an array and an integer, 
// this will likely throw a runtime error. 
// If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. 
// Make sure to supply all required arguments, in the proper order to avoid these issues.

//#endregion

//#region Catch Off By One Errors When Using Indexing 

// Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index 
// of a string or array (to slice or access a segment), or when looping over the indices of them. 
// JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. 
// If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print undefined.

// When you use string or array methods that take index ranges as arguments, 
// it helps to read the documentation and understand if they are inclusive 
// (the item at the given index is part of what's returned) or not. 
// Here are some examples of off by one errors:

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let len = alphabet.length;
    for (let i = 0; i <= len; i++) {
        console.log(alphabet[i]);
    }
    for (let j = 1; j < len; j++) {
        console.log(alphabet[j]);
    }
    for (let k = 0; k < len; k++) {
        console.log(alphabet[k]);
    }

// The first example here loops one too many times, 
// and the second loops one too few times (missing the first index, 0). 
// The third example is correct.

//#endregion

//#region Use Caution When Reinitializing Variables Inside a Loop 

// Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. 
// A potential issue is when variables either should be reinitialized, and aren't, or vice versa. 
// This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

// Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, 
// or failing to reset a variable.

//#endregion

//#region Prevent Infinite Loops with a Valid Terminal Condition 

// The final topic is the dreaded infinite loop. 
// Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, 
// but they need a terminal condition that ends the looping. 
// Infinite loops are likely to freeze or crash the browser, 
// and cause general program execution mayhem, which no one wants.

// There was an example of an infinite loop in the introduction to this section - it had no 
// terminal condition to break out of the while loop inside loopy(). Do NOT call this function!

    function loopy() {
    while(true) {
        console.log("Hello, world!");
    }
    }

// It's the programmer's job to ensure that the terminal condition, 
// which tells the program when to break out of the loop code, is eventually reached. 
// One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition. 
// Another one is accidentally resetting a counter or index variable within the loop code, 
// instead of incrementing or decrementing it.

//#endregion


// Basic Data Structures


//#region Use an Array to Store a Collection of Data 

// The below is an example of the simplest implementation of an array data structure. 
// This is known as a one-dimensional array, meaning it only has one level, 
// or that it does not have any other arrays nested within it. 
// Notice it contains booleans, strings, and numbers, among other valid JavaScript data types:

    let simpleArray = ['one', 2, 'three', true, false, undefined, null];
    console.log(simpleArray.length);

// The console.log call displays 7.

// All arrays have a length property, which as shown above, 
// can be very easily accessed with the syntax Array.length. 
// A more complex implementation of an array can be seen below. 
// This is known as a multi-dimensional array, or an array that contains other arrays. 
// Notice that this array also contains JavaScript objects, 
// which we will examine very closely in our next section, 
// but for now, all you need to know is that arrays are also capable of storing complex objects.

    let complexArray = [
    [
        {
        one: 1,
        two: 2
        },
        {
        three: 3,
        four: 4
        }
    ],
    [
        {
        a: "a",
        b: "b"
        },
        {
        c: "c",
        d: "d"
        }
    ]
    ];

//#endregion

//#region Access an Array's Contents Using Bracket Notation 

// The fundamental feature of any data structure is, 
// of course, the ability to not only store data, 
// but to be able to retrieve that data on command. 
// So, now that we've learned how to create an array, 
// let's begin to think about how we can access that array's information.

// When we define a simple array as seen below, there are 3 items in it:

    let ourArray = ["a", "b", "c"];

// In an array, each array item has an index. 
// This index doubles as the position of that item in the array, and how you reference it. 
// However, it is important to note, that JavaScript arrays are zero-indexed, 
// meaning that the first element of an array is actually at the zeroth position, not the first. 
// In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, 
// or more commonly, to a variable which references an array object. 
// This is known as bracket notation. 
// For example, if we want to retrieve the a from ourArray and assign it to a variable, 
// we can do so with the following code:

    let ourVariable = ourArray[0];

// Now ourVariable has the value of a.

// In addition to accessing the value associated with an index, 
// you can also set an index to a value using the same notation:

    ourArray[1] = "not b anymore";

// Using bracket notation, we have now reset the item at index 1 from the string b, to not b anymore. 
// Now ourArray is ["a", "not b anymore", "c"].

//#endregion

//#region Add Items to an Array with push() and unshift() 

// An array's length, like the data types it can contain, is not fixed. 
// Arrays can be defined with a length of any number of elements, 
// and elements can be added or removed over time; in other words, arrays are mutable. 
// In this challenge, we will look at two methods with which we can programmatically modify an array: Array.push() and Array.unshift().

// Both methods take one or more elements as parameters and add those elements to the array the method is being called on; 
// the push() method adds elements to the end of an array, and unshift() adds elements to the beginning. Consider the following:

    let twentyThree = 'XXIII';
    let romanNumerals = ['XXI', 'XXII'];

    romanNumerals.unshift('XIX', 'XX');

// romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII'].

    romanNumerals.push(twentyThree);

// romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. 
//Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.

//#endregion

//#region Remove Items from an Array with pop() and shift() 

// Both push() and unshift() have corresponding methods that are nearly functional opposites: pop() and shift(). 
// As you may have guessed by now, instead of adding, 
// pop() removes an element from the end of an array, 
// while shift() removes an element from the beginning. 
// The key difference between pop() and shift() and their cousins push() and unshift(), 
// is that neither method takes parameters, 
// and each only allows an array to be modified by a single element at a time.

// Let's take a look:

    let greetings = ['whats up?', 'hello', 'see ya!'];
    greetings.pop();

// greetings would have the value ['whats up?', 'hello'].

    greetings.shift();

// greetings would have the value ['hello'].
// We can also return the value of the removed element with either method like this:

    let popped = greetings.pop();

// greetings would have the value [], and popped would have the value hello.

//#endregion

//#region Remove Items Using splice() 

// Ok, so we've learned how to remove elements from the beginning and end of arrays using shift() and pop(), 
// but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? 
// Well, that's where splice() comes in. splice() allows us to do just that: 
// remove any number of consecutive elements from anywhere in an array.

// splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. 
// The first two parameters of splice() are integers which represent indexes, or positions, 
// of the array that splice() is being called upon. 
// And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. 
// splice()'s first parameter represents the index on the array from which to begin removing elements, 
// while the second parameter indicates the number of elements to delete. For example:

    let array = ['today', 'was', 'not', 'so', 'great'];
    array.splice(2, 2);

// Here we remove 2 elements, beginning with the third element (at index 2). 
// array would have the value ['today', 'was', 'great'].

// splice() not only modifies the array it's being called on, 
// but it also returns a new array containing the value of the removed elements:

    let array = ['I', 'am', 'feeling', 'really', 'happy'];
    let newArray = array.splice(3, 2);

// newArray has the value ['really', 'happy'].

//#endregion

//#region Add Items Using splice() 

// Remember in the last challenge we mentioned that splice() can take up to three parameters? 
// Well, you can use the third parameter, comprised of one or more element(s), to add to the array. 
// This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

    const numbers = [10, 11, 12, 12, 15];
    const startIndex = 3;
    const amountToDelete = 1;

    numbers.splice(startIndex, amountToDelete, 13, 14);
    console.log(numbers);

// The second occurrence of 12 is removed, and we add 13 and 14 at the same index. 
// The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].

// Here, we begin with an array of numbers. 
// Then, we pass the following to splice(): 
// The index at which to begin deleting elements (3), 
// the number of elements to be deleted (1), 
// and the remaining arguments (13, 14) will be inserted starting at that same index. 
// Note that there can be any number of elements (separated by commas) following amountToDelete, 
// each of which gets inserted.

//#endregion

//#region Copy Array Items Using slice() 

// The next method we will cover is slice(). 
// Rather than modifying an array, 
// slice() copies or extracts a given number of elements to a new array, 
// leaving the array it is called upon untouched. 
// slice() takes only 2 parameters — the first is the index at which to begin extraction, 
// and the second is the index at which to stop extraction (extraction will occur up to, 
// but not including the element at this index). 
// Consider this:

    let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
    let todaysWeather = weatherConditions.slice(1, 3);

// todaysWeather would have the value ['snow', 'sleet'], 
// while weatherConditions would still have ['rain', 'snow', 'sleet', 'hail', 'clear'].

// In effect, we have created a new array by extracting elements from an existing array.

//#endregion

//#region Copy an Array with the Spread Operator 

// While slice() allows us to be selective about what elements of an array to copy, 
// among several other useful tasks, 
// ES6's new spread operator allows us to easily copy all of an array's elements, 
// in order, with a simple and highly readable syntax. 
// The spread syntax simply looks like this: ...

// In practice, we can use the spread operator to copy an array like so:

    let thisArray = [true, true, undefined, false, null];
    let thatArray = [...thisArray];

// thatArray equals [true, true, undefined, false, null]. 
// thisArray remains unchanged and thatArray contains the same elements as thisArray.

// Coding challenge:
// We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. 
// The function is supposed to return a new array made up of num copies of arr. 
// We have done most of the work for you, but it doesn't work quite right yet. 
// Modify the function using spread syntax so that it works correctly 
// (hint: another method we have already covered might come in handy here!).

    function copyMachine(arr, num) {
        let newArr = [];
        while (num >= 1) {
        // Only change code below this line
            newArr.push([...arr]);
        // Only change code above this line
            num--;
        }
        return newArr;
    }
    
    console.log(copyMachine([true, false, true], 2));

//#endregion

//#region Combine Arrays with the Spread Operator 

// Another huge advantage of the spread operator is the ability to combine arrays, 
// or to insert all the elements of one array into another, at any index. 
// With more traditional syntaxes, we can concatenate arrays, 
// but this only allows us to combine arrays at the end of one, and at the start of another. 
// Spread syntax makes the following operation extremely simple:

    let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
    let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

// thatArray would have the value ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

// Using spread syntax, we have just achieved an operation that would have been 
// more complex and more verbose had we used traditional methods.

// Coding challenge:
// We have defined a function spreadOut that returns the variable sentence. 
// Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

    function spreadOut() {
        let fragment = ['to', 'code'];
        let sentence=['learning', ...fragment, 'is', 'fun']; // Change this line
        return sentence;
    }
    
    console.log(spreadOut());

//#endregion

//#region Check For The Presence of an Element With indexOf() 

// Since arrays can be changed, or mutated, at any time, 
// there's no guarantee about where a particular piece of data will be on a given array, 
// or if that element even still exists. 
// Luckily, JavaScript provides us with another built-in method, indexOf(), 
// that allows us to quickly and easily check for the presence of an element on an array. 
// indexOf() takes an element as a parameter, and when called, it returns the position, 
// or index, of that element, or -1 if the element does not exist on the array.

// For example:

    let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
    fruits.indexOf('dates');
    fruits.indexOf('oranges');
    fruits.indexOf('pears');

// indexOf('dates') returns -1, indexOf('oranges') returns 2, 
// and indexOf('pears') returns 1 (the first index at which each element exists).

// Coding challenge:
// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. 
// We have defined a function, quickCheck, that takes an array and an element as arguments. 
// Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

    function quickCheck(arr, elem) {
    // Only change code below this line
        return arr.indexOf(elem) > -1;
    // Only change code above this line
    }

    console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//#endregion

//#region Iterate Through All an Array's Items Using For Loops 

// Sometimes when working with arrays, it is very handy to be able to iterate through each item 
// to find one or more elements that we might need, or to manipulate an array based on which data 
// items meet a certain set of criteria. JavaScript offers several built in methods that each 
// iterate over arrays in slightly different ways to achieve different results (such as every(), 
// forEach(), map(), etc.), however the technique which is most flexible and offers us the 
// greatest amount of control is a simple for loop.

// Consider the following:

    function greaterThanTen(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 10) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

    greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

// Using a for loop, this function iterates through and accesses each element of the array, 
// and subjects it to a simple test that we have created. 
// In this way, we have easily and programmatically determined which data items are greater than 10, 
// and returned a new array, [12, 14, 80], containing those items.

// Coding challenge:
// We have defined a function, filteredArray, which takes arr, 
// a nested array, and elem as arguments, and returns a new array. 
// elem represents an element that may or may not be present on one 
// or more of the arrays nested within arr. Modify the function, using a for loop, 
// to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

    function filteredArray(arr, elem) {
        let newArr = [];
        // Only change code below this line
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].indexOf(elem) === -1) {
                newArr.push(arr[i]);
            }
        }
        // Only change code above this line
        return newArr;
    }
    
    console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//#endregion

//#region Create complex multi-dimensional arrays 

// Awesome! You have just learned a ton about arrays! This has been a fairly high level overview, 
// and there is plenty more to learn about working with arrays, much of which you will see in later sections. 
// But before moving on to looking at Objects, lets take one more look, 
// and see how arrays can become a bit more complex than what we have seen in previous challenges.

// One of the most powerful features when thinking of arrays as data structures, 
// is that arrays can contain, or even be completely made up of other arrays. 
// We have seen arrays that contain arrays in previous challenges, but fairly simple ones. 
// However, arrays can contain an infinite depth of arrays that can contain other arrays, 
// each with their own arbitrary levels of depth, and so on. 
// In this way, an array can very quickly become very complex data structure, 
// known as a multi-dimensional, or nested array. Consider the following example:

    let nestedArray = [
    ['deep'],
    [
        ['deeper'], ['deeper'] 
    ],
    [
        [
        ['deepest'], ['deepest']
        ],
        [
        [
            ['deepest-est?']
        ]
        ]
    ]
    ];

// The deep array is nested 2 levels deep. 
// The deeper arrays are 3 levels deep. 
// The deepest arrays are 4 levels, and the deepest-est? is 5.

// While this example may seem convoluted, this level of complexity is not unheard of, 
// or even unusual, when dealing with large amounts of data. 
// However, we can still very easily access the deepest levels of an array this complex with bracket notation:

    console.log(nestedArray[2][1][0][0][0]);

// This logs the string deepest-est?. 
// And now that we know where that piece of data is, we can reset it if we need to:

    nestedArray[2][1][0][0][0] = 'deeper still';

    console.log(nestedArray[2][1][0][0][0]);

// Now it logs deeper still.

//#endregion

//#region Add Key-Value Pairs to JavaScript Objects 

// At their most basic, objects are just collections of key-value pairs. 
// In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys). 
// Take a look at an example:

    const tekkenCharacter = {
        player: 'Hwoarang',
        fightingStyle: 'Tae Kwon Doe',
        human: true
    };

// The above code defines a Tekken video game character object called tekkenCharacter. 
// It has three properties, each of which map to a specific value. 
// If you want to add an additional property, such as "origin", it can be done by assigning origin to the object:

    tekkenCharacter.origin = 'South Korea';

// This uses dot notation. If you were to observe the tekkenCharacter object, it will now include the origin property. 
// Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:

    tekkenCharacter['hair color'] = 'dyed orange';

// Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. 
// In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. 
// Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is. 
// Here's an example with a variable:

    const eyes = 'eye color';

    tekkenCharacter[eyes] = 'brown';

// After adding all the examples, the object will look like this:

    // {
    //     player: 'Hwoarang',
    //     fightingStyle: 'Tae Kwon Doe',
    //     human: true,
    //     origin: 'South Korea',
    //     'hair color': 'dyed orange',
    //     'eye color': 'brown'
    // };


//#endregion

//#region Modify an Object Nested Within an Object 

// Now let's take a look at a slightly more complex object. 
// Object properties can be nested to an arbitrary depth, 
// and their values can be any type of data supported by JavaScript, 
// including arrays and even other objects. Consider the following:

    let nestedObject = {
        id: 28802695164,
        date: 'December 31, 2016',
        data: {
            totalUsers: 99,
            online: 80,
            onlineStatus: {
            active: 67,
            away: 13,
            busy: 8
            }
        }
    };

// nestedObject has three properties: id (value is a number), date (value is a string), 
// and data (value is an object with its nested structure). 
// While structures can quickly become complex, 
// we can still use the same notations to access the information we need. 
// To assign the value 10 to the busy property of the nested onlineStatus object, 
// we use dot notation to reference the property:

    nestedObject.data.onlineStatus.busy = 10;

//#endregion

//#region Access Property Names with Bracket Notation 

// In the first object challenge we mentioned the use of bracket notation 
// as a way to access property values using the evaluation of a variable. 
// For instance, imagine that our foods object is being used in a program for a supermarket cash register. 
// We have some function that sets the selectedFood and we want to check our foods object for the presence of that food. 
// This might look like:

    let selectedFood = getCurrentFood(scannedItem);
    let inventory = foods[selectedFood];

// This code will evaluate the value stored in the selectedFood variable 
// and return the value of that key in the foods object, or undefined if it is not present. 
// Bracket notation is very useful because sometimes object properties are not known before 
// runtime or we need to access them in a more dynamic way.

    let foods = {
        apples: 25,
        oranges: 32,
        plums: 28,
        bananas: 13,
        grapes: 35,
        strawberries: 27
    };

    function checkInventory(scannedItem) {
        return foods[scannedItem];
    }

    console.log(checkInventory("apples"));

//#endregion

//#region Use the delete Keyword to Remove Object Properties 

// Now you know what objects are and their basic features and advantages. 
// In short, they are key-value stores which provide a flexible, intuitive way to structure data, 
// and, they provide very fast lookup time. Throughout the rest of these challenges, 
// we will describe several common operations you can perform on objects so you can 
// become comfortable applying these useful data structures in your programs.

// In earlier challenges, we have both added to and modified an object's key-value pairs. 
// Here we will see how we can remove a key-value pair from an object.

// Let's revisit our foods object example one last time. If we wanted to remove the apples key, 
// we can remove it by using the delete keyword like this:

    delete foods.apples;

//#endregion

//#region Check if an Object has a Property 

// Now we can add, modify, and remove keys from objects. 
// But what if we just wanted to know if an object has a specific property? 
// JavaScript provides us with two different ways to do this. 
// One uses the hasOwnProperty() method and the other uses the in keyword. 
// If we have an object users with a property of Alan, we could check for its presence in either of the following ways:

    users.hasOwnProperty('Alan');

// 'Alan' in users;
// Both of these would return true.

//#endregion

//#region Iterate Through the Keys of an Object with a for...in Statement 

// Sometimes you may need to iterate through all the keys within an object. 
// This requires a specific syntax in JavaScript called a for...in statement. 
// For our users object, this could look like:

    for (let user in users) {
        console.log(user);
    }

// This would log Alan, Jeff, Sarah, and Ryan - each value on its own line.

// In this statement, we defined a variable user, and as you can see, 
// this variable was reset during each iteration to each of the object's 
// keys as the statement looped through the object, resulting in each user's name being printed to the console.

// NOTE: Objects do not maintain an ordering to stored keys like arrays do; 
// thus a key's position on an object, or the relative order in which it appears, 
// is irrelevant when referencing or accessing that key.

// Coding challenge:
// We've defined a function countOnline which accepts one argument (a users object). 
// Use a for...in statement within this function to loop through the users object 
// passed into the function and return the number of users whose online property is set to true. 
// An example of a users object which could be passed to countOnline is shown below. 
// Each user will have an online property with either a true or false value.

    // {
    // Alan: {
    //     online: false
    // },
    // Jeff: {
    //     online: true
    // },
    // Sarah: {
    //     online: false
    // }
    // }

    function countOnline(usersObj) {
        // Only change code below this line
        let count = 0;
        for (let user in usersObj) {
           if(usersObj[user].online) count++;
        }
        return count;
        // Only change code above this line
    }

//#endregion

//#region Generate an Array of All Object Keys with Object.keys() 

// We can also generate an array which contains all the keys stored in an object 
// using the Object.keys() method and passing in an object as the argument. 
// This will return an array with strings representing each property in the object. 
// Again, there will be no specific order to the entries in the array.

// Coding challenge:
// Finish writing the getArrayOfUsers function so that it returns an array 
// containing all the properties in the object it receives as an argument.

    let users = {
        Alan: {
        age: 27,
        online: false
        },
        Jeff: {
        age: 32,
        online: true
        },
        Sarah: {
        age: 48,
        online: false
        },
        Ryan: {
        age: 19,
        online: true
        }
    };
  
    function getArrayOfUsers(obj) {
        // Only change code below this line
        return Object.keys(obj);
        // Only change code above this line
    }
    
    console.log(getArrayOfUsers(users));

//#endregion

//#region Modify an Array Stored in an Object 

// Now you've seen all the basic operations for JavaScript objects. 
// You can add, modify, and remove key-value pairs, check if keys exist, 
// and iterate over all the keys in an object. 
// As you continue learning JavaScript you will see even more versatile applications of objects. 
// Additionally, the Data Structures lessons located in the Coding Interview Prep section 
// of the curriculum also cover the ES6 Map and Set objects, 
// both of which are similar to ordinary objects but provide some additional features. 
// Now that you've learned the basics of arrays and objects, 
// you're fully prepared to begin tackling more complex problems using JavaScript!

// Coding challenge:
// Take a look at the object we've provided in the code editor. 
// The user object contains three keys. 
// The data key contains five keys, one of which contains an array of friends. 
// From this, you can see how flexible objects are as data structures. 
// We've started writing a function addFriend. 
// Finish writing it so that it takes a user object and adds the name of the 
// friend argument to the array stored in user.data.friends and returns that array.

    let user = {
        name: 'Kenneth',
        age: 28,
        data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
        }
    };
  
    function addFriend(userObj, friend) {
        // Only change code below this line
        userObj.data.friends.push(friend); 
        return userObj.data.friends;
        // Only change code above this line
    }
    
    console.log(addFriend(user, 'Pete'));

//#endregion


// Basic Algorithm Scripting


//#region Convert Celsius to Fahrenheit 

// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. 
// Use the variable fahrenheit already defined and assign it the Fahrenheit 
// temperature equivalent to the given Celsius temperature. 
// Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

    function convertToF(celsius) {
        let fahrenheit = celsius * 9/5 + 32;
        return fahrenheit;
    }
  
    convertToF(30);

//#endregion

//#region Reverse a String 

// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

    // Solution 1:
    function reverseString(str) {
        for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }
        return reversedStr;
    }

    // Solution 2:
    function reverseString(str) {
        return Array.from(str).reverse().join((''));
    }

    reverseString("hello");

//#endregion

//#region Factorialize a Number 

// Return the factorial of the provided integer.
// If the integer is represented with the letter n, 
// a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

    // Solution 1:
    function factorialize(num) {
        for (var product = 1; num > 0; num--) {
            product *= num;
        }
        return product;
    }

    factorialize(5);
    
    // Solution 2:
    function factorialize(num) {
        let result = num < 2 ? 1 : num * factorialize(num - 1);
        return result;
    }
    
    // Solution 3:
    function factorialize(num, factorial = 1) {
        return num < 0 ? 1 : (
            new Array(num)
            .fill(undefined)
            .reduce((product, val, index) => product * (index + 1), 1)
        );
    }

//#endregion

//#region Find the Longest Word in a String 

// Return the length of the longest word in the provided sentence.
// Your response should be a number.

    // Solution 1:
    function findLongestWordLength(str) {
        let words = str.split(' ');
        let maxLength = 0;

        for (let i = 0; i < words.length; i++) {
            if (words[i].length > maxLength) {
                maxLength = words[i].length;
            }
        }

        return maxLength;
    }

    // Solution 2:
    function findLongestWordLength(s) {
        return s.split(' ')
                .reduce(function(longest, word) {
                    return Math.max(longest, word.length)
                }, 0);
    }

    // Solution 3:
    function findLongestWordLength(str) {
        return Math.max(...str.split(" ").map(word => word.length));
    }

    // Solution 4:
    function findLongestWordLength(str) {
        // split the string into individual words
        const words = str.split(" ");
      
        // words only has 1 element left that is the longest element
        if (words.length == 1) {
            return words[0].length;
        }
      
        // if words has multiple elements, remove the first element
        // and recursively call the function
        return Math.max(
            words[0].length,
            findLongestWordLength(words.slice(1).join(" "))
        );
      }

    // Solution 5:
    function findLongestWordLength(str) {
        return str.split(' ').sort((a, b) => b.length - a.length)[0].length;
    }

    findLongestWordLength("The quick brown fox jumped over the lazy dog");


//#endregion

//#region Return Largest Numbers in Arrays 

// Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, 
// and access each member with array syntax arr[i].

    // Solution 1:
    function largestOfFour(arr) {
        let results = [];
        for (let i = 0; i < arr.length; i++) {
            let largestNumber = arr[i][0];
            for (let j = 1; j < arr[i].length; j++) {
                if (arr[i][j] > largestNumber) {
                    largestNumber = arr[i][j];
                }
            }
            results[i] = largestNumber;
        }
        return results;
    }

    // Solution 2:
    function largestOfFour(arr) {
        return arr.map(function(group) {
            return group.reduce(function(prev, current) {
                return current > prev ? current : prev;
            });
        });
    }

    // Solution 3:
    function largestOfFour(arr) {
        return arr.map(Function.apply.bind(Math.max, null));
    }

    // Solution 4:
    function largestOfFour(arr, finalArr = []) {
        return !arr.length ? finalArr : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
    }

    // Solution 5:
    function largestOfFour(arr) {
        let mArray = [];
        for(let i = 0; i < arr.length; i++){
            mArray.push(Math.max(...arr[i]));
        }
        return mArray;
    }

    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//#endregion

//#region Confirm the Ending 

// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

    // Solution 1:
    function confirmEnding(str, target) {
        return str.slice(str.length - target.length) === target;
    }
    
    confirmEnding("Bastian", "n");

    // Solution 2:
    function confirmEnding(str, target) {
        let re = new RegExp(target + "$", "i");
        return re.test(str);
    }

    // Solution 3:
    function confirmEnding(str, target) {
        return str.slice(-target.length) === target
    }

//#endregion

//#region Repeat a String Repeat a String 

// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. 
// For the purpose of this challenge, do not use the built-in .repeat() method.

    // Solution 1:
    function repeatStringNumTimes(str, num) {
        if(num <= 0) return "";

        let combinedStr = str
        for(let i = 1; i < num; i++){
            combinedStr = combinedStr + str;
        }
        return combinedStr;
    }

    repeatStringNumTimes("abc", 3);

    // Solution 2:
    function repeatStringNumTimes(str, num) {
        var accumulatedStr = "";
      
        while (num > 0) {
            accumulatedStr += str;
            num--;
        }
      
        return accumulatedStr;
    }

    // Solution 3:
    function repeatStringNumTimes(str, num) {
        if (num < 1) {
            return "";
        } else {
            return str + repeatStringNumTimes(str, num - 1);
        }
    }

    // Solution 4:
    function repeatStringNumTimes(str, num) {
        return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
    }

//#endregion

//#region Truncate a String 

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

    // Solution 1:
    function truncateString(str, num) {
        return str.length > num ? str.slice(0, num) + "..." : str;
    }

    truncateString("A-tisket a-tasket A green and yellow basket", 8);

//#endregion

//#region Finders Keepers 

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
// This means that given an element x, the 'truth test' is passed if func(x) is true. 
// If no element passes the test, return undefined.

    // Solution 1:
    function findElement(arr, func) {
        let num = 0;
        for (let i = 0; i < arr.length; i++) {
            num = arr[i];
            if (func(num)) {
                return num;
            }
        }
        return undefined;
    }
  
    findElement([1, 2, 3, 4], num => num % 2 === 0);

    // Solution 2:
    function findElement(arr, func) {
        return arr.find(func);
    }

    // Solution 3:
    function findElement(arr, func) {
        return arr[arr.map(func).indexOf(true)];
    }

    // Solution 4:
    function findElement(arr, func) {
        return arr.length && !func(arr[0]) ? findElement(arr.slice(1), func) : arr[0];
    }

//#endregion

//#region Boo who 

// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

    // Solution 1: 
    function booWho(bool) {
        if(bool === true || bool === false) return true;
        return false;
    }

    booWho(null);

    // Solution 2:
    function booWho(bool) {
        return typeof bool === "boolean";
    }

//#endregion

//#region Title Case a Sentence 

// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

    // Solution 1:
    function titleCase(str) {
        var convertToArray = str.toLowerCase().split(" ");
        var result = convertToArray.map(function(val) {
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        });
        return result.join(" ");
    }

    titleCase("I'm a little tea pot");


    // Solution 2:
    function titleCase(str) {
        return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
    }

    // Regex explanation:
        // Find all non-whitespace characters (\S)
        // At the beginning of string (^)
        // Or after any whitespace character (\s)
        // The g modifier searches for other such word pattern in the whole string and replaces them.

        // This solution works with national symbols and accented letters as illustrated by following examples
        // international characters: ‘бабушка курит трубку’ // -> ‘Бабушка Курит Трубку’
        // accented characters: ‘località àtilacol’ // -> ‘Località Àtilacol’

        
    // Solution 3:
    String.prototype.replaceAt = function(index, character) {
        return (this.substr(0, index) + character + this.substr(index + character.length));
    };

    function titleCase(str) {
        var newTitle = str.split(" ");
        var updatedTitle = [];
        for (var st in newTitle) {
            updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
        }
        return updatedTitle.join(" ");
    }

//#endregion

//#region Slice and Splice 

// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

    // Solution 1:
    function frankenSplice(arr1, arr2, n) {
        let localArr = arr2.slice();
        localArr.splice(n, 0, ...arr1);
        return localArr;
    }

    frankenSplice([1, 2, 3], [4, 5, 6], 1);

    // Solution 2:
    function frankenSplice(arr1, arr2, n) {
        let localArray = arr2.slice();
        for (let i = 0; i < arr1.length; i++) {
            localArray.splice(n, 0, arr1[i]);
            n++;
        }
        return localArray;
    }

//#endregion

//#region Falsy Bouncer 

// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

    // Solution 1:
    function bouncer(arr) {
        let newArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) newArray.push(arr[i]);
        }
        return newArray;
    }

    // Solution 2:
    function bouncer(arr) {
        return arr.filter(Boolean);
    }

//#endregion

//#region Where do I Belong 

// Return the lowest index at which a value (second argument) should be inserted into 
// an array (first argument) once it has been sorted. 
// The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 
// because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 
// because once the array has been sorted it will look like [3,5,20] 
// and 19 is less than 20 (index 2) and greater than 5 (index 1).

    // Solution 1:
    function getIndexToIns(arr, num) {
        arr.sort((a, b) => a - b);
        let i = 0;
        while(i < arr.length){
            if(arr[i] >= num) return i;
            i++;
        }
        return i;
    }

    getIndexToIns([40, 60], 50);

    // Solution 2:
    function getIndexToIns(arr, num) {
        arr.sort((a, b) => a - b);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= num)
            return i;
        }
        return arr.length;
    }

    // Solution 3:
    function getIndexToIns(arr, num) {
        return arr.filter(val => num > val).length;
    }

    // Solution 4:
    function getIndexToIns(arr, num) {
        // sort and find right index
        let index = arr
          .sort((curr, next) => curr - next)
          .findIndex(currNum => num <= currNum);
        // Returns index or total length of arr
        return index === -1 ? arr.length : index;
    }
      
    getIndexToIns([40, 60], 500);

    // Solution 5:
    function getIndexToIns(arr, num) {
        return arr
                .concat(num)
                .sort((a, b) => a - b)
                .indexOf(num);
    }

    getIndexToIns([1, 3, 4], 2);

//#endregion

//#region Mutations 

// Return true if the string in the first element of the array contains 
// all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the 
// letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

    // Solution 1:
    function mutation(arr) {
        let arr1 = arr[0].toLowerCase().split("");
        let arr2 = arr[1].toLowerCase().split("");
        for (let i = 0; i < arr2.length; i++) {
            if(!arr1.includes(arr2[i])) return false;
        }
        return true;
    }

    mutation(["hello", "hey"]);

    // Solution 2: Procedural
    function mutation(arr) {
        let test = arr[1].toLowerCase();
        let target = arr[0].toLowerCase();
        for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
        }
        return true;
    }

    // Solution 2: Declarative
    function mutation(arr) {
        return arr[1]
            .toLowerCase()
            .split("")
            .every(function(letter) {
                return arr[0].toLowerCase().indexOf(letter) != -1;
            });
    }

    // Solution 3: Recursive
    function mutation([ target, test ], i = 0) {
        target = target.toLowerCase();
        test = test.toLowerCase();
        return i >= test.length
            ? true
            : !target.includes(test[i])
            ? false
            : mutation([ target, test ], i + 1);
    }

//#endregion

//#region Chunky Monkey 

// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.

    // Solution 1:
    function chunkArrayInGroups(arr, size) {
        let temp = [];
        let result = [];
        for (let a = 0; a < arr.length; a++) {
            if (a % size !== size - 1) temp.push(arr[a]);
            else {
                temp.push(arr[a]);
                result.push(temp);
                temp = [];
            }
        }
        if (temp.length !== 0) result.push(temp);
        return result;
    }

    // Solution 2:
    function chunkArrayInGroups(arr, size) {
        let newArr = [];
        for (let i = 0; i < arr.length; i += size) {
            newArr.push(arr.slice(i, i + size));
        }
        return newArr;
    }

    // Solution 3:
    function chunkArrayInGroups(arr, size) {
        let newArr = [];
        let i = 0;
        while (i < arr.length) {
            newArr.push(arr.slice(i, i + size));
            i += size;
        }
        return newArr;
    }

    chunkArrayInGroups(["a", "b", "c", "d"], 2);

    // Solution 4:
    function chunkArrayInGroups(arr, size) {
        let newArr = [];
        while (arr.length > 0) {
            newArr.push(arr.splice(0, size));
        }
        return newArr;
    }

    // Solution 5:
    function chunkArrayInGroups(arr, size) {
        if (arr.length <= size) {
            return [arr];
        } else {
            return [arr.slice(0, size)].concat(
            chunkArrayInGroups(arr.slice(size), size)
            );
        }
    }

//#endregion


// Object Oriented Programming


//#region Create a Basic JavaScript Object 

// Think about things people see every day, like cars, shops, and birds. 
// These are all objects: tangible things people can observe and interact with.

// What are some qualities of these objects? A car has wheels. 
// Shops sell items. Birds have wings.

// These qualities, or properties, define what makes up an object. 
// Note that similar objects share the same properties, but may have different values for those properties. 
// For example, all cars have wheels, but not all cars have the same number of wheels.

// Objects in JavaScript are used to model real-world objects, 
// giving them properties and behavior just like their real-world counterparts. 
// Here's an example using these concepts to create a duck object:

    let duck = {
        name: "Aflac",
        numLegs: 2
    };

// This duck object has two property/value pairs: a name of Aflac and a numLegs of 2.

//#endregion

//#region Use Dot Notation to Access the Properties of an Object 

// The last challenge created an object with various properties. 
// Now you'll see how to access the values of those properties. Here's an example:

    let duck = {
        name: "Aflac",
        numLegs: 2
    };
    console.log(duck.name);

// Dot notation is used on the object name, duck, 
// followed by the name of the property, name, to access the value of Aflac.

//#endregion

//#region Create a Method on an Object 

// Objects can have a special type of property, called a method.
// Methods are properties that are functions. This adds different behavior to an object. 
// Here is the duck example with a method:

    let duck = {
        name: "Aflac",
        numLegs: 2,
        sayName: function() {return "The name of this duck is " + duck.name + ".";}
    };

    duck.sayName();

// The example adds the sayName method, which is a function that returns a sentence giving the name of the duck. 
// Notice that the method accessed the name property in the return statement using duck.name. 
// The next challenge will cover another way to do this.

//#endregion

//#region Make Code More Reusable with the this Keyword 

// The last challenge introduced a method to the duck object. 
// It used duck.name dot notation to access the value for the name property within the return statement:

    sayName: function() {return "The name of this duck is " + duck.name + ".";}

// While this is a valid way to access the object's property, there is a pitfall here. 
// If the variable name changes, any code referencing the original name would need to be updated as well. 
// In a short object definition, it isn't a problem, 
// but if an object has many references to its properties there is a greater chance for error.

// A way to avoid these issues is with the this keyword:

    let duck = {
        name: "Aflac",
        numLegs: 2,
        sayName: function() {return "The name of this duck is " + this.name + ".";}
    };

// this is a deep topic, and the above example is only one way to use it. 
// In the current context, this refers to the object that the method is associated with: duck. 
// If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. 
// It makes the code reusable and easier to read.

//#endregion

//#region Define a Constructor Function 

// Constructors are functions that create new objects. 
// They define properties and behaviors that will belong to the new object. 
// Think of them as a blueprint for the creation of new objects.

// Here is an example of a constructor:

    function Bird() {
        this.name = "Albert";
        this.color = "blue";
        this.numLegs = 2;
    }

// This constructor defines a Bird object with properties name, color, 
// and numLegs set to Albert, blue, and 2, respectively. 
// Constructors follow a few conventions:

// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. 
// Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.

//#endregion

//#region Use a Constructor to Create Objects 

// Here's the Bird constructor from the previous challenge:

    function Bird() {
        this.name = "Albert";
        this.color  = "blue";
        this.numLegs = 2;
    }

    let blueBird = new Bird();

// NOTE: this inside the constructor always refers to the object being created.

// Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:

    blueBird.name;
    blueBird.color;
    blueBird.numLegs;

// Just like any other object, its properties can be accessed and modified:

    blueBird.name = 'Elvira';
    blueBird.name;

//#endregion

//#region Extend Constructors to Receive Arguments 

// The Bird and Dog constructors from the last challenge worked well. 
// However, notice that all Birds that are created with the Bird constructor are automatically named Albert, 
// are blue in color, and have two legs. 
// What if you want birds with different values for name and color? 
// It's possible to change the properties of each bird manually but that would be a lot of work:

    let swan = new Bird();
    swan.name = "Carlos";
    swan.color = "white";

// Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. 
// It would take a lot of time to create all the birds, then change the properties to different values for every one. 
// To more easily create different Bird objects, you can design your Bird constructor to accept parameters:

    function Bird(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 2;
    }

// Then pass in the values as arguments to define each unique bird into the Bird constructor: 

    let cardinal = new Bird("Bruce", "red"); 

// This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. 
// The numLegs property is still set to 2. The cardinal has these properties:

    cardinal.name
    cardinal.color
    cardinal.numLegs

// The constructor is more flexible. 
// It's now possible to define the properties for each Bird at the time it is created, 
// which is one way that JavaScript constructors are so useful. 
// They group objects together based on shared characteristics and behavior 
// and define a blueprint that automates their creation.

//#endregion

//#region Verify an Object's Constructor with instanceof 

// Anytime a constructor function creates a new object, 
// that object is said to be an instance of its constructor. 
// JavaScript gives a convenient way to verify this with the instanceof operator. 
// instanceof allows you to compare an object to a constructor, 
// returning true or false based on whether or not that object was created with the constructor. 
// Here's an example:

    let Bird = function(name, color) {
                    this.name = name;
                    this.color = color;
                    this.numLegs = 2;
                }

    let crow = new Bird("Alexis", "black");
    crow instanceof Bird; 
    
// This instanceof method would return true.

// If an object is created without using a constructor, 
// instanceof will verify that it is not an instance of that constructor:

    let canary = {
        name: "Mildred",
        color: "Yellow",
        numLegs: 2
    };
    canary instanceof Bird;

// This instanceof method would return false.

//#endregion

//#region Understand Own Properties 

// In the following example, the Bird constructor defines two properties: name and numLegs:

    function Bird(name) {
        this.name  = name;
        this.numLegs = 2;
    }

    let duck = new Bird("Donald");
    let canary = new Bird("Tweety");

// name and numLegs are called own properties, 
// because they are defined directly on the instance object. 
// That means that duck and canary each has its own separate copy of these properties. 
// In fact every instance of Bird will have its own copy of these properties. 
// The following code adds all of the own properties of duck to the array ownProps:

    let ownProps = [];

    for (let property in duck) {
        if(duck.hasOwnProperty(property)) {
            ownProps.push(property);
        }
    }

    console.log(ownProps);

// The console would display the value ["name", "numLegs"].

//#endregion

//#region Use Prototype Properties to Reduce Duplicate Code 

// Since numLegs will probably have the same value for all instances of Bird, 
// you essentially have a duplicated variable numLegs inside each Bird instance.

// This may not be an issue when there are only two instances, 
// but imagine if there are millions of instances. 
// That would be a lot of duplicated variables.

// A better way is to use the prototype of Bird. 
// Properties in the prototype are shared among ALL instances of Bird. 
// Here's how to add numLegs to the Bird prototype:

    Bird.prototype.numLegs = 2;

// Now all instances of Bird have the numLegs property.

    console.log(duck.numLegs);
    console.log(canary.numLegs);

// Since all instances automatically have the properties on the prototype, 
// think of a prototype as a "recipe" for creating objects. 
// Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. 
// Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.

//#endregion

//#region Iterate Over All Properties 

// You have now seen two kinds of properties: own properties and prototype properties. 
// Own properties are defined directly on the object instance itself. 
// And prototype properties are defined on the prototype.

    function Bird(name) {
        this.name = name;  //own property
    }

    Bird.prototype.numLegs = 2; // prototype property

    let duck = new Bird("Donald");

// Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

    let ownProps = [];
    let prototypeProps = [];

    for (let property in duck) {
        if(duck.hasOwnProperty(property)) {
            ownProps.push(property);
        } else {
            prototypeProps.push(property);
        }
    }

    console.log(ownProps);
    console.log(prototypeProps);

// console.log(ownProps) would display ["name"] in the console, 
// and console.log(prototypeProps) would display ["numLegs"].

//#endregion

//#region Understand the Constructor Property 

// There is a special constructor property located on the object instances 
// duck and beagle that were created in the previous challenges:

    let duck = new Bird();
    let beagle = new Dog();

    console.log(duck.constructor === Bird); 
    console.log(beagle.constructor === Dog);

// Both of these console.log calls would display true in the console.

// Note that the constructor property is a reference to the constructor function that created the instance. 
// The advantage of the constructor property is that it's possible to check 
// for this property to find out what kind of object it is. 
// Here's an example of how this could be used:

    function joinBirdFraternity(candidate) {
        if (candidate.constructor === Bird) {
            return true;
        } else {
            return false;
        }
    }

// Note: Since the constructor property can be overwritten (which will be covered in the next two challenges) 
// it’s generally better to use the instanceof method to check the type of an object.

//#endregion

//#region Change the Prototype to a New Object 

// Up until now you have been adding properties to the prototype individually:

    Bird.prototype.numLegs = 2;

// This becomes tedious after more than a few properties.

    Bird.prototype.eat = function() {
        console.log("nom nom nom");
    }

    Bird.prototype.describe = function() {
        console.log("My name is " + this.name);
    }

// A more efficient way is to set the prototype to a new object that already contains the properties. 
// This way, the properties are added all at once:

    Bird.prototype = {
        numLegs: 2, 
        eat: function() {
            console.log("nom nom nom");
        },
        describe: function() {
            console.log("My name is " + this.name);
        }
    };

//#endregion

//#region Remember to Set the Constructor Property when Changing the Prototype 

// There is one crucial side effect of manually setting the prototype to a new object. 
// It erases the constructor property! This property can be used to check 
// which constructor function created the instance, 
// but since the property has been overwritten, it now gives false results:

    duck.constructor === Bird;
    duck.constructor === Object;
    duck instanceof Bird;

// In order, these expressions would evaluate to false, true, and true.
// To fix this, whenever a prototype is manually set to a new object, 
// remember to define the constructor property:

    Bird.prototype = {
        constructor: Bird,
        numLegs: 2,
        eat: function() {
            console.log("nom nom nom");
        },
        describe: function() {
            console.log("My name is " + this.name); 
        }
    };

//#endregion

//#region Understand Where an Object’s Prototype Comes From 

// Just like people inherit genes from their parents, 
// an object inherits its prototype directly from the constructor function that created it. 
// For example, here the Bird constructor creates the duck object:

    function Bird(name) {
        this.name = name;
    }

    let duck = new Bird("Donald");

// duck inherits its prototype from the Bird constructor function. 
// You can show this relationship with the isPrototypeOf method:

    Bird.prototype.isPrototypeOf(duck);

// This would return true.

//#endregion

//#region Understand the Prototype Chain 

// All objects in JavaScript (with a few exceptions) have a prototype. 
// Also, an object’s prototype itself is an object.

    function Bird(name) {
        this.name = name;
    }

    typeof Bird.prototype;

// Because a prototype is an object, a prototype can have its own prototype! 
// In this case, the prototype of Bird.prototype is Object.prototype:

    Object.prototype.isPrototypeOf(Bird.prototype);

// How is this useful? You may recall the hasOwnProperty method from a previous challenge:

    let duck = new Bird("Donald");
    duck.hasOwnProperty("name");

// The hasOwnProperty method is defined in Object.prototype, 
// which can be accessed by Bird.prototype, which can then be accessed by duck. 
// This is an example of the prototype chain. 
// In this prototype chain, Bird is the supertype for duck, while duck is the subtype. 
// Object is a supertype for both Bird and duck. 
// Object is a supertype for all objects in JavaScript. 
// Therefore, any object can use the hasOwnProperty method.

//#endregion

//#region Use Inheritance So You Don't Repeat Yourself 

// There's a principle in programming called Don't Repeat Yourself (DRY). 
// The reason repeated code is a problem is because any change requires fixing code in multiple places. 
// This usually means more work for programmers and more room for errors.

// Notice in the example below that the describe method is shared by Bird and Dog:

    Bird.prototype = {
        constructor: Bird,
        describe: function() {
            console.log("My name is " + this.name);
        }
    };

    Dog.prototype = {
        constructor: Dog,
        describe: function() {
            console.log("My name is " + this.name);
        }
    };

// The describe method is repeated in two places. 
// The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

    function Animal() { };

    Animal.prototype = {
        constructor: Animal, 
        describe: function() {
            console.log("My name is " + this.name);
        }
    };

// Since Animal includes the describe method, you can remove it from Bird and Dog:

    Bird.prototype = {
        constructor: Bird
    };

    Dog.prototype = {
        constructor: Dog
    };

//#endregion

//#region Inherit Behaviors from a Supertype 

// In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:

    function Animal() { }

    Animal.prototype.eat = function() {
        console.log("nom nom nom");
    };

// This and the next challenge will cover how to reuse the 
// methods of Animal inside Bird and Dog without defining them again. 
// It uses a technique called inheritance. 
// This challenge covers the first step: make an instance of the supertype (or parent). 
// You already know one way to create an instance of Animal using the new operator:

    let animal = new Animal();

// There are some disadvantages when using this syntax for inheritance, 
// which are too complex for the scope of this challenge. 
// Instead, here's an alternative approach without those disadvantages:

    let animal = Object.create(Animal.prototype);

// Object.create(obj) creates a new object, and sets obj as the new object's prototype. 
// Recall that the prototype is like the "recipe" for creating an object. 
// By setting the prototype of animal to be the prototype of Animal, 
// you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

    animal.eat();
    animal instanceof Animal;

// The instanceof method here would return true.

//#endregion

//#region Set the Child's Prototype to an Instance of the Parent 

// In the previous challenge you saw the first step for inheriting 
// behavior from the supertype (or parent) Animal: making a new instance of Animal.

// This challenge covers the next step: set the prototype of the subtype 
// (or child)—in this case, Bird—to be an instance of Animal.

    Bird.prototype = Object.create(Animal.prototype);

// Remember that the prototype is like the "recipe" for creating an object. 
// In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

    let duck = new Bird("Donald");
    duck.eat();

// duck inherits all of Animal's properties, including the eat method.

//#endregion

//#region Reset an Inherited Constructor Property 

// When an object inherits its prototype from another object, 
// it also inherits the supertype's constructor property.

// Here's an example:

    function Bird() { }
    Bird.prototype = Object.create(Animal.prototype);
    let duck = new Bird();
    duck.constructor

// But duck and all instances of Bird should show that they were constructed by Bird and not Animal. 
// To do so, you can manually set the constructor property of Bird to the Bird object:

    Bird.prototype.constructor = Bird;
    duck.constructor

//#endregion

//#region Add Methods After Inheritance 

// A constructor function that inherits its prototype object from a supertype 
// constructor function can still have its own methods in addition to inherited methods.

// For example, Bird is a constructor that inherits its prototype from Animal:

    function Animal() { }

    Animal.prototype.eat = function() {
        console.log("nom nom nom");
    };

    function Bird() { }

    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;

// In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. 
// Here, Bird will get a fly() function. 
// Functions are added to Bird's prototype the same way as any constructor function:

    Bird.prototype.fly = function() {
        console.log("I'm flying!");
    };

// Now instances of Bird will have both eat() and fly() methods:

    let duck = new Bird();
    duck.eat();
    duck.fly();

// duck.eat() would display the string nom nom nom in the console, 
// and duck.fly() would display the string I'm flying!.

//#endregion

//#region Override Inherited Methods 

// In previous lessons, you learned that an object can inherit its behavior (methods) 
// from another object by referencing its prototype object:

    ChildObject.prototype = Object.create(ParentObject.prototype);

// Then the ChildObject received its own methods by chaining them onto its prototype:

    ChildObject.prototype.methodName = function() {...};

// It's possible to override an inherited method. 
// It's done the same way - by adding a method to ChildObject.prototype 
// using the same method name as the one to override. 
// Here's an example of Bird overriding the eat() method inherited from Animal:

    function Animal() { }

    Animal.prototype.eat = function() {
        return "nom nom nom";
    };

    function Bird() { }

    Bird.prototype = Object.create(Animal.prototype);

    Bird.prototype.eat = function() {
        return "peck peck peck";
    };

// If you have an instance let duck = new Bird(); and you call duck.eat(), 
// this is how JavaScript looks for the method on the prototype chain of duck:

// duck => Is eat() defined here? No.
// Bird => Is eat() defined here? => Yes. Execute it and stop searching.
// Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
// Object => JavaScript stopped searching before reaching this level.

//#endregion

//#region Use a Mixin to Add Common Behavior Between Unrelated Objects 

// As you have seen, behavior is shared through inheritance. 
// However, there are cases when inheritance is not the best solution. 
// Inheritance does not work well for unrelated objects like Bird and Airplane. 
// They can both fly, but a Bird is not a type of Airplane and vice versa.

// For unrelated objects, it's better to use mixins. 
// A mixin allows other objects to use a collection of functions.

    let flyMixin = function(obj) {
        obj.fly = function() {
            console.log("Flying, wooosh!");
        }
    };

// The flyMixin takes any object and gives it the fly method.

    let bird = {
        name: "Donald",
        numLegs: 2
    };

    let plane = {
        model: "777",
        numPassengers: 524
    };

    flyMixin(bird);
    flyMixin(plane);

// Here bird and plane are passed into flyMixin, 
// which then assigns the fly function to each object. 
// Now bird and plane can both fly:

    bird.fly();
    plane.fly();

// The console would display the string Flying, wooosh! twice, once for each .fly() call.

// Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.

//#endregion

//#region Use Closure to Protect Properties Within an Object from Being Modified Externally 

// In the previous challenge, bird had a public property name. 
// It is considered public because it can be accessed and changed outside of bird's definition.

    bird.name = "Duffy";

// Therefore, any part of your code can easily change the name of bird to any value. 
// Think about things like passwords and bank accounts being easily changeable by any part of your codebase. 
// That could cause a lot of issues.

// The simplest way to make this public property private is by creating a variable within the constructor function. 
// This changes the scope of that variable to be within the constructor function versus available globally. 
// This way, the variable can only be accessed and changed by methods also within the constructor function.

    function Bird() {
        let hatchedEgg = 10;
        this.getHatchedEggCount = function() { 
            return hatchedEgg;
        };
    }

    let ducky = new Bird();
    ducky.getHatchedEggCount();

// Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. 
// This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. 
// In JavaScript, a function always has access to the context in which it was created. 
// This is called closure.

//#endregion

//#region Understand the Immediately Invoked Function Expression (IIFE) 

// A common pattern in JavaScript is to execute a function as soon as it is declared:

    (function () {
        console.log("Chirp, chirp!");
    })();

// This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

// Note that the function has no name and is not stored in a variable. 
// The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. 
// This pattern is known as an immediately invoked function expression or IIFE.

//#endregion

//#region Use an IIFE to Create a Module 

// An immediately invoked function expression (IIFE) is often used to 
// group related functionality into a single object or module. 
// For example, an earlier challenge defined two mixins:

    function glideMixin(obj) {
        obj.glide = function() {
            console.log("Gliding on the water");
        };
    }

    function flyMixin(obj) {
        obj.fly = function() {
            console.log("Flying, wooosh!");
        };
    }

// We can group these mixins into a module as follows:

    let motionModule = (function () {
        return {
                    glideMixin: function(obj) {
                        obj.glide = function() {
                            console.log("Gliding on the water");
                        };
                    },
                    flyMixin: function(obj) {
                        obj.fly = function() {
                            console.log("Flying, wooosh!");
                        };
                    }
                }
    })();

// Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. 
// This returned object contains all of the mixin behaviors as properties of the object. 
// The advantage of the module pattern is that all of the motion behaviors can be 
// packaged into a single object that can then be used by other parts of your code. 
// Here is an example using it:

    motionModule.glideMixin(duck);
    duck.glide();

//#endregion


// Functional Programming


//#region Learn About Functional Programming 

/*

    Functional programming is a style of programming where solutions are simple, isolated functions, 
    without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT

    Functional programming is about:

    Isolated functions - there is no dependence on the state of the program, 
    which includes global variables that are subject to change

    Pure functions - the same input always gives the same output

    Functions with limited side effects - any changes, or mutations, 
    to the state of the program outside the function are carefully controlled

    Coding challenge:
    
    The members of freeCodeCamp happen to love tea.
    In the code editor, the prepareTea and getTea functions are already defined for you. 
    Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.

*/

// Solution: 
    // Function that returns a string representing a cup of green tea
    const prepareTea = () => 'greenTea';

    /*
        Given a function (representing the tea type) and number of cups needed, the
        following function returns an array of strings (each representing a cup of
        a specific type of tea).
    */
    const getTea = (numOfCups) => {
        const teaCups = [];
        for(let cups = 1; cups <= numOfCups; cups += 1) {
            const teaCup = prepareTea();
            teaCups.push(teaCup);
        }
        return teaCups;
    };

    const tea4TeamFCC = getTea(40);


//#endregion

//#region Understand Functional Programming Terminology 

/*

    The FCC Team had a mood swing and now wants two types of tea: green tea and black tea. 
    General Fact: Client mood swings are pretty common.

    With that information, we'll need to revisit the getTea function from last challenge 
    to handle various tea requests. We can modify getTea to accept a function as a parameter 
    to be able to change the type of tea it prepares. This makes getTea more flexible, 
    and gives the programmer more control when client requests change.

    But first, let's cover some functional terminology:

    Callbacks are the functions that are slipped or passed into another function 
    to decide the invocation of that function. You may have seen them passed to other methods, 
    for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

    Functions that can be assigned to a variable, passed into another function, 
    or returned from another function just like any other normal value, are called first class functions. 
    In JavaScript, all functions are first class functions.

    The functions that take a function as an argument, 
    or return a function as a return value are called higher order functions.

    When functions are passed into or returned from another function, 
    then those functions which were passed in or returned can be called a lambda.

    Coding challenge:

    Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC 
    and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified 
    so it now takes a function as the first argument.

    Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.

*/



// Solution:
    // Function that returns a string representing a cup of green tea
    const prepareGreenTea = () => 'greenTea';

    // Function that returns a string representing a cup of black tea
    const prepareBlackTea = () => 'blackTea';

    /*
        Given a function (representing the tea type) and number of cups needed, the
        following function returns an array of strings (each representing a cup of
        a specific type of tea).
    */

    const getTea = (prepareTea, numOfCups) => {
        const teaCups = [];

        for(let cups = 1; cups <= numOfCups; cups += 1) {
            const teaCup = prepareTea();
            teaCups.push(teaCup);
        }

        return teaCups;
    };

    const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
    const tea4BlackTeamFCC = getTea(prepareBlackTea,13);

    console.log(
        tea4GreenTeamFCC,
        tea4BlackTeamFCC
    );

//#endregion

//#region Understand the Hazards of Using Imperative Code 

/*

    Functional programming is a good habit. 
    It keeps your code easy to manage, and saves you from sneaky bugs. 
    But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.

    In English (and many other languages), the imperative tense is used to give commands. 
    Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

    Often the statements change the state of the program, like updating global variables. 
    A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.

    In contrast, functional programming is a form of declarative programming. 
    You tell the computer what you want done by calling a method or function.

    JavaScript offers many predefined methods that handle common tasks 
    so you don't need to write out how the computer should perform them. 
    For example, instead of using the for loop mentioned above, 
    you could call the map method which handles the details of iterating over an array. 
    This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.

    Consider the scenario: you are browsing the web in your browser, 
    and want to track the tabs you have opened. 
    Let's try to model this using some simple object-oriented code.

    A Window object is made up of tabs, and you usually have more than one Window open. 
    The titles of each open site in each Window object is held in an array. 
    After working in the browser (opening new tabs, merging windows, and closing tabs), 
    you want to print the tabs that are still open. 
    Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

    Coding Challenge:

    The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). 
    The array tabs is part of the Window object that stores the name of the open pages.

    Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour. 
    The final list of open tabs, stored in finalTabs.tabs, 
    should be 

    ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 
    'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] 

    but the list produced by the code is slightly different.
    Change Window.prototype.tabClose so that it removes the correct tab.

*/

// Solution:

    // tabs is an array of titles of each site open within the window
    var Window = function(tabs) {
        this.tabs = tabs; // We keep a record of the array inside the object
    };
    
    // When you join two windows into one window
    Window.prototype.join = function (otherWindow) {
        this.tabs = this.tabs.concat(otherWindow.tabs);
        return this;
    };
  
    // When you open a new tab at the end
    Window.prototype.tabOpen = function (tab) {
        this.tabs.push('new tab'); // Let's open a new tab for now
        return this;
    };
    
    // When you close a tab
    Window.prototype.tabClose = function (index) {
        var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
        var tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
        this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
        return this;
   };
  
    // Let's create three browser windows
    var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
    var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
    var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
    
    // Now perform the tab opening, closing, and other operations
    var finalTabs = socialWindow
        .tabOpen() // Open a new tab for cat memes
        .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
        .join(workWindow.tabClose(1).tabOpen());
    console.log(finalTabs.tabs);


//#endregion

//#region Avoid Mutations and Side Effects Using Functional Programming 

/*

    If you haven't already figured it out, the issue in the previous challenge 
    was with the splice call in the tabClose() function. 
    Unfortunately, splice changes the original array it is called on, 
    so the second call to it used a modified array, and gave unexpected results.

    This is a small example of a much larger pattern - you call a function on a variable, array, 
    or an object, and the function changes the variable or something in the object.

    One of the core principles of functional programming is to not change things. 
    Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, 
    including the function arguments or any global variable.

    The previous example didn't have any complicated operations but the splice method 
    changed the original array, and resulted in a bug.

    Recall that in functional programming, changing or altering things is called mutation, 
    and the outcome is called a side effect. 
    A function, ideally, should be a pure function, meaning that it does not cause any side effects.

    Let's try to master this discipline and not alter any variable or object in our code.

    Coding Challenge:

    Fill in the code for the function incrementer so it returns 
    the value of the global variable fixedValue increased by one.

*/

// Solution:
    // The global variable
    var fixedValue = 4;

    function incrementer () {
        return fixedValue + 1;
    }

//#endregion

//#region Pass Arguments to Avoid External Dependence in a Function 

/*

    The last challenge was a step closer to functional programming principles, 
    but there is still something missing.

    We didn't alter the global variable value, 
    but the function incrementer would not work without the global variable fixedValue being there.

    Another principle of functional programming is to always declare your dependencies explicitly. 
    This means if a function depends on a variable or object being present, 
    then pass that variable or object directly into the function as an argument.

    There are several good consequences from this principle. 
    The function is easier to test, you know exactly what input it takes, 
    and it won't depend on anything else in your program.

    This can give you more confidence when you alter, remove, or add new code. 
    You would know what you can or cannot change and you can see where the potential traps are.

    Finally, the function would always produce the same output for the same set of inputs, 
    no matter what part of the code executes it.

    Let's update the incrementer function to clearly declare its dependencies.

    Coding challenge:

    Write the incrementer function so it takes an argument, 
    and then returns a result after increasing the value by one.

*/

// Solution:

    // The global variable
    var fixedValue = 4;

    function incrementer (fixedValue) {
        return fixedValue + 1;
    }

//#endregion

//#region Refactor Global Variables Out of Functions 

/*

    So far, we have seen two distinct principles for functional programming:

    Don't alter a variable or object - create new variables and objects and return them if need be from a function. 
    Hint: using something like var newArr = arrVar, where arrVar is an array will simply create a reference to the 
    existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

    Declare function parameters - any computation inside a function depends only on the arguments passed to the function, 
    and not on any global object or variable.

    Adding one to a number is not very exciting, 
    but we can apply these principles when working with arrays or more complex objects.

    Coding challenge:
    Rewrite the code so the global array bookList is not changed inside either function. 
    The add function should add the given bookName to the end of the array passed to it and return a new array (list). 
    The remove function should remove the given bookName from the array passed to it.

    Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

*/

// Solution:

    // The global variable
    var bookList = [
                        "The Hound of the Baskervilles", 
                        "On The Electrodynamics of Moving Bodies", 
                        "Philosophiæ Naturalis Principia Mathematica", 
                        "Disquisitiones Arithmeticae"
                   ];

    function add (bList,bookName) {
        let myArr = bList.slice();
        myArr.push(bookName);
        return myArr;
    }

    // Change code below this line
    function remove (arr,bookName) {
        let myArr = arr.slice();
        var book_index = myArr.indexOf(bookName);
        if (book_index >= 0) {
            myArr.splice(book_index, 1);
            return myArr;
        }
    }

    var newBookList = add(bookList, 'A Brief History of Time');
    var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
    var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

    console.log(bookList);

//#endregion

//#region Use the map Method to Extract Data from an Array 

/*

    So far we have learned to use pure functions to avoid side effects in a program. 
    Also, we have seen the value in having a function only depend on its input arguments.

    This is only the beginning. 
    As its name suggests, functional programming is centered around a theory of functions.

    It would make sense to be able to pass them as arguments to other functions, 
    and return a function from another function. 
    Functions are considered first class objects in JavaScript, which means they can be used like any other object. 
    They can be saved in variables, stored in an object, or passed as function arguments.

    Let's start with some simple array functions, which are methods on the array object prototype. 
    In this exercise we are looking at Array.prototype.map(), or more simply map.

    The map method iterates over each item in an array and returns a new array containing the results of 
    calling the callback function on each element. It does this without mutating the original array.

    When the callback is used, it is passed three arguments. 
    The first argument is the current element being processed. 
    The second is the index of that element and the third is the array upon which the map method was called.

    See below for an example using the map method on the users array to return a new array containing 
    only the names of the users as elements. 
    For simplicity, the example only uses the first argument of the callback.

*/
    const users = [
        { name: 'John', age: 34 },
        { name: 'Amy', age: 20 },
        { name: 'camperCat', age: 10 }
    ];

    const names = users.map(user => user.name);
    console.log(names);
    // The console would display the value [ 'John', 'Amy', 'camperCat' ].


// Coding Challenge:
// The watchList array holds objects with information on several movies. 
// Use map on watchList to assign a new array of objects with only title and rating keys to the ratings variable. 
// The code in the editor currently uses a for loop to do this, 
// so you should replace the loop functionality with your map expression.

// Solution:
    // The global variable
    var watchList = [
                        {
                            "Title": "Inception",
                            "Year": "2010",
                            "Rated": "PG-13",
                            "imdbRating": "8.8"
                        },
                        {
                            "Title": "Interstellar",
                            "Year": "2014",
                            "Rated": "PG-13",
                            "imdbRating": "8.6"
                        },
                        {
                            "Title": "The Dark Knight",
                            "Year": "2008",
                            "Rated": "PG-13",
                            "imdbRating": "9.0"
                        }
                    ];
  
    // Only change code below this line

    var ratings = [];

    // for(var i=0; i < watchList.length; i++){
    //   ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
    // }

    ratings = watchList.map( w => ({title: w["Title"],  rating: w["imdbRating"]}))
    
    console.log(JSON.stringify(ratings));

//#endregion

//#region Implement map on a Prototype 

/*
    As you have seen from applying Array.prototype.map(), or simply map() earlier, 
    the map method returns an array of the same length as the one it was called on. 
    It also doesn't alter the original array, as long as its callback function doesn't.

    In other words, map is a pure function, and its output depends solely on its inputs. 
    Plus, it takes another function as its argument.

    You might learn a lot about the map method if you implement your own version of it. 
    It is recommended you use a for loop or Array.prototype.forEach().

    Coding challenge:
    Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). 
    You should not use the built-in map method. 
    The Array instance can be accessed in the myMap method using this.

*/

// Solution 1:

    // The global variable
    var s = [23, 65, 98, 5];

    Array.prototype.myMap = function(callback) {
    var newArray = [];
        // Only change code below this line
        for(let i = 0; i < this.length; i++){
            newArray.push(callback(this[i]))
        }
        // Only change code above this line
        return newArray;
    };

    var new_s = s.myMap(function(item) {
        return item * 2;
    });

// Solution 2:

    // the global Array
    var s = [23, 65, 98, 5];

    Array.prototype.myMap = function(callback) {
        var newArray = [];
        // Add your code below this line
        this.forEach(a => newArray.push(callback(a)));
        // Add your code above this line
        return newArray;
    };

    var new_s = s.myMap(function(item) {
        return item * 2;
    });

// Solution 3:
    // The global Array
    var s = [23, 65, 98, 5];

    Array.prototype.myMap = function(callback, arr = [], i = 0) {
    return i < this.length
        ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
        : arr;
    };

    var new_s = s.myMap(function(item) {
        return item * 2;
    });


//#endregion

//#region Use the filter Method to Extract Data from an Array 

/*

    Another useful array function is Array.prototype.filter(), or simply filter().

    filter calls a function on each element of an array and returns a new array 
    containing only the elements for which that function returns true. 
    In other words, it filters the array, based on the function passed to it. 
    Like map, it does this without needing to modify the original array.

    The callback function accepts three arguments. 
    The first argument is the current element being processed. 
    The second is the index of that element and the third is the array upon which the filter method was called.

    See below for an example using the filter method on the users array 
    to return a new array containing only the users under the age of 30. 
    For simplicity, the example only uses the first argument of the callback.

*/

    const users = [
        { name: 'John', age: 34 },
        { name: 'Amy', age: 20 },
        { name: 'camperCat', age: 10 }
    ];

    const usersUnder30 = users.filter(user => user.age < 30);
    console.log(usersUnder30); 

/*

    The console would display the value [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ].

    Coding challenge:
    The variable watchList holds an array of objects with information on several movies. 
    Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys. 
    The new array should only include objects where imdbRating is greater than or equal to 8.0. 
    Note that the rating values are saved as strings in the object and you may need to convert them 
    into numbers to perform mathematical operations on them.

*/

// Solution 1:

    var filteredList = watchList
                        .map(movie => {
                            return {
                                title: movie.Title,
                                rating: movie.imdbRating
                            };
                        })
                        .filter(movie => {
                            return parseFloat(movie.rating) >= 8.0;
                        });

// Solution 2:
    var filteredList = watchList
                        .map(function(e) {
                            return { title: e["Title"], rating: e["imdbRating"] };
                        })
                        .filter(e => e.rating >= 8);

    console.log(filteredList);

//#endregion

//#region Implement the filter Method on a Prototype 

/*

    You might learn a lot about the filter method if you implement your own version of it. 
    It is recommended you use a for loop or Array.prototype.forEach().

    Coding challenge:
    Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). 
    You should not use the built-in filter method. 
    The Array instance can be accessed in the myFilter method using this.

*/

// Solution 1:
    // The global variable
    let s = [23, 65, 98, 5];

    Array.prototype.myFilter = function(callback){
        let newArray = [];
        this.forEach(function(x) {
            if (callback(x) == true) {
                newArray.push(x);
            }
        });
        return newArray;
    };

    let new_s = s.myFilter(function(item){
        return item % 2 === 1;
    });

// Solution 2:
    let s = [23,65,98,5];

    Array.prototype.myFilter = function(callback) {
        var newArray = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i]) === true) {
                newArray.push(this[i]);
            }
        }
        return newArray;
    };

    var new_s = s.myFilter(function(item) {
        return item % 2 === 1;
    });

//#endregion

//#region Return Part of an Array Using the slice Method 

/*

    The slice method returns a copy of certain elements of an array. 
    It can take two arguments, the first gives the index of where to begin the slice, 
    the second is the index for where to end the slice (and it's non-inclusive). 
    If the arguments are not provided, the default is to start at the beginning of the array through the end, 
    which is an easy way to make a copy of the entire array. 
    The slice method does not mutate the original array, but returns a new one.

    Here's an example:

*/

    var arr = ["Cat", "Dog", "Tiger", "Zebra"];
    var newArray = arr.slice(1, 3); 
    // newArray would have the value ["Dog", "Tiger"].

// Coding challenge:
// Use the slice method in the sliceArray function to return part of the anim array 
// given the provided beginSlice and endSlice indices. 
// The function should return an array.

// Solution:
    function sliceArray(anim, beginSlice, endSlice) {
        return anim.slice(beginSlice,endSlice)
    }

    var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    sliceArray(inputAnim, 1, 3);

//#endregion

//#region Remove Elements from an Array Using slice Instead of splice 

/*

    A common pattern while working with arrays is when you want to remove items and keep the rest of the array. 
    JavaScript offers the splice method for this, which takes arguments for the index of where to start removing items, 
    then the number of items to remove. 
    If the second argument is not provided, the default is to remove items through the end. 
    However, the splice method mutates the original array it is called on. 
    Here's an example:

*/
    var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
    cities.splice(3, 1);

/*

    Here splice returns the string London and deletes it from the cities array. 
    cities will have the value ["Chicago", "Delhi", "Islamabad", "Berlin"].

    As we saw in the last challenge, the slice method does not mutate the original array, 
    but returns a new one which can be saved into a variable. 
    Recall that the slice method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), 
    and returns those items in a new array. 
    Using the slice method instead of splice helps to avoid any array-mutating side effects.

    Coding challenge:
    Rewrite the function nonMutatingSplice by using slice instead of splice. 
    It should limit the provided cities array to a length of 3, 
    and return a new array with only the first three items.

    Do not mutate the original array provided to the function.

*/

// Solution:

    function nonMutatingSplice(cities) {
        return cities.slice(0,3);
    }

    var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
    nonMutatingSplice(inputCities);

//#endregion

//#region Combine Two Arrays Using the concat Method 

// Concatenation means to join items end to end. 
// JavaScript offers the concat method for both strings and arrays that work in the same way. 
// For arrays, the method is called on one, then another array is provided as the argument to concat, 
// which is added to the end of the first array. 
// It returns a new array and does not mutate either of the original arrays. 
// Here's an example:

    [1, 2, 3].concat([4, 5, 6]);
    // The returned array would be [1, 2, 3, 4, 5, 6].

// Coding challenge:
// Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. 
// The function should return the concatenated array.

// Solution:
    function nonMutatingConcat(original, attach) {
        return original.concat(attach)
    }
    var first = [1, 2, 3];
    var second = [4, 5];
    nonMutatingConcat(first, second);

//#endregion

//#region Add Elements to the End of an Array Using concat Instead of push 

// Functional programming is all about creating and using non-mutating functions.

// The last challenge introduced the concat method as a way to combine arrays 
// into a new one without mutating the original arrays. Compare concat to the push method. 
// push adds an item to the end of the same array it is called on, which mutates that array. 
// Here's an example:

    var arr = [1, 2, 3];
    arr.push([4, 5, 6]);

// arr would have a modified value of [1, 2, 3, [4, 5, 6]], which is not the functional programming way.

// concat offers a way to add new items to the end of an array without any mutating side effects.

// Coding challenge:
// Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. 
// The function should return an array.

// Solution:
    function nonMutatingPush(original, newItem) {
        // return original.push(newItem);
        return original.concat(newItem);
    }

    var first = [1, 2, 3];
    var second = [4, 5];
    nonMutatingPush(first, second);

//#endregion

//#region Use the reduce Method to Analyze Data 

/*

    Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. 
    You can solve almost any array processing problem using the reduce method.

    The reduce method allows for more general forms of array processing, 
    and it's possible to show that both filter and map can be derived as special applications of reduce. 
    The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). 
    This is achieved via a callback function that is called on each iteration.

    The callback function accepts four arguments. The first argument is known as the accumulator, 
    which gets assigned the return value of the callback function from the previous iteration, 
    the second is the current element being processed, the third is the index of that element 
    and the fourth is the array upon which reduce is called.

    In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. 
    If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first 
    element of the array as the accumulator.

    See below for an example using reduce on the users array to return the sum of all the users' ages. 
    For simplicity, the example only uses the first and second arguments.

*/

    const users = [
        { name: 'John', age: 34 },
        { name: 'Amy', age: 20 },
        { name: 'camperCat', age: 10 }
    ];

    const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
    console.log(sumOfAges);
    // The console would display the value 64.

// In another example, see how an object can be returned containing the names of the users as properties with their ages as values.

    const users = [
        { name: 'John', age: 34 },
        { name: 'Amy', age: 20 },
        { name: 'camperCat', age: 10 }
    ];

    const usersObj = users.reduce((obj, user) => {
        obj[user.name] = user.age;
        return obj;
    }, {});

    console.log(usersObj);

// The console would display the value { John: 34, Amy: 20, camperCat: 10 }.

// Coding challenge:
// The variable watchList holds an array of objects with information on several movies. 
// Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. 
// Recall from prior challenges how to filter data and map over it to pull what you need. 
// You may need to create other variables, and return the average rating from getRating function. 
// Note that the rating values are saved as strings in the object and need to be converted into 
// numbers before they are used in any mathematical operations.

// Solution 1:

    function getRating(watchList){
        var averageRating = watchList
                            // Use filter to find films directed by Christopher Nolan
                            .filter(film => film.Director === "Christopher Nolan")
                            // Use map to convert their ratings from strings to numbers
                            .map(film => Number(film.imdbRating))
                            // Use reduce to add together their ratings
                            .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
                            // Divide by the number of Nolan films to get the average rating
                            watchList.filter(film => film.Director === "Christopher Nolan").length;

        return averageRating;
    }
    console.log(getRating(watchList));

    // Solution 2:
    function getRating(watchList){
        var count = 0;
        var averageRating = watchList.reduce((sum,movie) =>  {
            if (movie.Director == "Christopher Nolan") {
                count+=1;
                return sum + parseFloat(movie.imdbRating);
            }
            return sum;
        }, 0) / count;
        return averageRating;
    }

    // Solution 3:
    function getRating(watchList) {
        const averageRating = watchList.reduce(({ sum, count }, { Director: dir, imdbRating: rating },  idx, arr) => {
            if (dir === 'Christopher Nolan') {
                count++;
                sum += Number(rating);
            }
            return idx === arr.length - 1
            ? sum / count
            : { sum, count };
        }, { sum: 0, count: 0 });
            return averageRating;
        }

//#endregion

//#region Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem 

// Now that you have worked through a few challenges using higher-order functions 
// like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.

// Coding challenge:
// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). 
// The function should return a new array containing the squares of only the positive integers 
// (decimal numbers are not integers) when an array of real numbers is passed to it. 
// An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.

// Solution 1:
    const squareList = (arr) => {
        return arr
                .filter(num => num > 0 && num % parseInt(num) === 0)
                .map(num => Math.pow(num, 2));
    };
    
    const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
    console.log(squaredIntegers);

// Solution 2:
    const squareList = arr => {
        return arr.reduce((sqrIntegers, num) => {
        return Number.isInteger(num) && num > 0
            ? sqrIntegers.concat(num * num)
            : sqrIntegers;
        }, []);
    };

//#endregion

//#region Sort an Array Alphabetically using the sort Method 

// The sort method sorts the elements of an array according to the callback function.
// For example:

    function ascendingOrder(arr) {
        return arr.sort(function(a, b) {
            return a - b;
        });
    }
    ascendingOrder([1, 5, 2, 3, 4]);
    // This would return the value [1, 2, 3, 4, 5].

    function reverseAlpha(arr) {
        return arr.sort(function(a, b) {
            return a === b ? 0 : a < b ? 1 : -1;
        });
    }
    reverseAlpha(['l', 'h', 'z', 'b', 's']);
    // This would return the value ['z', 's', 'l', 'h', 'b'].

// JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. 
// Therefore, it is encouraged to provide a callback function to specify how to sort the array items. 
// When such a callback function, normally called compareFunction, is supplied, 
// the array elements are sorted according to the return value of the compareFunction: 
// If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. 
// If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. 
// If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.

// Coding challenge:
// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

// Solution:
    function alphabeticalOrder(arr) {
        // Add your code below this line
        return arr.sort(function(a, b) {
            return a === b ? 0 : a < b ? -1 : 1;
        });
        // Add your code above this line
    }
    alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//#endregion

//#region Return a Sorted Array Without Changing the Original Array 

// A side effect of the sort method is that it changes the order of the elements in the original array. 
// In other words, it mutates the array in place. 
// One way to avoid this is to first concatenate an empty array to the one being sorted 
// (remember that slice and concat return a new array), then run the sort method.

// Coding challenge:
// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
// The function should return a new array, and not mutate the globalArray variable.

// Solution:
    var globalArray = [5, 6, 3, 2, 9];
    function nonMutatingSort(arr) {
        return [].concat(arr).sort(function(a, b) {
            return a - b;
        });
    }
    nonMutatingSort(globalArray);

//#endregion

//#region Split a String into an Array Using the split Method 

// The split method splits a string into an array of strings. 
// It takes an argument for the delimiter, 
// which can be a character to use to break up the string or a regular expression. 
// For example, if the delimiter is a space, you get an array of words, 
// and if the delimiter is an empty string, you get an array of each character in the string.

// Here are two examples that split one string by spaces, then another by digits using a regular expression:

    var str = "Hello World";
    var bySpace = str.split(" ");

    var otherString = "How9are7you2today";
    var byDigits = otherString.split(/\d/);

// bySpace would have the value ["Hello", "World"]  
// byDigits would have the value ["How", "are", "you", "today"].

// Since strings are immutable, the split method makes it easier to work with them.

// Coding challenge:
// Use the split method inside the splitify function to split str into an array of words. 
// The function should return the array. 
// Note that the words are not always separated by spaces, and the array should not contain punctuation.

// Solution:
    function splitify(str) {
        return str.split(/\W/);
        //return str.split(/[,-\s\.]/);
    }
    splitify("Hello World,I-am code");

//#endregion

//#region Combine an Array into a String Using the join Method 

// The join method is used to join the elements of an array together to create a string. 
// It takes an argument for the delimiter that is used to separate the array elements in the string.
// Here's an example:

    var arr = ["Hello", "World"];
    var str = arr.join(" ");

// str would have a value of the string Hello World.

// Coding challenge:
// Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. 
// The function should return a string. 
// For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.

// Solution:
    function sentensify(str) {
        return str.split(/\W/).join(" ")
    }
    sentensify("May-the-force-be-with-you");

//#endregion

//#region Apply Functional Programming to Convert Strings to URL Slugs 

/*

    The last several challenges covered a number of useful array and string methods 
    that follow functional programming principles. 
    We've also learned about reduce, which is a powerful method used to reduce problems to simpler forms. 
    From computing averages to sorting, any array operation can be achieved by applying it. 
    Recall that map and filter are special cases of reduce.

    Let's combine what we've learned to solve a practical problem.

    Coding challenge:
    Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. 
    For example, if you write a Medium post titled Stop Using Reduce, 
    it's likely the URL would have some form of the title string in it (.../stop-using-reduce). 
    You may have already noticed this on the freeCodeCamp site.

    Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. 
    You can use any of the methods covered in this section, and don't use replace. Here are the requirements:
    The input is a string with spaces and title-cased words
    The output is a string with the spaces between words replaced by a hyphen (-)
    The output should be all lower-cased letters
    The output should not have any spaces

*/

// Solution 1:

    var globalTitle = "Winter Is Coming";

    function urlSlug(title) {
        return title
            .toLowerCase()
            .trim()
            .split(/\s+/)
            .join("-");
    }

    var winterComing = urlSlug(globalTitle);

// Solution 2:

    var globalTitle = "Winter Is Coming";

    function urlSlug(title) {
        return title
            .split(" ")
            .filter(substr => substr !== "")
            .join("-")
            .toLowerCase();
    }

    var winterComing = urlSlug(globalTitle);

//#endregion

//#region Use the every Method to Check that Every Element in an Array Meets a Criteria 

// The every method works with arrays to check if every element passes a particular test. 
// It returns a Boolean value - true if all values meet the criteria, false if not.

// For example, the following code would check if every element in the numbers array is less than 10:

    var numbers = [1, 5, 8, 0, 10, 11];
    numbers.every(function(currentValue) {
        return currentValue < 10;
    });

// The every method would return false here.

// Coding challenge:
// Use the every method inside the checkPositive function to check if every element in arr is positive. 
// The function should return a Boolean value.

// Solution 1:
    function checkPositive(arr) {
        return arr.every(val => val > 0);
    }
    checkPositive([1, 2, 3, -4, 5]);

// Solution 2:
    function checkPositive(arr) {
        return arr.every(function(currentValue) {
            return currentValue > 0;
        });
    }
    checkPositive([1, 2, 3, -4, 5]);
    
//#endregion

//#region Use the some Method to Check that Any Elements in an Array Meet a Criteria 

// The some method works with arrays to check if any element passes a particular test. 
// It returns a Boolean value - true if any of the values meet the criteria, false if not.

// For example, the following code would check if any element in the numbers array is less than 10:

    var numbers = [10, 50, 8, 220, 110, 11];
    numbers.some(function(currentValue) {
        return currentValue < 10;
    });

// The some method would return true.

// Coding challenge:
// Use the some method inside the checkPositive function to check if any element in arr is positive. 
// The function should return a Boolean value.

// Solution:
    function checkPositive(arr) {
        return arr.some(val => val > 0)
    }
    checkPositive([1, 2, 3, -4, 5]);

//#endregion

//#region Introduction to Currying and Partial Application 

// The arity of a function is the number of arguments it requires. 
// Currying a function means to convert a function of N arity into N functions of arity 1.

// In other words, it restructures a function so it takes one argument, 
// then returns another function that takes the next argument, and so on.

// Here's an example:

    function unCurried(x, y) {
        return x + y;
    }

    function curried(x) {
        return function(y) {
            return x + y;
        }
    }

    const curried = x => y => x + y

    curried(1)(2)
    // curried(1)(2) would return 3.

// This is useful in your program if you can't supply all the arguments to a function at one time. 
// You can save each function call into a variable, which will hold the returned function reference 
// that takes the next argument when it's available. 
// Here's an example using the curried function in the example above:

    var funcForY = curried(1);
    console.log(funcForY(2)); // 3

// Similarly, partial application can be described as applying a few arguments to a function 
// at a time and returning another function that is applied to more arguments. Here's an example:

    function impartial(x, y, z) {
        return x + y + z;
    }

    var partialFn = impartial.bind(this, 1, 2);
    partialFn(10); // 13
  
// Coding challenge:
// Fill in the body of the add function so it uses currying to add parameters x, y, and z.

// Solution 1:
    function add(x) {
        return function(y) {
            return function(z) {
            return x + y + z;
            };
        };
    }
    add(10)(20)(30);

// Solution 2:
    function add(x) {
        return y => z => x + y + z;
    }
    add(10)(20)(30);

//#endregion


// Intermediate Algorithm Scripting


//#region Sum All Numbers in a Range 

// We'll pass you an array of two numbers. 
// Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// Solution 1:
    function sumAll(arr) {
        let max = Math.max(arr[0], arr[1]);
        let min = Math.min(arr[0], arr[1]);
        let sumBetween = 0;
        for (let i = min; i <= max; i++) {
            sumBetween += i;
        }
        return sumBetween;
    }

    sumAll([1, 4]);

// Solution 2:
    const sumAll = arr => {
        // Buckle up everything to one!
        const startNum = arr[0];
        const endNum = arr[1];

        // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
        // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
        const numCount = Math.abs(startNum - endNum) + 1;

        // Using Arithmetic Progression summing formula
        const sum = ((startNum + endNum) * numCount) / 2;
        return sum;
    };

// Solution 3:
    function sumAll(arr) {
        let sumBetween = 0;
        for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
            sumBetween += i;
        }
        return sumBetween;
    }

    sumAll([1, 4]);

// Solution 4: (Recursive Solution)

    function sumAll(arr) {
        const [first, last] = [...arr].sort((a, b) => a - b);
        return first !== last
            ? first + sumAll([first + 1, last])
            : first;
    }

    sumAll([1, 4]);

//#endregion

//#region Diff Two Arrays 

// Compare two arrays and return a new array with any items
// only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

// Solution 1 (Imperative Solution):

    function diffArray(arr1, arr2) {
        var newArr = [];

        function onlyInFirst(first, second) {
            // Looping through an array to find elements that don't exist in another array
            for (var i = 0; i < first.length; i++) {
                if (second.indexOf(first[i]) === -1) {
                    // Pushing the elements unique to first to newArr
                    newArr.push(first[i]);
                }
            }
        }

        onlyInFirst(arr1, arr2);
        onlyInFirst(arr2, arr1);

        return newArr;
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// Solution 2 (Declarative Solution):

    function diffArray(arr1, arr2) {
        return arr1
            .concat(arr2)
            .filter(item => !arr1.includes(item) || !arr2.includes(item));
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Solution 3 (Declarative Solution):
    
    function diffArray(arr1, arr2) {
        return [...diff(arr1, arr2), ...diff(arr2, arr1)];

        function diff(a, b) {
            return a.filter(item => b.indexOf(item) === -1);
        }
    }

//#endregion

//#region Seek and Destroy 

// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

// Solution 1:
    function destroyer(arr) {
        let valsToRemove = Object.values(arguments).slice(1);
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < valsToRemove.length; j++) {
                if (arr[i] === valsToRemove[j]) {
                    delete arr[i];
                }
            }
        }
        return arr.filter(item => item !== null);
    }

// Solution 2:
    function destroyer(arr) {
        var valsToRemove = Array.from(arguments).slice(1);
        return arr.filter(function(val) {
            return !valsToRemove.includes(val);
        });
    }

// Solution 3:
    function destroyer(arr, ...valsToRemove) {
        return arr.filter(elem => !valsToRemove.includes(elem));
    }

//#endregion

//#region Wherefore art thou 

// Make a function that looks through an array of objects (first argument) and returns 
// an array of all objects that have matching name and value pairs (second argument). 
// Each name and value pair of the source object has to be present in the object 
// from the collection if it is to be included in the returned array.

// For example, if the first argument is 
// [
//     { first: "Romeo", last: "Montague" }, 
//     { first: "Mercutio", last: null }, 
//     { first: "Tybalt", last: "Capulet" }
// ], 
// and the second argument is { last: "Capulet" }, 
// then you must return the third object from the array (the first argument), 
// because it contains the name and its value, that was passed on as the second argument.

// Solution 1:
    function whatIsInAName(collection, source) {
        // "What's in a name? that which we call a rose
        // By any other name would smell as sweet.”
        // -- by William Shakespeare, Romeo and Juliet
        var srcKeys = Object.keys(source);

        // filter the collection
        return collection.filter(function(obj) {
            for (var i = 0; i < srcKeys.length; i++) {
                if (
                    !obj.hasOwnProperty(srcKeys[i]) ||
                    obj[srcKeys[i]] !== source[srcKeys[i]]
                ) 
                {
                    return false;
                }
            }
            return true;
        });
    }

    // test here
    whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
    );

// Solution 2:
    function whatIsInAName(collection, source) {
        // "What's in a name? that which we call a rose
        // By any other name would smell as sweet.”
        // -- by William Shakespeare, Romeo and Juliet
        var srcKeys = Object.keys(source);

        return collection.filter(function(obj) {
            return srcKeys.every(function(key) {
                return obj.hasOwnProperty(key) && obj[key] === source[key];
            });
        });
    }

// Solution 3:
    function whatIsInAName(collection, source) {
        // "What's in a name? that which we call a rose
        // By any other name would smell as sweet.”
        // -- by William Shakespeare, Romeo and Juliet
        var srcKeys = Object.keys(source);

        // filter the collection
        return collection.filter(function(obj) {
            return srcKeys
                .map(function(key) {
                    return obj.hasOwnProperty(key) && obj[key] === source[key];
                })
                .reduce(function(a, b) {
                    return a && b;
                });
        });
    }   
//#endregion

//#region Spinal Tap Case 

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Solution 1:
    function spinalCase(str) {
        // Create a variable for the white space and underscores.
        var regex = /\s+|_+/g;

        // Replace low-upper case to low-space-uppercase
        str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

        // Replace space and underscore with -
        return str.replace(regex, "-").toLowerCase();
    }

    // test here
    spinalCase("This Is Spinal Tap");


// Solution 2:
    function spinalCase(str) {
      // Replace low-upper case to low-space-uppercase
      str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
      // Split on whitespace and underscores and join with dash
      return str
        .toLowerCase()
        .split(/(?:_| )+/)
        .join("-");
    }    

// Solution 3:
    function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
    }

//#endregion

//#region Pig Latin 

/*

    Pig Latin is a way of altering English Words. The rules are as follows:
    - If a word begins with a consonant, take the first consonant or consonant cluster, 
    move it to the end of the word, and add ay to it.
    - If a word begins with a vowel, just add way at the end.
    Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

*/

// Solution 1:
    function translatePigLatin(str) {
        let consonantRegex = /^[^aeiou]+/;
        let myConsonants = str.match(consonantRegex);
        return myConsonants !== null
            ? str
                .replace(consonantRegex, "")
                .concat(myConsonants)
                .concat("ay")
            : str.concat("way");
    }

    translatePigLatin("consonant");

// Solution 2:
    function translatePigLatin(str) {
        // Create variables to be used
        var pigLatin = "";
        var regex = /[aeiou]/gi;

        // Check if the first character is a vowel
        if (str[0].match(regex)) {
            pigLatin = str + "way";
        } else if (str.match(regex) === null) {
            // Check if the string contains only consonants
            pigLatin = str + "ay";
        } else {
            // Find how many consonants before the first vowel.
            var vowelIndice = str.indexOf(str.match(regex)[0]);

            // Take the string from the first vowel to the last char
            // then add the consonants that were previously omitted and add the ending.
            pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
        }

        return pigLatin;
    }

// Solution 3:
    function translatePigLatin(str) {
        if (str.match(/^[aeiou]/)) return str + "way";

        const consonantCluster = str.match(/^[^aeiou]+/)[0];
        return str.substring(consonantCluster.length) + consonantCluster + "ay";
    }

// Solution 4:
    function translatePigLatin(str) {
        return str
        .replace(/^[aeiou]\w*/, "$&way")
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
    }    

// Solution 5:
    function translatePigLatin(str, charPos = 0) {
        return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
        ? str + (charPos === 0 ? 'way' : 'ay')
        : charPos === str.length
            ? str + 'ay'
            : translatePigLatin(str.slice(1) + str[0], charPos + 1);
    }

//#endregion

//#region Search and Replace 

/*

    Perform a search and replace on the sentence using the arguments provided and return the new sentence.
    First argument is the sentence to perform the search and replace on.
    Second argument is the word that you will be replacing (before).
    Third argument is what you will be replacing the second argument with (after).
    Note: Preserve the case of the first character in the original word when you are replacing it. 
    For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

*/


// Solution 1:
    function myReplace(str, before, after) {
        // Find index where before is on string
        var index = str.indexOf(before);
        // Check to see if the first letter is uppercase or not
        if (str[index] === str[index].toUpperCase()) {
            // Change the after word to be capitalized before we use it.
            after = after.charAt(0).toUpperCase() + after.slice(1);
        } else {
            // Change the after word to be uncapitalized before we use it.
            after = after.charAt(0).toLowerCase() + after.slice(1);
        }
        // Now replace the original str with the edited one.
        str = str.replace(before, after);

        return str;
    }

    // test here
    myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// Solution 2:
    function myReplace(str, before, after) {
        // Check if first character of argument "before" is a capital or lowercase letter 
        // and change the first character of argument "after" to match the case
        if (/^[A-Z]/.test(before)) {
            after = after[0].toUpperCase() + after.substring(1)
        } else {
            after = after[0].toLowerCase() + after.substring(1)
        }

        // return string with argument "before" replaced by argument "after" (with correct case)
        return str.replace(before, after);
    }   

// Solution 3:
    function myReplace(str, before, after) {
        // create a function that will change the casing of any number of letter in parameter "target"
        // matching parameter "source"
        function applyCasing(source, target) {
            // split the source and target strings to array of letters
            var targetArr = target.split("");
            var sourceArr = source.split("");
            // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
            for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
                // find out the casing of every letter from sourceArr using regular expression
                // if sourceArr[i] is upper case then convert targetArr[i] to upper case
                if (/[A-Z]/.test(sourceArr[i])) {
                    targetArr[i] = targetArr[i].toUpperCase();
                }
                // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
                else targetArr[i] = targetArr[i].toLowerCase();
            }
            // join modified targetArr to string and return
            return targetArr.join("");
        }

        // replace "before" with "after" with "before"-casing
        return str.replace(before, applyCasing(before, after));
    }


// Solution 4:
// Add new method to the String object, not overriding it if one exists already
    String.prototype.capitalize = 
                                    String.prototype.capitalize ||
                                    function() {
                                        return this[0].toUpperCase() + this.slice(1);
                                    };

    const Util = (function() {
        // Create utility module to hold helper functions
        function textCase(str, tCase) {
            // Depending if the tCase argument is passed we either set the case of the
            // given string or we get it.
            // Those functions can be expanded for other text cases.

            if (tCase) {
                return setCase(str, tCase);
            } else {
                return getCase(str);
            }

            function setCase(str, tCase) {
                switch (tCase) {
                case "uppercase":
                    return str.toUpperCase();
                case "lowercase":
                    return str.toLowerCase();
                case "capitalized":
                    return str.capitalize();
                default:
                    return str;
                }
            }

            function getCase(str) {
                if (str === str.toUpperCase()) {
                    return "uppercase";
                }
                if (str === str.toLowerCase()) {
                    return "lowercase";
                }
                if (str === str.capitalize()) {
                    return "capitalized";
                }
                return "normal";
            }
        }

        return {
            textCase
        };
    })();

    function myReplace(str, before, after) {
        const { textCase } = Util;
        const regex = new RegExp(before, "gi");
        const replacingStr = textCase(after, textCase(before));

        return str.replace(regex, replacingStr);
    }

// Solution 5:
    function myReplace(str, before, after) {
        const myArr = str.split(" ");
        const [wordToReplace] = myArr.filter(item => item === before);
        return wordToReplace[0].toUpperCase() !== wordToReplace[0]
            ? myArr.map(item => (item === before ? after : item)).join(" ")
            : myArr
                .map(item =>
                item === before ? after[0].toUpperCase() + after.slice(1) : item
                )
                .join(" ");
    }

//#endregion

//#region DNA Pairing 

/*

    The DNA strand is missing the pairing element. Take each character, 
    get its pair, and return the results as a 2d array.
    Base pairs are a pair of AT and CG. Match the missing element to the provided character.
    Return the provided character as the first element in each array.
    For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
    The character and its pair are paired up in an array, 
    and all the arrays are grouped into one encapsulating array.

*/

// Solution 1:
    function pairElement(str) {
        // Return each strand as an array of two elements, the original and the pair.
        var paired = [];

        // Function to check with strand to pair.
        var search = function(char) {
            switch (char) {
            case "A":
                paired.push(["A", "T"]);
                break;
            case "T":
                paired.push(["T", "A"]);
                break;
            case "C":
                paired.push(["C", "G"]);
                break;
            case "G":
                paired.push(["G", "C"]);
                break;
            }
        };

        // Loops through the input and pair.
        for (var i = 0; i < str.length; i++) {
            search(str[i]);
        }

        return paired;
    }

    // test here
    pairElement("GCG");


// Solution 2:
    function pairElement(str) {
        //create object for pair lookup
        var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
        };
        //split string into array of characters
        var arr = str.split("");
        //map character to array of character and matching pair
        return arr.map(x => [x, pairs[x]]);
    }
    
//#endregion

//#region Missing letters 

// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

// Solution 1:
    function fearNotLetter(str) {
        for (var i = 0; i < str.length; i++) {
            /* code of current character */
            var code = str.charCodeAt(i);

            /* if code of current character is not equal to first character + no of iteration
                hence character has been escaped */
            if (code !== str.charCodeAt(0) + i) {
            /* if current character has escaped one character find previous char and return */
            return String.fromCharCode(code - 1);
            }
        }
        return undefined;
    }

    // test here
    fearNotLetter("abce");


// Solution 2:
    function fearNotLetter(str) {
        let currCharCode = str.charCodeAt(0);
        let missing = undefined;
        str
            .split("")
            .forEach(letter => {
            if (letter.charCodeAt(0) === currCharCode) {
                currCharCode++;
            } else {
                missing = String.fromCharCode(currCharCode);
            }
            });

        return missing;
    }

// Solution 3:
    function fearNotLetter(str) {
        for (let i = 1; i < str.length; ++i) {
            if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
            }
        }
    }


//#endregion

//#region Sorted Union 

/*

    Write a function that takes two or more arrays and returns a new array 
    of unique values in the order of the original provided arrays.

    In other words, all values present from all arrays should be included 
    in their original order, but with no duplicates in the final array.

    The unique numbers should be sorted by their original order, 
    but the final array should not be sorted in numerical order.

    Check the assertion tests for examples.

*/

// Solution 1:
    function uniteUnique(arr1, arr2, arr3) {
        // Creates an empty array to store our final result.
        var finalArray = [];

        // Loop through the arguments object to truly make the program work with two or more arrays
        // instead of 3.
        for (var i = 0; i < arguments.length; i++) {
            var arrayArguments = arguments[i];

            // Loops through the array at hand
            for (var j = 0; j < arrayArguments.length; j++) {
                var indexValue = arrayArguments[j];

                // Checks if the value is already on the final array.
                if (finalArray.indexOf(indexValue) < 0) {
                    finalArray.push(indexValue);
                }
            }
        }

        return finalArray;
    }

    // test here
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// Solution 2:
    function uniteUnique(arr) {
        var args = [...arguments];
        var result = [];
        for (var i = 0; i < args.length; i++) {
            for (var j = 0; j < args[i].length; j++) {
                if (!result.includes(args[i][j])) {
                    result.push(args[i][j]);
                }
            }
        }
        return result;
    }   
 
// Solution 3:
    function uniteUnique(arr1, arr2, arr3) {
        var newArr;
        //Convert the arguments object into an array
        var args = Array.prototype.slice.call(arguments);
        //Use reduce function to flatten the array
        newArr = args.reduce(function(arrA, arrB) {
            //Apply filter to remove the duplicate elements in the array
            return arrA.concat(
                arrB.filter(function(i) {
                    return arrA.indexOf(i) === -1;
                })
            );
        });

        return newArr;
    }
    
// Solution 4:
    function uniteUnique() {
        var concatArr = [];
        var i = 0;
        while (arguments[i]) {
            concatArr = concatArr.concat(arguments[i]);
            i++;
        }
        uniqueArray = concatArr.filter(function(item, pos) {
            return concatArr.indexOf(item) == pos;
        });
        return uniqueArray;
    }
    
// Solution 5: (Alternative Code Solution using ES2015)
    
    //jshint esversion:6
    
    function uniteUnique(...arrays) {
        //make an array out of the given arrays and flatten it (using the spread operator)
        const flatArray = [].concat(...arrays);

        // create a Set which clears any duplicates since it's a regular set and not a multiset
        return [...new Set(flatArray)];
    }

// Solution 6:
    function uniteUnique(...arr) {
        return [...new Set(arr.flat())]
    }

    // Or as an arrow function
    const uniteUnique = (...arr) => [...new Set(arr.flat())]

//#endregion

//#region Convert HTML Entities 

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
// in a string to their corresponding HTML entities.

// Solution 1:
    function convertHTML(str) {
        // Split by character to avoid problems.

        var temp = str.split("");

        // Since we are only checking for a few HTML elements, use a switch

        for (var i = 0; i < temp.length; i++) {
            switch (temp[i]) {
            case "<":
                temp[i] = "&lt;";
                break;
            case "&":
                temp[i] = "&amp;";
                break;
            case ">":
                temp[i] = "&gt;";
                break;
            case '"':
                temp[i] = "&quot;";
                break;
            case "'":
                temp[i] = "&apos;";
                break;
            }
        }

        temp = temp.join("");
        return temp;
    }

    //test here
    convertHTML("Dolce & Gabbana");

// Solution 2:
    function convertHTML(str) {
        // Use Object Lookup to declare as many HTML entities as needed.
        const htmlEntities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
        };
        // Using a regex, replace characters with it's corresponding html entity
        return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
    }
// Solution 3:
    function convertHTML(str) {
        // Use Object Lookup to declare as many HTML entities as needed.
        const htmlEntities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
        };
        //Use map function to return a filtered str with all entities changed automatically.
        return str
            .split("")
            .map(entity => htmlEntities[entity] || entity)
            .join("");
    }

//#endregion

//#region Sum All Odd Fibonacci Numbers 

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. 
// Every additional number in the sequence is the sum of the two previous numbers. 
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// Solution 1:)
    function sumFibs(num) {
        let prevNumber = 0;
        let currNumber = 1;
        let result = 0;
        while (currNumber <= num) {
            if (currNumber % 2 !== 0) {
                result += currNumber;
            }
            currNumber += prevNumber;
            prevNumber = currNumber - prevNumber;
        }

        return result;
    }

    // test here
    sumFibs(4);

// Solution 2:
    function sumFibs(num) {
        // Perform checks for the validity of the input
        if (num <= 0) return 0;

        // Create an array of fib numbers till num
        const arrFib = [1, 1];
        let nextFib = 0;

        // We put the new Fibonacci numbers to the front so we
        // don't need to calculate the length of the array on each
        // iteration
        while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
            arrFib.unshift(nextFib);
        }

        // We filter the array to get the odd numbers and reduce them to get their sum.
        return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
    }

//#endregion

//#region Sum All Primes 

// A prime number is a whole number greater than 1 with exactly two divisors: 
// 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. 
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// Solution 1 - Divisibility checking:
    function sumPrimes(num) {
        // Helper function to check primality
        function isPrime(num) {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0)
                    return false;
            }
            return true;
        }

        // Check all numbers for primality
        let sum = 0;
        for (let i = 2; i <= num; i++) {
            if (isPrime(i))
            sum += i;
        }
        return sum;
    }

// Solution 2 - List of prime numbers:
    function sumPrimes(num) {
        // Check all numbers for primality
        let primes = [];
        for (let i = 2; i <= num; i++) {
            if (primes.every((prime) => i % prime !== 0))
                primes.push(i);
        }
        return primes.reduce((sum, prime) => sum + prime, 0);
    }

// Solution 3 - Prime number sieve:
    function sumPrimes(num) {
        // Prime number sieve
        let isPrime = Array(num + 1).fill(true);
        // 0 and 1 are not prime
        isPrime[0] = false;
        isPrime[1] = false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (isPrime[i]) {
                // i has not been marked false -- it is prime
                for (let j = i * i; j <= num; j += i)
                isPrime[j] = false;
            }
        }

        // Sum all values still marked prime
        return isPrime.reduce(
            (sum, prime, index) => prime ? sum + index : sum, 0
        );
    }

//#endregion

//#region Smallest Common Multiple 

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 
// that is also evenly divisible by all numbers between 1 and 3. 
// The answer here would be 6.

// Solution 1 - Looping approach:
    function smallestCommons(arr) {
        // Setup
        const [min, max] = arr.sort((a, b) => a - b);
        const numberDivisors = max - min + 1;
        // Largest possible value for SCM
        let upperBound = 1;
        for (let i = min; i <= max; i++) {
            upperBound *= i;
        }
        // Test all multiples of 'max'
        for (let multiple = max; multiple <= upperBound; multiple += max) {
            // Check if every value in range divides 'multiple'
            let divisorCount = 0;
            for (let i = min; i <= max; i++) {
            // Count divisors
                if (multiple % i === 0) {
                    divisorCount += 1;
                }
            }
            if (divisorCount === numberDivisors) {
                return multiple;
            }
        }
    }

    smallestCommons([1, 5]);

// Solution 2 - ES6 looping:
    function smallestCommons(arr) {
        // Setup
        const [min, max] = arr.sort((a, b) => a - b);
        const range = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
        // Largest possible value for SCM
        const upperBound = range.reduce((prod, curr) => prod * curr);
        // Test all multiples of 'max'
        for (let multiple = max; multiple <= upperBound; multiple += max) {
            // Check if every value in range divides 'multiple'
            const divisible = range.every((value) => multiple % value === 0);
            if (divisible) {
                return multiple;
            }
        }
    }
    
 // Solution 3 - GCD and LCM:
    function smallestCommons(arr) {
        // Setup
        const [min, max] = arr.sort((a, b) => a - b);
        const range = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
        // GCD of two numbers
        // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
        const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
        // LCM of two numbers
        // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
        const lcm = (a, b) => a * b / gcd(a, b);
        // LCM of multiple numbers
        // https://en.wikipedia.org/wiki/Least_common_multiple#Other
        return range.reduce((multiple, curr) => lcm(multiple, curr));
    }    

// Solution 4 - Prime factorization:
    // Find the SCM of a range of numbers
    function smallestCommons(arr) {
        let primeFactors = {};
        const [min, max] = arr.sort((a, b) => a - b);
        for (let i = min; i <= max; i++) {
            // Factorize number in range
            let primes = getPrimeFactors(i);
            for (let j in primes) {
                // Add factor to set or update number of occurrences
                if (!primeFactors[j] || primes[j] > primeFactors[j]) {
                    primeFactors[j] = primes[j]
                }
            }
        }
        // Build SCM from factorization
        let multiple = 1;
        for (let i in primeFactors) {
            multiple *= i ** primeFactors[i]
        }
        return multiple;
    }

    // Compute prime factors of a number
    function getPrimeFactors(num) {
        const factors = {};
        for (let prime = 2; prime <= num; prime++) {
            // Count occurances of factor
            // Note that composite values will not divide num
            while ((num % prime) === 0) {
                factors[prime] = (factors[prime]) ? factors[prime] + 1 : 1;
                num /= prime;
            }
        }
        return factors;
    }

//#endregion

//#region Drop it 

// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
// until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.


// Solution 1:
    function dropElements(arr, func) {
        while (arr.length > 0 && !func(arr[0])) {
            arr.shift();
        }
        return arr;
    }

        // test here
    dropElements([1, 2, 3, 4], function(n) {
        return n >= 3;
    });


// Solution 2:
    function dropElements(arr, func) {
        let sliceIndex = arr.findIndex(func);
        return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
    }

    // test here
    dropElements([1, 2, 3, 4], function(n) {
        return n >= 3;
    });

// Solution 3:
    function dropElements(arr, func) {
        // drop them elements.
        let originalLen = arr.length;
        for (let i = 0; i < originalLen; i++) {
            if (func(arr[0])) {
                break;
            } else {
                arr.shift();
            }
        }
        return arr;
    }

    // test here
    dropElements([1, 2, 3, 4], function(n) {
        return n >= 3;
    });

// Solution 4:
    function dropElements(arr, func, i = 0) {
        return i < arr.length && !func(arr[i])
            ? (dropElements(arr.slice(i + 1), func, i))
            : arr;
    }

    // test here
    dropElements([1, 2, 3, 4], function(n) {
        return n >= 3;
    });

//#endregion

//#region Steamroller 

// Flatten a nested array. You must account for varying levels of nesting.

// Solution 1:
    function steamrollArray(arr) {
        const flattenedArray = [];
        // Loop over array contents
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
            // Recursively flatten entries that are arrays
            //  and push into the flattenedArray
                flattenedArray.push(...steamrollArray(arr[i]));
            } else {
            // Copy contents that are not arrays
                flattenedArray.push(arr[i]);
            }
        }
        return flattenedArray;
    };

    // test here
    steamrollArray([1, [2], [3, [[4]]]]);

// Solution 2:
    function steamrollArray(arr) {
        const flat = [].concat(...arr);
        return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
    }

// Solution 3:
    function steamrollArray(arr) {
        return arr
        .toString()
        .replace(",,", ",") // "1,2,,3" => "1,2,3"
        .split(",") // ['1','2','3']
        .map(function(v) {
            if (v == "[object Object]") {
            // bring back empty objects
                return {};
            } else if (isNaN(v)) {
            // if not a number (string)
                return v;
            } else {
                return parseInt(v); // if a number in a string, convert it
            }
        });
    }

// Solution 4:
    function steamrollArray(val,flatArr=[]) {
        val.forEach(item => {
            if (Array.isArray(item)) steamrollArray(item, flatArr);
            else flatArr.push(item);
        });
        return flatArr;
    }

// Solution 5:
    function steamrollArray(arr, flatArr = []) {
        const elem = arr.pop();
        return elem
            ? !Array.isArray(elem)
            ? steamrollArray(arr, [elem, ...flatArr])
            : steamrollArray(arr.concat(elem), flatArr)
            : flatArr;
    }

//#endregion

//#region Binary Agents 

// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

// Solution 1:
    function binaryAgent(str) {
        var biString = str.split(" ");
        var uniString = [];

        /*using the radix (or base) parameter in parseInt, we can convert the binary
            number to a decimal number while simultaneously converting to a char*/

        for (var i = 0; i < biString.length; i++) {
            uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
        }

        // we then simply join the string
        return uniString.join("");
    }

    // test here
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111");

// Solution 2:
    function binaryAgent(str) {
        // Separate the binary code by space.
        str = str.split(" ");
        var power;
        var decValue = 0;
        var sentence = "";

        // Check each binary number from the array.
        for (var s = 0; s < str.length; s++) {
            // Check each bit from binary number
            for (var t = 0; t < str[s].length; t++) {
                // This only takes into consideration the active ones.
                if (str[s][t] == 1) {
                    // This is quivalent to 2 ** position
                    power = Math.pow(2, +str[s].length - t - 1);
                    decValue += power;

                    // Record the decimal value by adding the number to the previous one.
                }
            }

            // After the binary number is converted to decimal, convert it to string and store
            sentence += String.fromCharCode(decValue);

            // Reset decimal value for next binary number.
            decValue = 0;
        }

        return sentence;
    }

// Solution 3:
    function binaryAgent(str) {
        return String.fromCharCode(
            ...str.split(" ").map(function(char) {
                return parseInt(char, 2);
            })
        );
    }


//#endregion

//#region Everything Be True 

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. 
// The predicate pre will be an object property and you need to return true if its value is truthy. 
// Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.

// Solution 1: Using for-in loop & hasOwnProperty
    function truthCheck(collection, pre) {
        // Create a counter to check how many are true.
        var counter = 0;
        // Check for each object
        for (var c in collection) {
            // If it is has property and value is truthy
            if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
                counter++;
            }
        }
        // Outside the loop, check to see if we got true for all of them and return true or false
        return counter == collection.length;
    }

    // test here
    truthCheck(
        [
            { user: "Tinky-Winky", sex: "male" },
            { user: "Dipsy", sex: "male" },
            { user: "Laa-Laa", sex: "female" },
            { user: "Po", sex: "female" }
        ],
        "sex"
    );

// Solution 2: Using Array.every()
    function truthCheck(collection, pre) {
        return collection.every(function(element) {
            return element.hasOwnProperty(pre) && Boolean(element[pre]);
        });
    }

// Solution 3:
    function truthCheck(collection, pre) {
        // Is everyone being true?
        return collection.every(obj => obj[pre]);
    }   

//#endregion

//#region Arguments Optional 

// Create a function that sums two arguments together. 
// If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:

    var sumTwoAnd = addTogether(2);
    sumTwoAnd(3) //returns 5.

// If either argument isn't a valid number, return undefined.

// Solution 1:
    function addTogether() {
        // Function to check if a number is actually a number
        function checkNum(num) {
            return (typeof num === "number");
        };

        if (arguments.length === 2) {
            // Check if we have two arguments and if they are numbers
            // Return the sum if they are both numbers
            let first = arguments[0];
            let second = arguments[1];
            if (checkNum(first) && checkNum(second)) {
                return first + second;
            } else {
                return undefined;
            }
        } else if (arguments.length === 1) {
            // If only one argument was found, return a new function
            let first = arguments[0];
            if (checkNum(first)) {
                // Return function that expect a second argument.
                function addSecond(second) {
                    // Check if the new argument is a number
                    if (checkNum(second)) {
                        return first + second;
                    } else {
                        return undefined;
                    }
                };
                return addSecond;
            } else {
                return undefined;
            }
        } else {
            // Incorrect number of arguments found
            return undefined;
        }
    }

    // test here
    addTogether(2, 3);

// Solution 2:
    function addTogether() {
        const [first, second] = Object.values(arguments);
        // Check first argument
        if (typeof first !== "number") {
            return undefined;
        }

        // Function to add second argument
        const addSecond = (second) => typeof second === "number" ? first + second : undefined;

        // Check second argument
        if (second !== undefined) {
            return addSecond(second);
        } else {
            return addSecond
        }
    }    

// Solution 3:
    //jshint esversion: 6
    function addTogether() {
        var args = Array.from(arguments);
        return args.some(n => typeof n !== "number")
        ? undefined
        : args.length > 1
        ? args.reduce((acc, n) => (acc += n), 0)
        : n => (typeof n === "number" ? n + args[0] : undefined);
    }


//#endregion

//#region Make a Person 

// Fill in the object constructor with the following methods below:

    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)

// Run the tests to see the expected output for each method. 
// The methods that take an argument must accept only one argument and it has to be a string. 
// These methods must be the only available means of interacting with the object.

// Solution:
    var Person = function(firstAndLast) {
        var fullName = firstAndLast;

        this.getFirstName = function() {
            return fullName.split(" ")[0];
        };

        this.getLastName = function() {
            return fullName.split(" ")[1];
        };

        this.getFullName = function() {
            return fullName;
        };

        this.setFirstName = function(name) {
            fullName = name + " " + fullName.split(" ")[1];
        };

        this.setLastName = function(name) {
            fullName = fullName.split(" ")[0] + " " + name;
        };

        this.setFullName = function(name) {
            fullName = name;
        };
    };

    var bob = new Person("Bob Ross");
    bob.getFullName();


//#endregion

//#region Map the Debris 

// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// Solution 1:
    function orbitalPeriod(arr) {
        var GM = 398600.4418;
        var earthRadius = 6367.4447;
        var a = 2 * Math.PI;
        var newArr = [];

        var getOrbPeriod = function(obj) {
            var c = Math.pow(earthRadius + obj.avgAlt, 3);
            var b = Math.sqrt(c / GM);
            var orbPeriod = Math.round(a * b);
            // create new object
            return {name: obj.name, orbitalPeriod: orbPeriod};
        };

        for (var elem in arr) {
            newArr.push(getOrbPeriod(arr[elem]));
        }

        return newArr;
    }
    // test here
    orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

// Solution 2:
    function orbitalPeriod(arr) {
        var GM = 398600.4418;
        var earthRadius = 6367.4447;
        var newArr = [];

        //Looping through each key in arr object
        for (var elem in arr) {
            //Rounding off the orbital period value
            var orbitalPer = Math.round(
                2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
            );
            //Adding new object with orbitalPeriod property
            newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
        }

        return newArr;
    }

// Solution 3:
    function orbitalPeriod(arr) {
        var GM = 398600.4418;
        var earthRadius = 6367.4447;
        // Create new array to prevent modification of the original
        var newArr = JSON.parse(JSON.stringify(arr));
        // Loop through each item in the array arr
        newArr.forEach(function(item) {
            // Calculate the Orbital period value
            var tmp = Math.round(
            2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
            );
            //Delete the avgAlt property
            delete item.avgAlt;
            //Add orbitalPeriod property
            item.orbitalPeriod = tmp;
        });
        return newArr;
    }

// Solution 4:
    function orbitalPeriod(arr) {
        const GM = 398600.4418;
        const earthRadius = 6367.4447;
        return arr.map(({ name, avgAlt }) => {
            const earth = earthRadius + avgAlt;
            const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
            return { name, orbitalPeriod };
        });
    }

//#endregion













































