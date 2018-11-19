import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services';
import { Location } from '@angular/common';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  public username: string;
  public password: string;
  public error: string;

  constructor(private auth: AuthenticationService, private router: Router, private location: Location) { }

  public submit() {
    this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        result => {
          if (result.token) {
            //this.goBack();
            this.router.navigate(['admin/docs']);
          }
          else {
            this.error = result.message;
          }
        },
        err => this.error = 'Could not authenticate'
      );
  }
  
  goBack(): void {
    this.location.back();
  }

}
