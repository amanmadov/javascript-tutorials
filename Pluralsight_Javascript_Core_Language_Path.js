


/*

  ================================================================================================================== 
                                                    PLURALGIHT JavaScript Core Language Path
  ================================================================================================================== 

   
    JavaScript: Getting Started
    Mark Zamoyta (Beginner Jan 21, 2020)

    JavaScript Syntax and Operators
    Paul D. Sheriff (Beginner Nov 12, 2019)

    JavaScript: Functions
    Prateek Parekh (Beginner Nov 15, 2019)

    JavaScript Arrays and Collections
    Jeff Batt (Beginner Dec 31, 2019)

    Working with JavaScript Modules
    Jonathan Mills (Beginner Oct 8, 2019)

    JavaScript Variables and Types
    Barry Luijbregts (Intermediate Aug 19, 2019)

    Javascript Generators and Iterators
    Marques Woodson (Intermediate Dec 31, 2019)

    JavaScript Promises and Async Programming
    Nate Taylor (Intermediate Nov 26, 2019)

    JavaScript Security: Best Practices
    Marcin Hoppe (Intermediate Aug 20, 2020)


    JavaScript Objects, Prototypes, and Classes
    Jim Cooper (Advanced Oct 30, 2019)






*/








//#region  Pluralsight: JavaScript: Getting Started


/*
  ================================================================================================================== 
  Pluralsight: JavaScript: Getting Started by Mark Zamoyta
  ================================================================================================================== 
*/



// Basics

    // <script src="./fileName.js"/> This is valid html but will not work with all browsers (older browsers)
    // <script src="./fileName.js"></script> This will work with all browsers
    // Javascript is canse sensitive

    let price = 49.99, discounted = false, name = 'Hiking boots'

    // start naming variable with "_" or "$"

    console.log(price); // gives error
    let price = 100;


    console.log(price); // prints out: undefined
    var price = 100;

    // use "let" not "var" 


    let price = 1.1 + 1.4;
    console.log(price)  // 2.40000000004


    let amount = Number.parseFloat("A123.45"); 
    console.log(amount)  // does not work, prints out: NaN 


    let amount = Number.parseFloat("123.45A"); 
    console.log(amount)  // works, prints out:  123.45


    let saved;
    console.log(saved); // prints out: undefined

    saved = null; // used to wipe out the variable

    // If you want to wipe out a variable use "null" not "undefined". This is a best practise.

    // Falsy values: false, 0, '', "", null, undefined, NaN) 
    // Truthy values: Everything not falsy, "0" is truthy


    // if (1.1 + 1.3 === 2.4)  this is false   2.40000000004 !== 2.4

    // if (+(1.1 + 1.3).toFixed(2)) === 2.4)  this is true

    // toFixed method returns string but + prefix converts string to a number


// the ternary operator
    let message = (pice > 10) ? 'expensive' : 'cheap';  

//function declaration
    function sayHi() {
        console.log("Hi there.");
    }

// function expression
    let fn = function() {
        console.log("Hi there.");
    }

// function expression alternative
    let fn = function sayHi() {
        console.log("Hi there.");
    }

    // function name sayHi is optional. Used only for debugging purposes. sayHi() will not work when called


    function getCode(num) {
        let code = num * 2;
        // return code;
    }

    // getCode will return undefined if comment out return statement



// Objects and Symbols

    let mySymbol = Symbol();

    let person = {
        name: "John",
        age: 30,
        partTime: false,
        [mySymbol]: 'secretInformation'
    }


// Passing By Value

    let message = 'Hello';
    function changeMessage(message) {
        message = 'Hi';
    }

    changeMessage(message); // message is still 'Hello'


// Passing By Reference

    let person = {
        name: "John",
        age: 30
    }

    function incrementAge(p) {
        p.age++;
    }

    incrementAge(person);  // age is now 31


// CSS properties may contain dash(-) like font-weight but in JS dash is not allowed so we use came case notation like fontWeight


// isArray()
    const arr = ['a', 'b', 'c']
    console.log(Array.isArray(arr));


// Slice()
    const newArr = arr.slice(1, 2);

    // newArr = ['b']  Gets from 1-indexed element to 2-indexed element without taking 2 indexed element.
    // slice does not change the original array. arr stays same.


// Splice()
    const newArr = arr.splice(1, 1);

    // newArr = ['a', 'c']  Delets 1 element from 1-indexed element.
    // Splice is also used to insert an element

    arr.splice(1, 0, 'foo');

    // arr = ['a', 'foo', 'b', 'c']  Delets 1 element from 1-indexed element.


// IndefOf()
    const arr = ['a', 'b', 'c']
    console.log(arr.indexOf('b'));  // Prints out: 1
    console.log(arr.indexOf('d'));  // Prints out: -1


// filter()
    const arr = ['a', 'b', 'c', 'd']
    const set = arr.filter(function(item){
        return item > 'b';
    });

    // set = ['c', 'd']


// find()
    const values = ['a', 'bbb', 'cc', 'd']
    const found = values.find(function(item){
        return item.length > 1;
    });

    // found = ['bbb']  returns only first matched element


// forEach()
    const values = ['Mesut', 'Atilla', 'Altay']
    values.forEach(function(item){
        console.log(item);
    });


