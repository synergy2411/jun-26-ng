import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { USER_DATA } from '../../../db/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  user!: User;

  ngOnInit(): void {
    this.user = USER_DATA;
  }

  onMoreInfo(person: User) {
    alert(`Mr ${person.lastName} is working with ${person.company}!`);
  }
}
