import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-listuniversity',
  templateUrl: './listuniversity.component.html',
  styleUrls: ['./listuniversity.component.less']
})
export class ListuniversityComponent implements OnInit {
  // public title: 'List University';
  constructor(private router: Router) { }

  ngOnInit() {
  }
}
