import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { LandingModule } from './modules/landing/landing.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/landing/landing.module').then(e => e.LandingModule) },
  { path: 'auth', loadChildren: () => import('./user-authentication/user-authentication.module').then(e => e.UserAuthenticationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) , UserAuthenticationModule, LandingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
