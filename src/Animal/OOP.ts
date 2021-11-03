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