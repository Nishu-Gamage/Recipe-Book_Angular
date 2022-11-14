import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { AddShoppingListComponent } from './shopping-list/add-shopping-list/add-shopping-list.component';
import { DisplayShoppingListComponent } from './shopping-list/display-shopping-list/display-shopping-list.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { FormsModule } from '@angular/forms';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './navbar/shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shoppingList.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    AddShoppingListComponent,
    DisplayShoppingListComponent,
    AddRecipeComponent,
    RecipeDetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
