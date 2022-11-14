import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { RouterModule } from '@angular/router';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeeResolverService } from './employee-resolver.service';

@NgModule({
  declarations: [EmployeeslistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
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
