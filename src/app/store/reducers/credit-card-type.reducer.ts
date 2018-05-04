import { CardType } from "../../model";
import { CreditCardTypeActions, CreditCardTypeActionTypes } from "../actions";
export function cardTypeReducer(state = [], action: CreditCardTypeActions) {
  switch (action.type) {
    case CreditCardTypeActionTypes.LoadCardTypesComplete: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
