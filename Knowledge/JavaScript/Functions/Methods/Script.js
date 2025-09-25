let car = {
    brand: "BMW",
    model: "7 Series",
    color: "White",
    make: 2024,
    owner: "John Smith",
    describeCar: function(){
        return `This car is a ${this.make} ${this.brand} ${this.model}, colored ${this.color} and it belongs to ${this.owner}.`},
};
console.log(car.describeCar());
let calculator1 = {
        num1 : 3,
        num2 : 4,
        // add(){}
        // add: () => {console.log(this);}, it can't be defined like this
        // Instead:
        add(){
            console.log(this);
        } 
};
let calculator2 = {
    // Defining methods with parameters:
        add(num1, num2){
            return num1 + num2;
        },
        substract(num1, num2){
            return num1 - num2;
        },
};
calculator1.add();
console.log(calculator2.add(10,5));
console.log(calculator2.substract(10,5))