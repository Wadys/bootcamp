let car = {
    brand: "BMW",
    model: "7 Series",
    color: "White",
    make: 2024,
    owner: {
        name: "John",
        age: 45,
    },
};
console.log("Original car owner: ", car.owner.name);
let newCar = { ...car   };//Creates a copy of the ortiginal object //Shallow Coppy
newCar.owner.name = "Mark"
console.log("Original object owner: ", car.owner.name);
console.log("Cloned object  owner: ", newCar.owner.name);
let otherCar = structuredClone(car); //This method is not recomended beacause it doesn't works everywhere //Deep Copy
otherCar.owner.name = "Steven";
console.log("Structure object owner: ", otherCar.owner.name);
console.log(otherCar)
console.log(car)
console.log(newCar)