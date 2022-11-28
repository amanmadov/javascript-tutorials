import { func, object } from "prop-types";




let jsCourse = {

    courseName : "The Complete JavaScript Course 2021: From Zero to Expert",
        author : "Jonas Schmedttman",
           url : "https://www.udemy.com/course/the-complete-javascript-course/"

}



//#region Section 1-8 JS Basics 

//#region Part 1 

//#region Data Types 

    let name = 'Nury';
    // important: name is a reversed keywoard in JS but can be used. Never use it. 

    // Constants should be written all uppercase
    const PI = 3.14;

/* 

    Primitive Data Types in JS:

    1- Number
    2- String
    3- Boolean
    4- Undefined
    5- Null
    6- Symbol
    7- BigInt

*/

// 1. Number: Floating point number. Used for decimals and integers. 
    let myNum = 23; // actually its 23.0 even if we dont see it

// important: In other programming languages there are different data types for integers and decimals 
//            but in javascript there are all same.


// 2. String: Sequence of characters
    let myName = 'Nury';


// 3. Boolean: Logical type that can only be true or false  
    let isCompleted = true;


// 4. Undefined: Value taken by a variable that is not yet defined. ('empty value')
    let children;

// 5. Null: Empty value. Similar to undefined. 


// 6. Symbol: Introduced in ES2015. Value that is unique and cannot be changed.


// 7. BigInt: Came with ES2020. Larger Integers than the Number can hold. 



// important: Javascript has a feature called dynamic typing. 
//            We dont have to manually define the data type of variable in javascript. 
//            Instead data types are determined automatically.

    let age = 10; // age will automatically be defined as Number

// One another feature of javascript is a variable data type can later be changed to another data type.

    let num = 0;   
    console.log(typeof num); // Number

    let num = '0'; 
    console.log(typeof num); // String

    let year = 2021;
    console.log(typeof year); // Number

    let year;
    console.log(year); // undefined
    console.log(typeof year); // undefined

    console.log(typeof null); // object

// important: This is a bug in javascript and it has never corrected for legacy reasons. 
//            This should be undefined. Be carefull about this bug.


    let age = 30;
    age = 31;       // This is called mutating a varibale in javascript world. Reassigning.

    const PI = 3.14; // Constant variables can not be changed later. Immutable. 

// We cannot define an empty const variable.

    const PI;  // This is not legal. Initial value has to be given. 

// "let" is block scoped however "var" is function scoped. 

    let numOne = 2;
    let numTwo = 3;
    console.log(numOne, numTwo); 
    console.log(numOne ** numTwo); // Prints out: 8

    let ageSara = 22;
    let isFullAge = ageSara >= 18;


// Template literals (Came with ES6)

    let myName = 'Nury';
    let birthYear = 1989;
    let me = `Hello, I'm ${myName} and I'm ${new Date().getFullYear() - birthYear} years old.`;

    console.log('This is first line \n\
    This is second line'); 
    // important: This is a bug in javascript.

    console.log(`This is first line 
    This is second line`);  
    // This is a proper way of doing it. This syntax is commonly used in creating dynamic HTML tags.


/*

    In javaScript, there is type conversion and type coercion. So they sound very similar, but are different.
    Type conversion is when we manually convert from one type to another. 
    On the other hand type coercion is when javascript automatically converts types behind the scenes for us.
    So that's necessary in some situation, but it happens implicitly, completely hidden from us.

*/

    const inputYear = '1991';
    inputYear = Number(inputYear); // This is type conversion.

    console.log(Number('Hello')); // NaN 

// "NaN" stands for "not a number". So a javascript gives us this, not a number value
// whenever an operation that involves numbers fails to produce a new number. 

    console.log(typeof NaN); // Number 

// important: typeof NaN is Number 

// And so again, not a number actually means an invalid number. 
// It's still a number of somehow, but it's an invalid one.

    console.log(String(23)); // '23'

    console.log(String(23), 23); // 23 23 colors will be different

    console.log('I am ' + 23 + ' years old.'); // I am 23 years old.

// And it works this way because of type of coercion. 

// important: So in javascript, the plus operator that we used here triggers a coercion to strings.
//            And so whenever there is an operation between a string and the number, 
//            the number will be converted to a string.

    console.log('23' - '10' - 3); // 10

// And so what this means is that the minus operator actually triggers the opposite conversion.
// So in this case, strings are converted to numbers and not the other way around.

// So instead if we use the plus, what do you think is going to happen? 

    console.log('23' + '10' + 3); // 23103

// important: all three are converted to a string and then the three strings are concatenated.
// So this is a very important distinction to keep in mind because this is actually confusing.

    console.log('3' * '2'); // 8
    console.log('4' / '2'); // 2
    console.log('4' > '2'); // true

    let n = '1' + 1;
    n = n - 1;
    console.log(n); // 10 

    console.log(2 + 3 + 4 + '5'); // 95 
    console.log('10' - '4' - '3' - '2' + '5'); // 15 

//#endregion

//#region Truthy and Falsy Values 

/*

    Falsy values in Javascript

    important: 5 falsy values in javascript are: 0, '', undefined, null, NaN

    All of these five values will be converted to false when we attempt to convert them to a boolean.
    Of course, false itself is already false, so we don't need to include it in the list of falsy values.
    They're not exactly false initially, but they will become when converted to a boolean. 
    So, that's the definition of falsy values.

    Everything else are so-called truthy values, values that will be converted to true. 
    For example, any number that is not zero or any string that is not an empty string 
    will be converted to true when we attempt to convert them to a boolean.

*/

    console.log(Boolean(0)); // false
    console.log(Boolean(undefined)); // false
    console.log(Boolean('Javscript')); // true
    console.log(Boolean({})); // true
    console.log(Boolean(1)); // true

    const money = 0;
    if (money) {
        console.log("Dont spend it all.")
    }
    else{
        console.log("You should earn some money.") // this will be executed
    }

    let height;
    if (height) {
        console.log("Yay. Height is defined")
    }
    else{
        console.log("Height is undefined") // this will be executed
    }


    let age = 18;
    if (age === 18) {
        console.log("You are an adult.") // Strict equality operator
    }


// important: Difference between double and triple equal is that 
//            the three equals is called the "strict equality" operator.
//            It's strict, because it does not perform type coercion. 
//            And so it only returns to when both values are exactly the same.
//            On the other hand, there's also the loose equality operator, which is only two equals, 
//            and the loose equality operator actually does type coercion.

    console.log('18' == 18); // true
    console.log('18' === 18); // false

// important: so as a general rule for clean code, avoid the loose equality operator as much as you can.
//            when comparing values, always use strict equality with the three equal signs.

// The Conditional (Ternary) Operator

    const age = 23;
    age >= 18 ? console.log("You are an adult.") : console.log("You are not an adult.");

    let canDrive = age >= 18 ? "Yes" : "No";

//#endregion

//#endregion

//#region Part 2

//#region Using Strict Mode 

/*

    Strict mode statement has to be the very first statement in the script.
    So if we have any code before this then strict mode will not be activated. 
    We can also activate strict mode, only for a specific function or a specific block.
    But there is no point in doing that and so always use it at the beginning of each script.
    So always just put strict mode in the beginning of your scripts and like that write more secure code. 
    And when secure, I mean that strict mode makes it easier for us developers to avoid accidental errors.
    So basically it helps us introduce the bugs into our code and that's because of 2 reasons. 
    First, strict mode forbids us to do certain things and second, 
    it will actually create visible errors for us in certain situations in which without strict mode 
    JavaScript will simply fail silently without letting us know that we did a mistake.

*/


    'use strict';

    let isActive = false;
    isActiv = true;     // fails silently 

    const interface = "Audio"; // failse because interface is a reserved keyword 
    const private; 


//#endregion

//#region Functions 

    function logger(str) {
        console.log(str);
    }

// important: calling parameterless function with a parameter has no negative affect

    function fruitProcessor(apples, oranges) {
        console.log(apples,oranges);
        const juice = `Juice with ${apples} apples and ${oranges} oranges`;
        return juice;
    }

    logger(fruitProcessor(2,3));


// Function declaration
    function calcAge(birthYear) {
        return 2021 - birthYear;
    }

    const age = calcAge(1989);

// Function expression
                         // Anonymous function
    const calculateAge = function(birthYear) {
        return 2021 - birthYear;
    }

    calculateAge(1989);

// important: In JavaScript, functions are actually just values. So just as a number or a string or a boolean value.
//            Function is not a type, okay? It's not like a string or number type but it's also a value.

/* 

    Now, besides these technical differences, you might be wondering what is the big deal?
    So what's the big difference between "function declarations" and "function expressions"?
    Well, the main practical difference is that we can actually call "function declarations" 
    before they are defined in the code.

    So we learned about "function declarations" and "function expressions" but there is actually 
    a third type of function that was added to JavaScript in ES6 and that's the "arrow function". 
    An arrow function is simply a special form of function expression that is shorter and faster to write.

*/

    const calcAge = birthYear => 2021 - birthYear;
// no return keyword no brackets just simple clean code

    const yearsLeftUntilRetirement = birthYear => {
        const age = 2021 - birthYear;
        const yearsLeft = 65 - age;
        return yearsLeft;
    }


    const getSum = (num1 , num2) => num1 + num2;


    const yearsLeftUntilRetirement = (name, birthYear) => {
        const age = 2021 - birthYear;
        const yearsLeft = 65 - age;
        return `${name} retires in ${yearsLeft} years`;;
    }

    logger(yearsLeftUntilRetirement("Bob", 1980));

// important: There is another fundamental difference between the 
//            "arrow function" and more "traditional functions". 
//            It's the fact that arrow functions do not get a so-called this keyword.


// VS Code Tip: Select a word in vs code and Ctrl + D will select all instances of that word

//#endregion

//#region Arrays 

    const cities = ["London", "Paris", "Rome"];
    const years = new Array(1991,1995,2001);

// important: Only primitive types are immutable if thay are declared as const, arrays are not

    const cities = ["London", "Paris", "Rome"];
    cities[2] = "Berlin";
    cities = ["Berlin", "Toronto"]; // important: This is illegal. Entire array can not be changed

    const nums = [1,2,3];
    nums + 5; // important: This is legal. Concatentaion as string. Produces "1,2,35" output
    nums - 5; // NaN

// Adding elements to an array

    const cities = ["London", "Paris", "Rome"];

    const arrLength = cities.push("Madrid")       // Adds element to the last index. Returns new array length.  
    // cities array becomes: ["London", "Paris", "Rome", "Madrid"]

    arrLength = cities.unshift("Barcelona") // Adds element to the first index. Returns new array length. 
    // cities array becomes: ["Barcelona", "London", "Paris", "Rome", "Madrid"]

    // Removing elements from an array
    const poppedCity = cities.pop("Madrid")         // Removes element from the last index. Returns popped element "Madrid"
    // cities array becomes: ["Barcelona", "London", "Paris", "Rome"]

    const shiftedCity = cities.shift("Barcelona")   // Removes element from the first index. Returns removed element "Barcelona"
    // cities array becomes: ["London", "Paris", "Rome"]


    let cities = ["London", "Paris", "Rome"];
    console.log(cities.indexOf("Paris"));   // Returns 1. element index 
    console.log(cities.indexOf("Berlin"));  // Returns -1. element does not exist

    console.log(cities.includes("Paris"));  // Returns true
    console.log(cities.includes("Berlin")); // Returns false

//#endregion

//#region Objects 

// Array seeming like an object
    const mesutArray = [
        "Mesut",    // FirstName
        "Ozil",     // LastName
        1987,       // BirthYear
        "Player",   // Job
        ["Crisitiano Ronaldo","Sergio Ramos","Karim Benzema"] //Friends
    ]

// For array you cannot call value by property like mesutArray(LastName) or mesutArray. 
// Values can only be reached with index pointers like mesutArray[1]
// In order to solve this problem objects are created. 
// important: Objects are simple key value pairs.

    const mesut = {
        firstName: "Mesut", 
        lastName: "Ozil", 
        birthYear: 1987,   
        job: "Player",   
        friends: ["Crisitiano Ronaldo","Sergio Ramos","Karim Benzema"] 
    };

// This is called object literal syntax 

    console.log(mesut.firstName);   // This is called dot notation
    console.log(mesut['lastName']); // This is called bracket notation

// important: For bracket notation, we can actually put any expression that returns value.

    let n = "Name";
    console.log(mesut['last' + n]);  // This still works. But console.log(mesut.'last' + n) does not.

    let interestedIn = prompt("What do you want to know about mesut? Choose firstName, lastName or job")

    console.log(mesut[interestedIn]) // Works for interestedIn = "firstName"
    console.log(mesut[interestedIn]) // Does not work for interestedIn = "location". Undefined

// Undefined is a falsy value so that we can use it inside an if statement

    if (mesut[interestedIn]) {
        console.log(mesut[interestedIn]);
    }
    else {
        console.log("Not what we expected");
    }

    const mesut = {
        firstName: "Mesut", 
        lastName: "Ozil", 
        birthYear: 1987,   
        job: "Player",   
        friends: ["Crisitiano Ronaldo","Sergio Ramos","Karim Benzema"],
        hasLicense: true,
        getAge: function(birthYear) {
            return 2021 - birthYear;
        }
    };


    console.log(mesut.getAge(1987))         // Works
    console.log(mesut['getAge'](1987))      // Works


// this keyword

    const mesut = {
        firstName: "Mesut", 
        lastName: "Ozil", 
        birthYear: 1987,   
        job: "Player",   
        friends: ["Crisitiano Ronaldo","Sergio Ramos","Karim Benzema"],
        hasLicense: true,
        getAge: function() { // No parameter
            return 2021 - this.birthYear;
        }
    };

    console.log(mesut.getAge())  // important: We dont need to pass an argument this way

    const myObj = {
        objName: "Book", 
        price: 10, 
        getInfo:function() {
            console.log(this);  // logs {objName: "Book", Price: 10, getInfo: ƒ }
        }
    };

    const myObj = {
        objName: "Book", 
        price: 10, 
        getInfo:function() {
            this.info = "Book price is " + this.price + " USD."; 
            return this.info;
        }
    };

    myObj.getInfo()     
    "Book price is 10 USD."
    // important: myObj.info property is created only if this method is called.

    myObj.info          
    "Book price is 10 USD."
    // important: Can only be called after myObj.getInfo() method is called

//#endregion

//#region For loops 

// array
    const mesut = [
        "Mesut", 
        "Ozil", 
        1987,   
        "Player",   
        ["Crisitiano Ronaldo","Sergio Ramos","Karim Benzema"]
    ];

    const types = [];

    for (let index = 0; index < mesut.length; index++) {
        types[i] = typeof mesut[index]; 
    }

    // Alternative approach 
    for (let index = 0; index < mesut.length; index++) {
        types.push(typeof mesut[index]);
    }

//#endregion

//#region Some Notes 

// www.codewars.com for coding challenges

/*

    \r   (Carriage Return) → moves the cursor to the beginning of the line without advancing to the next line
    \n   (Line Feed) → moves the cursor down to the next line without returning to the beginning of the line
    \r\n (End Of Line) → a combination of \r and \n

*/

//#endregion

//#region DOM and Javascript 

// Web APIs 

    /* 
        <section>
            <p class="message">Hello</p>
        </section>
    */ 

    var txt = document.querySelector('.message').textContent;
    document.querySelector('.message').textContent = "Hi";

    // <input class="guess" type="text"></input> 

    var value = document.querySelector('.guess').value;
    document.querySelector('.guess').value = "23";

// important: "value" property is used for input fields


// EventListeners

// <button class="btn">Click Me</button>

    var myButton = document.querySelector('.btn');
    myButton.addEventListener(arg1,arg2);

// There are multiple ways for listening events in javascript. addEventListener is the most used one. 

// arg1: Type of the event is passed to addEventListener method
// arg2: Event handler function that will be called when an event happens

    document.querySelector('.btn').addEventListener('click', function () {
        console.log("Hello, click event is triggered.")
    })

// click is the event that is listened
// function () { console.log("Hello, click event is triggered.")} is the event handler

// domElement.addEventListener(event,eventHandlerFunction);

    // Generating random number between 0-20
    const randNum = Math.trunc(Math.random() * 20) + 1;

    let score = 20; // this is a state variable 

// This score is so called application state 

// property names change in js, in css background-color but in javascript backgroundColor
// same rule applies to all other properties that has multiple words

    document.querySelector('body').style.backgroundColor = 'green';

// important: every css property has to be set with string in javascript
    document.querySelector('number').style.width = 20;      // illegal 
    document.querySelector('number').style.width = '20px';  // legal

// important: javascript applies styles as an inline style. It does not simply change css file


/*
    <button class="show-modal">Show Modal 1</button>
    <button class="show-modal">Show Modal 2</button>
    <button class="show-modal">Show Modal 3</button>
*/

    // querySelector will return only the first modal element
    var modals = document.querySelector('show-modal');

    // querySelectorAll will return all of the modal elements
    var modals = document.querySelectorAll('show-modal');

// important: querySelectorAll method returns nodeList 

// https://www.reddit.com/r/learnjavascript/
// https://javascript30.com/

/*
    <div class="modal hidden">
        <button class="close-modal">Close</button>
        <h1>Title</h1>
        <p>Lorem ipsum</p>
    </div>
*/

    var modal = document.querySelector('.modal');
    modal.classList.remove('hidden');   // removes "hidden" class from modal 

// important: classList is a property to manage classes

// important: We can remove multiple classes with remove method of classList property
    modal.classList.remove('hidden','modal'); 

// document.querySelector('.modal') has to be used with dot before class name
// For classList.remove method we dont need to use dot prefix before class name

    // Adding a class
    modal.classList.add('newClass'); 

/*

    CSS style of a hidden class

    .hidden {
        display:none;
    }

*/

// Same thing with alternative approach but not the best way
    modal.style.display = 'block';

// Same modal can also be closed by clicking overlay element (outside the modal)

    const closeModal = overlay.addEventListener('click', function() {
        modal.classList.add('hidden'); 
    });

// Alternative approach
    const close = function() {
        modal.classList.add('hidden'); 
    }

    const closeModal = overlay.addEventListener('click', close);
    const closeModal = overlay.addEventListener('click', close()); // important: This will not work. Dont call it just point it

// Because () syntax will immediately call the function as soon as javascript executes this line when page rendering

/*

    Keyboard events are called global events because they do not happen when a specific element triggered.
    We use document object to listen for a keypress events. So we are listening everywhere for an event to be triggered. 

    There are 3 types of keypress events: 
    1. keyDown : is fired as soon as the key is pressed.
    2. keyPress : is fired continuosly when we hold our finger pressed on a key.
    3. keyUp : is fired when a pressed key is released (when we lift finger of the keyboard)

*/

// The following code will work for any pressed key
    document.addEventListener('keydown', function() {
        modal.classList.add('hidden'); 
    })

/*

    The information about which key was pressed will be stored in the event that is going to occur as soon as any key is pressed.
    So again, when an event happened we can have access to information about that event in the event handler function.
    To acces all information about the event we simply give an argument to an event handler function like below

    document.addEventListener('keydown', function(event) {
        modal.classList.add('hidden'); 
    })

*/


// important: "e" is the most popular argument passed
    document.addEventListener('keydown', function(e) {
        console.log(e);
    })


/*
    Output object will be like below if we press Esc key:

    KeyboardEvent {isTrusted: true, key: "Escape", code: "Escape", location: 0, ctrlKey: false, …}
    altKey: false
    bubbles: true
    cancelBubble: false
    cancelable: true
    charCode: 0
    code: "Escape"
    composed: true
    ctrlKey: false
    currentTarget: null
    defaultPrevented: false
    detail: 0
    eventPhase: 0
    isComposing: false
    isTrusted: true
    key: "Escape"
    keyCode: 27
    location: 0
    metaKey: false
    path: (4) [body.js-focus-visible, html, document, Window]
    repeat: false
    returnValue: true
    shiftKey: false
    sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
    srcElement: body.js-focus-visible
    target: body.js-focus-visible
    timeStamp: 60132.4799999129
    type: "keydown"
    view: Window {window: Window, self: Window, document: document, name: "", location: Location, …}
    which: 27
    __proto__: KeyboardEvent

*/

    // If escape button is clicked
    document.addEventListener('keydown', function(e) {
        if(e.key === 'Escape')
            modal.classList.add('hidden'); 
    })



    const score = document.querySelector('#score');
    const score = document.getElementById('score');  // important: no need for # prefix

    // selecting by name
    const input = document.querySelector('input[name="pwd"]');


    let initialScore = 0;
    document.querySelector('#score').textContent = initialScore; // JS automatically converts 0 to "0"


    // toggle will add the class if it is not there and if it is there, it will remove it.
    const player1 = document.querySelector('#player1');
    const player2 = document.querySelector('#player2');
    player1.classList.toggle('active');
    player2.classList.toggle('active');


//#endregion

//#endregion

//#region Part 3

//#region Diving deeper 

