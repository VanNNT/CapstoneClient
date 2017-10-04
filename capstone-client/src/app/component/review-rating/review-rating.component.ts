import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.less']
})
export class ReviewRatingComponent implements OnInit {
 public starsFacilities;
 public starsTeaching;
 public starCare;
 public starSocieties;
 public starCareer;
  constructor() { }

  ngOnInit() {
    this.starsFacilities = 4.2;
    this.starsTeaching = 4;
    this.starCare = 3.5;
    this.starSocieties = 3;
    this.starCareer = 2;
    $.getScript('../../../assets/file.js');
    console.log('vao r');
  }

}
