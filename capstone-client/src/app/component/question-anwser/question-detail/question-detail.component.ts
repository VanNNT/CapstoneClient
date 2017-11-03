import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {UniversityService} from "../../../service/university/university.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseService} from "../../../service/base-service/base.service";
import {Constants} from "../../../constants";
import {ToastsManager} from "ng2-toastr";
declare var $: any;
@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.less']
})
export class QuestionDetailComponent implements OnInit {

  public sub: Subscription;
  private qaId: number;
  public question: any;
  public anwsers: any;
  public userId : number;
  public selectIndex: number;
  constructor(private uniService: UniversityService,private activateRoute: ActivatedRoute, private router: Router,
              private baseService: BaseService, private contants : Constants,private toastr: ToastsManager, private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.sub = this.activateRoute.params.subscribe(params=>{
      this.qaId=params['id'];
    });
    this.userId = this.baseService.getUser().id;
    this.uniService.getQuestionDetail(this.qaId, this.userId).subscribe(res => {
      this.question = res;
    });
    setTimeout(() => {
      $('#summnernote').summernote({
        height: 200,
        toolbar: [
          ['style', ['bold', 'italic', 'underline']],
          ['fontsize', ['fontsize', 'color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['fullscreen', ['fullscreen']]
        ],
        callbacks: {}
      });
    }, 0);
    this.getAnswer();
    // this.anwsers = [
    //   {
    //     'content' : " <p>dasdasd</p><p>sad</p><p>dsadas</p><p>dasd</p>"
    //   }
    // ]
  }

  getAnswer(){
     this.uniService.getAnwserByQuestion(this.qaId).subscribe(res=>{
       this.anwsers = res;
     });
  }
  onSummit(){
    if($('#summnernote').summernote('code').length > 0){
      let data = {
        'title': '',
        "content": $('#summnernote').summernote('code'),
        "type": this.contants.ANWSER,
        "parentId": this.qaId,
        "users": {
          "id": this.baseService.getUser().id
        }
      };
      this.uniService.saveQuestionAnswer(data).subscribe(res => {
         let data = {
           'content' : $('#summnernote').summernote('code'),
           'users': {
             'id': this.userId
           }
         }
         this.anwsers.push(data);
        $('#summnernote').summernote('code', " ");
      }, (error) => {
        this.toastr.error("Không thể kết nối với máy chủ. Vui lòng kiểm tra lại", "Thất bại", {showCloseButton: true});
      });
    }
  }

  deleteQA(){
     let data = {
         "id": this.selectIndex
     }
     this.uniService.deleteQA(data).subscribe(res=>{
       if(this.selectIndex == this.qaId){
         this.router.navigate(['/question'])
       }else{
         for(let i =0; i<this.anwsers.length;i++){
           if(this.anwsers[i].id == this.selectIndex){
             this.anwsers.splice(i,1);
             this.toastr.success("Đã xoá thành công","Thành công",{showCloseButton: true});
             return;
           }
         }
       }
     },(err)=>{
       this.toastr.error("Không thể kết nối với máy chủ. Vui lòng kiểm tra lại", "Thất bại", {showCloseButton: true});
     })
  }
}
