import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RegDoc } from '../../doc';
import { ApiService, AuthenticationService } from '../../services';
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styles: []
})
export class DocListComponent implements OnInit {
  public regdocs: RegDoc[];
  private doc: RegDoc;
  showhidden = 1;
  
  constructor(private auth: AuthenticationService, private apiService: ApiService, private route: ActivatedRoute) { 
    
    // router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     const tree = router.parseUrl(router.url);
    //     if (tree.fragment) {
    //       const elem =  document.querySelector('#' + tree.fragment);
    //       if (elem) elem.scrollIntoView(elem);
    //     }
    //   }
    // })
  }

  ngOnInit() {
    this.apiService.regdocs.subscribe(
      regdocs => { this.regdocs = regdocs },
      err => console.log(err),
      () => console.log("completed")
    );
    this.apiService.getAllDocs();
    
    this.route.fragment.subscribe(data=>{
      console.log('frag: ' + data)
    });
    

    
  }
  
  editDoc(idx: number): void {
    
  }
  
  showHidden(): void {
    this.showhidden = !this.showhidden?1:0;
  }
  
  trashDoc(idx: number): void {
    this.doc = this.regdocs[idx];
    if (!this.doc) { console.log('invalid idx'); return; }
    console.log(JSON.stringify(this.doc))
    this.apiService.deleteDoc(this.doc)
        .subscribe(
          () => {
            console.log("Doc deleted!")
            this.apiService.getAllDocs();
          }
        );
  }
  
}