import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {UniversityService} from "../../../service/university/university.service";
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../../../service/base-service/search.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-edit-score',
  templateUrl: './edit-score.component.html',
  styleUrls: ['./edit-score.component.less']
})
export class EditScoreComponent implements OnInit {
  public listMajor: any;
  public majorUniversities: any;

  constructor( private universityService: UniversityService,
               private activateRoute: ActivatedRoute,
               private searchService: SearchService,
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
  }

}
