import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  public isLoggedIn = false;
  constructor() { }
  checkLogged(): boolean {
    return this.isLoggedIn;
  }
  setLogin(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }
}
