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

  constructor(private searchService: SearchService) {
  }

  public listMajor: Observable<Select2OptionData[]>;
  public listLocation: Observable<Select2OptionData[]>;
  public listUniName: Observable<Select2OptionData[]>;
  public allUniversity: any[];
  public topUniversity: any[] = [];
  public valueMajor: string;
  public valueLocation: string;
  public valueUniversity: string;
  public listSearch: any[] = [];

  ngOnInit() {
    this.listMajor = this.searchService.getMajor();
    this.listLocation = this.searchService.getLocation();
    this.listUniName = this.searchService.getList();
    //Add top 6 universities priority 0
    this.searchService.getListUniName().subscribe((response: any) => {
      this.allUniversity = response;
      for(let i = 0;i < this.allUniversity.length ;i++){
        if(this.allUniversity[i].priority == 0){
          this.topUniversity.push(this.allUniversity[i]);
        }
        if (this.topUniversity.length == 6){
          return;
        }
      }
    });

    //Placeholder search input
    this.optionMajor = {
      allowClear: true,
      placeholder: {
        id: '0',
        text: 'Chọn ngành'
      }
    };
    this.optionUni = {
      allowClear: true,
      placeholder: {
        id: '0',
        text: 'Chọn trường đại học'
      }
    };
    this.optionLocation = {
      allowClear: true,
      placeholder: {
        id: '0',
        text: 'Chọn địa điểm'
      }
    };
  }

  // Click search university
  searchUniversity(){
    this.listSearch = [];
    this.show = false;
    let data = {
      "majorId": this.valueMajor,
      "locationId": this.valueLocation,
      "universityId": this.valueUniversity,
    }
// List search
    this.searchService.searchPage(data).subscribe((response: any) =>{
        this.listSearch = response;
        if(this.listSearch[0] != null){
          this.show = true;
        }
    })
  }

  changedMajor(value){
    this.valueMajor = value.value;
  }
  changedLocation(value){
    this.valueLocation = value.value;
  }
  changedUniversity(value){
    this.valueUniversity = value.value;
  }
}
