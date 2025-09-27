let currentDate = new Date();
console.log(currentDate)
let specificDate = new Date(2024,6,18); //Month Starts on 0 vs 1 So month 6 would be July not June
console.log(specificDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.toString());
console.log(currentDate.toDateString());
console.log(currentDate.toTimeString());