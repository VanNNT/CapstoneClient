import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../model/User";
import {BaseService} from "../../service/base-service/base.service";
import {ReviewService} from "../../service/review/review.service";
import {ToastsManager} from "ng2-toastr";
import {parse} from "querystring";
declare var $: any;

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.less'],
  providers: [ReviewService]
})
export class NewReviewComponent implements OnInit {
  public sub: Subscription;
  private id: any;
  private user : User;
  public starsTeaching: number;
  public starsFacilities: number;
  public starCare: number;
  public starSocieties: number;
  public starCareer: number;
  constructor(private activateRoute: ActivatedRoute, private baseService: BaseService,
              private reviewService : ReviewService, public toastr: ToastsManager) {

  }

  ngOnInit() {
    this.sub = this.activateRoute.params.subscribe(params=>{
      this.id=params['id'];
    });
    this.user = this.baseService.getUser();
    $('#summernote').summernote({
      height: 150,
      toolbar: false
    });
  }

  public onSubmit(form: NgForm){
    console.log(form.value);
    console.log($('#summernote').summernote('code'));
    let data = {
      'university': {
        'id': parseInt(this.id) //universityId
      },
      'users':{
        'id': this.user.id
      },
      'description': $('#summernote').summernote('code'),
      'starTeaching' : this.starsTeaching,
      'starFacilities': this.starsFacilities,
      'starCare': this.starCare,
      'starSocieties': this.starSocieties,
      'starCareer': this.starCareer,
      'isRecomment': parseInt(form.value.radio),
      'status': false
    };
    this.reviewService.saveReview(data).subscribe((res:Response)=>{
      if(res){
        this.toastr.success('Vui lòng chờ chúng tôi xem xét đánh giá của bạn', 'Thành công',{showCloseButton: true});
      }
    },(error=>{
      this.toastr.error('Trường học hoặc user này không tồn tại', 'Thất bại',{showCloseButton: true});
    }))
  }
}
