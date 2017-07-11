import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [CategoryService]
})
export class MainPageComponent implements OnInit {

  categories: FirebaseListObservable<any[]>;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    console.log(this.categories);
  }

}
