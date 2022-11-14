import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './employees/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesModule } from './employees/employees.module';
import { EmployeeData } from './employees/employee-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    EmployeesModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(EmployeeData),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
