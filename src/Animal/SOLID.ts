abstract class Animal {
    speak(): void { };
    walk(): void { };
    fly(): void { };
    swim(): void { };
}

class Mammal extends Animal {
    speak(): void {
        console.log('The mammal says')
    }
    walk(): void {
        console.log('The mammal can walk')
    }
    fly(): void {
        console.log('The mammal can not fly')
    };
    swim(): void {
        console.log('Some mammal can not swim')
    };
}

// Violate Interface Segregation Principle
interface AnimalInterface {
    walk(): void;
    fly(): void;
    swim(): void;
}

// Interface Segregation Principle
interface CanWalk {
    walk(): void;
}

interface CanFly {
    fly(): void;
}

interface CanSwim {
    swim(): void;
}

// Single Responsibility Principle
abstract class SIP_Animal {
    speak(): void { };
}

class SIP_Mammal extends SIP_Animal implements CanWalk {
    speak(): void {
        console.log('The mammal says')
    }
    walk(): void {
        console.log('The mammal can walk')
    }
}

// Open Close Principle
class Dog extends SIP_Mammal implements CanSwim {
    speak(): void {
        console.log('The dog says: gau gau')
    }
    walk(): void {
        console.log('The dog can walk')
    }
    swim(): void {
        console.log('The dog can swim')
    }
}

// Liskov Substitution Principle
class Bird extends SIP_Animal {
    speak(): void {
        console.log('The bird says: ...')
    }
}

class Eagle extends Bird implements CanFly {
    speak(): void {
        console.log('The eagle says: ...')
    }
    fly(): void {
        console.log('The eagle can fly')
    }
}

class Penguin extends Bird { // The Penguin Can Not Fly
    speak(): void {
        console.log('The penguin says: ...')
    }
}

// Dependency Inversion Principle
class Person {
    order(animal: SIP_Animal): void {
        animal.speak();
    }
}

let person = new Person();
person.order(new Dog())