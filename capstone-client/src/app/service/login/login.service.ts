import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
  public isLoggedIn = false;
  constructor(private _http: Http) { }
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

  register(apiUrl,data): Observable<any[]> {
    return this._http.post(apiUrl,data).map((res:Response)=>res.json());
  }
  login(apiUrl,data) : Observable<any>{
    return this._http.post(apiUrl,data).map((res:Response)=>res.json());
  }
}
