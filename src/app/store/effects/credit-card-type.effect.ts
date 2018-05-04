import { of } from "rxjs/observable/of";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { CreditCardService } from "../../services";
import {
  CreditCardTypeActionTypes,
  LoadCardTypes,
  LoadCardTypesComplete,
  LoadCardsError
} from "../actions";
import { exhaustMap, map, catchError } from "rxjs/operators";

@Injectable()
export class CreditCardTypeEffects {
  @Effect()
  loadCreditCardTypes$ = this.actions$.pipe(
    ofType(CreditCardTypeActionTypes.LoadCardTypes),
    exhaustMap((action: LoadCardTypes) =>
      this.service
        .getCardTypes()
        .pipe(
          map(result => new LoadCardTypesComplete(result)),
          catchError(error => of(new LoadCardsError(error)))
        )
    )
  );
  constructor(private actions$: Actions, private service: CreditCardService) {}
}
