import { Component, OnInit } from '@angular/core';
import { RegDoc } from '../doc';
import { ApiService } from '../api.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-new-doc',
  templateUrl: './new-doc.component.html',
  styles: []
})
export class NewDocComponent {
  
  regdoc = new RegDoc();
  submitted = false;

  constructor(
    private apiService: ApiService,
    private location: Location
  ) { };
  
  newDoc() {
    this.submitted = false;
    this.regdoc = new RegDoc();
  }
  
  addDoc() {
    this.submitted = true;
    this.save();
  }
 
  private save(): void {
    console.log(this.regdoc);
    this.apiService.createDoc(this.regdoc)
        .subscribe(
          () => {
            console.log("Doc Created!")
            this.apiService.getAllDocs();
          }
        );
  }
}
  