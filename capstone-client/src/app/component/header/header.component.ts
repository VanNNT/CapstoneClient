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
  constructor(private auth: AuthService, private loginService: LoginService, private cdRef:ChangeDetectorRef,private router: Router) {}
  ngOnInit() {
    // $( ".inner" ).append( "<app-home id='home'></app-home>" );
    this.router.navigate(['home']);
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
        this.logged = true;
        this.cdRef.detectChanges();
        localStorage.setItem('USER_INFO', JSON.stringify(this.user));
      }
    );
  }
  logout() {
    this.auth.logout().subscribe(
      (data) => {
        this.logged=false;
        this.cdRef.detectChanges();
        console.log(this.logged);
        this.user = null;
        this.loginService.setLogin(false);
      }
    );
  }
  onSubmit(registerForm : NgForm){
    console.log(registerForm.value);
    registerForm.reset();
  }
  onLogin(value){
    console.log(value);
  }
  clickLink(){
    document.getElementById('linkFake').click();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
