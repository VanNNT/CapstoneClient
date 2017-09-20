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
  public options: Select2OptionData;
  constructor() { }

  ngOnInit() {

  }

}
