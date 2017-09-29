import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";
import {MBTIQuestion} from "../../model/MBTIModel";
import {MbtiService} from "../../service/mbti/mbti.service";

@Component({
  selector: 'app-mbti-test',
  templateUrl: './mbti-test.component.html',
  styleUrls: ['./mbti-test.component.less']
})
export class MbtiTestComponent implements OnInit {
  public MBTIresult: string;
  public tested: boolean;
  public questions: MBTIQuestion[];
  private listQuestion: any[];
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
  constructor(private router: Router,private mbtiService: MbtiService) { }
  ngOnInit() {
    this.tested = false;
    this.questions=[];
    // this.aaa.forEach(x=>{
    //   this.questions.push(new MBTIQuestion(x));
    // });
    this.mbtiService.getMbti().subscribe((response: any)=>{
      this.listQuestion = response;
      this.listQuestion.forEach(x=>{
           this.questions.push(new MBTIQuestion(x));
         });
      // console.log(this.questions);
    });
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
    console.log(this.scores);
  }
  public onSubmit(form: NgForm){
    if(this.scores.E>=5){
      this.MBTIresult = 'E';
    }else{
      this.MBTIresult = 'I';
    }
    if(this.scores.S>=10){
      this.MBTIresult = this.MBTIresult + 'S';
    }else{
      this.MBTIresult = this.MBTIresult + 'N';
    }
    if(this.scores.T>=10){
      this.MBTIresult = this.MBTIresult + 'T';
    }else{
      this.MBTIresult = this.MBTIresult + 'F';
    }
    if(this.scores.J>=10){
      this.MBTIresult = this.MBTIresult + 'J';
    }else{
      this.MBTIresult = this.MBTIresult + 'P';
    }
    form.onReset();
    console.log(this.MBTIresult);
    this.tested = true;
  }
}
