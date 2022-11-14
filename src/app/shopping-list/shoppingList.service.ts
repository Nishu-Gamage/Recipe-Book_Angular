import { EventEmitter } from "@angular/core";
import { Ingredient } from "./Ingredients";

export class ShoppingListService {

     ingredientChange = new EventEmitter <Ingredient[]> () ;

     private shoppingList: Ingredient[] = [
          new Ingredient("Apple", 10),
          new Ingredient("Banana", 20)
     ];

     getIngredients(){
          return this.shoppingList.slice();
     }

     addShoppingIngredients(ingredient : Ingredient){
          this.shoppingList.push(ingredient);
          this.ingredientChange.emit(this.shoppingList.slice());
     }
}