// This is another way(older) to create an object using New Object 
let car = {
    brand: "BMW",
    model: "7 Series",
    color: "White",
    make: 2024,
    owner: "John",
};
console.log("Original car object", car);
let carCopy = car;
carCopy.color = "Red";
console.log("Modified carCopy object", carCopy);
let newCar = {...car};
console.log("newCar", newCar);
newCar.color = "Blue";
console.log("newCar changed color", newCar);
console.log("Original car object", car);