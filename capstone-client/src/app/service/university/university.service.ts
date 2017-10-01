import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Constants} from "../../constants";

@Injectable()
export class UniversityService {

  constructor(private _http: Http, private contant: Constants) { }
  public title = new BehaviorSubject<any>(null);

  public broadcastTextChange(value:any) {
    this.title.next(value);
  }
  createUniversity(apiUrl,data): Observable<any> {
    return this._http.post(apiUrl,data).map((res:Response) => res.json());
  }
  updateUniversity(apiUrl,data): Observable<any>{
    return this._http.post(apiUrl,data).map((res:Response) => res.json());
  }
  updateLocationMajor(apiUrl,data): Observable<any[]>{
    return this._http.post(apiUrl,data).map((res:Response) => res.json());
  }
  removeMajor(apiUrl,data): Observable<any>{
    return this._http.post(apiUrl,data).map((res:Response) => res.json());
  }
  uploadFile(apiUrl,data,options): Observable<any[]>{
    return this._http.post(apiUrl,data,options).map((res:Response) => res.json());
  }

  getUniversityById(data: any): Observable<any>{
    return this._http.get(this.contant.GET_UNI_BY_ID+"?universityId="+ data).map((res:Response)=> res.json());
  }
}
