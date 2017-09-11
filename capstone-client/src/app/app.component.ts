import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from 'angular2-social-login';
import {LoginService} from './service/login/login.service';
import {NgForm} from "@angular/forms";
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit, OnDestroy {
  public user;
  sub: any;
  constructor(private auth: AuthService, private loginService: LoginService) {
  }
  ngOnInit() {
    $(window).scroll(function () {
    const height = $(window).scrollTop();
    const isFollowed = false;
    if (height > 350 && !isFollowed) {
      $('#company-fixed-box').fadeIn('normal');
    } else {
      $('#company-fixed-box').hide();
    }
  });
  }
  login(provider) {
    this.sub = this.auth.login(provider).subscribe(
      (data) => {
        console.log(data);
        this.user = data;
        this.loginService.setLogin(true);
         $('#myModal').hide();
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
      }
    );
  }
  logout() {
    this.auth.logout().subscribe(
      (data) => {
        console.log(data);
        this.user = null;
        this.loginService.setLogin(false);
      }
    );
  }
  onSubmit(registerForm : NgForm){
    console.log(registerForm.value);
    registerForm.reset();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
