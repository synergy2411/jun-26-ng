import { Component, Input, ViewEncapsulation } from '@angular/core';
import { User } from '../../../../model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class UserInfoComponent {
  @Input() user!: User;
}
