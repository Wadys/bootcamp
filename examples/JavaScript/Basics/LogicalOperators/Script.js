let num1 = 11;
let str1 = "10";

// ! NOT

// Logical AND (all conditions to be true)
console.log(num1 < 12 && str1 > 8);

//  OR || (one of the conditions is true)
console.log(num1 > 12 || str1 < 8 || num1 === 10);

// Nullish Coalescing (??)
let name = null; // !null !undefined
console.log(name ?? "Default value");

let age = 25;
console.log(age ?? 10);

// Nullish assignment (??=)
let x = "John";
x ??= 10;
console.log(x);