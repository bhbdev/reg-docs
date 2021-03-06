import { Component, OnInit } from '@angular/core';
import { RegDoc } from '../../doc';
import { ApiService } from '../../services';

import { Location } from '@angular/common';

@Component({
  selector: 'app-doc-add',
  templateUrl: './doc-add.component.html',
  styles: []
})
export class DocAddComponent {
  
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
  
  goBack() {
    this.location.back();
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
  