import { Component } from '@angular/core';
import { AppButtonVariant } from '../../shared-elements/app-button/enums/app-button.enum';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
  public readonly AppButtonVariantType = AppButtonVariant;
}
