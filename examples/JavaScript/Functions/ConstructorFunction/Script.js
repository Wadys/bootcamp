function Car(brand,model, color,year, owner){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this. year = year;
    this.owner = owner;
}
function Owner(firstname, lastName, age, isRegistered = false){
    this.firstname = firstname;
    this.lastName = lastName;
    this.age = age;
    this.isRegistered = isRegistered;
    this.getFullName = function(){
        return `${this.firstname} ${this.lastName}`
    }
} 
let owner1 = new Owner("Allan", "Scott", 35);
let car1 = new Car("BMW", "7 Series", "White",2024,owner1);
let owner2 = new Owner("Emma", "Watson", 25, true);
let car2 = new Car("Audi","A6","Black",2021, owner2);
console.log(car1);
console.log(car2);
console.log(car1.owner.getFullName());
console.log(car2.owner.getFullName());