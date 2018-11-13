import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';
import { RegDoc } from './doc';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'http://orion:3000/api';
  response: any = {};
  private serviceResponse = new BehaviorSubject(this.response);
  regdocs = this.serviceResponse.asObservable();
  
  constructor(
    private http:HttpClient
  ) { }
  
  // getAllData(apiItem: String): any {
  //   return this.http.get(this.baseURL+'/'+apiItem, {responseType: 'json'});
  // }
  
  getAllDocs(): void {
    const url = `${this.baseURL}/regdocs`;
    this.http.get(url).subscribe(
      res => this.serviceResponse.next(res)
    );
  }
  
  getDocs(): Observable<any> {
    const url = `${this.baseURL}/regdocs`;
    return this.http.get<RegDoc[]>(url);
  }
  
  getDoc(id: number): Observable<RegDoc> {
    const url = `${this.baseURL}/regdocs/${id}`;
    return this.http.get<RegDoc>(url);
  }
  
  createDoc(regdoc: RegDoc): Observable<RegDoc> {
    const url = `${this.baseURL}/regdocs`;
    return this.http.post<RegDoc>(url, regdoc, httpOptions);
  }
  
  updateDoc(regdoc: RegDoc): Observable<any> {
    const url = `${this.baseURL}/regdocs/${regdoc.id}`;
    httpOptions['responseType'] = 'text';
    return this.http.put(url, regdoc, httpOptions);
  }

  deleteDoc(regdoc: RegDoc): any {
    const url = `${this.baseURL}/regdocs/${regdoc.id}`;
    httpOptions['responseType'] = 'text';
    return this.http.delete<RegDoc>(url, httpOptions);
  }
  
}
