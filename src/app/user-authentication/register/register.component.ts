import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { API_ROUTES } from 'src/api/api.routes';

enum UserRoles {
  STUDENT = 'student', FACULTY = 'faculty'
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  
  public registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.registrationForm = fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: [UserRoles.STUDENT, Validators.required],
    })
  }
  
  ngOnInit(){
    console.log('page initialized')
  }

  submitRegistrationForm() {
    if (this.registrationForm.invalid) return
    const { value: registrationFormData }= this.registrationForm;
    
    this.httpClient
      .post(API_ROUTES.register, registrationFormData)
      .subscribe(response => { console.log('reposne: ', response) })

  }

}
