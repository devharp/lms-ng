import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from './app-button/app-button.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';



@NgModule({
  declarations: [
    AppButtonComponent,
    AppNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppButtonComponent
  ]
})
export class SharedComponentsModule { }
