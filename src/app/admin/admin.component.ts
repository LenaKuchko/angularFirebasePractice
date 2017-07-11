import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CategoryService]
})
export class AdminComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  submitForm(name: string) {
    console.log(name);
    var newCategory: Category = new Category(name);
    console.log(newCategory);
    this.categoryService.addCategory(newCategory);
  }

}
