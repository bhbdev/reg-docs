import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './helpers';

import { DocsNavComponent } from './docs-nav/docs-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    DocsNavComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    SuiModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
