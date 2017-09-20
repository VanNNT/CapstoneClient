import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../../model/User";
import {BaseService} from "../../service/base-service/base.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {
  private user : User;
  constructor(private baseService: BaseService) {}

  ngOnInit(){
    this.user = this.baseService.getUser();
  }

  onSubmit(form: NgForm){

  }
}
