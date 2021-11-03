// OOP
class Employee {
    titleName: string;
    salary: number;
    tax: number;
    constructor(titleName: string, salary: number) {
        this.titleName = titleName
        this.salary = salary
    }

    information(): void {
        console.log(`${this.titleName}-${this.salary}`)
    }

    calculateSalary(): number {
        if (this.titleName == 'Intern') {
            this.tax = 0;
        } else {
            this.tax = 0.1;
        }
        let netSalary = this.salary - this.salary * this.tax
        console.log(netSalary)
        return netSalary
    }
}

let employeeA = new Employee('Staff', 8000)
employeeA.information();
employeeA.calculateSalary();

let employeeB = new Employee('Intern', 3000);
employeeB.information();
employeeB.calculateSalary();


