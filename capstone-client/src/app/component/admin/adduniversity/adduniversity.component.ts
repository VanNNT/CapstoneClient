import { Component, OnInit } from '@angular/core';
import {Select2OptionData} from "ng2-select2";
import * as $ from 'jquery';
import {FileUploadComponent} from "../../file-upload/file-upload.component";
import {SearchService} from "../../../service/base-service/search.service";
import {Constants} from "../../../constants";
@Component({
  selector: 'app-adduniversity',
  templateUrl: './adduniversity.component.html',
  styleUrls: ['./adduniversity.component.less'],
})
export class AdduniversityComponent implements OnInit {
  public exampleData: Array<Select2OptionData>;
  public exampleData1: Array<Select2OptionData>;
  public options: Select2Options;
  public value: string[];
  public current: string;
  constructor(private searchService: SearchService, private constant: Constants) { }

  ngOnInit() {
    // this.searchService.getList(this.constant.UNIVERSITY) .subscribe((response: any) => {
    //   this.universityName = response;
    // })

    this.exampleData1 = [
      {
        id: '1',
        text: 'TP. Hồ Chí Minh '
      },
      {
        id: '2',
        // disabled: true,
        text: 'Basic 2 Hồ Chí MinhHồ Chí MinhHồ Chí MinhHồ Chí MinhHồ Chí Minh'
      },
      {
        id: '3',
        text: 'Basic 3'
      },
      {
        id: '4',
        text: 'Basic 4'
      }
    ];
    console.log(this.exampleData1);
    this.exampleData = [
      {
        id: '1',
        text: 'Multiple 1'
      },
      {
        id: '2',
        text: 'Multiple 2'
      },
      {
        id: '3',
        text: 'Multiple 3'
      },
      {
        id: '4',
        text: 'Multiple 4'
      }
    ];

    this.value = ['multiple2', 'multiple4'];

    this.options = {
      multiple: true
    };

    this.current = this.value.join(' | ');
  }

  changed(data: {value: string[]}) {
    console.log(data);
    this.current = data.value.join(' | ');
  }
  AAA(data){
    console.log(data);
  }
}
