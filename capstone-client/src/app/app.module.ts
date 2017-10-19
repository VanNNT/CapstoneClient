///<reference path="constants.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {appRoutes} from './app.routes';
import {MdRadioModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import {ToastModule} from "ng2-toastr/ng2-toastr";
import {Select2Module} from "ng2-select2";
import {RatingModule} from "ngx-bootstrap";
import {NgbModule, NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

// Component
import { AppComponent } from './app.component';
import { CompanyDetailComponent } from './component/university-detail/company-detail.component';
import { Angular2SocialLoginModule } from 'angular2-social-login';
import { ReviewRatingComponent } from './component/review-rating/review-rating.component';
import { MbtiTestComponent } from './component/mbti-test/mbti-test.component';
import {UserDetailComponent} from './component/user-detail/user-detail.component';
import { SearchComponent } from './component/search/search.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { NewReviewComponent } from './component/new-review/new-review.component';
import { EditUniversityComponent } from './component/admin/edit-university/edit-university.component';
import { EditScoreComponent } from './component/admin/edit-major-detail/edit-score.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { AdminComponent } from './component/admin/admin.component';
import { ListuniversityComponent } from './component/admin/listuniversity/listuniversity.component';
import { AdduniversityComponent } from './component/admin/adduniversity/adduniversity.component';
import { ApproveReivewComponent } from './component/admin/approve-reivew/approve-reivew.component';

// Service
import {LoginService} from './service/login/login.service';
import {BaseService} from './service/base-service/base.service';
import {SearchService} from "./service/base-service/search.service";
import {MbtiService} from "./service/mbti/mbti.service";
import {ReviewService} from "./service/review/review.service";
import {UniversityService} from "./service/university/university.service";

// Guard
import {CheckLoginGuard} from './guard/check-login/check-login.guard';
import {CheckRoleGuard} from "./guard/check-role/check-role.guard";

import { EqualValidatorDirective } from './directive/equal-validatior/equal-validator.directive';
import {Constants} from "./constants";
import { ShowNewsComponent } from './component/show-news/show-news.component';
import { ViewMajorUnversityComponent } from './component/search/view-major-unversity/view-major-university.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { EditMajorComponent } from './component/admin/edit-major/edit-major.component';
import {DecimalPipe} from "@angular/common";
import { MajorDetailComponent } from './component/major-detail/major-detail.component';

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
    ShowNewsComponent,
    ViewMajorUnversityComponent,
    ApproveReivewComponent,
    OrderByPipe,
    EditMajorComponent,
    MajorDetailComponent,
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
    UniversityService, MbtiService, ReviewService,NgbRatingConfig,DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);
