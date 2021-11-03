// Single Responsibility Principle
class SRP_Car {
    fuel: string;
    carType: string;
    constructor(carType, fuel) {
        this.carType = carType;
        this.fuel = fuel
    }

    infomationCar() {
        console.log(this.carType)
    }
}

const getFuelCar = (car: SRP_Car) => {
    console.log(car.fuel)
}

console.log('Single Responsibility Principle')

let SRP_suvCar = new SRP_Car('SUV', 'Gas')
SRP_suvCar.infomationCar()
getFuelCar(SRP_suvCar)

let SRP_electricCar = new SRP_Car('Electric Car', 'Electric')
SRP_electricCar.infomationCar()
getFuelCar(SRP_electricCar)

let SRP_dieselCar = new SRP_Car('Diesel Car', 'Diesel')
SRP_dieselCar.infomationCar()
getFuelCar(SRP_dieselCar)