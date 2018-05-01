import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { CreditCard } from "../../model/credit-card";
import { CardType } from "../../model";

@Injectable()
export class CreditCardService {
  private _serviceUrlCards: string = "http://localhost:3000/cards";
  private _serviceUrlTypes: string = "http://localhost:3000/cardTypes";

  constructor(private http: Http) {}

  getCreditCards(): Observable<CreditCard[]> {
    return this.http.get(this._serviceUrlCards).map(res => res.json());
  }
  getCardTypes(): Observable<CardType[]> {
    return this.http.get(this._serviceUrlTypes).map(res => res.json());
  }
}
