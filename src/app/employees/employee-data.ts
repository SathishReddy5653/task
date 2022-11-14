import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Employee } from '../models/employee';

export class EmployeeData implements InMemoryDbService {
  createDb(): { employees: Employee[] } {
    const employees: Employee[] = [
      {
        id: 1,
        name: 'Sathish',
        age: 24,
        country: 'India',
        salary: 18000,
      },
      {
        id: 2,
        name: 'Praveen Reddy',
        age: 27,
        country: 'India',
        salary: 30000,
      },
      {
        id: 3,
        name: 'Sandeep Reddy',
        age: 26,
        country: 'India',
        salary: 25000,
      },
      {
        id: 4,
        name: 'Shekar',
        age: 23,
        country: 'India',
        salary: 35000,
      },
      {
        id: 5,
        name: 'Ram Mohan Reddy Baddam',
        age: 24,
        country: 'Canada',
        salary: 1800000,
      },
      {
        id: 6,
        name: 'Indeevara',
        age: 24,
        country: 'America',
        salary: 150000,
      },
      {
        id: 7,
        name: 'Tarun',
        age: 24,
        country: 'India',
        salary: 30000,
      },
      {
        id: 8,
        name: 'Ajay Kiran',
        age: 24,
        country: 'India',
        salary: 70000,
      },
      {
        id: 9,
        name: 'Jagadeesh',
        age: 27,
        country: 'India',
        salary: 40000,
      },
      {
        id: 10,
        name: 'Ramulamma',
        age: 68,
        country: 'India',
        salary: 150000,
      },
    ];

    return { employees };
  }
}
