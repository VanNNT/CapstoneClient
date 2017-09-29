import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Select2OptionData} from "ng2-select2";
import {SearchService} from "../../../service/base-service/search.service";
import {Constants} from "../../../constants";
import {Observable} from "rxjs/Observable";
import {NgForm} from "@angular/forms";
import {BaseService} from "../../../service/base-service/base.service";
import {UniversityService} from "../../../service/university/university.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-adduniversity',
  templateUrl: './adduniversity.component.html',
  styleUrls: ['./adduniversity.component.less'],
})
export class AdduniversityComponent implements OnInit {
  public options: Select2Options;
  public value: number[];
  public current: string;
  public listMajor: Observable<Select2OptionData[]>;
  public listLocation: Observable<Select2OptionData[]>;
  constructor(private searchService: SearchService,private uniService: UniversityService,
              private constant: Constants, private baseService: BaseService,public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {

    this.listMajor = this.searchService.getMajor();
    this.listLocation = this.searchService.getLocation();

    this.value = [4307,4308];

    this.options = {
      multiple: true
    };

    this.current = this.value.join(' | ');
  }

  changed(data: {value: string[]}) {
    this.current = data.value.join(' | ');
  }
  getValue(data){
    this.current = data.value;
    // console.log(data);
  }
  onSave(form: NgForm){
    let data = {
      'code': form.value.code,
      'name': form.value.name,
      'email': form.value.email,
      'phone': form.value.phone,
      'logo': this.baseService.getLogoUni(),
      'image': this.baseService.getImgUni(),
      'description': form.value.des
    };
    this.uniService.createUniversity(this.constant.CREATE_UNIVESITY,data).subscribe((response:any)=>{
      if(response){
          let dataLocation = {
            'location': {
              'id': this.current? parseInt(this.current) : null,
            },
            'id': response.id ? response.id : null
          };
          this.uniService.addLocation(this.constant.ADD_LOCATION,dataLocation).subscribe((res:any)=>{
            console.log(res);
            console.log('ahihi');
          });
      }
    },error=>{
      this.toastr.error('Trường học này đã tồn tại. Vui lòng thử lại', 'Thất bại');
    });
    console.log(form.value);
  }

}
