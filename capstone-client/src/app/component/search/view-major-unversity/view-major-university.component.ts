import { Component, OnInit, OnDestroy } from '@angular/core';
import {SearchService} from "../../../service/base-service/search.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-major-unversity',
  templateUrl: './view-major-university.component.html',
  styleUrls: ['./view-major-university.component.less']
})
export class ViewMajorUnversityComponent implements OnInit {
  public id: number;
  public sub: Subscription;
  public searchMajor: any[];
  constructor(private searchService: SearchService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activateRoute.params.subscribe(params =>{
      this.id = params['id'];

    });
    let data = {
      "majorId": this.id,
      "locationId": '',
      "universityId": '',
    }
  this.searchService.searchPage(data).subscribe((response: any)=>{
      this.searchMajor = response;
      console.log(this.searchMajor);
  })
  }
    ngOnDestroy(){
    this.sub.unsubscribe();
    }
}