/*

    JavaScript is a high-level, prototype-based, object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, 
    single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.

    - High-level: we do not have to manage resources at all (js have so-called abstractions that take all of that work away from us)
    - Garbage-collected: is basically an algorithm inside JS engine, which automatically removes old, unused objects from the computer memory.
    - Interpreted or JIT compiled: 
    - Multi-paradigm: can be coded using functional, procedural or another paradigm
    - Prototype-based object-oriented: almost everything in JavaScript is an object, except for primitive values such as numbers, strings etc.
    - First-class functions: functions are treated just as regular variables and this allows for functional-programming.
    - Dynamic: variables are dynamically typed.
    - Single threaded:
    - Non-blocking event loop: JS engine handles multiple tasks happening at the same time.



    In programming, a paradigm is an approach and an overall mindset of structuring our code,
    which will ultimately direct the coding style and technique in a project that uses a certain paradigm.

    Three popular paradigms are:
    1. Procedural
    2. Object-oriented
    3. Functional programming

    "Procedural programming" is basically just organizing the code in a very linear way with some functions in between.
    Most classical or traditional approach used by many developers.

    "Functional programming" is a paradigm in which functions are treated just as regular variables. 
    So, we can pass functions into other functions and we can even return functions from functions. 
    And this is extremely powerful because it allows us to use a lot of powerful techniques.

    Now, many languages are only procedural or only object-oriented or only functional but JavaScript does all of it.
    So it's really flexible and versatile.

    Concurrency model: JS engine handles multiple tasks happening at the same time.
    JavaScript itself runs in one single-thread, which means that it can only do one thing at a time
    and therefore we need a way of handling multiple things happening at the same time.


    Global execution context: code that is not inside a function. Top level code. 
    Now, in any JavaScript project, no matter how large it is, there is only ever one global execution context.
    It's always there as the default context, and it's where top-level code will execute.
    So the top-level of code is finished, functions finally start to execute as well. And here is how that works. 
    For each and every function call execution context will be created containing all the information that is 
    necessary to run exactly that function. And the same goes for methods, of course, because they are simply 
    functions attached to objects remember? Anyway, all these execution contexts together, 
    make up the call stack that I mentioned before.

    Now, when all functions are done executing, the engine will basically keep waiting for callback functions to 
    arrive so that it can execute these. For example, a callback function associated with a click event. 
    So we know now what an execution context is, but don't really know what it's made of.
    So, what's inside of it?
    The first thing that's inside any execution context is a so-called variable environment. 
    In this environment, all our variables and function declarations are stored, 
    and there is also a special arguments object. This object contains, as the name says all the arguments 
    that were passed into the function that the current execution context belongs to.
    Now the program will now actually stay in this state for forever until it is eventually really finished. 
    And that only happens like when we close the browser tab, or the browser window.
    Only when the program is really finished like this, is when the global execution context is also popped off the stack.
    And this is in a nutshell how the call stack works. 
    So hopefully it makes sense now that we say that Java script code runs inside the call stack.
    And actually it is more accurate to say that code runs inside of execution contexts that are in the stack.

    Scopes in Javascipt

    There are three different types of scope in JavaScript:
    1. Global Scope
    2. Function Scope  
    3. Block Scope

*/

//#endregion

//#region 1. Global Scope 

    const age = 33;
    const name = 'Mesut';

    function first() {
        let a = 0;
        console.log("first function is called");
    }

    function second() {
        let b = 0;
        console.log("second function is called");
    }


// Variables "age" and "name" are global variables in the above code.
// So the global scope is once more for top level code. 
// So this is for variables that are declared outside of any function or block.
// These variables will be accessible everywhere in our program, in all functions and all blocks.


//#endregion

//#region 2. Function Scope 

    function sayHi() {
        var a = 0;
        let str = 'Hi';
        console.log("Hi there.");
    }

// Variables "a" and "str" are local variables in the above code.
// Each and every function creates a scope in javascript.
// And the variables declared inside that function scope are only accessible inside that function.
// This is also called a local scope opposed to the global scope. So local variables live in the function so to say. 
// And outside of the function, the variables are not accessible at all.


//#endregion

//#region 3. Block Scope 

// Traditionally, only functions used to create scopes in JavaScript. But starting in ES6, blocks also creates scopes now.
// And with blocks, we mean everything that is between curly braces, such as the block of an if statement or a for loop.
// So just like with functions, variables declared inside a block are only accessible inside that block and not outside of it.

    if (you == 'cool') {
        const me = 'cool';  // block scoped
        let we = 'awesome'; // block scoped
        var they = 'fine';  // global scoped
    }

// important: the big difference is that block scopes only apply to variables declared with "let" or "const".

// So again, only "let" and "const" variables are restricted to the block in which they were created. 
// That's why we say that "let" and "const" variables are block scoped.
// So if I declared a variable using "var" in this block, then that variable would actually still be accessible outside of the block. 
// And would be scoped to the current function or to the global scope.

// So in ES5 and before, we only had global scope and function scope. 
// And that's why ES5 variables declared with "var", only care about functions, but not about blocks.
// Finally, also starting in ES6, all functions are now also block scoped, at least in strict mode, which you should always be using anyway.

//#endregion

//#region The Scope Chain 

    const myName = 'Mesut';

    function first() {
        const age = 33;
        if (age >= 33) {
            const decade = 3;
            var millenial = true;
        }

        function second() {
            const job = 'player';
            console.log(`${myName} is a ${age} years old and he is a ${job}`);
        }

        second();
    }

    first();
    // Mesut is a 33 years old and he is a player


// Global Scope: myName
// First Scope: age, millenial (but can access myName)
// Second Scope: job (but can access age, millenial, myName)
// Block Scope: decade, (but can access age, millenial, myName)

// Every scope always has access to all the variables from all its outer scopes. 
// So from all its parent scopes. And by the way, all this also applies to function arguments.

// In other words, if one scope needs to use a certain variable, but cannot find it in the current scope, 
// it will look up in the scope chain and see if it can find a variable in one of the parent scopes.
// And this process is called variable lookup. 
// A certain scope will never, ever have access to the variables of an inner scope.

// important: "var" is function scoped, "let" and "const" are block scoped. 

//#endregion

//#region Scope Chain vs Call Stack 

// There is one more thing that we need to talk about, which is the difference between the scope chain and the call stack.

    const a = 'Mesut';
    first();

    function first() {
        const b = 'Hello!';
        second();

        function second() {
            const c = 'Hi!';
            third();
        }
    }

    function third() {
        const d = 'Hey!';
        console.log(d + c + b + a);  // ReferenceError. Cant access c and b.
    }

// The scope chain is all about the order in which functions are written in the code.
// But what's really important to note here is that the scope chain has nothing to do with the order in which functions were called.
// Or in other words, the scope chain has nothing to do with the order of the execution contexts in the call stack.

// So to summerize scoping asks the question, "Where do variables live?"
// Or "Where can we access a certain variable, "and where not?" That's what scoping is all about.
// Variables declared with "var" automatically end up in the closest function scope.

    var you = 'awesome';

    function sayHi() {
        const str ='Hi';
        if(you == 'cool'){
            function add(a,b) {
                return a + b;
            }
        }
        add();  // This will only work when strict mode is off
    }

    sayHi(); //"TypeError: add is not a function

    var name = 'Mesut';
    function greet() {
        const name = 'Atilla';
        console.log("Hello " + name); 
    }

    greet(); // prints out: Hello Atilla.

//#endregion

//#region Hoisting 

/*

    So in JavaScript we have a mechanism called "hoisting".
    And hoisting basically make some types of variables accessible, 
    or let's say usable in the code before they are actually declared in the code.
    Now, many people simply define hoisting by saying that variables are magically lifted or 
    moved to the top of their scope for example, to the top of a function.
    Now, hoisting does not work the same for all variable types.

    Function declerations are hoisted. Variables declared using "var" are alse hoisted.
    But variables declared with "let" and "const" are not hoisted instead they are stored
    (uninitialized) in a place called TDZ or Temporal Dead Zone.

    But now what about function expressions and arrow functions?
    How does hoisting work for this? 
    Well, it depends if they were created using "var" or "const" or "let".
    Because keep in mind that these functions are simply variables.
    And so they behave the exact same way as variables in regard to hoisting.

    This means that a function expression or arrow function created with "var" is hoisted to undefined.
    But if created it with "let" or "const", it's not usable before it's declared in a code because of the Temporal Dead Zone.

    And this is actually the reason why that we cannot use function expressions 
    before we write them in the code(calling them), unlike function declarations.

*/

    var name = 'Mesut';

    if (myName === 'Mesut') {
        console.log(myName + " is a " + job); // ReferenceError: Cannot access 'job' before initialization
        const job = 'player';
        console.log(x); // ReferenceError: x is not defined
    }

/*

    Variable 'job' is in fact in the Temporal Dead Zone where it is still initialized,
    but the engine knows that it will eventually be initialized because it already read the 
    code before and set the job variable in the variable environment to uninitialized.

    The main reason that the TDZ was introduced in ES6 is that the behavior described before
    makes it way easier to avoid and catch errors. Because using a variable that is set to undefined
    before it's actually declared can cause serious bugs which might be hard to find.

    So accessing variables before declaration is bad practice and should be avoided.
    And the best way to avoid it is by simply getting an error when we attempt to do so.
    And that's exactly what a Temporal Dead Zone does. A second and smaller reason why the TDZ exists
    is to make const variables actually work the way they are supposed to.
    So as you know, we can't reassign const variables. So it will not be possible
    to set them to undefined first and then assign their real value later.
    Const should never be reassigned. 
    And so it's only assigned when execution actually reaches the declaration.

*/

    console.log(name); // undefined
    var name = 'Mesut'

    add(2,3); // 5

    function add(a,b) {
        return a + b;
    }

    add1(2,3); // Uncaught ReferenceError: Cannot access 'add1' before initialization
    const add1 = function (a,b) {
        return a + b;
    }

    add2(2,3); // Uncaught ReferenceError: Cannot access 'add2' before initialization
    const add2 = (a,b) => a + b;

    add3(2,3); // Uncaught TypeError: add3 is not a function
    var add3 = function (a,b) {
        return a + b;
    }

// important: This is because add3 becomes "undefined" in TDZ
// important: The only function that you can use before declaring it, is the function declaration.

    if (!numProducts) {
        deleteShoppingCart();
    }
    console.log(numProducts); // undefined

    var numProducts = 10;
    function deleteShoppingCart(params) {
        console.log("All products are deleted");
    }

// Above code will execute deleteShoppingCart function because numProducts is undefined 
// Undefined is a falsy value so be careful with handling the variables declared using "var"

//#endregion

//#region Best practises

/*

    Best practises:

    - Just don't use "var" to declare variables. 
    - Use "const" most of the time to declare variables and "let" if you really need to change the variable later.
    - Also in order to write clean code, you should declare your variables at the top of each scope.
    That will just make your code at least look a little bit better.
    - Finally, always declare all your functions first and use them only after the declaration.

*/

    var x = "1";
    let y = "2";
    const z = "3";
    console.log(x === window.x); // true
    console.log(y === window.y); // false
    console.log(z === window.z); // false

// important: The variables declared with "var" will create a property on the global window object.

//#endregion

//#region This Keyword 

/*

    "this" keyword or "this" variable is basically a special variable 
    that is created for every execution context and therefore any function. 
    In fact, it's one of the three components of any execution context, 
    along with the variable environment and scope chain. Now, in general terms, the "this" keyword, 
    will always take the value of the owner of the function in which, the "this" keyword is used.
    We can also say that it points to the owner of that function. And that may sound very abstract.
    For now, what's very important to understand is that the value of the "this" keyword is not static.
    So it's not always the same. It depends on how the function is actually called.
    And its value is only assigned when the function is actually called.
    So it's very different from a normal value. 


    Method:                 this = Object that is calling the method
    Simple function call:   this = undefined
    Arrow functions:        this = this of surrounding function (lexical this)
    Event listeners:        this = DOM element that the handler is attached to 

*/


// MDN: A function's this keyword behaves a little differently in JavaScript compared to other languages. 
// It also has some differences between strict mode and non-strict mode.

// Global context
// In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

// In web browsers, the window object is also the global object:

    console.log(this === window); // true

    a = 37;
    console.log(window.a); // 37

    this.b = "MDN";
    console.log(window.b)  // "MDN"
    console.log(b)         // "MDN"


// Function context
// Inside a function, the value of this depends on how the function is called.

// Since the following code is not in strict mode, and because the value of this is not set by the call, 
// this will default to the global object, which is window in a browser.


    function f1() {
        return this;
    }

    // In a browser:
    f1() === window; // true

    // In Node:
    f1() === globalThis; // true


// In strict mode, however, if the value of this is not set when entering an execution context, 
// it remains as undefined, as shown in the following example:

    function f2() {
        'use strict'; // see strict mode
        return this;
    }

    f2() === undefined; // true


// Note: In the second example, this should be undefined, 
// because f2 was called directly and not as a method or property of an object (e.g. window.f2()). 

// This feature wasnt implemented in some browsers when they first started to support strict mode. 
// As a result, they incorrectly returned the window object.

// To set the value of this to a particular value when calling a function use call(), or apply().

    const jonas = {
        year: 1991,
        calcAge: function () {
            console.log(2021 - this.year);
        }
    }

    jonas.calcAge(); // 30

    const matilda = {
        year: 2001
    }

    // this is called method borrowing
    matilda.calcAge = jonas.calcAge;

    matilda.calcAge(); // 20


    // because methods are just values we can copy them
    const f = jonas.calcAge;

    f(); // NaN because year is undefined

//#endregion

//#region Regular Functions vs Arrow Functions 

    const jonas = {
        year: 1991,
        firstName: "Jonas",
        calcAge: function () {
            console.log(2021 - this.year);
        },
        greet: () => console.log("Hey " + this.firstName)
    }

    jonas.greet(); // Hey undefined

// This is the fact that an arrow function does not get its own this keyword, 
// it will simply use the this keyword from its surroundings.
// So in other words, its parents this keyword, and the parent scope of this greet method is the global scope. 

    console.log("Hey " + this.firstName); // Hey undefined

// But what if our code was like below

    var firstName = "Matilda"; 

    const jonas = {
        year: 1991,
        firstName: "Jonas",
        calcAge: function () {
            console.log(2021 - this.year);
        },
        greet: () => console.log("Hey " + this.firstName)
    }

    jonas.greet(); // Hey Matilda

// important: because var creates properties on the global window.

/*

    important: So from above example, the big takeaway is that as a best practice you should never ever use an arrow function as a method.
    And in my opinion, that's even true if you're not even using the this keyword in a particular method.
    Because if you have this rule of never using an arrow function as a method, 
    then you never have to think about which type of function you should use.
    Just use a normal function expression, so that you can prevent this kind of mistakes from happening.
    So this mistake that we saw here with Hey Matilda is easy to prevent by simply not using var.
    But even then, Hey undefined is still a bug. It's still not correct.
    And so that would have easily been avoided by just using a regular function. 

*/

// And now, one final example of a pitfall of this keyword is when we have a function inside of a method.
// And that is a pretty common thing to happen. And so let's now take a look at an example of that.

    const jonas = {
        year: 1991,
        firstName: "Jonas",
        calcAge: function () {
            console.log(2021 - this.year);
            const isMillenial = function(){
                console.log(this);
                console.log(this.year >= 1981 && this.year <= 1996);
            }

            isMillenial();
        },
        greet: function (){
            console.log("Hey " + this.firstName);
        }
    }

    jonas.calcAge(); // TypeError: Cannot read property 'year' of undefined at isMillenial
    // It's a clear rule that a regular function call has the this keyword set to undefined.

// Now there are two solutions to this problem.  
// The first solution is to use an extra variable that we usually call self.

    const jonas = {
        year: 1991,
        firstName: "Jonas",
        calcAge: function () {
            console.log(2021 - this.year);
            const self = this;
            const isMillenial = function(){
                console.log(self);
                console.log(self.year >= 1981 && self.year <= 1996);
            }

            isMillenial();
        },
        greet: function (){
            console.log("Hey " + this.firstName);
        }
    }

    jonas.calcAge(); // true

// So this was kind of the pre ES6 solution, but you might still find this solution in some older code bases.
// However, now in ES6 we have a more modern and better solution. And that solution is to use an arrow function.

    const jonas = {
        year: 1991,
        firstName: "Jonas",
        calcAge: () => {
            console.log(2021 - this.year);
            const isMillenial = function(){
                console.log(this);
                console.log(this.year >= 1981 && this.year <= 1996);
            }

            isMillenial();
        },
        greet: function (){
            console.log("Hey " + this.firstName);
        }
    }

    jonas.calcAge(); // true

// And that's because a regular function gets its own this keyword.
// But the arrow function will not, it will simply use this keyword of its parent scope.

// Arguments keyword

    const addExpr = function (a,b) {
        console.log(arguments);
        return a + b;
    }

    addExpr(2,5); // Arguments(2) [2, 5]
    addExpr(2,5,4); // Arguments(3) [2, 5, 4] and this is completely legal


    var addArrow = (a, b) => {
        console.log(arguments);
        return a + b;
    }

    addArrow(2,3,4); // Uncaught ReferenceError: arguments is not defined

// important: so this was simply just to show you that the arguments keyword exists, but that it only exists in regular functions.

// The arguments keyword is not that important in modern JavaScript anymore, because now we have a more modern way of dealing with multiple parameters.
// But still it's important that you are aware that this arguments keywords exists.

//#endregion

//#region Primitives vs. Objects (Primitive vs. Reference Types) 

    let age = 30;
    let oldAge = age;
    age = 31
    console.log(age);       // 31
    console.log(oldAge);    // 30

// Each primitive value will simply be saved into its own piece of memory in the stack.

    const me = {
        name: 'Jonas',
        age: 30
    }

    const friend = me;
    friend.age = 27;
    console.log(me.age);        // 27
    console.log(friend.age);    // 27

// JavaScripts primitive data types: number, string, Boolean, undefined, null, symbol and BigInt.
// Then everything else are basically objects. 
// So objects created with the object literal, arrays and even functions are all objects.

// When we're talking about memory and memory management, it's usual to call primitives, 
// primitive types and objects reference types because of the different way in which they are stored in memory.

// It is a misconception that all variables declared with const are immutable.
// In fact, that is only true for primitive values, but not for reference values.

// Primitive types
    let lastName = 'Williams';
    let oldLastName = lastName;
    lastName = 'Davis';
    console.log(lastName, oldLastName);

// Reference types
    const jessica = {
        firstName: 'Jessica',
        lastName: 'Williams',
        age: 27
    };

    const marriedJessica = jessica;
    marriedJessica.lastName = 'Davis';
    console.log('Before marriage: ', jessica);
    console.log('After marriage: ', marriedJessica);

// what if we actually really wanted to copy the object so that 
// we could then change one of them without changing the other?

    const mary = {
        firstName: 'Mary',
        lastName: 'Williams',
        age: 27
    };


    const marriedMary = Object.assign({}, mary);
    // this will create a completely new object where all the properties are copied

    marriedMary.lastName = 'Davis';
    console.log('Before marriage: ', mary);
    console.log('After marriage: ', marriedMary);

// This is how all the properties are copied from one object to the other.
// Behind the scenes a new object is created in the heap and marriedMary is now pointing to that object.

// However, there is still a problem because using this technique of object.assign only works on the first level.
// Or in other words, if we have an object inside the object, then this inner object will actually still be the same.
// So, it will still point to the same place in memory. 
// And that's why we say that this object.assign only creates a shallow copy and not a deep clone which is what we would like to have.
// So, again, a shallow copy will only copy the properties in the first level while a deep clone would copy everything.

    const mary = {
        firstName: 'Mary',
        lastName: 'Williams',
        age: 27,
        family: ['Alice', 'Bob']
    };


    const marriedMary = Object.assign({}, mary);
    // this will create a completely new object where all the properties are copied

    marriedMary.lastName = 'Davis';
    marriedMary.family.push('John');
    marriedMary.family.push('Jane');

    console.log('Before marriage: ', mary);         // Before marriage:  {firstName: "Mary", lastName: "Williams", age: 27, family: Array(4)}
    console.log('After marriage: ', marriedMary);   // After marriage:  {firstName: "Mary", lastName: "Davis", age: 27, family: Array(4)}

// We see that both the objects now have a family with four members.
// The family object is a deeply nested object. Therefore, object.assign did not really, behind the scenes, copy it to the new object.

//#endregion

//#endregion

//#endregion

//#region Section 9: Data Structures, Modern Operators and Strings

//#region Destructuring Arrays 

    'use strict';
    const arr = [1,2,3];
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];

    const[x,y,z] = arr;
    console.log(x,y,z); // 1 2 3

    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    };

    // Getting first and the second
    const [first, second] = restaurant.categories;
    console.log(first, second); // Italian Pizzeria

    // Getting first and the third
    const [first, , third] = restaurant.categories;
    console.log(first, third); // Italian Vegetarian

    // Getting main and secondary
    const [main, , secondary] = restaurant.categories;
    console.log(main, secondary); // Italian Vegetarian

    // Switching variables
    [main, secondary] = [secondary, main]
    console.log(main, secondary); // Vegetarian Italian

    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        order(starterIndex, mainIndex) {
            return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
          },
    };

    console.log(restaurant.order(2,0)); // (2) ["Garlic Bread", "Pizza"]

    // Receiving two return values from a function
    const[starter, mainCourse] = restaurant.order(2,0);
    console.log(starter, mainCourse); // Garlic Bread Pizza

    // Nested destructuring
    const nested = [2, 4, [5, 6]];
    const[i, , j] = nested;
    console.log(i,j); // 2, [5,6]

    // Destructuring inside destructuring
    const[a, , [b, c]] = nested;
    console.log(a,b,c); // 2 5 6

    // Default Values
    const[p = 1, q = 1, r = 1]  = [8,9];
    console.log(p,q,r); // 8 9 1

