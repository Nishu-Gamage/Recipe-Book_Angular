import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../Ingredients';

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
      this.addShopping.emit( newIngredient )
      this.emptyError = false;
      this.name =''; this.amount = 0;
    } 
    else { this.emptyError = true; }
  }
  
  clearForm(){
    this.emptyError = false;
    this.name =''; this.amount = 0;
  }

  constructor() { }
  ngOnInit(): void {  }

}