import { SIP_Mammal } from "./1-SIP.js";
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
export { Dog };
