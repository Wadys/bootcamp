const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number squared
const squaredNumbers = numbers.map((num , index) => num * num);
console.log('Squared Numbers:', squaredNumbers); // Output: [1, 4, 9, 16, 25]

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
];

const userWithBirthYear = users.map((user) =>({
    ...user,
    birthYear: new Date().getFullYear() - user.age
}));
console.log('User with Birth Year:', userWithBirthYear);