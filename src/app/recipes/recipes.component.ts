import { Component } from '@angular/core';
import {recipetList} from "../mocks/recepten-mock";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less']
})
export class RecipesComponent {
  recipes = recipetList;
}
