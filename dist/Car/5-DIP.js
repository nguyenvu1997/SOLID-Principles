// Dependency Inversion Principle
class Car5 {
    run() { }
    ;
}
class BWM extends Car5 {
    run() {
        console.log(`Running BWM`);
    }
}
class VinFast extends Car5 {
    run() {
        console.log(`Running VinFast`);
    }
}
class Driver {
    active(car) {
        car.run();
    }
}
let driver = new Driver();
driver.active(new BWM());
driver.active(new VinFast());