// Problem with "var"
    // lets say we have 2 js files script1.js and script2.js with given order
    // if we have declared str variable globally in both files second files variable will override the first one.
    // This is called polluting the global scope. 
    // Only one global variable should be declared as best practice like shown below

    app = {
        productId: 1234,
        username: 'johnWick',
        orderNumber: 007
    }


    // And js files can get global variables using app.PropertyName 


    productId = 123;
    console.log(productId);  // prints out: 123
    // This is being declared on the object called window. we can access it with window.ProductId
    // to avoid this situation use strict mode 






//#endregion



//#region Pluralsight: JavaScript Syntax and Operators


/*
  ================================================================================================================== 
  Pluralsight: JavaScript Syntax and Operators Paul D. Sheriff
  ================================================================================================================== 
*/


// Block level scope problem with switch cases

    // Switch statement is a block but each case statement is not a block

    let productId = 3;

    switch (productId) {
        case 1:
            let message = "This product is a Book";
            console.log(message);
            break;

        case 2:
            let message = "This product is a Shoes";
            console.log(message);
            break;

        case 3:
            let message = "This product is a Pen";
            console.log(message);
            break;

        default:
            let message = "This product is unknown";
            console.log(message);
            break;
    }


    // When we run code above we get "Uncaught SyntaxError: Identifier 'message' has already been declared" error. 
    // To solve this issue every case statement must be surrounded with {}

    switch (productId) {
        case 1:{
            let message = "This product is a Book";
            console.log(message);
            break;
        }
        case 2:{
            let message = "This product is a Shoes";
            console.log(message);
            break;
        }
        case 3:{
            let message = "This product is a Pen";
            console.log(message);
            break;
        }
        default:{
            let message = "This product is unknown";
            console.log(message);
            break;
        }
    }




// For in Statement

    let product = {
        productId: 1234,
        productName: "Book",
        price: 120,
        getInfo: function () {
            return `Product with Id=${this.productId} costs ${this.price} dollars`;
        }
    }

    for (const key in product) {
            console.log("'" + key + "'=" + product[key]);
    }

    // iterates over collection of properties and methods in a given object
    // returns the key (property or method)

    /*

    'productId'=1234
    'productName'=Book
    'price'=120
    'getInfo'=function () {
            return `Product with Id=${this.productId} costs ${this.price} dollars`;
        }

    */



// For of Statement

    // Iterates over the values of any iterable object.
    // Returns object for each iteration

    let _products = [
        {
            productId: 101,
            productName: "Book",
            price: 120,
            getInfo: function () {
                return `Product with Id=${this.productId} costs ${this.price} dollars`;
            }
        },
        {
            productId: 102,
            productName: "Shoes",
            price: 550,
            getInfo: function () {
                return `Product with Id=${this.productId} costs ${this.price} dollars`;
            }
        },
        {
            productId: 103,
            productName: "Pen",
            price: 30,
            getInfo: function () {
                return `Product with Id=${this.productId} costs ${this.price} dollars`;
            }
        }
    ]



    for (const item of _products) {
        console.log(JSON.stringify(item));
    }

    /*

    {"productId":101,"productName":"Book","price":120}
    {"productId":102,"productName":"Shoes","price":550}
    {"productId":103,"productName":"Pen","price":30}

    */

    let productName = "Hello";

    for (const char of productName) {
        console.log(`${char} - `);
    }

    /*

    H - 
    e - 
    l - 
    l - 
    o - 

    */



// Labeled Statements

    even:
    for (let index = 1; index <= 10; index++) {
        if(index % 2 == 1){
            continue even;
        }
        console.log(index);
    }

    /*

    2
    4
    6
    8
    10

    */

    // Its not recommended to use labels, goto.



// Strict Mode

    /*

    - Strict mode can be used by writing 'use strict' keyword on top of the code or inside a function block or etc.
    - It can be ignored by older browsers. 
    - Strict mode forces all variables to be declared.
    - Mistyped variable names are created globally scoped if strict is not used.

    */

    function sayHi() {
        'use strict';
        message = 'Hey there';
        console.log(message);
    }

    sayHi();    // Uncaught ReferenceError: message is not defined

    // When strict mode is activated below statements can not be executed

    // Cant use reserved words as variable names
    let eval = 'Eval';

    // Cant delete functions
    delete sayHi();

    // Cant delete variables
    delete message;




// Short Circuiting

    let result = isColorRed('Black') && isGreaterThan1400(1401);

    function isColorRed(color) {
        return color === 'Red';
    }

    function isGreaterThan1400(num) {
        return num > 1400;
    }

    // Since the first expression (isColorRed('Black')) returns false second function never runs.





// Try Catch Blocks

    function simpleTryCatchDemo() {
        let result;
        try {
            console.log("This line will always be executed.");
            result = num / 10;
            console.log("If error occurs this line will not be executed");
        } catch (error) {
            console.log(erros.message);
        }
        finally{
            console.log("Finally block will always be executed.");
        }
    }

    simpleTryCatchDemo(); // prints out: num is not defined

    // a Javascript error always has "message" and "name" properties

    // Throwing custom error messages

    function throwErrorDemo() {
        try {
            attemptDivison();
        } catch (error) {
            console.log(error.message + " - Error Type: " + error.name);
        }
        
    }
    function attemptDivison() {
        let result;
        try {
            result = num / 10;
        } catch (error) {
            throw{
                "message": "An error occured inside the 'attemptDivison' function",
                "name": "CustomError"
            }
        }
    }

    throwErrorDemo();


    // An error occured inside the 'attemptDivison' function - Error Type: CustomError

    /*

    Types of built-in errors in Javascript

    - ReferenceError: if non declared variable is tried to be used
    - RangeError: if we overflow some range
    - TypeError: if we use toUpperCase() method on numeric variables
    - URIError: if a URL has invalid characters in it and if we try to decode it
    - SyntaxError: if we miss single quote or double quote vs.
    - EvalError : Used only for backward compatability.

    */


