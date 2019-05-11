import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 
      'This is simply a test', 
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'A Test Recipe 2', 
      'This is simply a test', 
      'https://ob8qxdtnu3-flywheel.netdna-ssl.com/wp-content/uploads/2019/01/Instant-Pot-Wild-Rice-Soup-006.jpg',
      [
        new Ingredient('Buns', 2)
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}