const numbers = [5, 10, 15, 20, 25, 30];

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 },
];
// The filter method always returns a boolean value, if condition is met
// Filter even numbers
const filteredNumbers = numbers.filter((number) => number > 10);
console.log("Filtered numbers lower than 10: "+filteredNumbers); // Output: [15, 20, 25, 30]
const olderthan25 = users.filter((user) => user.age > 25);
console.log("Users older than 25: "+olderthan25.map(user => user.name)); // Output: [Bob, Charlie, David]

const mixedNumbers = [2,3,4,10,15,20,25,30,33,35,40,45,50,43,89,33,41,27,58,60];
const evenNumbers = mixedNumbers.filter((number) => number % 2 === 0);
console.log("Filtered even numbers: "+evenNumbers); // Output: [2, 4, 10, 20, 30, 40, 50, 60]