// Helper functions 

    function isArray(value) {
        return value.constructor.toString().indexOf("Array") > -1;
    }

    function isDate(value) {
        return value.constructor.toString().indexOf("Date") > -1;
    }

    function isNullOrUndefined(value) {
        return value === null || value === undefined;
    }



// instanceOf Operator

    // Tests if inherits from Object (not a primitive)

    let prod = new Product("Book", 500);
    console.log(prod instanceof Product); // returns true 
    console.log(prod instanceof Object); // returns true 

    // instanceOf Operator does not test primitive types
    let value = "Javascript";
    console.log(prod instanceof String); // returns false 
    console.log(prod instanceof Object); // returns false 



// This keyword

    console.log(this.toString());   // object Window
    // global window object

    // This changes based onexecution context
    // In a method: owner object
    // In a function: global object
    // In an event: element that recieved the element
    // Call/apply methods: refers to object passed in

    // Use strict can also affect this 

    console.log(this.toString());  // object Window
    function foo() {
        console.log(this.toString());   // object Window
    }

    'use strict';
    console.log(this.toString());  // object Window
    function foo() {
        console.log(this.toString());   // gives error because this is undefined
    }

    /*

    <button onclick="this.style.background='Red'">
            In event handler
        </button>
        <button onclick="eventHandler(this)">
            Pass to function from event handler
        </button>

    */

    function eventHandler(ctl) {
        console.log(ctl.toString());    // object HTMLButtonElement
    }

    // this inside object literal always refers to property or method

    // constructor function
    function Book(name, price) {
        this.name = name;
        this.price = price;
    }

    // inside constructor function this reflects which object we are working with


// Spread Operator 

    // Spread operator expands any 'iterable' such as a string or array into an array
    // IE and Edge does not support spread operator

    // Converting string to an array
    let productNumber = "FR-R92B-58";
    let values = [...productNumber]
    console.log(values);    // (10) ["F", "R", "-", "R", "9", "2", "B", "-", "5", "8"]

    // another use of a spread operator is copy an array
    function copyArray() {
        let arr = [1, 2, 4];
        let arr2 =[...arr];

        //Make changes on copied array
        arr2.push(4);
        arr2[0] = 99;
        console.log(arr);       // (3) [1, 2, 4]
        console.log(ar2r);      // (4) [99, 2, 4, 4]
    }


    // used for concatenating
    let spProducts = [...products, ...newProducts];

    // used for passing an argument
    let dt = new Date(2019, 10, 15);
    console.log(dt);

    let dateFields = [2019, 11, 15];
    let dt = new Date(...dateFields);
    console.log(dt);



    function multipleParams(arg1, arg2, arg3) {
        console.log(arg1);
        console.log(arg2);
        console.log(arg3);
    }

    multipleParams(1,2,3);

    let params = [1, 2, 3];
    multipleParams(...params);

//#endregion



//#region Pluralsight: JavaScript Variables and Types


/*
  ================================================================================================================== 
  Pluralsight: JavaScript Variables and Types by Barry Luijbregts
  ================================================================================================================== 
*/


// tagged template literal
    String.raw `string text ${expression} string text
                string text ${expression} \t string text`;

// escape characters are rendered as string

    function getText() {
        return "Hello World"
    }

    var str = String.raw `\t  ${getText()}.`;


    const arr = [1, 2, 3];

    arr = "Hello";  // this is not allowed
    arr[0] = 7;     // this is legal

// You cant change the type but you can change the content

    var arr = Object.freeze([1, 2, 3]); // this way we cant change content too

// const is used for readability 


    var la = getValFromDropDown(dropDown.Value);

    var isEmployed = la.Factors[0];
    var hasKids = la.Factors[1];
    var hasLoans = la.Factors[2];
    var hasCreditCards = la.Factors[3];

// destructuring syntax. Same as above
    var[
        isEmployed, 
        hasKids, 
        hasLoans, 
        hasCreditCards, // even this comma is also allowed
    ] = la.Factors;


// for changing array. Array deconstraction
    var[
        isEmployed, 
        hasKids, 
        hasLoans, 
        hasCreditCards,
        ...moreArgs
    ] = la.Factors;



    var[a, b, c] = array;
    var {Id:a, Name:b, isActive:c} = object;



    var Id = Symbol();  // without new keyword
    var Id = Symbol("My Id"); 
    console.log(Id);    // symbol
    console.log(Id.toString()); // Symbol(MyId)


    var Id1 = Symbol("My Id"); 
    var Id2 = Symbol("My Id"); 

    Id1 === Id2 // false

// Symbols are unique 
// Where can we use symbol, we can use them when creating a property on objects

    var loan = {
        name: "Barry",
        [Symbol("income")]: 1500
    };


// when we use symbol as a property name it does not show up 
    console.log(Object.getOwnPropertyNames(loan));      // ["name"]

// So we can use it to create a secret property

// But this way we can see it
    console.log(Object.getOwnPropertySymbols(loan));    // [Sumbol(income)]


//#endregion



//#region Pluralsight: JavaScript: Functions


/*
  ================================================================================================================== 
  Pluralsight: JavaScript: Functions by Prateek Parekh
  ================================================================================================================== 
*/