//#endregion

//#region Destructuring Objects 

    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        openingHours: {
            thu: {
                open: 12,
                close: 22,
            },
            fri: {
                open: 11,
                close: 23,
            },
            sat: {
                open: 0, // Open 24 hours
                close: 24,
            },
        },

        order(starterIndex, mainIndex) {
            return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        },
    };

    const {name, openingHours, categories} = restaurant;
    console.log(name, openingHours, categories); 
    // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

    // variables with different names
    const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
    console.log(restaurantName, hours, tags); 
    // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

    // If property does not exist use default values
    const{menu = [], starterMenu: starters = []} = restaurant;
    console.log(menu, starters);
    // [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']


    // Mutating variables
    let a = 111;
    let b = 999;
    const obj = {a: 23, b: 7, c: 14};
    // important: cant do const{a, b} = obj; because a and b are already declared 
    // important: cant do let {a, b} = obj; because it creates new variables called a and b

    ({a, b} = obj);     // this is the way to mutate a and b
    console.log(a,b);   // 23 7

    // Nested objects
    const {fri} = openingHours;
    console.log(fri); // {open: 11, close: 23}

    const {fri:{open, close}} = openingHours;
    console.log(open,close); // 11 23

    const {fri:{open: o, close: c}} = openingHours;
    console.log(o,c); // 11 23


    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        openingHours: {
            thu: {
                open: 12,
                close: 22,
            },
            fri: {
                open: 11,
                close: 23,
            },
            sat: {
                open: 0, // Open 24 hours
                close: 24,
            },
        },

        order(starterIndex, mainIndex) {
            return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        },

        orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
            console.log('Order recieved. ' + this.starterMenu[starterIndex] + ' ' + this.mainMenu[mainIndex] + ' to ' + address + ' at ' + time);
        },
    };

    // can be called with different parameter order
    restaurant.orderDelivery({
        time: '22:30',
        address: 'Via del Sole, 21',
        mainIndex: 2,
        starterIndex: 2,
    });

    // can also be called like below 
    restaurant.orderDelivery({
        address: 'Via del Sole, 21',
        starterIndex: 2,
    });


//#endregion

//#region The Spread Operator 

    const arr = [7 ,8 ,9];
    const badArr = [3 ,4, 5, 6, arr[0], arr[1], arr[2]];
    console.log(badArr); // (7) [3, 4, 5, 6, 7, 8, 9]

    // with ES6 
    const newArr = [3 ,4, 5, 6, ...arr];
    console.log(newArr); // (7) [3, 4, 5, 6, 7, 8, 9]

    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        orderPasta(ing1, ing2, ing3) {
            console.log(
              `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
            );
          },
    }

    const newMenu = [...restaurant.mainMenu, 'Gnocci']
    console.log(newMenu);
    // (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

    // Copying an array
    const menu1 = [...restaurant.mainMenu]
    console.log(menu1);
    // (3) ['Pizza', 'Pasta', 'Risotto']

    // Joining two arrays
    const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu]
    console.log(menu2);
    // (7) ['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

    // important: the spread operator works on all iterables
    // Iterables: arrays, strings, maps, sets but not objects

    const str = 'Jonas';
    const letters = [...str, ' ', 'S.'];
    console.log(letters);
    // (7) ['J', 'o', 'n', 'a', 's', ' ', 'S.']

    // real world example
    const ingredients = [
        propmpt("Lets make pasta. Ingredient 1?"),
        propmpt("Ingredient 2?"),
        propmpt("Ingredient 3?")
    ];

    console.log(ingredients);

    restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
    restaurant.orderPasta(...ingredients);

    // objects
    const newRestaurant = {
        foundIn: 1991,
        ...restaurant,
        founder: 'Guiseppe'
    };

    console.log(newRestaurant);
    // {
    //     foundIn: 1991, 
    //     name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', 
    //     categories: Array(4), 
    //     starterMenu: Array(4), 
    //     …
    // }

    const restaurantCopy = {...restaurant};
    restaurantCopy.name = 'Ristorante Roma';
    console.log(restaurantCopy.name);   // Ristorante Roma
    console.log(restaurant.name);       // Classico Italiano

//#endregion

//#region Rest Pattern and Parameters

    // 1. Destructuring

    // The spread operator is located on the right side of the = sign like shown below
    const arr = [1, 2, ...[3, 4]];

    // The rest operator is located on the left side of the = sign 
    const [a, b, ...others] = [1, 2, 3, 4, 5];
    console.log(a, b, others); // 1 2 [3, 4, 5]

    const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    const openingHours = {
        [weekdays[3]]: {
          open: 12,
          close: 22,
        },
        [weekdays[4]]: {
          open: 11,
          close: 23,
        },
        [weekdays[5]]: {
          open: 0, // Open 24 hours
          close: 24,
        },
      };

    console.log(openingHours);
    // {thu: {…}, fri: {…}, sat: {…}}

    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        // ES6 enhanced object literals
        openingHours,

        orderPizza(mainIngredient, ...otherIngredients) {
            console.log(mainIngredient);
            console.log(otherIngredients);
          },
    };

    const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
    console.log(pizza,risotto,otherFood); 
    // Pizza Risotto (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

    // important: the rest pattern always must be the last in the destructuring assignment

    // objects
    const {sat, ...weekdays} = restaurant.openingHours;
    console.log(weekdays);



    // 2. Functions

    const add = function(...numbers) {
        let sum = 0; 
        for (let i = 0; i < numbers.length; i++) { 
            sum += numbers[i]; 
        } 
        console.log(sum); 
    };

    add(2,3);
    add(5,3,7,2);
    add(8,2,5,3,2,1,4);

    const x = [23, 5, 7];
    add(...x);

    restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
    restaurant.orderPizza('mushrooms');

    // The spread and rests syntax both look exactly the same 
    // but they work in opposite ways depending on where they are used.
    // The spread operator is used where we would otherwise write values, separated by a comma.
    // But the rest pattern is basically used where we write variable names separated by commas.
    // So, again the rest pattern can be used where we would write variable names, 
    // separated by commas and not values separated by commas.


//#endregion

//#region Short Circuiting 

    // OR operator 

    // Short circuiting means if the first value is a truthy value, it will immediately return that first value.
    // So if the first operand is already true then JavaScript doesn't even have to look at the other values 
    // because the result of the expression will already be true anyway.

    console.log(3 || 'Jonas'); // 3
    console.log('' || 'Jonas'); // Jonas
    console.log(true || 0); // true
    console.log(undefined || null); // null
    console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto']
    }

    const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
    console.log(guests1); // 10

    restaurant.numGuests = 23;
    const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
    console.log(guests1); // 23

    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto']
    }

    const guests2 = restaurant.numGuests || 10;
    console.log(guests2); // 10

    restaurant.numGuests = 23;
    const guests2 = restaurant.numGuests || 10;
    console.log(guests2); // 23

    restaurant.numGuests = 0;
    const guests2 = restaurant.numGuests || 10;
    console.log(guests2); // 10

    // important: zero is a falsy value therefore 10 will be the result of the operation and assigned to guests2.


    // AND operator

    // The AND operator works in the exact opposite way of the OR operator.
    // AND operator short circuits, when the first value is falsy.
    // It immediately returns that falsy value without even evaluating the second operand.

    console.log(0 && 'Jonas'); // 0
    console.log(7 && 'Jonas'); // Jonas

    // So when it is truthy, it means that the evaluation continues and then simply the last value is returned. 
    // AND operator is only true if all the operands are true.

    console.log('Hello' && 23 && null && 'Jonas'); // null

    // Practical Example

    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        orderPizza(...ingredients) {
            console.log(ingredients);
        },

    }

    if (restaurant.orderPizza) {
        restaurant.orderPizza('mushrooms', 'spinach'); // (2) ["mushrooms", "spinach"]
    }

    // same as above
    restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // (2) ["mushrooms", "spinach"]

//#endregion

//#region The Nullish Coalescing Operator 

    // Nullish coalescing operator is an operator that was introduced in ES2020.

    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        orderPizza(...ingredients) {
            console.log(ingredients);
        },
    }

    const guestsCorrect = restaurant.numGuests ?? 10;
    console.log(guestsCorrect); // 10

    restaurant.numGuests = 0;
    const guests = restaurant.numGuests || 10;
    console.log(guests); // 10

    const guestsCorrect = restaurant.numGuests ?? 10;
    console.log(guestsCorrect); // 0

    // The nullish coalescing operator works with the concept of nullish values instead of falsy values.
    // And nullish values are null and undefined. It does not include a zero or the empty string.

//#endregion

//#region Footbal Game Coding Challenge 1

    /* 

    We're building a football betting app (soccer for my American friends 😅)!
    Suppose we get data from a web service about a certain game (below). 

    In this challenge we're gonna work with the data. So here are your tasks:
        1.  Create one player array for each team (variables 'players1' and 'players2')
        2.  The first player in any player array is the goalkeeper and the others are field players. 
            For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, 
            and one array ('fieldPlayers') with all the remaining 10 field players
        3.  Create an array 'allPlayers' containing all players of both teams (22 players)
        4.  During the game, Bayern Munich (team 1) used 3 substitute players. 
            So create a new array ('players1Final') containing all the original team1 players 
            plus 'Thiago', 'Coutinho' and 'Perisic'
        5.  Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
        6.  Write a function ('printGoals') that receives an arbitrary number of player names 
            (NOT an array) and prints each of them to the console, along with the number of goals 
            that were scored in total (number of player names passed in)
        7.  The team with the lower odd is more likely to win. 
            Print to the console which team is more likely to win, 
            WITHOUT using an if/else statement or the ternary operator.
    
    TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
    Then, call the function again with players from game.scored
    GOOD LUCK 😀

    // This is a test data returned from an external api. Use this data to complete tasks
    const game = {
                    team1: 'Bayern Munich',
                    team2: 'Borrussia Dortmund',
                    players: [
                        [
                        'Neuer',
                        'Pavard',
                        'Martinez',
                        'Alaba',
                        'Davies',
                        'Kimmich',
                        'Goretzka',
                        'Coman',
                        'Muller',
                        'Gnarby',
                        'Lewandowski',
                        ],
                        [
                        'Burki',
                        'Schulz',
                        'Hummels',
                        'Akanji',
                        'Hakimi',
                        'Weigl',
                        'Witsel',
                        'Hazard',
                        'Brandt',
                        'Sancho',
                        'Gotze',
                        ],
                    ],
                    score: '4:0',
                    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
                    date: 'Nov 9th, 2037',
                    odds: {
                        team1: 1.33,
                        x: 3.25,
                        team2: 6.5,
                    },
                };

    */

    // Solutions:

    const game = {
                    team1: 'Bayern Munich',
                    team2: 'Borrussia Dortmund',
                    players: [
                        [
                        'Neuer',
                        'Pavard',
                        'Martinez',
                        'Alaba',
                        'Davies',
                        'Kimmich',
                        'Goretzka',
                        'Coman',
                        'Muller',
                        'Gnarby',
                        'Lewandowski',
                        ],
                        [
                        'Burki',
                        'Schulz',
                        'Hummels',
                        'Akanji',
                        'Hakimi',
                        'Weigl',
                        'Witsel',
                        'Hazard',
                        'Brandt',
                        'Sancho',
                        'Gotze',
                        ],
                    ],
                    score: '4:0',
                    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
                    date: 'Nov 9th, 2037',
                    odds: {
                        team1: 1.33,
                        x: 3.25,
                        team2: 6.5,
                    },
                };

    // 1.
    const [players1, players2] = game.players;
    console.log(players1, players2);

    // 2.
    const [gk, ...fieldPlayers] = players1;
    console.log(gk, fieldPlayers);

    // 3.
    const allPlayers = [...players1, ...players2];
    console.log(allPlayers);

    // 4.
    const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

    // 5.
    const { odds: { team1, x: draw, team2 }, } = game;
    console.log(team1, draw, team2);

    // 6.
    const printGoals = function (...players) {
        console.log(players);
        console.log(`${players.length} goals were scored`);
    };
    // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
    // printGoals('Davies', 'Muller');
    printGoals(...game.scored);

    // 7.
    team1 < team2 && console.log('Team 1 is more likely to win');
    team1 > team2 && console.log('Team 2 is more likely to win');

//#endregion

//#region Looping Arrays: The for-of Loop 

    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto']
    }

    const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
    for (const item of menu) console.log(item);
    // Focaccia
    // Bruschetta
    // Garlic Bread
    // Caprese Salad
    // Pizza
    // Pasta
    // Risotto

    // if we want both index and the element
    for (const item of menu.entries()) console.log(item);
    // [0, "Focaccia"]
    // [1, "Bruschetta"]
    // [2, "Garlic Bread"]
    // [3, "Caprese Salad"]
    // [4, "Pizza"]
    // [5, "Pasta"]
    // [6, "Risotto"]


    for (const [i, el] of menu.entries()) {
        console.log(`${i + 1}: ${el}`);
    }
    // 1: Focaccia
    // 2: Bruschetta
    // 3: Garlic Bread
    // 4: Caprese Salad
    // 5: Pizza
    // 6: Pasta
    // 7: Risotto


//#endregion

//#region Enhanced Object Literals 

    const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const openingHours = 
    {
        [weekdays[3]]: {
            open: 12,
            close: 22,
        },
        [weekdays[4]]: {
            open: 11,
            close: 23,
        },
        [weekdays[5]]: {
            open: 0, // Open 24 hours
            close: 24,
        },

        // old syntax
        // fri: {
        //     open: 0, // Open 24 hours
        //     close: 24,
        // },

    };

    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        // ES6 enhanced object literals
        openingHours,
        // same as openingHours:openingHours,

        order(starterIndex, mainIndex) {
            return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        },

        // old syntax
        // order: function(starterIndex, mainIndex) {
        //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        // },

        orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
            console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
            will be delivered to ${address} at ${time}`
            );
        },

        orderPasta(ing1, ing2, ing3) {
            console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
            );
        },

        orderPizza(mainIngredient, ...otherIngredients) {
            console.log(mainIngredient);
            console.log(otherIngredients);
        },
    };

//#endregion

