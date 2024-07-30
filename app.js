//////////////////////////////////////////////////////////
// ============ Data Collections - Objects ============ //
//////////////////////////////////////////////////////////

///////////////////
// Object Syntax //
///////////////////

const vehicle = {
    color: "blue",
    hp: 4000,
    year: 1989,
    "active registration": true
  }
  
  // Accessing properties of an object
  
  console.log( vehicle["color"] ) // square bracket notation
  console.log( vehicle.color ) // dot notation
  
  /*
    A property name that has a space or a hyphen, that starts with a number, 
    or that is held inside a variable can only be accessed using the bracket notation.
  */
  
  console.log( vehicle["active registration"] )
  // console.log( vehicle.active registration ) // Will give you a SyntaxError
  
  console.log("-------------")
  
  
  /////////////////
  // Unique Keys //
  /////////////////
  
  // An object can not have more than one of the same key
  
  const borough = {
    name: "Brooklyn",
    name: "The Bronx" // This line will overrite the line above
  }
  
  console.log(borough); // { name: "The Bronx" }
  console.log("-------------")
  
  
  ///////////////////////////////////////////
  // Changing Object Properties and Values //
  ///////////////////////////////////////////
  
  const person = {
    name: 'bryan',
    isLearner: false
  }
  
  person.name = 'jordan'; // changing an existing property value
  person.class = 31; // adding a new key:value pair
  delete person.isLearner; // removing an existing property
  console.log(person)
  console.log("-------------")
  
  
  ////////////////////////////////////////////////////////
  // Evaluating variables using Square Bracket Notation //
  ////////////////////////////////////////////////////////
  
  const person2 = {
    name: 'bryan'
  }
  
  const donkeyKong = 'name';
  
  console.log(person2['name']) // bryan
  console.log(person2.name) // bryan
  console.log(person2[donkeyKong]) // bryan
  
  console.log("-------------")
  
  
  ///////////////////////////////
  // Iterating through Objects //
  ///////////////////////////////
  
  for (const key in vehicle) {
    console.log(key, vehicle[key])
  }
  console.log("-------------")
  
  
  ///////////////////////////////////////////////
  // Accessing values inside of nested objects //
  ///////////////////////////////////////////////
  
  const vehicle2 = {
    color: "blue",
    year: 1989,
    make: "Audi",
    engine: {
      cylinders: 6,
      hp: 4000,
      size: 3.2
    }
  }
  
  console.log(vehicle2['engine']['size']); // Using square bracket notation
  console.log(vehicle2.engine.size); // Using dot notation
  console.log("-------------")
  
  
  ////////////////////////////////////////////////////////////
  // Comparing Data Collections / Comparing Reference Types //
  ////////////////////////////////////////////////////////////
  
  /*
    In JavaScript, Objects and Arrays are considered 'Reference Types', so by comparing two
    Objects or Arrays, you aren't comparing what's inside of them, you're comparing their location
    in memory
  */
  
  const car1 = {
    color: "blue",
    year: 1989,
    make: "Audi",
    engine: {
      cylinders: 6,
      hp: 4000,
      size: 3.2
    }
  }
  
  const car2 = {
    color: "blue",
    year: 1989,
    make: "Audi",
    engine: {
      cylinders: 6,
      hp: 4000,
      size: 3.2
    }
  }
  
  console.log(car1 == car2); // false
  console.log("-------------")
  
  
  /////////////////////////
  // When to use Objects //
  /////////////////////////
  
  // name of your cat
  let name = 'winky';
  
  // age of your cat
  let age = 2;
  
  // favorite things of your cat
  let favThings = ['water', 'cat toy'];
  
  // whether your cat can speak French
  let canSpeakFrench = false;
  
  // whether your cat can solve a Rubik's cube
  let canSolveRubiks = true;
  
  // your cat
  const cat = {
    name: 'winky',
    age: 2,
    favThings: ['water', 'cat toy'],
    canSpeakFrench: false,
    canSolveRubiks: true
  }
  
  
  /////////////////////////////////////////////////////////
  // Manipulating Objects and Arrays Declared as `const` //
  /////////////////////////////////////////////////////////
  
  /*
    const only prevents you from reassigning a variable, it doesn't prevent you from 
    adding or changing elements of arrays or properties of objects.
  */
  
  // You can do this:
  
  const mogwai1 = {};
  mogwai1.name = 'Gizmo';
  
  // You cannot do this:
  
  const mogwai2 = {};
  // mogwai2 = { name: 'Gizmo' }; // Error
  
  
  ////////////////////////////////////////
  // Object Properties and Conditionals //
  ////////////////////////////////////////
  
  // Using object properties in conditions
  
  const obj = {
    salutation: 'hi',
    count: 4
  }
  
  if (obj.salutation === "hi") {
    console.log('ok');
  }
  
  for (let i = 0; i < obj.count; i++) {
    console.log(i);
  }
  
  // You can also test to see if a property exists on an object
  
  const obj2 = {
    something: 'wuttt'
  }
  
  if (obj2.something) {
    console.log('ok');
  }
  
  if (obj2.anotherthing) {
    console.log('ok');
  } else {
    console.log("that property doesn't exist");
  }
  /////////////////////////////////////////
