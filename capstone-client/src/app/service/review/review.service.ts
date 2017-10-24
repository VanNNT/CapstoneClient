import { Injectable } from '@angular/core';
import {Constants} from "../../constants";
import {Http,Response} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

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

}
