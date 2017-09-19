import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.less']
})
export class ReviewRatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('../../../assets/file.js');
    console.log('vao r');
  }

}
