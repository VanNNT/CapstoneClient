import { Component, OnInit } from '@angular/core';
import {Select2OptionData} from "ng2-select2";
import {SearchService} from "../../../service/base-service/search.service";
import {Constants} from "../../../constants";
import {Observable} from "rxjs/Observable";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-adduniversity',
  templateUrl: './adduniversity.component.html',
  styleUrls: ['./adduniversity.component.less'],
})
export class AdduniversityComponent implements OnInit {
  public options: Select2Options;
  public value: string[];
  public current: string;
  public listMajor: Observable<Select2OptionData[]>;
  public listLocation: Observable<Select2OptionData[]>;
  constructor(private searchService: SearchService, private constant: Constants) { }

  ngOnInit() {
    this.listMajor = this.searchService.getMajor();
    this.listLocation = this.searchService.getLocation();

    this.value = [];

    this.options = {
      multiple: true
    };

    this.current = this.value.join(' | ');
  }

  // changed(data: {value: string[]}) {
  //   this.current = data.value.join(' | ');
  // }

  onSave(form: NgForm){
    console.log(form.value);
  }

}
