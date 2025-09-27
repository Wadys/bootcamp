const fruits = ["Apple","Banana","Orange"];
//You Can assig variables one by one from the array
let firstFruit = fruits[0];
let secondFruit = fruits[1];
let thirdFruit = fruits[2];
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);
//This is a way to assign the contet of the array to separate variables in a
//simpler way
let [fruit1,fruit2,fruit3] = fruits;
console.log("Simplar Way:");
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
const numbers = [1,2,3,4,5,6];
let [firstNumber, ,thirdNumber] = numbers;
console.log("1st "+firstNumber);
console.log("3rd "+thirdNumber);
const nestedArray = [1,[2,3],4];
const [first, [second,third], fourth] = nestedArray;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);