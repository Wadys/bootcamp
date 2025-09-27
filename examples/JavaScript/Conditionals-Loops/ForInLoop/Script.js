let fruits = ['Apple',"Bananas","Orange","Mango"];
for (let i in fruits){
    console.log(fruits[i])
}
let car = {
    brand: "BMW",
    model: "7 Series",
    color: "White",
    make: 2024,
    owner: "John",
};
for(let property in car){
    console.log(car[property])
}
for(let property in car){
    console.log(`Property: ${property}, value: ${car[property]}`)
}