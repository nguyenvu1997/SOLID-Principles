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
export {};