//#region Optional Chaining 

    const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const openingHours = {
        [weekdays[3]]: {
            open: 12,
            close: 22,
        },
        [weekdays[4]]: {
            open: 11,
            close: 23,
        },
        [weekdays[5]]: {
            open: 0,
            close: 24,
        },
    };

    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        openingHours,

        order(starterIndex, mainIndex) {
            return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        },

        orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
            console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
            will be delivered to ${address} at ${time}`
            );
        },

        orderPasta(ing1, ing2, ing3) {
            console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
            );
        },

        orderPizza(mainIngredient, ...otherIngredients) {
            console.log(mainIngredient);
            console.log(otherIngredients);
        },
    };

    console.log(restaurant.openingHours.mon); // undefined
    console.log(restaurant.openingHours.mon.open); // cannot read property 'open' of undefined. undefined.open

    // check if mon property exists
    if (restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

    // check if openingHours and mon property exists
    if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

    // WITH optional chaining
    console.log(restaurant.openingHours.mon?.open);     // undefined
    console.log(restaurant.openingHours?.mon?.open);    // undefined

    // important: does not throw error if property is null or undefined

    // Example
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    for (const day of days) {
        const open = restaurant.openingHours[day]?.open ?? 'closed';
        console.log(`On ${day}, we open at ${open}`);
    }

    // Methods can also be checked using ?
    console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
    console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

    // Arrays can also be checked using ?
    const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
    console.log(users[0]?.name ?? 'User array empty');

    // same as above
    if (users.length > 0) 
        console.log(users[0].name);
    else 
        console.log('user array empty');

//#endregion

//#region Looping Objects: Object Keys, Values and Entries 

    const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    const openingHours = {
        [weekdays[3]]: {
            open: 12,
            close: 22,
        },
        [weekdays[4]]: {
            open: 11,
            close: 23,
        },
        [weekdays[5]]: {
            open: 0,
            close: 24,
        },
    };

    // Property NAMES
    const properties = Object.keys(openingHours);
    console.log(properties); // (3) ["thu", "fri", "sat"]

    let openStr = `We are open on ${properties.length} days: `;
    for (const day of properties) {
        openStr += `${day}, `;
    }
    console.log(openStr); // We are open on 3 days: thu, fri, sat, 

    // Property VALUES
    const values = Object.values(openingHours);
    console.log(values);
    // (3) [{…}, {…}, {…}]
    // 0: {open: 12, close: 22}
    // 1: {open: 11, close: 23}
    // 2: {open: 0, close: 24}

    // Entire object
    const entries = Object.entries(openingHours);
    console.log(entries);

    // [key, value]
    for (const [day, { open, close }] of entries) {
        console.log(`On ${day} we open at ${open} and close at ${close}`);
    }

//#endregion

//#region Footbal Game Coding Challenge 2 

/* 

    Let's continue with our football betting app!
    1. Loop over the game.scored array and print each player name to the console, 
       along with the goal number (Example: "Goal 1: Lewandowski")

    2. Use a loop to calculate the average odd and log it to the console 
       (We already studied how to calculate averages, you can go check if you don't remember)

    3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
        Odd of victory Bayern Munich: 1.33
        Odd of draw: 3.25
        Odd of victory Borrussia Dortmund: 6.5

        Get the team names directly from the game object, don't hardcode them (except for "draw"). 
        HINT: Note how the odds and the game objects have the same property names 😉
    
    BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, 
    and the number of goals as the value. In this game, it will look like this:
        {
            Gnarby: 1,
            Hummels: 1,
            Lewandowski: 2
        }

    GOOD LUCK 😀

*/

    const game = {
        team1: 'Bayern Munich',
        team2: 'Borrussia Dortmund',
        players: [
                    [
                        'Neuer',
                        'Pavard',
                        'Martinez',
                        'Alaba',
                        'Davies',
                        'Kimmich',
                        'Goretzka',
                        'Coman',
                        'Muller',
                        'Gnarby',
                        'Lewandowski',
                    ],
                    [
                        'Burki',
                        'Schulz',
                        'Hummels',
                        'Akanji',
                        'Hakimi',
                        'Weigl',
                        'Witsel',
                        'Hazard',
                        'Brandt',
                        'Sancho',
                        'Gotze',
                    ],
        ],
        score: '4:0',
        scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
        date: 'Nov 9th, 2037',
        odds: {
                team1: 1.33,
                x: 3.25,
                team2: 6.5,
        },
    };
  
    
// Solutions:

    // 1.
    for (const [i, player] of game.scored.entries())
        console.log(`Goal ${i + 1}: ${player}`);

    // 2.
    const odds = Object.values(game.odds);
    let average = 0;
    for (const odd of odds) average += odd;
    average /= odds.length;
    console.log(average);

    // 3.
    for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
    }
    // Odd of victory Bayern Munich: 1.33
    // Odd of draw: 3.25
    // Odd of victory Borrussia Dortmund: 6.5

    // BONUS
    // So the solution is to loop over the array, and add the array elements as object properties, 
    // and then increase the count as we encounter a new occurence of a certain element

    const scorers = {};
    for (const player of game.scored) {
        scorers[player] ? scorers[player]++ : (scorers[player] = 1);
    }

    // {Lewandowski: 2, Gnarby: 1, Hummels: 1}

//#endregion

//#region Sets 

    // Sets are similar to arrays. 
    // There are no key value pairs, it's just a bunch of values grouped together.
    // Just like arrays, sets are also iterables. 
    // A set is very different from an array.
    // First, because its elements are unique. 
    // And second, because the order of elements in the set is irrelevant.

    const ordersSet = new Set([
        'Pasta',
        'Pizza',
        'Pizza',
        'Risotto',
        'Pasta',
        'Pizza',
    ]);

    console.log(ordersSet);                 // Set(3) {"Pasta", "Pizza", "Risotto"}
    console.log(new Set('Jonas'));          // Set(5) {"J", "o", "n", "a", "s"}
    console.log(ordersSet.size);            // 3
    console.log(ordersSet.has('Pizza'));    // true
    console.log(ordersSet.has('Bread'));    // false
    ordersSet.add('Garlic Bread');          // Set(4) {"Pasta", "Pizza", "Risotto", "Garlic Bread"}
    ordersSet.add('Garlic Bread');
    ordersSet.delete('Risotto');            // Set(3) {"Pasta", "Pizza", "Garlic Bread"}

    console.log(ordersSet[0]);              // undefined. Because in sets there are actually no indexes

    // ordersSet.clear();                   // deletes all elements in the set

    console.log(ordersSet);
    for (const order of ordersSet) console.log(order);

    // important: the main use case of sets is actually to remove duplicate values of arrays.

    // Example
    const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
    const staffUnique = [...new Set(staff)];
    console.log(staffUnique);

    console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); // 3

    // to check how many different letters there are in a string
    console.log(new Set('jonasschmedtmann').size); // 11

    // Sets have this very useful property of being unique. 
    // And it's also very easy to interact with sets by using all of their straightforward methods.
    // However, they are not as important as arrays. 

    // important: So keep sets in mind when you need to work with unique values. 
    // But besides that, you can just continue using arrays.


//#endregion

//#region Maps: Fundamentals 

    // One another JavaScript data structure is maps. 
    // Maps are a lot more useful than sets.

    // The Map object holds key-value pairs and remembers the original insertion order of the keys. 
    // Any value (both objects and primitive values) may be used as either a key or a value.

    // A map is a data structure that we can use to map values to keys.
    // The set() method adds or updates an element with a specified key and a value to a Map object.

    const rest = new Map();
    rest.set('name', 'Classico Italiano');
    rest.set(1, 'Firenze, Italy');

    // calling the set method also returns the map object 
    console.log(rest.set(2, 'Lisbon, Portugal'));   
    // Map(3) {"name" => "Classico Italiano", 1 => "Firenze, Italy", 2 => "Lisbon, Portugal"}

    // Since the set() method returns back the same Map object, we can chain the method call like below:
    rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

    console.log(rest.get('name'));  // Classico Italiano
    console.log(rest.get(true));    // We are open :D
    console.log(rest.get(1));       // Firenze, Italy

    // So basically, here we are asking if the current time is between 23 and 11.
    let time = 21;
    console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are open :D

    let time = 8;
    console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are closed :(

    // checking if map contains certain key
    console.log(rest.has('categories'));

    // Now comparing this to objects, we can also delete properties from objects using something called the Delete Operator.
    // But, that's a really slow process. And usually, it's not encouraged to do that here.

    rest.delete(2);

    // maps has a clear() method to clear all the elements of a map
    // rest.clear();

    console.log(rest.size); // 7

    // rest.set([1, 2], 'Test');
    // console.log(rest.get([1, 2])); // undefined

    const arr = [1, 2];
    rest.set(arr, 'Test');
    console.log(rest.get(arr)); // Test

    rest.set(document.querySelector('h1'), 'Heading');
    console.log(rest);

//#endregion

//#region Maps: Iteration 

    const question = new Map([
        ['question', 'What is the best programming language in the world?'],
        [1, 'C'],
        [2, 'Java'],
        [3, 'JavaScript'],
        ['correct', 3],
        [true, 'Correct 🎉'],
        [false, 'Try again!'],
    ]);

    console.log(question);

    /*

    Map(7) {
            "question" => "What is the best programming language in the world?", 
            1 => "C", 
            2 => "Java", 
            3 => "JavaScript", 
            "correct" => 3, 
            …}
    [[Entries]]
    0: {"question" => "What is the best programming language in the world?"}
    1: {1 => "C"}
    2: {2 => "Java"}
    3: {3 => "JavaScript"}
    4: {"correct" => 3}
    5: {true => "Correct 🎉"}
    6: {false => "Try again!"}
    
    */

    // Convert object to map

    const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    const openingHours = {
        [weekdays[3]]: {
            open: 12,
            close: 22,
        },
        [weekdays[4]]: {
            open: 11,
            close: 23,
        },
        [weekdays[5]]: {
            open: 0,
            close: 24,
        },
    };

    console.log(Object.entries(openingHours));
    const hoursMap = new Map(Object.entries(openingHours));
    console.log(hoursMap);

    // Quiz app
    console.log(question.get('question'));
    for (const [key, value] of question) {
        if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
    }

    // const answer = Number(prompt('Your answer'));
    const answer = 3;
    console.log(answer);
    console.log(question.get(question.get('correct') === answer));

    // Convert map to array
    console.log([...question]);

    // console.log(question.entries());
    console.log([...question.keys()]);
    console.log([...question.values()]);

//#endregion

//#region Footbal Game Coding Challenge 3 

    /* 

    Let's continue with our football betting app! This time, 
    we have a map with a log of the events that happened during the game. 
    The values are the events themselves, and the keys are the minutes 
    in which each event happened (a football game has 90 minutes plus some extra time).

    1. Create an array 'events' of the different game events that happened (no duplicates)

    2. After the game has finished, it was found that the yellow card from minute 64 was unfair. 
       So remove this event from the game events log.

    3. Print the following string to the console: 
       "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

    4. Loop over the events and log them to the console, 
       marking whether it's in the first half or second half (after 45 min) of the game, like this:
       [FIRST HALF] 17: ⚽️ GOAL

    GOOD LUCK 😀

    */

    const gameEvents = new Map([
        [17, '⚽️ GOAL'],
        [36, '🔁 Substitution'],
        [47, '⚽️ GOAL'],
        [61, '🔁 Substitution'],
        [64, '🔶 Yellow card'],
        [69, '🔴 Red card'],
        [70, '🔁 Substitution'],
        [72, '🔁 Substitution'],
        [76, '⚽️ GOAL'],
        [80, '⚽️ GOAL'],
        [92, '🔶 Yellow card'],
    ]);
  
    // Solutions: 

    // 1.
    const events = [...new Set(gameEvents.values())];
    console.log(events);

    // 2.
    gameEvents.delete(64);

    // 3.
    console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
    const time = [...gameEvents.keys()].pop();
    console.log(time);
    console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

    // 4.
    for (const [min, event] of gameEvents) {
        const half = min <= 45 ? 'FIRST' : 'SECOND';
        console.log(`[${half} HALF] ${min}: ${event}`);
    }

//#endregion

//#region Working With Strings - Part 1 

    const airline = 'TAP Air Portugal';
    const plane = 'A320';
    console.log(plane[0]);  // A
    console.log(plane[1]);  // 3
    console.log(plane[2]);  // 2
    console.log('B737'[0]); // B

    console.log(airline.length);    // 16
    console.log('B737'.length);     // 4

    console.log(airline.indexOf('r'));  // 6
    console.log(airline.lastIndexOf('r'));  // 10
    console.log(airline.indexOf('Portugal'));   // 8
    console.log(airline.indexOf('portugal'));   // -1

    console.log(airline.slice(4));  // Air Portugal
    console.log(airline.slice(4, 7));   // Air
    console.log(airline.slice(0, airline.indexOf(' ')));    // TAP
    console.log(airline.slice(airline.lastIndexOf(' ') + 1));   // Portugal
    console.log(airline.slice(-2)); // al
    console.log(airline.slice(1, -1)); // AP Air Portuga

    // Checking if seat is in the middle. B and E are middle seats
    const checkMiddleSeat = function (seat) {
        const s = seat.slice(-1);
        if (s === 'B' || s === 'E') 
            console.log('You got the middle seat 😬');
        else 
            console.log('You got lucky 😎');
    };

    checkMiddleSeat('11B'); // You got the middle seat 😬
    checkMiddleSeat('23C'); // You got lucky 😎
    checkMiddleSeat('3E');  // You got the middle seat 😬

    console.log(new String('jonas')); // String {"jonas"}
    console.log(typeof new String('jonas')); // object
    console.log(typeof new String('jonas').slice(1)); // string

//#endregion

//#region Working With Strings - Part 2 

    const airline = 'TAP Air Portugal';
    console.log(airline.toLowerCase()); // tap air portugal
    console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

    // Fix capitalization in name
    const passenger = 'jOnAS'; // Jonas
    const passengerLower = passenger.toLowerCase();
    const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
    console.log(passengerCorrect); // Jonas

    // Comparing emails
    const email = 'hello@jonas.io';
    const loginEmail = '  Hello@Jonas.Io \n';
    // const lowerEmail = loginEmail.toLowerCase();
    // const trimmedEmail = lowerEmail.trim();
    const normalizedEmail = loginEmail.toLowerCase().trim();
    console.log(normalizedEmail);   // hello@jonas.io
    console.log(email === normalizedEmail); // true

    // replacing
    const priceGB = '288,97£';
    const priceUS = priceGB.replace('£', '$').replace(',', '.');
    console.log(priceUS); // 288.97$

    const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
    console.log(announcement.replace('door', 'gate')); // All passengers come to boarding gate 23. Boarding door 23!
    console.log(announcement.replaceAll('door', 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!
    console.log(announcement.replace(/door/g, 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

    // Booleans
    const plane = 'Airbus A320neo';
    console.log(plane.includes('A320'));    // true
    console.log(plane.includes('Boeing'));  // false
    console.log(plane.startsWith('Airb'));  // true

    if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
        console.log('Part of the NEW ARirbus family');
    }

    // Practice exercise
    const checkBaggage = function (items) {
        const baggage = items.toLowerCase();
        if (baggage.includes('knife') || baggage.includes('gun')) {
            console.log('You are NOT allowed on board');
        } else {
            console.log('Welcome aboard!');
        }
    };

    checkBaggage('I have a laptop, some Food and a pocket Knife'); // You are NOT allowed on board
    checkBaggage('Socks and camera'); // Welcome aboard!
    checkBaggage('Got some snacks and a gun for protection'); // You are NOT allowed on board

//#endregion

//#region Working With Strings - Part 3 

    // Split and join
    console.log('a+very+nice+string'.split('+'));   // (4) ["a", "very", "nice", "string"]
    console.log('Jonas Schmedtmann'.split(' '));    // (2) ["Jonas", "Schmedtmann"

    const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
    const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
    console.log(newName); // Mr. Jonas SCHMEDTMANN

    const capitalizeName = function (name) {
        const names = name.split(' ');
        const namesUpper = [];
        for (const n of names) {
            // namesUpper.push(n[0].toUpperCase() + n.slice(1));
            namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
        }
        console.log(namesUpper.join(' '));
    };

    capitalizeName('jessica ann smith davis'); // Jessica Ann Smith Davis
    capitalizeName('jonas schmedtmann'); // Jonas Schmedtmann

    // Padding
    const message = 'Go to gate 23!';
    console.log(message.padStart(20, '+').padEnd(30, '+')); // ++++++Go to gate 23!++++++++++
    console.log('Jonas'.padStart(20, '+').padEnd(30, '+')); // +++++++++++++++Jonas++++++++++

    const maskCreditCard = function (number) {
        const str = number + '';
        const last = str.slice(-4);
        return last.padStart(str.length, '*');
    };

    console.log(maskCreditCard(64637836));                  // ****7836
    console.log(maskCreditCard(43378463864647384));         // *************7384
    console.log(maskCreditCard('334859493847755774747'));   // *****************4747

    // Repeat
    const message2 = 'Bad weather... All Departues Delayed... ';
    console.log(message2.repeat(2));    
    // Bad weather... All Departues Delayed... Bad weather... All Departues Delayed... 

    const planesInLine = function (n) {
        console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
    };

    planesInLine(5);    // There are 5 planes in line 🛩🛩🛩🛩🛩
    planesInLine(3);    // There are 3 planes in line 🛩🛩🛩
    planesInLine(12);   // There are 12 planes in line 🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩

//#endregion

//#region Coding Challenge 4 

    /* 

    Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
    The input will come from a textarea inserted into the DOM (see code below), 
    and conversion will happen when the button is pressed.

    THIS TEST DATA (pasted to textarea)
    underscore_case
    first_name
    Some_Variable 
    calculate_AGE
    delayed_departure

    SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)

    underscoreCase      ✅
    firstName           ✅✅
    someVariable        ✅✅✅
    calculateAge        ✅✅✅✅
    delayedDeparture    ✅✅✅✅✅

    HINT 1: Remember which character defines a new line in the textarea 😉
    HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
    HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
    HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

    Afterwards, test with your own test data!
    GOOD LUCK 😀

    */

    // Solution:

    document.body.append(document.createElement('textarea'));
    document.body.append(document.createElement('button'));
    document.querySelector('button').addEventListener('click', function () {
        const text = document.querySelector('textarea').value;
        const rows = text.split('\n');
        for (const [i, row] of rows.entries()) {
            const [first, second] = row.toLowerCase().trim().split('_');
            const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
            console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
        }
    });

//#endregion

//#region String Methods Practice 

    const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

    // 🔴 Delayed Departure from FAO to TXL (11h25)
    //              Arrival from BRU to FAO (11h45)
    //   🔴 Delayed Arrival from HEL to FAO (12h05)
    //            Departure from FAO to LIS (12h30)

    const getCode = str => str.slice(0, 3).toUpperCase();
    for (const flight of flights.split('+')) {
        const [type, from, to, time] = flight.split(';');
        const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
            '_',
            ' '
        )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
        console.log(output);
    }

//#endregion

//#endregion

//#region Section 10: A Closer Look at Functions 

//#region Default Parameters 

    'use strict';
    const bookings = [];

    /*

    ES5 way
    const createBooking = function (flightNum, numPassengers, price) {
        numPassengers = numPassengers || 1;
        price = price || 199;
        const booking = {
            flightNum,
            numPassengers,
            price,
        };
        console.log(booking);
        bookings.push(booking);
    };
    
    */

    // ES6 way
    const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
        const booking = {
            flightNum,
            numPassengers,
            price,
        };
        console.log(booking);
        bookings.push(booking);
    };

    createBooking('LH123');
    createBooking('LH123', 2, 800);
    createBooking('LH123', 2);
    createBooking('LH123', 5);
    createBooking('LH123', undefined, 1000);

//#endregion

//#region How Passing Arguments Works: Values vs. Reference 

    const flight = 'LH234';
    const jonas = {
        name: 'Jonas Schmedtmann',
        passport: 24739479284,
    };

    const checkIn = function (flightNum, passenger) {
        flightNum = 'LH999';
        passenger.name = 'Mr. ' + passenger.name;
        if (passenger.passport === 24739479284) {
            console.log('Checked in');
        } else {
            console.log('Wrong passport!');
        }
    };

    checkIn(flight, jonas); // Checked in
    console.log(flight);    // LH234
    console.log(jonas);     // {name: "Mr. Jonas Schmedtmann", passport: 24739479284}

    // Is the same as doing...
    // const flightNum = flight;    // primitive type. thats why only the value is copied
    // const passenger = jonas;     // reference type. thats why a memory address is copied

    const newPassport = function (person) {
        person.passport = Math.trunc(Math.random() * 100000000000);
    };

    newPassport(jonas);
    checkIn(flight, jonas); // Wrong passport!

/*

    There are two terms that are used all the time when dealing with functions, 
    which is passing by value, and passing by reference,
    and many experienced programmers that are new to JavaScript 
    have some confusion between these terms and how it works in JavaScript.
    JavaScript does not have passing by reference, only passing by value, 
    even though it looks like it's passing by reference. 
    There are languages like C++, where you can pass a reference to any value, 
    instead of the value itself. This works even with primitives, 
    you could pass a reference to the value of five, and then the original value,
    outside of the function, would be changed. And this is called pass by reference. 
    But once again, JavaScript does not have pass by reference.
    So if you already know some programming, but are new to JavaScript, be sure to understand this.
    I know it's confusing, because as we just learned, for objects, we do in fact pass in a reference.
    So the memory address of the object. However, that reference itself is still a value.
    It's simply a value that contains a memory address.
    So basically we pass a reference to the function, but we do not pass by reference, 
    and this is an important distinction.

*/

//#endregion

//#region First-Class and Higher-Order Functions 

/*

    JavaScript is a language that has first class functions which in technical terms means 
    that functions are so-called first class citizens. 
    In practice, that means functions are simply treated as values. 
    Now, why does JavaScript work this way? 
    Well, it's simply because functions are really just another type of objects in JavaScript.
    And since objects are values, functions are values too. 
    And since functions are values, there is a bunch of interesting things that we can do with them 
    like storing them in variables or object properties.
    We can also pass functions as arguments to other functions.
    Now to make it even more interesting, we can also return a function from another function. 
    That sounds kind of crazy, but it can be very useful.
    Finally, remember that functions are objects. 
    And many types of objects in JavaScript have methods, right?
    Like array methods, for example. And actually there are also function methods. 
    Methods that we can call on functions like bind() method.
    Now the fact that JavaScript has first-class functions makes it possible 
    for us to use and write higher order functions.
    So a higher order function is either a function that receives another function as an argument, 
    or a function that returns a new function.

*/

//#endregion

//#region Functions Accepting Callback Functions 

    const oneWord = function (str) {
        return str.replace(/ /g, '').toLowerCase();
    };

    const upperFirstWord = function (str) {
        const [first, ...others] = str.split(' ');
        return [first.toUpperCase(), ...others].join(' ');
    };

    // Higher-order function
    const transformer = function (str, fn) {
        console.log(`Original string: ${str}`);
        console.log(`Transformed string: ${fn(str)}`);
        console.log(`Transformed by: ${fn.name}`);
    };

    transformer('JavaScript is the best!', upperFirstWord); 
    // Original string: JavaScript is the best!
    // Transformed string: JAVASCRIPT is the best!
    // Transformed by: upperFirstWord

    transformer('JavaScript is the best!', oneWord);
    // Original string: JavaScript is the best!
    // Transformed string: javascriptisthebest!
    // Transformed by: oneWord

    // important: name property of a function gives back the name of that function
    // in this example upperFirstWord and oneWord functions are called callback functions.

    // JS uses callbacks all the time
    const high5 = function () {
        console.log('👋');
    };

    document.body.addEventListener('click', high5);
    ['Jonas', 'Martha', 'Adam'].forEach(high5);

/*
    Why are callback functions so much used in JavaScript and why are they so helpful?
    First big advantage of this is that it makes it easy 
    to split up code into more reusable and interconnected parts. 
    But there is a second and way more important advantage, 
    which is the fact that callback functions allow us to create abstraction.
    Basically what abstraction means is that we hide the detail of some code implementation 
    because we don't really care about all that detail.
    And this allows us to think about problems at a higher more abstract level.
    And now with this idea of abstraction and higher levels and lower levels of abstraction, 
    above our transformer function is called a higher order function.
    Because this function here operates at a higher level of abstraction, 
    leaving the low level details to this low level functions.

*/


//#endregion

//#region Functions Returning Functions 

    const greet = function (greeting) {
        return function (name) {
            console.log(`${greeting} ${name}`);
        };
    };

    const greeterHey = greet('Hey');

    greeterHey('Jonas');        // Hey Jonas
    greeterHey('Steven');       // Hey Steven
    greet('Hello')('Jonas');    // Hello Jonas

    // This example might look a bit weird and unnecessary for you. 
    // What's the point of having functions returning other functions?
    // Well, this will actually become extremely useful in some situations.
    // Especially if we're using a really important programming paradigm called functional programming.

    // Challenge. Using arrow functions
    const greetArr = greeting => name => console.log(`${greeting} ${name}`);
    greetArr('Hi')('Jonas');
    
//#endregion

//#region The call and apply Methods 

    const lufthansa = {
        airline: 'Lufthansa',
        iataCode: 'LH',
        bookings: [],
        // book: function() {}
        book(flightNum, name) {
            console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
            this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
        },
    };

    lufthansa.book(239, 'Jonas Schmedtmann');   // Jonas Schmedtmann booked a seat on Lufthansa flight LH239
    lufthansa.book(635, 'John Smith');          // John Smith booked a seat on Lufthansa flight LH635

    const eurowings = {
        airline: 'Eurowings',
        iataCode: 'EW',
        bookings: [],
    };

    const book = lufthansa.book;
    book(23, 'Sarah Williams'); // Cannot read property 'airline' of undefined at book
    // because in regular function calls 'this' keyword points to undefined 

    // Call method
    book.call(eurowings, 23, 'Sarah Williams');
    // here 'this' keyword points to eurowings
    console.log(eurowings);

    book.call(lufthansa, 239, 'Mary Cooper');
    console.log(lufthansa);

    const swiss = {
        airline: 'Swiss Air Lines',
        iataCode: 'LX',
        bookings: [],
    };
    book.call(swiss, 583, 'Mary Cooper');

    // Apply method
    // Apply method does the exact same thing
    // The only difference is that apply does not receive a list of arguments
    // after the 'this' keyword, it takes an array as an argument

    const flightData = [583, 'George Cooper'];
    book.apply(swiss, flightData);
    console.log(swiss);

    // same as above but most prefered way
    book.call(swiss, ...flightData);

//#endregion

//#region The bind Method 

    // Just like the call method, bind also allows us to manually set this keywords for any function call.
    // important: Now, the difference is that bind does not immediately call the function.
    // Instead it returns a new function where this keyword is bound.

    const lufthansa = {
        airline: 'Lufthansa',
        iataCode: 'LH',
        bookings: [],
        book(flightNum, name) {
            console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
            this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
        },
    };

    const eurowings = {
        airline: 'Eurowings',
        iataCode: 'EW',
        bookings: [],
    };

    const book = lufthansa.book;

    //book.call(eurowings, 23, 'Sarah Williams');

    const bookEW = book.bind(eurowings);
    const bookLH = book.bind(lufthansa);
    const bookLX = book.bind(swiss);

    bookEW(23, 'Steven Williams');

    const bookEW23 = book.bind(eurowings, 23);

    bookEW23('Jonas Schmedtmann');
    bookEW23('Martha Cooper');

    // important: There are also other situations where it is very useful to use bind method. 
    // One example of that is when we use objects together with event listeners.

    // With Event Listeners
    lufthansa.planes = 300;

    lufthansa.buyPlane = function () {
        console.log(this);
        this.planes++;
        console.log(this.planes);
    };

    // lufthansa.buyPlane(); // undefined
    
    document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // NaN
    // Here 'this' keyword is pointing <button class="buy">Buy<button>

    // important: In an event handler function, 'this' keyword always 
    // points to the element on which that handler is attached to.

    // important: because bind method returns a new function we should use bind method like below
    document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); 
    // important: we cant use call method because it calls method, but we only need to return it


    // Partial application vs General application

    // General application
    const addTax = (rate, value) => value + value * rate;
    console.log(addTax(0.1, 200));

    // Partial application
    // Partial applications are functions with preset arguments
    
    const addVAT = addTax.bind(null, 0.23);
    // important: since we dont use any object inside function, we can pass null for 'this'

    // this function is same as below
    // addVAT = value => value + value * 0.23;

    console.log(addVAT(100));   // 123
    console.log(addVAT(23));    // 28.29

    // here we created more specific function using more general function

    // challenge without using bind method
    const addTaxRate = function (rate) {
        return function (value) {
            return value + value * rate;
        };
    };

    const addVAT2 = addTaxRate(0.23);
    console.log(addVAT2(100));  // 123
    console.log(addVAT2(23));   // 28.29

//#endregion

//#region Coding Challenge #1 

/* 

    Let's build a simple poll app!
    A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. 
    This data is stored in the starter object below.

    Here are your tasks:
    1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:

    1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
            What is your favourite programming language?
            0: JavaScript
            1: Python
            2: Rust
            3: C++
            (Write option number)
    
    1.2. Based on the input number, update the answers array. 
         For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. 
         Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

    2. Call this method whenever the user clicks the "Answer poll" button.

    3. Create a method 'displayResults' which displays the poll results. 
       The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. 
       If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. 
       If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 

    4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

    HINT: Use many of the tools you learned about in this and the last section 😉
    BONUS:  Use the 'displayResults' method to display the 2 arrays in the test data. 
            Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! 
            So what shoud the this keyword look like in this situation?

    BONUS TEST DATA 1: [5, 2, 3]
    BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

    GOOD LUCK 😀

*/

// Solutions:

    const poll = {
        question: 'What is your favourite programming language?',
        options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
        // This generates [0, 0, 0, 0]. More in the next section 😃
        answers: new Array(4).fill(0),
        registerNewAnswer() {
            // Get answer
            const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
            console.log(answer);
            // Register answer. We can use short circuiting instead of if statement
            typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
            this.displayResults();
            this.displayResults('string');
        },
        displayResults(type = 'array') {
            if (type === 'array') {
                console.log(this.answers);
            } else if (type === 'string') {
                // Poll results are 13, 2, 4, 1
                console.log(`Poll results are ${this.answers.join(', ')}`);
            }
        },
    };

    document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

    // now our this keyword is not answers array anymore. so that we have to use call method
    // so with call method this.answers becomes [5, 2, 3] array
    poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
    poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
    poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
    // [5, 2, 3]
    // [1, 5, 3, 9, 6, 1]

//#endregion

//#region Immediately Invoked Function Expressions (IIFE) 

    // This is a regular function that can be called anytime 
    const runOnce = function () {
        console.log('This will never run again');
    };

    runOnce();

    // IIFEs are functions that are used only to execute them once
    // We trick javascript by wrapping anonymous function with () thus making it expression
    // This is how it becomes expression and we execute that expression => (function)()

    // IIFE
    (function () {
        console.log('This will never run again');
        const isPrivate = 23;
    })();

    console.log(isPrivate); // Uncaught referenceError: isPrivate is not defined

    // IIFE's are invented because functions create scope and variables inside that scope become private
    // We can also say that this data inside function scope is encapsulated. 
    // And data privacy or data encapsulation is extremely important.
    // So this is not really a feature, of the JavaScript language.
    // It's more of a pattern, that some developers came up with.

    (() => console.log('This will ALSO never run again'))();

    // Variables declared with 'let' or 'const' create their own scope inside a block
    // creating a block
    {
        const isPrivate = 23;
        var notPrivate = 46;
    }

    console.log(isPrivate);     // Uncaught referenceError: isPrivate is not defined
    console.log(notPrivate);    // 46

    // important: in modern javascript we can create scopes using bloks as shown above. 
    // that's why IIFE patterns are not used anymore.

//#endregion
  
//#region Closures 

    const secureBooking = function () {
        let passengerCount = 0;
        return function () {
            passengerCount++;
            console.log(`${passengerCount} passengers`);
        };
    };

    const booker = secureBooking();

    booker(); // 1 passengers
    booker(); // 2 passengers
    booker(); // 3 passengers

    /*

    How is this even possible?
    How can the Booker function update the passengerCount variable 
    that's defined in a secureBooking function that actually has already finished executing?
    This function has already finished its execution. It is gone. 
    So its execution context is no longer on the stack but still this inner function,
    which is the Booker function, is still able to access the passengerCount variable 
    that's inside of the Booker function that should no longer exist. 
    What makes this possible is a 'closure', how strange this actually is.

    Booker function somehow continues to have access to the variables 
    that were present at the time that the function was created.
    And in particular, this passengerCount variable here. 
    And so that's exactly what the closure does.
    So we can say that a closure makes a function remember all the variables 
    that existed at the function's birthplace essentially.

    So we can imagine taht the secureBooking as being the birthplace of this function.
    And so Booker function remembers everything at its birthplace, by the time it was created.
    And this cannot simply be explained with the scope chain alone. So we need to also understand the closure.

    Functions has access to the variable environment of the execution context in which the function was created.
    Now, in the case of Booker, this function was born in the execution context of secureBooking, 
    which was popped off the stack previously.
    Thats how Booker function will get access to this variable environment, which contains the passengerCount variable.
    And this is how the function will be able to read and manipulate the passengerCount variable. 
    And to this connection we call closure.

    important: So a function always has access to the variable environment of the execution context 
    in which it was created, even after that execution context is gone.

    The scope chain is actually preserved through the closure, 
    even when a scope has already been destroyed because its execution context is gone.
    This means that even though the execution context has actually been destroyed, 
    the variable environment somehow keeps living somewhere in the engine.

    The most formal definition of closure is that a closure 
    is the closed over variable environment of the execution context in which a function was created
    even after that execution context is gone, or in other words, 
    even after the function to which the execution context belongs has returned.
    A closure gives a function access to all the variables of its parent function. 
    So the function in which it is defined even after that parent function has returned.
    So the function keeps a reference to its outer scope even after that outer scope is gone, 
    which basically preserves the scope chain throughout time.

    Analogy
    Let's say analogy is that a closure makes sure that a function does never lose connection 
    to the variables that existed at the function's birthplace.
    It remembers the variables, even after the birthplace is gone. 

    It's like a person who doesn't lose connection to their hometown.
    In this analogy, the person is the function and the hometown is the function's parents scope, 
    and the function then doesn't lose the connection to the variables stored in this parent's scope.  
    Finally, some people like to think of this attached variable environment as a backpack.
    So in this analogy, a function has a backpack, which it carries around wherever it goes. 
    And this backpack contains all the variables that were present in the environment in which the function was created. 
    Then whenever a variable can't be found in the function scope, 
    JavaScript will look into the backpack and take the missing variable from there.
    
    */

    // we can looak at the variable environment(backpack) of a function like below
    console.dir(booker);

    /*
    
    ƒ anonymous()
    arguments: null
    caller: null
    length: 0
    name: ""
    prototype: {constructor: ƒ}
    __proto__: ƒ ()
    [[FunctionLocation]]: VM359:3
    [[Scopes]]: Scopes[3]
        0: Closure (secureBooking)
            passengerCount: 3
        1: Script {_clientSettings: {…}, secureBooking: ƒ, booker: ƒ}
        2: Global {window: Window, self: Window, document: document, name: "", location: Location, …}

    */

//#endregion

//#region More Closure Examples 

    // Example 1
    let f;
    const g = function () {
        const a = 23;
        f = function () {
            console.log(a * 2);
        };
    };

    g();
    // At this point of the execution, the variable environment of g is no longer exists.

    f(); // 46
    // But f here closed over that variable environment and therefore it is able to access the a variable.

    console.dir(f);


    const h = function () {
        const b = 777;
        f = function () {
            console.log(b * 2);
        };
    };

    // Re-assigning f function
    h();
    f(); // 1554
    console.dir(f);

    // This proves that the f function was reassigned and closed over the variable environment of h.
    // That's how it can access the b variable which was set to 777.
    // After the reassignment old closure disappears. So we can not reach out the variable a.

    // Example 2
    const boardPassengers = function (n, wait) {
        const perGroup = n / 3;
        setTimeout(function () {
            console.log(`We are now boarding all ${n} passengers`);
            console.log(`There are 3 groups, each with ${perGroup} passengers`);
        }, wait * 1000);
        console.log(`Will start boarding in ${wait} seconds`);
    };

    const perGroup = 1000;      // closure even has priority over the scope chain.
    boardPassengers(180, 3);
    console.log('The variable environment of the boardPassengers function is destroyed here.')

    // Logs Execution Order:
        // Will start boarding in 3 seconds
        // The variable environment of the boardPassengers function is destroyed here.
        // We are now boarding all 180 passengers
        // There are 3 groups, each with 60 passengers


    // Keep in mind that this callback function was executed completely independently from the boardPassengers function.
    // But still the callback function was able to use all the variables 
    // that were in the variable environment in which it was created.
    // And one more time, this is a clear sign of a closure being created.

    // important: the closure does in fact have priority over the scope chain.

//#endregion

//#region Coding Challenge #2 

/* 

    This is more of a thinking challenge than a coding challenge 🤓
    Take the IIFE below and at the end of the function, attach an event listener 
    that changes the color of the selected h1 element ('header') to blue, 
    each time the BODY element is clicked. Do NOT select the h1 element again!
    And now explain to YOURSELF WHY this worked! Take all the time you need. 
    Think about WHEN exactly the callback function is executed, 
    and what that means for the variables involved in this example.

    GOOD LUCK 😀

*/

// Solution:

    (function () {
        const header = document.querySelector('h1');
        header.style.color = 'red';
        document.querySelector('body').addEventListener('click', function () {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            header.style.color = "#" + randomColor;
            console.log('Header color changed to randomly...');
        });
    })();

    // When IIFE is executed h1 element on the page becomes red
    // And at this point the variable environment of IIFE is long gone. (so does the 'const header' variable)
    // But still, each time when the page is clicked color of the h1 element changes randomly
    // This works because of the closure
    
    // Again, even though the environment in which this function here was created is already gone,
    // it is still able to access the variables that were created in that variable by the time the function was born.

//#endregion

//#endregion

//#region Section 11: Working With Arrays 

//#region Simple Array Methods 

    let arr = ['a', 'b', 'c', 'd', 'e'];

    // SLICE Method

    // Syntax
    // slice()
    // slice(start)
    // slice(start, end)

    // With the slice method, we can extract part of any array without changing the original array.
    // Basically we take a slice of an array and that's why it's called slice.

    console.log(arr.slice(2));      // (3) ["c", "d", "e"];
    console.log(arr.slice(2, 4));   // (2) ["c", "d"];

    // starts to copy from the end. last two elements
    console.log(arr.slice(-2));     // (2) ["d", "e"];

    // so minus one is always just the last element of any array
    console.log(arr.slice(-1));     // (1) ["e"];

    // starting from index 1, it extracts everything except the last two elements
    console.log(arr.slice(1, -2));  // (2) ["b", "c"];

    // important: we can also use the slice method to simply create a shallow copy of any array
    // it does not alter the original array
    console.log(arr.slice());       // (5) ["a", "b", "c", "d", "e"];

    // important: spread operator does the same. its up to you to chose which
    console.log([...arr]);          // (5) ["a", "b", "c", "d", "e"];


    // SPLICE Method

    // Syntax
    // splice(start)
    // splice(start, deleteCount)
    // splice(start, deleteCount, item1)
    // splice(start, deleteCount, item1, item2, itemN)

    // Splice method works in almost the same way as slice.
    // But the fundamental difference is that it does actually change the original array.

    let arr = ['a', 'b', 'c', 'd', 'e'];
    console.log(arr.splice(2)); // (3) ["c", "d", "e"];
    console.log(arr);           // (2) ["a", "b"];

    // important: Splice actually does mutate the original array, it takes part of the array and returns it 
    // and then the original array itself loses this part that was extracted.

    // In practice, most of the time the value that the splice method returns, doesn't even interest us.
    // All we are usually interested in is to delete one or more elements from an array using splice.
    // And one pretty common use case is to simply remove the last element of an array.

    let arr = ['a', 'b', 'c', 'd', 'e'];
    arr.splice(-1); 
    console.log(arr); // (4) ["a", "b", "c", "d"];

    // The second parameter in splice method is called delete count. 
    // So it's actually not the begin parameter.
    // It works a little bit different than in the slice method.

    // arr = ["a", "b", "c", "d"];
    arr.splice(1, 2);
    console.log(arr); // (2) ["a", "d"];


    // REVERSE Method

    // The reverse() method reverses an array in place. 
    // The first array element becomes the last, and the last array element becomes the first.
    // important: What's important to note is the fact that the reverse method mutates the original array.

    arr = ['a', 'b', 'c', 'd', 'e'];
    const arr2 = ['j', 'i', 'h', 'g', 'f'];
    console.log(arr2.reverse());    // (5) ["f", "g", "h", "i", "j"]
    console.log(arr2);              // (5) ["f", "g", "h", "i", "j"]


    // CONCAT Method

    // The concat() method is used to merge two or more arrays. 
    // This method does not change the existing arrays, but instead returns a new array.

    const letters = arr.concat(arr2);
    console.log(letters);               // (10) ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    // same as above but using spread operator
    console.log([...arr, ...arr2]);     // (10) ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

    // important: both approaches given above do not mutate the original array


    // JOIN Method

    // The join() method creates and returns a new string by concatenating all of the elements in an array 
    // (or an array-like object), separated by commas or a specified separator string. 
    // If the array has only one item, then that item will be returned without using the separator.

    console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

    // At Method

    // The at() method takes an integer value and returns the item at that index, 
    // allowing for positive and negative integers. 
    // Negative integers count back from the last item in the array.

    const arr = ['a', 'b', 'c', 'd', 'e'];
    console.log(arr[0]);    // a
    console.log(arr.at(0)); // a

    const array1 = [5, 12, 8, 130, 44];
    let index = 2;

    // What makes it useful is getting the last item 
    console.log(arr[arr.length - 1]);
    console.log(arr.slice(-1)[0]);
    console.log(arr.at(-1));

    console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
    // expected output: "Using an index of 2 the item returned is 8"

    index = -2;
    console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
    // expected output: "Using an index of -2 item returned is 130"

    console.log('Jonas'.at(-1));    // s


//#endregion

//#region Looping Arrays: forEach 

    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    for (const [i, movement] of movements.entries()) {
        if (movement > 0) {
            console.log(`Movement ${i + 1}: You deposited ${movement}`);
        } else {
            console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
        }
    }

    console.log('---- FOREACH ----');

    movements.forEach(function (mov, i, arr) {
        if (mov > 0) {
            console.log(`Movement ${i + 1}: You deposited ${mov}`);
        } else {
            console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
        }
    });

    /*

    What forEach method does is to loop over the array and in each iteration it will execute this callback function.

    Execution order
    0: function(200)
    1: function(450)
    2: function(400)
    ...

    We need entries() method to access the current index value in "for of" loop
    But forEach passes the current element, the index and the entire array 
    (that we are looping) to a callback function it is executing.
    And we can easily specify them in the parameter list of the callback function. 

    important: When should we use "forEach" and when should we use the "for of" loop?
    One fundamental difference between them is that we cannot break out of a forEach loop.
    The 'continue' and 'break' statements do not work in a forEach loop at all.
    forEach will always loop over the entire array and there is nothing that we can do about it.
    If we really need to break out of a loop then we have to keep using the "for of" loop, 
    but other than that it really comes down to your personal preference.
    
    */

//#endregion

//#region forEach With Maps and Sets 

    // Map

    const currencies = new Map([
        ['USD', 'United States dollar'],
        ['EUR', 'Euro'],
        ['GBP', 'Pound sterling'],
    ]);

    currencies.forEach(function (value, key, map) {
        console.log(`${key}: ${value}`);
    });

    // We can call forEach also on a map. Now this callback function also has three parameters.
    // When the forEach method calls it, it will call this function with three arguments.
    // First one is the current value, the second one is the key, and third one is the entire map being looped over.

    // Set

    const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

    console.log(currenciesUnique); // Set(3) {"USD", "GBP", "EUR"}

    currenciesUnique.forEach(function (value, _, map) {
        console.log(`${value}: ${value}`);
    });

    // important:
    // Sets do not have keys. And they do not have indexes either.
    // So there is no value that would make sense for the key.
    // If we use key in this loop this key makes no sense at all.
    // People who designed forEach method for sets, they could have simply omitted the second argument, right?
    // Well, if they did that, then this forEach would have been different from the others.
    // And that would then create confusion for developers, therefore it was decided to keep the same signature.
    // Basically to keep the same three parameters in this callback function and simply to set the second one to the first one.

    // important: "_" this underscore parameter is called throwaway variable in JavaScript 
    // means a variable that is completely unnecessary.

//#endregion

//#region PROJECT: "Bankist" App 

    // Data
    const account1 = {
        owner: 'Jonas Schmedtmann',
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2, // %
        pin: 1111,
    };
    
    const account2 = {
        owner: 'Jessica Davis',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
    };
    
    const account3 = {
        owner: 'Steven Thomas Williams',
        movements: [200, -200, 340, -300, -20, 50, 400, -460],
        interestRate: 0.7,
        pin: 3333,
    };
    
    const account4 = {
        owner: 'Sarah Smith',
        movements: [430, 1000, 700, 50, 90],
        interestRate: 1,
        pin: 4444,
    };
    
    const accounts = [account1, account2, account3, account4];
  
    // Elements
    const labelWelcome = document.querySelector('.welcome');
    const labelDate = document.querySelector('.date');
    const labelBalance = document.querySelector('.balance__value');
    const labelSumIn = document.querySelector('.summary__value--in');
    const labelSumOut = document.querySelector('.summary__value--out');
    const labelSumInterest = document.querySelector('.summary__value--interest');
    const labelTimer = document.querySelector('.timer');
    
    const containerApp = document.querySelector('.app');
    const containerMovements = document.querySelector('.movements');
    
    const btnLogin = document.querySelector('.login__btn');
    const btnTransfer = document.querySelector('.form__btn--transfer');
    const btnLoan = document.querySelector('.form__btn--loan');
    const btnClose = document.querySelector('.form__btn--close');
    const btnSort = document.querySelector('.btn--sort');
    
    const inputLoginUsername = document.querySelector('.login__input--user');
    const inputLoginPin = document.querySelector('.login__input--pin');
    const inputTransferTo = document.querySelector('.form__input--to');
    const inputTransferAmount = document.querySelector('.form__input--amount');
    const inputLoanAmount = document.querySelector('.form__input--loan-amount');
    const inputCloseUsername = document.querySelector('.form__input--user');
    const inputClosePin = document.querySelector('.form__input--pin');

//#endregion

//#region Creating DOM Elements 

    const displayMovements = function (movements) {
        containerMovements.innerHTML = '';

        movements.forEach(function (mov, i) {
            const type = mov > 0 ? 'deposit' : 'withdrawal';
            const html = `
                <div class="movements__row">
                    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                    <div class="movements__value">${mov}€</div>
                </div>
            `;
            containerMovements.insertAdjacentHTML('afterbegin', html);
        });
    };

    displayMovements(account1.movements);

//#endregion
  
//#region Coding Challenge #1 

    /* 

    Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
    and stored the data into an array (one array for each). 
    For now, they are just interested in knowing whether a dog is an adult or a puppy. 
    A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
    Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), 
    and does the following things:

    1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
       So create a shallow copy of Julia's array, and remove the cat ages from that copied array 
       (because it's a bad practice to mutate function parameters)

    2. Create an array with both Julia's (corrected) and Kate's data

    3. For each remaining dog, log to the console whether it's an adult 
       ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")

    4. Run the function for both test datasets

    HINT: Use tools from all lectures in this section so far 😉
    TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
    TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

    GOOD LUCK 😀

    */

    // Solution:

    const checkDogs = function (dogsJulia, dogsKate) {

        const dogsJuliaCorrected = dogsJulia.slice();
        dogsJuliaCorrected.splice(0, 1);
        dogsJuliaCorrected.splice(-2);

        // dogsJulia.slice(1, 3);

        const dogs = dogsJuliaCorrected.concat(dogsKate);
        console.log(dogs);
        dogs.forEach(function (dog, i) {
            if (dog >= 3) {
                console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
            } else {
                console.log(`Dog number ${i + 1} is still a puppy 🐶`);
            }
        });
    };

    // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
    checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//#endregion

//#region Data Transformations: map, filter, reduce 

    /*

    In javaScript, there are three important array methods that we use all the time to perform data transformations.
    These are methods that we use to create new arrays based on transforming data from other arrays.
    These methods have become really popular and you'll see them everywhere you look in Modern JavaScript.
    These methods are: map, filter and reduce.

    Map
    First the map method, it is a method that we can use to loop over arrays.
    Map is actually similar to the forEach method that we studied before but with 
    the difference that map creates a brand new array based on the original array.
    Map method takes an array, loops over that array and in each alteration, 
    it applies a covic function that we specify on our code to the current array element.
    So in this example we say that each element shall be multiplied by two.
    And with this covic in place, the map method multiplies every single element by two and puts it into a new array.
    It maps the values of the original array to a new array and that's why this method is called map.
    And it is extremely useful.
    Way more useful than forEach method because forEach simply allows us to do some work with each array element.
    But map on the other hand, builds us a brand new array containing the results of applying an operation to the original array.

    Filter
    which as the name says, is used to filter elements in the original array which satisfy a certain condition.
    So in this example we are only looking for elements greater than two.
    All the elements that pass the test that we specified will make it into a new filtered array.
    Or in other words, elements for which the condition is true will be included in a new array that the filter method returns.
    All other elements will get filtered out so they will not be included in the new array.

    Reduce
    Reduce method is used to boil down all the elements of the original array into one single value.
    And an example of this can be to add all the elements of an array together.
    Whole process now reduced the original array to one single value, 
    the sum of all the elements but it can of course be many other operations. 
    Now it's this value that then actually gets returned from the reduce method in the end. 
    So there is no new array in this case but only the reduced value.

    */

//#endregion

//#region The map Method 

    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
    const eurToUsd = 1.1;

    const movementsUSD = movements.map(function (mov) {
        return mov * eurToUsd;
    });

    console.log(movements);     // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
    console.log(movementsUSD);  // (8) [220, 495, -440, 3300, -715, -143, 77, 1430]
    
    // using arrow function
    const movementsUSD = movements.map(mov => mov * eurToUsd);

    console.log(movements);
    console.log(movementsUSD);

    // alternative approach
    const movementsUSDfor = [];
    for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
    console.log(movementsUSDfor);

    // These two approaches are completely different philosophies
    // In a map method we use a function to solve this problem of a creating new array
    // But with "for of" loop we manually loop through an array and create a new array 
    // Map method is much more of a functional programming approach
    // In a modern javascript functional programming is mostly preferred. 

    // important: A map method can also access to a current element, an index and entire array 
    const arr = movements.map((mov, i) =>`Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);
    console.log(arr);

    // Syntax with Arrow function
    map((element) => { /* ... */ })
    map((element, index) => { /* ... */ })
    map((element, index, array) => { /* ... */ })

    // The "side effect" with forEach is that the original array is being changed. 
    // "No side effect" with map means that, in idiomatic usage, the original array elements are not changed; 
    // the new array is a one-to-one mapping of each element in the original array 
    // Source: https://stackoverflow.com/questions/3034392/what-use-does-the-javascript-foreach-method-have-that-map-cant-do

