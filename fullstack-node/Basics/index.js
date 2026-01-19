const operations = require('./module');
// Another way to impor the module
// const { add, multiply } = require('./module');
function printMessage(message) {
    console.log(message);
}
printMessage("Hello World!");

console.log("Sum: ",operations.add(5, 3)); // Outputs: 8
// console.log("Sum: ", add(5, 3)); // Outputs: 8 /Using the other way to import module
console.log("Multiply: ",operations.multiply(5, 3)); // Outputs: 15
// console.log("Multiply: ", multiply(5, 3)); // Outputs: 15 /Using the other way to import module