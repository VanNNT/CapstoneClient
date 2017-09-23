///<reference path="constants.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {appRoutes} from './app.routes';
import { Ng2CompleterModule } from "ng2-completer";
import {MdRadioModule} from '@angular/material';

// Component
import { AppComponent } from './app.component';
import { CompanyDetailComponent } from './component/company-detail/company-detail.component';
import { Angular2SocialLoginModule } from 'angular2-social-login';
import { ReviewRatingComponent } from './component/review-rating/review-rating.component';
import { MbtiTestComponent } from './component/mbti-test/mbti-test.component';
import {UserDetailComponent} from './component/user-detail/user-detail.component';
import { SearchComponent } from './component/search/search.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { NewReviewComponent } from './component/new-review/new-review.component';

// Service
import {LoginService} from './service/login/login.service';
import {BaseService} from './service/base-service/base.service';
import {SearchService} from "./service/base-service/search.service";

// Guard
import {CheckLoginGuard} from './guard/check-login/check-login.guard';

import {NgxPaginationModule} from 'ngx-pagination';
import { EqualValidatorDirective } from './directive/equal-validatior/equal-validator.directive';
import { AdminComponent } from './component/admin/admin.component';
import { ListuniversityComponent } from './component/admin/listuniversity/listuniversity.component';
import { AdduniversityComponent } from './component/admin/adduniversity/adduniversity.component';
import {Select2Module} from "ng2-select2";
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import {RatingModule} from "ngx-bootstrap";
import {Constants} from "./constants";
import {ToastModule} from "ng2-toastr/ng2-toastr";

const providers = {
  'google': {
    'clientId': '525175435249-fcon5618ugd00jij2o066g7k3266n3mb.apps.googleusercontent.com'
  },
  'facebook': {
    'clientId': '1947926578821346',
    'apiVersion': 'v2.4'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailComponent,
    ReviewRatingComponent,
    SearchComponent,
    MbtiTestComponent,
    HomeComponent,
    UserDetailComponent,
    EqualValidatorDirective,
    HeaderComponent,
    AdminComponent,
    ListuniversityComponent,
    AdduniversityComponent,
    FileUploadComponent,
    NewReviewComponent
  ],
  imports: [
    Select2Module,
    NgxPaginationModule,
    BrowserModule,
    Ng2CompleterModule,
    appRoutes,
    FormsModule,
    MdRadioModule,
    ReactiveFormsModule,
    HttpModule,
    Angular2SocialLoginModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    RatingModule,
    ToastModule.forRoot()
  ],
  providers: [LoginService, BaseService, CheckLoginGuard, SearchService,Constants],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);
