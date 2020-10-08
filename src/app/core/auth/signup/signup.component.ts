import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form = this.fb.group({
    email: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ]
  })

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup() {
    let email = this.form.controls.email.value,
    password = this.form.controls.password.value;

    this.authService.signUp(email, password);
  }

}
