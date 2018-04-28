import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Question } from "../model/question";

@Injectable()
export class QuestionsService {
  private _serviceUrl = "http://localhost:3000/questions";
  constructor(private http: Http) {}
  getQuestions(): Observable<Question[]> {
    return this.http.get(this._serviceUrl).map(res => res.json());
  }
}
