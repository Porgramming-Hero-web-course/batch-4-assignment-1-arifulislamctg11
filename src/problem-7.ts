{
    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }

    // Example usage:
    const myCar = new Car("Toyota", "Corolla", 2015);
    console.log(`My car is ${myCar.getCarAge()} years old.`); // Example: "My car is 9 years old."

}