function calculator(num1,operator,num2){
    console.log("Test")
    let results;
    switch (operator){
        case "+":
            results = num1+num2;
            console.log("Result of addition: ", results);
            break;
        case "-":
            results = num1-num2;
            console.log("Result of substraction: ", results);
            break;
        case "*":
            results = num1*num2;
            console.log("Result of multiplication: ", results);
            break;
        case "/":
        
            results = num1/num2;
            console.log("Result of division: ", results);
            break;
        default:
            console.log("Invalid Operator entered");
    }
}
let num1 = 10;
let num2 = 5;
let operator = "+";
calculator(num1,operator,num2)
operator = "-";
calculator(num1,operator,num2)
operator = "*";
calculator(num1,operator,num2)
operator = "/";
calculator(num1,operator,num2)
operator = "[]";
calculator(num1,operator,num2)