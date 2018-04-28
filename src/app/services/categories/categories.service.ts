import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Category } from "../../model";


@Injectable()
export class CategoriesService {
  private _serviceUrl = "http://localhost:3000/categories"; // URL to web api

  constructor(private http: Http) {}

  getCategories(): Observable<Category[]> {
    let url = this._serviceUrl;
    return this.http.get(url).map(res => {
      console.log("boom");
      return res.json();
    });
  }
}
