import {Component} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipesService} from "../recipes.service";
import {ActivatedRoute} from "@angular/router";
import {Ingredient} from "../Ingredient";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent {

  recipe?: Recipe;
  ingredients?: Ingredient[];

  constructor(private service: RecipesService, private route: ActivatedRoute) {
    this.loadData();
  }

  loadData() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      let recipeId = parseInt(paramId);
      this.service.getRecipe(recipeId).subscribe(resp => {
        this.recipe = resp;
        this.ingredients = this.extractIngredients(resp);
      });
    }
  }

  extractIngredients(recipe:Recipe) : Ingredient[] {
    let ingredients: Ingredient[] = [];
    recipe.instructions.forEach( instruction => {
      instruction.ingredients?.forEach(ing => {
        ingredients.push(ing);
      })
      }
    );
    return ingredients;
  }
}
