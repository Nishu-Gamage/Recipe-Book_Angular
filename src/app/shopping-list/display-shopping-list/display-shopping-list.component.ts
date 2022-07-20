import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-shopping-list',
  templateUrl: './display-shopping-list.component.html',
  styleUrls: ['./display-shopping-list.component.css']
})
export class DisplayShoppingListComponent implements OnInit {

  @Input("displayShoppingList") element: {type:string , name:string , content:string } = {
    type : '',
    name : '',
    content : ''
  }
  constructor() { }
  ngOnInit(): void {  }

}
