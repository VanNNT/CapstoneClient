import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import {LoginService} from '../../service/login/login.service';
import {BaseService} from '../../service/base-service/base.service';

@Injectable()
export class CheckLoginGuard implements CanActivate {
  constructor(private loginService: LoginService, private baseService: BaseService) {}
  canActivate() {
    const status = this.loginService.checkLogged();
    if (!status) {
       this.baseService.showLoginForm();
    }
    return status;
  }
}
