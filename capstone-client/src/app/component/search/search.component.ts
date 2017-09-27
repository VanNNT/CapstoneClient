import { Component, OnInit } from '@angular/core';
import {CompleterData, CompleterService} from "ng2-completer";
import {SearchService} from "../../service/base-service/search.service";
import {Constants} from "../../constants";
import {forEach} from "@angular/router/src/utils/collection";
import {Observable} from "rxjs/Observable";
import {Select2OptionData} from "ng2-select2";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  public show: boolean = false;
  protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  public optionMajor: Select2Options;
  public optionUni: Select2Options;
  public optionLocation: Select2Options;

  constructor(private searchService: SearchService, private constant: Constants) {

  }



 // ----------- Test API ----------- SearchService
  public listMajor: Observable<Select2OptionData[]>;
  public listLocation: Observable<Select2OptionData[]>;
  public listUniName: Observable<Select2OptionData[]>;
  public allUniversity: any[];
  public topUniversity: any[];

  ngOnInit() {

    this.listMajor = this.searchService.getMajor();
    this.listLocation = this.searchService.getLocation();
    this.listUniName = this.searchService.getList();
    this.searchService.getListUniName().subscribe((response: any) => {
      this.allUniversity = response;
      console.log(response);
    })
    this.optionMajor = {
      allowClear: true,
      placeholder: {
        id: '0',
        text: 'Chọn một ngành'
      }
    };
    this.optionUni = {
      allowClear: true,
      placeholder: {
        id: '0',
        text: 'Chọn một trường đại học'
      }
    };
    this.optionLocation = {
      allowClear: true,
      placeholder: {
        id: '0',
        text: 'Chọn một địa điểm'
      }
    };

  }

  //Click show table university
  showUniversity(agree: boolean){
    this.show = true;
    console.log(this.allUniversity);
  }
}
