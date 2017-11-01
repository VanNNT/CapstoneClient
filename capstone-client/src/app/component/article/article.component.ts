import { Component, OnInit } from '@angular/core';
import {ReviewService} from "../../service/review/review.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  public listArticle;
  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getArticle().subscribe((res: any)=>{
      this.listArticle = res;
      console.log(this.listArticle)
    })
  }

}
