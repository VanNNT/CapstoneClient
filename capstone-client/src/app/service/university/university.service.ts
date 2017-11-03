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
  deleteUniversity(data): Observable<any[]>{
    return this._http.post(this.contant.DELETE_UNIVERSITY,data).map((response: Response) => response.json());
  }
  updateScore(data): Observable<any>{
    return this._http.post(this.contant.UPDATE_SCORE,data).map((response: Response) => response.json());
  }
  saveMajorUniDetail(data): Observable<any>{
    return this._http.post(this.contant.SAVE_MAJOR_UNI_DETAIL,data).map((response:Response) => response.json());
  }
  deleteBlockMajorUni(data): Observable<any>{
    return this._http.post(this.contant.DELETE_BLOCK_SCORE,data).map((response:Response) => response.json());
  }
  topCorrlateUni(data): Observable<any>{
    return this._http.get(this.contant.TOP_CORRLATE_UNI+"?universityId="+data).map((res: Response)=> res.json());
  }

  saveQuestionAnswer(data) : Observable<any>{
    return this._http.post(this.contant.SAVE_QUESTION,data)
      .map((response: Response) => response.json());
  }

  getAllQuestion(): Observable<any>{
    return this._http.get(this.contant.GET_ALL_QUESTION)
      .map((response: Response) => response.json());
  }

  getQuestionDetail(qaId,userId):  Observable<any>{
    return this._http.get(this.contant.GET_QUESTION_DETAIL+"?qaId="+qaId + "&userId="+userId)
      .map((response: Response) => response.json());
  }

  getQuestionByUser(userId): Observable<any>{
    return this._http.get(this.contant.QUESTIONS_BY_USER+"?userId="+userId)
      .map((response: Response) => response.json());
  }

  getAnwserByQuestion(questionId): Observable<any>{
    return this._http.get(this.contant.ANSWER_BY_QUESTION+"?questionId="+questionId)
      .map((response: Response) => response.json());
  }

  deleteQA(data): Observable<any>{
    return this._http.post(this.contant.DELETE_QUESTION_ANSWER,data)
      .map((response: Response) => response.json());
  }
}