//#endregion

//#region The filter Method 

    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    const deposits = movements.filter(function (mov, i, arr) {
        return mov > 0;
    });

    console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
    console.log(deposits);  // [200, 450, 3000, 70, 1300]

    // Only the array elements, for which this condition is true will make it into the deposits array.
    // All the other ones will simply get filtered out. So they will not be included in this deposits array.
    // Even if we do not use the callback function we still get access to the current index and the whole array.

    const depositsFor = [];

    // alternative approach
    for (const mov of movements) if (mov > 0) depositsFor.push(mov);
    console.log(depositsFor);

    const withdrawals = movements.filter(mov => mov < 0);
    console.log(withdrawals);

    // Syntax with Arrow function
    filter((element) => { /* ... */ } )
    filter((element, index) => { /* ... */ } )
    filter((element, index, array) => { /* ... */ } )

//#endregion

//#region The reduce Method 

    // We use the reduce method to boil down all the elements of an array into one single value.

    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
    console.log(movements);
    // accumulator -> SNOWBALL
    const balance = movements.reduce(function (acc, cur, i, arr) {
        console.log(`Iteration ${i}: ${acc}`);
        return acc + cur;
    }, 0);

    // The reduce function also gets a callback function, but this one is a little bit different 
    // from the other ones, like the one in map or for each.
    // In other callbacks, the first parameter is always the current element of the array.
    // The second one is the current index and the third one is the entire array.
    // But in the callback function of the reduce method, the first parameter is something called the accumulator.
    // Accumulator is like a snowball that keeps accumulating the value that we ultimately want to return.
    // So in the case of adding all the elements or all the numbers of an array together, that will be the sum.

    // Callback function is the first argument of the reduce method, 
    // but the reduce method actually has a second parameter, and that is the initial value of the accumulator.

    // using arrow function
    const balance = movements.reduce((acc, cur) => acc + cur, 0);
    console.log(balance);

    // getting sum using for of loop
    let balance2 = 0;
    for (const mov of movements) balance2 += mov;
    console.log(balance2);

    // Maximum value
    const max = movements.reduce((acc, mov) => {
        if (acc > mov) return acc;
        else return mov;
    }, movements[0]);

    console.log(max);

    // Syntax with Arrow function
    reduce((previousValue, currentValue) => { /* ... */ } )
    reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
    reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )

    reduce((previousValue, currentValue) => { /* ... */ } , initialValue)
    reduce((previousValue, currentValue, currentIndex) => { /* ... */ } , initialValue)
    reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

