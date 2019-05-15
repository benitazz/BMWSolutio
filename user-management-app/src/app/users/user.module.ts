import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserDetialsComponent } from './user-detials/user-detials.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CustomValidationModule } from './../custom-validations/custom-validation.module';
import { ControlsModule } from './../controls/controls.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserDetialsComponent,
    UserItemComponent,
    UserListComponent,
    UserRegistrationComponent],
  imports: [
    CommonModule,
    CustomValidationModule,
    ControlsModule,
    FormsModule,
    RouterModule,
    UserRoutingModule
  ]
})
export class UserModule { }
