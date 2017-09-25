import {Component, Input, OnInit} from '@angular/core';
import {BaseService} from "../../service/base-service/base.service";

@Component({
  selector: 'file-uploader',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less'],
  inputs:['activeColor','baseColor','overlayColor']
})
export class FileUploadComponent {
  @Input() name: string;

  constructor(private baseService: BaseService){}
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
    if(this.name === 'logo'){
      this.baseService.setLogoUni(this.imageSrc);
    }else{
      this.value = true;
      this.baseService.setImgUni(this.imageSrc);
    }
    this.loaded = true;
  }

}
