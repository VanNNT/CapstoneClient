import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {UniversityService} from "../../service/university/university.service";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.less']
})
export class CompanyDetailComponent implements OnInit {
  public id: number;
  public sub: Subscription;
  public university: any;
  public valueMajor: any;
  constructor(private activateRoute: ActivatedRoute, private universityService: UniversityService) { }

  ngOnInit() {
    $.getScript('../../../assets/file.js');
    $(window).scroll(function () {
      const height = $(window).scrollTop();
      const isFollowed = false;
      if (height > 350 && !isFollowed) {
        $('#company-fixed-box').fadeIn('normal');
      } else {
        $('#company-fixed-box').fadeOut('normal');
      }
    });
    this.sub = this.activateRoute.params.subscribe(params=>{
      this.id=params['id'];
      // alert(this.id);
    });
    this.universityService.getUniversityById(this.id).subscribe((university: any)=>{
      this.university = university;
      this.valueMajor = [];
      for (let i = 0; i < this.university.majorUniversities.length; i++) {
        if(this.university.majorUniversities[i].isActive){
          this.valueMajor.push(this.university.majorUniversities[i].major.majorName);
        }
      }
      console.log(this.valueMajor);
    })


  }
}
