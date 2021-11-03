// OOP
class Car {
    constructor(carType, fuel) {
        this.carType = carType;
        this.fuel = fuel;
    }
    infomationCar() {
        console.log(this.carType);
    }
    fuelCar() {
        console.log(this.fuel);
    }
}
let suvCar = new Car('SUV', 'Gas');
suvCar.infomationCar();
suvCar.fuelCar();
let electricCar = new Car('Electric Car', 'Electric');
electricCar.infomationCar();
electricCar.fuelCar();
let dieselCar = new Car('Diesel Car', 'Diesel');
dieselCar.infomationCar();
dieselCar.fuelCar();
