import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HeaderService {

  constructor(public _http:Http) { }

  getPersonalRecords() {
    return this._http.get('../assets/personalRecords.json').map(res => res.json());
  }

}
