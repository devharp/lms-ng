import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from './app-button/app-button.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { RightArrowComponent } from './right-arrow/right-arrow.component';



@NgModule({
  declarations: [
    AppButtonComponent,
    CategoryCardComponent,
    RightArrowComponent
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
