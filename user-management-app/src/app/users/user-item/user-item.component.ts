import { User } from './../../models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() public user: User;

  constructor() { }

  public ngOnInit(): void {
  }

}
