import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingList:any = [];

  addtoShoppingL(addSData:{ addSName:string , addSAmount:string }){
    this.shoppingList.push({
      type : 'Add',
      name : addSData.addSName , 
      content : addSData.addSAmount
    })
  }

  constructor() { }
  ngOnInit(): void {  }

}