import { Component, OnInit } from '@angular/core';
import {ReviewService} from "../../../service/review/review.service";
import {UniversityService} from "../../../service/university/university.service";

@Component({
  selector: 'app-approve-reivew',
  templateUrl: './approve-reivew.component.html',
  styleUrls: ['./approve-reivew.component.less']
})
export class ApproveReivewComponent implements OnInit {
  public listReview: any[]
  constructor(private reviewService: ReviewService, private universityService: UniversityService) { }

  ngOnInit() {
    this.universityService.broadcastTextChange("DANH SÁCH ĐÁNH GIÁ");
      this.reviewService.getReivewNeedApprove().subscribe(res=>{
        if(res){
          this.listReview = res;
          console.log(this.listReview);
        }
      });
  }

}
