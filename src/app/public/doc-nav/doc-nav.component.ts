import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegDoc } from '../../doc';
import { ApiService, AuthenticationService } from '../../services';
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-doc-nav',
  templateUrl: './doc-nav.component.html',
  styles: []
})
export class DocNavComponent implements OnInit {
  
  public regdocs: Observable<RegDoc[]>;
  
  constructor(private apiService: ApiService, private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.getDocs();
  }
  
  getDocs(): void {
    this.apiService.regdocs.subscribe(
      regdocs => { this.regdocs = regdocs },
      err => console.log(err),
      () => console.log("completed")
    );
    this.apiService.getAllDocs();
  }
  
  jumpTo(anchor:string) {
    console.debug('jumpTo: ' + anchor);
    const elem = document.getElementById('doc-'+anchor);
    console.debug(elem)
    if (elem) {
      elem.scrollIntoView({behavior:'smooth', block:'start'});
    }
  
  }
  
  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
