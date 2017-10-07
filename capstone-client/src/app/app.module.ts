///<reference path="constants.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {appRoutes} from './app.routes';
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
import {MbtiService} from "./service/mbti/mbti.service";
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
import {UniversityService} from "./service/university/university.service";
import { EditUniversityComponent } from './component/admin/edit-university/edit-university.component';
import { EditScoreComponent } from './component/admin/edit-score/edit-score.component';
import { AddNewsComponent } from './component/admin/add-news/add-news.component';
import { ShowNewsComponent } from './component/show-news/show-news.component';
import {CheckRoleGuard} from "./guard/check-role/check-role.guard";
import {ReviewService} from "./service/review/review.service";
import {NgbModule, NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

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
    NewReviewComponent,
    EditScoreComponent,
    EditUniversityComponent,
    AddNewsComponent,
    ShowNewsComponent
  ],
  imports: [
    Select2Module,
    NgxPaginationModule,
    BrowserModule,
    appRoutes,
    FormsModule,
    MdRadioModule,
    ReactiveFormsModule,
    HttpModule,
    Angular2SocialLoginModule,
    BrowserAnimationsModule,
    RatingModule,
    ToastModule.forRoot(),
    NgbModule
  ],
  providers: [LoginService, BaseService, CheckLoginGuard,
    CheckRoleGuard, SearchService,Constants,
    UniversityService, MbtiService, ReviewService,NgbRatingConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);
