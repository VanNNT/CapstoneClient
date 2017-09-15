import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
@Injectable()
export class SearchService {
  private aipUrl = 'http://59b4ef7b44db800011a0c911.mockapi.io/api/employees';

  constructor(private _http: Http){

  }
GetList(): Observable<any[]>{
    return this._http.get(this.aipUrl).map((response: Response) => response.json())
}
}
