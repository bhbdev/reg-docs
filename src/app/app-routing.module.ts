import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions } from '@angular/router';

import { AuthGuard } from './auth.guard';

//public components
import { 
  LoginComponent, 
  HomePageComponent, 
  DocIndexComponent, 
  PageNotFoundComponent } from './public/components';

//admin components
import { 
  DocListComponent, 
  DocAddComponent, 
  DocEditComponent } from './admin/components';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload'
};


const routes: Routes = [
  { path: '',                     component: HomePageComponent },
  { path: 'login',                component: LoginComponent },
  { path: 'docs',                 component: DocIndexComponent },
//  { path: 'admin',                redirectTo: '/admin/docs' },
  //{ path: 'admin/docs',           component: DocListComponent, canActivate: [AuthGuard] },
  { path: 'docs/add',       component: DocAddComponent,  canActivate: [AuthGuard] },
  { path: 'docs/edit/:id',  component: DocEditComponent, canActivate: [AuthGuard] },
  { path: '**',                   component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomePageComponent,
  DocIndexComponent,
  LoginComponent,
  PageNotFoundComponent,
  DocListComponent,
  DocAddComponent,
  DocEditComponent
];
