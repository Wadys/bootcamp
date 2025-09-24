let multipleLineString = "This is a \n multiple line string";
console.log(multipleLineString);
let simpleLineString = "This is not a multiple line string";
console.log(simpleLineString);
let multipleLineString2 = `This is also a 
multiple line string`;
console.log(multipleLineString2);
let firstname = "Alice";
let greeting = "Hello " + firstname;
console.log(greeting);
//This was one way to solve it this is how we will do it with string interpolation
let greeting1 = `Hello ${firstname}`;
console.log(greeting1);
let x = 5;
let y = 10;
let sum = `The sum of ${x} + ${y} = ${x+y}`;
console.log(sum);
// Using the `` for use of '' and ""
let EscChar = `String "Double Quotes" and 'Single Quotes'`;
console.log(EscChar);
// this is the old way of doing it
let EscapeChar = "String \"Double Quotes\" and 'Single Quotes'";
console.log(EscapeChar);