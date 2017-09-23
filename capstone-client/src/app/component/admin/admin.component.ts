import {Component, Input, OnInit} from '@angular/core';
import {ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./custom.css','./admin.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
   @Input() title: string = 'DANHLT';
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['admin/list-university']);
  }
  setTitle(title: string){
    this.title = title;
  }
}
