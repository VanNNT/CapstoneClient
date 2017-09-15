import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mbti-test',
  templateUrl: './mbti-test.component.html',
  styleUrls: ['./mbti-test.component.less']
})
export class MbtiTestComponent implements OnInit {

  constructor(private router: Router) { }
  questions=[
    {
      id : '1',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?'
    },
    {
      id : '2',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?'
    },
    {
      id : '3',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?'
    },
    {
      id : '4',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?'
    },
    {
      id : '5',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?'
    },
  ];
  ngOnInit() {
    console.log("aaaa");
  }
  onSubmit(value){
    console.log(value);
  }
}
