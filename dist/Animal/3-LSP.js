import { SIP_Animal } from "./1-SIP.js";
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
