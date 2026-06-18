import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Person } from '../../model/person';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/users';
  private httpClient = inject(HttpClient);
  private router = inject(Router);

  private isAuthenticated = false;
  constructor() {}

  onUserRegistration(user: Person) {
    return this.httpClient.post(this.baseUrl, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  onUserLogin(person: Person) {
    return this.httpClient
      .get<Person[]>(`${this.baseUrl}?email=${person.email}`)
      .subscribe((user) => {
        if (user[0].password === person.password) {
          console.log('Authenticated User');
          this.isAuthenticated = true;
          this.router.navigateByUrl('/courses');
        } else {
          console.log('Bad credentials!');
        }
      });
  }

  isUserAuthenticated() {
    return this.isAuthenticated;
  }

  onUserLogout() {
    this.isAuthenticated = false;
    this.router.navigateByUrl('/login');
  }
}
