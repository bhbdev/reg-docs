import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './services';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  login = {
    username: 'beau',
    password: 'pass123'
  };
  
  title = 'Reg Docs'; 
  constructor(private authenticationService: AuthenticationService) {}
  
  
  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      return;
    }
    else {
//      console.log(this.login.username)
      this.authenticationService.login(this.login.username, this.login.password)
        .pipe(first())
        .subscribe(
          data => {},
          error => {
            console.log('error authenticating');
          }
        );
    }
  
  }
  
  
  
}
