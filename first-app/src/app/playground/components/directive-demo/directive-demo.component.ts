import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.css',
})
export class DirectiveDemoComponent {
  dynamicStyle = {
    color: 'green',
    backgroundColor: '#fff',
  };

  dynamicClass = {
    feature: true,
    focused: false,
  };

  changeStyle(flag: boolean) {
    if (flag) {
      this.dynamicStyle.color = '#fff';
      this.dynamicStyle.backgroundColor = 'green';
    } else {
      this.dynamicStyle.color = 'green';
      this.dynamicStyle.backgroundColor = '#fff';
    }
  }

  toggleClass() {
    this.dynamicClass.feature = !this.dynamicClass.feature;
    this.dynamicClass.focused = !this.dynamicClass.focused;
  }
}
