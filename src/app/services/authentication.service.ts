import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  
  private apiUrl = 'http://localhost:3000/api';
  
  constructor(private http: HttpClient) {}
  
  login(username: string, password: string) {
    // const httpOptions = {
    //     headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    // };
    
    return this.http.post<any>(`${this.apiUrl}/authenticate`, { username:username, password: password })
      .pipe(map(user => {
        //login success if jwt token present
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        
        return user;
      }));
  }
  
  logout() {
    //remove user from localStorage to logout
    localStorage.removeItem('currentUser');
  }
  
  
  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }
  
}

