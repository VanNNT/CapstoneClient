import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {UniversityService} from "../../../service/university/university.service";
import {ToastsManager} from "ng2-toastr";
import {SearchService} from "../../../service/base-service/search.service";
import {Constants} from "../../../constants";
import {Observable} from "rxjs/Observable";
import {Select2OptionData} from "ng2-select2";
import {RequestOptions,Headers} from "@angular/http";
declare var $: any;

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.less']
})
export class AddArticleComponent implements OnInit {
  public listUniName: Observable<Select2OptionData[]>;
  public options: Select2Options;
  public valueUniversity;
  constructor(private uniService: UniversityService, private searchService: SearchService,
              private toastr: ToastsManager, private vcr: ViewContainerRef, private constants: Constants) {
    this.toastr.setRootViewContainerRef(vcr)
  }

  ngOnInit() {
    var seft = this;
    $('#summernote').summernote({
      height: 150,
      toolbar: [
        ['style', ['bold', 'italic', 'underline']],
        ['fontsize', ['fontsize','color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['fullscreen',['fullscreen','picture','video']]
      ],
      callbacks:{
        onImageUpload: function(files) {
          var image = $('<img id="load">').attr('src','../../../assets/image/Eclipse.gif' );
          $('#summernote').summernote("insertNode", image[0]);
          var file = files[0];
          var reader = new FileReader();
          reader.onloadend = function() {
            console.log('RESULT', reader)
            let url = "https://api.imgur.com/3/image";
            var headers = new Headers();
            headers.append('Authorization', 'Client-ID bf915d4106b6639');
            let options = new RequestOptions({ headers: headers });
            let data = {
              'image': reader.result.split(',')[1]
            };
            seft.uniService.uploadFile(url,data,options).subscribe((response:any)=>{
              $('#load').remove();
              var image = $('<img>').attr('src', response.data.link);
              $('#summernote').summernote("insertNode", image[0]);
            });
          };
          reader.readAsDataURL(file);
        }
      }
    });
    this.getUniversity();
    this.uniService.broadcastTextChange("Thêm Bài Báo");

    // Placeholder
    this.options = {
      allowClear: true,
      placeholder: {
        id: '0',
        text: 'Chọn một trường đại học'
      }
    };
  }

  getUniversity(){
    this.listUniName = this.searchService.getList(this.constants.UNIVERSITY);
  }
  changedUniversity(value){
  this.valueUniversity = value;
  }
}
