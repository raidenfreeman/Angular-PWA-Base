import { CardType } from "../../model";
import { CreditCardTypeActions, CreditCardTypeActionTypes } from "../actions";

export interface State {
  cardTypes: CardType[];
}

const initialState: State = {
  cardTypes: []
};

export function cardTypeReducer(
  state = initialState,
  action: CreditCardTypeActions
): State {
  switch (action.type) {
    case CreditCardTypeActionTypes.LoadCardTypesComplete: {
      return Object.assign({}, state, { cardTypes: action.payload });
    }

    default: {
      return state;
    }
  }
}
