function sum(a,b,c){
    return a+b+c;
}
const numbers = [1,2,3];
//Here we are using the spread operator to send the numbers as parameters
let results = sum(...numbers);
console.log("Addition result: "+results);
function multiply(a,b,c,d){
    return a*b*c*d;
}
const num1 = [2,3];
const num2 = [4,5];
//Here we are doing the same and using the sprea operator for multiple arrays
console.log("Multiply result: "+multiply(...num1, ...num2));