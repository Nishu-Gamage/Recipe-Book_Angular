import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-shopping-list',
  templateUrl: './add-shopping-list.component.html',
  styleUrls: ['./add-shopping-list.component.css']
})
export class AddShoppingListComponent implements OnInit {

  add_Name:string ='';
  add_Amount:string = '';
  emptyError = false;

  @Output() addShopping = new EventEmitter <{ addSName:string , addSAmount:string }> ();

  addShoppingList(){
    if(this.add_Name && this.add_Amount){
      this.addShopping.emit({        
        addSName : this.add_Name,
        addSAmount : this.add_Amount        
      })
      this.emptyError = false;
      this.add_Name =''; this.add_Amount ='';
    } 
    else { this.emptyError = true; }
  }

  clearForm(){
    this.emptyError = false;
    this.add_Name =''; this.add_Amount ='';
  }

  constructor() { }
  ngOnInit(): void {  }

}