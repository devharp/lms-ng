import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from './app-button/app-button.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { RightArrowComponent } from './right-arrow/right-arrow.component';
import { AppFooterComponent } from './app-footer/app-footer.component';



@NgModule({
  declarations: [
    AppButtonComponent,
    AppNavbarComponent,
    CategoryCardComponent,
    RightArrowComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppButtonComponent,
    CategoryCardComponent
  ]
})
export class SharedComponentsModule { }
