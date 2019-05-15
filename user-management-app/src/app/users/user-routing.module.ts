import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserDetialsComponent } from './user-detials/user-detials.component';

const userRoutes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'details', component: UserDetialsComponent },
  { path: 'registration', component: UserRegistrationComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