//#endregion

//#region Coding Challenge #2 

    /* 

    Let's go back to Julia and Kate's study about dogs. 
    This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
    Create a function 'calcAverageHumanAge', 
    which accepts an arrays of dog's ages ('ages'), 
    and does the following things in order:

    1. Calculate the dog age in human years using the following formula: 
       if the dog is <= 2 years old, humanAge = 2 * dogAge. 
       If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
    2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
    3. Calculate the average human age of all adult dogs 
    4. Run the function for both test datasets

    TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
    TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

    GOOD LUCK 😀

    */

    // Solution:

    const calcAverageHumanAge = function (ages) {
        const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
        const adults = humanAges.filter(age => age >= 18);
        console.log(humanAges);
        console.log(adults);
        // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
        const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
        return average;
    };

    const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
    const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

    console.log(avg1, avg2);

//#endregion

//#region The Magic of Chaining Methods 

    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; 
    const eurToUsd = 1.1;
    console.log(movements);

    // PIPELINE
    const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {
        // console.log(arr); // for debugging purpose
        return mov * eurToUsd;
    })

    // .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
    console.log(totalDepositsUSD);

    // We can only chain a method after another one if the first one returns an array.
    // We can inspect the current array at any stage of the pipeline using the third parameter of the callback function.
    // Being able to access the current array is one of the great use cases in terms of debugging.
    // Because this array has to be the result of the previous operation.
    
    // important: It is a bad practice to chain methods that mutate the underlying original array.
    // And an example of that is the 'splice' method or the 'reverse' method.
    // For a small application like this one, it's not a big deal and it's not going to cause problems,
    // but in a large scale application, it's usually always a good practice to avoid mutating arrays.

//#endregion

//#region Coding Challenge #3 

    /*

    Rewrite the 'calcAverageHumanAge' function from the previous challenge, 
    but this time as an arrow function, and using chaining!
    TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
    TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

    GOOD LUCK 😀

    */

    // Solution:

    const calcAverageHumanAge = ages =>
    ages
        .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
        .filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    // adults.length

    const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
    const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

    console.log(avg1, avg2);

//#endregion

//#region The find Method 

    // As the name says, we can use the 'find' method to retrieve one element of an array based on a condition.
    // Just like the other array methods the 'find' method also accepts a callback function and a condition.
    // Unlike the 'filter' method, the 'find' method will not return a new array. 
    // It returns the first element in the array that satisfies given condition.

    // The 'find' method is a bit similar to the 'filterf method, but there are two fundamental differences.
    // First 'filter' returns all the elements that match the condition while the 'findf method only returns the first one.
    // Second and even more important difference is that, the 'filterf method returns a new array 
    // while 'find' method only returns the element itself and not an array.

    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; 
    const firstWithdrawal = movements.find(mov => mov < 0);

    console.log(movements);         // [200, 450, -400, 3000, -650, -130, 70, 1300]
    console.log(firstWithdrawal);   // -400

    console.log(accounts);
    // (4) [{…}, {…}, {…}, {…}]
    // 0: {owner: 'Jonas Schmedtmann', movements: Array(8), interestRate: 1.2, pin: 1111}
    // 1: {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222}
    // 2: {owner: 'Steven Thomas Williams', movements: Array(8), interestRate: 0.7, pin: 3333}
    // 3: {owner: 'Sarah Smith', movements: Array(5), interestRate: 1, pin: 4444}

    const account = accounts.find(acc => acc.owner === 'Jessica Davis');
    console.log(account);

//#endregion

//#region The findIndex Method 

    // The 'findIndex' method works almost the same way as 'find' method.
    // But as the name says, 'findIndex' returns the index of the found element and not the element itself.
    // Both the 'find' and 'findIndex' methods were added to JavaScript in ES6.

    // MDN
    // The findIndex() method returns the index of the first element in the array 
    // that satisfies the 'provided testing function'. 
    // Otherwise, it returns -1, indicating that no element passed the test.

    const array1 = [5, 12, 8, 130, 44];
    const isLargeNumber = (element) => element > 13;
    console.log(array1.findIndex(isLargeNumber));
    // expected output: 3s

    // The findIndex() method executes the callbackFn function once for every index in the array 
    // until it finds the one where callbackFn returns a truthy value.
    // If such an element is found, findIndex() immediately returns the element's index. 
    // If callbackFn never returns a truthy value (or the array's length is 0), findIndex() returns -1.

    function isPrime(num) {
        for (let i = 2; num > i; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return num > 1;
    }
        
    console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
    console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)

    // The following example finds the index of a fruit using an arrow function:
    const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
    const index = fruits.findIndex(fruit => fruit === "blueberries");

    console.log(index); // 3
    console.log(fruits[index]); // blueberries

//#endregion

//#region Some and Every 

    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
    console.log(movements);

    // we can use the 'includes' method to test if an array includes a certain value.
    // 'includes' method returns true if any value in the array is exactly equal to the given value.
    // It only tests for equality but what if we wanted to test for a condition instead?
    // That's where the 'some' method comes into play.

    // EQUALITY
    console.log(movements.includes(-130)); // true

    // SOME: CONDITION
    console.log(movements.some(mov => mov === -130));   // true
    const anyDeposits = movements.some(mov => mov > 0); // true
    console.log(anyDeposits);

    // EVERY
    // The 'every' method is pretty similar to the 'some' method but the difference between them is that 
    // 'every' method returns true if all of the elements in the array satisfy the condition that we pass in.

    console.log(movements.every(mov => mov > 0)); // false
    console.log([2,3,4,5].every(mov => mov > 0)); // true

    // Separate callback
    const deposit = mov => mov > 0;
    console.log(movements.some(deposit));   // true
    console.log(movements.every(deposit));  // false
    console.log(movements.filter(deposit)); // (5) [200, 450, 3000, 70, 1300]

//#endregion

//#region flat and flatMap 

    // 'flat' and also 'flatMap' methods were introduced in ES2019.
    // So they are pretty recent, they will therefore not work in old browsers.

    const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
    console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

    const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
    console.log(arrDeep.flat()); // (6) [Array(2), 3, 4, Array(2), 7, 8]
    // flat method, only goes one level deep, when flattening the array.

    // we can fortunately fix that, by using the depth argument.
    console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

    const account1 = {
        owner: 'Jonas Schmedtmann',
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2, // %
        pin: 1111,
    };
        
        const account2 = {
        owner: 'Jessica Davis',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
    };
        
    const account3 = {
        owner: 'Steven Thomas Williams',
        movements: [200, -200, 340, -300, -20, 50, 400, -460],
        interestRate: 0.7,
        pin: 3333,
    };
        
    const account4 = {
        owner: 'Sarah Smith',
        movements: [430, 1000, 700, 50, 90],
        interestRate: 1,
        pin: 4444,
    };
        
    const accounts = [account1, account2, account3, account4];

    // flat
    const overalBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);

    console.log(overalBalance); // 17840

    // flatMap
    // 'flatMap' method combines, a 'map' and a 'flat' method, into just one method, which is better for performance.

    const overalBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
    // So this is essentially a 'map' method that all it does is, in the end, it then flattens the result.

    console.log(overalBalance2); // 17840

    // important: Just notice that, 'flatMap' only goes one level deep and we cannot change it.
    // So if you do need to go deeper than just one level, you still need to use the 'flat' method.

//#endregion

//#region Sorting Arrays 

    // Strings
    const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
    console.log(owners.sort()); // (4) ["Adam", "Jonas", "Martha", "Zach"]
    console.log(owners);        // (4) ["Adam", "Jonas", "Martha", "Zach"]

    // Numbers
    // The sort method does the sorting based on strings.
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
    console.log(movements);         // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
    console.log(movements.sort());  // (8) [-130, -400, -650, 1300, 200, 3000, 450, 70]

    // return < 0, A, B (keep order)
    // return > 0, B, A (switch order)

    // Ascending

    // movements.sort((a, b) => {
    //   if (a > b) return 1;
    //   if (a < b) return -1;
    // });

    movements.sort((a, b) => a - b);
    console.log(movements); // (8) [-650, -400, -130, 70, 200, 450, 1300, 3000]

    // Descending

    // movements.sort((a, b) => {
    //   if (a > b) return -1;
    //   if (a < b) return 1;
    // });

    movements.sort((a, b) => b - a);
    console.log(movements); // (8) [3000, 1300, 450, 200, 70, -130, -400, -650]

//#endregion

//#region More Ways of Creating and Filling Arrays 

    // creating arrays manually
    const arr = [1, 2, 3, 4, 5, 6, 7];
    console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // (7) [1, 2, 3, 4, 5, 6, 7]

    // Empty arrays + fill method
    const x = new Array(7);
    console.log(x); // (7) [empty × 7]
    
    console.log(x.map(() => 5)); // (7) [empty × 7]

    // There is one method that we can call on the empty array to fill it and that is the 'fill' method.

    x.fill(1);
    console.log(x); // (7) [1, 1, 1, 1, 1, 1, 1]

    // like 'slice' method we can define start and end index parameters on 'fill' method.

    x.fill(1, 3);
    console.log(x); // (7) [empty x 3, 1, 1, 1, 1]

    x.fill(1, 3, 5);
    console.log(x); // (7) [empty x 3, 1, 1, empty x 2]

    arr.fill(23, 2, 6);
    console.log(arr); // (7) [1, 2, 23, 23, 23, 23, 7]

    // Array.from
    // Array.from function takes object with the length property.
    // And then the second argument is a mapping function.
    // So it is exactly like the callback function that we pass into the 'map' method.

    const y = Array.from({ length: 7 }, () => 1);
    console.log(y); // (7) [1, 1, 1, 1, 1, 1, 1]

    const z = Array.from({ length: 7 }, (_, i) => i + 1);
    console.log(z); // (7) [1, 2, 3, 4, 5, 6, 7]

    // we can not directly call 'map' method on nodelist instead we have to first create array 
    // from the nodelist and then call 'map' on that array

    labelBalance.addEventListener('click', function () {
        const movementsUI = Array.from(
            document.querySelectorAll('.movements__value'),
            el => Number(el.textContent.replace('€', ''))
        );
        console.log(movementsUI);
        const movementsUI2 = [...document.querySelectorAll('.movements__value')];
    });

    // The Array.from() function was a great addition to JavaScript in ES6.

//#endregion

//#region Summary. Which Array Method to Use?

    /*

    1. To mutate original array:
        a) Add to original
            .push()
            .unshift()

        b) Remove from original
            .pop()
            .shift()
            .splice()

        c) Others:
            .reverse()
            .sort()
            .fill()


    2. A new Array:
        a) computed from original:
            .map()

        b) Filtered using condition
            .filter()

        c) Position of original
            .slice()

        d) Adding original to other
            .concat()

        e) Flattening the original
            .flat()
            .flatMap()


    3. An array index
        a) Based on value
            .indexOf()

        b) based on a test condition
            .findIndex()


    4. An array element
        a) Based on a test condition
            .find()


    5. Check if array includes
        a) Based on a value
            .includes()

        b) Based on a test condition
            .some()
            .every()


    6. A new string
        a) Based on a seperator string
            .join()


    7. To transform to value
        a) Based on a accumulator
            .reduce()

        b) To just loop an array
            .forEach()

    */

//#endregion

//#region Array Methods Practice 

    const account1 = {
        owner: 'Jonas Schmedtmann',
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2, // %
        pin: 1111,
    };
        
        const account2 = {
        owner: 'Jessica Davis',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
    };
        
    const account3 = {
        owner: 'Steven Thomas Williams',
        movements: [200, -200, 340, -300, -20, 50, 400, -460],
        interestRate: 0.7,
        pin: 3333,
    };
        
    const account4 = {
        owner: 'Sarah Smith',
        movements: [430, 1000, 700, 50, 90],
        interestRate: 1,
        pin: 4444,
    };
        
    const accounts = [account1, account2, account3, account4];

    // 1.
    const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);

    console.log(bankDepositSum);

    // 2.
    // const numDeposits1000 = accounts
    //   .flatMap(acc => acc.movements)
    //   .filter(mov => mov >= 1000).length;
    const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
    
    console.log(numDeposits1000);

    // Prefixed ++ operator
    let a = 10;
    console.log(++a);
    console.log(a);

    // 3.
    const { deposits, withdrawals } = accounts
    .flatMap(acc => acc.movements)
    .reduce(
        (sums, cur) => {
            // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
            sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
            return sums;
        },
        { deposits: 0, withdrawals: 0 }
    );
    
    console.log(deposits, withdrawals);

    // 4.
    // this is a nice title -> This Is a Nice Title
    const convertTitleCase = function (title) {
        const capitalize = str => str[0].toUpperCase() + str.slice(1);
        const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
        const titleCase = title
            .toLowerCase()
            .split(' ')
            .map(word => (exceptions.includes(word) ? word : capitalize(word)))
            .join(' ');
        return capitalize(titleCase);
    };
    console.log(convertTitleCase('this is a nice title'));
    console.log(convertTitleCase('this is a LONG title but not too long'));
    console.log(convertTitleCase('and here is another title with an EXAMPLE'));

//#endregion

//#region Coding Challenge #4 

/* 

    Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
    Eating too much means the dog's current food portion is larger than the recommended portion, 
    and eating too little is the opposite.
    Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below 
    the recommended portion (see hint).

    1. Loop over the array containing dog objects, and for each dog, 
       calculate the recommended food portion and add it to the object as a new property. 
       Do NOT create a new array, simply loop over the array. 
       Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

    2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
       HINT: Some dogs have multiple owners, 
       so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

    3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') 
       and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

    4. Log a string to the console for each array created in 3., 
       like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

    5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

    6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

    7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

    8. Create a shallow copy of the dogs array and sort it by recommended food portion 
       in an ascending order (keep in mind that the portions are inside the array's objects)

    HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
    HINT 2: Being within a range 10% above and below the recommended portion means: 
            current > (recommended * 0.90) && current < (recommended * 1.10). 
            Basically, the current portion should be between 90% and 110% of the recommended portion.

    TEST DATA:
    const dogs = [
                    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
                    { weight: 8, curFood: 200, owners: ['Matilda'] },
                    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
                    { weight: 32, curFood: 340, owners: ['Michael'] }
                 ];

    GOOD LUCK 😀

*/

    // Solutions:

    const dogs = [
        { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
        { weight: 8, curFood: 200, owners: ['Matilda'] },
        { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
        { weight: 32, curFood: 340, owners: ['Michael'] },
    ];

    // 1.
    dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

    // 2.
    const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
    console.log(dogSarah);
    console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'} `);

    // 3.
    const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);
    // .flat();

    console.log(ownersEatTooMuch);

    const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);

    console.log(ownersEatTooLittle);

    // 4.
    // "Matilda and Alice and Bob's dogs eat too much!"
    //  "Sarah and John and Michael's dogs eat too little!"
    console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
    console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

    // 5.
    console.log(dogs.some(dog => dog.curFood === dog.recFood));

    // 6.
    // current > (recommended * 0.90) && current < (recommended * 1.10)
    const checkEatingOkay = dog =>dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

    console.log(dogs.some(checkEatingOkay));

    // 7.
    console.log(dogs.filter(checkEatingOkay));

    // 8.
    // sort it by recommended food portion in an ascending order [1,2,3]
    const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);

    console.log(dogsSorted);

//#endregion