// Function Scope

    function greeting() {
        let message = "Hello";
        let sayHi = function hi() {
            console.log(message);
        }
        sayHi();    // Hello
    }

    greeting();


    function greeting() {
        let message = "Hello";
        let sayHi = function hi() {
            let message = "Hi";
        }
        sayHi();    
        console.log(message);   // Hello
    }

    greeting();




// Block Scope

    let message = "Hello";

    if (message === "Hello") {
        let count = 100;
    }

    console.log(count);     // Error


    let message = "Hello";

    if (message === "Hello") {
        var count = 100;    // global scope
    }

    console.log(count);     // 100




    let message = "Hello";

    if (message === "Hello") {
        let message = "Hi";
        console.log(message);   // Hi
    }

    console.log(message);     // Hello



// Lexical scoping (MDN)

    function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert(name); // use variable declared in the parent function
    }
    displayName();
    }
    init();

    /*

        init() creates a local variable called name and a function called displayName(). 
        The displayName() function is an inner function that is defined inside init() 
        and is available only within the body of the init() function. 
        Note that the displayName() function has no local variables of its own. 
        However, since inner functions have access to the variables of outer functions, 
        displayName() can access the variable name declared in the parent function, init().

        Run the code using this JSFiddle link and notice that the alert() statement within the 
        displayName() function successfully displays the value of the name variable, 
        which is declared in its parent function. This is an example of lexical scoping, 
        which describes how a parser resolves variable names when functions are nested. 
        The word lexical refers to the fact that lexical scoping uses the location where 
        a variable is declared within the source code to determine where that variable is available. 
        Nested functions have access to variables declared in their outer scope.


    */

// Immediately Invoked Function Expression (IIFE)

    function greeting() {
        console.log("Hello");
    }

    greeting(); // Hello


    // same as above. has no name
    (function () {
        console.log("Hello");
    })(); 

    // we can assign it to avariable and use later if we want




// Closures 

    // MDN example 
    function makeFunc() {
        var name = 'Mozilla';
        function displayName() {
        console.log(name);
        }
        return displayName;
    }

    var myFunc = makeFunc();
    myFunc();


    /*

        Running this code has exactly the same effect as the previous example of the init() function above. 
        What's different (and interesting) is that the displayName() inner function is returned 
        from the outer function before being executed.

        At first glance, it might seem unintuitive that this code still works. In some programming languages, 
        the local variables within a function exist for just the duration of that function's execution. 
        Once makeFunc() finishes executing, you might expect that the name variable would no longer be accessible. 
        However, because the code still works as expected, this is obviously not the case in JavaScript.

        The reason is that functions in JavaScript form closures. 
        A closure is the combination of a function and the lexical environment within which that function was declared. 
        This environment consists of any local variables that were in-scope at the time the closure was created. 
        In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. 
        The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. 
        For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to alert.

    */


    function makeAdder(x) {
        return function(y) {
        return x + y;
        };
    }
    
    var add5 = makeAdder(5);
    var add10 = makeAdder(10);
    
    console.log(add5(2));  // 7
    console.log(add10(2)); // 12


    /*

        In this example, we have defined a function makeAdder(x), that takes a single argument x, and returns a new function. 
        The function it returns takes a single argument y, and returns the sum of x and y.

        In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. 
        In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.

        add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. 
        In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.

    */


    let greeting = (function (){
        let message = "Hello";
        let getMessage = function (){
            return message;
        };
    })();

    console.log(greeting.message);  // undefined



    let greeting = (function (){
        let message = "Hello";
        let getMessage = function (){
            return message;
        };
        return{
            getMessage: getMessage
        };
    })();

    console.log(greeting.getMessage());  // Hello



    function setupCounter(val) {
        return function counter() {
            return val++;
        }
    }

    let counter1 = setupCounter(0);

    console.log(counter1());    // 0
    console.log(counter1());    // 1

    let counter2 = setupCounter(10);

    console.log(counter2());    // 10


    // "this" keyword with arrow functions

    let message = {
        name: "John",
        regularFunction: function(){
            console.log("Hello " + this.name);
        },
        arrowFunction: () => console.log("Hi " + this.name)
    }


    message.regularFunction();  // Hello John
    message.arrowFunction();    // Hi

    console.log(this);          // window object

    // Arrow functions do not have its own bindings to this or super, and should not be used as methods.

    


// Call Method

    let sayHi = function () {
        console.log("Hi " + this.name);
    }

    sayHi();    // Hi

    // we know that calling the function sayHi print "Hi" as this reports to the 
    // global window object which does not have a "name" property.
    // By using "call" we set the value of "this" to something other than the current execution context.

    // Every javascript "function object" has a few properties that come out of the box.
    // One of these properties is the "call" method and you can pass another object as an argument to this call method. 

    let person1 = { name:"John", age:22 }
    let person2 = { name:"Mary", age:26 }

    let sayHi = function () {
        console.log("Hi " + this.name);
    }

    sayHi.call(person1);    // Hi John
    sayHi.call(person2);    // Hi Mary

    // Passing the person1 object to the call method as an argument of sayHi 
    // binds the value of this in sayHi to the person object.


    // You can also pass additional arguments to the call method 
    let person1 = { name:"John", age:22 }

    let sayHi = function (message) {
        console.log(message + ", " + this.name);
    }

    sayHi.call(person1, "Hi");    // Hi John


    // Note: You can only invoke the call method on another function.

    person1.call();     // TypeError

    // Calling person1.call will result in a type error as person1 is not a function.



    // MDN example 
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    
    function Food(name, price) {
        Product.call(this, name, price);
        this.category = 'food';
    }
    
    console.log(new Food('cheese', 5).name);
    // expected output: "cheese"




