import { of } from "rxjs/observable/of";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { CreditCardService } from "../../services";
import {
  CreditCardActionTypes,
  LoadCardsComplete,
  LoadCardsError,
  LoadCards,
  UpdateCard,
  UpdateCardComplete,
  UpdateCardError,
  CreateCard,
  CreateCardComplete,
  CreateCardError
} from "../actions";
import { exhaustMap, map, catchError } from "rxjs/operators";

@Injectable()
export class CreditCardEffects {
  @Effect()
  loadCreditCards$ = this.actions$.pipe(
    ofType(CreditCardActionTypes.LoadCards),
    exhaustMap((action: LoadCards) =>
      this.service
        .getCreditCards()
        .pipe(
          map(result => new LoadCardsComplete(result)),
          catchError(error => of(new LoadCardsError(error)))
        )
    )
  );

  @Effect()
  updateCreditCard$ = this.actions$.pipe(
    ofType(CreditCardActionTypes.UpdateCard),
    exhaustMap((action: UpdateCard) =>
      this.service
        .updateCreditCard(action.payload)
        .pipe(
          map(result => new UpdateCardComplete(result)),
          catchError(error => of(new UpdateCardError(error)))
        )
    )
  );

  @Effect()
  createCreditCard$ = this.actions$.pipe(
    ofType(CreditCardActionTypes.CreateCard),
    exhaustMap((action: CreateCard) =>
      this.service
        .createCreditCard(action.payload)
        .pipe(
          map(result => new CreateCardComplete(result)),
          catchError(error => of(new CreateCardError(error)))
        )
    )
  );
  constructor(private actions$: Actions, private service: CreditCardService) {}
}
