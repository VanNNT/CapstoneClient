import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";
import {EqualValidatorDirective} from "../../directive/equal-validatior/equal-validator.directive";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {
  private user;
  constructor() {}

  ngOnInit(){
    console.log("aaaaaaa");
    this.user = JSON.parse(localStorage.getItem('USER_INFO'));
    console.log(this.user.name);
    console.log(this.user);
  }

  onSubmit(form: NgForm){

  }
}
