import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { LandingModule } from './modules/landing/landing.module';
import { AppNavbarComponent } from './modules/shared-components/app-navbar/app-navbar.component';
import { AppFooterComponent } from './modules/shared-components/app-footer/app-footer.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/landing/landing.module').then(e => e.LandingModule) },
  { path: 'auth', loadChildren: () => import('./user-authentication/user-authentication.module').then(e => e.UserAuthenticationModule) },
  { path:'nav', component:AppNavbarComponent},
  { path :'footer', component:AppFooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) , UserAuthenticationModule, LandingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
