import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './services';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authenticationService.loggedIn) {
      return true;
    }
        
    console.log('requires authentication!');
    // redirect to login
    this.router.navigate(['login']);
    return false;
  }
}
