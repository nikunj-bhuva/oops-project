// que 1 //

// class BankAccount {
//     constructor(accountNumber, balance) {
//         this.accountNumberObj = accountNumber;
//         this.balanceObj = balance;
//     }
//     deposit(amount) {
//         this.balanceObj = this.balanceObj + amount;
//         console.log(`Your deposit amount is: ${this.balanceObj}`);
//     }
//     withDraw(amount) {
//         this.balanceObj = this.balanceObj - amount;
//         console.log(`Your withdraw money is: ${this.balanceObj}`);
//     }
// }
// let bankAccObj = new BankAccount(123456, 50000);
// bankAccObj.deposit(10000);
// bankAccObj.withDraw(5000);

// que 2 //

// class Vehicle {
//     constructor(make, model, year) {
//         this.makeValue = make;
//         this.modelValue = model;
//         this.yearValue = year;
//     }
//     displayVehicleDetails() {
//         console.log(`Make: ${this.makeObj} | Model: ${this.modelObj} | Year: ${this.yearObj}`);
//     }
// }
// class Car extends Vehicle {
//     constructor(make, model, year, doors) {
//         super(make, model, year)
//         this.doorsValue = doors;
//     }
//     displayVehicleDetails() {
//         console.log(`Make: ${this.makeValue} | Model: ${this.modelValue} | Year: ${this.yearValue} | doors: ${this.doorsValue}`);
//     }
// }

// let carObj = new Car("Honda", "Civic", 2018, 4);
// carObj.displayVehicleDetails();

// que 3 //

// class Rectangle {
//     constructor(width, height) {
//         this.widthValue = width;
//         this.heightValue = height;
//     }
//     rectangleArea() {
//         console.log("Rectangle area is: ", this.widthValue * this.heightValue);
//     }
//     rectanglePerimeter() {
//         console.log("Rectangle perimeter is: ", (this.widthValue + this.heightValue) * 2);
//     }
// }
// let rectangleObj = new Rectangle(50, 60);
// rectangleObj.rectangleArea();
// rectangleObj.rectanglePerimeter();

// que 4 //

class Person {
    constructor(name, age, country) {
        this.nameValue = name;
        this.ageValue = age;
        this.countryValue = country;
    }
    displayDetails() {
        return `Person name is: ${this.nameValue} Person age is: ${this.ageValue} Person countryName is: ${this.countryValue}`
    }
}

let personObj = new Person("Nikunj", 21, "India");
let personObj2 = new Person("Het", 20, "Canada");
console.log(personObj.displayDetails());
console.log(personObj2.displayDetails());