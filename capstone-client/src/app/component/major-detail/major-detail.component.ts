import { Component, OnInit } from '@angular/core';
import {BaseService} from "../../service/base-service/base.service";
import {ReviewService} from "../../service/review/review.service";
import {ToastsManager} from "ng2-toastr";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {Constants} from "../../constants";

@Component({
  selector: 'app-major-detail',
  templateUrl: './major-detail.component.html',
  styleUrls: ['./major-detail.component.less']
})
export class MajorDetailComponent implements OnInit {
  public majorUniversity: any;
  public university: any;
  public majorDetail = {
    id: '',
    majorName : '',
    blockYear1 : [],
    blockYear2 : [],
  };
  public id: any;
  public sub: Subscription;
  public isCheck: boolean = false;
  public starsTeaching: number;
  public starCareer: number;
  public totalStar:number;
  public recommentPoint:number;
  public isReviewed: boolean = false;
  public starPoint: any;

  constructor(private baseService: BaseService, private reviewService: ReviewService, private router: Router,
              private toastr: ToastsManager, private activateRoute: ActivatedRoute, private constants: Constants) { }

  ngOnInit() {
    this.sub = this.activateRoute.params.subscribe(params=>{
      this.id=params['id'];
    });
    this.majorUniversity = this.baseService.getValueMajorUni();
    if(!this.majorUniversity){
      this.router.navigate(['home']);
      return;
    }
    this.university = this.baseService.getUniversity();
    this.majorDetail.blockYear1 = [];
    this.majorDetail.blockYear2 = [];
    this.majorDetail.id = this.majorUniversity.id;
    this.majorDetail.majorName = this.majorUniversity.major.majorName;
    if(this.majorUniversity.blockMajorUniversities.length != 0){
      for(let i =0; i<this.majorUniversity.blockMajorUniversities.length;i++){
        for(let j =0; j<this.majorUniversity.blockMajorUniversities[i].scoreHistories.length;j++){
          if(this.majorUniversity.blockMajorUniversities[i].scoreHistories[j].year == 2016){
            let year1 = {
              blockName: this.majorUniversity.blockMajorUniversities[i].block.blockName,
              score: this.majorUniversity.blockMajorUniversities[i].scoreHistories[j].score
            };
            this.majorDetail.blockYear1.push(year1);
          }else{
            let year2 = {
              blockName: this.majorUniversity.blockMajorUniversities[i].block.blockName,
              score: this.majorUniversity.blockMajorUniversities[i].scoreHistories[j].score
            };
            this.majorDetail.blockYear2.push(year2);
          }
        }
      }
    }
    this.reviewService.getStarReviewMajor(this.majorUniversity.id).subscribe((res:any)=>{
      if(res){
        this.starPoint = res;
        console.log(this.starPoint);
        localStorage.setItem('STAR_POINT', JSON.stringify(res));
        this.totalStar = (res.starTeaching + res.starCareer)/2;
        this.recommentPoint = res.recommentPoint;
        console.log(this.totalStar);
      }
    },error=>{
      if(error.status == this.constants.NOT_FOUND){
        this.starPoint = null;
      }
    });

  }

  public onSubmit(form: NgForm){
        if(form.valid && !this.isCheck){
      let data = {
        'majorUniversity': {
          'id': parseInt(this.majorUniversity.id)
        },
        'users': {
          'id': this.baseService.getUser().id
        },
        'starTeaching' : this.starsTeaching,

        'starCareer': this.starCareer,
        'isRecomment': parseInt(form.value.radio),
      };
      this.reviewService.saveMajorReview(data).subscribe((res:Response)=>{
        if(res){
          this.isReviewed = true;
          this.toastr.success('Vui lòng chờ chúng tôi xem xét đánh giá của bạn', 'Thành công',{showCloseButton: true});
        }
      },(error=>{
        this.toastr.error('Trường học hoặc user này không tồn tại', 'Thất bại',{showCloseButton: true});
      }))
    }
  }



}
