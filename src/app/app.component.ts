import { Component } from '@angular/core';
import { API_ROUTES } from 'src/api/api.routes';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lms-ng';

  constructor() {
    console.log({ production: API_ROUTES.register });
  }

}
