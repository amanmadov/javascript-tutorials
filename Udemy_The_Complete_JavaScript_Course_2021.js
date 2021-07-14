



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


//#endregion