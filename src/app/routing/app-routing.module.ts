import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import {
//   QuestionsComponent,
//   QuestionAddUpdateComponent,
//   CategoriesComponent,
//   TagsComponent
// } from "../components";
import { RouterModule } from "@angular/router";
import { routes } from "./app.route";

@NgModule({
  imports: [
    CommonModule,
    // QuestionsComponent,
    // QuestionAddUpdateComponent,
    // CategoriesComponent,
    // TagsComponent,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