// Apply Method

    // Like call() method every function object has an apply() method.
    // Difference between call() and apply() methods is call accepts an argument list, 
    // while apply() accepts a single array of arguments.

    function introduction(name, profession) {
        console.log("My name is " + name + " and I am a " + profession);
        console.log(this);
    }

    introduction("John", "student");
    introduction.apply(undefined, ["Mary", "lawyer"]);
    introduction.call(undefined, "James", "artist");

    // So how do we decide when to use a call() or apply()?
    // Use the apply() method when the input parameter is already in the form of an array consisting of similar values.
    // If you are dealing with multiple arguments that are not realy related to each other, use the call() method.

    // call()  ===> individual argumetns of varying type
    // apply() ===> array input with similar elements


    // MDN example
    const numbers = [5, 6, 2, 3, 7];

    const max = Math.max.apply(null, numbers);

    console.log(max);
    // expected output: 7

    const min = Math.min.apply(null, numbers);

    console.log(min);
    // expected output: 2



// Bind Method

    // With call() and apply(), we call an existing function 
    // and change the function context that is the value of the this object.
    // But what if we would like to make a copy of a function and then change the value of this. 
    // The bind() method allows us to do just that.

    let person1 = {
        name: "Mary",
        getName: function () {
            return this.name;
        }
    };

    let person2 = { name: "John" };

    let getNameCopy = person1.getName.bind(person2);
    console.log(getNameCopy());

    // The bind() method creates a new function that, when called, 
    // has its this keyword set to the provided value, 
    // with a given sequence of arguments preceding any provided when the new function is called.

    // MDN example
    const module = {
        x: 42,
        getX: function() {
        return this.x;
        }
    };
    
    const unboundGetX = module.getX;
    console.log(unboundGetX()); // The function gets invoked at the global scope
    // expected output: undefined
    
    const boundGetX = unboundGetX.bind(module);
    console.log(boundGetX());
    // expected output: 42



// Some of the Built-in Javascript functions

// 1. eval(): The eval() function evaluates JavaScript code represented as a string.

    let x = 1;
    let y = 2;
    console.log(eval("x + y + 1"));     // 4

    let s = "abc";
    console.log(eval("x + y + s"));     // 3abc

    console.log(eval('2 + 2') === eval('4'));
    // expected output: true

    console.log(eval('2 + 2') === eval(new String('2 + 2')));
    // expected output: false
   

 // 2. parseInt(): The parseInt() function parses a string argument and returns an integer.

    console.log(perseInt("F", 16));     // 15
    console.log(perseInt("15", 10));    // 15    
    console.log(perseInt("Hi", 10));    // NaN


 // 3. parseFloat(): The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.

    console.log(perseFloat("3.99"));        // 3.99
    console.log(perseFloat("3.99e-1"));     // 39.9   
    console.log(perseFloat(""));            // NaN
 

    
// Default Parameters 

    function sayHi(name = "World") {
        console.log("Hello " + name);
    }

    sayHi();        // Hello World
    sayHi("John");  // Hello John


    function sayHi(message, name = "World") {
        console.log(message + " " + name);
    }

    sayHi("Hello");        // Hello World
    sayHi("Hi", "John");   // Hi John

    // Note: Default parameter in our function definition should always come after the regular parameters.



// Rest Parameters

    let sayHi = function greet(...names) {
        names.forEach(name => console.log("Hi, " + name));
    }

    greet("Mary", "John", "James"); 

    // Hi, Mary  
    // Hi, John
    // Hi, James

    // names parameter stores all of these values as an array


    let sayHi = function greet(message, ...names) {
        console.log(message + " everyone!");
        names.forEach(name => console.log("Hi, " + name));
    }

    greet("Welcome", "Mary", "John", "James"); 

    // Welcome everyone!
    // Hi, Mary  
    // Hi, John
    // Hi, James

    // Note: Just like the default parameters rest parameters should appear 
    // after any regular parameters in our function definition.
    // Name Rest parameters are named "rest" because they always store rest of remaining arguments as an array.


// Spread Operator

    // The spread operator is the opposite of how a rest parameter works

    function greet(persone1, person2) {
        console.log("Hello " + person1 + " and " + person2);
    }

    let names = ["John", "Mary"];
    greet(...names);    // Hello John and Mary

    function display(char1, char2, char3, char4) {
        console.log(char1, char2, char3, char4);
    }

    let letters = "abcd";
    display(...letters);    // a b c d


    // MDN

    // Spread syntax (...) allows an iterable such as an array expression or string to be expanded 
    // in places where zero or more arguments (for function calls) or elements (for array literals) are expected, 
    // or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

    function sum(x, y, z) {
        return x + y + z;
    }
    
    const numbers = [1, 2, 3];
    
    console.log(sum(...numbers));
    // expected output: 6
    
    console.log(sum.apply(null, numbers));
    // expected output: 6


    // overriding global variable
    var name = "Jenny";
    function printName(gender) {
        if (gender === "male") {
            var name = "John";
            console.log(name);
        }
        if (name === "Jenny") {
            console.log("Jenny");
        }
    }

    console.log(name);  // Jenny
    printName("male");  // John

  

    // Another example for closure
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 3000);  
    };

    // 3
    // 3
    // 3

    for (let i = 0; i < 3; i++) {
        setTimeout(((i) => {
            return() => console.log(i);
        })(i), 3000);  
    };

    // 0
    // 1
    // 2

    // Interesting
    function wrapElements(arr) {
        var resultArr = [], i, n;
        for (i = 0, n = arr.length; i < n; i++) {
            resultArr[i] = function () { return arr[i]; }
        }
        return resultArr;
    }

    var wrapped = wrapElements([10,20,30,40,50]);
    var f = wrapped[0];
    console.log(f());   // undefined. Because current i value is 5



