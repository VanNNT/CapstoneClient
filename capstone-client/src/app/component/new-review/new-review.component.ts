import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.less']
})
export class NewReviewComponent implements OnInit {
  public sub: Subscription;
  private id: number;
  public starsTeaching: number;
  public starsFacilities: number;
  public starCare: number;
  public starSocieties: number;
  public starCareer: number;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activateRoute.params.subscribe(params=>{
      this.id=params['id'];
    });
    $('#summernote').summernote({
      height: 150,
      toolbar: false
    });
  }

  public onSubmit(form: NgForm){
    console.log(form.value);
    console.log($('#summernote').summernote('code'));
  }
}
