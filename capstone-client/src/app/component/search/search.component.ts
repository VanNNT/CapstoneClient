import { Component, OnInit } from '@angular/core';
import {CompleterData, CompleterService} from "ng2-completer";
import {SearchService} from "../../service/base-service/search.service";
import * as $ from 'jquery';
import {Observable} from "rxjs/Observable";
import {Select2OptionData} from "ng2-select2";
import {Constants} from "../../constants";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  public show;
  public optionMajor: Select2Options;
  public optionUni: Select2Options;
  public optionLocation: Select2Options;
  public valueCurrent: any;
  constructor(private searchService: SearchService, private contant: Constants) {
  }

  public listMajor: Observable<Select2OptionData[]>;
  public listLocation: Observable<Select2OptionData[]>;
  public listUniName: Observable<Select2OptionData[]>;
  public valueMajor: string;
  public valueLocation: string;
  public valueUniversity: string;
  public listSearch: any[] = [];
  public searchMajor: any[];
  isActive: boolean = false;

  ngOnInit() {
    this.listUniName = this.searchService.getList(this.contant.UNIVERSITY);

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
    this.getTopThreeMajor(4314);

    $('#news-uni li').click(function(){
      $('#news-uni li').removeClass("active");
      $(this).addClass("active");
    });
  }

  getTopThreeMajor(value){
    this.isActive = true;
    this.valueCurrent = value;
    this.searchMajor = [];
    this.searchService.getTopThreeMajor(value).subscribe((response: any)=>{
      this.searchMajor = response;
    });
  }

  // Click Search University
  searchUniversity(){
    this.listSearch = [];
    let data = {
      "majorId": this.valueMajor,
      "locationId": this.valueLocation,
      "universityId": this.valueUniversity,
    };
  // List search
    this.searchService.searchPage(data).subscribe((response: any) =>{
        this.listSearch = response;
        if(this.listSearch[0] != null){
          this.show = true;
        }else{
          this.show = false;
        }
    })
  }

  changedMajor(value){
    this.valueMajor = value.value;
  }
  changedLocation(value){
    this.valueLocation = value.value;
  }
  // getA(locationMajor): Observable<Select2OptionData[]>{
  //   return locationMajor.map((majors) => {
  //     majors.majorUnis.unshift({id:'0',name:''});
  //     return majors.majorUnis.map((major) => {
  //       return {id: major.id, text: major.id};
  //     });
  //   });
  // }
  changedUniversity(value){
    this.valueUniversity = value.value;
    if(value.value){
      this.listMajor = this.searchService.getMajor(this.contant.GET_MAJOR_UNIVERSITY+"?universityId="+ parseInt(value.value));
      this.listLocation = this.searchService.getLocation(this.contant.GET_LOCATION_UNIVERSITY+"?universityId="+parseInt(value.value));
      console.log(this.listLocation);
    }else{
      this.listMajor = this.searchService.getMajor(this.contant.MAJOR);
      this.listLocation = this.searchService.getLocation(this.contant.LOCATION);
    }
  }
}

