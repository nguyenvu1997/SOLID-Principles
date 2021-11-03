// Normal
class Car3 {
    constructor(carType, hasVoiceControl = false) {
        this.carType = carType;
        this.hasVoiceControl = hasVoiceControl;
    }
    enableVoiceControl() {
        if (this.hasVoiceControl) {
            console.log('Enable Voice Control');
        }
        else {
            console.log('This Car Has No Voice Control');
            // throw ('This Car Has No Voice Control')
        }
    }
}
let CAR3_suv = new Car3('SUV');
CAR3_suv.enableVoiceControl();
let CAR3_electricCar = new Car3('Electric Car', true);
CAR3_electricCar.enableVoiceControl();
class LSP_Car {
    constructor(carType) {
        this.carType = carType;
    }
}
class LSP_VoiceControlCar extends LSP_Car {
    constructor(carType) {
        super(carType);
    }
    enableVoiceControl() {
        console.log('Enable Voice Control');
    }
}
let LSP_electricCar = new LSP_VoiceControlCar('Electric Car');
LSP_electricCar.enableVoiceControl();
