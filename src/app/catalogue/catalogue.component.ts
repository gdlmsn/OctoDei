import { CatalogueDetailComponent } from './../catalogue-detail/catalogue-detail.component';
import { Category } from './../category';
import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from './../mock-categories';



@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  categories = CATEGORIES;

  selectedCategory: Category;

  constructor() { }

  ngOnInit() {
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }
}
