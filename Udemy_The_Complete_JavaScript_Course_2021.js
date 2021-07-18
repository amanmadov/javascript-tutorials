



let jsCourse = {

    courseName : "The Complete JavaScript Course 2021: From Zero to Expert",
        author : "Jonas Schmedttman",
           url : "https://softtech.udemy.com/course/the-complete-javascript-course"

}


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

// important: In other programming languages there are different data types for integers 
// and decimals but in javascript there are all same.


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
// We dont have to manually define the data type of variable in javascript. 
// Instead data types are determined automatically.

    let age = 10; // age will automatically be defined as Number

// One another feature of javascript is a variable data type can later be changed to another data type.

    let num = 0;   
    console.log(typeof num); // Number

    let num = '0'; 
    console.log(typeof num); // String

    year = 2021;
    console.log(typeof year); // Number

    console.log(typeof null); // object

    let year;
    console.log(year); // undefined
    console.log(typeof year); // undefined

// This is bug in javascript and it has never corrected for legacy reasons. This should be undefined. 
// important: Be carefull about this bug.

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
    This is second line'); // important: This is a bug in javascript.

    console.log(`This is first line 
    This is second line`);  // This is a proper way of doing it. This syntax is commonly used in creating dynamic HTML tags.


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
// So in javascript, the plus operator that we used here triggers a coercion to strings.
// And so whenever there is an operation between a string and the number, the number will be converted to a string.

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

    Everything else are our so-called truthy values. So, values that will be converted to true. 
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


// So the difference between double and triple equal is that the three equals is called the "strict equality" operator.
// It's strict, because it does not perform type coercion. And so it only returns to when both values are exactly the same.
// On the other hand, there's also the loose equality operator, which is only two equals, 
// and the loose equality operator actually does type coercion.


    console.log('18' == 18); // true
    console.log('18' === 18); // false

// important: so as a general rule for clean code, avoid the loose equality operator as much as you can.
// when comparing values, always use strict equality with the three equal signs.



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
    But I don't really see the point in doing that and so I always just use it at the beginning of each script.
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

// important: in JavaScript, functions are actually just values. So just as a number or a string or a boolean value.
// So a function is not a type, okay? It's not like a string or number type but it's also a value.

/* 

    Now, besides these technical differences, you might be wondering what is the big deal?
    So what's the big difference between "function declarations" and "function expressions"?
    Well, the main practical difference is that we can actually call "function declarations" before they are defined in the code.

    So we learned about "function declarations" and "function expressions" but there is actually a third type of function 
    that was added to JavaScript in ES6 and that's the "arrow function". 
    And an arrow function is simply a special form of function expression that is shorter and therefore faster to write.


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

// There is another fundamental difference between the "arrow function" and more "traditional functions".
// important: It's the fact that arrow functions do not get a so-called this keyword.

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
    nums + 5; // important: Concatentaion as string. Produces "1,2,35" output
    nums - 5; // NaN

// Adding elements to an array

    const cities = ["London", "Paris", "Rome"];
    
    const arrayLength = cities.push("Madrid")       // Adds element to the last index. Returns new array length.  
    // ["London", "Paris", "Rome", "Madrid"]

    const arrayLength = cities.unshift("Barcelona") // Adds element to the first index. Returns new array length. 
    // ["Barcelona", "London", "Paris", "Rome", "Madrid"]

    // Removing elements from an array
    const poppedCity = cities.pop("Madrid")         // Removes element from the last index. Returns popped element "Madrid"
    // ["Barcelona", "London", "Paris", "Rome"]

    const shiftedCity = cities.shift("Barcelona")   // Removes element from the first index. Returns removed element "Barcelona"
    // ["London", "Paris", "Rome"]


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
        getAge: function() {
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
            this.info = "Fiyatı " + this.price + " TL."; 
            return this.info;
        }
    };

    myObj.getInfo()     // important: Bu metod çağırılmadan myObj.info property oluşmaz.
    "Fiyatı 10 TL."

    myObj.info          // important: Ancak yukarıdaki metod çalıştıktan sonra bu şekilde çağrılabilir.
    "Fiyatı 10 TL."

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
// arg2: Event handler function should be called when an event happens

    document.querySelector('.btn').addEventListener
    ('click', function () {
        console.log("Hello, click event is triggered.")
    })

// click is the event that is listened
// function () { console.log("Hello, click event is triggered.")} is the event handler
// domElement.addEventListener(event,eventHandlerFunction);

// Generating random number between 0-20
    const randNum = Math.trunc(Math.random() * 20) + 1;

    let score = 20; // this is a state variable 

// This score is so called application state 

// in css background-color but in javascript backgroundColor
// same rule applies to all other properties that has multiple words

    document.querySelector('body').style.backgroundColor = 'green';

// important: every css property has to be set with string in javascript (20 is not allowed)
    document.querySelector('number').style.width = '20px';

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

// important: We can remove multiple classes with remove method of classList property like below
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



*/

