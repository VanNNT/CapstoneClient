import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {UniversityService} from "../../service/university/university.service";
import {ReviewService} from "../../service/review/review.service";
import {BaseService} from "../../service/base-service/base.service";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.less']
})
export class CompanyDetailComponent implements OnInit {
  public id: number;
  public sub: Subscription;
  public university: any;
  public des: any;
  public valueMajor: any;
  public totalStar:number;
  public recommentPoint:number;
  public starPoint: any;
  public majorDetail = {
    majorName : '',
    blockYear1 : [],
    blockYear2 : [],
  };
  constructor(private activateRoute: ActivatedRoute,
              private universityService: UniversityService,
              private  reviewService: ReviewService,
              private baseService : BaseService) { }
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
    });
    this.universityService.getUniversityById(this.id).subscribe((university: any)=>{
      this.university = university;
      this.baseService.setUniversity(university);
      this.des = university.description;
      this.valueMajor = [];
      for (let i = 0; i < this.university.majorUniversities.length; i++) {
        if(this.university.majorUniversities[i].isActive){
          this.valueMajor.push(this.university.majorUniversities[i]);
        }
      }
    });

    this.reviewService.getStarPoint(this.id).subscribe((res:any)=>{
      if(res){
        this.starPoint = res;
        localStorage.setItem('STAR_POINT', JSON.stringify(res));
        this.totalStar = (res.starCare + res.starTeaching + res.starSocieties +
          res.starFacilities + res.starCareer)/5;
        this.recommentPoint = res.recommentPoint;
        console.log(this.totalStar);
      }
    });
  }

  showDetail(value){
    if(value.blockMajorUniversities.length == 0){
      document.getElementById('openNotDetail').click();
    }else{
      this.majorDetail.blockYear1 = [];
      this.majorDetail.blockYear2 = [];
      this.majorDetail.majorName = value.major.majorName;
      for(let i =0; i<value.blockMajorUniversities.length;i++){
        for(let j =0; j<value.blockMajorUniversities[i].scoreHistories.length;j++){
          if(value.blockMajorUniversities[i].scoreHistories[j].year == 2016){
            let year1 = {
              blockName: value.blockMajorUniversities[i].block.blockName,
              score: value.blockMajorUniversities[i].scoreHistories[j].score
            };
            this.majorDetail.blockYear1.push(year1);
          }else{
            let year2 = {
              blockName: value.blockMajorUniversities[i].block.blockName,
              score: value.blockMajorUniversities[i].scoreHistories[j].score
            };
            this.majorDetail.blockYear2.push(year2);
          }
        }
      }
      document.getElementById('openMajorDetail').click();
    }
  }
}
