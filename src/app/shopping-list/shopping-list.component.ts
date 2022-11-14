import { Component, OnInit } from '@angular/core';
import { Ingredient } from './Ingredients';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingList : Ingredient[];

  addtoShoppingL(ingredient:Ingredient){
    // this.shoppingList.push( ingredient )
  }

  constructor(private shoppingListS : ShoppingListService) { }

  ngOnInit(): void { 
    this.shoppingList = this.shoppingListS.getIngredients();
  }

}