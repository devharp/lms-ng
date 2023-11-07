import {  Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {

  @Input() title: string = 'Category Title';

  public readonly appTheme = {
    color: {
      default: 'black', active: '#FF3158'
    }
  }

  public categoryBook = { color: this.appTheme.color.default }

  public bookCategoryClicked(): void {
    this.categoryBook.color = this.appTheme.color.active;
  }

  public bookCategoryUp(): void {
    this.categoryBook.color = this.appTheme.color.default;
  }

}