//#region BANKIST APP 

    // Data
    const account1 = {
        owner: 'Jonas Schmedtmann',
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2, // %
        pin: 1111,
    };
    
    const account2 = {
        owner: 'Jessica Davis',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
    };
    
    const account3 = {
        owner: 'Steven Thomas Williams',
        movements: [200, -200, 340, -300, -20, 50, 400, -460],
        interestRate: 0.7,
        pin: 3333,
    };
    
    const account4 = {
        owner: 'Sarah Smith',
        movements: [430, 1000, 700, 50, 90],
        interestRate: 1,
        pin: 4444,
    };
    
    const accounts = [account1, account2, account3, account4];
    
  // Elements
    const labelWelcome = document.querySelector('.welcome');
    const labelDate = document.querySelector('.date');
    const labelBalance = document.querySelector('.balance__value');
    const labelSumIn = document.querySelector('.summary__value--in');
    const labelSumOut = document.querySelector('.summary__value--out');
    const labelSumInterest = document.querySelector('.summary__value--interest');
    const labelTimer = document.querySelector('.timer');
    
    const containerApp = document.querySelector('.app');
    const containerMovements = document.querySelector('.movements');
    
    const btnLogin = document.querySelector('.login__btn');
    const btnTransfer = document.querySelector('.form__btn--transfer');
    const btnLoan = document.querySelector('.form__btn--loan');
    const btnClose = document.querySelector('.form__btn--close');
    const btnSort = document.querySelector('.btn--sort');
    
    const inputLoginUsername = document.querySelector('.login__input--user');
    const inputLoginPin = document.querySelector('.login__input--pin');
    const inputTransferTo = document.querySelector('.form__input--to');
    const inputTransferAmount = document.querySelector('.form__input--amount');
    const inputLoanAmount = document.querySelector('.form__input--loan-amount');
    const inputCloseUsername = document.querySelector('.form__input--user');
    const inputClosePin = document.querySelector('.form__input--pin');
  
    // Functions
  
    const displayMovements = function (movements, sort = false) {
        containerMovements.innerHTML = '';
    
        const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
    
        movs.forEach(function (mov, i) {
            const type = mov > 0 ? 'deposit' : 'withdrawal';
        
            const html = `
                <div class="movements__row">
                    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                    <div class="movements__value">${mov}€</div>
                </div>
            `;
        
            containerMovements.insertAdjacentHTML('afterbegin', html);
        });
    };
    
    const calcDisplayBalance = function (acc) {
        acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
        labelBalance.textContent = `${acc.balance}€`;
    };
    
    const calcDisplaySummary = function (acc) {
        const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
        labelSumIn.textContent = `${incomes}€`;
    
        const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
        labelSumOut.textContent = `${Math.abs(out)}€`;
    
        const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
        labelSumInterest.textContent = `${interest}€`;
    };
  
    const createUsernames = function (accs) {
        accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
        });
    };
    createUsernames(accounts);
    
    const updateUI = function (acc) {
        // Display movements
        displayMovements(acc.movements);
    
        // Display balance
        calcDisplayBalance(acc);
    
        // Display summary
        calcDisplaySummary(acc);
    };
  

    // Event handlers
    let currentAccount;
    
    btnLogin.addEventListener('click', function (e) {
        // Prevent form from submitting
        e.preventDefault();
    
        currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
        console.log(currentAccount);
    
        if (currentAccount?.pin === Number(inputLoginPin.value)) {
            // Display UI and message
            labelWelcome.textContent = `Welcome back, ${
                currentAccount.owner.split(' ')[0]
            }`;
            containerApp.style.opacity = 100;
        
            // Clear input fields
            inputLoginUsername.value = inputLoginPin.value = '';
            inputLoginPin.blur();
        
            // Update UI
            updateUI(currentAccount);
        }
    });
    
    btnTransfer.addEventListener('click', function (e) {
        e.preventDefault();
        const amount = Number(inputTransferAmount.value);
        const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
        inputTransferAmount.value = inputTransferTo.value = '';
    
        if (
        amount > 0 &&receiverAcc &&currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
            // Doing the transfer
            currentAccount.movements.push(-amount);
            receiverAcc.movements.push(amount);
        
            // Update UI
            updateUI(currentAccount);
        }
    });
  
    btnLoan.addEventListener('click', function (e) {
        e.preventDefault();
    
        const amount = Number(inputLoanAmount.value);
    
        if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
            // Add movement
            currentAccount.movements.push(amount);
        
            // Update UI
            updateUI(currentAccount);
        }
        inputLoanAmount.value = '';
    });
  
    btnClose.addEventListener('click', function (e) {
        e.preventDefault();
    
        if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
            const index = accounts.findIndex(acc => acc.username === currentAccount.username);
            console.log(index);
            // .indexOf(23)
        
            // Delete account
            accounts.splice(index, 1);
        
            // Hide UI
            containerApp.style.opacity = 0;
        }
    
        inputCloseUsername.value = inputClosePin.value = '';
    });
    
    let sorted = false;
    btnSort.addEventListener('click', function (e) {
        e.preventDefault();
        displayMovements(currentAccount.movements, !sorted);
        sorted = !sorted;
    });

//#endregion

//#endregion

//#region Section 12: Numbers, Dates, Intl and Timers 

//#region Converting and Checking Numbers 

    // In JavaScript, all numbers are presented internally as floating point numbers.
    // Always as decimals, no matter if we actually write them as integers or as decimals.

    console.log(23 === 23.0); // true

    // Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
    // Binary base 2 - 0 1

    // Also, numbers are represented internally in a 64 base 2 format.
    // So that means that numbers are always stored in a binary format.

    console.log(0.1 + 0.2);             // 0.30000000000000004
    console.log(0.1 + 0.2 === 0.3);     // false

    // important: Just be aware that you cant do precise scientific or financial calculations 
    // in JavaScript because eventually, you will run into a problem like this.

    // Conversion
    console.log(Number('23'));  // 23

    console.log(+'23'); // 23
    // Same as above because when JavaScript sees the plus operator, it will do type coercion.

    // Parsing
    console.log(Number.parseInt('30px', 10));       // 30
    console.log(Number.parseInt('e23', 10));        // NaN
    console.log(Number.parseInt('  2.5rem  '));     // 2
    console.log(Number.parseFloat('  2.5rem  '));   // 2.5
    console.log(parseFloat('  2.5rem  '));          // 2.5

    // The parseInt function actually accepts a second argument, which is the so-called radix.
    // And the radix is the base of the numeral system that we are using. We are simply using base 10 numbers.
    // Both parseInt() and parseFloat() functions are so-called global functions. So we do not need to call them on Number.
    // Number is a namespace for these functions.

    // Check if value is NaN
    console.log(Number.isNaN(20));      // false
    console.log(Number.isNaN('20'));    // false 
    console.log(Number.isNaN(+'20X'));  // true
    console.log(Number.isNaN(23 / 0));  // false

    // isNaN() is actually not a perfect way for checking if a value is a number because it doesn't work with infinity.
    // But there is a better method called isFinite(). isFinite() method is indeed the best way of checking if a value is a number.

    // Checking if value is number
    console.log(Number.isFinite(20));       // true
    console.log(Number.isFinite('20'));     // false
    console.log(Number.isFinite(+'20X'));   // false
    console.log(Number.isFinite(23 / 0));   // false

    // If you are sure that you just need to check for an integer, then you can use isInteger() method as well.

    console.log(Number.isInteger(23));      // true 
    console.log(Number.isInteger(23.0));    // true
    console.log(Number.isInteger(23 / 0));  // false

//#endregion

//#region Math and Rounding 

    console.log(Math.sqrt(25)); // 5
    console.log(25 ** (1 / 2)); // 5
    console.log(8 ** (1 / 3));  // 2
    console.log(Math.max(5, 18, 23, 11, 2));        // 23
    console.log(Math.max(5, 18, '23', 11, 2));      // 23
    console.log(Math.max(5, 18, '23px', 11, 2));    // NaN
    console.log(Math.min(5, 18, 23, 11, 2));        // 2
    console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793
    console.log(Math.trunc(Math.random() * 6) + 1); // 4

    const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

    // 0...1 -> 0...(max - min) -> min...max
    // console.log(randomInt(10, 20)); // 17    

    // Math.trunc simply removes any decimal part. But we have also other ways like Math.round().

    // Rounding integers
    console.log(Math.round(23.3));      // 23
    console.log(Math.round(23.9));      // 24
    console.log(Math.ceil(23.3));       // 24
    console.log(Math.ceil(23.9));       // 24
    console.log(Math.floor(23.3));      // 23
    console.log(Math.floor('23.9'));    // 23
    console.log(Math.trunc(23.3));      // 23
    console.log(Math.trunc(-23.3));     // -23
    console.log(Math.floor(-23.3));     // -24

    // Rounding decimals
    // important: toFixed() method will always return a string not a number and that's important to keep in mind.

    console.log((2.7).toFixed(0));      // 3
    console.log((2.7).toFixed(3));      // 2.700 
    console.log((2.345).toFixed(2));    // 2.35
    // this will return number
    console.log(+(2.345).toFixed(2));   // 2.35

//#endregion

//#region The Remainder Operator 

    console.log(5 % 2); // 1 5 = 2 * 2 + 1
    console.log(5 / 2); // 2.5
    console.log(8 % 3); // 2
    console.log(8 / 3); // 8 = 2 * 3 + 2
    console.log(6 % 2); // 0
    console.log(6 / 2); // 3
    console.log(7 % 2); // 1
    console.log(7 / 2); // 3.5

    const isEven = n => n % 2 === 0;

    console.log(isEven(8));     // true
    console.log(isEven(23));    // false
    console.log(isEven(514));   // true

    labelBalance.addEventListener('click', function () {
        [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
            // 0, 2, 4, 6
            if (i % 2 === 0) row.style.backgroundColor = 'orangered';
            // 0, 3, 6, 9
            if (i % 3 === 0) row.style.backgroundColor = 'blue';
        });
    });

//#endregion

//#region Numeric Seperators 

// Numeric separators are simply underscores that we can place anywhere that we want in or numbers,
// and which will make it really easy to understand and to parse numbers this large.

    const diameter = 287_460_000_000;
    console.log(diameter); // 287460000000

    const priceCents = 345_99;
    console.log(priceCents); // 34599

    const fee1 = 15_00;
    const fee2 = 1_500;
    console.log(fee1); // 1500
    console.log(fee2); // 1500

    // use only with numbers
    console.log(Number('145_000')); // Wont work

//#endregion

//#region Working with BigInt 

    // BigInt is a special type of integers that was introduced in ES2020.

    console.log(2 ** 53 - 1); // 9007199254740991

    // important: This is essentially the biggest number that JavaScript can safely represent.
    // This number is so important that it's even stored into the Number namespace as MAX_SAFE_INTEGER.

    console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

    console.log(2 ** 53 + 1); // 9007199254740992
    console.log(2 ** 53 + 2); // 9007199254740994
    console.log(2 ** 53 + 3); // 9007199254740996
    console.log(2 ** 53 + 4); // 9007199254740996

    // Starting from ES2020 a new primitive was added to JavaScript, which is called BigInt.
    // BigInt stands for big integer. And it can be used to store numbers as large as we want.

    console.log(4838430248342043823408394839483204n); // 4838430248342043823408394839483204n
    console.log(BigInt(48384302)); // 48384302n

    // Operations
    console.log(10000n + 10000n); // 20000n
    console.log(36286372637263726376237263726372632n * 10000000n); // 362863726372637263762372637263726320000000n

    console.log(Math.sqrt(16n)); // Uncaught TypeError: Cannot convert a BigInt value to a number
    // important: Math operations that we talked about earlier are not gonna work with bigint.

    const huge = 20289830237283728378237n;
    const num = 23;
    // console.log(huge * num); // Error
    console.log(huge * BigInt(num));

    // important: what is not possible is to mix BigInt with regular numbers.

    // Exceptions
    console.log(20n > 15);      // true
    console.log(20n === 20);    // false
    console.log(typeof 20n);    // bigint
    console.log(20n == '20');   // true
    console.log(huge + ' is REALLY big!!!'); // 20289830237283728378237 is REALLY big!!!

    // Divisions
    console.log(11n / 3n);  // 3n
    console.log(10 / 3);    // 3.33

    // important: With BigInt division operations will simply return the closest BigInt.

    // So this bigInt primitive type adds some new capabilities to the JavaScript language.
    // When we really need to work with huge numbers.

//#endregion

//#region Creating Dates 

    // Create a date
    const now = new Date();
    console.log(now);                                   // Sat Jul 24 2021 18:44:21 GMT+0300 (GMT+03:00)
    console.log(new Date('Aug 02 2020 18:05:41'));      // Sun Aug 02 2020 18:05:41 GMT+0300 (GMT+03:00)
    console.log(new Date('December 24, 2015'));         // Thu Dec 24 2015 00:00:00 GMT+0200 (GMT+03:00)

    const account1 = {
        owner: 'Jonas Schmedtmann',
        movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
        interestRate: 1.2, // %
        pin: 1111,
      
        movementsDates: [
          '2019-11-18T21:31:17.178Z',
          '2019-12-23T07:42:02.383Z',
          '2020-01-28T09:15:04.904Z',
          '2020-04-01T10:17:24.185Z',
          '2020-05-08T14:11:59.604Z',
          '2020-07-26T17:01:17.194Z',
          '2020-07-28T23:36:17.929Z',
          '2020-08-01T10:51:36.790Z',
        ],
        currency: 'EUR',
        locale: 'pt-PT', // de-DE
    };

    console.log(new Date(account1.movementsDates[0]));  // Tue Nov 19 2019 00:31:17 GMT+0300 (GMT+03:00)
    console.log(new Date(2037, 10, 19, 15, 23, 5));     // Thu Nov 19 2037 15:23:05 GMT+0300 (GMT+03:00)

    console.log(new Date(2037, 10, 31));                // Tue Dec 01 2037 00:00:00 GMT+0300 (GMT+03:00)
    // important: JavaScript actually autocorrects the day. 
    // There is no November 31st, javascript corrected that for us.

    // Unix time
    console.log(new Date(0));                           // Thu Jan 01 1970 02:00:00 GMT+0200 (GMT+03:00)
    console.log(new Date(3 * 24 * 60 * 60 * 1000));     // Sun Jan 04 1970 02:00:00 GMT+0200 (GMT+03:00)

    // Working with dates
    const future = new Date(2037, 10, 19, 15, 23);  
    console.log(future); // Thu Nov 19 2037 15:23:00 GMT+0300 (GMT+03:00)  
    console.log(future.getFullYear()); // 2037

    // important: There's also getYear() method in JavaScripot, but never use that. Always use getFullYear() instead.

    console.log(future.getMonth());         // 10
    console.log(future.getDate());          // 19
    console.log(future.getDay());           // 4
    console.log(future.getHours());         // 15
    console.log(future.getMinutes());       // 23
    console.log(future.getSeconds());       // 0
    console.log(future.toISOString());      // 2037-11-19T12:23:00.000Z
    console.log(future.getTime());          // 2142246180000
    console.log(new Date(2142256980000));   // Thu Nov 19 2037 18:23:00 GMT+0300 (GMT+03:00)
    console.log(Date.now());                // 1627142159875

    // Finally, there are also the set versions of all of these methods.
    future.setFullYear(2040);
    console.log(future);                    // Mon Nov 19 2040 15:23:00 GMT+0300 (GMT+03:00)

//#endregion

//#region Operations With Dates 

    const future = new Date(2037, 10, 19, 15, 23);
    console.log(+future); // 2142246180000

    const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

    const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
    console.log(days1); // 10

    // If you need extra calculations like including time changes due to daylight saving changes, 
    // then you should use a date library like moment.js.

//#endregion

//#region Internationalizing Numbers (Intl) 

    const num = 3884764.23;

    const options1 = {
        style: 'unit', // 'percent', 'currency'
        unit: 'mile-per-hour' // 'celsius'
    };

    console.log('US:      ', new Intl.NumberFormat('en-US', options1).format(num));  // US:       3,884,764.23 mph
    console.log('Germany: ', new Intl.NumberFormat('de-DE', options1).format(num));  // Germany:  3.884.764,23 €
    console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options1).format(num));  // Syria:    ٣٬٨٨٤٬٧٦٤٫٢٣ €

    const options2 = {
        style: 'currency',
        unit: 'celsius',
        currency: 'EUR',
        // useGrouping: false,
    };

    console.log('US:      ', new Intl.NumberFormat('en-US', options2).format(num));  // US:       €3,884,764.23
    console.log('Germany: ', new Intl.NumberFormat('de-DE', options2).format(num));  // Germany:  3.884.764,23 €
    console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options2).format(num));  // Syria:    ٣٬٨٨٤٬٧٦٤٫٢٣ €

    // getting locale out of users browser
    console.log(navigator.language,new Intl.NumberFormat(navigator.language, options).format(num)); // en-US €3,884,764.23

    // important: currency prop must be defined manually 
    // if useGrouping is set to true then numbers will be displayed without seperators

    // MDN Documentation Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl

//#endregion

//#region Internationalizing Dates (Intl) 

    console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));  // Syria:    ٣٬٨٨٤٬٧٦٤٫٢٣ €

    console.log(navigator.language,new Intl.NumberFormat(navigator.language, options).format(num)); // en-US €3,884,764.23

    const now = new Date();
    console.log(new Intl.DateTimeFormat('en-US').format(now)); // 7/25/2021
    console.log(new Intl.DateTimeFormat('en-GB').format(now)); // 25/07/2021
    console.log(new Intl.DateTimeFormat('tr-TR').format(now)); // 25.07.2021

    const options1 = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    }

    console.log(new Intl.DateTimeFormat('en-US', options1).format(now)); // 7/25/2021, 6:46 PM

    const options2 = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'long',   // '2-digit', 'numeric'
        year: 'numeric', // '2-digit'
        weekday: 'long'  // 'short'
    }

    console.log(new Intl.DateTimeFormat('en-US', options2).format(now)); // Sunday, July 25, 2021, 6:49 PM

    // getting language out of users browser
    const locale = navigator.language;
    console.log(locale); // en-US
    console.log(new Intl.DateTimeFormat(locale, options2).format(now)); // Sunday, July 25, 2021, 6:52 PM

    // MDN Documentation Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl

//#endregion

