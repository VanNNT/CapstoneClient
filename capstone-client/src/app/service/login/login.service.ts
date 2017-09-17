import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class LoginService {
  public isLoggedIn = false;
  constructor() { }
  public space = new BehaviorSubject<any>(null);

  public broadcastTextChange(value:any) {
    this.space.next(value);
  }

  public checkLogged(): boolean {
    return this.isLoggedIn;
  }
  public setLogin(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }
}
