import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styles: ``
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName : [''],
      email : [''],
      password : [''],
      confirmPassword : ['']
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Formulario enviado', this.registrationForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
  
  /*
  constructor(public formBuilder: FormBuilder){}

  form = this.formBuilder.group({
    fullName : [''],
    email : [''],
    password : [''],
    confirmPassword : ['']
  })
    */
}
