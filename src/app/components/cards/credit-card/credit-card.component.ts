import { Component, OnInit } from "@angular/core";
import { CreditCard } from "../../../model/credit-card";
import { CreditCardService } from "../../../services";
import { CardType } from "../../../model";
import { Subscription } from "rxjs/Subscription";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-credit-card",
  templateUrl: "./credit-card.component.html",
  styleUrls: ["./credit-card.component.css"]
})
export class CreditCardComponent implements OnInit {
  creditCards: CreditCard[];
  creditCardTypes: CardType[];

  creditCardForm;
  constructor(
    private creditCardService: CreditCardService,
    private formBuilder: FormBuilder
  ) {}

  private subArray: Subscription[] = [];
  ngOnInit() {
    this.subArray.push(
      this.creditCardService
        .getCreditCards()
        .subscribe(res => (this.creditCards = res))
    );
    this.subArray.push(
      this.creditCardService
        .getCardTypes()
        .subscribe(res => (this.creditCardTypes = res))
    );
    this.creditCardForm = this.buildForm(this.formBuilder);
  }

  buildForm(fb: FormBuilder) {
    return fb.group({
      name: ["", Validators.required],
      description: "",
      issuingOrganization: "",
      commissionPercentage: 0,
      commissionFixed: 0,
      type: ""
    });
  }

  ngOnDestroy() {
    this.subArray.forEach(subscription => subscription.unsubscribe());
  }
}
