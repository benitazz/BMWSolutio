import { Component, OnInit, ViewChild } from '@angular/core';
import { ModelFormBase, IBuildForm, ConstantMessage } from '../common';
import { NgForm } from '@angular/forms';
import { UserLogin } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends ModelFormBase implements OnInit, IBuildForm {

  public invalidLogin: boolean;
  @ViewChild('loginForm') public userForm: NgForm;

  constructor(private router: Router) {
    super();
   }

  public ngOnInit(): void {
    this.buildForm();
  }

  public signIn($credentials: UserLogin): void {
    this.router.navigate([`/users`]);
  }

  public buildForm(): void {
    this.formErrors = {
      inputEmail: String.Empty,
      inputPassword: String.Empty
    };
    this.validationMessages = {
      inputEmail: {
        required: ConstantMessage.EMAIL_REQUIRED,
        invalidEmail: ConstantMessage.INVALID_EMAIL
      },
      inputPassword: { required: ConstantMessage.REQUIRED_FIELD }
    };

    this.modelForm = this.userForm;
    this.onValueChanged();
    this.subscribeToValueChanged();
  }
}
