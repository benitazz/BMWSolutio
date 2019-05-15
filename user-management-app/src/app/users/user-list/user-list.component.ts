import { User } from './../../models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: Array<User>;

  constructor(private router: Router) { }

  public ngOnInit(): void {
    const birthDate = new Date();
    birthDate.setFullYear(1979, 10);
    this.users = [{ id: 1, birthdate: birthDate, username: 'ben@test.co.za', lastname: 'Ben', firstname: 'Baloyi', password: '1234' },
    { id: 1, birthdate: birthDate, username: 'ben@test.co.za', lastname: 'Ben2', firstname: 'Baloyi2', password: '1234' }];
  }

  public addNewUser(): void {
    this.router.navigate([`/users/registration`]);
  }

}
