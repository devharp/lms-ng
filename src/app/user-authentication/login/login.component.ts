import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, from, switchMap } from 'rxjs';
import { API_ROUTES } from 'src/api/api.routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


public loginForm: FormGroup;

constructor(private fb: FormBuilder, private httpClient: HttpClient) {
  this.loginForm = fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
}
submitLoginForm() {
  if (this.loginForm.invalid) {
    return;
  }

  const { value: loginFormData } = this.loginForm;

  from(this.validateLoginForm(loginFormData))
    .pipe(
      catchError(async (err) => {
        throw new Error(err);
      }),
      switchMap(() => this.httpClient.post(API_ROUTES.login, loginFormData))
    )
    .subscribe(response => console.log('response: ', response));
}

validateLoginForm(loginFormData: any): Promise<void> {
 console.log("HHIIHIHIHIHIH")
  return Promise.resolve();
}
}

