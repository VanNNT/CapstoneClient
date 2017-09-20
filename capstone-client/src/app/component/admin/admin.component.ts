import {Component, Input, OnInit} from '@angular/core';
import {ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./custom.css','./admin.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
   @Input() title: string = 'Vui Long Chon Menu';
  constructor() { }

  ngOnInit() {
  }
  setTitle(title: string){
    this.title = title;
  }
}
