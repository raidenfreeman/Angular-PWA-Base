import { combineReducers } from "@ngrx/store";
import { compose } from "@ngrx/core/compose";
import { CardType } from "../model";
import * as fromCardTypeReducer from "./reducers/credit-card-type.reducer";

export interface AppStore {
  cardTypes: CardType[];
}
export default compose(combineReducers)({
  categories: fromCardTypeReducer
});
