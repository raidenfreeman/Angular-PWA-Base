import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Inject
} from "@angular/core";
import { CreditCard } from "../../../model/credit-card";
import { CreditCardService } from "../../../services";
import { Observable } from "rxjs/Observable";
import { CardType } from "../../../model";
import "rxjs/add/operator/take";
import { Muuri } from "muuri";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: "app-credit-card",
  templateUrl: "./credit-card.component.html",
  styleUrls: ["./credit-card.component.css"]
})
export class CreditCardComponent implements OnInit {
  @ViewChild("gridElement") gridElement: ElementRef;
  loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; ++i) {
      if (
        scripts[i].getAttribute("src") != null &&
        scripts[i].getAttribute("src").includes("loader")
      ) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = [
        // "web-animations.min.js",
        // "hammer.min.js",
        // "muuri.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/muuri/0.5.4/muuri.js"
      ];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement("script");
        node.src = dynamicScripts[i];
        node.type = "text/javascript";
        node.async = false;
        node.charset = "utf-8";
        document.getElementsByTagName("head")[0].appendChild(node);
      }
    }
  }
  loadAPI: Promise<any>;
  constructor(
    private creditCardService: CreditCardService,
    @Inject(DOCUMENT) private document: any
  ) {
    // this.loadAPI = new Promise(res => {
    //   this.loadScript();
    //   res(true);
    // });
  }
  grid: Muuri;

  private gg;
  creditCards$: Observable<CreditCard[]>;
  creditCardTypes: CardType[];
  ngOnInit() {
    // var grid = new (window as any).Muuri(".grid");
    this.creditCards$ = this.creditCardService.getCreditCards();
    this.creditCardService
      .getCardTypes()
      .take(1)
      .subscribe(res => (this.creditCardTypes = res));
    const g = this.gridElement.nativeElement;
    const docElem = this.document.documentElement;
    let dragCounter = 0;
    this.grid = new Muuri(g, {
      items: ".item",
      layoutDuration: 400,
      layoutEasing: "ease",
      dragEnabled: true,
      dragSortInterval: 50,
      dragContainer: document.body,
      dragStartPredicate: function(item, event) {
        var isDraggable = true;
        var isRemoveAction = this.elementMatches(
          event.target,
          ".card-remove, .card-remove i"
        );
        return isDraggable && !isRemoveAction
          ? Muuri.ItemDrag.defaultStartPredicate(item, event)
          : false;
      },
      dragReleaseDuration: 400,
      dragReleseEasing: "ease"
    })
      .on("dragStart", function() {
        ++dragCounter;
        docElem.classList.add("dragging");
      })
      .on("dragEnd", function() {
        if (--dragCounter < 1) {
          docElem.classList.remove("dragging");
        }
      })
      .on("move", this.updateIndices)
      .on("sort", this.updateIndices);
  }
  elementMatches(element, selector) {
    var p = Element.prototype;
    return (
      p.matches ||
      (p as any).matchesSelector ||
      p.webkitMatchesSelector ||
      (p as any).mozMatchesSelector ||
      p.msMatchesSelector ||
      (p as any).oMatchesSelector
    ).call(element, selector);
  }
  updateIndices() {
    this.grid.getItems().forEach(function(item, i) {
      item.getElement().setAttribute("data-id", i + 1);
      item.getElement().querySelector(".card-id").innerHTML = i + 1;
    });
  }
}
