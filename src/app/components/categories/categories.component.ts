import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MatTableDataSource } from "@angular/material";
import { Subscription } from "rxjs/Subscription";
import { DataSource } from "@angular/cdk/table";
import { CategoriesService } from "../../services";
import { Category } from "../../model";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit, OnDestroy {
  // categories$: Observable<Category[]>;
  // private subscription: Subscription;
  constructor(private categoriesService: CategoriesService) {}
  displayedColumns = ["id", "categoryName"];
  tableDataSource = new CategoryDataSource(this.categoriesService);

  ngOnInit() {
    // this.categories$ = this.categoriesService.getCategories();
    // this.categories$.subscribe(
    //   x => (this.tableDataSource = new MatTableDataSource<Category>(x))
    // );
    // this.subscription = this.categoriesService.getCategories().subscribe(
    //   categoryArray => (this.tableDataSource.data = categoryArray)
    // );
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
class CategoryDataSource extends DataSource<any> {
  constructor(private userService: CategoriesService) {
    super();
  }
  connect(): Observable<Category[]> {
    return this.userService.getCategories();
  }
  disconnect() {}
}
