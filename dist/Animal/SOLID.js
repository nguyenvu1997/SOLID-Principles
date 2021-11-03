class Animal {
    speak() { }
    ;
    walk() { }
    ;
    fly() { }
    ;
    swim() { }
    ;
}
class Mammal extends Animal {
    speak() {
        console.log('The mammal says');
    }
    walk() {
        console.log('The mammal can walk');
    }
    fly() {
        console.log('The mammal can not fly');
    }
    ;
    swim() {
        console.log('Some mammal can not swim');
    }
    ;
}
// Single Responsibility Principle
class SIP_Animal {
    speak() { }
    ;
}
class SIP_Mammal extends SIP_Animal {
    speak() {
        console.log('The mammal says');
    }
    walk() {
        console.log('The mammal can walk');
    }
}
// Open Close Principle
class Dog extends SIP_Mammal {
    speak() {
        console.log('The dog says: gau gau');
    }
    walk() {
        console.log('The dog can walk');
    }
    swim() {
        console.log('The dog can swim');
    }
}
// Liskov Substitution Principle
class Bird extends SIP_Animal {
    speak() {
        console.log('The bird says: ...');
    }
}
class Eagle extends Bird {
    speak() {
        console.log('The eagle says: ...');
    }
    fly() {
        console.log('The eagle can fly');
    }
}
class Penguin extends Bird {
    speak() {
        console.log('The penguin says: ...');
    }
}
// Dependency Inversion Principle
class Person {
    order(animal) {
        animal.speak();
    }
}
let person = new Person();
person.order(new Dog());
