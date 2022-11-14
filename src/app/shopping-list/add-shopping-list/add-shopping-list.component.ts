import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../Ingredients';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-add-shopping-list',
  templateUrl: './add-shopping-list.component.html',
  styleUrls: ['./add-shopping-list.component.css']
})
export class AddShoppingListComponent implements OnInit {

  name:string ='';
  amount:number = 0;
  emptyError = false;

  @Output() addShopping = new EventEmitter <Ingredient> () ;

  addShoppingList(){
    if(this.name && this.amount > 0){
      const newIngredient = new Ingredient (this.name, this.amount)  
      this.shoppingListService.addShoppingIngredients(newIngredient);
      this.emptyError = false;
      this.name =''; this.amount = 0;
    } 
    else { this.emptyError = true; }
  }
  
  clearForm(){
    this.emptyError = false;
    this.name =''; this.amount = 0;
  }

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void { }

}