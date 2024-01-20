import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username: string = '';
  loggedIn: boolean = false;

  constructor() { }

  getUsername() {
    return this.username;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logUserIn(username: string) {
    this.username = username
    this.loggedIn = true;
  }

  logOut() {
    this.username = '';
    this.loggedIn = false;
  }
}
