import { Component, OnInit } from '@angular/core';
import { RegDoc } from '../doc';
import { ApiService } from '../services';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-doc-form',
  templateUrl: './doc-form.component.html',
  styles: []
})
export class DocFormComponent implements OnInit {

  regdoc = new RegDoc();
  submitted = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getDoc(id)
      .subscribe(regdoc => this.regdoc = regdoc);
  }
 
  saveDoc(): void {
    this.submitted = true;
    this.apiService.updateDoc(this.regdoc)
        .subscribe(
          () => { 
            console.log("Doc Updated!")
            this.goBack()
          }
        );
  }
  
  goBack(): void {
    this.location.back();
  }

    // delete(): void {
    //   this.submitted = true;
    //   this.apiService.deleteDoc(this.regdoc.id)
    //       .subscribe(()=> this.message = "Doc Deleted!");
    // }

}
  