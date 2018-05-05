import {
  Component,
  ChangeDetectorRef,
  OnDestroy,
  ViewChild
} from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  items;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    db: AngularFirestore
  ) {
    this.items = db.collection("items").valueChanges();
    this.mobileQuery = media.matchMedia("(max-width: 55rem)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  isSideNavExpanded = true;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
