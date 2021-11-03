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