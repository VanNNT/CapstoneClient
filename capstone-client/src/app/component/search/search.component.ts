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
  protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];
  protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];

  constructor(private completerService: CompleterService, private searchService: SearchService, private constant: Constants) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
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
    this.searchService.getAllUni().subscribe((response: any) => {
      this.allUniversity = response;
    })

  }

  //Click show table university
  showUniversity(agree: boolean){
    this.show = true;
    console.log(this.allUniversity);
  }
}
