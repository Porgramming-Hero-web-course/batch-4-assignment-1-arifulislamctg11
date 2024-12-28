"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
    // Example usage:
    const myCar = new Car("Toyota", "Corolla", 2015);
    console.log(`My car is ${myCar.getCarAge()} years old.`); // Example: "My car is 9 years old."
}
