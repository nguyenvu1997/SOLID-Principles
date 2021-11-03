import { SIP_Employee } from "./1-SIP.js";
import { OCP_calculateSalary } from "./2-OCP.js";
// Liskov Substitution Principle
class Guard extends SIP_Employee {
    information() {
        console.log(`${this.titleName}-${this.salary}`);
    }
}
let guard = new Guard('Guard', 5000);
guard.information();
OCP_calculateSalary(guard);