//#endregion

/*

    Scopes in Javascipt

    There are three different types of scope in JavaScript:
    1. Global Scope
    2. Function Scope  
    3. Block Scope

*/

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
            console.log(`${myName} is a ${age} years old ${job}`);
        }

        second();
    }

    first();


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

// There is one more thing that we need to talk about, which is the difference between the scope chain and to call stack.

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
// Only "let" and "const" variables are block scoped. 
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
    // important: The only function that you can use before declaring it, is the add function declaration.


    if (!numProducts) {
        deleteShoppingCart();
    }

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

    So from above example, the big takeaway is that as a best practice you should never ever use an arrow function as a method.
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
    console.log(name, openingHours, categories); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

    // variables with different names
    const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
    console.log(restaurantName, hours, tags); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

    // If property does not exist use default values
    const{menu = [], starterMenu: starters = []} = restaurant;
    console.log(menu, starters);

    // Mutating variables
    let a = 111;
    let b = 999;
    const obj = {a: 23, b: 7, c: 14};
    // cant do const{a, b} = obj; because a and b are already declared 
    // cant do let {a, b} = obj; because it creates new variables called a and b

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

    restaurant.orderDelivery({
        time: '22:30',
        address: 'Via del Sole, 21',
        mainIndex: 2,
        starterIndex: 2,
    });

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

    // Copying an array
    const menu1 = [...restaurant.mainMenu]
    console.log(menu1);

    // Joining two arrays
    const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu]
    console.log(menu2);

    // the spread operator works on all iterables
    // Iterables: arrays, strings, maps, sets but not objects

    const str = 'Jonas';
    const letters = [...str, ' ', 'S.'];
    console.log(letters);

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

    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        orderPizza(mainIngredient, ...otherIngredients) {
            console.log(mainIngredient);
            console.log(otherIngredients);
          },
    };

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


    const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
    console.log(pizza,risotto,otherFood); // Pizza Risotto (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

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
        console. log(sum); 
    };

    add(2,3);
    add(5,3,7,2);
    add(8,2,5,3,2,1,4);

    const x = [23, 5, 7];
    add(...x);

    restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
    restaurant.orderPizza('mushrooms');

// So, the spread and rests syntax both look exactly the same but they work in opposite ways depending on where they are used.
// So the spread operator is used where we would otherwise write values, separated by a comma.
// On the other hand the rest pattern is basically used where we would otherwise write variable names separated by commas.
// So, again the rest pattern can be used where we would write variable names, separated by commas and not values separated by commas.


//#endregion

//#region Short Circuiting 

// OR operator 

// in the case of the OR operator, short circuiting means that if the first value is a truthy value, it will immediately return that first value.
// So if the first operand is already true then JavaScript doesn't even have to look at the other values because the result of the expression will already be true anyway.

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

// when it comes to short circuit evaluation, the AND operator works in the exact opposite way of the OR operator.
// And so what this means is that the AND operator short circuits, when the first value is falsy.
// And then immediately returns that falsy value without even evaluating the second operand.

    console.log(0 && 'Jonas'); // 0
    console.log(7 && 'Jonas'); // Jonas

// So when it is truthy, it means that the evaluation continues and then simply the last value is returned. 
// So the AND operator is only true if all the operands are true.

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
    console.log(guests2); // 10

    restaurant.numGuests = 0;
    const guests = restaurant.numGuests || 10;
    console.log(guests); // 10

    const guestsCorrect = restaurant.numGuests ?? 10;
    console.log(guests2); // 0

// The nullish coalescing operator works with the concept of nullish values instead of falsy values.
// And nullish values are null and undefined. It does not include a zero or the empty string.

//#endregion

//#region Footbal Game Coding Challenge 1

/* 

    We're building a football betting app (soccer for my American friends 😅)!
    Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
    1. Create one player array for each team (variables 'players1' and 'players2')
    2. The first player in any player array is the goalkeeper and the others are field players. 
       For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
    3. Create an array 'allPlayers' containing all players of both teams (22 players)
    4. During the game, Bayern Munich (team 1) used 3 substitute players. 
       So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
    5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
    6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, 
       along with the number of goals that were scored in total (number of player names passed in)
    7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
    
    TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
    GOOD LUCK 😀

*/

// Solutions:

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

//#endregion

//#region Enhanced Object Literals 

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
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
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
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
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
    if (users.length > 0) console.log(users[0].name);
    else console.log('user array empty');

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
    1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
    2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
    3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
        Odd of victory Bayern Munich: 1.33
        Odd of draw: 3.25
        Odd of victory Borrussia Dortmund: 6.5
    Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
    BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
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

