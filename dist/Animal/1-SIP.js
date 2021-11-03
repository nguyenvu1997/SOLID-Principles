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
export { SIP_Animal, SIP_Mammal };
