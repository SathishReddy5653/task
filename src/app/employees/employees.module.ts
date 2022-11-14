import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { RouterModule } from '@angular/router';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeeResolverService } from './employee-resolver.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [EmployeeslistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent },
      {
        path: 'employees',
        component: EmployeeslistComponent,
      },
      {
        path: ':id',
        component: EmployeedetailComponent,
        resolve: { resolvedData: EmployeeResolverService },
      },
    ]),
  ],
})
export class EmployeesModule {}
