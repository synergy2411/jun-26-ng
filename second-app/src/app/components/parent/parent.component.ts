import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  title = 'The Parent Value';

  onAlert(alert: string) {
    window.alert(alert);
  }
}
