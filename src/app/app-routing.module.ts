import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { HomepageComponent } from './component/homepage/homepage.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./user-authentication/user-authentication.module').then(e => e.UserAuthenticationModule) },
  { path:'',component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) , UserAuthenticationModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
