import { Input, TemplateRef, Component } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { MatSidenav } from "@angular/material";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  @Input() sidenavReference;
  mobileQuery: MediaQueryList;

  constructor() {}

  toggleSidenav() {
    if (this.sidenavReference && this.sidenavReference.toggle) {
      this.sidenavReference.toggle();
    }
  }
}
