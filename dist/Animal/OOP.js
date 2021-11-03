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
