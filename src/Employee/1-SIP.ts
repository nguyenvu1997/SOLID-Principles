// Single Responsibility Principle
class SIP_Employee {
    titleName: string;
    salary: number;
    tax: number;
    constructor(titleName: string, salary: number) {
        this.titleName = titleName;
        this.salary = salary;
        this.tax = 0.1;
    }

    information(): void {
        console.log(`${this.titleName}-${this.salary}`)
    }
}
function calculateSalary(employee: SIP_Employee): number {
    if (employee.titleName == 'Intern') {
        employee.tax = 0;
    }
    let netSalary = employee.salary - employee.salary * employee.tax
    console.log(netSalary)
    return netSalary
}

let SIP_employeeA = new SIP_Employee('Staff', 8000)
SIP_employeeA.information();
calculateSalary(SIP_employeeA);

let SIP_employeeB = new SIP_Employee('Intern', 3000);
SIP_employeeB.information();
calculateSalary(SIP_employeeB);

export { SIP_Employee }