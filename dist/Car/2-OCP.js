// Open Closed Principle (OCP)
class OCP_Car {
    constructor(carType, fuel) {
        this.carType = carType;
        this.fuel = fuel;
    }
    infomationCar() {
        console.log(`${this.carType} ${this.fuel}`);
    }
}
const OCP_getFuelCar = (car) => {
    console.log(car.fuel);
};
class OCP_ElectricCar extends OCP_Car {
    constructor(carType, fuel, pin) {
        super(carType, fuel);
        this.pin = pin;
    }
    infomationCar() {
        console.log(`${this.carType} ${this.fuel} ${this.pin}`);
    }
}
let OCP_suvCar = new OCP_Car('SUV', 'Gas');
OCP_suvCar.infomationCar();
OCP_getFuelCar(OCP_suvCar);
let OCP_electricCar = new OCP_ElectricCar('Electric Car', 'Electric', 'Lithium Ion');
OCP_electricCar.infomationCar();
OCP_getFuelCar(OCP_electricCar);
let OCP_dieselCar = new OCP_Car('Diesel Car', 'Diesel');
OCP_dieselCar.infomationCar();
OCP_getFuelCar(OCP_dieselCar);
