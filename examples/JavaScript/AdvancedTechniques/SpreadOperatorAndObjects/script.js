let car = {
    brand: "BMW",
    model: "7 Series",
    color: "White",
    make: 2024,
}
let updateCar = {...car, color: "Black"};//Using the Spread operator here 
// generates a new object witht the details of the car but with an u[date for the
// color field] 
console.log("Original Car: ");
console.log(car);
console.log("Updated Car: ");
console.log(updateCar);
let owner = {
    name : "John",
    age : 30,
};
let carWithOwner = {...car,...owner};//Here we will merge the fields for both 
// objects
console.log("Original Car: ");
console.log(car);
console.log("Car with Owner: ");
console.log(carWithOwner);
let nestedOwner = {...car, owner:{...owner}};
console.log("Original Car: ");
console.log(car);
console.log("Owner: ");
console.log(owner);
console.log("Car with nested owner details: ");
console.log(nestedOwner);
let updatedCar = {
    make: 2025,
    color: "Red",
};
let finalCar = {...car, ...updatedCar}; //By merging this two objects we have an
// updated version of it
console.log("Original Car: ");
console.log(car);
console.log("Updated Car: ");
console.log(finalCar);