import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {UniversityService} from "../../../service/university/university.service";
import {ToastsManager} from "ng2-toastr";
import {SearchService} from "../../../service/base-service/search.service";
import {Observable} from "rxjs/Observable";
import {Select2OptionData} from "ng2-select2";
import {RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/switchMap';
// quên impỏrt vào hả
import {BaseService} from "../../../service/base-service/base.service";

@Component({
  selector: 'app-edit-university',
  templateUrl: './edit-university.component.html',
  styleUrls: ['./edit-university.component.less']
})
export class EditUniversityComponent implements OnInit {
  public id: number;
  public current: string;
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
              public toastr: ToastsManager,
              vcr: ViewContainerRef,
              private searchService: SearchService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.universityService.broadcastTextChange("CHỈNH SỬA THÔNG TIN TRƯỜNG");
    this.listLocation = this.searchService.getLocation();
    this.activateRoute.params
      .map((params: any) => params['id'])
      .switchMap((paramsID: string) => this.universityService.getUniversityById(paramsID))
      .subscribe(
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
                      this.valueMajor.push(this.university.majorUniversities[i].major.id);
                    }
              });
          this.current = this.valueMajor.join(' | ');
        }, (err) => {
          this.toastr.error('Vui lòng kiểm tra lại kết nối mạng', 'Thất bại');
        });
    this.options = {
      multiple: true
    }
  }


  getValue(data) {
    this.current = data.value;
    console.log(this.current);
  }

  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

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

  _handleReaderLoaded(e, boolean) {
    var reader = e.target;
    this.imageSrc = reader.result;
    let url = "https://api.imgur.com/3/image";
    var headers = new Headers();
    headers.append('Authorization', 'Client-ID bf915d4106b6639');
    let options = new RequestOptions({headers: headers});
    let data = {
      'image': reader.result.split(',')[1]
    };
    if (boolean === true) {
      this.universityService.uploadFile(url, data, options).subscribe((response: any) => {
        this.baseService.setLogoUni(response.data.link);
      });
    } else {
      this.value = true;
      this.universityService.uploadFile(url, data, options).subscribe((response: any) => {
        this.baseService.setImgUni(response.data.link);
      });
    }
    this.loaded = true;
  }
}
