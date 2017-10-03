import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  ngOnDestroy() {
    //$("#home").remove();
  }

}
