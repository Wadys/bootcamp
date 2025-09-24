function bringUmbrella(isRaining){
//Function Determines if the weather requires an ubrella or not
    console.log("isRaining: ",isRaining);
    if (isRaining){
        console.log("Take an umbrella!");
    }else{
        console.log("No need for an umbrella.");
    }
}
function verifyVoter(age){
//Function Validate a user has the right age to vote.
    console.log("Age: ",age);
    if (age >= 18){
        console.log("User is eligible to vote");
    }
    else{
        console.log("User is not eligible to vote");
    }
}
function scoreToGrade(score){
// Function converts a score into a grade
    console.log("User Score: ",score);
    if (score >= 90){
        console.log("Grade A");
    }
    else if(score >= 80){
        console.log("Grade B");
    }
    else if (score >= 70)
        console.log("Grade C");
    else{
        console.log("Grade D");
    }
}
function weekendPlanning(isWeekend,isSunny){
// Helps user deside what to plan for the weekend
    console.log("isWeekend: ", isWeekend);
    console.log("isSunny: ", isSunny);
    if(isWeekend){
        if(isSunny){
            console.log("Let's go for a pickninc");
        }
        else{
            console.log("Watch a movie at home");
        }
    }
    else{
        console.log("It's a weekday and time for work!");
    }
}
function verifyNull(x){
// Verifies if the value of X is false
    if (x){
        console.log("X does not exist");
    }else{
        console.log(x)
    }
}

let isRaining = true;
bringUmbrella(isRaining);
isRaining = false;
bringUmbrella(isRaining);
console.log("isRaining: ",isRaining);

let age = 20;
verifyVoter(age);        
age = 16;
verifyVoter(age);

let score = 95;
scoreToGrade(score);
score = 85;
scoreToGrade(score);
score = 75;
scoreToGrade(score);
score = 65;
scoreToGrade(score);


let isWeekend = true;
let isSunny = false;
weekendPlanning(isWeekend,isSunny);

let x = undefined;
verifyNull(x)
x = null;
verifyNull(x)
x = "";
verifyNull(x)
x = 0;
verifyNull(x)