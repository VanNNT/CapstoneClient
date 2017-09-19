import {Component, OnInit, OnDestroy, ChangeDetectorRef, ViewContainerRef} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from 'angular2-social-login';
import {LoginService} from './service/login/login.service';
import {NgForm} from "@angular/forms";
import {Constants} from "./constants";
import {MdDialog, MdDialogRef} from "@angular/material";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {User} from "./model/User";
import {BaseService} from "./service/base-service/base.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  public user: User;
  public message;
  sub: any;
  public title;
  public content;
  constructor(private auth: AuthService, private loginService: LoginService, private baseService: BaseService,
              private contants: Constants,public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {

  }
  public login(provider) {
    this.sub = this.auth.login(provider).subscribe(
      (data) => {
        console.log(data);
        this.baseService.setUser(data);
        this.user = this.baseService.getUser();
        this.loginService.setLogin(true);
        $('#myModal').hide();
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        this.loginService.broadcastTextChange(this.user);
      }
    );
  }

  public onRegister(registerForm: NgForm){
    let data = {
      'username': registerForm.value.nameRegister,
      'password': registerForm.value.passResgiter,
      'email': registerForm.value.registerEmail
    };
    this.loginService.register(this.contants.REGISTER,data).subscribe((response:any)=>{
         if(response){
           $('#myModal').hide();
           $('body').removeClass('modal-open');
           $('.modal-backdrop').remove();
           this.toastr.success('Bạn đã đăng ký thành công', 'Thành công!');
         }
      },error=>{
        if(error.status==403){
          this.toastr.error('Tài khoản này đã tồn tại. Vui lòng thử lại', 'Thất bại');
          registerForm.onReset();
        }else{
          this.toastr.error('Vui lòng kiểm tra lại kết nối mạng', 'Thất bại');
        };
      });
  }
  public onLogin(value){
    let data = {
      'username': value.username,
      'password': value.password
    };
    this.loginService.register(this.contants.LOGIN,data).subscribe((response:any)=>{
      if(response){
        this.loginService.setLogin(true);
        this.baseService.setUser(response);
        this.user = this.baseService.getUser();
        $('#myModal').hide();
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        this.loginService.broadcastTextChange(this.user);
      }
    },error=>{
      if(error.status==409){
        this.toastr.error('Username/Password không đúng. Vui lòng thử lại.', 'Thất bại!');
      }else{
        this.toastr.error('Vui lòng kiểm tra lại kết nối mạng', 'Thất bại');
      };
    });
  }
  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }
}
