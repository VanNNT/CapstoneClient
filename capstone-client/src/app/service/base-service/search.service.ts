import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {Select2OptionData} from "ng2-select2";
import {Constants} from "../../constants";
@Injectable()
export class SearchService {
  constructor(private _http: Http, private constant: Constants){

  }
  getList(): Observable<Select2OptionData[]>{
      return this._http.get(this.constant.UNIVERSITY)
        .map((response: Response) => response.json())
        .map((users) => {
          users.unshift({id:'0', name: 'ahihi'});
          return users.map((user) => {
              return {id : user.id , text : user.name};
        });
      })
  }

  getListUniName(): Observable<any[]>{
      return this._http.get(this.constant.UNIVERSITY)
        .map((response: Response) => response.json())
  }
}