//#region Timers 

    // setTimeout
    // setTimeout function simply schedules a function to run after a certain amount of time.

    const ingredients = ['olives', 'spinach'];

    const pizzaTimer = setTimeout(
        (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
        3000,
        ...ingredients
    );

    // important: all the arguments that we pass to the setTimeout function after the delay parameter will be arguments to the callback function.

    // canceling timeout function for certain conditions
    console.log('Waiting...');
    if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

    // setInterval
    // The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).

    setInterval(function () {
        const now = new Date();
        console.log(now);
    }, 1000);

//#endregion

//#region BANKIST APP 

    // Data
    // DIFFERENT DATA! Contains movement dates, currency and locale

    const account1 = {
        owner: 'Jonas Schmedtmann',
        movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
        interestRate: 1.2, // %
        pin: 1111,
    
        movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-07-26T17:01:17.194Z',
        '2020-07-28T23:36:17.929Z',
        '2020-08-01T10:51:36.790Z',
        ],
        currency: 'EUR',
        locale: 'pt-PT', // de-DE
    };
  
    const account2 = {
        owner: 'Jessica Davis',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
    
        movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
        ],
        currency: 'USD',
        locale: 'en-US',
    };
  
    const accounts = [account1, account2];
    
  
    // Elements
    const labelWelcome = document.querySelector('.welcome');
    const labelDate = document.querySelector('.date');
    const labelBalance = document.querySelector('.balance__value');
    const labelSumIn = document.querySelector('.summary__value--in');
    const labelSumOut = document.querySelector('.summary__value--out');
    const labelSumInterest = document.querySelector('.summary__value--interest');
    const labelTimer = document.querySelector('.timer');
    
    const containerApp = document.querySelector('.app');
    const containerMovements = document.querySelector('.movements');
    
    const btnLogin = document.querySelector('.login__btn');
    const btnTransfer = document.querySelector('.form__btn--transfer');
    const btnLoan = document.querySelector('.form__btn--loan');
    const btnClose = document.querySelector('.form__btn--close');
    const btnSort = document.querySelector('.btn--sort');
    
    const inputLoginUsername = document.querySelector('.login__input--user');
    const inputLoginPin = document.querySelector('.login__input--pin');
    const inputTransferTo = document.querySelector('.form__input--to');
    const inputTransferAmount = document.querySelector('.form__input--amount');
    const inputLoanAmount = document.querySelector('.form__input--loan-amount');
    const inputCloseUsername = document.querySelector('.form__input--user');
    const inputClosePin = document.querySelector('.form__input--pin');
  

    // Functions
  
    const formatMovementDate = function (date, locale) {
        const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
    
        const daysPassed = calcDaysPassed(new Date(), date);
        console.log(daysPassed);
    
        if (daysPassed === 0) return 'Today';
        if (daysPassed === 1) return 'Yesterday';
        if (daysPassed <= 7) return `${daysPassed} days ago`;
    
        // const day = `${date.getDate()}`.padStart(2, 0);
        // const month = `${date.getMonth() + 1}`.padStart(2, 0);
        // const year = date.getFullYear();
        // return `${day}/${month}/${year}`;
        return new Intl.DateTimeFormat(locale).format(date);
    };
  
    const formatCur = function (value, locale, currency) {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
        }).format(value);
    };
    
    const displayMovements = function (acc, sort = false) {
        containerMovements.innerHTML = '';
    
        const movs = sort
        ? acc.movements.slice().sort((a, b) => a - b)
        : acc.movements;
    
        movs.forEach(function (mov, i) {
            const type = mov > 0 ? 'deposit' : 'withdrawal';
            const date = new Date(acc.movementsDates[i]);
            const displayDate = formatMovementDate(date, acc.locale);
            const formattedMov = formatCur(mov, acc.locale, acc.currency);
            const html = `
                <div class="movements__row">
                    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                    <div class="movements__date">${displayDate}</div>
                    <div class="movements__value">${formattedMov}</div>
                </div>
            `;
            containerMovements.insertAdjacentHTML('afterbegin', html);
        });
    };
    
    const calcDisplayBalance = function (acc) {
        acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
        labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
    };
    
    const calcDisplaySummary = function (acc) {
        const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
        labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
    
        const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
        labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);
    
        const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
        labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
    };
  
    const createUsernames = function (accs) {
        accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
        });
    };

    createUsernames(accounts);
    
    const updateUI = function (acc) {
        // Display movements
        displayMovements(acc);
    
        // Display balance
        calcDisplayBalance(acc);
    
        // Display summary
        calcDisplaySummary(acc);
    };
    
    const startLogOutTimer = function () {
        const tick = function () {
            const min = String(Math.trunc(time / 60)).padStart(2, 0);
            const sec = String(time % 60).padStart(2, 0);
        
            // In each call, print the remaining time to UI
            labelTimer.textContent = `${min}:${sec}`;
        
            // When 0 seconds, stop timer and log out user
            if (time === 0) {
                clearInterval(timer);
                labelWelcome.textContent = 'Log in to get started';
                containerApp.style.opacity = 0;
            }
        
            // Decrease 1s
            time--;
        };
    
        // Set time to 5 minutes
        let time = 120;
    
        // Call the timer every second
        tick();
        const timer = setInterval(tick, 1000);
    
        return timer;
    };
  

    // Event handlers
    let currentAccount, timer;
    
    // FAKE ALWAYS LOGGED IN
    // currentAccount = account1;
    // updateUI(currentAccount);
    // containerApp.style.opacity = 100;
    
    btnLogin.addEventListener('click', function (e) {
        // Prevent form from submitting
        e.preventDefault();
    
        currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
        console.log(currentAccount);
    
        if (currentAccount?.pin === +inputLoginPin.value) {
            // Display UI and message
            labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
            containerApp.style.opacity = 100;
        
            // Create current date and time
            const now = new Date();
            const options = {
                hour: 'numeric',
                minute: 'numeric',
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                // weekday: 'long',
            };
        
            labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);
        
            // const day = `${now.getDate()}`.padStart(2, 0);
            // const month = `${now.getMonth() + 1}`.padStart(2, 0);
            // const year = now.getFullYear();
            // const hour = `${now.getHours()}`.padStart(2, 0);
            // const min = `${now.getMinutes()}`.padStart(2, 0);
            // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
        
            // Clear input fields
            inputLoginUsername.value = inputLoginPin.value = '';
            inputLoginPin.blur();
        
            // Timer
            if (timer) clearInterval(timer);
            timer = startLogOutTimer();
        
            // Update UI
            updateUI(currentAccount);
        }
    });
    
    btnTransfer.addEventListener('click', function (e) {
        e.preventDefault();

        const amount = +inputTransferAmount.value;
        const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
        inputTransferAmount.value = inputTransferTo.value = '';
    
        if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
            // Doing the transfer
            currentAccount.movements.push(-amount);
            receiverAcc.movements.push(amount);
        
            // Add transfer date
            currentAccount.movementsDates.push(new Date().toISOString());
            receiverAcc.movementsDates.push(new Date().toISOString());
        
            // Update UI
            updateUI(currentAccount);
        
            // Reset timer
            clearInterval(timer);
            timer = startLogOutTimer();
        }
    });
  
    btnLoan.addEventListener('click', function (e) {
        e.preventDefault();
    
        const amount = Math.floor(inputLoanAmount.value);
    
        if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
            setTimeout(function () {
                // Add movement
                currentAccount.movements.push(amount);
        
                // Add loan date
                currentAccount.movementsDates.push(new Date().toISOString());
        
                // Update UI
                updateUI(currentAccount);
        
                // Reset timer
                clearInterval(timer);
                timer = startLogOutTimer();
            }, 2500);
        }

        inputLoanAmount.value = '';
    });
  
    btnClose.addEventListener('click', function (e) {
        e.preventDefault();
    
        if (inputCloseUsername.value === currentAccount.username && +inputClosePin.value === currentAccount.pin) {
            const index = accounts.findIndex(acc => acc.username === currentAccount.username);
            console.log(index);
            // .indexOf(23)
        
            // Delete account
            accounts.splice(index, 1);
        
            // Hide UI
            containerApp.style.opacity = 0;
        }
    
        inputCloseUsername.value = inputClosePin.value = '';
    });
  
    let sorted = false;
    btnSort.addEventListener('click', function (e) {
        e.preventDefault();
        // BUG in video:
        // displayMovements(currentAccount.movements, !sorted);
    
        // FIX:
        displayMovements(currentAccount, !sorted);
        sorted = !sorted;
    });

//#endregion
  
//#endregion

//#region Section 13: Advanced DOM and Events 

//#region Basics 

    console.log(document.documentElement);
    console.log(document.head);
    console.log(document.body);

    const header = document.querySelector('.header');
    const allSections = document.querySelectorAll('.section');

    // selecting elements
    const el = document.getElementById('myId');
    const alButtons = document.getElementsByTagName('buttons');
    const btns = document.getElementsByClassName('btn');

    // important: 'getElementsByTagName' method returns an HTML collection.
    // That's different from a node list because an HTML collection is actually
    // a so-called life collection. And that means that if the DOM changes then this collection
    // is also immediately updated automatically.

    // Creating and Inserting elements

    const message = document.createElement('div');
    message.classList.add('cookie-message');
    message.textContent = 'We use cookies for improved functionality';
    message.innerHTML = 'We use cookies <button>Got It</button>';

    // Will appear at the bottom. thats how we can move elements
    header.prepend(message);
    header.append(message);

    // If we want message to appear both on the top and bottom
    // Then we should opy it first

    header.prepend(message);
    header.append(message.cloneNode(true))

    // Siblings
    header.before(message);
    header.after(message);

    // To Delete
    message.remove():

    // To get css style
    console.log(getComputedStyle(message));
    console.log(getComputedStyle(message).color);
    console.log(getComputedStyle(message).height);

    // Setting property
    document.documentElement.style.setProperty('.btn','orangered');

    //<img src='img/logo.png' alt='Logo' class='logo' designer='Jonas'/>

    // Getting attributes
    const logo = document.querySelector('.nav');
    console.log(logo.alt);
    console.log(logo.src);
    console.log(logo.className);

    // Non standard 
    console.log(logo.getAttribute('designer')); // Jonas

    // Setting attributes
    logo.alt = 'Beautiful logo';
    logo.setAttribute('src','/images/logo1.png');

    console.log(logo.src);      // img/logo.png
    logo.getAttribute('src');   // http://www.127.0.0.1:8080/img/logo.png

    // Data attributes
    // <img src='img/logo.png' data-version-number='3.0'/>
    console.log(logo.dataset.versionNumber);



//#endregion

//#region Types of Events and EvenHandlers 

    const h1 = document.querySelector('h1');
    h1.addEventListener('mouseenter', function (e) {
        alert('Great.');
    })

    // alternative approach. old school
    h1.onmouseenter = function (e) {
        alert('Great.');
    }

    const alertH1 = function (e) {
        alert('Great.');
        h1.removeEventListener('mouseenter',alertH1)
    }
    h1.addEventListener('mouseenter',alertH1);

    // Removing after certain time 
    setTimeout(() => {
        h1.removeEventListener('mouseenter',alertH1)
    }, 3000);

//#endregion

//#region Event Propagation: Bubbling and Capturing 

    /*
        <body>
            <section>
                <p><a href="link"></a></p>
            </section>
        </body>
    */

    // JavaScript events have a very important property called capturing phase and a bubbling phase.
    // when someone clicks on the link inside a element of p the DOM then generates a click event right away.
    // However, this event is actually not generated at the target element.
    // Instead, the event is actually generated at the root of the document(at the very top of the DOM tree)
    // And from there, so-called capturing phase happens, where the event then travels all the way down
    // from the document root to the target element.
    // And as the event travels down the tree, it will pass through every single parent element of the target element.
    // In our example, the HTML element, the body element, the section, then the paragraph, until it finally reaches its target.
    // As soon as the event reaches the target, the target phase begins, where events can be handled right at the target.

    // So event listeners wait for a certain event to happen on a certain element,
    // and as soon as the event occurs, it runs the attached callback function.
    // All right, now, after reaching the target, the event then actually travels
    // all the way up to the document route again, in the so-called bubbling phase.


//#endregion

//#region DOM Traversing 

    /*
        <body>
            <div>
                <h1>
                    <span class="h">Test1</span>
                    <span class="h">Test2</span>
                </h1>
            </div>
        </body>
    */

    const h1 = document.querySelector('h1');

    // Going downwards: selecting childs
    console.log(h1.querySelectorAll('.h'));
    console.log(h1.childNodes);
    console.log(h1.children);
    console.log(h1.firstElementChild);
    console.log(h1.lastElementChild);

    // Going upwards: selecting parents 
    console.log(h1.parentNode);
    console.log(h1.parentElement);
    console.log(h1.closest('.header'));

    // important: querySelector method finds children closest method finds parent

    // Going sideways: selecting siblings 
    console.log(h1.previousElementSibling);
    console.log(h1.nextElementSibling);
    console.log(h1.parentElement.children);

    [...h1.parentElement.children].forEach(function (el) {
        if(el !== h1) el.style.transform = 'scale(0.5)'
    });

//#endregion

//#endregion

//#region Section 14:  Object Oriented Programming With Javascript

//#region OOP Basics 

/*

    Objects(instances) are instantiated from a class in classical OOP. 
    But in classical javascript, objects are linked to a prototype object.
    The prototype contains methods that are accessible to all objects linked to that prototype.
    And this is called 'prototypical inheritance'. 
    In classical OOP, methods(behavior) is copied from class to instances.
    But in prototypical inheritance behavior is delegated to the linked prototype object.

    For example, each time that we used an array method like map, 
    we are able to use that method because of prototypical inheritance.
    Thats why when you go to MDN to check the documentation for any array method, 
    what you will see there is that it's actually called array.prototype.map.

    Well, array.prototype is the prototype object of all the arrays that we create in JavaScript.
    Now this prototype object contains all the array methods, including map.
    Since array.prototype is the prototype of the any array, it means that any array is linked to that prototype.
    Therefore, it has access to all the methods that are defined on the array.prototype object, just like the map method.
    So, in a sense, our array inherits the map method. 
    Or again, we can also say that the array delegated the behavior of mapping to its prototype.

    How do we implement Object-Oriented Programming in JavaScript in practice?
        In JavaScript there are three different ways of implementing OOP: 
            - The Constructor Function technique
            - ES6 Classes 
            - Object.create()

*/

//#endregion

//#region Constructor Functions 

    // We can use function expression or a function declaration to create constructor functions.
    // important: But an arrow function will not work as a function constructor. Because it doesn't have its own this keyword.

    const Person = function(firstName, birthYear){
        // Instance properties
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    const p = new Person('Jonas',1991);
    console.log(p);  

    // Person{ birthYear: 1991, firstName: "Jonas" }

    // The only difference between a regular function, and a constructor function is that we call the constructor using the 'new' keyword.

    // When we use the 'new' operator like this, behind the scenes, there have been four steps.
    // First, a new empty object is created.
    // Then afterwards the function is called and in this function call 'this' keyword will be set to this newly created object.
    // Basically in the execution context of the person function, 'this' keyword will point to this new object that was created in step one.
    // Step number three is that this newly created object is linked to a prototype.
    // Finally, the last step, is that the object that was created in the beginning is automatically returned from the constructor function.

    // We already know that in the end of this constructor function, the 'this' keyword will basically be returned.
    // And so whatever we add to that empty object, will then be returned from the function.
    // And that returned object, is gonna be the object, that we are trying to build here, actually.

    // Constructor functions have been used since the beginning of JavaScript to kind of simulate classes.
    // Therefore we can still say that 'p' object here is an instance of person.

    console.log(p instanceof Person); // true


    // Adding methods to constructor function
    const Person = function(firstName, birthYear){
        // Instance properties
        this.firstName = firstName;
        this.birthYear = birthYear;

        this.calcAge = function(){
            console.log(2037 - this.birthYear);
        }
    }

    // This would work just fine, but this is a really bad practice to create a method inside constructor function.
    // important: You should never create a method inside of a constructor function.
    // That's because imagine we were gonna create a hundred/thousands of person objects using this constructor function.
    // Then what would happen, is that each of these objects would carry around this function.
    // Imagine if we had a thousand objects, we would essentially create a thousand copies of this 'calcAge' function.
    // And that would be terrible for the performance of our code.
    // But instead to solve this problem, we are gonna use 'prototypes' and 'prototype inheritance'.


//#endregion

//#region Prototypes 

    // Each and every function in JavaScript automatically has a property called prototype.
    // And that includes, of course, constructor functions.
    // Every object that's created by a certain constructor function will get access to all the methods and properties 
    // that we define on the constructors prototype property.

    const Person = function(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    Person.prototype.calcAge = function(){
        console.log(2037 - this.birthYear);
    }

    const p = new Person('Jonas',1991);

    // Once again, remember that each object created by this constructor function will now get access to all the methods of this prototype property.
    // So we can now use this clacAge method here on the 'p' object even though it is not really on the object itself.

    // This way there exists only one copy of this function but then all of the objects that are created 
    // using this constructor function can basically reuse this function on themselves.

    // Any object always has access to the methods and properties from its prototype.

    console.log(p.__proto__);
    console.log(p.__proto__ === Person.prototype);


    // And so this is the prototype of 'p' object. It's not the prototype property but it is simply the prototype.

    console.log(Person.prototype.isPrototypePf(p)); // true

    // So this confirms one more time that person dot prototype is indeed the prototype of Jonas.
    // Step number three of object creation (which links the empty new object to the prototype) creates this 'proto' property.

    // We can also set properties on the prototype not just methods.

    Person.prototype.species = 'Homo Sapiens';
    const adam = new Person('Adam', 1998);

    // Now however, since when we take a look at this 'adam' object, this 'species' property is not really directly in the object.
    // Adams properties are only the ones that are declared directly on the object itself not including the inherited properties.

    console.log(adam.hasOwnProperty('birthYear'));  // true
    console.log(adam.hasOwnProperty('species'));    // false

//#endregion

//#region Prototypical Inheritance and The Prototype Chain 

    // This whole process is how it works with function constructors and also with ES6 classes but not with the 'object.create()' syntax.
    // When we are attempting to call the calcAge function on the adam object JavaScript can not find the calcAge function directly in the adam object.
    // If a property or a method cannot be found in a certain object JavaScript will look into its prototype and there it is.
    // That's how the calcAge function can run correctly and return a result.
    // And the behavior that we just described is what we already called prototypal inheritance or delegation.

    // Just imagine that we had a 1,000 objects in the code and if all of them would have to carry the calcAge function then that would certainly impact performance.
    // So instead, they can all simply use the calcAge function from their common prototype.

    // Person function constructor and its prototype property and to 'adam' object linked to its prototype via the __proto__ property.
    // But now let's remember that Person.prototype itself is also an object and all objects in JavaScript have a prototype.
    // Therefore, Person.prototype itself must also have a prototype. And the prototype of Person.prototype is Object.prototype.

    // Person.prototype is just a simple object which means that it has been built by the built in object constructor function
    // and this is actually the function that is called behind the scenes whenever we create an object literal.

    // Now this entire series of links between the objects is what is called the prototype chain 
    // and Object.prototype is usually the top of the prototype chain which means that it's prototype is null.

    // So in a certain way the prototype chain is very similar to the scope chain but with prototypes.
    // In the scope chain whenever JavaScript can find a certain variable in a certain scope,
    // it looks up into the next scope and a scope chain and tries to find the variable there.

    // On the other hand in the prototype chain whenever JavaScript can find a certain property or method in a certain object
    // it's gonna look up into the next prototype in the prototype chain and see if it can find it there, okay?

    // When we call hasOwnProperty method on adam object Js cant find it on adam object and look for it in Person.prototype.
    // Person.prototype does not have such method so Js keeps looks through prototype chain and reaches to Object.prototype.
    // There it finds that method and adam object inherits that hasOwnProperty method.
    // Remember the method has not been copied to the jonas object. Instead, it simply inherits the method.

//#endregion

//#region Prototypical Inheritance on Built-in Objects 

    console.log(adam.__proto__);
    console.log(adam.__proto__.__proto__);
    console.log(adam.__proto__.__proto__.__proto__); // null

    console.log(Person.prototype.constructor);
    console.dir(Person.prototype.constructor);

    const arr = [1,2,3];
    console.log(arr.__proto__);
    console.log(arr.__proto__ === Array.prototype); // true

    // If we check the documentation on MDN for example, for filter, then you see that actually the name of the method is array.prototype.filter.
    // And that is because this filter method, does of course, live in the prototype property of the array constructor.
    
    // So one more time you can see that the prototypal inheritance is really a mechanism for reusing code.
    // So all of these built-in methods here have to exist only once somewhere in the JavaScript engine
    // and then all the arrays in our code get access to the functions through the prototype chain and prototypal inheritance.

    // And therefore we can use that knowledge to extend the functionality of arrays even further.
    // Here we can add any new method to this prototype and all the arrays will then inherit it.

    Array.prototype.unique = function(){
        return [...new Set(this)];
    }

    const arr = [1,2,3,4,4];
    console.log(arr.unique());

    // This way we added a new method to the prototype property of the array constructor.
    // And so therefore now all arrays will inherit this method.
    // Extending the prototype of a built-in object is generally not a good idea for multiple reasons.
    // The first reason is that the next version of JavaScript might add a method with the same name that we are adding, 
    // for example this one here, but it might work in a different way.
    // And your code will then use that new method which, remember, works differently. And then that will probably break your code.

    const h1 = document.querySelector('h1');
    console.log(h1.__proto__);  // HTMLHeadingElement
    console.log(h1.__proto__.__proto__);    // HTMLElement
    console.log(h1.__proto__.__proto__.__proto__);  // Element
    console.log(h1.__proto__.__proto__.__proto__.__proto__);    // Node
    console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__);  // EventTarget
    console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); // Object

    console.dir( x => x + 1 );

    // The function itself is also an object therefore it also has a prototype.
    // And in this case function prototype will then contain the methods that we have used previously on functions.
    // Like 'apply', 'bind' and 'call' . Once again this is the reason why we can actually call methods on functions.

//#endregion

//#region ES6 Classes 

    // Classes in JavaScript do not work like traditional classes in other languages like Java or C++.
    // So instead, classes in JavaScript are just syntactic sugar.

    // Class Expression
    const Person = class {
        // implementation
    }

    // Class declaration
    class Person {
        constructor(firstName, birthYear){
            this.firstName = firstName;
            this.birthYear = birthYear;
        }

        calcAge(){
            console.log(2037 - this.birthYear);
        }
    }

    // Now, what's important to understand here is that all of these methods that we write 
    // inside the class, but outside of the constructor, will be on the prototype of the objects.
    // Not on the objects themselves. So this is really just like before, prototypal inheritance.

    const jessica = new Person('Jessica', 1996);
    console.log(jessica);
    jessica.calcAge();

    console.log(jessica.__proto__ === Person.prototype); // true

    // Alternative way of adding class

    Person.prototype.greet = function(){
        console.log(`Hey ${this.firstName}.`);
    }

    jessica.greet(); // Hey Jessica.

    // New ES6 syntax is great for people who are coming from another language and have experience with object-oriented programming,
    // because it's gonna be a bit easier for these developers to start writing object-oriented code in JavaScript.

    // Important Notes:
        // First of all, classes are not hoisted even so they are class declarations like function declarations.
        // Functional declarations are hoisted, which means we can use them before they are declared in the code.
        // But with classes, that doesn't work. Just like functions, classes are also first-class citizens.

        // Second, just like functions, classes are also first-class citizens. 
        // What that means is that we can pass them into functions and also return them from functions.
        // That is because classes are really just a special kind of function behind the scenes.
        
        // And third, the body of a class is always executed in strict mode. Classes are executed in strict mode. 
        // And so even if we didn't activate it for our entire script, all the code that is in the class will be executed in strict mode.


//#endregion

//#region Getters and Setters 

    // Every object in JavaScript can have setter and getter properties.
    // We call these special properties assessor properties, while the more normal properties are called data properties.
    // Getters and setters are basically functions that get and set a value so just as the name says.

    const account = {
        owner: 'Jonas',
        movements: [200, 350, 120, 300],

        get latest() {
            return this.movements.slice(-1).pop();
        },

        set latest(mov) {
            this.movements.push(mov);
        }
    }

    console.log(account.latest); // 300

    // we don't call the method, but instead we write it as if it was just a property.

    account.latest = 50;
    console.log(account.movements);

    class Person {
        constructor(firstName, birthYear) {
            this.firstName = firstName;
            this.birthYear = birthYear;
        }

        calcAge() {
            console.log(2037 - this.birthYear);
        }

        get age() {
            return 2037 - this.birthYear;
        }

        // Setters and getters are very useful for data validation.

        set fullName(name) {
            if(name.includes(' ')) this._fullName = name;
        }

        get fullName() {
            return this._fullName;
        }
    }

    

//#endregion



//#endregion

