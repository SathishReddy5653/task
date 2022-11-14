import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of, map, catchError } from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { EmployeeResolved } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeResolverService implements Resolve<EmployeeResolved> {
  constructor(private dataService: DataServiceService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<EmployeeResolved> {
    const id = Number(route.paramMap.get('id'));
    if (isNaN(id)) {
      const message = `Product id was not a number: ${id}`;
      console.error(message);
      return of({ employee: null, error: message });
    }
    return this.dataService.getEmployee(+id).pipe(
      map((employee) => ({ employee, error: '' })),
      catchError((error) => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of({ employee: null, error: message });
      })
    );
  }
}
