// Array Defined
let fruits = ["Apple", "Banana"];
console.log(fruits);
// Adding an element to the end of the array
fruits.push("Orange");
console.log(fruits);
// Removing the last element of the array
fruits.pop();
console.log(fruits);
// Adding an element to the begining of the array
fruits.unshift("Mango");
console.log(fruits);
// Removing the first element of the array
fruits.shift();
console.log(fruits);
// Searching for an element in the array and returning the index where it's located
fruits.push("Orange");
fruits.unshift("Mango");
console.log(fruits);
console.log(fruits.indexOf("Banana"));
// Determining if an element exist inside of an array
console.log(fruits.includes("Apple"));
console.log(fruits.includes("Kiwi"));