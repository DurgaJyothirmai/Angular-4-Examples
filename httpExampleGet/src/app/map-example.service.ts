import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class MapExampleService {

  constructor(public _http: Http) { }

  getRecords() {
    return this._http.get('../assets/company.json').map(res => res.json());
  }
  
}
