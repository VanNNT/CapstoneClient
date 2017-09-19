import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.less']
})
export class NewReviewComponent implements OnInit {
  public starsTeaching: number;
  public starsFacilities: number;
  public starCare: number;
  public starSocieties: number;
  public starCareer: number;
  constructor() { }

  ngOnInit() {
  }
  public onSubmit(form: NgForm){
    console.log(form.value);
  }
}
