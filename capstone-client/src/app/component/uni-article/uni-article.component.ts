import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../../service/review/review.service";

@Component({
  selector: 'app-uni-article',
  templateUrl: './uni-article.component.html',
  styleUrls: ['./uni-article.component.less']
})
export class UniArticleComponent implements OnInit {
  public id;
  public sub: Subscription;
  public uniArticle;
  public university;
  constructor(private activateRoute: ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.sub = this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.reviewService.getAllArticleByUni(this.id).subscribe((res: any)=>{
      this.uniArticle = res;
      console.log(this.uniArticle);
    })
    this.university =  JSON.parse(localStorage.getItem("UNI"));
  }

}
