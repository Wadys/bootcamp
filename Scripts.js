// Example of defininig all the properties of a car
let carBrand = "BMW";
let carModel = "7 Series";
let carColor = "White";
let carMake = 2024;

// All these properties belong to the same entity Car
// Types of cars will probably have all these properties
// There is a way to group all these properties of a Car into a single group or object called Car
let car = {
    brand: "BMW",
    model: "7 Series",
    color: "White",
    make: 2024,
  "car owner": "John", // Don't do this, it doesn't follow industry standards
};

// Now each property of the car can be accessed using the car Object or group
console.log("Model:", car.model);
console.log("Brand:", car.brand);
console.log("Owner:", car["car owner"]);
