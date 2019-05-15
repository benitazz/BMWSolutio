import { ConstantMessage } from './../../common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModelFormBase, IBuildForm } from 'src/app/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent extends ModelFormBase implements OnInit, IBuildForm {

  @ViewChild('registrationForm') public registrationForm: NgForm;

  constructor() {
    super();
   }

  public ngOnInit(): void {
    this.buildForm();
  }

  public register(): void {

  }

  public buildForm(): void {
    this.formErrors = {
      email: String.Empty,
      firstname: String.Empty,
      lastname: String.Empty
    };
    this.validationMessages = {
      email: {
        required: ConstantMessage.EMAIL_REQUIRED,
        invalidEmail: ConstantMessage.INVALID_EMAIL
      },
      firstname: {
        required: ConstantMessage.REQUIRED_FIELD
      },
      lastname: {
        required: ConstantMessage.REQUIRED_FIELD
      }
    };

    this.modelForm = this.registrationForm;
    this.onValueChanged();
    this.subscribeToValueChanged();
  }
}
