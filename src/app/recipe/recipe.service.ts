import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

constructor(private http: HttpClient) { }

getRecipes() : Observable<Recipe[]> {
  return this.http.get<Recipe[]>('recipe.json');
}

getRecipeDetail(id: number) : Observable<Recipe> {
  return this.getRecipes().pipe(
    map((recipes: Recipe[]) => recipes.find(r => r.id == id) as Recipe
    )
  );
}
}
