import { Component, EventEmitter, Input, OnInit, Output, OnChanges,  SimpleChanges } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit, OnChanges{

  @Input() recipe:Recipe | undefined ;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void { }

  onSelect(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  ngOnChanges(change:SimpleChanges): void {
    console.log(change);
  }

}