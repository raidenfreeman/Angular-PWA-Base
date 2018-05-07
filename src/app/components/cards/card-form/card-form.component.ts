import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from "@angular/animations";
import { CreditCard, CardType } from "../../../model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import "rxjs/add/operator/catch";
import { Store } from "@ngrx/store";
import { UpdateCard, CreateCard } from "../../../store/actions";
import { CreditCardService } from "../../../services";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"],
  animations: [
    trigger("flyInOut", [
      state("in", style({ transform: "translateX(0)" })),
      state("out", style({ transform: "translateX(-100%)" })),
      transition("in => out", [
        animate(
          300,
          keyframes([
            style({ opacity: 1, transform: "translateX(0)", offset: 0 }),
            style({ opacity: 1, transform: "translateX(10%)", offset: 0.7 }),
            style({ opacity: 0, transform: "translateX(-100%)", offset: 1.0 })
          ])
        )
      ]),
      transition("out => in", [
        animate(
          300,
          keyframes([
            style({ opacity: 0, transform: "translateX(-100%)", offset: 0 }),
            style({ opacity: 1, transform: "translateX(10%)", offset: 0.3 }),
            style({ opacity: 1, transform: "translateX(0)", offset: 1.0 })
          ])
        )
      ])
    ])
  ]
})
export class CardFormComponent implements OnInit {
  @Input() card: CreditCard;
  @Input() edit: boolean;
  @Input() cardTypes: CardType[];
  @Output() onCancel= new EventEmitter();
  // @Output() onFormSubmition = new EventEmitter<CreditCard>();
  creditCardForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: CreditCardService) {}

  ngOnInit() {
    this.creditCardForm = this.buildForm(this.formBuilder, this.card);
  }

  onSubmit() {
    if (this.creditCardForm.invalid) {
      return;
    }
    if (this.edit) {
      // this.creditCardForm.valueChanges
      this.service.updateCreditCard(this.creditCardForm.value);
      // this.store.dispatch(new UpdateCard(this.creditCardForm.value));
    }
    else{
      this.service.createCreditCard(this.creditCardForm.value);
      // this.store.dispatch(new CreateCard(this.creditCardForm.value));
    }
  }
  cancel() {
    if (this.edit) {
      return;
    }
    this.onCancel.emit();
  }

  buildForm(fb: FormBuilder, card: CreditCard) {
    return fb.group({
      id: [card.id],
      name: [card.name, Validators.required],
      description: card.description,
      issuingOrganization: card.issuingOrganization,
      commissionPercentage: [card.commissionPercentage, Validators.required],
      commissionFixed: [card.commissionFixed, Validators.required],
      type: [card.type, Validators.required]
    });
  }
}
