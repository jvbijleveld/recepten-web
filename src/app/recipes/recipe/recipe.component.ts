import {Component} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipesService} from "../recipes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent {

  recipe?: Recipe;

  constructor(private service: RecipesService, private route: ActivatedRoute) {
    this.loadData();
  }

  loadData() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      let recipeId = parseInt(paramId);
      this.service.getRecipe(recipeId).subscribe(resp => this.recipe = resp);
    }
  }

}
