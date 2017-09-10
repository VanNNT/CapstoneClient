import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.less']
})
export class ReviewRatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('vao r');
  }

}
