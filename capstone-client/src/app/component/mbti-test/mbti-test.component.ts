import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";
import {MBTIQuestion} from "../../model/MBTIModel";

@Component({
  selector: 'app-mbti-test',
  templateUrl: './mbti-test.component.html',
  styleUrls: ['./mbti-test.component.less']
})
export class MbtiTestComponent implements OnInit {
  private MBTIresult: string;
  public tested: boolean;
  private questions: MBTIQuestion[];
  private scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
  };
  constructor(private router: Router) { }
  aaa=[
    {
      id : '1',
      name:'q1',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?',
      option1: 'Nói chuyện với tất cả mọi người, kể cả người lạ',
      option2: 'Nói chuyện với những người bạn quen',
      MBTIGroup: 'EI'
    },
    {
      id : '2',
      name: 'q2',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?',
      option1: 'Nói chuyện với tất cả mọi người, kể cả người lạ',
      option2: 'Nói chuyện với những người bạn quen',
      MBTIGroup: 'EI'
    },
    {
      id : '3',
      name: 'q3',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?',
      option1: 'Nói chuyện với tất cả mọi người, kể cả người lạ',
      option2: 'Nói chuyện với những người bạn quen',
      MBTIGroup: 'SN'
    },
    {
      id : '4',
      name: 'q4',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?',
      option1: 'Nói chuyện với tất cả mọi người, kể cả người lạ',
      option2: 'Nói chuyện với những người bạn quen',
      MBTIGroup: 'SN'
    },
    {
      id : '5',
      name: 'q5',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?',
      option1: 'Nói chuyện với tất cả mọi người, kể cả người lạ',
      option2: 'Nói chuyện với những người bạn quen',
      MBTIGroup: 'SN'
    },
    {
      id : '6',
      name:'q6',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?',
      option1: 'Nói chuyện với tất cả mọi người, kể cả người lạ',
      option2: 'Nói chuyện với những người bạn quen',
      MBTIGroup: 'TF'
    },
    {
      id : '7',
      name: 'q7',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?',
      option1: 'Nói chuyện với tất cả mọi người, kể cả người lạ',
      option2: 'Nói chuyện với những người bạn quen',
      MBTIGroup: 'TF'
    },
    {
      id : '8',
      name: 'q8',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?',
      option1: 'Nói chuyện với tất cả mọi người, kể cả người lạ',
      option2: 'Nói chuyện với những người bạn quen',
      MBTIGroup: 'EI'
    },
    {
      id : '9',
      name: 'q9',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?',
      option1: 'Nói chuyện với tất cả mọi người, kể cả người lạ',
      option2: 'Nói chuyện với những người bạn quen',
      MBTIGroup: 'JP'
    },
    {
      id : '10',
      name: 'q10',
      question: 'Bạn Có Lên Danh Sách Cho Các Việc Cần Làm Không?',
      option1: 'Nói chuyện với tất cả mọi người, kể cả người lạ',
      option2: 'Nói chuyện với những người bạn quen',
      MBTIGroup: 'JP'
    }
  ];
  ngOnInit() {
    this.tested = false;
    this.questions=[];
    this.aaa.forEach(x=>{
      this.questions.push(new MBTIQuestion(x));
    });
    console.log(this.questions);
  }
  public onChoose(item,option){
    if(option=='a' && !item.isChecked){
      if(item.MBTIGroup=='EI'){
        this.scores.E = this.scores.E +1;
      }else if(item.MBTIGroup=='SN'){
        this.scores.S = this.scores.S +1;
      }else if(item.MBTIGroup=='TF'){
        this.scores.T = this.scores.T +1;
      }else{
        this.scores.J = this.scores.J + 1;
      }
      item.isChecked=true;
    }
    if(option=='b' && item.isChecked){
      if(item.MBTIGroup=='EI'){
        this.scores.E = this.scores.E -1;
      }else if(item.MBTIGroup=='SN'){
        this.scores.S = this.scores.S -1;
      }else if(item.MBTIGroup=='TF'){
        this.scores.T = this.scores.T -1;
      }else{
        this.scores.J = this.scores.J -1;
      }
      item.isChecked=false;
    }
    console.log(this.scores.J);
  }
  public onSubmit(form: NgForm){
    if(this.scores.E>1){
      this.MBTIresult = 'E';
    }else{
      this.MBTIresult = 'I';
    }
    if(this.scores.S>1){
      this.MBTIresult = this.MBTIresult + 'S';
    }else{
      this.MBTIresult = this.MBTIresult + 'N';
    }
    if(this.scores.T>1){
      this.MBTIresult = this.MBTIresult + 'T';
    }else{
      this.MBTIresult = this.MBTIresult + 'F';
    }
    if(this.scores.J>1){
      this.MBTIresult = this.MBTIresult + 'J';
    }else{
      this.MBTIresult = this.MBTIresult + 'P';
    }
    form.onReset();
    console.log(this.MBTIresult);
    this.tested = true;
  }
}
