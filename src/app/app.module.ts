import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { AuthGuard } from './auth.guard';

import { DocsNavComponent } from './docs-nav/docs-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    DocsNavComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
