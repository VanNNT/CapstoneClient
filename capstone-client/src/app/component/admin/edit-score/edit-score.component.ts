import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {UniversityService} from "../../../service/university/university.service";
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../../../service/base-service/search.service";
import {ToastsManager} from "ng2-toastr";
import {NgForm} from "@angular/forms";
import {Constants} from "../../../constants";
import {MajorScore} from "../../../model/MajorScore";

@Component({
  selector: 'app-edit-score',
  templateUrl: './edit-score.component.html',
  styleUrls: ['./edit-score.component.less']
})
export class EditScoreComponent implements OnInit {
  public listBlock: any;
  public majorUniversities: any;
  public options: Select2Options;
  public currentMajor: any = [];
  public listMajorBlock: any = [];
  constructor( private universityService: UniversityService,
               private activateRoute: ActivatedRoute,
               private searchService: SearchService,
               private constant : Constants,
               public toastr: ToastsManager,
               vcr: ViewContainerRef,) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.universityService.broadcastTextChange("CHỈNH SỬA ĐIỂM");
    this.activateRoute.params
      .map((params: any) => params['id'])
      .switchMap((paramsID: string) => this.universityService.getUniversityById(paramsID))
      .subscribe(
        (university: any) => {
          this.majorUniversities = university.majorUniversities;
          console.log(this.majorUniversities);
          this.majorUniversities.forEach(x => {
            this.currentMajor[x.id] = [];
            if(x.blockMajorUniversities.length != 0) {
              x.blockMajorUniversities.forEach(y=>{
                this.currentMajor[x.id].push(new MajorScore(y));
              });
            }
          });
          console.log(this.currentMajor[146]);
        }, (err) => {
          this.toastr.error('Vui lòng kiểm tra lại kết nối mạng', 'Thất bại');
        });
    this.searchService.getBlock().subscribe((value: any) => {
        this.listBlock = value;
      });
    this.options = {
      multiple: true,
      width: '100px'
    }
  }
  getValueMajor(data, id){
    this.listMajorBlock[id] = data.value;
  }

  onSaveScore(form:NgForm,majorUniId,blockName){
    console.log(form.value);
    let data = {
      "majorUniId": majorUniId,
      "blockName": blockName,
      "majorScore": [
        {
          "score": form.value.A2016,
          "year": 2016
        }, {
          "score": form.value.A2017,
          "year": 2017
        }
      ]
    };
    this.universityService.updateScore(data).subscribe((res:any)=>{
      if(res){
        this.toastr.success("",'Thành công');
      }
    },(error)=>{
      this.toastr.error('Vui lòng kiểm tra lại kết nối mạng', 'Thất bại');
    });
  }
}
