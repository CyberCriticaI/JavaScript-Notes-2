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