import { Injectable } from '@angular/core';
import {Constants} from "../../constants";
import {Http,Response} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ReviewService {

  constructor(private _http: Http, private contant: Constants) { }
  public numberOfReview = new BehaviorSubject<any>(null);

  public numberReviewChange(value:any) {
    this.numberOfReview.next(value);
  }
  saveReview(data){
    return this._http.post(this.contant.SAVE_REVIEW,data).map((res:Response) => res.json());
  }

  getAllReviewByUniId(data){
    return this._http.get(this.contant.GET_REVIEW_BY_UNI_ID+"?universityId="+ data).map((res:Response)=>res.json());
  }

  getStarPoint(data){
    return this._http.get(this.contant.GET_STAR_POINT+"?universityId="+ data).map((res:Response)=>res.json());
  }

  getReivewNeedApprove(){
    return this._http.get(this.contant.GET_REVIEW_NEED_APPROVE).map((res:Response)=>res.json());
  }

  numberOfReviewNeedApprove(){
    return this._http.get(this.contant.GET_NUMBER_REVIEW_NEED_APPROVE).map((res:Response)=>res.json());
  }

  changeReviewStatus(data){
    return this._http.post(this.contant.CHANGE_REVIEW_STATUS,data).map((res:Response)=>res.json());
  }

  saveMajorReview(data){
    return this._http.post(this.contant.SAVE_REVIEW_MAJOR_UNI,data).map((res: Response)=>res.json());
  }
  getStarReviewMajor(data){
    return this._http.get(this.contant.STAR_REIVEW_MAJOR+"?majorUniId="+data).map((res: Response) => res.json());
  }

  checkReviewUniMajor(data): Observable<any>{
    return this._http.post(this.contant.CHECK_REVIEWED_UNI_MAJOR,data).map((res: Response)=>res.json());
  }

  checkReviewUni(data): Observable<any>{
    return this._http.post(this.contant.CHECK_REVIEWED_UNI,data).map((res: Response)=>res.json());
  }

  getArticle(){
    return this._http.get(this.contant.SHOW_ARTICLE).map((res: Response) => res.json());
  }

  saveArticle(data){
    return this._http.post(this.contant.SAVE_ARTICLE,data).map((res: Response)=> res.json());
  }

  deleteArticle(data){
    return this._http.post(this.contant.DELETE_ARTICLE,data).map((res: Response) => res.json());
  }

  uploadArticle(data){
    return this._http.post(this.contant.UPDATE_ARTICLE,data).map((res: Response)=> res.json());
  }

  getArticleById(data){
    return this._http.get(this.contant.GET_ARTICLE_BY_ID+"?articleId="+data).map((res: Response) => res.json());
  }
  getNewestArticle(data){
    return this._http.get(this.contant.GET_NEWEST_ARTICLE+"?universityId="+data).map((res: Response)=> res.json());
  }
}
