import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { recipeData } from '../recipeData';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  selected: Boolean = false;
  selectedRecipe: Recipe | null = null;
  
  filtro: string = "";
  recipesNoFiltro: Recipe[] = [];


  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.getRecipes();
  }

  onSelect(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.selected = true;
  }

  getRecipes() : void {
    this.recipeService.getRecipes()
      .subscribe(recipes => {
        this.recipes = recipes;
        this.recipesNoFiltro = recipes;
      });
  }

  filtrarRecetas() {
    let text = this.filtro.toLowerCase().trim();

    if (text === "") {
      this.recipes = this.recipesNoFiltro; 
    return;
    }
  
    this.recipes = this.recipesNoFiltro.filter(receta =>
      receta.ingredientes.some(ingrediente =>
      ingrediente.nombre.toLowerCase().includes(text))
    );
  }

}
