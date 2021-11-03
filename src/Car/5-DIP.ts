// Dependency Inversion Principle
abstract class Car5 {
    run(): void { };
}

class BWM extends Car5 {
    run(): void {
        console.log(`Running BWM`)
    }
}

class VinFast extends Car5 {
    run(): void {
        console.log(`Running VinFast`)
    }
}

class Driver {
    active(car: Car5) {
        car.run();
    }
}

let driver = new Driver()
driver.active(new BWM())
driver.active(new VinFast())