import { EmployeeInterface, SalaryInterface } from "./4-ISP.js";

// Dependency Inversion Principle
class DIP_Employee implements EmployeeInterface, SalaryInterface {
    information(): void { };
    updateInformation(): void { };
    hoursWork(): void { };
    calculateSalary(): void { };
    paidSalary(): void { };
}

class DIP_Staff extends DIP_Employee {
    isPaidSalary: boolean = false;
    paidSalary(): void {
        this.isPaidSalary = true;
        console.log('Paid Salary');
    };
}

class DIP_Developer extends DIP_Employee {
    isPaidSalary: boolean = false;
    paidSalary(): void {
        this.isPaidSalary = true
        console.log('Paid Salary')
    };
}

class Employer {
    paySalary(employee: DIP_Employee) {
        employee.paidSalary();
    }
}

let employer = new Employer();
employer.paySalary(new DIP_Staff())
employer.paySalary(new DIP_Developer())