import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { RegDoc } from '../doc';
import { ApiService } from '../api.service';
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-docs-nav',
  templateUrl: './docs-nav.component.html',
  styles: []
})
export class DocsNavComponent implements OnInit {
  
  public regdocs: Observable<RegDoc[]>;
  
  constructor(private apiService: ApiService) { }

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

}
