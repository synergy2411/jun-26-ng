import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrl: './user-image.component.css',
})
export class UserImageComponent {
  @Input() user: any;

  @Output()
  userEvent = new EventEmitter<any>();

  onGenerate() {
    this.userEvent.emit(this.user);
  }
}
