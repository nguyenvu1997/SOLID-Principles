import { SIP_Animal } from "./1-SIP.js"
import { CanFly } from "./4-ISP.js"

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