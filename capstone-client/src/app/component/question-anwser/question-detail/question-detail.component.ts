import { Component, OnInit } from '@angular/core';
import {UniversityService} from "../../../service/university/university.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {BaseService} from "../../../service/base-service/base.service";
declare var $: any;
@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.less']
})
export class QuestionDetailComponent implements OnInit {

  public sub: Subscription;
  private qaId: number;
  public question: any;
  constructor(private uniService: UniversityService,private activateRoute: ActivatedRoute,
              private baseService: BaseService) { }

  ngOnInit() {
    this.sub = this.activateRoute.params.subscribe(params=>{
      this.qaId=params['id'];
    });
    let userId = this.baseService.getUser().id;
    this.uniService.getQuestionDetail(this.qaId,userId).subscribe(res=>{
      this.question = res;
    });

    $('#summnernote').summernote({
      height: 200,
      toolbar: [
        ['style', ['bold', 'italic', 'underline']],
        ['fontsize', ['fontsize','color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['fullscreen',['fullscreen']]
      ],
      callbacks: {
      }
    });
  }

}
