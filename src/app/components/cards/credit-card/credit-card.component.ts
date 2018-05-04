import { Component, OnInit } from "@angular/core";
import { CreditCard } from "../../../model/credit-card";
import { CreditCardService } from "../../../services";
import { Observable } from "rxjs/Observable";
import { CardType } from "../../../model";
import "rxjs/add/operator/take";
import { Store } from "@ngrx/store";
import * as fromCardTypeReducer from "../../../store/reducers/credit-card-type.reducer";
import * as fromCreditCardReducer from "../../../store/reducers/credit-card.reducer";
import { LoadCardTypes, LoadCards } from "../../../store/actions";

interface AppState {
  cardTypes: CardType[];
  creditCards: CreditCard[];
}

@Component({
  selector: "app-credit-card",
  templateUrl: "./credit-card.component.html",
  styleUrls: ["./credit-card.component.css"]
})
export class CreditCardComponent implements OnInit {
  constructor(
    private creditCardService: CreditCardService,
    private store: Store<AppState>
  ) {}

  creditCards$: Observable<CreditCard[]>;
  types$: Observable<CardType[]>;
  ngOnInit() {
    this.store.dispatch(new LoadCardTypes());
    this.store.dispatch(new LoadCards());
    this.types$ = this.store.select(x => x.cardTypes);
    this.creditCards$ = this.store.select(x => x.creditCards);
  }

  addCard() {
    // this.creditCards.push(new CreditCard());
  }
}
