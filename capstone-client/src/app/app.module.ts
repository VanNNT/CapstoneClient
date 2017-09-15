import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {appRoutes} from './app.routes';
import { Ng2CompleterModule } from "ng2-completer";

// Component
import { AppComponent } from './app.component';
import { CompanyDetailComponent } from './component/company-detail/company-detail.component';
import { Angular2SocialLoginModule } from 'angular2-social-login';
import { ReviewRatingComponent } from './component/review-rating/review-rating.component';
import { MbtiTestComponent } from './component/mbti-test/mbti-test.component';
import {UserDetailComponent} from './component/user-detail/user-detail.component';

// Service
import {LoginService} from './service/login/login.service';
import {BaseService} from './service/base-service/base.service';
import { SearchComponent } from './component/search/search.component';
import { HomeComponent } from './component/home/home.component';

// Guard
import {CheckLoginGuard} from './guard/check-login/check-login.guard';

import { EqualValidatorDirective } from './directive/equal-validatior/equal-validator.directive';
import { HeaderComponent } from './component/header/header.component';

const providers = {
  'google': {
    'clientId': '583983350151-j9h70lfjearo27fd1ftjutghcsqs434a.apps.googleusercontent.com'
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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    Ng2CompleterModule,
    appRoutes,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    Angular2SocialLoginModule,
    BrowserAnimationsModule


  ],
  providers: [LoginService, BaseService, CheckLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);
