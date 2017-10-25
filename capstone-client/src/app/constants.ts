import {Injectable} from "@angular/core";

@Injectable()
export class Constants{
  public HTTP = 'http://';
  public SERVER_IP = 'localhost';
  public SERVER_PORT = ':8080';
  public SERVER_PATH= '/unistart';

  // API
  public REGISTER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/user/register";
  public LOGIN = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/user/check-login";
  public LOGIN_PROVIDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/user/check-login-3rd-party";
  public UNIVERSITY = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/show-university";
  public MAJOR  = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/show-major";
  public LOCATION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/location/show-location";
  public BLOCK = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/block/get-all-block";
  public SEARCH = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/search";
  public CREATE_UNIVESITY = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/create";
  public UPDATE_UNIVESITY = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/update";
  public UPDATE_LOCATION_MAJOR = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/update-location-major";
  public REMOVE_MAJOR_UNI = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/remove-major-uni";
  public GET_UNI_BY_ID = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/get-university";
  public MBTI = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/mbti/show-mbti-question";
  public SAVE_MBTI_RESULT = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/mbti/save-mbti-result";
  // public GET_MBTI_MAJOR = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/mbti/get-mbti-major";
  public UPDATE_MBTI_RESULT = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/mbti/update-mbti-result";
  public GET_MBTI_RESULT = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/mbti/get-mbti-results";
  public DELETE_UNIVERSITY = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/delete";
  public UPDATE_SCORE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/score/save-score";
  public GET_TOP_THREE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/get-by-group";
  public SAVE_REVIEW = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/save-review";
  public GET_REVIEW_BY_UNI_ID = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/show-review";
  public GET_STAR_POINT = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/star-point";
  public GET_NUMBER_REVIEW_NEED_APPROVE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/number-need-accept-review";
  public GET_REVIEW_NEED_APPROVE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/need-accept-review";
  public SAVE_MAJOR_UNI_DETAIL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/save-detail-major";
  public DELETE_BLOCK_SCORE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/score/delete-block-score";
  public FIND_BY_MAJOR_ID = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/university/find-by-major-id";
  public CHANGE_REVIEW_STATUS = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/change-review-status";
  public STAR_REIVEW_MAJOR = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/star-review-major";
  public SAVE_REVIEW_MAJOR_UNI = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/save-review-major-uni";


  //ERROR
  public UNAUTHORIZED = 401;
  public CONFLICT = 409;
  public NOT_FOUND = 404;

  constructor(){}
}
