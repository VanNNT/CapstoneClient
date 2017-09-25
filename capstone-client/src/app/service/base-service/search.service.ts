import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {Select2OptionData} from "ng2-select2";
import {Constants} from "../../constants";
@Injectable()
export class SearchService {
  constructor(private _http: Http, private constant: Constants) {

  }

  getList(): Observable<Select2OptionData[]> {
    return this._http.get(this.constant.UNIVERSITY)
      .map((response: Response) => response.json())
      .map((users) => {
        return users.map((user) => {
          return {id: user.id, text: user.name};
        });
      })
  }

  getMajor(): Observable<Select2OptionData[]> {

    return this._http.get(this.constant.MAJOR)
      .map((response: Response) => response.json())
      .map((majors) => {
        return majors.map((major) => {
          return {id: major.majorName, text: major.majorName};
        });
      })
  }

  getLocation(): Observable<Select2OptionData[]>{
    return this._http.get(this.constant.LOCATION)
      .map((response: Response) => response.json())
      .map((locations) => {
        return locations.map((location) => {
          return {id: location.id, text: location.locationName};
        });
      })
  }

  getAllUni(): Observable<any[]>{
    return this._http.get(this.constant.UNIVERSITY).map((response: Response) => response.json());
  }
}

