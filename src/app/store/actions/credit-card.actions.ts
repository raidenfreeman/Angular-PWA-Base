import { Action } from "@ngrx/store";
import { CreditCard } from "../../model";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export const enum CreditCardActionTypes {
  LoadCardsError = "[CreditCard] LoadCardsError",
  LoadCards = "[CreditCard] LoadCards",
  LoadCardsComplete = "[CreditCard] LoadCardsComplete",
  SaveCards = "[CreditCard] SaveCards",
  SaveCardsComplete = "[CreditCard] SaveCardsComplete",
  SaveCardsError = "[CreditCard] SaveCardsError"
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadCards implements Action {
  readonly type = CreditCardActionTypes.LoadCards;
}

export class LoadCardsComplete implements Action {
  readonly type = CreditCardActionTypes.LoadCardsComplete;

  constructor(public payload: CreditCard[]) {}
}

export class LoadCardsError implements Action {
  readonly type = CreditCardActionTypes.LoadCardsError;

  constructor(public payload: string) {}
}

export class SaveCards implements Action {
  readonly type = CreditCardActionTypes.SaveCards;

  constructor(public payload: CreditCard) {}
}

export class SaveCardsComplete implements Action {
  readonly type = CreditCardActionTypes.SaveCardsComplete;

  constructor(public payload: string) {}
}

export class SaveCardsError implements Action {
  readonly type = CreditCardActionTypes.SaveCardsError;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type CreditCardActions =
  | LoadCards
  | LoadCardsComplete
  | LoadCardsError
  | SaveCards
  | SaveCardsComplete
  | SaveCardsError;
