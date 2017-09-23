import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Constants} from "../../../constants";
import {SearchService} from "../../../service/base-service/search.service";
import {University} from "../../../model/University";

@Component({
  selector: 'app-listuniversity',
  templateUrl: './listuniversity.component.html',
  styleUrls: ['./listuniversity.component.less']
})
export class ListuniversityComponent implements OnInit {
  // public title: 'List University';
  constructor(private router: Router, private searchService: SearchService, private constant: Constants) { }

  public universityName = [];
  ngOnInit() {
    this.searchService.GetList(this.constant.UNIVERSITY) .subscribe((response: any) => {
      for(var i = 0;i<response.length;i++){

        this.universityName.push({id:response[i].id+"",text:response[i].name});

      }
      console.log(this.universityName);
    })
  }
}
