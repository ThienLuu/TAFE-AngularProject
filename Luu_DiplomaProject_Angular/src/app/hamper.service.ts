import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //step1 to use service

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HamperService {

  constructor(private _http: Http) { }

  //methods 
  GetAllHampers() {
    return this._http.get("https://localhost:44377/api/hampers").map((response) => response.json());
  }

  GetAllCategories() {
    return this._http.get("https://localhost:44377/api/categories").map((response) => response.json());
  }

  SearchByCategory(id: number) {
    return this._http.get("https://localhost:44377/api/searchByCategory/" + id).map((response) => response.json());
  }
}
