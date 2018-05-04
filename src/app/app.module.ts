import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Http, HttpModule } from "@angular/http";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  CategoriesComponent,
  CreditCardComponent,
  FooterComponent,
  NavbarComponent,
  QuestionsComponent,
  TagsComponent
} from "./components";
import { CardFormComponent } from "./components/cards/card-form/card-form.component";
import { AppRoutingModule } from "./routing/app-routing.module";
import {
  CategoriesService,
  CreditCardService,
  QuestionsService
} from "./services";
import { EffectsModule } from "@ngrx/effects";
import * as EffectsBarrel from "./store/effects";
import { creditCardReducer, cardTypeReducer } from "./store/reducers";
// import

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    TagsComponent,
    QuestionsComponent,
    CreditCardComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      cardTypes: cardTypeReducer,
      creditCards: creditCardReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    EffectsModule.forRoot([
      EffectsBarrel.CreditCardTypeEffects,
      EffectsBarrel.CreditCardEffects
    ])
  ],
  providers: [CategoriesService, QuestionsService, CreditCardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
