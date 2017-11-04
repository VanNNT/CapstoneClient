import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {ReviewService} from "../../service/review/review.service";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.less']
})
export class ArticleDetailComponent implements OnInit {
  public id;
  public sub: Subscription;
  public article;
  constructor(private activatedRoute: ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getArticle(this.id);
    console.log(this.article);
  }

  getArticle(data){
    this.reviewService.getArticleById(data).subscribe((res: any)=>{
      this.article = res;
    })
  }

}
