import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from './models/employee';
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private employeesUrl = 'api/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getEmployee(id: number): Observable<Employee> {
    if (id === 0) {
      return of(this.initializeEmployee());
    }
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap((data) => console.log('getEmployee: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );

    // getEmployee(id: number): Observable<Employee> {
    //   if (id === 0) {
    //     return of(this.initializeProduct());
    //   }
    //   const url = `${this.productsUrl}/${id}`;
    //   return this.http.get<Employee>(url).pipe(
    //     tap((data) => console.log('getProduct: ' + JSON.stringify(data))),
    //     catchError(this.handleError)
    //   );
  }

  // createProduct(product: Product): Observable<Product> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   // Required for the in memory web API to assign a unique id
  //   product.id = null;
  //   return this.http.post<Product>(this.productsUrl, product, { headers })
  //     .pipe(
  //       tap(data => console.log('createProduct: ' + JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  // }

  // deleteEmployee(id: number): Observable<{}> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const url = `${this.productsUrl}/${id}`;
  //   return this.http.delete<Employee>(url, { headers })
  //     .pipe(
  //       tap(data => console.log('deleteProduct: ' + id)),
  //       catchError(this.handleError)
  //     );
  // }

  // updateProduct(product: Product): Observable<Product> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const url = `${this.productsUrl}/${product.id}`;
  //   return this.http.put<Product>(url, product, { headers })
  //     .pipe(
  //       tap(() => console.log('updateProduct: ' + product.id)),
  //       // Return the product on an update
  //       map(() => product),
  //       catchError(this.handleError)
  //     );
  // }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }

  private initializeEmployee(): Employee {
    // Return an initialized object
    return {
      id: 5,
      name: 'sathish',
      age: 25,
      salary: 15000,
      country: 'India',
    };
  }
}
