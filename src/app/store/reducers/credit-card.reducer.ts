import { CreditCard } from "../../model";
import { CreditCardActionTypes, CreditCardActions } from "../actions";
import { stat } from "fs";

export function creditCardReducer(state = [], action: CreditCardActions) {
  switch (action.type) {
    case CreditCardActionTypes.LoadCardsComplete: {
      return action.payload;
    }
    case CreditCardActionTypes.UpdateCardComplete: {
      let newCards = state.map(
        card => (card.id === action.payload.id ? action.payload : card)
      );
      return newCards;
    }
    case CreditCardActionTypes.CreateCardComplete: {
      let newCards = state.slice();
      newCards.push(action.payload);
      return newCards;
    }
    default: {
      return state;
    }
  }
}
