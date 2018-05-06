import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { CreditCard } from "../../model/credit-card";
import { CardType } from "../../model";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { fromPromise } from "rxjs/observable/fromPromise";
import { Store } from "@ngrx/store";
import { AppState } from "../../components";
import { CreateCardComplete, CreateCardError } from "../../store/actions";

@Injectable()
export class CreditCardService {
  private _serviceUrlCards: string = "http://localhost:3000/cards";
  private _serviceUrlTypes: string = "http://localhost:3000/cardTypes";

  private cardTypesCollection: AngularFirestoreCollection<CardType>;
  private cardsCollection: AngularFirestoreCollection<CreditCard>;
  constructor(
    private http: Http,
    private db: AngularFirestore,
    private store: Store<AppState>
  ) {
    this.cardTypesCollection = this.db.collection<CardType>("cardTypes");
    this.cardsCollection = this.db.collection<CreditCard>("cards");
  }

  getCreditCards(): Observable<CreditCard[]> {
    return this.cardsCollection.snapshotChanges().map(actions =>
      actions.map(a => {
        const data = a.payload.doc.data() as CreditCard;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    );
  }
  getCardTypes(): Observable<CardType[]> {
    return this.cardTypesCollection.snapshotChanges().map(actions =>
      actions.map(a => {
        const data = a.payload.doc.data() as CardType;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    );
  }
  createCreditCard(card: CreditCard) {
    const newCard = this.removeId(card);
    this.cardsCollection.add(newCard);
    // .then(res => {
    //   this.store.dispatch(new CreateCardComplete(card));
    // })
    // .catch(err => this.store.dispatch(new CreateCardError(err)));
    // let url = this._serviceUrlCards;
    // return this.http.post(url, card).map(res => res.json());
  }
  updateCreditCard(card: CreditCard) {
    this.cardsCollection.doc(card.id).update(card);
    // .then(res => {
    //   this.store.dispatch(new CreateCardComplete(card));
    // })
    // .catch(err => this.store.dispatch(new CreateCardError(err)));

    // let url = this._serviceUrlCards + "/" + card.id;
    // return this.http.put(url, card).map(res => res.json());
  }

  private removeId(o: any): any {
    const { id, ...objectWithoutId } = o;
    return objectWithoutId;
  }
}
