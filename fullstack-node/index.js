// Example of using date-fns library
// const dateFns = require('date-fns');

// function printCurrentDate() {
//     console.log(dateFns.format(new Date(), 'yyyy-MM-dd'));
// }

// printCurrentDate();

// Example of using specific functions from date-fns library
// const {format, addDays, subDays} = require('date-fns');
// const now = new Date();
// console.log("Today is: ", format(now, 'dd-MM-yyyy')); //Todays Date
// console.log("Today is: ", format(now, 'yyyy-dd-MM'));//Changed format
// const nextWeek = addDays(now, 7);
// console.log("Next week: ", format(nextWeek, 'dd-MM-yyyy'));//Next week date
// const lastWeek = subDays(now, 7);
// console.log("Last week: ", format(lastWeek, 'dd-MM-yyyy')); //LAst week date

// const fs = require('fs'); //File System module
// console.log(fs);

// I am a TXT file
const fs = require('fs');
fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File contains: ", data);
});
const content = "Hellow Wordld!";
fs.writeFile("example.txt", content, (err) => {
    if (err) {
        console.log("Error writing to a file:", err);
        return;
    }
    console.log("File written successfully")
});
fs.rename("example.txt", "newExample.txt", (err) => {
    if (err) {
        console.log("Error renaming the file:", err);
        return;
    }
    console.log("File renamed successfully");
});