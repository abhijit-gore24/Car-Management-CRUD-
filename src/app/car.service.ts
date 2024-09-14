import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Car } from './car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private baseUrl = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl);
  }

  getCarById(id: string): Observable<Car> { // Change number to string
    return this.http.get<Car>(`${this.baseUrl}/${id}`);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.baseUrl, car)
      .pipe(catchError(this.handleError));
  }

  updateCar(id: string, car: Car): Observable<Car> { // Change number to string
    return this.http.put<Car>(`${this.baseUrl}/${id}`, car)
      .pipe(catchError(this.handleError));
  }

  deleteCar(id: string): Observable<void> { // Change number to string
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
