let car = {
    brand: "BMW",
    model: "7 Series",
    color: "White",
    year: 2024
};

//This will destructure the object and create variables for each property
console.log("Variable for each property:");
let { brand, model, year} = car;
console.log(brand); // "BMW"
console.log(model); // "7 Series"
console.log(year); // 2024

//You can also rename the variables while destructuring
console.log("Using renaming variables:");
const { brand: carBrand, model: carModel } = car;
console.log(carBrand); // Output: "BMW"
console.log(carModel); // Output: "7 Series"
//You can set default values while destructuring

const car1 = {
    brand: "BMW",
    model: "7 Series",
    color: "Red",
};

const { color1 = "Black", make1 = 2023} = car1;
console.log(color1); // Variable with "Red" assigned(as it exists in the object)"
console.log(make1); // Variable with 2023 assigned(default value as it doesn't exist in the object)"
console.log("car1:", car1);

const car2 = {
    brand: "BMW",
    model: "7 Series",
    color: "White",
};
const {color: carColor = "Black", make2 = 2023} = car2;
console.log("car2:", car2);
console.log(carColor); // "White (as it exists in the object)"
console.log(make2); // "2023 (default value as it doesn't exist in the object)"

const carWithOwner = {
    brand: "BMW",
    model: "7 Series",
    color: "White",
    owner: {
        name: "John",
        age: 30,
    },
};
const { owner: { name: ownerName, age: ownerAge } } = carWithOwner;
console.log(ownerName); // "John"
console.log(ownerAge); // 30

const{owner, ...carDetails} = carWithOwner;
console.log("Owner:", owner);
console.log("Car Details:", carDetails); // Function parameter destructuring

owner.name = "Mary"; // Modifying the owner's name
console.log("Modified Owner Name:", owner.name);
console.log("carWithOwner after modifying owner name:", carWithOwner);
brand = "Audi"; // Modifying the brand variable
console.log("Modified Brand Variable:", brand);
console.log("carWithOwner after modifying brand variable:", carWithOwner);