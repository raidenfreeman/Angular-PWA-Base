import { Routes } from "@angular/router";
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { QuestionsComponent } from './questions/questions.component';

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
    path: "**",
    redirectTo: "/categories",
    pathMatch: "full"
  }
];
