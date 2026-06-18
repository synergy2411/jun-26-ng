import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.css',
})
export class MainNavigationComponent {
  public authService = inject(AuthService);
}
