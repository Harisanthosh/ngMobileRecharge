import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MobilePlan } from './mobile-plan';

@Injectable()
export class DataAccessService {
  urlDth: string = "http://localhost:5060/dthPlans";
  urlMobile: string = "http://localhost:5060/mobilePlans";
  urlBband: string = "http://localhost:5060/bbandPlans";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getDthData(): Observable<{}> {
    return this.http.get<{}>(this.urlDth);
  }
  getMobileData(): Observable<MobilePlan[]> {
    return this.http.get<MobilePlan[]>(this.urlMobile);
  }
  getMobilePlanById(id : number): Observable<MobilePlan> {
    return this.http.get<MobilePlan>(this.urlMobile+'/'+id);
  }
  onPostData(data): Observable<{}> {
    return this.http.post(this.urlMobile, data, this.httpOptions);
  }
}
