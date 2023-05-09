import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  getweather(input:any):Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=1dbd4623517387a989b173dc879c15c6`)
  }
}
