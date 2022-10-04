import { Component, EventEmitter, Input, OnInit, Output, OnChanges,  SimpleChanges } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit, OnChanges{

  @Input() recipe:Recipe | undefined ;
  @Output() recipeSelected = new EventEmitter <void> ();

  constructor() { }
  ngOnInit(): void { }

  onSelect(){ 
    this.recipeSelected.emit();
  }

  ngOnChanges(change:SimpleChanges): void {
    console.log(change);
  }

}