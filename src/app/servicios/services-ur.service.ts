import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
@Injectable()
export class ServicesUrService {
  public urlComite = 'http://127.0.0.1:8004/lcperformance/comite/';
  constructor(private _http: Http) { }
  getComite() {
    return this._http.get(this.urlComite)
    .map(res => res.json());
  }

}
