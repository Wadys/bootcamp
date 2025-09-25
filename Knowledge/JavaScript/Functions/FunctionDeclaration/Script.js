greatPerson("John"); //Hoisted
// function Declaration
function greatPerson(name){
    console.log("Hello ", name);
}
//Fumction expression. This type of functions is not hoisted
// hoisting" refers to the behavior where the interpreter conceptually moves 
// the declarations of variables, functions, and classes to the top of their 
// respective scopes before the code is executed. This means you can use 
// these elements in your code before they are explicitly declared, with some 
// important distinctions. 
const sayGoodbye = function(name){
    console.log(`Goodbye ${name}`);
}
sayGoodbye("William");
// Arrow Function
//Do not have this context not hoisted
const add = (a,b) => {
    return a+b;
}
//Arrow function abreviated form
const multiply = (a,b) => a*b;
console.log(add(10,20));
console.log(multiply(10,20));