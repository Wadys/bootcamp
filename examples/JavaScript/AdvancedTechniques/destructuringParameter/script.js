// *************Variable Declarations*****************
let car = {
    Brand: "BMW",
    Model: "7 Series",
    Color: "White",
    Make: 2024
}
const scores = [95, 85, 75, 54, 67, 78, 78];

// *************Function Definitions*****************
function printDetails(carObject){
    console.log("Model:", carObject.Model);
    console.log("Brand:", carObject.Brand);
    console.log("Color:", carObject.Color);
    console.log("Make:", carObject.Make);
}
function printScores([first, second, third, ...rest]){
    console.log("Top Score:", first);
    console.log("Second Score:", second);
    console.log("Third Score:", third);
    console.log("Other Scores:", rest);
};
// *************Main Code*****************
console.log("Destructuring Car object:");
printDetails(car); // Destructuring the carObject parameter
console.log("Destructuring Scores array:");
printScores(scores);