//#endregion



//#region Pluralsight: JavaScript Arrays and Collections


/*
  ================================================================================================================== 
  Pluralsight: JavaScript Arrays and Collections by Jeff Batt
  ================================================================================================================== 
*/

// Working with Arrays

    let arr = Array.of(1,2,3,4,5);

    let numBiggerThanTwo = arr.find(element => element > 2);
    console.log(numBiggerThanTwo);  // 3

    let numBiggerThanTwoIndex = arr.findIndex(element => element > 2);
    console.log(numBiggerThanTwoIndex);  // 2

    let arr = Array.of(1,2,3,4,5);
    arr.fill(0); // (5) [0, 0, 0, 0, 0]


// Sets

    // The Set object lets you store unique values of any type, whether primitive values or object references.
    // Set objects are collections of values. You can iterate through the elements of a set in insertion order. 
    // A value in the Set may only occur once; it is unique in the Set's collection.

    const mySet1 = new Set()

    mySet1.add(1)           // Set [ 1 ]
    mySet1.add(5)           // Set [ 1, 5 ]
    mySet1.add(5)           // Set [ 1, 5 ]
    mySet1.add('some text') // Set [ 1, 5, 'some text' ]
    const o = {a: 1, b: 2}
    mySet1.add(o)

    mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

    mySet1.has(1)              // true
    mySet1.has(3)              // false, since 3 has not been added to the set
    mySet1.has(5)              // true
    mySet1.has(Math.sqrt(25))  // true
    mySet1.has('Some Text'.toLowerCase()) // true
    mySet1.has(o)       // true

    mySet1.size         // 5

    mySet1.delete(5)    // removes 5 from the set
    mySet1.has(5)       // false, 5 has been removed

    mySet1.size         // 4, since we just removed one value

    console.log(mySet1) // logs Set(4) [ 1, "some text", {…}, {…} ] 

    mySet1.add(2).add(4)    // can be chained


    // iterate over items in set
    // logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
    for (let item of mySet1) console.log(item)

    // logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
    for (let item of mySet1.keys()) console.log(item)

    // logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
    for (let item of mySet1.values()) console.log(item)

    // logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
    // (key and value are the same here)
    for (let [key, value] of mySet1.entries()) console.log(key)

    // convert Set object to an Array object, with Array.from
    const myArr = Array.from(mySet1) // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]


    // converting between Set and Array
    const mySet2 = new Set([1, 2, 3, 4]);
    console.log(mySet2.size);       // 4
    [...mySet2];                    // [1, 2, 3, 4]

    // intersect can be simulated via
    const intersection = new Set([...mySet1].filter(x => mySet2.has(x)))

    // difference can be simulated via
    const difference = new Set([...mySet1].filter(x => !mySet2.has(x)))

    // Iterate set entries with forEach()
    mySet1.forEach(function(value) {
    console.log(value)
    })

    // 1
    // 2
    // 3
    // 4



    // Implementing basic set operations

    function isSuperset(set, subset) {
        for (let elem of subset) {
            if (!set.has(elem)) {
                return false
            }
        }
        return true
    }

    function union(setA, setB) {
        let _union = new Set(setA)
        for (let elem of setB) {
            _union.add(elem)
        }
        return _union
    }

    function intersection(setA, setB) {
        let _intersection = new Set()
        for (let elem of setB) {
            if (setA.has(elem)) {
                _intersection.add(elem)
            }
        }
        return _intersection
    }

    function symmetricDifference(setA, setB) {
        let _difference = new Set(setA)
        for (let elem of setB) {
            if (_difference.has(elem)) {
                _difference.delete(elem)
            } else {
                _difference.add(elem)
            }
        }
        return _difference
    }

    function difference(setA, setB) {
        let _difference = new Set(setA)
        for (let elem of setB) {
            _difference.delete(elem)
        }
        return _difference
    }

    // Examples
    const setA = new Set([1, 2, 3, 4])
    const setB = new Set([2, 3])
    const setC = new Set([3, 4, 5, 6])

    isSuperset(setA, setB)          // returns true
    union(setA, setC)               // returns Set {1, 2, 3, 4, 5, 6}
    intersection(setA, setC)        // returns Set {3, 4}
    symmetricDifference(setA, setC) // returns Set {1, 2, 5, 6}
    difference(setA, setC)          // returns Set {1, 2}



    // Relation with Array objects

    let myArray = ['value1', 'value2', 'value3']

    // Use the regular Set constructor to transform an Array into a Set
    let mySet = new Set(myArray)

    mySet.has('value1')     // returns true

    // Use the spread operator to transform a set into an Array.
    console.log([...mySet]) // Will show you exactly the same Array as myArray


    // Use to remove duplicate elements from the array
    const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
    console.log([...new Set(numbers)])
    // [2, 3, 4, 5, 6, 7, 32]


    // Relation with Strings
    let text = 'India'

    const mySet = new Set(text)  // Set(5) {'I', 'n', 'd', 'i', 'a'}
    mySet.size  // 5

    //case sensitive & duplicate ommision
    new Set("Firefox")  // Set(7) { "F", "i", "r", "e", "f", "o", "x" }
    new Set("firefox")  // Set(6) { "f", "i", "r", "e", "o", "x" }



