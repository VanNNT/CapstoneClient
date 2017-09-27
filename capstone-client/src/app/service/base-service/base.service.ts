import {Injectable} from '@angular/core';
import {User} from "../../model/User";


declare var $: any;

@Injectable()
export class BaseService {
  public title;
  public content;
  public user;
  public logo;
  public imgUni;
  public list: any[];
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
  setLogoUni(data){
    this.logo = data;
  }
  getLogoUni(){
    return this.logo;
  }
  setImgUni(data){
    this.imgUni = data;
  }
  getImgUni(){
    return this.imgUni;
  }
}
