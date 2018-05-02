import { Component, OnInit } from "@angular/core";
import { CreditCard } from "../../../model/credit-card";
import { CreditCardService } from "../../../services";
import { Observable } from "rxjs/Observable";
import { CardType } from "../../../model";
import "rxjs/add/operator/take";

@Component({
  selector: "app-credit-card",
  templateUrl: "./credit-card.component.html",
  styleUrls: ["./credit-card.component.css"]
})
export class CreditCardComponent implements OnInit {
  constructor(private creditCardService: CreditCardService) {}

  creditCards$: Observable<CreditCard[]>;
  creditCards: CreditCard[];
  creditCardTypes: CardType[];
  ngOnInit() {
    this.creditCardService
      .getCreditCards()
      .take(1)
      .subscribe(res => (this.creditCards = res));
    this.creditCardService
      .getCardTypes()
      .take(1)
      .subscribe(res => (this.creditCardTypes = res));
  }

  addCard() {
    this.creditCards.push(new CreditCard());
  }
}