// WeakSets

/*

    The WeakSet object lets you store weakly held objects in a collection.
    WeakSet objects are collections of objects. Just as with Sets, each object in a WeakSet may occur only once; 
    all objects in a WeakSet's collection are unique.
    The main differences to the Set object are:
    WeakSets are collections of objects only. They cannot contain arbitrary values of any type, as Sets can.
    The WeakSet is weak, meaning references to objects in a WeakSet are held weakly. 
    If no other references to an object stored in the WeakSet exist, those objects can be garbage collected.
    Note: This also means that there is no list of current objects stored in the collection. WeakSets are not enumerab

*/

    const ws = new WeakSet();
    const foo = {};
    const bar = {};

    ws.add(foo);
    ws.add(bar);

    ws.has(foo);    // true
    ws.has(bar);    // true

    ws.delete(foo); // removes foo from the set
    ws.has(foo);    // false, foo has been removed
    ws.has(bar);    // true, bar is retained

    // Note that foo !== bar. While they are similar objects, they are not the same object. 
    // And so they are both added to the set.
    // Weaksets are not iterable, they dont have size property and they are garbage collected.


// Maps


    // The Map object holds key-value pairs and remembers the original insertion order of the keys. 
    // Any value (both objects and primitive values) may be used as either a key or a value.
    // A Map object iterates its elements in insertion order — a for...of loop returns 
    // an array of [key, value] for each iteration.


    // Setting Object properties works for Map objects as well, and can cause considerable confusion. 
    // Therefore, this appears to work in a way:

    let wrongMap = new Map()
    wrongMap['bla'] = 'blaa'
    wrongMap['bla2'] = 'blaaa2'

    console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }

    // But that way of setting a property does not interact with the Map data structure. 
    // It uses the feature of the generic object. 
    // The value of 'bla' is not stored in the Map for queries. Other operations on the data fail:

    wrongMap.has('bla')    // false
    wrongMap.delete('bla') // false
    console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }

    // The correct usage for storing data in the Map is through the set(key, value) method.

    let contacts = new Map()
    contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
    contacts.has('Jessie') // true
    contacts.get('Hilary') // undefined
    contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
    contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
    contacts.delete('Raymond') // false
    contacts.delete('Jessie') // true
    console.log(contacts.size) // 1


    // Using the Map object

    let myMap = new Map()

    let keyString = 'a string'
    let keyObj    = {}
    let keyFunc   = function() {}

    // setting the values
    myMap.set(keyString, "value associated with 'a string'")
    myMap.set(keyObj, 'value associated with keyObj')
    myMap.set(keyFunc, 'value associated with keyFunc')

    myMap.size              // 3

    // getting the values
    myMap.get(keyString)    // "value associated with 'a string'"
    myMap.get(keyObj)       // "value associated with keyObj"
    myMap.get(keyFunc)      // "value associated with keyFunc"

    myMap.get('a string')    // "value associated with 'a string'"
                            // because keyString === 'a string'
    myMap.get({})            // undefined, because keyObj !== {}
    myMap.get(function() {}) // undefined, because keyFunc !== function () {}


    // Using "NaN" as Map keys

    // "NaN" can also be used as a key. 
    // Even though every "NaN" is not equal to itself (NaN !== NaN is true), 
    // the following example works because NaNs are indistinguishable from each other:

    let myMap = new Map()
    myMap.set(NaN, 'not a number')

    myMap.get(NaN)
    // "not a number"

    let otherNaN = Number('foo')
    myMap.get(otherNaN)
    // "not a number"


    // Iterating Map with for..of
    // Maps can be iterated using a for..of loop:

    let myMap = new Map()
    myMap.set(0, 'zero')
    myMap.set(1, 'one')

    for (let [key, value] of myMap) {
    console.log(key + ' = ' + value)
    }
    // 0 = zero
    // 1 = one

    for (let key of myMap.keys()) {
    console.log(key)
    }
    // 0
    // 1

    for (let value of myMap.values()) {
    console.log(value)
    }
    // zero
    // one

    for (let [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value)
    }
    // 0 = zero
    // 1 = one


    // Iterating Map with forEach()
    // Maps can be iterated using the forEach() method:

    myMap.forEach(function(value, key) {
    console.log(key + ' = ' + value)
    })
    // 0 = zero
    // 1 = one



    // Relation with Array objects
    let kvArray = [['key1', 'value1'], ['key2', 'value2']]

    // Use the regular Map constructor to transform a 2D key-value Array into a map
    let myMap = new Map(kvArray)

    myMap.get('key1') // returns "value1"

    // Use Array.from() to transform a map into a 2D key-value Array
    console.log(Array.from(myMap)) // Will show you exactly the same Array as kvArray

    // A succinct way to do the same, using the spread syntax
    console.log([...myMap])

    // Or use the keys() or values() iterators, and convert them to an array
    console.log(Array.from(myMap.keys())) // ["key1", "key2"]


    // Cloning and merging Maps
    // Just like Arrays, Maps can be cloned:

    let original = new Map([
    [1, 'one']
    ])

    let clone = new Map(original)

    console.log(clone.get(1))       // one
    console.log(original === clone) // false (useful for shallow comparison)

    //Important: Keep in mind that the data itself is not cloned.

    // Maps can be merged, maintaining key uniqueness:

    let first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    ])

    let second = new Map([
    [1, 'uno'],
    [2, 'dos']
    ])

    // Merge two maps. The last repeated key wins.
    // Spread operator essentially converts a Map to an Array
    let merged = new Map([...first, ...second])

    console.log(merged.get(1)) // uno
    console.log(merged.get(2)) // dos
    console.log(merged.get(3)) // three



    // Maps can be merged with Arrays, too:

    let first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    ])

    let second = new Map([
    [1, 'uno'],
    [2, 'dos']
    ])

    // Merge maps with an array. The last repeated key wins.
    let merged = new Map([...first, ...second, [1, 'eins']])

    console.log(merged.get(1)) // eins
    console.log(merged.get(2)) // dos
    console.log(merged.get(3)) // three


