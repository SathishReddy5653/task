import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, EmployeeResolved } from 'src/app/models/employee';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css'],
})
export class EmployeedetailComponent implements OnInit {
  pageTitle = 'Employee Details';
  employee: Employee | null = null;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const resolvedData: EmployeeResolved =
      this.route.snapshot.data['resolvedData'];
    this.errorMessage = String(resolvedData.error);
    this.onEmployeeRetrieved(resolvedData.employee);
    console.log('error message', this.errorMessage);
  }

  onEmployeeRetrieved(employee: Employee | null): void {
    this.employee = employee;

    if (this.employee) {
      this.pageTitle = `Employee Details of : ${this.employee.name}`;
    } else {
      this.pageTitle = 'No Employee found';
    }
  }

  doRouting(): void {
    this.router.navigate(['/employees/employees'], {
      queryParamsHandling: 'preserve',
      queryParams: { message: '' },
    });
    // [routerLink]="['/products']"
    // queryParamsHandling="preserve"
  }
}
