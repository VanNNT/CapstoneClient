import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {appRoutes} from './app.routes';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
// Component
import { AppComponent } from './app.component';
import { CompanyDetailComponent } from './component/company-detail/company-detail.component';
import { Angular2SocialLoginModule } from 'angular2-social-login';
import { ReviewRatingComponent } from './component/review-rating/review-rating.component';
import { Ng2CompleterModule } from "ng2-completer";
// Service
import {LoginService} from './service/login/login.service';
import {BaseService} from './service/base-service/base.service';

// Guard
import {CheckLoginGuard} from './guard/check-login/check-login.guard';

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
    ReviewRatingComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    Angular2SocialLoginModule,
    BrowserAnimationsModule,
    Ng2AutoCompleteModule,
    Ng2CompleterModule,

  ],
  providers: [LoginService, BaseService, CheckLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);
