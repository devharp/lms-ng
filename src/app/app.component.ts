import { Component } from '@angular/core';
import { API_ROUTES } from 'src/api/api.routes';
import { environment } from 'src/environments/environment';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lms-ng';
  public showSnack: boolean = false;

  constructor(private _snackBar: MatSnackBar) {
    console.log({ production: API_ROUTES.register });
  }

  toggleSnack() {
    this.showSnack = !this.showSnack;
  }

}
