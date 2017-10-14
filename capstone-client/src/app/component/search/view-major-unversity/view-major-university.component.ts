import { Component, OnInit, OnDestroy } from '@angular/core';
import {SearchService} from "../../../service/base-service/search.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-major-unversity',
  templateUrl: './view-major-university.component.html',
  styleUrls: ['./view-major-university.component.less']
})
export class ViewMajorUnversityComponent implements OnInit {
  public id: number;
  public sub: Subscription;
  public searchMajor: any[];
  public majorName: string;
  public majorImg: string;
  constructor(private searchService: SearchService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.sub = this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    if(this.id==4314){
      this.majorName = "Công nghệ thông tin";
      this.majorImg = "http://thecomfortkillers.com/wp-content/uploads/2016/12/contribute-to-soulciti.jpg";
    }else if(this.id==4308){
      this.majorName = "Quản trị kinh doanh";
      this.majorImg = "https://image-store.slidesharecdn.com/5b4fbfed-faf5-4116-8c9a-607c9cff2392-original.jpeg";
    }else if(this.id==4309){
      this.majorName = "Tài chính – Ngân hàng";
      this.majorImg = "http://i-pic.narod.ru/92-ekonomika-1/09_ekonom.jpg";
    }else if(this.id==4327){
      this.majorName = "Y Dược";
      this.majorImg = "https://haivisio.eu/wp-content/uploads/2013/11/slider_1.jpg";
    }else {
      this.majorName = "Quốc phòng - An ninh";
      this.majorImg = "https://www.thetimes.co.uk/imageserver/image/methode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F3737c0ec-ebb5-11e6-82a4-7ecb7724fff8.jpg?crop=3034%2C1707%2C511%2C213";
    }

      this.searchMajor = [];
      this.searchService.getMajorByID(this.id).subscribe((response: any)=>{
        this.searchMajor = response;
        console.log(response);
      });
  }
}
