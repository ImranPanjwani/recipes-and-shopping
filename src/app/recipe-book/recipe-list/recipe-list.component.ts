import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes : Recipe[] = [
    new Recipe('New Recipe','Tasty recipe','https://c1.staticflickr.com/6/5683/20156435453_293cf9dde6_b.jpg'),
    new Recipe('New Recipe','Tasty recipe','https://c1.staticflickr.com/6/5683/20156435453_293cf9dde6_b.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
