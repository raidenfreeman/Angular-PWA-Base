import { Component, OnInit, Input, Output } from "@angular/core";
import { CreditCard, CardType } from "../../../model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CreditCardService } from "../../../services";
import { Router } from "@angular/router";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"]
})
export class CardFormComponent implements OnInit {
  @Input() card: CreditCard;
  @Input() cardTypes: CardType[];
  // @Output() onFormSubmition = new EventEmitter<CreditCard>();
  creditCardForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private cardService: CreditCardService,
    private router: Router
  ) {}

  ngOnInit() {
    this.creditCardForm = this.buildForm(this.formBuilder);
  }

  onSubmit() {
    if (this.creditCardForm.invalid) {
      return;
    }
    const newCard = this.getCardFromValue(this.creditCardForm.value);
    this.cardService &&
      this.cardService
        .updateCreditCard(newCard)
        .subscribe(_ => this.router.navigate(["/cards"]));
  }

  getCardFromValue(formValue: any): CreditCard {
    return Object.assign({ id: this.card.id }, formValue);
  }

  buildForm(fb: FormBuilder) {
    return fb.group({
      name: [this.card.name, Validators.required],
      description: this.card.description,
      issuingOrganization: this.card.issuingOrganization,
      commissionPercentage: this.card.commissionPercentage,
      commissionFixed: this.card.commissionFixed,
      type: this.card.type
    });
  }
}
