let fruits = ['Apple',"Bananas","Orange","Mango"];
let car = {
    brand: "BMW",
    model: "7 Series",
    color: "White",
    make: 2024,
    owner: "John",
};
console.log(car[Symbol.iterator]); //Undefined Expected
console.log(fruits[Symbol.iterator]); //Funtion Value Expected
for(let fruit of fruits){
    console.log(fruit);
}
word = "JavaScript"
for(let letter of word){
    console.log(letter.toUpperCase());
}