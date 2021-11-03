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
