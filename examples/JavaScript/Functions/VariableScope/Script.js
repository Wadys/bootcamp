var globalVar = "globalVar";
let globalLet = "globalLet";
function checkGlobalScope(){
    console.log(globalLet);
    console.log(globalVar);
}
checkGlobalScope();
function checkLocalScope(){
    var localVar = "localVar";
    let localLet = "localLet";
    console.log(localVar);
    console.log(localLet);
}
checkLocalScope();
//console.log(localVar); //Var not defined as a local var but as a local one inside a function
//console.log(localLet); //Let not defined as a local var but as a local one inside a function
function blockScope(){
    if (true){
        var blockVar = "blockVar";
        let blockLet = "blockLet";
        console.log("InsideBlock");
        console.log(blockVar);
        console.log(blockLet);
    }
    console.log("OutsideBlock");
    console.log(blockVar);
    //console.log(blockLet);//This won't be accesible outside the block
}
blockScope();
//console.log(blockVar); //This won't be accesible outside the function
//console.log(blockLet); //This won't be accesible outside the function
function nestedkScope(){
    var outerVar = "outerVar";
    let outerLet = "outerLet";
    console.log("InsideFunction");
    console.log(outerVar);
    console.log(outerLet);
    function innerFunction(){
        var innerVar = "innerVar";
        let innerLet = "innerLet";
        console.log(outerVar);
        console.log(outerLet);
    }
    innerFunction();
}
//     console.log("OutsideBlock");
//     console.log(blockVar);
//     //console.log(blockLet);//This won't be accesible outside the block
// }
nestedkScope()