// WeakMaps

/*

    The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. 
    The keys must be objects and the values can be arbitrary values.

    Description
    Keys of WeakMaps are of the type Object only. 
    Primitive data types as keys are not allowed (e.g. a Symbol can't be a WeakMap key).

    Why WeakMap?
    A map API could be implemented in JavaScript with two arrays (one for keys, one for values) shared by the four API methods. 
    Setting elements on this map would involve pushing a key and value onto the end of each of those arrays simultaneously. 
    As a result, the indices of the key and value would correspond to both arrays. 
    Getting values from the map would involve iterating through all keys to find a match, 
    then using the index of this match to retrieve the corresponding value from the array of values.

    Such an implementation would have two main inconveniences:

    The first one is an O(n) set and search (n being the number of keys in the map) since both operations 
    must iterate through the list of keys to find a matching value.
    The second inconvenience is a memory leak because the arrays ensure that references 
    to each key and each value are maintained indefinitely. 
    These references prevent the keys from being garbage collected, even if there are no other references to the object. 
    This would also prevent the corresponding values from being garbage collected.
    By contrast, native WeakMaps hold "weak" references to key objects. 
    As such native WeakMaps do not prevent garbage collection, which eventually removes references to the key object. 
    "Weak" references also avoid preventing garbage collection of values in the map. 
    WeakMaps can be particularly useful constructs when mapping keys to information about the key 
    that is valuable only if the key has not been garbage collected.

    Because the references are weak, WeakMap keys are not enumerable. There is no method to obtain a list of the keys. 
    If there was, the list would depend on the state of garbage collection, introducing non-determinism. 
    If you want to have a list of keys, you should use a Map.

*/


    const wm1 = new WeakMap(),
          wm2 = new WeakMap(),
          wm3 = new WeakMap();
        
    const o1 = {},
          o2 = function() {},
          o3 = window;

    wm1.set(o1, 37);
    wm1.set(o2, 'azerty');
    wm2.set(o1, o2); // a value can be anything, including an object or a function
    wm2.set(o3, undefined);
    wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

    wm1.get(o2); // "azerty"
    wm2.get(o2); // undefined, because there is no key for o2 on wm2
    wm2.get(o3); // undefined, because that is the set value

    wm1.has(o2); // true
    wm2.has(o2); // false
    wm2.has(o3); // true (even if the value itself is 'undefined')

    wm3.set(o1, 37);
    wm3.get(o1); // 37

    wm1.has(o1); // true
    wm1.delete(o1);
    wm1.has(o1); // false


// Difference between Maps and Weakmaps

// 1. Weakmaps are not iterable
// 2. Keys of weakmaps must be objects
// 3. Garbage collected
// 4. Weakmaps are not enumerable



// Difference between Maps and Objects

// 1. Iterating on maps are much more faster than objects
// 2. Keys of objects must be simple datatype (int,string, symbol). For maps key can be of any data type 
// 3. Element order. There is no guarantee for insertion order fr objects. But for maps insertion order is guaranteed. 
// 4. Maps are inherited from objects so they can use all object properties and methods. 


// Creating objects
    var obj = {};
    var obj = new Object();
    var obj = Object.create(null);

// Creating maps
    var map = new Map();


// Getting for objects
    obj.id;
    obj["id"]

// Getting for maps
    map.get("id");


// Checking for objects
    let isExist = obj.id === undefined;
    let isExist = "id" in obj;

// Checking for maps
    map.has("id");



// Adding for objects
    obj["gender"] = "female";
    obj.gender = "female";

// Adding for maps
    map.set(4,5);   


// Getting size for objects
    let size = Object.keys(obj).length;

// Getting size for maps
    let size = map.size;


// Typed Arrays 

    /* 

        JavaScript typed arrays are array-like objects that provide a mechanism for 
        reading and writing raw binary data in memory buffers.
        Array objects grow and shrink dynamically and can have any JavaScript value. 
        JavaScript engines perform optimizations so that these arrays are fast. 
        However, as web applications become more and more powerful, adding features such as audio and video manipulation, 
        access to raw data using WebSockets, and so forth, it has become clear that there are times when it would be 
        helpful for JavaScript code to be able to quickly and easily manipulate raw binary data. 
        This is where typed arrays come in. Each entry in a JavaScript typed array is a raw binary value 
        in one of a number of supported formats, from 8-bit integers to 64-bit floating-point numbers.

        However, typed arrays are not to be confused with normal arrays, 
        as calling Array.isArray() on a typed array returns false. 
        Moreover, not all methods available for normal arrays are supported by typed arrays (e.g. push and pop).

    */


//#endregion



//#region Pluralsight:  Javascript Generators and Iterators


/*
  ================================================================================================================== 
  Pluralsight:  Javascript Generators and Iterators  by Marques Woodson
  ================================================================================================================== 
*/

//#endregion


