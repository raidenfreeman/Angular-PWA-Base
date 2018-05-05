import {
  Component,
  OnInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/core";
import { CreditCard, CardType } from "../../../model";

const enum buttonStates {
  initial = "initial",
  activated = "activated"
}

@Component({
  selector: "app-create-card",
  templateUrl: "./create-card.component.html",
  styleUrls: ["./create-card.component.scss"],
  animations: [
    trigger("btnState", [
      state(
        buttonStates.initial,
        style({
          backgroundColor: "#c2185b",
          height: "4em",
          width: "4em",
          borderRadius: "50%"
        })
      ),
      state(
        buttonStates.activated,
        style({
          backgroundColor: "#424242",
          height: "30em",
          width: "27em",
          borderRadius: "0 2em 0 2em"
        })
      ),
      transition(
        `${buttonStates.initial} => ${buttonStates.activated}`,
        animate("400ms ease-in")
      ),
      transition(
        `${buttonStates.activated} => ${buttonStates.initial}`,
        animate("400ms ease-out")
      )
    ])
  ]
})
export class CreateCardComponent implements OnInit {
  @Input() cardTypes: CardType[];
  newCard = new CreditCard();
  buttonState = buttonStates.initial;
  showButton: boolean = true;

  constructor() {}

  ngOnInit() {}

  addCard() {
    this.buttonState = this.invertState(this.buttonState);
  }

  boom() {
    this.showButton = true;
    this.buttonState = buttonStates.initial;
    console.log("nani");
  }
  invertState(state: buttonStates) {
    if (state === buttonStates.initial) {
      return buttonStates.activated;
    } else {
      return buttonStates.initial;
    }
  }
  animationDone($event) {
    if (this.buttonState == buttonStates.activated) {
      this.showButton = false;
    } else {
      this.showButton = true;
    }
  }
}
