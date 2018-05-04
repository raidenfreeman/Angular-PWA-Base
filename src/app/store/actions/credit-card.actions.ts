import { Action } from "@ngrx/store";
import { CreditCard } from "../../model";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export const enum CreditCardActionTypes {
  LoadCardsError = "[CreditCard] Load Cards Error",
  LoadCards = "[CreditCard] Load Cards",
  LoadCardsComplete = "[CreditCard] Load Cards Complete",
  UpdateCard = "[CreditCard] Update Card",
  UpdateCardComplete = "[CreditCard] Update Card Complete",
  UpdateCardError = "[CreditCard] Update Card Error",
  CreateCard = "[CreditCard] Create Card",
  CreateCardComplete = "[CreditCard] Create Card Complete",
  CreateCardError = "[CreditCard] Create Card Error"
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

export class UpdateCard implements Action {
  readonly type = CreditCardActionTypes.UpdateCard;

  constructor(public payload: CreditCard) {}
}

export class UpdateCardComplete implements Action {
  readonly type = CreditCardActionTypes.UpdateCardComplete;

  constructor(public payload: CreditCard) {}
}

export class UpdateCardError implements Action {
  readonly type = CreditCardActionTypes.UpdateCardError;

  constructor(public payload: string) {}
}

export class CreateCard implements Action {
  readonly type = CreditCardActionTypes.CreateCard;

  constructor(public payload: CreditCard) {}
}

export class CreateCardComplete implements Action {
  readonly type = CreditCardActionTypes.CreateCardComplete;

  constructor(public payload: CreditCard) {}
}

export class CreateCardError implements Action {
  readonly type = CreditCardActionTypes.CreateCardError;

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
  | UpdateCard
  | UpdateCardComplete
  | UpdateCardError
  | CreateCard
  | CreateCardComplete
  | CreateCardError;
