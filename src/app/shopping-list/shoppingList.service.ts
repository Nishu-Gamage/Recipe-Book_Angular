import { Ingredient } from "./Ingredients";

export class ShoppingListService {

     private shoppingList: Ingredient[] = [
          new Ingredient("Apple", 10),
          new Ingredient("Banana", 20)
     ];

     getIngredients(){
          return this.shoppingList.slice();
     }
}