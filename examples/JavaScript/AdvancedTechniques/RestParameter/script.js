// Here instead of defining a fixed number of paramets we defined spread operators
function sum(...numbers){
    let total = 0;
    for(number of numbers){
        total += number;
    }
    return total;
}
console.log("Sum of parameters: "+sum(1,2,3));
console.log("Sum of parameters: "+sum(1,2,3,4,5,6));
//This function will return an array with the result of the multiplier(first param) times
//each additional parameter sent.
function multiplier(multiplier, ...numbers){
    let results = [];
    for(let num of numbers){
        results.push(num*multiplier);
    }
    return results;
}
console.log(multiplier(2,3,4,5,6,12,33));