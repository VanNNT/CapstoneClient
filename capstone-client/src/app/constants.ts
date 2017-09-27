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
  public LOGIN_PROVIDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/user//check-login-3rd-party";
  public UNIVERSITY = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/show-university";
  public MAJOR  = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/show-major";
  public LOCATION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/location/show-location";
  public CREATE_UNIVESITY = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/create";
  public ADD_LOCATION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/update";


  //ERROR
  public UNAUTHORIZED = 401;
  public CONFLICT = 409;

  constructor(){}
}
