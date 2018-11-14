import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewDocComponent } from './new-doc/new-doc.component';
import { DocFormComponent } from './doc-form/doc-form.component';
import { DocIndexComponent } from './doc-index/doc-index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload'
};


const routes: Routes = [
  { path: '',              component: HomePageComponent },
  { path: 'login',         component: LoginComponent },
  { path: 'docs',          component: DocIndexComponent },
  { path: 'docs/add',      component: NewDocComponent, canActivate: [AuthGuard] },
  { path: 'docs/edit/:id', component: DocFormComponent, canActivate: [AuthGuard] },
  { path: '**',            component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomePageComponent,
  NewDocComponent,
  DocFormComponent,
  DocIndexComponent,
  LoginComponent,
  PageNotFoundComponent
];
