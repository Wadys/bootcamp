function greet(name = "Guest"){
    console.log(`Hello, ${name}!!!`);//Instead of printing blank if the parameter is 
// not sent then defaul would print Guest.
}
greet();
greet("Mela");
function orderCoffee(size="medium", type = "black"){
    console.log(`You ordered a ${size} ${type} coffee!`);
}
orderCoffee();
orderCoffee("small");
orderCoffee("small", "latte");