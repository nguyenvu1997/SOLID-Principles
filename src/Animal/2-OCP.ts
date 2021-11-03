import { SIP_Mammal } from "./1-SIP.js"
import { CanSwim } from "./4-ISP.js"

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

export { Dog }