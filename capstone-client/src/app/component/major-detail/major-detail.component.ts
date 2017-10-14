import { Component, OnInit } from '@angular/core';
import {BaseService} from "../../service/base-service/base.service";

@Component({
  selector: 'app-major-detail',
  templateUrl: './major-detail.component.html',
  styleUrls: ['./major-detail.component.less']
})
export class MajorDetailComponent implements OnInit {

  constructor(private baseService: BaseService) { }

  ngOnInit() {
    console.log(this.baseService.getValueMajorUni());
  }

}
