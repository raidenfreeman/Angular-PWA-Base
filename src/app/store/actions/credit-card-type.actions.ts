import { Action } from "@ngrx/store";
import { CreditCard, CardType } from "../../model";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export const enum CreditCardTypeActionTypes {
  LoadCardTypes = "[CreditCardType] LoadCardTypes",
  LoadCardTypesComplete = "[CreditCardType] LoadCardTypesComplete",
  LoadCardTypesError = "[CreditCardType] LoadCardTypesError"
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadCardTypes implements Action {
  readonly type = CreditCardTypeActionTypes.LoadCardTypes;
}

export class LoadCardTypesComplete implements Action {
  readonly type = CreditCardTypeActionTypes.LoadCardTypesComplete;

  constructor(public payload: CardType[]) {}
}

export class LoadCardTypesError implements Action {
  readonly type = CreditCardTypeActionTypes.LoadCardTypesError;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type CreditCardTypeActions =
  | LoadCardTypes
  | LoadCardTypesComplete
  | LoadCardTypesError;
