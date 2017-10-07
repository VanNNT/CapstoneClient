import { Injectable } from '@angular/core';
import {Constants} from "../../constants";
import {Http,Response} from "@angular/http";

@Injectable()
export class ReviewService {

  constructor(private _http: Http, private contant: Constants) { }

  saveReview(data){
    return this._http.post(this.contant.SAVE_REVIEW,data).map((res:Response) => res.json());
  }

  getAllReviewByUniId(data){
    return this._http.get(this.contant.GET_REVIEW_BY_UNI_ID+"?universityId="+ data).map((res:Response)=>res.json());
  }

  getStarPoint(data){
    return this._http.get(this.contant.GET_STAR_POINT+"?universityId="+ data).map((res:Response)=>res.json());
  }
}
