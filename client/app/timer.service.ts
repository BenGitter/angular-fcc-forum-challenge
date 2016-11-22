import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TimerService {

  constructor(private _http:Http) { }

  getStatus(){
    return this._http.get("/api")
      .map(res => res.json());
  }
}
