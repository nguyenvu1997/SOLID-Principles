import { SIP_Employee } from "./1-SIP.js";

// Open Close Principle
class Intern extends SIP_Employee {
    titleName: string;
    salary: number;
    tax: number;
    constructor(titleName: string, salary: number) {
        super(titleName, salary)
        this.tax = 0;
    }
}

function OCP_calculateSalary(employee: SIP_Employee): number {
    let netSalary = employee.salary - employee.salary * employee.tax
    console.log(netSalary)
    return netSalary
}

let OCP_employeeA = new SIP_Employee('Staff', 8000)
OCP_employeeA.information();
OCP_calculateSalary(OCP_employeeA);

let OCP_employeeB = new Intern('Intern', 3000);
OCP_employeeB.information();
OCP_calculateSalary(OCP_employeeB);

export { OCP_calculateSalary }