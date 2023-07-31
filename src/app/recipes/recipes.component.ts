import { Component } from '@angular/core';
import {recipetList} from "../mocks/recepten-mock";
import {RecipesService} from "./recipes.service";
import {Recipe} from "./recipe";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less']
})
export class RecipesComponent {

  recipes: Recipe[] = [];

  constructor(private service: RecipesService) {
    this.getRecipes();
  }

  getRecipes() {
    this.service.getRecipes().subscribe(data => this.recipes = data);
  }

}