// ============ Functions ============ //
/////////////////////////////////////////

////////////////////////
// Defining Functions //
////////////////////////

// Function Declaration

funcDeclaration() // able to be called before declaring it, because func declarations allow us this ability due to hoisting
// funcExpression() // will throw an error because variables cannot be hoisted the way func declarations can; func expressions cannot be called before declaring 

function funcDeclaration() {
  console.log('This is a function declaration')
}

// Function Expression

const funcExpression = function() {
  console.log('This is a function expression')
}

funcDeclaration()
funcExpression()

// Arrow Function

const arrowFunc = () => {
  console.log('This is a arrow function')
}

arrowFunc()


function addTwoNums(x, y) { // x and y are parameters
  return x + y;
}

console.log(addTwoNums(25, 100)); // example 1; 25 and 100 are arguments

let answer = addTwoNums(10, 5); // example 2; 10 and 5 are arguments
console.log(answer)

console.log("-------------")


//////////////
// Exercise //
//////////////

function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);

  /* 
    This explains why we get true on line 77:

    !(n1 % 2) && !(n2 % 2);
    !(2 % 2) && !(4 % 2);
    !0 && !0
    !false && !false
    true && true
    true
  */
  /*
    This explains why we get false on line 78:

    !(n1 % 2) && !(n2 % 2);
    !(2 % 2) && !(3 % 2);
    !0 && !1
    !false && !true
    true && false
    false
  */ 
}

console.log(areBothEven(2, 4))
console.log(areBothEven(2, 3))
console.log("-------------")


////////////////
// Exercise 2 //
////////////////

function computeArea(width, height) {
  let area = width * height;
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
}

console.log(computeArea(10, 5))
console.log("-------------")


////////////////
// Exercise 3 //
////////////////

const planetHasWater = function(planet) {
  // Method 1
  if (planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars') {
    return true;
  } else {
    return false;
  }

  // Method 2
  // return planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars';  
}

console.log(planetHasWater('Earth')) // true
console.log(planetHasWater('Mars')) // true
console.log(planetHasWater('Jupiter')) // false
console.log(planetHasWater('earth')) // true
console.log(planetHasWater('MARS')) // true
console.log(planetHasWater('eArtH')) // true
console.log(planetHasWater('SATURN')) // false
console.log("-------------")


//////////////////////////////
// Parameters and Arguments //
//////////////////////////////

function numOfArgs() {
  // Every function has access to a hidden variable called `arguments` which contains a list of all of the passed in arguments
  console.log(arguments) 
}

numOfArgs()
numOfArgs('bryan')
numOfArgs('bryan', 2, true)
console.log("-------------")

function getDevObject1(name) {
  let skills = [];

  for (let i = 1; i < arguments.length; i++) {
    skills.push(arguments[i]);
  }

  return {
    devName: name,
    jobSkills: skills
  };
}

function getDevObject2() {
  let skills = [];

  for (let i = 1; i < arguments.length; i++) {
    skills.push(arguments[i]);
  }

  return {
    devName: arguments[0],
    jobSkills: skills
  };
}

console.log(getDevObject1('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery'))
console.log(getDevObject2('Jason', 'Node', 'Express', 'React', 'Machine Learning'))


/////////////////////////////////////////
// ============ Functions ============ //
/////////////////////////////////////////

////////////////////////
// Defining Functions //
////////////////////////

// Function Declaration

funcDeclaration() // able to be called before declaring it, because func declarations allow us this ability due to hoisting
// funcExpression() // will throw an error because variables cannot be hoisted the way func declarations can; func expressions cannot be called before declaring 

function funcDeclaration() {
  console.log('This is a function declaration')
}

// Function Expression

const funcExpression = function() {
  console.log('This is a function expression')
}

funcDeclaration()
funcExpression()

// Arrow Function

const arrowFunc = () => {
  console.log('This is a arrow function')
}

arrowFunc()


