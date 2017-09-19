import {Injectable} from "@angular/core";

@Injectable()
export class Constants{
  public HTTP = 'http://';
  public SERVER_IP = 'localhost';
  public SERVER_PORT = ':8080';
  public SERVER_PATH= '/unistart';


  public REGISTER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/user/register";
  public LOGIN = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/user/check-login";

  constructor(){}
}
