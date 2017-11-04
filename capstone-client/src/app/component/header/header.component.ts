import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from 'angular2-social-login';
import {LoginService} from '../../service/login/login.service';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UniversityService} from "../../service/university/university.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public user;
  sub: any;
  private url;
  public count = 0;
  constructor(private router: Router, private uniService: UniversityService,
              private loginService: LoginService,
              private auth: AuthService,private cdRef:ChangeDetectorRef) {
    router.events.subscribe((data:any) => { this.url = data.url; });
  }
  ngOnInit() {
    this.getUser();
    this.getCount();
    if(!this.user){
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
    console.log(this.url);
    if(this.url == '/'){
      this.router.navigate(['home'])
    }
    if(this.user){
      this.uniService.getQuestionByUser(this.user.id).subscribe(res=>{
        if(res){
          for(let i = 0; i<res.length; i++){
            this.count = this.count + res[i].count;
          }
        }
      });
    }
  }
  public getUser(): void {
    this.loginService.space.subscribe(value => {
      this.user = value;
      this.cdRef.detectChanges();
    });
  }

  public getCount(): void {
    this.uniService.title.subscribe(value=>{
      this.count = value;
      this.cdRef.markForCheck();
    })
  }
  public logout(value) {
    if(value){
      this.auth.logout().subscribe(
        (data) => {
          this.user = null;
          this.cdRef.detectChanges();
          this.loginService.setLogin(false);
          this.loginService.broadcastTextChange(this.user);
          window.location.replace('/home');
          localStorage.removeItem('currentUser');
        }
      );
    }else{
      this.user = null;
      this.cdRef.detectChanges();
      this.loginService.setLogin(false);
      this.loginService.broadcastTextChange(this.user);
      window.location.replace('/home');
      localStorage.removeItem('currentUser');
    }
  }
  public clickLink(){
    document.getElementById('linkFake').click();
  }
  clickLinkQuestion(){
    document.getElementById('linkFakeQuestion').click();
  }
}
