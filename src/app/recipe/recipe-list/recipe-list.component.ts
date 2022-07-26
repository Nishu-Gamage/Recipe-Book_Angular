import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter <Recipe> (); 

  recipes:Recipe[] = [
    new Recipe("Cheese Pizza", "Cheese Pizza Recipe", "https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=800&height=800"),
    new Recipe("Meat Pizza", "Meat Pizza Recipe", "https://www.jessicagavin.com/wp-content/uploads/2022/02/meat-lovers-pizza-28-1200.jpg"),
    new Recipe("Margherita Pizza", "Margherita Pizza Recipe", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8PM-iw8H7Js0B7uVpZKp0eXK87c5U45UFUxOb3PNAILlA-mSqoFJcdBxYPh9OmyIWUE&usqp=CAU")
  ] 

  onRecipeSelected(arrayData:Recipe){
    this.recipeWasSelected.emit(arrayData);
  }

  constructor() { }
  ngOnInit(): void {  }

}
