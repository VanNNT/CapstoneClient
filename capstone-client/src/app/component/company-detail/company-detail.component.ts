import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.less']
})
export class CompanyDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function () {
      const height = $(window).scrollTop();
      const isFollowed = false;
      if (height > 350 && !isFollowed) {
        $('#company-fixed-box').fadeIn('normal');
      } else {
        $('#company-fixed-box').fadeOut('normal');
      }
    });
  }

}
