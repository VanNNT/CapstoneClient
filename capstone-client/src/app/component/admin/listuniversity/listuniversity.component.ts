import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Constants} from "../../../constants";
import {SearchService} from "../../../service/base-service/search.service";
import {Select2OptionData} from "ng2-select2";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-listuniversity',
  templateUrl: './listuniversity.component.html',
  styleUrls: ['./listuniversity.component.less']
})
export class ListuniversityComponent implements OnInit {
  // public title: 'List University';
  constructor(private router: Router, private searchService: SearchService, private constant: Constants) { }

  public listUniName: Observable<Select2OptionData[]>;
  ngOnInit() {
    this.listUniName = this.searchService.getList();
  }
}
