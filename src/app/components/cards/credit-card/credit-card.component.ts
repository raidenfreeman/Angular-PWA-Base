import { Component, OnInit } from "@angular/core";
import { CreditCard } from "../../../model/credit-card";
import { CreditCardService } from "../../../services";
import { Observable } from "rxjs/Observable";
import { CardType } from "../../../model";
import "rxjs/add/operator/take";
import { Store } from "@ngrx/store";
import * as fromCardTypeReducer from "../../../store/reducers/credit-card-type.reducer";
import { LoadCardTypes } from "../../../store/actions";

@Component({
  selector: "app-credit-card",
  templateUrl: "./credit-card.component.html",
  styleUrls: ["./credit-card.component.css"]
})
export class CreditCardComponent implements OnInit {
  constructor(
    private creditCardService: CreditCardService,
    private store: Store<fromCardTypeReducer.State>
  ) {}

  creditCards$: Observable<CreditCard[]>;
  creditCards: CreditCard[];
  creditCardTypes: CardType[];
  types$: Observable<CardType[]>;
  ngOnInit() {
    this.store.dispatch(new LoadCardTypes());
    // this.creditCardService
    //   .getCreditCards()
    //   .take(1)
    //   .subscribe(res => (this.creditCards = res));
    this.types$ = this.store.select(x => x.cardTypes);
    // this.creditCardService
    //   .getCardTypes()
    //   .take(1)
    //   .subscribe(res => (this.creditCardTypes = res));
  }

  addCard() {
    this.creditCards.push(new CreditCard());
  }
}
