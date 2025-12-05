import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientModule } from '../ingredient/ingredient.module';
import { RecipeService } from './recipe.service';
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecipeListComponent, RecipeDetailComponent],
  imports: [CommonModule, IngredientModule, AppRoutingModule, RouterModule, FormsModule],
  providers: [RecipeService],
  exports: [RecipeListComponent, RecipeDetailComponent],
})
export class RecipeModule {}
