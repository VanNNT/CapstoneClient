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
  public value: string[] = [];
  public currentLocation: string;
  public currentMajor: any = [];
  public listMajor: Observable<Select2OptionData[]>;
  public listLocation: Observable<Select2OptionData[]>;
  constructor(private searchService: SearchService,private uniService: UniversityService,
              private constant: Constants, private baseService: BaseService,public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.uniService.broadcastTextChange("THÊM TRƯỜNG MỚI");
    this.listMajor = this.searchService.getMajor();
    this.listLocation = this.searchService.getLocation();
    this.options = {
      multiple: true
    };
  }

  getValueMajor(data) {
    this.currentMajor = data;
  }
  getValueLocation(data){
    this.currentLocation = data.value;
  }
  onSave(form: NgForm){
    if(this.currentMajor.value){
      for(var i = 0; i < this.currentMajor.value.length; i++){
        this.currentMajor.value[i] = parseInt(this.currentMajor.value[i]);
      }
    }
    let data = {
      'code': form.value.code,
      'name': form.value.name,
      'email': form.value.email,
      'phone': form.value.phone,
      'logo': this.baseService.getLogoUni(),
      'image': this.baseService.getImgUni(),
      'description': form.value.des,
      'priority': form.value.pri
    };
    this.uniService.createUniversity(this.constant.CREATE_UNIVESITY,data).subscribe((response:any)=>{
      if(response){
        if(this.currentLocation || this.currentMajor.value){
          let dataLocation = {
            'location': {
              'id': this.currentLocation? parseInt(this.currentLocation) : null,
            },
            'majorId': this.currentMajor.value,
            'university':{
              'id': response.id ? response.id : null
            }
          };
          this.uniService.addLocation(this.constant.UPDATE_LOCATION_MAJOR,dataLocation).subscribe((res:any)=>{
            if(res){
              this.toastr.success('Bạn đã tạo mới thành công', 'Thành công!');
            }
          },error=>{
            if(error.status==this.constant.NOT_FOUND){
              this.toastr.error('Trường đại học này không tồn tại. Vui lòng thử lại', 'Thất bại');
            }else{
              this.toastr.error('Vui lòng kiểm tra lại kết nối mạng', 'Thất bại');
            };
          });
        }else{
          this.toastr.success('Bạn đã tạo mới thành công', 'Thành công!');
        }
      }
    },error=>{
      if(error.status==this.constant.CONFLICT){
        this.toastr.error('Trường đại học này đã tồn tại. Vui lòng thử lại', 'Thất bại');
      }else{
        this.toastr.error('Vui lòng kiểm tra lại kết nối mạng', 'Thất bại');
      };
    });
  }

}
