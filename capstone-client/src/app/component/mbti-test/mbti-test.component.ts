import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mbti-test',
  templateUrl: './mbti-test.component.html',
  styleUrls: ['./mbti-test.component.less']
})
export class MbtiTestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
