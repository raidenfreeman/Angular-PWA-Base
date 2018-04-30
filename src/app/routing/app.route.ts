import { Routes } from "@angular/router";
import { CategoriesComponent, QuestionsComponent, TagsComponent, QuestionAddUpdateComponent } from "../components";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/categories",
    pathMatch: "full"
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "questions",
    component: QuestionsComponent
  },
  {
    path: "tags",
    component: TagsComponent
  },
  {
    path: "question/add",
    component: QuestionAddUpdateComponent
  },
  {
    path: "**",
    redirectTo: "/categories"
  }
];
