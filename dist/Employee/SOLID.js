// OOP
class Employee {
    constructor(titleName, salary) {
        this.titleName = titleName;
        this.salary = salary;
    }
    information() {
        console.log(`${this.titleName}-${this.salary}`);
    }
    calculateSalary() {
        if (this.titleName == 'Intern') {
            this.tax = 0;
        }
        else {
            this.tax = 0.1;
        }
        let netSalary = this.salary - this.salary * this.tax;
        console.log(netSalary);
        return netSalary;
    }
}
let employeeA = new Employee('Staff', 8000);
employeeA.information();
employeeA.calculateSalary();
let employeeB = new Employee('Intern', 3000);
employeeB.information();
employeeB.calculateSalary();
// Single Responsibility Principle
class SIP_Employee {
    constructor(titleName, salary) {
        this.titleName = titleName;
        this.salary = salary;
        this.tax = 0.1;
    }
    information() {
        console.log(`${this.titleName}-${this.salary}`);
    }
}
function calculateSalary(employee) {
    if (employee.titleName == 'Intern') {
        employee.tax = 0;
    }
    let netSalary = employee.salary - employee.salary * employee.tax;
    console.log(netSalary);
    return netSalary;
}
let SIP_employeeA = new SIP_Employee('Staff', 8000);
SIP_employeeA.information();
calculateSalary(SIP_employeeA);
let SIP_employeeB = new SIP_Employee('Intern', 3000);
SIP_employeeB.information();
calculateSalary(SIP_employeeB);
// Open Close Principle
class Intern extends SIP_Employee {
    constructor(titleName, salary) {
        super(titleName, salary);
        this.tax = 0;
    }
}
function OCP_calculateSalary(employee) {
    let netSalary = employee.salary - employee.salary * employee.tax;
    console.log(netSalary);
    return netSalary;
}
let OCP_employeeA = new SIP_Employee('Staff', 8000);
OCP_employeeA.information();
OCP_calculateSalary(OCP_employeeA);
let OCP_employeeB = new Intern('Intern', 3000);
OCP_employeeB.information();
OCP_calculateSalary(OCP_employeeB);
// Liskov Substitution Principle
class Guard extends SIP_Employee {
    information() {
        console.log(`${this.titleName}-${this.salary}`);
    }
}
let guard = new Guard('Guard', 5000);
guard.information();
OCP_calculateSalary(guard);
// Dependency Inversion Principle
class DIP_Employee {
    information() { }
    ;
    updateInformation() { }
    ;
    hoursWork() { }
    ;
    calculateSalary() { }
    ;
    paidSalary() { }
    ;
}
class DIP_Staff extends DIP_Employee {
    constructor() {
        super(...arguments);
        this.isPaidSalary = false;
    }
    paidSalary() {
        this.isPaidSalary = true;
        console.log('Paid Salary');
    }
    ;
}
class DIP_Developer extends DIP_Employee {
    constructor() {
        super(...arguments);
        this.isPaidSalary = false;
    }
    paidSalary() {
        this.isPaidSalary = true;
        console.log('Paid Salary');
    }
    ;
}
class Employer {
    paySalary(employee) {
        employee.paidSalary();
    }
}
let employer = new Employer();
employer.paySalary(new DIP_Staff());
employer.paySalary(new DIP_Developer());
