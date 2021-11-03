// OOP
class Car {
    fuel: string;
    carType: string;
    constructor(carType, fuel) {
        this.carType = carType;
        this.fuel = fuel
    }

    infomationCar() {
        console.log(this.carType)
    }

    fuelCar() {
        console.log(this.fuel)
    }
}

let suvCar = new Car('SUV', 'Gas')
suvCar.infomationCar()
suvCar.fuelCar()

let electricCar = new Car('Electric Car', 'Electric')
electricCar.infomationCar()
electricCar.fuelCar()

let dieselCar = new Car('Diesel Car', 'Diesel')
dieselCar.infomationCar()
dieselCar.fuelCar()

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

// Open Closed Principle (OCP)
class OCP_Car {
    fuel: string;
    carType: string;
    constructor(carType: string, fuel: string) {
        this.carType = carType;
        this.fuel = fuel
    }

    infomationCar() {
        console.log(`${this.carType} ${this.fuel}`)
    }
}

const OCP_getFuelCar = (car: SRP_Car) => {
    console.log(car.fuel)
}

class OCP_ElectricCar extends OCP_Car {
    pin: string;
    constructor(carType: string, fuel: string, pin: string) {
        super(carType, fuel);
        this.pin = pin;
    }

    infomationCar() {
        console.log(`${this.carType} ${this.fuel} ${this.pin}`)
    }
}

let OCP_suvCar = new OCP_Car('SUV', 'Gas')
OCP_suvCar.infomationCar()
OCP_getFuelCar(OCP_suvCar)

let OCP_electricCar = new OCP_ElectricCar('Electric Car', 'Electric', 'Lithium Ion')
OCP_electricCar.infomationCar()
OCP_getFuelCar(OCP_electricCar)

let OCP_dieselCar = new OCP_Car('Diesel Car', 'Diesel')
OCP_dieselCar.infomationCar()
OCP_getFuelCar(OCP_dieselCar)


// Normal
class Car3 {
    carType: string;
    hasVoiceControl: boolean;

    constructor(carType: string, hasVoiceControl = false) {
        this.carType = carType;
        this.hasVoiceControl = hasVoiceControl;
    }

    enableVoiceControl() {
        if (this.hasVoiceControl) {
            console.log('Enable Voice Control')
        }
        else {
            console.log('This Car Has No Voice Control')
            // throw ('This Car Has No Voice Control')
        }
    }
}

let CAR3_suv = new Car3('SUV')
CAR3_suv.enableVoiceControl()

let CAR3_electricCar = new Car3('Electric Car', true)
CAR3_electricCar.enableVoiceControl()

// Liskov Substitution Principle
interface HasVoiceControl {
    enableVoiceControl(): void;
}

class LSP_Car {
    carType: string;
    constructor(carType: string) {
        this.carType = carType;
    }
}

class LSP_VoiceControlCar extends LSP_Car implements HasVoiceControl {
    constructor(carType: string) {
        super(carType)
    }
    enableVoiceControl(): void {
        console.log('Enable Voice Control')

    }
}

let LSP_electricCar = new LSP_VoiceControlCar('Electric Car')
LSP_electricCar.enableVoiceControl();

// Violate Interface Segregation Principle
interface CarInterface {
    informationCar(): void;
    enableVoiceControl(): void;
}

// Interface Segregation Principle
interface CarInfo {
    informationCar(): void;
}

interface HasVoiceControl {
    enableVoiceControl(): void;
}

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

