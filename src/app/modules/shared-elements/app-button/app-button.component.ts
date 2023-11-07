import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AppButtonVariant } from './enums/app-button.enum';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss'],
})
export class AppButtonComponent implements AfterViewInit {
  @ViewChild('textTemplate', { static: true }) textTemplate!: ElementRef;
  @Input() variant: AppButtonVariant = AppButtonVariant.CONTAINED;


  ngAfterViewInit(): void {}


  public get buttonTheme(): string {
    switch (this.variant) {
      case AppButtonVariant.OUTLINED:
        return 'app-button-outlined';
      default:
        return 'app-button-contained';
    }
  }

}
