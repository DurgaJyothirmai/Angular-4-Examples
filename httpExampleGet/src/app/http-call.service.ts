import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpCallService {

  constructor(public _http: Http) { }

  getCustomerDetails() {
    return this._http.get('https://www.w3schools.com/angular/customers.php');
  }

}
