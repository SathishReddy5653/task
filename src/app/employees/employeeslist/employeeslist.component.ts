import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css'],
})
export class EmployeeslistComponent implements OnInit {
  pageTitle = 'Employees Information';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  employees: Employee[] = [];

  constructor(
    private dataService: DataServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataService.getEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
