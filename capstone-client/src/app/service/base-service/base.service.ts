import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class BaseService {
  constructor() { }
  showLoginForm() {
    document.getElementById('openModalButton').click();
  }
}
