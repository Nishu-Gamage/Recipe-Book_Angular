import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../Ingredients';

@Component({
  selector: 'app-display-shopping-list',
  templateUrl: './display-shopping-list.component.html',
  styleUrls: ['./display-shopping-list.component.css']
})
export class DisplayShoppingListComponent implements OnInit {

  @Input("displayShoppingList") element:Ingredient | undefined; 
  
  constructor() { }
  ngOnInit(): void { }

  onSelectShoopingItem(){

  }

}