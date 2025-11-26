import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  
  @Input() recipe!: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService 
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getRecipeDetail(id);
  }

  getRecipeDetail(id: number) : void {
    this.recipeService.getRecipeDetail(id).subscribe(
      r => {this.recipe = r}
    );
  }

  getMayorCantidad() : string {
    let max = 0;
    let ing = ""
    this.recipe.ingredientes.forEach(i => {
      let cant = Number(i.cantidad);
      if ( cant > max) {
        max = cant
        ing = i.nombre
      }
    });
    return ing;
  }

}
