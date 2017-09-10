import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import {appRoutes} from './app.routes';
import { AppComponent } from './app.component';

import { LoginformComponent } from './loginpages/loginfrom.component';
import {HeaderComponent} from './header/header.component';
import {MainbodyComponent} from './mainbody/mainbody.component';
import {FooterComponent} from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent, LoginformComponent, HeaderComponent, MainbodyComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
