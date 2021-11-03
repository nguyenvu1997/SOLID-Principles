import { CanWalk } from "./4-ISP.js"

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

export { SIP_Animal, SIP_Mammal }