import { Component, OnInit } from '@angular/core';
import {Select2OptionData} from "ng2-select2";
import * as $ from 'jquery';
import {FileUploadComponent} from "../../file-upload/file-upload.component";

@Component({
  selector: 'app-adduniversity',
  templateUrl: './adduniversity.component.html',
  styleUrls: ['./adduniversity.component.less'],
})
export class AdduniversityComponent implements OnInit {
  // public options: Select2OptionData;
  public exampleData: Array<Select2OptionData>;
  public exampleData1: Array<Select2OptionData>;
  public options: Select2Options;
  public value: string[];
  public current: string;
  constructor() { }

  ngOnInit() {
    this.exampleData1 = [
      {
        id: 'basic1',
        text: 'TP. Hồ Chí Minh'
      },
      {
        id: 'Khu vực',
        // disabled: true,
        text: 'Basic 2'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
    ];
    this.exampleData = [
      {
        id: 'multiple1',
        text: 'Multiple 1'
      },
      {
        id: 'multiple2',
        text: 'Multiple 2'
      },
      {
        id: 'multiple3',
        text: 'Multiple 3'
      },
      {
        id: 'multiple4',
        text: 'Multiple 4'
      }
    ];

    this.value = ['multiple2', 'multiple4'];

    this.options = {
      multiple: true
    }

    this.current = this.value.join(' | ');
  }

  changed(data: {value: string[]}) {
    this.current = data.value.join(' | ');
  }

}
