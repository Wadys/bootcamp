let numbers = [1,2,3];
let moreNumbers = [4,5,6];
let allNumbers = [...numbers,...moreNumbers]; //The spread operator can be used to combine 2 arrays and cobinethem into one
let fruits = ["Apple","Bananas","Orange"]; //We can also use the spread operator with inclusions to the list
let moreFruits = ["Grapes", ...fruits, "Pineapple"]
console.log(allNumbers);
console.log(moreFruits);
let nestedArray = [
    [1,2],
    [3,4],
];
let copiedArray = [...nestedArray]//This is a shallow copy
console.log("Original Array: "+nestedArray);
console.log("Copied Array: "+copiedArray);
copiedArray[0][0] = [5];
console.log("After Modiffing the copied Array:");
console.log("Original Array: "+nestedArray);
console.log("Copied Array: "+copiedArray);
console.log("Creating a new Array using a for cycle and spread constructor:")
let copiedArray2 =[];
for (array of nestedArray){
    copiedArray2.push([...array])
}
console.log("Original Array: "+nestedArray);
console.log("Copied Array2: "+copiedArray2);
copiedArray2[0][0] = [99];
console.log("After Modiffing the copied Array:");
console.log("Original Array2: "+nestedArray);
console.log("Copied Array2: "+copiedArray2);