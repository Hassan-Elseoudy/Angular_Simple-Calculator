import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  /**
  * This function is used to get 2 numbers and add them upon click
  * 
  * @param firstNumber First Number to be added.
  * @param secondNumber Second Number to be added.
  */

  addTwoNumbers(firstNumber: string, secondNumber: string): Observable<Object> {
    return this.http.get(`http://localhost:3000/api/calc?firstNumber=${firstNumber}&secondNumber=${secondNumber}`);
  }

  /**
   * This function is used when we want to average some numbers, we should get them upon click
   * @param numbers array of numbes to be averaged.
   */

  averageNumbers(numbers: Array<string>): Observable<Object> {
    return this.http.post(`http://localhost:3000/api/calc`, { numbers });
  }


}
