import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class PostexampleService {

  constructor(private _http: Http) { }

  getProfile() {
    let _url = 'https://reqres.in/api/users';
   return this._http.post(_url,{name:'Jyothi',job:'Developer'}).map((res:Response) => res.json());
  }

}
