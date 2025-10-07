const operations = require('./module');

function printMessage(message) {
    console.log(message);
}
printMessage("Hello World!");

console.log("Sum: ",operations.add(5, 3)); // Outputs: 8
console.log("Multiply: ",operations.multiply(5, 3)); // Outputs: 15

