let fruits = ["Apple", "Banana","Orange", "Mango"];
let numbers = new Array (10, 20, 30, 40, 50); //Creating an array using the new function    
console.log(fruits);
console.log(fruits[0]);
let newFruits = [...fruits];
fruits.push("Grapes");
console.log("New Fruits:",newFruits); //New fruits is not impacted 
// by the addition to original array
console.log("Fruits:",fruits);
fruits.pop(); //Removing last element
console.log("Fruits:",fruits);
fruits.pop(); //Again removing the last element
console.log("Fruits:",fruits);
