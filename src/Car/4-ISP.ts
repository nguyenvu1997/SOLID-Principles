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