import { Component, OnInit } from '@angular/core';
import { Ingredient } from './Ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingList:Ingredient[] = [
    new Ingredient("Apple", 10 ),
    new Ingredient("Banana", 20)
  ];

  addtoShoppingL(ingredient:Ingredient){
    this.shoppingList.push( ingredient )
  }

  constructor() { }
  ngOnInit(): void {  }

}