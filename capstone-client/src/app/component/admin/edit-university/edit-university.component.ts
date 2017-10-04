import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {UniversityService} from "../../../service/university/university.service";
import {ToastsManager} from "ng2-toastr";
import {SearchService} from "../../../service/base-service/search.service";
import {Observable} from "rxjs/Observable";
import {Select2OptionData} from "ng2-select2";
import {RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/switchMap';
import * as _ from 'underscore';
import {BaseService} from "../../../service/base-service/base.service";
import {NgForm} from "@angular/forms";
import {Constants} from "../../../constants";
declare var $: any;
@Component({
  selector: 'app-edit-university',
  templateUrl: './edit-university.component.html',
  styleUrls: ['./edit-university.component.less']
})
export class EditUniversityComponent implements OnInit {
  public id: number;
  public valueLocation: string;
  public currentMajor: any = [];
  public options: Select2Options;
  public listMajor: any;
  public listLocation: Observable<Select2OptionData[]>;
  public sub: Subscription;
  public university: any;
  public logoSrc: any = '';
  public imageSrc: any = '';
  public valueMajor: number[] = [];

  constructor(private activateRoute: ActivatedRoute,
              private universityService: UniversityService,
              private baseService: BaseService,
              private constant: Constants,
              public toastr: ToastsManager,
              vcr: ViewContainerRef,
              private router: Router,
              private searchService: SearchService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    $('#summernote').summernote({
      height: 150,
      toolbar: false
      // toolbar: [
      //   ['style', ['bold', 'italic', 'underline']],
      //   ['fontsize', ['fontsize','color']],
      //   ['insert',['picture', 'link', 'video', 'table']],
      //   ['para', ['ul', 'ol', 'paragraph']],
      //   ['height', ['height']],
      //   ['fullscreen',['fullscreen']]
      // ]
    });
    this.universityService.broadcastTextChange("CHỈNH SỬA THÔNG TIN TRƯỜNG");
    this.sub = this.activateRoute.params.subscribe(params=>{
      this.id = params['id'];
    });
    this.listLocation = this.searchService.getLocation();
    this.universityService.getUniversityById(this.id).subscribe(
        (university: any) => {
          this.university = university;
          this.logoSrc = university.logo;
          this.imageSrc = university.image;
          this.searchService.getMajor()
            .subscribe((value: any) => {
                this.listMajor = value;
              }, (err) => console.log(err),
              () => {
                this.valueMajor = [];
                for (let i = 0; i < this.university.majorUniversities.length; i++) {
                  if(this.university.majorUniversities[i].isActive){
                    this.valueMajor.push(this.university.majorUniversities[i].major.id);
                  }
                    }
              });
        }, (err) => {
          this.toastr.error('Vui lòng kiểm tra lại kết nối mạng', 'Thất bại');
        });
    this.options = {
      multiple: true
    }
  }


  getValueLocation(data) {
    this.valueLocation = data.value;
  }
  getValueMajor(data){
    this.currentMajor = data;
  }

  onEdit(form: NgForm){
    let listMajorRemove: any[]= [];
    if(this.currentMajor.value){
      for(var i = 0; i < this.currentMajor.value.length; i++){
        this.currentMajor.value[i] = parseInt(this.currentMajor.value[i]);
      }
    }
    listMajorRemove = _.difference(this.valueMajor, this.currentMajor.value);
    console.log(listMajorRemove);
    console.log($('#summernote').summernote('code'));
    let data = {
      'id': this.id,
      'code': this.university.code,
      'name': form.value.name,
      'email': form.value.email,
      'phone': form.value.phone,
      'logo': this.baseService.getLogoUni()? this.baseService.getLogoUni(): this.logoSrc,
      'image': this.baseService.getImgUni()? this.baseService.getImgUni(): this.imageSrc,
      'description': $('#summernote').summernote('code'),
      'priority': form.value.pri
    };
    this.universityService.updateUniversity(this.constant.UPDATE_UNIVESITY,data).subscribe((response:any)=>{
      if(response){
        if(this.valueLocation || this.currentMajor.value){
          let dataLocation = {
            'location': {
              'id': this.valueLocation? parseInt(this.valueLocation) : null,
            },
            'majorId': this.currentMajor.value.length !=0 ? this.currentMajor.value : null,
            'university':{
              'id': this.id
            }
          };
          this.universityService.updateLocationMajor(this.constant.UPDATE_LOCATION_MAJOR,dataLocation).subscribe((res:any)=>{
            if(res){
              if(listMajorRemove.length != 0){
                let dataMajor = {
                  'majorId': listMajorRemove,
                  'university': {
                    'id': this.id
                  }
                };
                this.universityService.removeMajor(this.constant.REMOVE_MAJOR_UNI,dataMajor).subscribe((res:any)=>{
                  if(res){
                    this.toastr.success('Bạn đã tạo mới thành công', 'Thành công!');
                    //this.router.navigate(['/admin/list-university']);
                  }
                })
              }
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
          //this.router.navigate(['/admin/list-university']);
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

  // Upload image
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  value: boolean = false;
  handleDragEnter() {
    this.dragging = true;
  }
  handleDragLeave() {
    this.dragging = false;
  }
  handleDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e, true);
  }
  handleImageLoad() {
    this.imageLoaded = true;
  }
  handleInputChange(e, boolean) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this, boolean);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(boolean,e) {
    var reader = e.target;
    let url = "https://api.imgur.com/3/image";
    var headers = new Headers();
    headers.append('Authorization', 'Client-ID bf915d4106b6639');
    let options = new RequestOptions({headers: headers});
    let data = {
      'image': reader.result.split(',')[1]
    };
    if (boolean === true) {
      this.logoSrc = reader.result;
      this.universityService.uploadFile(url, data, options).subscribe((response: any) => {
        this.baseService.setLogoUni(response.data.link);
      });
    } else {
      this.imageSrc = reader.result;
      this.value = true;
      this.universityService.uploadFile(url, data, options).subscribe((response: any) => {
        this.baseService.setImgUni(response.data.link);
      });
    }
    this.loaded = true;
  }
  //End upload img
}