//#endregion

//#region Sets 

// Sets are similar to arrays. So there are no key value pairs, it's just a bunch of values grouped together.
// And just like arrays, sets are also iterables. A set is very different from an array.
// First, because its elements are unique. And second, because the order of elements in the set is irrelevant.

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

    // the main use case of sets is actually to remove duplicate values of arrays.

    // Example
    const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
    const staffUnique = [...new Set(staff)];
    console.log(staffUnique);

    console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); // 3

    // to check how many different letters there are in a string
    console.log(new Set('jonasschmedtmann').size); // 11

// Sets have this very useful property of being unique. And it's also very easy to interact with sets by using all of their straightforward methods.
// However, they are not as important as arrays. So keep sets in mind when you need to work with unique values. But besides that, you can just continue using arrays.

//#endregion

//#region Maps: Fundamentals 

// One another JavaScript data structure is maps. And maps are a lot more useful than sets.
// A map is a data structure that we can use to map values to keys.

    const rest = new Map();
    rest.set('name', 'Classico Italiano');
    rest.set(1, 'Firenze, Italy');

    // calling the set method also returns the set 
    console.log(rest.set(2, 'Lisbon, Portugal'));   // Map(3) {"name" => "Classico Italiano", 1 => "Firenze, Italy", 2 => "Lisbon, Portugal"}

    // we can change sets one after another
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

    Map(7) {"question" => "What is the best programming language in the world?", 1 => "C", 2 => "Java", 3 => "JavaScript", "correct" => 3, …}
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

    Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. 
    The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

    1. Create an array 'events' of the different game events that happened (no duplicates)
    2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
    3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
    4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
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
        if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
        else console.log('You got lucky 😎');
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
    const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
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
    console.log(message2.repeat(2));    // Bad weather... All Departues Delayed... Bad weather... All Departues Delayed... 

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
    The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

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

    // ES5 way
    // const createBooking = function (flightNum, numPassengers, price) {
    //     numPassengers = numPassengers || 1;
    //     price = price || 199;
    //     const booking = {
    //         flightNum,
    //         numPassengers,
    //         price,
    //     };
    //     console.log(booking);
    //     bookings.push(booking);
    // };

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

    There are two terms that are used all the time when dealing with functions, which is passing by value, and passing by reference,
    and many experienced programmers that are new to JavaScript have some confusion between these terms and how it works in JavaScript.
    JavaScript does not have passing by reference, only passing by value, even though it looks like it's passing by reference. 
    There are languages like C++, where you can pass a reference to any value, instead of the value itself.
    This works even with primitives, you could pass a reference to the value of five, and then the original value,
    outside of the function, would be changed. And this is called pass by reference. 
    But once again, JavaScript does not have pass by reference.
    So if you already know some programming, but are new to JavaScript, be sure to understand this.
    And I know it's confusing, because as we just learned, for objects, we do in fact pass in a reference.
    So the memory address of the object. However, that reference itself is still a value.
    It's simply a value that contains a memory address.
    So basically we pass a reference to the function, but we do not pass by reference, and this is an important distinction.

*/

//#endregion

//#region First-Class and Higher-Order Functions 

