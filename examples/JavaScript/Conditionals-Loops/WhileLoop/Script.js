let count = 0
while (count < 5){
    console.log("Count is: ", count);
    count++; //Whit out this line, this would be an infinite loop 
}
let number = 0;
while(number < 1 || number > 10){
    console.log("Number is: ", number);
    number++;
}
i = 6;
do{
    console.log("Do while:", i);
    i++
}while(i<7) //Runs the process at least once
