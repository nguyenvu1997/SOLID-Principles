// Interface segregation Principle
interface EmployeeInterface {
    information(): void;
    updateInformation(): void;
}

interface SalaryInterface {
    hoursWork(): void;
    calculateSalary(): void;
    paidSalary(): void;
}

export { EmployeeInterface, SalaryInterface }