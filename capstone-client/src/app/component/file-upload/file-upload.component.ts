import {Component, Input, OnInit} from '@angular/core';
import {BaseService} from "../../service/base-service/base.service";
import {Http, RequestOptions,Headers} from "@angular/http";
import {UniversityService} from "../../service/university/university.service";

@Component({
  selector: 'file-uploader',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less'],
  inputs:['activeColor','baseColor','overlayColor']
})
export class FileUploadComponent {
  @Input() name: string;

  constructor(private baseService: BaseService, private uniService : UniversityService){}
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';
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
    this.handleInputChange(e);
  }

  handleImageLoad() {
    this.imageLoaded = true;
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    var reader = e.target;
    this.imageSrc = reader.result;
    let url = "https://api.imgur.com/3/image";
    var headers = new Headers();
    headers.append('Authorization', 'Client-ID bf915d4106b6639');
    let options = new RequestOptions({ headers: headers });
    let data = {
      'image': reader.result.split(',')[1]
    };
    if(this.name === 'logo'){
      this.uniService.uploadFile(url,data,options).subscribe((response:any)=>{
        this.baseService.setLogoUni(response.data.link);
      });
    }else{
      this.value = true;
      this.uniService.uploadFile(url,data,options).subscribe((response:any)=>{
        this.baseService.setImgUni(response.data.link);
      });
    }
    this.loaded = true;
  }

}
