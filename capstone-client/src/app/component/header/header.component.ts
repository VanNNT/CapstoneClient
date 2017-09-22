import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from 'angular2-social-login';
import {LoginService} from '../../service/login/login.service';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit,OnDestroy {
  public user;
  sub: any;
  public logged = false;
  constructor(private router: Router, private loginService: LoginService, private auth: AuthService,private cdRef:ChangeDetectorRef) {

  }
  ngOnInit() {
    this.getUser();
    this.router.navigate(['home']);
  }
  public getUser(): void {
    this.loginService.space.subscribe(value => {
      this.user = value;
      this.cdRef.detectChanges();
    });
  }
  public logout() {
    this.auth.logout().subscribe(
      (data) => {
        this.user = null;
        this.cdRef.detectChanges();
        this.loginService.setLogin(false);
        this.loginService.broadcastTextChange(this.user);
        window.location.replace('/home');
      }
    );
  }
  public onSubmit(registerForm : NgForm){
    console.log(registerForm.value);
    registerForm.reset();
  }
  public onLogin(value){
    console.log(value);
  }
  public clickLink(){
    document.getElementById('linkFake').click();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}