function addTwoNums(x, y) { // x and y are parameters
  return x + y;
}

console.log(addTwoNums(25, 100)); // example 1; 25 and 100 are arguments

let answer = addTwoNums(10, 5); // example 2; 10 and 5 are arguments
console.log(answer)

console.log("-------------")


//////////////
// Exercise //
//////////////

function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);

  /* 
    This explains why we get true on line 77:

    !(n1 % 2) && !(n2 % 2);
    !(2 % 2) && !(4 % 2);
    !0 && !0
    !false && !false
    true && true
    true
  */
  /*
    This explains why we get false on line 78:

    !(n1 % 2) && !(n2 % 2);
    !(2 % 2) && !(3 % 2);
    !0 && !1
    !false && !true
    true && false
    false
  */ 
}

console.log(areBothEven(2, 4))
console.log(areBothEven(2, 3))
console.log("-------------")


////////////////
// Exercise 2 //
////////////////

function computeArea(width, height) {
  let area = width * height;
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
}

console.log(computeArea(10, 5))
console.log("-------------")


////////////////
// Exercise 3 //
////////////////

const planetHasWater = function(planet) {
  // Method 1
  if (planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars') {
    return true;
  } else {
    return false;
  }

  // Method 2
  // return planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars';  
}

console.log(planetHasWater('Earth')) // true
console.log(planetHasWater('Mars')) // true
console.log(planetHasWater('Jupiter')) // false
console.log(planetHasWater('earth')) // true
console.log(planetHasWater('MARS')) // true
console.log(planetHasWater('eArtH')) // true
console.log(planetHasWater('SATURN')) // false
console.log("-------------")


//////////////////////////////
// Parameters and Arguments //
//////////////////////////////

function numOfArgs() {
  // Every function has access to a hidden variable called `arguments` which contains a list of all of the passed in arguments
  console.log(arguments) 
}

numOfArgs()
numOfArgs('bryan')
numOfArgs('bryan', 2, true)
console.log("-------------")

function getDevObject1(name) {
  let skills = [];

  for (let i = 1; i < arguments.length; i++) {
    skills.push(arguments[i]);
  }

  return {
    devName: name,
    jobSkills: skills
  };
}

function getDevObject2() {
  let skills = [];

  for (let i = 1; i < arguments.length; i++) {
    skills.push(arguments[i]);
  }

  return {
    devName: arguments[0],
    jobSkills: skills
  };
}

console.log(getDevObject1('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery'))
console.log(getDevObject2('Jason', 'Node', 'Express', 'React', 'Machine Learning'))
console.log("-------------")


/////////////////////
// Rest Parameters //
/////////////////////

function getDevObject3(name, ...skills) {
  console.log(skills)

  return {
    devName: name,
    jobSkills: skills
  };
}

console.log(getDevObject3('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery'))
console.log("-------------")


////////////////////////
// Default Parameters //
////////////////////////

// Older method

function setColor1(bicycle, color) {
  // set color to 'purple' if not provided
  bicycle.color = color || 'purple';
  console.log(bicycle)
}

setColor1({}, 'blue');  // sets color to blue
setColor1({});  // sets color to purple by default
console.log("-------------")

// Newer method

function setColor2(bicycle, color = 'purple') {
  bicycle.color = color;
  console.log(bicycle);
}

setColor2({}, 'red')
setColor2({})
console.log("-------------")


////////////////////////////////////////
// Functions as Arguments (Callbacks) //
////////////////////////////////////////

const colors = ['red', 'green', 'blue'];

colors.forEach(function(color) {
  console.log(color);
})

colors.forEach((color) => {
  console.log(color);
})
console.log("-------------")


//////////////////////////////////
// Immediately Invoked Function //
//////////////////////////////////

// The code below won't work here on node for whatever reason. Works on the DevTools console though

// (function() {
//   console.log("I'm an IFE")
// })();


//////////////
// Hoisting //
//////////////

console.log(name); // Output: undefined
var name = 'bryan';
console.log(name); // Output: 'bryan'

// console.log(anotherName); // Output: ReferenceError
let anotherName = 'jordan';
console.log(anotherName); // Output: 'jordan'
console.log("-------------")


///////////////////////
// Pass by Reference //
///////////////////////

let myVar = { value: 20, type: 'Number' }

function passBy(x) {
  return x.value = x.value * 20;
}

console.log(myVar); // { value: 20, type: 'Number' }
passBy(myVar); // the function-scoped variable x is set to the same memory location as myVar
console.log(myVar);  // { value: 400, type: 'Number' }