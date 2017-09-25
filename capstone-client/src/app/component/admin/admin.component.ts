import {Component, Input, OnInit} from '@angular/core';
import {ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {BaseService} from "../../service/base-service/base.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./custom.css','./admin.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
   @Input() title: string = 'DANH SÁCH TRƯỜNG';
  constructor(private router: Router, private baseService: BaseService) { }
 public user;
  ngOnInit() {
    this.user = this.baseService.getUser();
    console.log(this.user);
    this.router.navigate(['admin/list-university']);
  }
  setTitle(title: string){
    this.title = title;
  }
}
