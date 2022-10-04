import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {

  @Input() recipeItem:Recipe | undefined;

  constructor() { }
  ngOnInit(): void { }

  ngOnChanges(change:SimpleChanges): void {
    console.log(change);
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }

}