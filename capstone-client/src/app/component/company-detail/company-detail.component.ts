import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.less']
})
export class CompanyDetailComponent implements OnInit {
  public id: number;
  public sub: Subscription;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    $.getScript('../../../assets/file.js');
    $(window).scroll(function () {
      const height = $(window).scrollTop();
      const isFollowed = false;
      if (height > 350 && !isFollowed) {
        $('#company-fixed-box').fadeIn('normal');
      } else {
        $('#company-fixed-box').fadeOut('normal');
      }
    });
    this.sub = this.activateRoute.params.subscribe(params=>{
      this.id=params['id'];
      alert(this.id);
    });
  }

}
