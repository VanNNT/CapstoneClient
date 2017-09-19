import {Injectable} from '@angular/core';
import {User} from "../../model/User";


declare var $: any;

@Injectable()
export class BaseService {
  public title;
  public content;
  public user;
  constructor() {

  }
  showLoginForm() {
    document.getElementById('openModalButton').click();
  }
  setUser(data){
    this.user = new User(data);
  }
  getUser(){
    return this.user;
  }
}
