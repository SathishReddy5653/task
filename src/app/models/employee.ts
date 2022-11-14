export interface Employee {
    "id"?:number,
    "name":string,
    "age":number,
    "country":string,
    "salary":number
}

export interface EmployeeResolved {
    employee: Employee | null;
    error?: string;
  }
  