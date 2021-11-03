import { Dog } from "./2-OCP.js";
// Dependency Inversion Principle
class Person {
    order(animal) {
        animal.speak();
    }
}
let person = new Person();
person.order(new Dog());
