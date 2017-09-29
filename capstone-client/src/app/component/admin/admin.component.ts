import {Component, Input, OnInit} from '@angular/core';
import {ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {BaseService} from "../../service/base-service/base.service";
import {UniversityService} from "../../service/university/university.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./custom.css','./admin.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
   title: string;
  constructor(private router: Router, private baseService: BaseService, private uniService: UniversityService) { }
 public user;
  ngOnInit() {
    this.user = this.baseService.getUser();
    console.log(this.user);
    this.router.navigate(['admin/list-university']);
    this.uniService.title.subscribe(value=>{
      this.title = value;
    });
  }
}
