import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {UniversityService} from "../../../service/university/university.service";
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../../../service/base-service/search.service";
import {ToastsManager} from "ng2-toastr";
import {NgForm} from "@angular/forms";
import {Constants} from "../../../constants";

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
        }, (err) => {
          this.toastr.error('Vui lòng kiểm tra lại kết nối mạng', 'Thất bại');
        });
    this.searchService.getBlock().subscribe((value: any) => {
        this.listBlock = value;
      }, (err) => console.log(err),
      () => {
        // this.valueMajor = [];
        // for (let i = 0; i < this.university.majorUniversities.length; i++) {
        //   if(this.university.majorUniversities[i].isActive){
        //     this.valueMajor.push(this.university.majorUniversities[i].major.id);
        //   }
        // }
      });
    this.options = {
      multiple: true,
      width: '100px'
    }
  }
  getValueMajor(data, id){
    this.currentMajor[id] = data.value;
  }

  onSaveScore(form:NgForm,majorUniId,blockName){
    console.log(form.value);
    let data = {
      "majorUniId": majorUniId,
      "blockName": blockName,
      "majorScore": [
        {
          "score": form.value.year1,
          "year": 2016
        }, {
          "score": form.value.year2,
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
