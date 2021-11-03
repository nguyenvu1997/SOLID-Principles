import { SIP_Animal } from "./1-SIP.js";
import { Dog } from "./2-OCP.js";

// Dependency Inversion Principle
class Person {
    order(animal: SIP_Animal): void {
        animal.speak();
    }
}

let person = new Person();
person.order(new Dog())