/*

    JavaScript is a language that has first class functions which in technical terms means that functions are so-called first class citizens. 
    In practice, that means functions are simply treated as values. Now, why does JavaScript work this way? 
    Well, it's simply because functions are really just another type of objects in JavaScript.
    And since objects are values, functions are values too. 
    And since functions are values, there is a bunch of interesting things that we can do with them like storing them in variables or object properties.
    We can also pass functions as arguments to other functions.
    Now to make it even more interesting, we can also return a function from another function. That sounds kind of crazy, but it can be very useful.
    Finally, remember that functions are objects. And many types of objects in JavaScript have methods, right?
    Like array methods, for example. And actually there are also function methods. Methods that we can call on functions like bind() method.
    Now the fact that JavaScript has first-class functions makes it possible for us to use and write higher order functions.
    So a higher order function is either a function that receives another function as an argument, or a function that returns a new function.

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
    transformer('JavaScript is the best!', oneWord);

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
    Well, the first big advantage of this is that it makes it easy to split up or code into more reusable and interconnected parts. 
    But there is a second and way more important advantage, which is the fact that callback functions allow us to create abstraction.
    Basically what abstraction means is that we hide the detail of some code implementation because we don't really care about all that detail.
    And this allows us to think about problems at a higher more abstract level.
    And now with this idea of abstraction and higher levels and lower levels of abstraction, above our transformer function is called a higher order function.
    Because this function here operates at a higher level of abstraction, leaving the low level details to this low level functions.

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

// This example might look a bit weird and unnecessary for you Like what's the point of having functions returning other functions?
// Well, this will actually become extremely useful in some situations.
// And especially if we're using a really important programming paradigm called functional programming.

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
    // because in regular function calls this keyword points to undefined 

    // Call method
    book.call(eurowings, 23, 'Sarah Williams');
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
    const flightData = [583, 'George Cooper'];
    book.apply(swiss, flightData);
    console.log(swiss);

    // same as above but most prefered way
    book.call(swiss, ...flightData);

//#endregion

//#region The bind Method 

// Just like the call method, bind also allows us to manually set this keywords for any function call.
// Now, the difference is that bind does not immediately call the function.
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

    // With Event Listeners
    lufthansa.planes = 300;

    lufthansa.buyPlane = function () {
        console.log(this);
        this.planes++;
        console.log(this.planes);
    };

    // lufthansa.buyPlane(); // undefined
    // document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // NaN

    // important: because bind method returns a new function we should use bind method in this case
    document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); 

    // Partial application
    const addTax = (rate, value) => value + value * rate;
    console.log(addTax(0.1, 200));

    // we can pass null for this
    const addVAT = addTax.bind(null, 0.23);
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

    const runOnce = function () {
        console.log('This will never run again');
    };

    runOnce();

    // IIFE
    (function () {
        console.log('This will never run again');
        const isPrivate = 23;
    })();

    console.log(isPrivate); // Uncaught referenceError: isPrivate is not defined

    // IIFE's are invented because functions create scope and variables inside that scope become private
    // We can also say that this data inside function scope is encapsulated. 
    // And data privacy or data encapsulation is extremely important.

    (() => console.log('This will ALSO never run again'))();

    // creating a block
    {
        const isPrivate = 23;
        var notPrivate = 46;
    }

    console.log(isPrivate);     // Uncaught referenceError: isPrivate is not defined
    console.log(notPrivate);    // 46

    // important: in modern javascript we can create scopes using bloks as shown above. that's why IIFE patterns are not used anymore.

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

// How is this even possible?
// How can the Booker function update the passengerCount variable that's defined in a secureBooking function that actually has already finished executing?
// This function has already finished its execution. It is gone. So its execution context is no longer on the stack but still this inner function here,
// which is the Booker function, is still able to access the passengerCount variable that's inside of the Booker function that should no longer exist. 
// What makes this possible is a closure, how strange this actually is.

// Booker function somehow continues to have access to the variables that were present at the time that the function was created.
// And in particular, this passengerCount variable here. And so that's exactly what the closure does.
// So we can say that a closure makes a function remember all the variables that existed at the function's birthplace essentially.

// So we can imagine taht the secureBooking as being the birthplace of this function.
// And so Booker function remembers everything at its birthplace, by the time it was created.
// And this cannot simply be explained with the scope chain alone. So we need to also understand the closure.

// Any function always has access to the variable environment of the execution context in which the function was created.
// Now, in the case of Booker, this function was born in the execution context of secureBooking, which was popped off the stack previously.
// So, therefore the Booker function will get access to this variable environment, which contains the passengerCount variable.
// And this is how the function will be able to read and manipulate the passengerCount variable. And this connection that we call closure.

// important: So a function always has access to the variable environment of the execution context in which it was created, even after that execution context is gone.

// The scope chain is actually preserved through the closure, even when a scope has already been destroyed because its execution context is gone.
// This means that even though the execution context has actually been destroyed, the variable environment somehow keeps living somewhere in the engine.

// The most formal definition of closure is that a closure is the closed over variable environment of the execution context in which a function was created
// even after that execution context is gone, or in other words, even after the function to which the execution context belongs has returned.
// A closure gives a function access to all the variables of its parent function. 
// So the function in which it is defined even after that parent function has returned.
// So the function keeps a reference to its outer scope even after that outer scope is gone, which basically preserves the scope chain throughout time.

// Analogy
// Let's say analogy is that a closure makes sure that a function does never lose connection to the variables that existed at the function's birthplace.
// It remembers the variables, even after the birthplace is gone. 

// It's like a person who doesn't lose connection to their hometown.
// In this analogy, the person is the function and the hometown is the function's parents scope, 
// and the function then doesn't lose the connection to the variables stored in this parent's scope.  
// Finally, some people like to think of this attached variable environment as a backpack.
// So in this analogy, a function has a backpack, which it carries around wherever it goes. 
// And this backpack contains all the variables that were present in the environment in which the function was created. 
// Then whenever a variable can't be found in the function scope, JavaScript will look into the backpack and take the missing variable from there.

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

//#endregion














