import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IsAlpha, IsEmail, IsEnum, IsNotEmpty, IsString, IsStrongPassword, MinLength, validate, validateOrReject } from 'class-validator';
import { catchError, from, switchMap, tap, throwError } from 'rxjs';
import { API_ROUTES } from 'src/api/api.routes';

enum UserRoles {
  STUDENT = 'student', FACULTY = 'faculty'
}

class RegistrationFormPayload {
  @IsString()
  @IsNotEmpty()
  fullName: string = '';

  @IsEmail()
  @IsNotEmpty()
  email: string = '';

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @IsStrongPassword()
  password: string = '';

  @IsNotEmpty()
  @IsEnum(UserRoles)
  role: UserRoles = UserRoles.STUDENT;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.registrationForm = fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: [UserRoles.STUDENT, Validators.required],
    })
  }

  ngOnInit() {
    console.log('page initialized')
  }

  submitRegistrationForm() {
    if (this.registrationForm.invalid) { return; }
    const { value: { confirmPassword, ...registrationFormData } } = this.registrationForm;

    from(this.validateRegistrationForm(registrationFormData))
      .pipe(
        catchError(async (err) => { throw new Error(err) } ),
        tap(() => { if (registrationFormData.password !== confirmPassword) throw new Error('Password mismatch') }),
        switchMap(() => this.httpClient.post(API_ROUTES.register, registrationFormData))
      )
      .subscribe(response => console.log('reposne: ', response));

  }

  private validateRegistrationForm(payload: { fullName: string, email: string, password: string, role: UserRoles }) {
    const registrationFormPayload = new RegistrationFormPayload();
    registrationFormPayload.fullName = payload.fullName;
    registrationFormPayload.email = payload.email;
    registrationFormPayload.password = payload.password;
    registrationFormPayload.role = payload.role;

    return new Promise<void>((resolve, reject) => {
      validateOrReject(registrationFormPayload)
        .then((value) => resolve(value))
        .catch(errors => reject(errors));
    });
  }

}
