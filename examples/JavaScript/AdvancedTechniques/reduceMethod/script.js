const numbers = [5, 10, 15, 20, 25, 30];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Array sum:", sum);

const items = [
    { name: "apple", type: "fruit", quantity: 10 },
    { name: "banana", type: "fruit", quantity: 5 },
    { name: "carrot", type: "vegetable", quantity: 8 },
];

const inventory = items.reduce((accumulator, item) => {
    accumulator[item.type] = (accumulator[item.type] || 0) + item.quantity;
    return accumulator;
}, {});

console.log("Inventory: ", inventory);