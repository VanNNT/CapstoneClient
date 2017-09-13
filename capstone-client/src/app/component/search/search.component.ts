import { Component, OnInit } from '@angular/core';
import {CompleterData, CompleterService} from "ng2-completer";
import {SearchService} from "../../service/base-service/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  public pages: number[];
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

  constructor(private completerService: CompleterService, private searchService: SearchService) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
  }

 // ----------- Test API ----------- SearchService
  public universityapi: any[];
  ngOnInit() {
  this.searchService.GetList().subscribe((response: any) => {
    this.universityapi =response;
  })
    this.pages =[1, 2, 3, 4, 5];
  }
  //Click show table uniservity
  showUniversity(agree: boolean){
    this.show = true;
  }
}
