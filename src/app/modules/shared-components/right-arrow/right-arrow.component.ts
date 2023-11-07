import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-arrow',
  templateUrl: './right-arrow.component.html',
  styleUrls: ['./right-arrow.component.scss']
})
export class RightArrowComponent {
  @Input() color: string = '#000';

}
