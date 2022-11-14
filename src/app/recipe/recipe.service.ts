import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{

     recipeSelected = new EventEmitter <Recipe> ();

     recipes:Recipe[] = [
          new Recipe("Cheese Pizza", "Cheese Pizza Recipe", "https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=800&height=800"),
          new Recipe("Meat Pizza", "Meat Pizza Recipe", "https://www.jessicagavin.com/wp-content/uploads/2022/02/meat-lovers-pizza-28-1200.jpg"),
          new Recipe("Margherita Pizza", "Margherita Pizza Recipe", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8PM-iw8H7Js0B7uVpZKp0eXK87c5U45UFUxOb3PNAILlA-mSqoFJcdBxYPh9OmyIWUE&usqp=CAU")
     ] 

     getRecipes(){
          return this.recipes.slice();
     }
}